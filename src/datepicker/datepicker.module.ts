import { DatePickerInputModule } from "./../datepicker-input/datepicker-input.module";
import { Ng2FlatpickrModule } from "ng2-flatpickr";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DatePicker } from "./datepicker.component";


@NgModule({
	declarations: [
		DatePicker
	],
	exports: [
		DatePicker
	],
	imports: [
		CommonModule,
		Ng2FlatpickrModule,
		DatePickerInputModule
	]
})
export class DatePickerModule { }
