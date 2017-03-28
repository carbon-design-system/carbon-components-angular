import { Injectable } from "@angular/core";

@Injectable()
export class DatepickerService {
	public selectedDate;

	getSelectedDate() {
		return this.selectedDate;
	}

	setSelectedDate(date) {
		this.selectedDate = date;
	}
}
