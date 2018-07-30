import { Component, OnInit } from "@angular/core";

import { DateTimeModel } from "./../../../src/calendar/date-time-model.class";

@Component({
	selector: "calendar-demo",
	template: `
	<h1>Calendar</h1>

	<div style="width: 280px;">
		<ibm-calendar-month-view [model]="monthViewModel"></ibm-calendar-month-view>
	<div>

	<div style="width: 564px;">
		<ibm-calendar-month-view [model]="monthViewModel" [monthCount]="2"></ibm-calendar-month-view>
	<div>

	<div style="width: 1046px;">
		<ibm-calendar-months-view [model]="monthsViewModel"></ibm-calendar-months-view>
	</div>

	<div style="width: 1046px;">
		<ibm-calendar-quarter-view [model]="quarterViewModel"></ibm-calendar-quarter-view>
	</div>

	<div style="width: 1046px;">
		<ibm-calendar-year-view [model]="yearViewModel"></ibm-calendar-year-view>
	</div>

	<div style="width: 1046px;">
		<ibm-calendar [view]="month" [model]="yearViewModel"></ibm-calendar>
	</div>
	`
})

export class CalendarDemo implements OnInit {
	monthViewModel = new DateTimeModel();
	monthsViewModel = new DateTimeModel();
	quarterViewModel = new DateTimeModel();
	yearViewModel = new DateTimeModel();
	date = new Date();

	selectedDate;

	counter = this.date.getMonth();

	todayPlus5 = new Date(this.date.getFullYear(), this.date.getMonth() + 4, this.date.getDate() + 5);



	todayPlusYear = new Date(this.date.getFullYear() + 1, this.date.getMonth(), this.date.getDate());

	constructor() {
		const disabledDay = new Date(2018, 6, 3);
		const disabledRangeStart = new Date(2016, 0, 0);
		const disabledRangeEnd = new Date(2017, 5, 3);

		this.monthViewModel.disabledDates = [disabledDay];
		this.monthsViewModel.disabledDates = [[disabledRangeStart, disabledRangeEnd]];
		this.quarterViewModel.disabledDates = [[disabledRangeStart, disabledRangeEnd]];
		this.yearViewModel.disabledDates = [[disabledRangeStart, disabledRangeEnd]];
	}

	ngOnInit() {
		this.monthViewModel.startDate = this.date;
		this.monthViewModel.endDate = this.todayPlus5;

		this.monthsViewModel.startDate = this.date;
		this.monthsViewModel.endDate = this.todayPlus5;

		this.quarterViewModel.startDate = this.date;
		this.quarterViewModel.endDate = this.todayPlus5;

		this.yearViewModel.startDate = this.date;
		this.yearViewModel.endDate = this.todayPlusYear;
	}
}
