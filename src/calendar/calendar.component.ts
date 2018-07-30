import {
	Component,
	Input
} from "@angular/core";

import { DateTimeModel } from "./date-time-model.class";

@Component({
	selector: "ibm-calendar",
	template: `
		<div class="calendar-view">
			<ibm-calendar-month-view [model]="model" [monthCount]="monthCount" *ngIf="view == 'month'"></ibm-calendar-month-view>
			<ibm-calendar-months-view [model]="model" *ngIf="view == 'months'"></ibm-calendar-months-view>
			<ibm-calendar-quarter-view [model]="model" *ngIf="view == 'quarter'"></ibm-calendar-quarter-view>
			<ibm-calendar-year-view [model]="model" *ngIf="view == 'year'"></ibm-calendar-year-view>
		</div>
	`
})
export class Calendar {

	@Input() view;
	@Input() model: DateTimeModel;
	@Input() monthCount = 1;

	// onKeyDown(evt, idx) {
	// 	console.log(evt, idx);
	// 	if (evt.key === "ArrowRight" && this.allButtons[idx + 1]) {
	// 		evt.preventDefault();
	// 		this.allButtons[idx + 1].focus();
	// 	} else if (evt.key === "ArrowLeft" && idx > 0) {
	// 		evt.preventDefault();
	// 		this.allButtons[idx - 1].focus();
	// 	} else if (evt.key === "ArrowUp" && idx - 7 >= 0) {
	// 		evt.preventDefault();
	// 		this.allButtons[idx - 7].focus();
	// 	} else if (evt.key === "ArrowDown" && this.allButtons[idx + 7]) {
	// 		evt.preventDefault();
	// 		this.allButtons[idx + 7].focus();
	// 	}
	// }
}
