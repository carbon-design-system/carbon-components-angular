import { TableModel } from "./table.module";
import { ApplicationRef, EventEmitter } from "@angular/core";
/**
 * TablePagination is a child component to the Table component.
 *
 * ```html
 * <ibm-table-pagination [model]="model" (selectPage)="selectPage($event)"></ibm-table-pagination>
 * ```
 *
 * @export
 * @class TablePagination
 */
export declare class TablePagination {
    private applicationRef;
    /**
     * `TableModel` with data the table is to display.
     *
     * @type {TableModel}
     * @memberof TablePagination
     */
    model: TableModel;
    /**
     * Emits the new page number of the table.
     *
     * @memberof TablePagination
     */
    selectPage: EventEmitter<number>;
    /**
     * Creates an instance of TablePagination.
     *
     * @param {ApplicationRef} applicationRef
     * @memberof TablePagination
     */
    constructor(applicationRef: ApplicationRef);
    /**
     * Generates a list of numbers. (Python function)
     * Used to display the correct pagination controls.
     *
     * @param {number} count
     * @param {number} [offset=0]
     * @returns {array}
     * @memberof TablePagination
     */
    range(count: number, offset?: number): number[];
    /**
     * The previous page number to navigate to from the current page.
     *
     * @returns {number}
     * @memberof TablePagination
     */
    previousPage(): number;
    /**
     * The next page number to navigate to from the current page.
     *
     * @returns {number}
     * @memberof TablePagination
     */
    nextPage(): number;
    /**
     * The last page number to display in the pagination view.
     *
     * @returns {number}
     * @memberof TablePagination
     */
    lastPage(): number;
    /**
     * The middle page number to display for complex paginations.
     *
     * @returns {number}
     * @memberof TablePagination
     */
    middleStartPage(): number;
    /**
     * Checks if the pagination component should display the simple view.
     *
     * @returns {boolean}
     * @memberof TablePagination
     */
    isSimplePagination(): boolean;
    /**
     * Checks if the pagination component should display the complex left-sided truncated view.
     *
     * @returns {boolean}
     * @memberof TablePagination
     */
    isComplexLeftPagination(): boolean;
    /**
     * Checks if the pagination component should display the complex right-sided truncated view.
     *
     * @returns {boolean}
     * @memberof TablePagination
     */
    isComplexRightPagination(): boolean;
    /**
     * Checks if the pagination component should display the complex both-sided truncated view.
     *
     * @returns {boolean}
     * @memberof TablePagination
     */
    isComplexMiddlePagination(): boolean;
}
