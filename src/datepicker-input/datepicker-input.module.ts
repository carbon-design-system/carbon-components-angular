import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DatePickerInput } from "./datepicker-input.component";
import { IconDirective } from "carbon-components-angular/icon";

@NgModule({
	exports: [
		DatePickerInput
	],
	imports: [
		CommonModule,
		IconDirective,
		DatePickerInput
	]
})
export class DatePickerInputModule { }
