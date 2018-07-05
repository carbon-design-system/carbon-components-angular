import {
	Component,
	Input
} from "@angular/core";

import { DateTimeModel } from "./date-time-model.class";

@Component({
	selector: "n-calendar",
	template: `
		<div class="calendar-view">
			<n-calendar-month-view [model]="model" *ngIf="view == 'month'" ></n-calendar-month-view>
			<n-calendar-two-month-view [model]="model" *ngIf="view == 'twoMonth'"></n-calendar-two-month-view>
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



	// @Input() selectedDate: Date;
	// @Input() showMonth = true;
	// @Input() showYear = true;
	// @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

	// public today = new Date();
	// public currentMonth = this.today.getMonth();
	// public currentDay = this.today.getDate();
	// public currentYear = this.today.getFullYear();
	// public month;
	// public year;
	// public numberOfDays;
	// public firstDay;
	// public columns = new Array(7);
	// public rows = new Array(6);
	// public currentSelectedDate;
	// public currentSelectedMonth;
	// public currentSelectedYear;
	// public allButtons;
	// public selectedDateDay;
	// public selectedDateMonth;
	// public selectedDateYear;

	// constructor(public elementRef: ElementRef) {}

	// ngOnInit() {
	// }

	// firstDayInMonth(month, year) {
	// 	return new Date(year, month, 1).getDay();
	// }

	// daysInMonth(month, year) {
	// 	return new Date(year, month, 0).getDate();
	// }

	// select(evt, columnIndex, rowIndex) {
	// 	let selectedDate;
	// 	this.selectedDateDay = null;

	// 	console.log(evt.target);
	// 	console.log(columnIndex);
	// 	console.log(rowIndex);

	// 	if (!evt.target.classList.contains("selected")) {
	// 		if (this.currentSelectedDate) {
	// 			this.currentSelectedDate.classList.remove("selected");
	// 		}

	// 		evt.target.classList.add("selected");
	// 		this.currentSelectedDate = evt.target;
	// 		this.currentSelectedMonth = this.month;
	// 		this.currentSelectedYear = this.year;

	// 		// selectedDate = new Date(this.year, this.month, date);
	// 	} else {
	// 		this.clearSelectedDate();
	// 		selectedDate = null;
	// 	}

	// 	this.onSelect.emit(selectedDate);
	// }

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

	// clearSelectedDate() {
	// 	if (this.currentSelectedDate) {
	// 		this.currentSelectedDate.classList.remove("selected-date");
	// 		this.currentSelectedDate = null;
	// 		this.currentSelectedMonth = null;
	// 		this.currentSelectedYear = null;
	// 	}
	// }

}
