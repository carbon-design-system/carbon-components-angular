import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { Calendar } from "./calendar.component";

export { Calendar } from "./calendar.component";

@NgModule({
	declarations: [
		Calendar
	],
	exports: [
		Calendar
	],
	imports: [CommonModule, BrowserModule]
})
export class CalendarModule {}
