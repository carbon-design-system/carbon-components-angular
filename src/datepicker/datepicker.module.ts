import { Ng2FlatpickrModule } from "ng2-flatpickr";
import { DatePickerSimple } from "./datepicker-simple/datepicker-simple.component";
import { DatePickerRange } from "./datepicker-range/datepicker-range.component";
import { DatePickerSingle } from "./datepicker-single/datepicker-single.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DatePicker } from "./datepicker.component";



@NgModule({
	declarations: [
		DatePicker,
		DatePickerSimple,
		DatePickerSingle,
		DatePickerRange
	],
	exports: [
		DatePicker,
		DatePickerSimple,
		DatePickerSingle,
		DatePickerRange
	],
	imports: [
		CommonModule,
		Ng2FlatpickrModule
	]
})
export class DatePickerModule { }
