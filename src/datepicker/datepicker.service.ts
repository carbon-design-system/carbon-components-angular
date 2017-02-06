import { Injectable } from "@angular/core";

@Injectable()
export class DatepickerService {
	private selectedDate;

	getSelectedDate() {
		return this.selectedDate;
	}

	setSelectedDate(date) {
		this.selectedDate = date;
	}
}
