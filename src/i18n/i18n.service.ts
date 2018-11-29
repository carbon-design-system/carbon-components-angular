import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { stringify } from "querystring";

const EN = require("./en.json");

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

@Injectable()
export class I18n {
	protected translationStrings = EN;

	protected translations = new Map();

	public set(strings) {
		this.translationStrings = Object.assign({}, EN, strings);
		const translations = Array.from(this.translations);
		for (const [path, subject] of translations) {
			subject.next(this.getValueFromPath(path));
		}
	}

	public get(path?) {
		if (!path) {
			return this.translationStrings;
		}
		const value = this.getValueFromPath(path);
		if (this.translations.has(path)) {
			return this.translations.get(path);
		}
		const translation = new BehaviorSubject(value);
		this.translations.set(path, translation);
		return translation;
	}

	public replace(subject, variables) {
		return replace(subject, variables);
	}

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
