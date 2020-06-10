import { DatePickerInputModule } from "carbon-components-angular/datepicker-input/datepicker-input.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DatePicker } from "./datepicker.component";
import { UtilsModule } from "carbon-components-angular/utils/utils.module";

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
		UtilsModule
	]
})
export class DatePickerModule { }
