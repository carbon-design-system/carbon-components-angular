import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, isObservable, iif } from "rxjs";
import { map } from "rxjs/operators";
import { merge } from "../utils/object";

const EN = require("./en.json");

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
			while (str.includes(`{{${key}}}`)) {
				str = str.replace(`{{${key}}}`, value);
			}
		}
		return str;
	})
);

/**
 * Represents an "overridable" translation value.
 *
 * Largely an internal edge case. There are situations where we want an `Observable` that
 * can emit events from a centralized source **OR** an `Observable` that will emit events
 * from a component local source. The key example being on/off text in a `Toggle` - In some cases
 * we want the `Toggle` to use `I18n`s global translations, but in others we'd prefer to use a local
 * override. We don't ever need to return to an non-overriden state, but we do need the ability to
 * switch _to_ an overridden sate.
 */
export class Overridable {
	public get value(): string | Observable<string> {
		return this._value;
	}

	public get subject(): Observable<string> {
		/**
		 * since inputs are bound on template instantiation (and thusly will always have _some_ value)
		 * We can use a simple boolean and the `iif` function to determine which subject to return on subscription
		 */
		return iif(() => this.isOverridden, this.$override, this._subject);
	}

	protected _value = this.i18n.getValueFromPath(this.path) as string;
	protected $override: BehaviorSubject<string>;
	protected _subject: Observable<string> = this.i18n.get(this.path);
	protected isOverridden = false;

	constructor(protected path: string, protected i18n: I18n) {
		/**
		 * ensure `$override` is initlized with the correct default value
		 * in some cases `_value` can get changed for an `Observable` before `$overrride` is created
		 */
		const value = this.i18n.getValueFromPath(this.path) as string;
		this.$override = new BehaviorSubject<string>(value);
	}

	override(value: string | Observable<string>) {
		this.isOverridden = true;
		if (isObservable(value)) {
			value.subscribe(v => {
				this.$override.next(v);
				this._value = v;
			});
		} else {
			this.$override.next(value);
			this._value = value;
		}
	}
}

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

	/**
	 * Set/update the translations from an object. Also notifies all participating components of the update.
	 *
	 * @param strings an object of strings, should follow the same format as src/i18n/en.json
	 */
	public set(strings: { [key: string]: string }) {
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
	public get(path?: string) {
		if (!path) {
			return this.translationStrings;
		}
		return this.getSubject(path);
	}

	public getMultiple(partialPath: string): { [key: string]: Observable<string> } {
		const values = this.getValueFromPath(partialPath);
		const subjects = {};
		for (const key of Object.keys(values)) {
			subjects[key] = this.getSubject(`${partialPath}.${key}`);
		}
		return subjects;
	}

	public getOverrideable(path: string) {
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
			if (value[segment]) {
				value = value[segment];
			} else {
				throw new Error(`no key ${segment} at ${path}`);
			}
		}
		return value;
	}

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
