import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

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

// custom deep object merge
const merge = (target, ...objects) => {
	for (const object of objects) {
		for (const key in object) {
			if (object.hasOwnProperty(key)) {
				// since we're dealing just with JSON this simple check should be enough
				if (object[key] instanceof Object) {
					if (!target[key]) {
						target[key] = {};
					}
					// recursivly merge into the target
					// most translations only run 3 or 4 levels deep, so no stack explosions
					target[key] = merge(target[key], object[key]);
				} else {
					target[key] = object[key];
				}
			}
		}
	}
	return target;
};

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
	public set(strings) {
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
	public get(path?) {
		if (!path) {
			return this.translationStrings;
		}
		try {
			// we run this here to validate the path exists before adding it to the translation map
			const value = this.getValueFromPath(path);
			if (this.translations.has(path)) {
				return this.translations.get(path);
			}
			const translation = new BehaviorSubject(value);
			this.translations.set(path, translation);
			return translation;
		} catch (err) {
			console.error(err);
		}
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
	public replace(subject, variables) {
		return replace(subject, variables);
	}

	/**
	 * Trys to resolve a value from the provided path.
	 *
	 * @param path looks like `"NOTIFICATION.CLOSE_BUTTON"`
	 */
	protected getValueFromPath(path) {
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
}
