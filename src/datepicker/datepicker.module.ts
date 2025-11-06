import { DatePickerInput } from "carbon-components-angular/datepicker-input";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DatePicker } from "./datepicker.component";
import { UtilsModule } from "carbon-components-angular/utils";
import { I18nModule } from "carbon-components-angular/i18n";

@NgModule({
	exports: [
		DatePicker,
		DatePickerInput
	],
	imports: [
		CommonModule,
		DatePickerInput,
		UtilsModule,
		I18nModule,
		DatePicker
	]
})
export class DatePickerModule { }
