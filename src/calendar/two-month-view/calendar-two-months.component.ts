import {
	AfterViewInit,
	Component,
	ElementRef,
	EventEmitter,
	forwardRef,
	Input,
	OnChanges,
	OnInit,
	Output,
	TemplateRef
} from "@angular/core";
import { DatePipe } from "@angular/common";
import { DateTimeModel } from "./../date-time-model.class";

@Component({
	selector: "n-calendar-two-month-view",
	template: `
	<div class="calendar-view">
		<n-calendar-header [currentlyViewed]="currentlyViewed" [header]="header"></n-calendar-header>
		<div class="calendar_month-container">
			<table class="calendar_grid calendar_month">
				<tr class="grid_row_header--month">
						<th *ngFor="let day of model.daysOfWeek"><div>{{day | translate}}</div></th>
				</tr>
				<tr
				class="grid_row--month"
				*ngFor="let week of daysOfMonth()">
				<td
					*ngFor="let day of week"
					(click)="selectDay(day)"
					[ngClass]="{
						'empty': !day,
						'selected': isSelected(model.startDate) && day == model.startDate.getDate()
							|| isSelected(model.endDate) && day == model.endDate.getDate(),
						'range': inRange(day),
						'disabled': isDisabled(day)
					}">
						<div>
							<p>
								{{day}}
							</p>
						</div>
					</td>
				</tr>
			</table>
		</div>
		<div class="calendar_month-container">
			<table class="calendar_grid calendar_month">
			<tr class="grid_row_header--month">
					<th *ngFor="let day of model.daysOfWeek"><div>{{day | translate}}</div></th>
			</tr>
			<tr
			class="grid_row--month"
			*ngFor="let week of daysOfMonth(1)">
			<td
				*ngFor="let day of week"
				(click)="selectDay(day, 1)"
				[ngClass]="{
					'empty': !day,
					'selected': isSelected(model.startDate, 1) && day == model.startDate.getDate()
						|| isSelected(model.endDate, 1) && day == model.endDate.getDate(),
					'range': inRange(day, 1),
					'disabled': isDisabled(day, 1)
				}">
					<div>
						<p>
							{{day}}
						</p>
					</div>
				</td>
			</tr>
		</table>
		</div>
	</div>
	`
})
export class CalendarTwoMonths implements OnInit {

	@Input() model: DateTimeModel;
	currentlyViewed: Date = new Date();

	selected: boolean;
	rangeSelectionInProgress = false;
	header = "twoMonths";

	ngOnInit() {
		this.currentlyViewed = new Date(this.model.startDate);
		this.model.disabledDates = [new Date(this.currentlyViewed.getFullYear(), this.currentlyViewed.getMonth(), 5)];

		if (!this.currentlyViewed || isNaN(this.currentlyViewed.getTime())) {
			this.currentlyViewed = new Date();
		}
	}

	isDisabled(day: number, position = 0) {
		this.model.isDateDisabled(new Date(this.currentlyViewed.getFullYear(), this.currentlyViewed.getMonth() + position, day));
	}

	daysOfMonth(position = 0) {
		return this.model.daysOfMonth(new Date(this.currentlyViewed.getFullYear(), this.currentlyViewed.getMonth() + position, 1));
	}

	inRange(day: number, position = 0) {
		if (!day) {
			return false;
		}
		return this.model.isDateInRange(new Date(this.currentlyViewed.getFullYear(), this.currentlyViewed.getMonth() + position, day));
	}

	isSelected(date: Date, position = 0) {
		if (!date) {
			return false;
		}
		return this.currentlyViewed.getMonth() + position === date.getMonth() &&
		this.currentlyViewed.getFullYear() === date.getFullYear();
	}

	selectDay(day: number, position = 0) {
		if (this.rangeSelectionInProgress) {
			this.rangeSelectionInProgress = false;
			this.model.endDate = new Date(this.currentlyViewed.getFullYear(), this.currentlyViewed.getMonth() + position, day);
			if (this.model.startDate.getTime() > this.model.endDate.getTime()) {
				const tmp = this.model.startDate;
				this.model.startDate = this.model.endDate;
				this.model.endDate = tmp;
			}
		} else {
			this.rangeSelectionInProgress = true;
			this.model.selectDay(new Date(this.currentlyViewed.getFullYear(), this.currentlyViewed.getMonth() + position, day));
		}
	}

	daysInMonth(month, year) { // Use 1 for January, 2 for February, etc.
		return new Date(year, month + 1, 0).getDate();
	}
}
