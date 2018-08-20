import { TranslateService } from "@ngx-translate/core";
import { OnInit } from "@angular/core";
import { DateTimeModel } from "./../date-time-model.class";
export declare class CalendarQuarter implements OnInit {
    private translate;
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
     * Initialization of quarter object for translation
     *
     * @type {Array<any>}
     * @memberof CalendarQuarter
     */
    quarters: Array<any>;
    /**
     * Creates an instance of CalendarQuarter.
     * Translates quarters.
     * @param {TranslateService} translate
     * @memberof CalendarQuarter
     */
    constructor(translate: TranslateService);
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
     * Returns value indicating whether `quarter` is current quarter
     *
     * @param {number} quarter of year
     * @returns boolean
     * @memberof CalendarQuarter
     */
    isCurrentQuarter(quarter: number): boolean;
    /**
     * Returns value indicating whether `quarter` is disabled
     *
     * @param {number} quarter of year
     * @returns boolean
     * @memberof CalendarQuarter
     */
    isDisabled(quarter: number): boolean;
    /**
     * Returns value indicating whether `quarter` is part of a range selection
     *
     * @param {number} quarter of year
     * @returns boolean
     * @memberof CalendarQuarter
     */
    inRange(quarter: number): boolean;
    /**
     * Returns value indicating whether `quarter` is selected
     *
     * @param {number} quarter
     * @returns
     * @memberof CalendarQuarter
     */
    isSelected(quarter: number): boolean;
    /**
     * Sets model's `startDate` and `endDate`
     *
     * @param {number} quarter
     * @memberof CalendarQuarter
     */
    selectQuarter(quarter: number): void;
}
