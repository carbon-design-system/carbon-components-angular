import { DatePickerInputModule } from "carbon-components-angular/datepicker-input";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DatePicker } from "./datepicker.component";
import { I18nModule } from "carbon-components-angular/i18n";

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
		I18nModule
	]
})
export class DatePickerModule { }
