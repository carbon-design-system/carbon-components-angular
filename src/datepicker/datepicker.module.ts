import { DatePickerInputModule } from "./../datepicker-input/datepicker-input.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DatePicker } from "./datepicker.component";
import { UtilsModule } from "../utils/utils.module";
import { I18nModule } from "./../i18n";

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
		DatePickerInputModule,
		UtilsModule,
		I18nModule
	]
})
export class DatePickerModule { }
