import { DatePickerInputModule } from "./../datepicker-input/datepicker-input.module";
import { NgModule, ModuleWithProviders, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DatePicker } from "./datepicker.component";

import l10n from "flatpickr/dist/l10n/index";
import flatpickr from "flatpickr";

@NgModule({
	declarations: [
		DatePicker
	],
	exports: [
		DatePicker,
		DatePickerInputModule
	],
	imports: [
		CommonModule,
		DatePickerInputModule
	]
})
export class DatePickerModule {
	/**
	 * Set the language for flatpickr globally where the module is imported
	 * as mentioned here https://github.com/flatpickr/flatpickr/tree/master/src/l10n
	 */
	static setLocale(lang: string): ModuleWithProviders {
		flatpickr.localize(l10n[lang] || l10n.default);
		return {
			ngModule: DatePickerModule
		};
	}

	constructor (@Optional() @SkipSelf() parentModule: DatePickerModule) {
		if (parentModule) {
		throw new Error(
			"DatePickerModule is already loaded. Import it in the AppModule only");
		}
	}
}
