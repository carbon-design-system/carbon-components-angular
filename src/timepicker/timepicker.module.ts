import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TimePicker } from "./timepicker.component";
import { TimePickerSelectModule } from "carbon-components-angular/timepicker-select";

@NgModule({
	declarations: [
		TimePicker
	],
	exports: [
		TimePicker
	],
	imports: [
		TimePickerSelectModule,
		CommonModule
	]
})
export class TimePickerModule { }
