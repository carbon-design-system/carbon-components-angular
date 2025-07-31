import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TimePickerSelect } from "./timepicker-select.component";
import { SelectModule } from "carbon-components-angular/select";
import { IconDirective } from "carbon-components-angular/icon";

@NgModule({
	exports: [
		TimePickerSelect
	],
	imports: [
		SelectModule,
		CommonModule,
		IconDirective,
		TimePickerSelect
	]
})
export class TimePickerSelectModule { }
