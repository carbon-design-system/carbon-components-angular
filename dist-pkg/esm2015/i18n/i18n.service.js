/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { BehaviorSubject, isObservable, iif } from "rxjs";
import { map } from "rxjs/operators";
import { merge } from "../utils/object";
/** @type {?} */
const EN = require("./en.json");
/** *
 * Takes the `Observable` returned from `i18n.get` and an object of variables to replace.
 *
 * The keys specify the variable name in the string.
 *
 * Example:
 * ```typescript
 * service.set({ "TEST": "{{foo}} {{bar}}" });
 *
 * service.replace(service.get("TEST"), { foo: "test", bar: "asdf" })
 * ```
 *
 * Produces: `"test asdf"`
 *
 * \@param subject the translation to replace variables on
 * \@param variables object of variables to replace
  @type {?} */
export const replace = (subject, variables) => subject.pipe(map(str => {
    /** @type {?} */
    const keys = Object.keys(variables);
    for (const key of keys) {
        /** @type {?} */
        const value = variables[key];
        str = str.replace(new RegExp(`{{\\s*${key}\\s*}}`, "g"), value);
    }
    return str;
}));
/**
 * Represents an "overridable" translation value.
 *
 * Largely an internal usecase. There are situations where we want an `Observable` that
 * can emit events from a centralized source **OR** an `Observable` that will emit events
 * from a component local source. The key example being on/off text in a `Toggle` - In some cases
 * we want the `Toggle` to use `I18n`s global translations, but in others we'd prefer to use a local
 * override. We don't ever need to return to a non-overridden state, but we do need the ability to
 * switch _to_ an overridden sate.
 */
export class Overridable {
    /**
     * @param {?} path
     * @param {?} i18n
     */
    constructor(path, i18n) {
        this.path = path;
        this.i18n = i18n;
        /**
         * Our base non-overridden translation.
         */
        this.baseTranslation = this.i18n.get(this.path);
        /**
         * A boolean to flip between overridden and non-overridden states.
         */
        this.isOverridden = false;
        /** *
         * ensure `$override` is initialized with the correct default value
         * in some cases `_value` can get changed for an `Observable` before `$override` is created
          @type {?} */
        const value = /** @type {?} */ (this.i18n.getValueFromPath(this.path));
        this.$override = new BehaviorSubject(value);
        this._value = value;
    }
    /**
     * The raw value of the translation. Defaults to the string value, but will return the value passed to `override`
     *
     * \@readonly
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        this.override(v);
    }
    /**
     * The translation subject. Returns either a stream of overridden values, or our base translation values.
     *
     * \@readonly
     * @return {?}
     */
    get subject() {
        /**
                 * since inputs are bound on template instantiation (and thusly will always have _some_ value)
                 * We can use a simple boolean and the `iif` function to determine which subject to return on subscription
                 */
        return iif(() => this.isOverridden, this.$override, this.baseTranslation);
    }
    /**
     * Takes a string or an `Observable` that emits strings.
     * Overrides the value provided by the `I18n` service.
     * @param {?} value
     * @return {?}
     */
    override(value) {
        this.isOverridden = true;
        this._value = value;
        if (isObservable(value)) {
            value.subscribe(v => {
                this.$override.next(v);
            });
        }
        else {
            this.$override.next(value);
        }
    }
}
function Overridable_tsickle_Closure_declarations() {
    /**
     * Overridden value. Accessed by the readonly getter `value` and set through `override`
     * @type {?}
     */
    Overridable.prototype._value;
    /**
     * Subject of overridden values. Initialized with our default value.
     * @type {?}
     */
    Overridable.prototype.$override;
    /**
     * Our base non-overridden translation.
     * @type {?}
     */
    Overridable.prototype.baseTranslation;
    /**
     * A boolean to flip between overridden and non-overridden states.
     * @type {?}
     */
    Overridable.prototype.isOverridden;
    /** @type {?} */
    Overridable.prototype.path;
    /** @type {?} */
    Overridable.prototype.i18n;
}
/**
 * The I18n service is a minimal internal singleton service used to supply our components with translated strings.
 *
 * All the components that support I18n also support directly passed strings.
 * Usage of I18n is optional, and it is not recommended for application use (libraries like ngx-translate
 * are a better choice)
 *
 */
