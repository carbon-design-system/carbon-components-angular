import { TableHeaderItem } from "./table-header-item.class";
import { TableItem } from "./table-item.class";
import { EventEmitter } from "@angular/core";
export declare class TableModel {
    /**
     * Sets data of the table.
     *
     * Make sure all rows are the same length to keep the column count accurate.
     *
     * @memberof TableModel
     */
    /**
    * Gets the full data.
    *
    * You can use it to alter individual `TableItem`s but if you need to change
    * table structure, use `addRow()` and/or `addColumn()`
    *
    * @readonly
    * @memberof TableModel
    */
    data: Array<Array<TableItem>>;
    dataChange: EventEmitter<{}>;
    rowsSelectedChange: EventEmitter<{}>;
    /**
     * Contains information about selection state of rows in the table.
     *
     * @type {Array<boolean>}
     * @memberof TableModel
     */
    rowsSelected: Array<boolean>;
    /**
     * Contains information about the context of the row.
     *
     * It affects styling of the row to reflect the context.
     *
     * string can be one of `"success" | "warning" | "info" | "error" | ""` and it's
     * empty or undefined by default
     *
     * @type {Array<string>}
     * @memberof TableModel
     */
    rowsContext: Array<string>;
    /**
     * Contains information about the header cells of the table.
     *
     * @type {Array<TableHeaderItem>}
     * @memberof TableModel
     */
    header: Array<TableHeaderItem>;
    /**
     * Tracks the current page of the table.
     *
     * @type {number}
     * @memberof TableModel
     */
    currentPage: number;
    /**
     * Length of page of the table.
     *
     * @type {number}
     * @memberof TableModel
     */
    pageLength: number;
    /**
     * Set to true when there is no more data to load in the table
     *
     * @type {boolean}
     * @memberof TableModel
     */
    isEnd: boolean;
    /**
     * Set to true when lazy loading to show loading indicator
     *
     * @type {boolean}
     * @memberof TableModel
     */
    isLoading: boolean;
    /**
     * Absolute total number of rows of the table.
     *
     * @private
     * @type {number}
     * @memberof TableModel
     */
    private _totalDataLength;
    /**
     * Manually set data length in case the data in the table doesn't
     * correctly reflect all the data that table is to disply.
     *
     * Example: if you have multiple pages of data that table will display
     * but you're loading one at a time.
     *
     * Set to `null` to reset to default behaviour.
     *
     * @memberof TableModel
     */
    /**
    * Total length of data that table has access to, or the amount manually set
    *
    * @memberof TableModel
    */
    totalDataLength: number;
    /**
     * Used in `data`
     *
     * @private
     * @type {Array<Array<TableItem>>}
     * @memberof TableModel
     */
    private _data;
    /**
     * Returns how many rows is currently selected
     *
     * @returns {number}
     * @memberof TableModel
     */
    selectedRowsCount(): number;
    /**
     * Returns `index`th row of the table.
     *
     * Negative index starts from the end. -1 being the last element.
     *
     * @param {number} index
     * @returns {Array<TableItem>}
     * @memberof TableModel
     */
    row(index: number): Array<TableItem>;
    /**
     * Adds a row to the `index`th row or appends to table if index not provided.
     *
     * If row is shorter than other rows or not provided, it will be padded with
     * empty `TableItem` elements.
     *
     * If row is longer than other rows, others will be extended to match so no data is lost.
     *
     * If called on an empty table with no parameters, it creates a 1x1 table.
     *
     * Negative index starts from the end. -1 being the last element.
     *
     * @param {Array<TableItem>} row
     * @param {number} [index]
     * @memberof TableModel
     */
    addRow(row?: Array<TableItem>, index?: number): void;
    /**
     * Deletes `index`th row.
     *
     * Negative index starts from the end. -1 being the last element.
     *
     * @param {number} index
     * @memberof TableModel
     */
    deleteRow(index: number): void;
    /**
     * Returns `index`th column of the table.
     *
     * Negative index starts from the end. -1 being the last element.
     *
     * @param {number} index
     * @returns {Array<TableItem>}
     * @memberof TableModel
     */
    column(index: number): Array<TableItem>;
    /**
     * Adds a column to the `index`th column or appends to table if index not provided.
     *
     * If column is shorter than other columns or not provided, it will be padded with
     * empty `TableItem` elements.
     *
     * If column is longer than other columns, others will be extended to match so no data is lost.
     *
     * If called on an empty table with no parameters, it creates a 1x1 table.
     *
     * Negative index starts from the end. -1 being the last element.
     *
     * @param {Array<TableItem>} column
     * @param {number} [index]
     * @memberof TableModel
     */
    addColumn(column?: Array<TableItem>, index?: number): void;
    /**
     * Deletes `index`th column.
     *
     * Negative index starts from the end. -1 being the last element.
     *
     * @param {number} index
     * @memberof TableModel
     */
    deleteColumn(index: number): void;
    moveColumn(indexFrom: number, indexTo: number): void;
    /**
     * Sorts the data currently present in the model based on `compare()`
     *
     * Direction is set by `ascending` and `descending` properties of `TableHeaderItem`
     * in `index`th column.
     *
     * @param {number} index The column based on which it's sorting
     * @memberof TableModel
     */
    sort(index: number): void;
    /**
     * Appends `rowsSelected` info to model data.
     *
     * When sorting rows, do this first so information about row selection
     * gets sorted with the other row info.
     *
     * Call `popRowSelectionFromModelData()` after sorting to make everything
     * right with the world again.
     *
     * @memberof TableModel
     */
    pushRowStateToModelData(): void;
    /**
     * Restores `rowsSelected` from data pushed by `pushRowSelectionToModelData()`
     *
     * Call after sorting data (if you previously pushed to maintain selection order)
     * to make everything right with the world again.
     *
     * @memberof TableModel
     */
    popRowStateFromModelData(): void;
    /**
     * Checks if row is filtered out.
     *
     * @param {number} index
     * @returns {boolean} true if any of the filters in header filters out the `index`th row
     * @memberof TableModel
     */
    isRowFiltered(index: number): boolean;
    /**
     * Select/deselect `index`th row based on value
     *
     * @param index
     * @param value
     */
    selectRow(index: any, value?: boolean): void;
    /**
     * Gets the true index of a row based on it's relative position.
     * Like in Python, positive numbers start from the top and
     * negative numbers start from the bottom.
     *
     * @private
     * @param {number} index
     * @returns {number}
     * @memberof TableModel
     */
    private realRowIndex;
    /**
     * Gets the true index of a column based on it's relative position.
     * Like in Python, positive numbers start from the top and
     * negative numbers start from the bottom.
     *
     * @private
     * @param {number} index
     * @returns {number}
     * @memberof TableModel
     */
    private realColumnIndex;
    /**
     * Generic function to calculate the real index of something.
     * Used by `realRowIndex()` and `realColumnIndex()`
     *
     * @private
     * @param {number} index
     * @param {number} length
     * @returns {number}
     * @memberof TableModel
     */
    private realIndex;
}
