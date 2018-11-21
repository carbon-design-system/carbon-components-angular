import { Injectable } from "@angular/core";

const EN = require("./en.json");

@Injectable()
export class I18n {
	protected translationStrings = EN;

	public set(strings) {
		this.translationStrings = Object.assign({}, EN, strings);
	}

	public get() {
		return this.translationStrings;
	}
}
