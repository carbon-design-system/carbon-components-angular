export declare class DateTimeModel {
    static monthsTranslateKeys: string[];
    static shortWeekdaysTranslateKeys: string[];
    static dayStart(day: Date): Date;
    static dayEnd(day: Date): Date;
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
    weekStart: number;
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
    disabledDates: any[];
    /**
     * An array of short week names, starting from `weekStart`.
     *
     * @readonly
     * @memberof DateTimeModel
     */
    readonly daysOfWeek: any[];
    constructor(startDate?: Date, endDate?: Date);
    /**
     * Selects the full day that `day` is part of.
     *
     * Adjusts `startDate` and `endDate`
     *
     * @param {Date} [day=new Date()]
     * @memberof DateTimeModel
     */
    selectDay(day?: Date): void;
    /**
     * Selects the week that `day` is part of.
     *
     * Adjusts `startDate` and `endDate`
     *
     * @param {Date} [day=new Date()]
     * @memberof DateTimeModel
     */
    selectWeek(day?: Date): void;
    /**
     * Convenience function that selects today.
     *
     * Adjusts `startDate` and `endDate`
     *
     * @memberof DateTimeModel
     */
    selectToday(): void;
    /**
     * Selects yesterday.
     *
     * Adjusts `startDate` and `endDate`
     *
     * @memberof DateTimeModel
     */
    selectYesterday(): void;
    /**
     * Selects a week that `targetDate` belongs to from the beginning
     * (as set with `weekStart`) until the `targetDate`, included.
     *
     * @param {*} [targetDate=new Date()]
     * @memberof DateTimeModel
     */
    selectWeekToDate(targetDate?: Date): void;
    /**
     * Selects a `monthCount` of months ending with the one that `targetDate` belongs to
     * from the beginning of the first until the `targetDate`, included.
     *
     * @param {*} [targetDate=new Date()]
     * @param {number} [monthCount=1]
     * @memberof DateTimeModel
     */
    selectMonthsToDate(targetDate?: Date, monthCount?: number): void;
    /**
     * Selects month that `day` belongs to.
     *
     * @param {*} [day=new Date()]
     * @memberof DateTimeModel
     */
    selectMonth(day?: Date): void;
    /**
     * Selects end of month that `day` belongs to.
     *
     * @param {*} [day=new Date()]
     * @memberof DateTimeModel
     */
    selectMonthEnd(day?: Date): void;
    /**
     * Selects previous month.
     *
     * @memberof DateTimeModel
     */
    selectLastMonth(): void;
    /**
     * Selects a quarter that `targetDate` belongs to from the first day of the
     * quarter to `targetDate`.
     *
     * @param {*} [targetDate=new Date()]
     * @memberof DateTimeModel
     */
    selectQuarterToDate(targetDate?: Date): void;
    /**
     * Select a `quarter` of the `year`.
     *
     * `quarter` ranges from `0` to `3`, Q1 being `0`
     *
     * @param {number} quarter
     * @param {*} [year=new Date().getFullYear()]
     * @memberof DateTimeModel
     */
    selectQuarter(quarter: number, year?: number): void;
    /**
     * Sets a `startDate` to start of `quarter` of the `year`.
     *
     * `quarter` ranges from `0` to `3`, Q1 being `0`
     *
     * @param {number} quarter
     * @param {*} [year=new Date().getFullYear()]
     * @memberof DateTimeModel
     */
    selectQuarterStart(quarter: number, year?: number): void;
    /**
     * Sets an `endDate` to end of `quarter` of the `year`.
     *
     * `quarter` ranges from `0` to `3`, Q1 being `0`
     *
     * @param {number} quarter
     * @param {*} [year=new Date().getFullYear()]
     * @memberof DateTimeModel
     */
    selectQuarterEnd(quarter: number, year?: number): void;
    selectLastQuarter(date?: Date): void;
    /**
     * Selects year that `day` belongs to.
     *
     * @param {*} [day=new Date()]
     * @memberof DateTimeModel
     */
    selectYear(day?: Date): void;
    /**
     * Selects end of year that `day` belongs to.
     *
     * @param {*} [day=new Date()]
     * @memberof DateTimeModel
     */
    selectYearEnd(day?: Date): void;
    /**
     * Selects start of year that `day` belongs to.
     *
     * @memberof DateTimeModel
     */
    selectYearStart(day?: Date): void;
    /**
     * Returns a week start date for a week that `day` is in.
     *
     * @param {Date} [day=new Date()]
     * @returns {Date}
     * @memberof DateTimeModel
     */
    weekStartDate(day?: Date): Date;
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
    daysOfMonth(day?: Date): Array<Array<number>>;
    /**
     * Tells you if `day` is disabled in `disabledDates` property.
     *
     * @param {Date} day
     * @returns
     * @memberof DateTimeModel
     */
    isDateDisabled(day: Date): boolean;
    /**
     * Tells you if `day` is inside of selected range.
     *
     * @param {Date} day
     * @returns
     * @memberof DateTimeModel
     */
    isDateInRange(day: Date): boolean;
}
