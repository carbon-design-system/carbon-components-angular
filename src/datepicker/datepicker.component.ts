import {
	Component,
	Input,
	Output,
	EventEmitter
} from "@angular/core";

@Component({
	selector: "cdl-date-picker",
	template: `
	<div class="date-picker">
		<div class="date-picker-year">
			<h2>
			<button class="date-picker-icon" (click)="goPrevYear()">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
					<path class="st0" d="M12.3 14.7L5.7 8.1l6.6-6.5-.9-.9L4 8.1l7.4 7.5z"/>
				</svg>
			</button>

			{{year}}

			<button class="date-picker-icon" (click)="goNextYear()">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
					<path class="st0" d="M4 14.7l6.6-6.6L4 1.6l.8-.9 7.5 7.4-7.5 7.5z"/>
				</svg>
			</button>
			</h2>
		</div>

		<div class="month-arrows">
			<button class="date-picker-icon prev-month" (click)="goPrevMonth()">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
					<path class="st0" d="M12.3 14.7L5.7 8.1l6.6-6.5-.9-.9L4 8.1l7.4 7.5z"/>
				</svg>
			</button>

			<button class="date-picker-icon next-month" (click)="goNextMonth()">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
					<path class="st0" d="M4 14.7l6.6-6.6L4 1.6l.8-.9 7.5 7.4-7.5 7.5z"/>
				</svg>
			</button>
		</div>
		<div class="first">
			<cdl-calendar
				[date]="date"
				[selectedDate]="selectedDate"
				[showYear]="false"
				(onSelect)="onSelect($event, calendar2)"
				#calendar1="cdlCalendar">
			</cdl-calendar>
		</div>

		<div class="second">
			<cdl-calendar
				[date]="nextMonth"
				[showYear]="false"
				[selectedDate]="selectedDate"
				(onSelect)="onSelect($event, calendar1)"
				#calendar2="cdlCalendar">
			</cdl-calendar>
		</div>
	 </div>
		`
})
export class Datepicker {
	private date;
	private nextMonth;
	private year;
	@Input() selectedDate;

	@Output() onSelectDate: EventEmitter<any> = new EventEmitter();

	constructor() {
		this.date = new Date();
		this.year = this.date.getFullYear();

		this.getNextMonth();
	}

	ngOnInit() {
		if (this.selectedDate) {
			this.date = this.selectedDate;
			this.year = this.date.getFullYear();
			this.getNextMonth();
		}
	}

	goPrevMonth() {
		let currentMonth = this.date.getMonth();
		if (currentMonth === 0 ) {
			this.year--;
			this.date = new Date(this.year, 10);
			this.getNextMonth();
		} else {
			this.date = new Date(this.year, currentMonth - 1);
			this.getNextMonth();
		}
	}

	goNextMonth() {
		if (this.nextMonth.getMonth() === 11) {
			this.year++;
			this.date = new Date(this.year, 1);
			this.getNextMonth();
		} else {
			this.date = this.nextMonth;
			this.getNextMonth();
		}
	}

	goNextYear() {
		this.year++;

		this.date = new Date(this.year, this.date.getMonth());
		this.getNextMonth();
	}

	goPrevYear() {
		this.year--;
		this.date = new Date(this.year, this.date.getMonth());
		this.getNextMonth();
	}

	getNextMonth() {
		if (this.date.getMonth() === 11) {
				this.nextMonth = new Date(this.date.getFullYear() + 1, 0, 1);
		} else {
				this.nextMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1);
		}
	}

	onSelect(date, calendar) {
		calendar.clearSelectedDate();
		this.onSelectDate.emit(date);
		this.selectedDate = date;
	}
}
