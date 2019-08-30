import { BehaviorSubject, Observable } from "rxjs";
/**
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
 * @param subject the translation to replace variables on
 * @param variables object of variables to replace
 */
export declare const replace: (subject: any, variables: any) => any;
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
export declare class Overridable {
    protected path: string;
    protected i18n: I18n;
    /**
     * The raw value of the translation. Defaults to the string value, but will return the value passed to `override`
     *
     * @readonly
     */
    value: string | Observable<string>;
    /**
     * The translation subject. Returns either a stream of overridden values, or our base translation values.
     *
     * @readonly
     */
    readonly subject: Observable<string>;
    /**
     * Overridden value. Accessed by the readonly getter `value` and set through `override`
     */
    protected _value: string | Observable<string>;
    /**
     * Subject of overridden values. Initialized with our default value.
     */
    protected $override: BehaviorSubject<string>;
    /**
     * Our base non-overridden translation.
     */
    protected baseTranslation: Observable<string>;
    /**
     * A boolean to flip between overridden and non-overridden states.
     */
    protected isOverridden: boolean;
    constructor(path: string, i18n: I18n);
    /**
     * Takes a string or an `Observable` that emits strings.
     * Overrides the value provided by the `I18n` service.
     */
    override(value: string | Observable<string>): void;
}
/**
 * The I18n service is a minimal internal singleton service used to supply our components with translated strings.
 *
 * All the components that support I18n also support directly passed strings.
 * Usage of I18n is optional, and it is not recommended for application use (libraries like ngx-translate
 * are a better choice)
 *
 */
export declare class I18n {
    protected translationStrings: any;
    protected translations: Map<any, any>;
    /**
     * Set/update the translations from an object. Also notifies all participating components of the update.
     *
     * @param strings an object of strings, should follow the same format as src/i18n/en.json
     */
    set(strings: {
        [key: string]: string;
    }): void;
    /**
     * When a path is specified returns an observable that will resolve to the translation string value.
     *
     * Returns the full translations object if path is not specified.
     *
     * @param path optional, looks like `"NOTIFICATION.CLOSE_BUTTON"`
     */
    get(path?: string): any;
    /**
     * Returns all descendents of some path fragment as an object.
     *
     * @param partialPath a path fragment, for example `"NOTIFICATION"`
     */
    getMultiple(partialPath: string): {
        [key: string]: Observable<string>;
    };
    /**
     * Returns an instance of `Overridable` that can be used to optionally override the value provided by `I18n`
     * @param path looks like `"NOTIFICATION.CLOSE_BUTTON"`
     */
    getOverridable(path: string): Overridable;
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
     * @param subject the translation to replace variables on
     * @param variables object of variables to replace
     */
    replace(subject: Observable<string>, variables: {
        [key: string]: string;
    }): any;
    /**
     * Trys to resolve a value from the provided path.
     *
     * @param path looks like `"NOTIFICATION.CLOSE_BUTTON"`
     */
    getValueFromPath(path: any): string | {
        [key: string]: string;
    };
    /**
     * Helper method that returns an observable from the internal cache based on the path
     *
     * @param path looks like `"NOTIFICATION.CLOSE_BUTTON"`
     */
    protected getSubject(path: string): Observable<string>;
}
