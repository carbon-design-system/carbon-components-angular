import { Ng2FlatpickrModule } from "ng2-flatpickr";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TimePickerSelect } from "./timepicker-select.component";

@NgModule({
	declarations: [
		TimePickerSelect
	],
	exports: [
		TimePickerSelect
	],
	imports: [
		CommonModule,
		Ng2FlatpickrModule
	]
})
export class TimePickerSelectModule { }
