import { Ng2FlatpickrModule } from "ng2-flatpickr";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DatePickerInput } from "./datepicker-input.component";

@NgModule({
	declarations: [
		DatePickerInput
	],
	exports: [
		DatePickerInput
	],
	imports: [
		CommonModule,
		Ng2FlatpickrModule
	]
})
export class DatePickerInputModule { }
