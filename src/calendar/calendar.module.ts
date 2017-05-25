import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Calendar } from "./calendar.component";

export { Calendar } from "./calendar.component";

@NgModule({
	declarations: [
		Calendar
	],
	exports: [
		Calendar
	],
	imports: [CommonModule]
})
export class CalendarModule {}
