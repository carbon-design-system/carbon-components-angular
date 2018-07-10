import { Component, OnInit } from "@angular/core";

import { DateTimeModel } from "./../../../src/calendar/date-time-model.class";

@Component({
	selector: "calendar-demo",
	template: `
	<h1>Calendar</h1>

	<div style="width: 280px;">
		<n-calendar-month-view [model]="monthViewModel"></n-calendar-month-view>
	<div>

	<div style="width: 564px;">
		<n-calendar-month-view [model]="monthViewModel" [monthCount]="2"></n-calendar-month-view>
	<div>

	<div style="width: 1046px;">
		<n-calendar-months-view [model]="monthsViewModel"></n-calendar-months-view>
	</div>

	<div style="width: 1046px;">
		<n-calendar-quarter-view [model]="quarterViewModel"></n-calendar-quarter-view>
	</div>

	<div style="width: 1046px;">
		<n-calendar-year-view [model]="yearViewModel"></n-calendar-year-view>
	</div>

	<div style="width: 1046px;">
		<n-calendar [view]="month" [model]="yearViewModel"></n-calendar>
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

	disabledDay = new Date(2018, 6, 3);
	disabledRangeStart = new Date(2016, 0, 0);
	disabledRangeEnd = new Date(2017, 5, 3);

	todayMinusYear = new Date(this.date.getFullYear() + 1, this.date.getMonth(), this.date.getDate());

	constructor() {
		this.monthViewModel.disabledDates = [this.disabledDay];
		this.monthsViewModel.disabledDates = [[this.disabledRangeStart, this.disabledRangeEnd]];
		this.quarterViewModel.disabledDates = [[this.disabledRangeStart, this.disabledRangeEnd]];
		this.yearViewModel.disabledDates = [[this.disabledRangeStart, this.disabledRangeEnd]];
	}

	ngOnInit() {
		this.monthViewModel.startDate = this.date;
		this.monthViewModel.endDate = this.todayPlus5;

		this.monthsViewModel.startDate = this.date;
		this.monthsViewModel.endDate = this.todayPlus5;

		this.quarterViewModel.startDate = this.date;
		this.quarterViewModel.endDate = this.todayPlus5;

		this.yearViewModel.startDate = this.date;
		this.yearViewModel.endDate = this.todayMinusYear;
	}
}
