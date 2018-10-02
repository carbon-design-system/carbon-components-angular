import {
	Component,
	Input,
	OnInit
} from "@angular/core";
import { DateTimeModel } from "./../date-time-model.class";
import { range } from "../../common/utils";

@Component({
	selector: "ibm-calendar-months-view",
	template: `
	<div class="calendar-view">
		<ibm-calendar-header [currentView]="currentView" header="yearOnly"></ibm-calendar-header>
		<table class="calendar_grid">
			<tr
			class="grid_row--months"
			*ngFor="let i of range(3)">
				<td
				*ngFor="let j of range(4)"
				(click)="selectMonth(i * 4 + j)"
				[ngClass]="{
					'today': isCurrentMonth(i * 4 + j),
					'selected': isSelected(i * 4 + j),
					'range': inRange(i * 4 + j),
					'disabled': isDisabled(i * 4 + j)
				}">
					<div>
						<p>
							{{months[i * 4 + j] | translate}}
						</p>
					</div>
				</td>
			</tr>
		</table>
	</div>
	`
})
export class CalendarMonths implements OnInit {

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

	/**
	 * Reference to month translation keys in `DateTimeModel`
	 *
	 * @memberof CalendarMonths
	 */
	months = DateTimeModel.monthsTranslateKeys;

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
	 * Returns value indicating whether `month` is current month
	 *
	 * @param {number} month in year
	 * @returns boolean
	 * @memberof CalendarMonths
	 */
	isCurrentMonth(month: number) {
		const now = new Date();

		return (
			this.currentView.getFullYear() === now.getFullYear() &&
			month === now.getMonth()
		);
	}

	/**
	 * Returns value indicating whether `month` is disabled
	 *
	 * @param {number} month in year
	 * @returns boolean
	 * @memberof CalendarMonths
	 */
	isDisabled(month: number) {
		return this.model.isDateDisabled(new Date(this.currentView.getFullYear(), month, 1));
	}

	/**
	 * Returns value indicating whether `month` is part of a range selection
	 *
	 * @param {number} month in year
	 * @returns boolean
	 * @memberof CalendarMonths
	 */
	inRange(month: number) {
		return this.model.isDateInRange(new Date(this.currentView.getFullYear(), month, 1));
	}

	/**
	 * Returns value indicating whether `month` is selected
	 *
	 * @param {number} month in year
	 * @memberof CalendarMonths
	 */
	isSelected(month: number) {
		return this.currentView.getFullYear() === this.model.startDate.getFullYear() && month === this.model.startDate.getMonth()
			|| this.currentView.getFullYear() === this.model.endDate.getFullYear() && month === this.model.endDate.getMonth();
	}

	/**
	 * Sets model's `startDate` and `endDate`
	 *
	 * @param {number} month in year
	 * @memberof CalendarMonths
	 */
	selectMonth(month: number) {
		if (this.isDisabled(month)) {
			return;
		}

		if (this.rangeSelectionInProgress) {
			this.rangeSelectionInProgress = false;
			this.model.selectMonthEnd(new Date(this.currentView.getFullYear(), month));
			if (this.model.startDate.getTime() > this.model.endDate.getTime()) {
				const tmp = this.model.startDate;
				this.model.startDate = this.model.endDate;
				this.model.endDate = tmp;
			}
		} else {
			this.rangeSelectionInProgress = true;
			this.model.selectMonth(new Date(this.currentView.getFullYear(), month, 1));
		}
	}
}
