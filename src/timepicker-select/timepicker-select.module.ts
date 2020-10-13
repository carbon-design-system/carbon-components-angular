import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TimePickerSelect } from "./timepicker-select.component";
import { SelectModule } from "carbon-components-angular/select";
import { ChevronDownModule } from "@carbon/icons-angular";

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
		ChevronDownModule
	]
})
export class TimePickerSelectModule { }
