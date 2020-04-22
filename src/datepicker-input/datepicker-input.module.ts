import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DatePickerInput } from "./datepicker-input.component";
import { CalendarModule } from "@carbon/icons-angular";

@NgModule({
	declarations: [
		DatePickerInput
	],
	exports: [
		DatePickerInput
	],
	imports: [
		CommonModule,
		CalendarModule
	]
})
export class DatePickerInputModule { }
