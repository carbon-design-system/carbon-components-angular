import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TimePickerSelect } from "./timepicker-select.component";
import { SelectModule } from "../select/select.module";
import { ChevronDown16Module } from "@carbon/icons-angular/lib/chevron--down/16";

@NgModule({
	declarations: [
		TimePickerSelect
	],
	exports: [
		TimePickerSelect
	],
	imports: [
		SelectModule,
		CommonModule,
		ChevronDown16Module
	]
})
export class TimePickerSelectModule { }
