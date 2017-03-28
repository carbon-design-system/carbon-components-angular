import {
	Component,
	Input,
	Output,
	EventEmitter,
	forwardRef,
	TemplateRef,
	ElementRef
} from "@angular/core";

import { KeyCodes } from "../constant/keys";

@Component({
	selector: "cdl-calendar",
	exportAs: "cdlCalendar",
	template: `
		<div *ngIf="showYear" class="calendar-month"><h2>{{year}}</h2></div>
		<div *ngIf="showMonth" class="calendar-month"><h3>{{months[month]}}</h3></div>
		<div class="calendar">
			<table>
				<tr>
					<th *ngFor="let day of days">{{day}}</th>
				</tr>
				<tr *ngFor="let row of rows; let rowIndex = index">
					<td *ngFor="let column of columns; let columnIndex = index;">
						<button
						(keydown)="onKeyDown($event, columnIndex + rowIndex*7)"
						[class.current-date]="currentMonth === month
						&& currentDay === (columnIndex + rowIndex*7 - firstDay + 1)
						&& currentYear === year"
						[class.selected-date]="selectedDateDay === (columnIndex + rowIndex*7 - firstDay + 1)
						&& selectedDateMonth === month
						&& selectedDateYear === year"
						[class.hidden]="(columnIndex + rowIndex*7 - firstDay) < 0 || (columnIndex + rowIndex*7 - firstDay + 1) > numberOfDays"
						aria-hidden="(columnIndex + rowIndex*7 - firstDay) < 0 || (columnIndex + rowIndex*7 - firstDay + 1) > numberOfDays"
						(click)="select($event, columnIndex + rowIndex*7 - firstDay + 1)">
							{{columnIndex + rowIndex*7 - firstDay + 1}}
						</button>
					</td>
				</tr>
			</table>
		</div>
	`,
	styleUrls: ["./calendar.component.scss"],
})
export class Calendar {
	@Input() date: Date = new Date();
	@Input() selectedDate: Date;
	@Input() showMonth = true;
	@Input() showYear = true;
	@Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

	// TODO: Need to implement angular translation
	public days = [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	];

	public months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];

	public today = new Date();
	public currentMonth = this.today.getMonth();
	public currentDay = this.today.getDate();
	public currentYear = this.today.getFullYear();
	public month;
	public year;
	public numberOfDays;
	public firstDay;
	public columns = new Array(7);
	public rows = new Array(6);
	public currentSelectedDate;
	public currentSelectedMonth;
	public currentSelectedYear;
	public allButtons;
	public selectedDateDay;
	public selectedDateMonth;
	public selectedDateYear;

	constructor(public elementRef: ElementRef) {}

	ngAfterViewInit() {
		this.allButtons = this.elementRef.nativeElement.querySelectorAll("button");
	}

	ngOnInit() {
		if (this.selectedDate) {
			this.selectedDateDay = this.selectedDate.getDate();
			this.selectedDateMonth = this.selectedDate.getMonth();
			this.selectedDateYear = this.selectedDate.getFullYear();
		}
	}

	updateCalendar() {
		this.month = this.date.getMonth();
		this.year = this.date.getFullYear();

		this.numberOfDays = this.daysInMonth(this.month + 1, this.year);
		this.firstDay = this.firstDayInMonth(this.month, this.year);

		// check for selected date on calendar change
		if (this.currentSelectedDate && this.currentSelectedMonth === this.month && this.currentSelectedYear === this.year) {
			this.currentSelectedDate.classList.add("selected-date");
		} else if (this.currentSelectedDate) {
			this.clearSelectedDate();
		}
	}

	firstDayInMonth(month, year) {
		return new Date(year, month, 1).getDay();
	}

	daysInMonth(month, year) {
		return new Date(year, month, 0).getDate();
	}

	select(evt, date) {
		let selectedDate;
		this.selectedDateDay = null;

		if (!evt.target.classList.contains("selected-date")) {
			if (this.currentSelectedDate) {
				this.currentSelectedDate.classList.remove("selected-date");
			}

			evt.target.classList.add("selected-date");
			this.currentSelectedDate = evt.target;
			this.currentSelectedMonth = this.month;
			this.currentSelectedYear = this.year;

			selectedDate = new Date(this.year, this.month, date);
		} else {
			this.clearSelectedDate();
			selectedDate = null;
		}

		this.onSelect.emit(selectedDate);
	}

	onKeyDown(evt, idx) {
		if (evt.keyCode === KeyCodes.RIGHT_ARROW && this.allButtons[idx + 1]) {
			evt.preventDefault();
			this.allButtons[idx + 1].focus();
		} else if (evt.keyCode === KeyCodes.LEFT_ARROW && idx > 0) {
			evt.preventDefault();
			this.allButtons[idx - 1].focus();
		} else if (evt.keyCode === KeyCodes.UP_ARROW && idx - 7 >= 0) {
			evt.preventDefault();
			this.allButtons[idx - 7].focus();
		} else if (evt.keyCode === KeyCodes.DOWN_ARROW && this.allButtons[idx + 7]) {
			evt.preventDefault();
			this.allButtons[idx + 7].focus();
		}
	}

	clearSelectedDate() {
		if (this.currentSelectedDate) {
			this.currentSelectedDate.classList.remove("selected-date");
			this.currentSelectedDate = null;
			this.currentSelectedMonth = null;
			this.currentSelectedYear = null;
		}
	}

	ngOnChanges(obj) {
		this.updateCalendar();
	}
}