export class I18n {
    constructor() {
        this.translationStrings = EN;
        this.translations = new Map();
    }
    /**
     * Set/update the translations from an object. Also notifies all participating components of the update.
     *
     * @param {?} strings an object of strings, should follow the same format as src/i18n/en.json
     * @return {?}
     */
    set(strings) {
        this.translationStrings = merge({}, EN, strings);
        /** @type {?} */
        const translations = Array.from(this.translations);
        for (const [path, subject] of translations) {
            subject.next(this.getValueFromPath(path));
        }
    }
    /**
     * When a path is specified returns an observable that will resolve to the translation string value.
     *
     * Returns the full translations object if path is not specified.
     *
     * @param {?=} path optional, looks like `"NOTIFICATION.CLOSE_BUTTON"`
     * @return {?}
     */
    get(path) {
        if (!path) {
            return this.translationStrings;
        }
        return this.getSubject(path);
    }
    /**
     * Returns all descendents of some path fragment as an object.
     *
     * @param {?} partialPath a path fragment, for example `"NOTIFICATION"`
     * @return {?}
     */
    getMultiple(partialPath) {
        /** @type {?} */
        const values = this.getValueFromPath(partialPath);
        /** @type {?} */
        const subjects = {};
        for (const key of Object.keys(values)) {
            if (values[key] === Object(values[key])) {
                subjects[key] = this.getMultiple(`${partialPath}.${key}`);
            }
            else {
                subjects[key] = this.getSubject(`${partialPath}.${key}`);
            }
        }
        return subjects;
    }
    /**
     * Returns an instance of `Overridable` that can be used to optionally override the value provided by `I18n`
     * @param {?} path looks like `"NOTIFICATION.CLOSE_BUTTON"`
     * @return {?}
     */
    getOverridable(path) {
        return new Overridable(path, this);
    }
    /**
     * Takes the `Observable` returned from `i18n.get` and an object of variables to replace.
     *
     * The keys specify the variable name in the string.
     *
     * Example:
     * ```
     * service.set({ "TEST": "{{foo}} {{bar}}" });
     *
     * service.replace(service.get("TEST"), { foo: "test", bar: "asdf" })
     * ```
     *
     * Produces: `"test asdf"`
     *
     * @param {?} subject the translation to replace variables on
     * @param {?} variables object of variables to replace
     * @return {?}
     */
    replace(subject, variables) {
        return replace(subject, variables);
    }
    /**
     * Trys to resolve a value from the provided path.
     *
     * @param {?} path looks like `"NOTIFICATION.CLOSE_BUTTON"`
     * @return {?}
     */
    getValueFromPath(path) {
        /** @type {?} */
        let value = this.translationStrings;
        for (const segment of path.split(".")) {
            if (value[segment]) {
                value = value[segment];
            }
            else {
                throw new Error(`no key ${segment} at ${path}`);
            }
        }
        return value;
    }
    /**
     * Helper method that returns an observable from the internal cache based on the path
     *
     * @param {?} path looks like `"NOTIFICATION.CLOSE_BUTTON"`
     * @return {?}
     */
    getSubject(path) {
        try {
            /** @type {?} */
            const value = /** @type {?} */ (this.getValueFromPath(path));
            if (this.translations.has(path)) {
                return this.translations.get(path);
            }
            /** @type {?} */
            const translation = new BehaviorSubject(value);
            this.translations.set(path, translation);
            return translation;
        }
        catch (error) {
            console.error(error);
        }
    }
}
I18n.decorators = [
    { type: Injectable }
];
function I18n_tsickle_Closure_declarations() {
    /** @type {?} */
    I18n.prototype.translationStrings;
    /** @type {?} */
    I18n.prototype.translations;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbImkxOG4vaTE4bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTixlQUFlLEVBRWYsWUFBWSxFQUNaLEdBQUcsRUFDSCxNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRXhDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJoQyxhQUFhLE9BQU8sR0FBRyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzFELEdBQUcsQ0FBZSxHQUFHLENBQUMsRUFBRTs7SUFDdkIsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwQyxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTs7UUFDdkIsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLFNBQVMsR0FBRyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDaEU7SUFDRCxPQUFPLEdBQUcsQ0FBQztDQUNYLENBQUMsQ0FDRixDQUFDOzs7Ozs7Ozs7OztBQVlGLE1BQU07Ozs7O0lBNENMLFlBQXNCLElBQVksRUFBWSxJQUFVO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQVE7UUFBWSxTQUFJLEdBQUosSUFBSSxDQUFNOzs7OytCQU5SLElB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QUNyQjtLQUNEOzs7WUFwSEQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcblx0QmVoYXZpb3JTdWJqZWN0LFxuXHRPYnNlcnZhYmxlLFxuXHRpc09ic2VydmFibGUsXG5cdGlpZlxufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gXCIuLi91dGlscy9vYmplY3RcIjtcblxuY29uc3QgRU4gPSByZXF1aXJlKFwiLi9lbi5qc29uXCIpO1xuXG4vKipcbiAqIFRha2VzIHRoZSBgT2JzZXJ2YWJsZWAgcmV0dXJuZWQgZnJvbSBgaTE4bi5nZXRgIGFuZCBhbiBvYmplY3Qgb2YgdmFyaWFibGVzIHRvIHJlcGxhY2UuXG4gKlxuICogVGhlIGtleXMgc3BlY2lmeSB0aGUgdmFyaWFibGUgbmFtZSBpbiB0aGUgc3RyaW5nLlxuICpcbiAqIEV4YW1wbGU6XG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBzZXJ2aWNlLnNldCh7IFwiVEVTVFwiOiBcInt7Zm9vfX0ge3tiYXJ9fVwiIH0pO1xuICpcbiAqIHNlcnZpY2UucmVwbGFjZShzZXJ2aWNlLmdldChcIlRFU1RcIiksIHsgZm9vOiBcInRlc3RcIiwgYmFyOiBcImFzZGZcIiB9KVxuICogYGBgXG4gKlxuICogUHJvZHVjZXM6IGBcInRlc3QgYXNkZlwiYFxuICpcbiAqIEBwYXJhbSBzdWJqZWN0IHRoZSB0cmFuc2xhdGlvbiB0byByZXBsYWNlIHZhcmlhYmxlcyBvblxuICogQHBhcmFtIHZhcmlhYmxlcyBvYmplY3Qgb2YgdmFyaWFibGVzIHRvIHJlcGxhY2VcbiAqL1xuZXhwb3J0IGNvbnN0IHJlcGxhY2UgPSAoc3ViamVjdCwgdmFyaWFibGVzKSA9PiBzdWJqZWN0LnBpcGUoXG5cdG1hcDxzdHJpbmcsIHZvaWQ+KHN0ciA9PiB7XG5cdFx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhcmlhYmxlcyk7XG5cdFx0Zm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSB2YXJpYWJsZXNba2V5XTtcblx0XHRcdHN0ciA9IHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYHt7XFxcXHMqJHtrZXl9XFxcXHMqfX1gLCBcImdcIiksIHZhbHVlKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN0cjtcblx0fSlcbik7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBcIm92ZXJyaWRhYmxlXCIgdHJhbnNsYXRpb24gdmFsdWUuXG4gKlxuICogTGFyZ2VseSBhbiBpbnRlcm5hbCB1c2VjYXNlLiBUaGVyZSBhcmUgc2l0dWF0aW9ucyB3aGVyZSB3ZSB3YW50IGFuIGBPYnNlcnZhYmxlYCB0aGF0XG4gKiBjYW4gZW1pdCBldmVudHMgZnJvbSBhIGNlbnRyYWxpemVkIHNvdXJjZSAqKk9SKiogYW4gYE9ic2VydmFibGVgIHRoYXQgd2lsbCBlbWl0IGV2ZW50c1xuICogZnJvbSBhIGNvbXBvbmVudCBsb2NhbCBzb3VyY2UuIFRoZSBrZXkgZXhhbXBsZSBiZWluZyBvbi9vZmYgdGV4dCBpbiBhIGBUb2dnbGVgIC0gSW4gc29tZSBjYXNlc1xuICogd2Ugd2FudCB0aGUgYFRvZ2dsZWAgdG8gdXNlIGBJMThuYHMgZ2xvYmFsIHRyYW5zbGF0aW9ucywgYnV0IGluIG90aGVycyB3ZSdkIHByZWZlciB0byB1c2UgYSBsb2NhbFxuICogb3ZlcnJpZGUuIFdlIGRvbid0IGV2ZXIgbmVlZCB0byByZXR1cm4gdG8gYSBub24tb3ZlcnJpZGRlbiBzdGF0ZSwgYnV0IHdlIGRvIG5lZWQgdGhlIGFiaWxpdHkgdG9cbiAqIHN3aXRjaCBfdG9fIGFuIG92ZXJyaWRkZW4gc2F0ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIE92ZXJyaWRhYmxlIHtcblx0LyoqXG5cdCAqIFRoZSByYXcgdmFsdWUgb2YgdGhlIHRyYW5zbGF0aW9uLiBEZWZhdWx0cyB0byB0aGUgc3RyaW5nIHZhbHVlLCBidXQgd2lsbCByZXR1cm4gdGhlIHZhbHVlIHBhc3NlZCB0byBgb3ZlcnJpZGVgXG5cdCAqXG5cdCAqIEByZWFkb25seVxuXHQgKi9cblx0cHVibGljIGdldCB2YWx1ZSgpOiBzdHJpbmcgfCBPYnNlcnZhYmxlPHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLl92YWx1ZTtcblx0fVxuXG5cdHB1YmxpYyBzZXQgdmFsdWUodjogc3RyaW5nIHwgT2JzZXJ2YWJsZTxzdHJpbmc+KSB7XG5cdFx0dGhpcy5vdmVycmlkZSh2KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgdHJhbnNsYXRpb24gc3ViamVjdC4gUmV0dXJucyBlaXRoZXIgYSBzdHJlYW0gb2Ygb3ZlcnJpZGRlbiB2YWx1ZXMsIG9yIG91ciBiYXNlIHRyYW5zbGF0aW9uIHZhbHVlcy5cblx0ICpcblx0ICogQHJlYWRvbmx5XG5cdCAqL1xuXHRwdWJsaWMgZ2V0IHN1YmplY3QoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblx0XHQvKipcblx0XHQgKiBzaW5jZSBpbnB1dHMgYXJlIGJvdW5kIG9uIHRlbXBsYXRlIGluc3RhbnRpYXRpb24gKGFuZCB0aHVzbHkgd2lsbCBhbHdheXMgaGF2ZSBfc29tZV8gdmFsdWUpXG5cdFx0ICogV2UgY2FuIHVzZSBhIHNpbXBsZSBib29sZWFuIGFuZCB0aGUgYGlpZmAgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIHdoaWNoIHN1YmplY3QgdG8gcmV0dXJuIG9uIHN1YnNjcmlwdGlvblxuXHRcdCAqL1xuXHRcdHJldHVybiBpaWYoKCkgPT4gdGhpcy5pc092ZXJyaWRkZW4sIHRoaXMuJG92ZXJyaWRlLCB0aGlzLmJhc2VUcmFuc2xhdGlvbik7XG5cdH1cblxuXHQvKipcblx0ICogT3ZlcnJpZGRlbiB2YWx1ZS4gQWNjZXNzZWQgYnkgdGhlIHJlYWRvbmx5IGdldHRlciBgdmFsdWVgIGFuZCBzZXQgdGhyb3VnaCBgb3ZlcnJpZGVgXG5cdCAqL1xuXHRwcm90ZWN0ZWQgX3ZhbHVlOiBzdHJpbmcgfCBPYnNlcnZhYmxlPHN0cmluZz47XG5cdC8qKlxuXHQgKiBTdWJqZWN0IG9mIG92ZXJyaWRkZW4gdmFsdWVzLiBJbml0aWFsaXplZCB3aXRoIG91ciBkZWZhdWx0IHZhbHVlLlxuXHQgKi9cblx0cHJvdGVjdGVkICRvdmVycmlkZTogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz47XG5cdC8qKlxuXHQgKiBPdXIgYmFzZSBub24tb3ZlcnJpZGRlbiB0cmFuc2xhdGlvbi5cblx0ICovXG5cdHByb3RlY3RlZCBiYXNlVHJhbnNsYXRpb246IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuaTE4bi5nZXQodGhpcy5wYXRoKTtcblx0LyoqXG5cdCAqIEEgYm9vbGVhbiB0byBmbGlwIGJldHdlZW4gb3ZlcnJpZGRlbiBhbmQgbm9uLW92ZXJyaWRkZW4gc3RhdGVzLlxuXHQgKi9cblx0cHJvdGVjdGVkIGlzT3ZlcnJpZGRlbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHByb3RlY3RlZCBwYXRoOiBzdHJpbmcsIHByb3RlY3RlZCBpMThuOiBJMThuKSB7XG5cdFx0LyoqXG5cdFx0ICogZW5zdXJlIGAkb3ZlcnJpZGVgIGlzIGluaXRpYWxpemVkIHdpdGggdGhlIGNvcnJlY3QgZGVmYXVsdCB2YWx1ZVxuXHRcdCAqIGluIHNvbWUgY2FzZXMgYF92YWx1ZWAgY2FuIGdldCBjaGFuZ2VkIGZvciBhbiBgT2JzZXJ2YWJsZWAgYmVmb3JlIGAkb3ZlcnJpZGVgIGlzIGNyZWF0ZWRcblx0XHQgKi9cblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuaTE4bi5nZXRWYWx1ZUZyb21QYXRoKHRoaXMucGF0aCkgYXMgc3RyaW5nO1xuXHRcdHRoaXMuJG92ZXJyaWRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KHZhbHVlKTtcblx0XHR0aGlzLl92YWx1ZSA9IHZhbHVlO1xuXHR9XG5cdC8qKlxuXHQgKiBUYWtlcyBhIHN0cmluZyBvciBhbiBgT2JzZXJ2YWJsZWAgdGhhdCBlbWl0cyBzdHJpbmdzLlxuXHQgKiBPdmVycmlkZXMgdGhlIHZhbHVlIHByb3ZpZGVkIGJ5IHRoZSBgSTE4bmAgc2VydmljZS5cblx0ICovXG5cdG92ZXJyaWRlKHZhbHVlOiBzdHJpbmcgfCBPYnNlcnZhYmxlPHN0cmluZz4pIHtcblx0XHR0aGlzLmlzT3ZlcnJpZGRlbiA9IHRydWU7XG5cdFx0dGhpcy5fdmFsdWUgPSB2YWx1ZTtcblx0XHRpZiAoaXNPYnNlcnZhYmxlKHZhbHVlKSkge1xuXHRcdFx0dmFsdWUuc3Vic2NyaWJlKHYgPT4ge1xuXHRcdFx0XHR0aGlzLiRvdmVycmlkZS5uZXh0KHYpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuJG92ZXJyaWRlLm5leHQodmFsdWUpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIFRoZSBJMThuIHNlcnZpY2UgaXMgYSBtaW5pbWFsIGludGVybmFsIHNpbmdsZXRvbiBzZXJ2aWNlIHVzZWQgdG8gc3VwcGx5IG91ciBjb21wb25lbnRzIHdpdGggdHJhbnNsYXRlZCBzdHJpbmdzLlxuICpcbiAqIEFsbCB0aGUgY29tcG9uZW50cyB0aGF0IHN1cHBvcnQgSTE4biBhbHNvIHN1cHBvcnQgZGlyZWN0bHkgcGFzc2VkIHN0cmluZ3MuXG4gKiBVc2FnZSBvZiBJMThuIGlzIG9wdGlvbmFsLCBhbmQgaXQgaXMgbm90IHJlY29tbWVuZGVkIGZvciBhcHBsaWNhdGlvbiB1c2UgKGxpYnJhcmllcyBsaWtlIG5neC10cmFuc2xhdGVcbiAqIGFyZSBhIGJldHRlciBjaG9pY2UpXG4gKlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSTE4biB7XG5cdHByb3RlY3RlZCB0cmFuc2xhdGlvblN0cmluZ3MgPSBFTjtcblxuXHRwcm90ZWN0ZWQgdHJhbnNsYXRpb25zID0gbmV3IE1hcCgpO1xuXG5cdC8qKlxuXHQgKiBTZXQvdXBkYXRlIHRoZSB0cmFuc2xhdGlvbnMgZnJvbSBhbiBvYmplY3QuIEFsc28gbm90aWZpZXMgYWxsIHBhcnRpY2lwYXRpbmcgY29tcG9uZW50cyBvZiB0aGUgdXBkYXRlLlxuXHQgKlxuXHQgKiBAcGFyYW0gc3RyaW5ncyBhbiBvYmplY3Qgb2Ygc3RyaW5ncywgc2hvdWxkIGZvbGxvdyB0aGUgc2FtZSBmb3JtYXQgYXMgc3JjL2kxOG4vZW4uanNvblxuXHQgKi9cblx0cHVibGljIHNldChzdHJpbmdzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG5cdFx0dGhpcy50cmFuc2xhdGlvblN0cmluZ3MgPSBtZXJnZSh7fSwgRU4sIHN0cmluZ3MpO1xuXHRcdC8vIGl0ZXJhdGUgb3ZlciBhbGwgb3VyIHRyYWNrZWQgdHJhbnNsYXRpb25zIGFuZCB1cGRhdGUgZWFjaCBvYnNlcnZhYmxlXG5cdFx0Y29uc3QgdHJhbnNsYXRpb25zID0gQXJyYXkuZnJvbSh0aGlzLnRyYW5zbGF0aW9ucyk7XG5cdFx0Zm9yIChjb25zdCBbcGF0aCwgc3ViamVjdF0gb2YgdHJhbnNsYXRpb25zKSB7XG5cdFx0XHRzdWJqZWN0Lm5leHQodGhpcy5nZXRWYWx1ZUZyb21QYXRoKHBhdGgpKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogV2hlbiBhIHBhdGggaXMgc3BlY2lmaWVkIHJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IHdpbGwgcmVzb2x2ZSB0byB0aGUgdHJhbnNsYXRpb24gc3RyaW5nIHZhbHVlLlxuXHQgKlxuXHQgKiBSZXR1cm5zIHRoZSBmdWxsIHRyYW5zbGF0aW9ucyBvYmplY3QgaWYgcGF0aCBpcyBub3Qgc3BlY2lmaWVkLlxuXHQgKlxuXHQgKiBAcGFyYW0gcGF0aCBvcHRpb25hbCwgbG9va3MgbGlrZSBgXCJOT1RJRklDQVRJT04uQ0xPU0VfQlVUVE9OXCJgXG5cdCAqL1xuXHRwdWJsaWMgZ2V0KHBhdGg/OiBzdHJpbmcpIHtcblx0XHRpZiAoIXBhdGgpIHtcblx0XHRcdHJldHVybiB0aGlzLnRyYW5zbGF0aW9uU3RyaW5ncztcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuZ2V0U3ViamVjdChwYXRoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGFsbCBkZXNjZW5kZW50cyBvZiBzb21lIHBhdGggZnJhZ21lbnQgYXMgYW4gb2JqZWN0LlxuXHQgKlxuXHQgKiBAcGFyYW0gcGFydGlhbFBhdGggYSBwYXRoIGZyYWdtZW50LCBmb3IgZXhhbXBsZSBgXCJOT1RJRklDQVRJT05cImBcblx0ICovXG5cdHB1YmxpYyBnZXRNdWx0aXBsZShwYXJ0aWFsUGF0aDogc3RyaW5nKTogeyBba2V5OiBzdHJpbmddOiBPYnNlcnZhYmxlPHN0cmluZz4gfSB7XG5cdFx0Y29uc3QgdmFsdWVzID0gdGhpcy5nZXRWYWx1ZUZyb21QYXRoKHBhcnRpYWxQYXRoKTtcblx0XHRjb25zdCBzdWJqZWN0cyA9IHt9O1xuXHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHZhbHVlcykpIHtcblx0XHRcdGlmICh2YWx1ZXNba2V5XSA9PT0gT2JqZWN0KHZhbHVlc1trZXldKSkge1xuXHRcdFx0XHRzdWJqZWN0c1trZXldID0gdGhpcy5nZXRNdWx0aXBsZShgJHtwYXJ0aWFsUGF0aH0uJHtrZXl9YCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdWJqZWN0c1trZXldID0gdGhpcy5nZXRTdWJqZWN0KGAke3BhcnRpYWxQYXRofS4ke2tleX1gKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHN1YmplY3RzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgYE92ZXJyaWRhYmxlYCB0aGF0IGNhbiBiZSB1c2VkIHRvIG9wdGlvbmFsbHkgb3ZlcnJpZGUgdGhlIHZhbHVlIHByb3ZpZGVkIGJ5IGBJMThuYFxuXHQgKiBAcGFyYW0gcGF0aCBsb29rcyBsaWtlIGBcIk5PVElGSUNBVElPTi5DTE9TRV9CVVRUT05cImBcblx0ICovXG5cdHB1YmxpYyBnZXRPdmVycmlkYWJsZShwYXRoOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gbmV3IE92ZXJyaWRhYmxlKHBhdGgsIHRoaXMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRha2VzIHRoZSBgT2JzZXJ2YWJsZWAgcmV0dXJuZWQgZnJvbSBgaTE4bi5nZXRgIGFuZCBhbiBvYmplY3Qgb2YgdmFyaWFibGVzIHRvIHJlcGxhY2UuXG5cdCAqXG5cdCAqIFRoZSBrZXlzIHNwZWNpZnkgdGhlIHZhcmlhYmxlIG5hbWUgaW4gdGhlIHN0cmluZy5cblx0ICpcblx0ICogRXhhbXBsZTpcblx0ICogYGBgXG5cdCAqIHNlcnZpY2Uuc2V0KHsgXCJURVNUXCI6IFwie3tmb299fSB7e2Jhcn19XCIgfSk7XG5cdCAqXG5cdCAqIHNlcnZpY2UucmVwbGFjZShzZXJ2aWNlLmdldChcIlRFU1RcIiksIHsgZm9vOiBcInRlc3RcIiwgYmFyOiBcImFzZGZcIiB9KVxuXHQgKiBgYGBcblx0ICpcblx0ICogUHJvZHVjZXM6IGBcInRlc3QgYXNkZlwiYFxuXHQgKlxuXHQgKiBAcGFyYW0gc3ViamVjdCB0aGUgdHJhbnNsYXRpb24gdG8gcmVwbGFjZSB2YXJpYWJsZXMgb25cblx0ICogQHBhcmFtIHZhcmlhYmxlcyBvYmplY3Qgb2YgdmFyaWFibGVzIHRvIHJlcGxhY2Vcblx0ICovXG5cdHB1YmxpYyByZXBsYWNlKHN1YmplY3Q6IE9ic2VydmFibGU8c3RyaW5nPiwgdmFyaWFibGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG5cdFx0cmV0dXJuIHJlcGxhY2Uoc3ViamVjdCwgdmFyaWFibGVzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUcnlzIHRvIHJlc29sdmUgYSB2YWx1ZSBmcm9tIHRoZSBwcm92aWRlZCBwYXRoLlxuXHQgKlxuXHQgKiBAcGFyYW0gcGF0aCBsb29rcyBsaWtlIGBcIk5PVElGSUNBVElPTi5DTE9TRV9CVVRUT05cImBcblx0ICovXG5cdHB1YmxpYyBnZXRWYWx1ZUZyb21QYXRoKHBhdGgpOiBzdHJpbmcgfCB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcblx0XHRsZXQgdmFsdWUgPSB0aGlzLnRyYW5zbGF0aW9uU3RyaW5ncztcblx0XHRmb3IgKGNvbnN0IHNlZ21lbnQgb2YgcGF0aC5zcGxpdChcIi5cIikpIHtcblx0XHRcdGlmICh2YWx1ZVtzZWdtZW50XSkge1xuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlW3NlZ21lbnRdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBubyBrZXkgJHtzZWdtZW50fSBhdCAke3BhdGh9YCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIZWxwZXIgbWV0aG9kIHRoYXQgcmV0dXJucyBhbiBvYnNlcnZhYmxlIGZyb20gdGhlIGludGVybmFsIGNhY2hlIGJhc2VkIG9uIHRoZSBwYXRoXG5cdCAqXG5cdCAqIEBwYXJhbSBwYXRoIGxvb2tzIGxpa2UgYFwiTk9USUZJQ0FUSU9OLkNMT1NFX0JVVFRPTlwiYFxuXHQgKi9cblx0cHJvdGVjdGVkIGdldFN1YmplY3QocGF0aDogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblx0XHR0cnkge1xuXHRcdFx0Ly8gd2UgcnVuIHRoaXMgaGVyZSB0byB2YWxpZGF0ZSB0aGUgcGF0aCBleGlzdHMgYmVmb3JlIGFkZGluZyBpdCB0byB0aGUgdHJhbnNsYXRpb24gbWFwXG5cdFx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWVGcm9tUGF0aChwYXRoKSBhcyBzdHJpbmc7XG5cdFx0XHRpZiAodGhpcy50cmFuc2xhdGlvbnMuaGFzKHBhdGgpKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnRyYW5zbGF0aW9ucy5nZXQocGF0aCk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB0cmFuc2xhdGlvbiA9IG5ldyBCZWhhdmlvclN1YmplY3QodmFsdWUpO1xuXHRcdFx0dGhpcy50cmFuc2xhdGlvbnMuc2V0KHBhdGgsIHRyYW5zbGF0aW9uKTtcblx0XHRcdHJldHVybiB0cmFuc2xhdGlvbjtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0fVxuXHR9XG59XG4iXX0=