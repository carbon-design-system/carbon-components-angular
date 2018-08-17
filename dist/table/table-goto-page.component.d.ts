import { EventEmitter, ChangeDetectorRef } from "@angular/core";
/**
 * TableGotoPage is a child component to the Table component.
 *
 * ```html
 * <ibm-table-goto-page (selectPage)="selectPage($event)"></ibm-table-goto-page>
 * ```
 *
 * @export
 * @class TableGotoPage
 */
export declare class TableGotoPage {
    protected changeDetectorRef: ChangeDetectorRef;
    /**
     * Variable used for creating unique ids for the input in TableGotoPage components.
     * @type {number}
     * @static
     * @memberof TableGotoPage
     */
    static tableGotoPageCount: number;
    /**
     * Variable used to track the input field value.
     * @type {number}
     * @memberof TableGotoPage
     */
    pageNumber: number;
    /**
     * The unique id for the TableGotoPage component input.
     * @type {string}
     * @memberof TableGotoPage
     */
    id: string;
    /**
     * Emits the new page number of the table.
     * @param {number} pageNumber
     * @memberof TableGotoPage
     */
    selectPage: EventEmitter<number>;
    /**
     * Creates an instance of `TableGotoPage`.
     * @param {ChangeDetectorRef} changeDetectorRef
     * @memberof TableGotoPage
     */
    constructor(changeDetectorRef: ChangeDetectorRef);
}
