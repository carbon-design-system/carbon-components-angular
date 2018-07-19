import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

import { Calendar } from "./calendar.component";
import { IconModule, StaticIconModule } from "./../icon/icon.module";
import { CalendarMonth } from "./month-view/calendar-month.component";
import { CalendarMonths } from "./months-view/calendar-months.component";
import { CalendarQuarter } from "./quarter-view/calendar-quarter.component";
import { CalendarYear } from "./year-view/calendar-year.component";
import { CalendarHeader } from "./calendar-header.component";

export { DateTimeModel } from "./date-time-model.class";

@NgModule({
	declarations: [
		Calendar,
		CalendarMonth,
		CalendarMonths,
		CalendarQuarter,
		CalendarYear,
		CalendarHeader
	],
	exports: [
		Calendar,
		CalendarMonth,
		CalendarMonths,
		CalendarQuarter,
		CalendarYear,
		CalendarHeader
	],
	imports: [
		CommonModule,
		IconModule,
		StaticIconModule,
		TranslateModule.forChild()
	]
})
export class CalendarModule {}
