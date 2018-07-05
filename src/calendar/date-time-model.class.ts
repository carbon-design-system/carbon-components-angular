export class DateTimeModel {

	static monthsTranslateKeys = [
		"CALENDAR.MONTHS.JANUARY", "CALENDAR.MONTHS.FEBRUARY", "CALENDAR.MONTHS.MARCH", "CALENDAR.MONTHS.APRIL",
		"CALENDAR.MONTHS.MAY", "CALENDAR.MONTHS.JUNE", "CALENDAR.MONTHS.JULY", "CALENDAR.MONTHS.AUGUST",
		"CALENDAR.MONTHS.SEPTEMBER", "CALENDAR.MONTHS.OCTOBER", "CALENDAR.MONTHS.NOVEMBER", "CALENDAR.MONTHS.DECEMBER"
	];

	static shortWeekdaysTranslateKeys = [
		"CALENDAR.SHORTWEEKDAYS.SUNDAY", "CALENDAR.SHORTWEEKDAYS.MONDAY", "CALENDAR.SHORTWEEKDAYS.TUESDAY", "CALENDAR.SHORTWEEKDAYS.WEDNESDAY",
		"CALENDAR.SHORTWEEKDAYS.THURSDAY", "CALENDAR.SHORTWEEKDAYS.FRIDAY", "CALENDAR.SHORTWEEKDAYS.SATURDAY"
	];

	static dayStart(day: Date) {
		return new Date(day.getFullYear(), day.getMonth(), day.getDate());
	}

	static dayEnd(day: Date) {
		return new Date(day.getFullYear(), day.getMonth(), day.getDate(), 23, 59, 59);
	}

	/**
	 * Start date of the range.
	 *
	 * @type {Date}
	 * @memberof DateTimeModel
	 */
	startDate: Date;

	/**
	 * End date of the range.
	 *
	 * @type {Date}
	 * @memberof DateTimeModel
	 */
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
	 * An array of short week names, starting from `weekStart`.
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
			retVal.push(DateTimeModel.shortWeekdaysTranslateKeys[day.getDay()]);
		}

		return retVal;
	}

	constructor(startDate?: Date, endDate?: Date) {
		this.startDate = startDate;
		this.endDate = endDate;
	}

	/**
	 * Selects the full day that `day` is part of.
	 *
	 * Adjusts `startDate` and `endDate`
	 *
	 * @param {Date} [day=new Date()]
	 * @memberof DateTimeModel
	 */
	selectDay(day: Date = new Date()) {
		this.startDate = new Date(day.getFullYear(), day.getMonth(), day.getDate());
		this.endDate = new Date(day.getFullYear(), day.getMonth(), day.getDate(), 23, 59, 59);
	}

	/**
	 * Selects the week that `day` is part of.
	 *
	 * Adjusts `startDate` and `endDate`
	 *
	 * @param {Date} [day=new Date()]
	 * @memberof DateTimeModel
	 */
	selectWeek(day: Date = new Date()) {
		this.startDate = this.weekStartDate(day);
		this.endDate = this.weekStartDate(day);
		this.endDate.setDate(this.endDate.getDate() + 6);
		this.endDate.setHours(23);
		this.endDate.setMinutes(59);
		this.endDate.setSeconds(59);
	}

	/**
	 * Convenience function that selects today.
	 *
	 * Adjusts `startDate` and `endDate`
	 *
	 * @memberof DateTimeModel
	 */
	selectToday() {
		this.selectDay(new Date());
	}

	/**
	 * Selects yesterday.
	 *
	 * Adjusts `startDate` and `endDate`
	 *
	 * @memberof DateTimeModel
	 */
	selectYesterday() {
		const yesterday = new Date();
		yesterday.setDate(yesterday.getDate() - 1);
		this.selectDay(yesterday);
	}

	/**
	 * Selects a week that `targetDate` belongs to from the beginning
	 * (as set with `weekStart`) until the `targetDate`, included.
	 *
	 * @param {*} [targetDate=new Date()]
	 * @memberof DateTimeModel
	 */
	selectWeekToDate(targetDate = new Date()) {
		this.startDate = this.weekStartDate(targetDate);
		this.endDate = targetDate;
	}

	/**
	 * Selects a `monthCount` of months ending with the one that `targetDate` belongs to
	 * from the beginning of the first until the `targetDate`, included.
	 *
	 * @param {*} [targetDate=new Date()]
	 * @param {number} [monthCount=1]
	 * @memberof DateTimeModel
	 */
	selectMonthsToDate(targetDate = new Date(), monthCount = 1) {
		this.startDate = new Date(targetDate.getFullYear(), targetDate.getMonth() - monthCount + 1, 1);
		this.endDate = targetDate;
	}

	/**
	 * Selects month that `day` belongs to.
	 *
	 * @param {*} [day=new Date()]
	 * @memberof DateTimeModel
	 */
	selectMonth(day = new Date()) {
		this.startDate = new Date(day.getFullYear(), day.getMonth(), 1);
		this.endDate = new Date(day.getFullYear(), day.getMonth() + 1, 0, 23, 59, 59);  // 0 selects last day of previous month
	}

	/**
	 * Selects previous month.
	 *
	 * @memberof DateTimeModel
	 */
	selectLastMonth() {
		const now = new Date();
		this.selectMonth(new Date(now.getFullYear(), now.getMonth() - 1, 1));
	}

	/**
	 * Selects a quarter that `targetDate` belongs to from the first day of the
	 * quarter to `targetDate`.
	 *
	 * @param {*} [targetDate=new Date()]
	 * @memberof DateTimeModel
	 */
	selectQuarterToDate(targetDate = new Date()) {
		const year = targetDate.getFullYear();
		const time = targetDate.getTime();
		const quarters = [new Date(year, 0, 1), new Date(year, 3, 1), new Date(year, 6, 1), new Date(year, 9, 1)];
		const quarterTimes = quarters.map(q => q.getTime());

		if (quarterTimes[0] < time && time < quarterTimes[1]) {
			// Q1
			this.startDate = quarters[0];
		} else if (quarterTimes[1] < time && time < quarterTimes[2]) {
			// Q2
			this.startDate = quarters[1];
		} else if (quarterTimes[2] < time && time < quarterTimes[3]) {
			// Q3
			this.startDate = quarters[2];
		} else {
			// Q4
			this.startDate = quarters[3];
		}

		this.endDate = targetDate;
	}

	/**
	 * Select a `quarter` of the `year`.
	 *
	 * `quarter` ranges from `0` to `3`, Q1 being `0`
	 *
	 * @param {number} quarter
	 * @param {*} [year=new Date().getFullYear()]
	 * @memberof DateTimeModel
	 */
	selectQuarter(quarter: number, year = new Date().getFullYear()) {
		const quarters = [
			new Date(year, 0, 1),
			new Date(year, 3, 1),
			new Date(year, 6, 1),
			new Date(year, 9, 1),
			new Date(year + 1, 0, 1)
		];

		this.startDate = quarters[quarter];
		this.endDate = quarters[quarter + 1];
		this.endDate.setDate(0);
		this.endDate.setHours(23);
		this.endDate.setMinutes(59);
		this.endDate.setSeconds(59);
	}

	selectLastQuarter(date = new Date()) {
		this.selectQuarter(date.getMonth() / 3, date.getFullYear());
	}

	/**
	 * Returns a week start date for a week that `day` is in.
	 *
	 * @param {Date} [day=new Date()]
	 * @returns {Date}
	 * @memberof DateTimeModel
	 */
	weekStartDate(day: Date = new Date()): Date {
		return new Date(day.getFullYear(), day.getMonth(), day.getDate() - day.getDay() + this.weekStart);
	}

	/**
	 * Returns a 2D array representing days of month the way they would be displayed
	 * in the calendar. With `null` representing empty days.
	 *
	 * Month of June, 2018, with week starting on Sunday, will return
	 *
	 * ```typescript
	 * [
	 * 	[ null, null, null, null, null, 1, 2 ],
	 * 	[ 3, 4, 5, 6, 7, 8, 9 ],
	 * 	[ 10, 11, 12, 13, 14, 15, 16 ],
	 * 	[ 17, 18, 19, 20, 21, 22, 23 ],
	 * 	[ 24, 25, 26, 27, 28, 29, 30 ],
	 * 	[ null, null, null, null, null, null, null ]
	 * ]
	 * ```
	 *
	 * @param {Date} [day=new Date()]
	 * @returns {Array<Array<number>>}
	 * @memberof DateTimeModel
	 */
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
					if (d >= firstOfTheMonth.getDay() + this.weekStart) {
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

	/**
	 * Tells you if `day` is disabled in `disabledDates` property.
	 *
	 * @param {Date} day
	 * @returns
	 * @memberof DateTimeModel
	 */
	isDateDisabled(day: Date) {
		for (let i = 0; i < this.disabledDates.length; i++) {
			const dd = this.disabledDates[i];

			if (Array.isArray(dd)) {
				if (dd.length !== 2) {
					console.warn(dd, "should have length of 2, range start and range end. They can be set to `null` for open range.");
				} else if (
					!dd[0] && dd[1] && day.getTime() <= dd[1].getTime() ||
					dd[0] && !dd[1] && day.getTime() >= dd[0].getTime() ||
					!dd[0] && !dd[1] ||
					dd[0] && dd[1] && day.getTime() <= dd[1].getTime() && day.getTime() >= dd[0].getTime()) {
						return true;
				}
			} else if (
				day.getFullYear() === dd.getFullYear() &&
				day.getMonth() === dd.getMonth() &&
				day.getDate() === dd.getDate()) {
					return true;
			}
		}
		return false;
	}

	/**
	 * Tells you if `day` is inside of selected range.
	 *
	 * @param {Date} day
	 * @returns
	 * @memberof DateTimeModel
	 */
	isDateInRange(day: Date) {
		const time = day.getTime();
		return this.startDate && this.endDate && this.startDate.getTime() <= time && time <= this.endDate.getTime();
	}
}
