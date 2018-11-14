import { OnInit } from "@angular/core";
import { DateTimeModel } from "./../date-time-model.class";
export declare class CalendarMonth implements OnInit {
    /**
     * `DateTimeModel` to be used in this view.
     *
     * @type {DateTimeModel}
     * @memberof CalendarMonth
     */
    model: DateTimeModel;
    /**
     * Number of months to display in this view.
     *
     * @memberof CalendarMonth
     */
    monthCount: number;
    /**
     * `Date` being used in this view.
     *
     * @type {Date}
     * @memberof CalendarMonth
     */
    currentView: Date;
    /**
     * State to determine whether you are selecting `startDate` or `endDate`
     *
     * @memberof CalendarMonth
     */
    rangeSelectionInProgress: boolean;
    ngOnInit(): void;
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
    range(stop: number, start?: number, step?: number): number[];
    /**
     * Returns value indicating whether `day` is current day
     *
     * @param {number} day day of month
     * @param {number} [position=0] index of month in view
     * @returns boolean
     * @memberof CalendarMonth
     */
    isCurrentDay(day: number, position?: number): boolean;
    /**
     * Convenience method to figure out if `day` is disabled
     *
     * @param {number} day day of month
     * @param {number} [position=0] index of month in view
     * @returns boolean
     * @memberof CalendarMonth
     */
    isDisabled(day: number, position?: number): boolean;
    /**
     * Convenience method to figure out if days of the month in view
     *
     * @param {number} [position=0] index of month in view
     * @returns boolean
     * @memberof CalendarMonth
     */
    daysOfMonth(position?: number): number[][];
    /**
     * Convenience method to figure out if `day` is part of a range selection
     *
     * @param {number} day day of month
     * @param {number} [position=0] index of month in view
     * @returns boolean
     * @memberof CalendarMonth
     */
    inRange(day: number, position?: number): boolean;
    /**
     * Returns value indicating whether `day` is selected
     *
     * @param {number} day day of month
     * @param {number} [position=0] index of month in view
     * @returns boolean
     * @memberof CalendarMonth
     */
    isSelected(date: Date, position?: number): boolean;
    /**
     *	Sets model's `startDate` and `endDate`
     *
     * @param {number} day day of month
     * @param {number} [position=0] index of month in view
     * @memberof CalendarMonth
     */
    selectDay(day: number, position?: number): void;
}
