import { Component, OnInit } from "@angular/core";

@Component({
	selector: "calendar-demo",
	template: `
	<h1>Calendar</h1>

	<button class="btn--primary" (click)="changeDate()">Change</button>

	<br><br>
	Selected Date: {{selectedDate}}

	<br><br>
	<n-calendar [date]="date" [selectedDate]="selected" (onSelect)="onSelect($event)"></n-calendar>
	`
})

export class CalendarDemo {
	date = new Date();
	selectedDate;

	counter = this.date.getMonth();

	selected = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate() + 1);

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
