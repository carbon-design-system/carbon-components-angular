import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DatePickerInput } from "./datepicker-input.component";
import { IconModule } from "carbon-components-angular/icon";

@NgModule({
	declarations: [
		DatePickerInput
	],
	exports: [
		DatePickerInput
	],
	imports: [
		CommonModule,
		IconModule
	]
})
export class DatePickerInputModule { }
