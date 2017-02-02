import { Component, OnInit } from "@angular/core";

@Component({
	selector: "calendar-demo",
	templateUrl: "./calendar-demo.component.html"
})

export class CalendarDemo {
	date = new Date();
	selectedDate;

	counter = this.date.getMonth();

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
