import { PaginationModel } from "./pagination.module";
import { EventEmitter } from "@angular/core";
/**
 * Use pagination when you have multiple pages of data to handle.
 *
 * ```html
 * <ibm-pagination [model]="model" (selectPage)="selectPage($event)"></ibm-pagination>
 * ```
 *
 * In your `selectPage()` method set the `model.currentPage` to selected page, _after_
 * you load the page.
 *
 * ```typescript
 * selectPage(page) {
 * 	// ... your code to laod the page goes here
 *
 * 	this.model.currentPage = page;
 *
 * 	// ... anything you want to do after page selection changes goes here
 * }
 * ```
 *
 * @export
 * @class Pagination
 */
export declare class Pagination {
    static paginationCounter: number;
    /**
     * `PaginationModel` with the information about pages you're controlling.
     *
     * @type {Model}
     * @memberof Pagination
     */
    model: PaginationModel;
    /**
     * Emits the new page number.
     *
     * You should tie into this and update `model.currentPage` once the fresh
     * data is finally loaded.
     *
     * @memberof Pagination
     */
    selectPage: EventEmitter<number>;
    itemsPerPage: number;
    currentPage: number;
    /**
     * The last page number to display in the pagination view.
     *
     * @returns {number}
     * @memberof Pagination
     */
    readonly lastPage: number;
    readonly startItemIndex: number;
    readonly endItemIndex: number;
    /**
     * The previous page number to navigate to, from the current page.
     *
     * @returns {number}
     * @memberof Pagination
     */
    readonly previousPage: number;
    /**
     * The next page number to navigate to, from the current page.
     *
     * @returns {number}
     * @memberof Pagination
     */
    readonly nextPage: number;
    itemsPerPageSelectId: string;
    currentPageSelectId: string;
    constructor();
    /**
     * Generates a list of numbers. (Python function)
     * Used to display the correct pagination controls.
     *
     * @param {number} stop
     * @param {number} [start=0]
     * @param {number} [step=1]
     * @returns {array}
     * @memberof Pagination
     */
    range(stop: number, start?: number, step?: number): number[];
}
