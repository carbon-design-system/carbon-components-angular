import {
	Component,
	Input
} from "@angular/core";

import { DateTimeModel } from "./date-time-model.class";

@Component({
	selector: "n-calendar",
	template: `
		<div class="calendar-view">
			<n-calendar-month-view [model]="model" [monthCount]="monthCount" *ngIf="view == 'month'"></n-calendar-month-view>
			<n-calendar-months-view [model]="model" *ngIf="view == 'months'"></n-calendar-months-view>
			<n-calendar-quarter-view [model]="model" *ngIf="view == 'quarter'"></n-calendar-quarter-view>
			<n-calendar-year-view [model]="model" *ngIf="view == 'year'"></n-calendar-year-view>
		</div>
	`,
	styleUrls: ["./calendar.component.scss"],
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
