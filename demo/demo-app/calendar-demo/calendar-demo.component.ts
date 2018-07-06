import { Component, OnInit } from "@angular/core";

import { DateTimeModel } from "./../../../src/calendar/date-time-model.class";

@Component({
	selector: "calendar-demo",
	template: `
	<h1>Calendar</h1>

	<br><br>
	Selected Date: {{selectedDate}}

	<br><br>
	<div style="width:280px;">
		<n-calendar-month-view [model]="model" [monthCount]="1"></n-calendar-month-view>
	<div>

	<div style="width:564px;">
		<n-calendar-month-view [model]="model" [monthCount]="2"></n-calendar-month-view>
	<div>

	<br><br>
	<div style="width:1046px;">
		<n-calendar-months-view [model]="model2"></n-calendar-months-view>
	</div>

	<br><br>
	<div style="width:1046px;">
		<n-calendar-quarter-view [model]="model3"></n-calendar-quarter-view>
	</div>

	<br><br>
	<div style="width:1046px;">
		<n-calendar-year-view [model]="model4"></n-calendar-year-view>
	</div>

	<br><br>
	<div style="width:1046px;">
		<n-calendar [view]="'month'" [model]="model4"></n-calendar>
	</div>
	`
})

export class CalendarDemo implements OnInit {
	model = new DateTimeModel();
	model2 = new DateTimeModel();
	model3 = new DateTimeModel();
	model4 = new DateTimeModel();
	date = new Date();

	selectedDate;

	counter = this.date.getMonth();

	todayPlus5 = new Date(this.date.getFullYear(), this.date.getMonth() + 4, this.date.getDate() + 5);


	todayMinusYear = new Date(this.date.getFullYear() - 1, this.date.getMonth(), this.date.getDate());

	constructor() {
		this.model.disabledDates = [new Date(2018, 6, 3)];
	}

	ngOnInit() {
		this.model.startDate = this.date;
		this.model.endDate = this.todayPlus5;

		this.model2.startDate = this.date;
		this.model2.endDate = this.todayPlus5;

		this.model3.startDate = this.date;
		this.model3.endDate = this.todayPlus5;

		this.model4.startDate = this.date;
		this.model4.endDate = this.todayMinusYear;
	}

	changeDate() {
		if (this.counter < 11) {
			this.counter++;
		} else {
			this.counter = 0;
		}

		let newDate = new Date(2017, this.counter, 9);

		this.date = newDate;
	}

	onSelect(date) {
		this.selectedDate = date;
	}
}
