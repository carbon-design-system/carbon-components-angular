export class DateTimeModel {
	startDate: Date;
	endDate: Date;

	/**
	 * 0 = Sunday
	 * 1 = Monday
	 * 2 = Tuesday
	 * 3 = Wednesday
	 * 4 = Thursday
	 * 5 = Friday
	 * 6 = Saturday
	 *
	 * Defaults to 0 (Sunday)
	 *
	 * @memberof DateTimeModel
	 */
	weekStart = 0;

	/**
	 * An array of disabled dates and/or date ranges.
	 *
	 * Date is a Javascript `Date`. Range is an array with a start and end `Date`.
	 * If any of those is `null`, it represents an open range.
	 *
	 * ```typescript
	 * // dates (July 10th, 2018 and August 10th, 2018)
	 * [new Date(2018, 6, 10), new Date(2018, 7, 10)]
	 *
	 * // date (July 10th, 2018) and a range (from August 10th, 2018 to forever)
	 * [new Date(2018, 6, 10), [new Date(2018, 7, 10), null]]
	 * ```
	 *
	 * @memberof DateTimeModel
	 */
	disabledDates = [];

	/**
	 * An array of short week names, starting from `weekStart`
	 *
	 * @readonly
	 * @memberof DateTimeModel
	 */
	get daysOfWeek() {
		const sunday = new Date(2018, 5, 10);
		const retVal = [];

		for (let i = this.weekStart; i < this.weekStart + 7; i++) {
			const day = new Date(sunday);
			day.setDate(day.getDate() + i);
			retVal.push(day.toLocaleString(navigator.language, {weekday: "short"}));
		}

		return retVal;
	}

	constructor(startDate?: Date, endDate?: Date) {
		this.startDate = startDate;
		this.endDate = endDate;
	}

	selectDay(day: Date = new Date()) {
		this.startDate = new Date(day.getFullYear(), day.getMonth(), day.getDate());
		this.endDate = new Date(day.getFullYear(), day.getMonth(), day.getDate(), 23, 59, 59);
	}

	selectWeek(day: Date = new Date()) {
		this.startDate = this.weekStartDate(day);
		this.endDate = this.weekStartDate(day);
		this.endDate.setDate(this.endDate.getDate() + 6);
		this.endDate.setHours(23);
		this.endDate.setMinutes(59);
		this.endDate.setSeconds(59);
	}

	selectToday() {
		this.selectDay(new Date());
	}

	selectYesterday() {
		const yesterday = new Date();
		yesterday.setDate(yesterday.getDate() - 1);
		this.selectDay(yesterday);
	}

	selectWeekToDate(targetDate = new Date()) {
		this.startDate = this.weekStartDate(targetDate);
		this.endDate = targetDate;
	}

	selectMonthsToDate(targetDate = new Date(), monthCount = 1) {
		this.startDate = new Date(targetDate.getFullYear(), targetDate.getMonth() - monthCount + 1, 1);
		this.endDate = targetDate;
	}

	selectMonth(day: Date) {
		this.startDate = new Date(day.getFullYear(), day.getMonth(), 1);
		this.endDate = new Date(day.getFullYear(), day.getMonth() + 1, 0);  // 0 selects last day of previous month
	}

	selectLastMonth() {
		const now = new Date();
		this.selectMonth(new Date(now.getFullYear(), now.getMonth() - 1, 1));
	}

	weekStartDate(day: Date = new Date()): Date {
		return new Date(day.getFullYear(), day.getMonth(), day.getDate() - day.getDay() + this.weekStart);
	}

	daysOfMonth(day: Date = new Date()): Array<Array<number>> {
		const weeks = [];

		const firstOfTheMonth = new Date(day.getFullYear(), day.getMonth(), 1);
		const lastOfTheMonth = new Date(day.getFullYear(), day.getMonth() + 1, 0);
		let dayIndex = 1;

		for (let w = 1; w < 7; w++) {
			const week = [];
			for (let d = 0; d < 7; d++) {
				if (w === 1) {
					// first week is special, we have to determine when to start
					if (d >= firstOfTheMonth.getDay()) {
						week.push(dayIndex++);
					} else {
						week.push(null);
					}
				} else if (dayIndex <= lastOfTheMonth.getDate()) {
					// every other day of the month
					week.push(dayIndex++);
				} else {
					// except for when month ends
					week.push(null);
				}
			}
			weeks.push(week);
		}

		return weeks;
	}

	isDateDisabled(day: Date) {
		this.disabledDates.forEach(dd => {
			if (Array.isArray(dd)) {
				if (dd.length !== 2) {
					console.warn(dd, "should have length of 2, range start and range end. They can be set to `null` for open range.");
				} else if (
					!dd[0] && day.getTime() < dd[1].getTime() ||
					!dd[1] && day.getTime() > dd[0].getTime() ||
					!dd[0] && !dd[1]) {
						return true;
				}
			} else if (
				day.getFullYear() === dd.getFullYear() &&
				day.getMonth() === dd.getMonth() &&
				day.getDate() === dd.getDate()) {
					return true;
			}
		});
		return false;
	}

	isDateInRange(day: Date) {
		const time = day.getTime();
		return this.startDate.getTime() < time && time > this.endDate.getTime();
	}

	compare(other: DateTimeModel): number {
		// TODO
		return 0;
	}
}
