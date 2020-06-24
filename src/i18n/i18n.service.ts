import { Injectable } from "@angular/core";
import {
	BehaviorSubject,
	Observable,
	isObservable,
	iif,
	Subscription
} from "rxjs";
import { map } from "rxjs/operators";
import { merge } from "carbon-components-angular/utils";

import EN from "./en";

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
export const replace = (subject, variables) => subject.pipe(
	map<string, void>(str => {
		const keys = Object.keys(variables);
		for (const key of keys) {
			const value = variables[key];
			str = str.replace(new RegExp(`{{\\s*${key}\\s*}}`, "g"), value);
		}
		return str;
	})
);

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
	 * The raw value of the translation. Defaults to the string value, but will return the value passed to `override`
	 *
	 * @readonly
	 */
	public get value(): string | Observable<string> {
		return this._value;
	}

	public set value(v: string | Observable<string>) {
		this.override(v);
	}

	/**
	 * The translation subject. Returns either a stream of overridden values, or our base translation values.
	 *
	 * @readonly
	 */
	public get subject(): Observable<string> {
		/**
		 * since inputs are bound on template instantiation (and thusly will always have _some_ value)
		 * We can use a simple boolean and the `iif` function to determine which subject to return on subscription
		 */
		return iif(() => this.isOverridden, this.$override, this.baseTranslation);
	}

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
	protected baseTranslation: Observable<string> = this.i18n.get(this.path);

	/**
	 * Subscription to the observable provided as an override (if any)
	 */
	protected subscription: Subscription;
	/**
	 * A boolean to flip between overridden and non-overridden states.
	 */
	protected isOverridden = false;

	constructor(protected path: string, protected i18n: I18n) {
		/**
		 * ensure `$override` is initialized with the correct default value
		 * in some cases `_value` can get changed for an `Observable` before `$override` is created
		 */
		const value = this.i18n.getValueFromPath(this.path) as string;
		this.$override = new BehaviorSubject<string>(value);
		this._value = value;
	}
	/**
	 * Takes a string or an `Observable` that emits strings.
	 * Overrides the value provided by the `I18n` service.
	 */
	override(value: string | Observable<string>) {
		this.isOverridden = true;
		// To ensure that there are not multiple subscriptions created for the same observable, we
		// unsubscribe if a subscription already exists for an observable before creating a new one.
		if (this.subscription) {
			this.subscription.unsubscribe();
			this.subscription = null;
		}

		this._value = value;

		if (isObservable(value)) {
			this.subscription = value.subscribe(v => {
				this.$override.next(v);
			});
		} else {
			this.$override.next(value);
		}
	}
}

/**
 * An object of strings, should follow the same format as src/i18n/en.json
 */
export type TranslationStrings = { [key: string]: string };


/**
 * The I18n service is a minimal internal singleton service used to supply our components with translated strings.
 *
 * All the components that support I18n also support directly passed strings.
 * Usage of I18n is optional, and it is not recommended for application use (libraries like ngx-translate
 * are a better choice)
 *
 */
@Injectable()
export class I18n {
	protected translationStrings = EN;

	protected translations = new Map();

	protected locale = new BehaviorSubject("en");

	/**
	 * Sets the locale and optionally the translation strings. Locale is used by components that
	 * are already locale aware (datepicker for example) while the translation strings are used
	 * for components that are not.
	 *
	 * Locales set here will override locales/languages set in components
	 * @param language an ISO 639-1 language code - https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
	 * @param strings an object of strings, optional
	 */
	public setLocale(language: string, strings?: TranslationStrings) {
		this.locale.next(language);
		if (strings) {
			this.set(strings);
		}
	}

	/**
	 * Returns the current locale
	 */
	public getLocale() {
		return this.locale.value;
	}

	/**
	 * Returns an observable that resolves to the current locale, and will update when changed
	 */
	public getLocaleObservable() {
		return this.locale.asObservable();
	}

	/**
	 * Set/update the translations from an object. Also notifies all participating components of the update.
	 *
	 * @param strings an object of strings, should follow the same format as src/i18n/en.json
	 */
	public set(strings: TranslationStrings) {
		this.translationStrings = merge({}, EN, strings);
		// iterate over all our tracked translations and update each observable
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
	 * @param path optional, looks like `"NOTIFICATION.CLOSE_BUTTON"`
	 */
	public get(path?: string): any {
		if (!path) {
			return this.translationStrings;
		}
		return this.getSubject(path);
	}

	/**
	 * Returns all descendents of some path fragment as an object.
	 *
	 * @param partialPath a path fragment, for example `"NOTIFICATION"`
	 */
	public getMultiple(partialPath: string): { [key: string]: Observable<string> } {
		const values = this.getValueFromPath(partialPath);
		const subjects = {};
		for (const key of Object.keys(values)) {
			if (values[key] === Object(values[key])) {
				subjects[key] = this.getMultiple(`${partialPath}.${key}`);
			} else {
				subjects[key] = this.getSubject(`${partialPath}.${key}`);
			}
		}
		return subjects;
	}

	/**
	 * Returns an instance of `Overridable` that can be used to optionally override the value provided by `I18n`
	 * @param path looks like `"NOTIFICATION.CLOSE_BUTTON"`
	 */
	public getOverridable(path: string) {
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
	 * @param subject the translation to replace variables on
	 * @param variables object of variables to replace
	 */
	public replace(subject: Observable<string>, variables: { [key: string]: string }) {
		return replace(subject, variables);
	}

	/**
	 * Trys to resolve a value from the provided path.
	 *
	 * @param path looks like `"NOTIFICATION.CLOSE_BUTTON"`
	 */
	public getValueFromPath(path): string | { [key: string]: string } {
		let value = this.translationStrings;
		for (const segment of path.split(".")) {
			if (value[segment] !== undefined && value[segment] !== null) {
				value = value[segment];
			} else {
				throw new Error(`no key ${segment} at ${path}`);
			}
		}
		return value as any;
	}

	/**
	 * Helper method that returns an observable from the internal cache based on the path
	 *
	 * @param path looks like `"NOTIFICATION.CLOSE_BUTTON"`
	 */
	protected getSubject(path: string): Observable<string> {
		try {
			// we run this here to validate the path exists before adding it to the translation map
			const value = this.getValueFromPath(path) as string;
			if (this.translations.has(path)) {
				return this.translations.get(path);
			}
			const translation = new BehaviorSubject(value);
			this.translations.set(path, translation);
			return translation;
		} catch (error) {
			console.error(error);
		}
	}
}
