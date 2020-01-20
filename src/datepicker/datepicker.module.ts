import { DatePickerInputModule } from "./../datepicker-input/datepicker-input.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DatePicker } from "./datepicker.component";
import { ElementService } from "../utils/element.service";
import { AnimationFrameServiceSingleton } from "../utils/animation-frame.service";

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
		DatePickerInputModule
	],
	providers: [ElementService, AnimationFrameServiceSingleton]
})
export class DatePickerModule { }
