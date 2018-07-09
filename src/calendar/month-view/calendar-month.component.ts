import {
	Component,
	Input,
	OnInit,
} from "@angular/core";
import { DateTimeModel } from "./../date-time-model.class";
import { range } from "../../common/utils";

@Component({
	selector: "n-calendar-month-view",
	template: `
	<div class="calendar-view">
		<n-calendar-header [currentView]="currentView" [monthCount]="monthCount"></n-calendar-header>
		<div class="calendar_month-container"
		*ngFor="let month of range(monthCount)">
			<table class="calendar_grid calendar_month">
				<tr class="grid_row_header--month">
						<th *ngFor="let day of model.daysOfWeek"><div>{{day | translate}}</div></th>
				</tr>
				<tr
				class="grid_row--month"
				*ngFor="let week of daysOfMonth(month)">
				<td
					*ngFor="let day of week"
					(click)="selectDay(day, month)"
					[ngClass]="{
						'today': isCurrentDay(day, month),
						'empty': !day,
						'selected': isSelected(model.startDate, month) && day == model.startDate.getDate()
							|| isSelected(model.endDate, month) && day == model.endDate.getDate(),
						'range': inRange(day, month),
						'disabled': isDisabled(day, month)
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
export class CalendarMonth implements OnInit {

	@Input() model: DateTimeModel;
	@Input() monthCount = 1;

	currentView: Date = new Date();
	selected: boolean;
	rangeSelectionInProgress = false;

	ngOnInit() {
		this.currentView = new Date(this.model.startDate);
		if (!this.currentView || isNaN(this.currentView.getTime())) {
			this.currentView = new Date();
		}
	}

	range(stop: number, start = 0, step = 1) {
		if (stop) {
			return range(stop);
		}
	}

	isCurrentDay(day, position) {
		const now = new Date();

		return (
			this.currentView.getFullYear() === now.getFullYear() &&
			this.currentView.getMonth() + position === now.getMonth() &&
			day === now.getDate()
		);
	}

	isDisabled(day: number, position = 0) {
		return this.model.isDateDisabled(new Date(this.currentView.getFullYear(), this.currentView.getMonth() + position, day));
	}

	daysOfMonth(position = 0) {
		return this.model.daysOfMonth(new Date(this.currentView.getFullYear(), this.currentView.getMonth() + position, 1));
	}

	inRange(day: number, position = 0) {
		if (!day) {
			return false;
		}
		return this.model.isDateInRange(new Date(this.currentView.getFullYear(), this.currentView.getMonth() + position, day));
	}

	isSelected(date: Date, position = 0) {
		if (!date) {
			return false;
		}
		return this.currentView.getMonth() + position === date.getMonth() &&
		this.currentView.getFullYear() === date.getFullYear();
	}

	selectDay(day: number, position = 0) {
		if (this.rangeSelectionInProgress) {
			this.rangeSelectionInProgress = false;
			this.model.endDate = new Date(this.currentView.getFullYear(), this.currentView.getMonth() + position, day);
			if (this.model.startDate.getTime() > this.model.endDate.getTime()) {
				const tmp = this.model.startDate;
				this.model.startDate = this.model.endDate;
				this.model.endDate = tmp;
			}
		} else {
			this.rangeSelectionInProgress = true;
			this.model.selectDay(new Date(this.currentView.getFullYear(), this.currentView.getMonth() + position, day));
		}
	}

	daysInMonth(month, year) { // Use 1 for January, 2 for February, etc.
		return new Date(year, month + 1, 0).getDate();
	}
}
