import { DatePickerInputModule } from "./../datepicker-input/datepicker-input.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DatePicker } from "./datepicker.component";

import * as languages from "flatpickr/dist/l10n/index";
export default languages;

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
export class DatePickerModule { }
