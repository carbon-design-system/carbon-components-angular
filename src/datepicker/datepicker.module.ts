import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CalendarModule } from "./../calendar/calendar.module";
import { Datepicker } from "./datepicker.component";
import { DatepickerPopover } from "./datepicker-popover.component";
import { DatepickerDirective } from "./datepicker.directive";
import { DatepickerService } from "./datepicker.service";

export { CalendarModule } from "./../calendar/calendar.module";
export { Datepicker } from "./datepicker.component";
export { DatepickerPopover } from "./datepicker-popover.component";
export { DatepickerDirective } from "./datepicker.directive";
export { DatepickerService } from "./datepicker.service";

@NgModule({
	declarations: [
		Datepicker,
		DatepickerPopover,
		DatepickerDirective
	],
	exports: [
		Datepicker,
		DatepickerPopover,
		DatepickerDirective
	],
	imports: [CommonModule, CalendarModule],
	entryComponents: [DatepickerPopover]
})
export class DatepickerModule {}
