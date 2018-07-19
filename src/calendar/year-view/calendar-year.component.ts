import {
	Component,
	Input,
	OnInit,
} from "@angular/core";
import { DateTimeModel } from "./../date-time-model.class";
import { range } from "../../common/utils";

@Component({
	selector: "n-calendar-year-view",
	template: `
	<div class="calendar-view">
		<n-calendar-header [currentView]="currentView" header="yearOnlyRange"></n-calendar-header>
		<table class="calendar_grid">
			<tr
			class="grid_row--months"
			*ngFor="let i of range(-1, 2, -1)">
				<td
				*ngFor="let j of range(-1, 1, -1)"
				(click)="selectYear(i * 2 + j)"
				[ngClass]="{
					'today': isCurrentYear(i * 2 + j),
					'selected': isSelected(i * 2 + j),
					'range': inRange(i * 2 + j),
					'disabled': isDisabled(i * 2 + j)
				}">
					<div>
						<p>
							{{currentView.getFullYear() - (i * 2 + j)}}
						</p>
					</div>
				</td>
			</tr>
		</table>
	</div>
	`
})

export class CalendarYear implements OnInit {
	/**
	 * `DateTimeModel` to be used in this view.
	 *
	 * @type {DateTimeModel}
	 * @memberof CalendarMonths
	 */
	@Input() model: DateTimeModel;

	/**
	 * `Date` being used in this view.
	 *
	 * @type {Date}
	 * @memberof CalendarMonths
	 */
	currentView: Date = new Date();

	/**
	 * State to determine whether you are selecting `startDate` or `endDate`
	 *
	 * @memberof CalendarMonths
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
	 * @memberof CalendarMonths
	 */
	range(stop: number, start = 0, step = 1) {
		return range(stop, start, step);
	}

	/**
	 * Returns value indicating whether `year` is current year
	 *
	 * @param {number} yearIndex index of year in view
	 * @returns boolean
	 * @memberof CalendarYear
	 */
	isCurrentYear(yearIndex: number) {
		const now = new Date();
		const currentYear = this.currentView.getFullYear() - yearIndex; // Last year in the calendar view

		return currentYear === now.getFullYear();
	}

	/**
	 * Returns value indicating whether `year` is disabled
	 *
	 * @param {number} yearIndex index of year in view
	 * @returns boolean
	 * @memberof CalendarYear
	 */
	isDisabled(yearIndex: number) {
		const year = this.currentView.getFullYear() - yearIndex;
		return this.model.isDateDisabled(new Date(year, 1, 1));
	}

	/**
	 * Returns value indicating whether `year` is part of a range selection
	 *
	 * @param {number} yearIndex index of year in view
	 * @returns boolean
	 * @memberof CalendarYear
	 */
	inRange(yearIndex: number) {
		const year = this.currentView.getFullYear() - yearIndex;
		return this.model.isDateInRange(new Date(year, 1, 1));
	}

	/**
	 * Returns value indicating whether `year` is selected
	 *
	 * @param {number} yearIndex index of year in view
	 * @returns boolean
	 * @memberof CalendarYear
	 */
	isSelected(yearIndex: number) {
		const currentYearProvided = this.currentView.getFullYear() - yearIndex;

		for (let i = 0; i < 6; i ++) {
			const currentYearInView = this.currentView.getFullYear() - i;

			const isCurrentYearStart =
				currentYearInView === this.model.startDate.getFullYear() &&
				currentYearProvided === this.model.startDate.getFullYear();

			const isCurrentYearEnd =
				currentYearInView === this.model.endDate.getFullYear() &&
				currentYearProvided === this.model.endDate.getFullYear();

			if (isCurrentYearStart || isCurrentYearEnd) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Sets model's `startDate` and `endDate`
	 *
	 * @param {number} yearIndex index of year in view
	 * @memberof CalendarYear
	 */
	selectYear(yearIndex: number) {
		const selectedYear = this.currentView.getFullYear() - yearIndex;

		if (this.isDisabled(yearIndex)) {
			return;
		}

		if (this.rangeSelectionInProgress) {
			this.rangeSelectionInProgress = false;
			this.model.selectYearEnd(new Date(selectedYear));
			this.model.endDate = new Date(selectedYear, 11, 31);
			if (this.model.startDate.getTime() > this.model.endDate.getTime()) {
				const tmp = this.model.startDate;
				this.model.startDate = this.model.endDate;
				this.model.endDate = tmp;
			}
		} else {
			this.rangeSelectionInProgress = true;
			this.model.selectYear(new Date(selectedYear, 1, 1));
		}
	}
}
