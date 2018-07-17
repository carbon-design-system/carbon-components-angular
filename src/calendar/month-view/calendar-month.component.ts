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
	/**
	 * `DateTimeModel` to be used in this view.
	 *
	 * @type {DateTimeModel}
	 * @memberof CalendarMonth
	 */
	@Input() model: DateTimeModel;

	/**
	 * Number of months to display in this view.
	 *
	 * @memberof CalendarMonth
	 */
	@Input() monthCount = 1;

	/**
	 * `Date` being used in this view.
	 *
	 * @type {Date}
	 * @memberof CalendarMonth
	 */
	currentView: Date = new Date();

	/**
	 * State to determine whether you are selecting `startDate` or `endDate`
	 *
	 * @memberof CalendarMonth
	 */
	rangeSelectionInProgress = false;

	ngOnInit() {
		this.currentView = new Date(this.model.startDate);

		if (!this.currentView || isNaN(this.currentView.getTime())) {
			this.currentView = new Date();
		}
	}

	/**
	 * Wrapper for `range` function in utils because it cannot
	 * be directly used in template
	 *
	 * @param {number} stop
	 * @param {number} [start=0]
	 * @param {number} [step=1]
	 * @returns Array<any>
	 * @memberof CalendarMonth
	 */
	range(stop: number, start = 0, step = 1) {
		return range(stop, start, step);
	}

	/**
	 * Returns value indicating whether `day` is current day
	 *
	 * @param {number} day day of month
	 * @param {number} [position=0] index of month in view
	 * @returns boolean
	 * @memberof CalendarMonth
	 */
	isCurrentDay(day: number, position = 0) {
		const now = new Date();

		return (
			this.currentView.getFullYear() === now.getFullYear() &&
			this.currentView.getMonth() + position === now.getMonth() &&
			day === now.getDate()
		);
	}

	/**
	 * Convenience method to figure out if `day` is disabled
	 *
	 * @param {number} day day of month
	 * @param {number} [position=0] index of month in view
	 * @returns boolean
	 * @memberof CalendarMonth
	 */
	isDisabled(day: number, position = 0) {
		return this.model.isDateDisabled(new Date(this.currentView.getFullYear(), this.currentView.getMonth() + position, day));
	}

	/**
	 * Convenience method to figure out if days of the month in view
	 *
	 * @param {number} [position=0] index of month in view
	 * @returns boolean
	 * @memberof CalendarMonth
	 */
	daysOfMonth(position = 0) {
		return this.model.daysOfMonth(new Date(this.currentView.getFullYear(), this.currentView.getMonth() + position, 1));
	}

	/**
	 * Convenience method to figure out if `day` is part of a range selection
	 *
	 * @param {number} day day of month
	 * @param {number} [position=0] index of month in view
	 * @returns boolean
	 * @memberof CalendarMonth
	 */
	inRange(day: number, position = 0) {
		if (!day) {
			return false;
		}
		return this.model.isDateInRange(new Date(this.currentView.getFullYear(), this.currentView.getMonth() + position, day));
	}

	/**
	 * Returns value indicating whether `day` is selected
	 *
	 * @param {number} day day of month
	 * @param {number} [position=0] index of month in view
	 * @returns boolean
	 * @memberof CalendarMonth
	 */
	isSelected(date: Date, position = 0) {
		if (!date) {
			return false;
		}

		const currentMonthInView = (this.currentView.getMonth() + position) % 12;
		let currentYearInView = this.currentView.getFullYear();

		if (this.currentView.getMonth() + position === 12) {
			currentYearInView += 1;
		}

		return currentMonthInView === date.getMonth() &&
			currentYearInView === date.getFullYear();
	}

	/**
	 *	Sets model's `startDate` and `endDate`
	 *
	 * @param {number} day day of month
	 * @param {number} [position=0] index of month in view
	 * @memberof CalendarMonth
	 */
	selectDay(day: number, position = 0) {
		if (this.isDisabled(day, position)) {
			return;
		}

		const currentMonthInView = (this.currentView.getMonth() + position) % 12;
		let currentYearInView = this.currentView.getFullYear();

		if (this.currentView.getMonth() + position === 12) {
			currentYearInView += 1;
		}

		if (this.rangeSelectionInProgress) {
			this.rangeSelectionInProgress = false;
			this.model.endDate = DateTimeModel.dayEnd(new Date(currentYearInView, currentMonthInView, day));

			if (this.model.startDate.getTime() > this.model.endDate.getTime()) {
				const tmp = this.model.startDate;
				this.model.startDate = this.model.endDate;
				this.model.endDate = tmp;
			}
		} else {
			this.rangeSelectionInProgress = true;
			this.model.selectDay(new Date(currentYearInView, currentMonthInView, day));
		}
	}
}
