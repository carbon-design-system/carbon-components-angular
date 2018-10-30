import { OnInit } from "@angular/core";
import { DateTimeModel } from "./../date-time-model.class";
export declare class CalendarMonths implements OnInit {
    /**
     * `DateTimeModel` to be used in this view.
     *
     * @type {DateTimeModel}
     * @memberof CalendarMonths
     */
    model: DateTimeModel;
    /**
     * `Date` being used in this view.
     *
     * @type {Date}
     * @memberof CalendarMonths
     */
    currentView: Date;
    /**
     * State to determine whether you are selecting `startDate` or `endDate`
     *
     * @memberof CalendarMonths
     */
    rangeSelectionInProgress: boolean;
    /**
     * Reference to month translation keys in `DateTimeModel`
     *
     * @memberof CalendarMonths
     */
    months: string[];
    ngOnInit(): void;
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
    range(stop: number, start?: number, step?: number): number[];
    /**
     * Returns value indicating whether `month` is current month
     *
     * @param {number} month in year
     * @returns boolean
     * @memberof CalendarMonths
     */
    isCurrentMonth(month: number): boolean;
    /**
     * Returns value indicating whether `month` is disabled
     *
     * @param {number} month in year
     * @returns boolean
     * @memberof CalendarMonths
     */
    isDisabled(month: number): boolean;
    /**
     * Returns value indicating whether `month` is part of a range selection
     *
     * @param {number} month in year
     * @returns boolean
     * @memberof CalendarMonths
     */
    inRange(month: number): boolean;
    /**
     * Returns value indicating whether `month` is selected
     *
     * @param {number} month in year
     * @memberof CalendarMonths
     */
    isSelected(month: number): boolean;
    /**
     * Sets model's `startDate` and `endDate`
     *
     * @param {number} month in year
     * @memberof CalendarMonths
     */
    selectMonth(month: number): void;
}
