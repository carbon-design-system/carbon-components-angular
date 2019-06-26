import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DatePickerInput } from "./datepicker-input.component";
import { Calendar16Module } from "@carbon/icons-angular/lib/calendar/16";

@NgModule({
	declarations: [
		DatePickerInput
	],
	exports: [
		DatePickerInput
	],
	imports: [
		CommonModule,
		Calendar16Module
	]
})
export class DatePickerInputModule { }
