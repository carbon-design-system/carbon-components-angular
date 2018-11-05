import { OnInit } from "@angular/core";
import { DateTimeModel } from "./../date-time-model.class";
export declare class CalendarYear implements OnInit {
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
     * Returns value indicating whether `year` is current year
     *
     * @param {number} yearIndex index of year in view
     * @returns boolean
     * @memberof CalendarYear
     */
    isCurrentYear(yearIndex: number): boolean;
    /**
     * Returns value indicating whether `year` is disabled
     *
     * @param {number} yearIndex index of year in view
     * @returns boolean
     * @memberof CalendarYear
     */
    isDisabled(yearIndex: number): boolean;
    /**
     * Returns value indicating whether `year` is part of a range selection
     *
     * @param {number} yearIndex index of year in view
     * @returns boolean
     * @memberof CalendarYear
     */
    inRange(yearIndex: number): boolean;
    /**
     * Returns value indicating whether `year` is selected
     *
     * @param {number} yearIndex index of year in view
     * @returns boolean
     * @memberof CalendarYear
     */
    isSelected(yearIndex: number): boolean;
    /**
     * Sets model's `startDate` and `endDate`
     *
     * @param {number} yearIndex index of year in view
     * @memberof CalendarYear
     */
    selectYear(yearIndex: number): void;
}
