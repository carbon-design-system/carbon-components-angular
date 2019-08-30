/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { EventEmitter } from "@angular/core";
import { TableHeaderItem } from "./table-header-item.class";
import { TableItem } from "./table-item.class";
export class TableModel {
    constructor() {
        this.dataChange = new EventEmitter();
        this.rowsSelectedChange = new EventEmitter();
        this.rowsExpandedChange = new EventEmitter();
        /**
         * Set to true when there is no more data to load in the table
         *
         * \@memberof TableModel
         */
        this.isEnd = false;
        /**
         * Set to true when lazy loading to show loading indicator
         *
         * \@memberof TableModel
         */
        this.isLoading = false;
        /**
         * Used in `data`
         *
         * @protected
         * \@memberof TableModel
         */
        this._data = [[]];
    }
    /**
     * Sets data of the table.
     *
     * Make sure all rows are the same length to keep the column count accurate.
     *
     * \@memberof TableModel
     * @param {?} newData
     * @return {?}
     */
    set data(newData) {
        if (!newData || (Array.isArray(newData) && newData.length === 0)) {
            newData = [[]];
        }
        this._data = newData;
        // init rowsSelected
        this.rowsSelected = new Array(this._data.length);
        this.rowsExpanded = new Array(this._data.length);
        // init rowsContext
        this.rowsContext = new Array(this._data.length);
        // init rowsClass
        this.rowsClass = new Array(this._data.length);
        // only create a fresh header if necessary (header doesn't exist or differs in length)
        if (this.header == null || (this.header.length !== this._data[0].length && this._data[0].length > 0)) {
            /** @type {?} */
            let header = new Array();
            for (let i = 0; i < this._data[0].length; i++) {
                header.push(new TableHeaderItem());
            }
            this.header = header;
        }
        this.dataChange.emit();
    }
    /**
     * Gets the full data.
     *
     * You can use it to alter individual `TableItem`s but if you need to change
     * table structure, use `addRow()` and/or `addColumn()`
     *
     * \@readonly
     * \@memberof TableModel
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * Manually set data length in case the data in the table doesn't
     * correctly reflect all the data that table is to disply.
     *
     * Example: if you have multiple pages of data that table will display
     * but you're loading one at a time.
     *
     * Set to `null` to reset to default behaviour.
     *
     * \@memberof TableModel
     * @param {?} length
     * @return {?}
     */
    set totalDataLength(length) {
        this._totalDataLength = length;
    }
    /**
     * Total length of data that table has access to, or the amount manually set
     *
     * \@memberof TableModel
     * @return {?}
     */
    get totalDataLength() {
        // if manually set data length
        if (this._totalDataLength && this._totalDataLength >= 0) {
            return this._totalDataLength;
        }
        // if empty dataset
        if (this.data && this.data.length === 1 && this.data[0].length === 0) {
            return 0;
        }
        return this.data.length;
    }
    /**
     * Returns how many rows is currently selected
     *
     * \@memberof TableModel
     * @return {?}
     */
    selectedRowsCount() {
        /** @type {?} */
        let count = 0;
        if (this.rowsSelected) {
            this.rowsSelected.forEach(rowSelected => {
                if (rowSelected) {
                    count++;
                }
            });
        }
        return count;
    }
    /**
     * Returns how many rows is currently expanded
     *
     * \@memberof TableModel
     * @return {?}
     */
    expandedRowsCount() {
        /** @type {?} */
        let count = 0;
        if (this.rowsExpanded) {
            this.rowsExpanded.forEach(rowExpanded => {
                if (rowExpanded) {
                    count++;
                }
            });
        }
        return count;
    }
    /**
     * Returns `index`th row of the table.
     *
     * Negative index starts from the end. -1 being the last element.
     *
     * \@memberof TableModel
     * @param {?} index
     * @return {?}
     */
    row(index) {
        return this.data[this.realRowIndex(index)];
    }
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
     * \@memberof TableModel
     * @param {?=} row
     * @param {?=} index
     * @return {?}
     */
    addRow(row, index) {
        // if table empty create table with row
        if (!this.data || this.data.length === 0 || this.data[0].length === 0) {
            /** @type {?} */
            let newData = new Array();
            newData.push(row ? row : [new TableItem()]); // row or one empty one column row
            this.data = newData;
            return;
        }
        /** @type {?} */
        let realRow = row;
        /** @type {?} */
        const columnCount = this.data[0].length;
        if (row == null) {
            realRow = new Array();
            for (let i = 0; i < columnCount; i++) {
                realRow.push(new TableItem());
            }
        }
        if (realRow.length < columnCount) {
            /** @type {?} */
            const difference = columnCount - realRow.length;
            for (let i = 0; i < difference; i++) {
                realRow.push(new TableItem());
            }
        }
        else if (realRow.length > columnCount) {
            /** @type {?} */
            let difference = realRow.length - this.header.length;
            for (let j = 0; j < difference; j++) {
                this.header.push(new TableHeaderItem());
            }
            // extend the length of every other row
            for (let i = 0; i < this.data.length; i++) {
                /** @type {?} */
                let currentRow = this.data[i];
                difference = realRow.length - currentRow.length;
                for (let j = 0; j < difference; j++) {
                    currentRow.push(new TableItem());
                }
            }
        }
        if (index == null) {
            this.data.push(realRow);
            // update rowsSelected property for length
            this.rowsSelected.push(false);
            // update rowsExpanded property for length
            this.rowsExpanded.push(false);
            // update rowsContext property for length
            this.rowsContext.push(undefined);
            // update rowsClass property for length
            this.rowsClass.push(undefined);
        }
        else {
            /** @type {?} */
            const ri = this.realRowIndex(index);
            this.data.splice(ri, 0, realRow);
            // update rowsSelected property for length
            this.rowsSelected.splice(ri, 0, false);
            // update rowsExpanded property for length
            this.rowsExpanded.splice(ri, 0, false);
            // update rowsContext property for length
            this.rowsContext.splice(ri, 0, undefined);
            // update rowsClass property for length
            this.rowsClass.splice(ri, 0, undefined);
        }
        this.dataChange.emit();
    }
    /**
     * Deletes `index`th row.
     *
     * Negative index starts from the end. -1 being the last element.
     *
     * \@memberof TableModel
     * @param {?} index
     * @return {?}
     */
    deleteRow(index) {
        /** @type {?} */
        const rri = this.realRowIndex(index);
        this.data.splice(rri, 1);
        this.rowsSelected.splice(rri, 1);
        this.rowsExpanded.splice(rri, 1);
        this.rowsContext.splice(rri, 1);
        this.rowsClass.splice(rri, 1);
        this.dataChange.emit();
    }
    /**
     * @return {?}
     */
    hasExpandableRows() {
        return this.data.some(data => data.some(d => d.expandedData)); // checking for some in 2D array
    }
    /**
     * @param {?} index
     * @return {?}
     */
    isRowExpandable(index) {
        return this.data[index].some(d => d.expandedData);
    }
    /**
     * Returns `index`th column of the table.
     *
     * Negative index starts from the end. -1 being the last element.
     *
     * \@memberof TableModel
     * @param {?} index
     * @return {?}
     */
    column(index) {
        /** @type {?} */
        let column = new Array();
        /** @type {?} */
        const ri = this.realColumnIndex(index);
        /** @type {?} */
        const rc = this.data.length;
        for (let i = 0; i < rc; i++) {
            /** @type {?} */
            const row = this.data[i];
            column.push(row[ri]);
        }
        return column;
    }
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
     * \@memberof TableModel
     * @param {?=} column
     * @param {?=} index
     * @return {?}
     */
    addColumn(column, index) {
        // if table empty create table with row
        if (!this.data || this.data.length === 0 || this.data[0].length === 0) {
            /** @type {?} */
            let newData = new Array();
            if (column == null) {
                newData.push([new TableItem()]);
            }
            else {
                for (let i = 0; i < column.length; i++) {
                    /** @type {?} */
                    let item = column[i];
                    newData.push([item]);
                }
            }
            this.data = newData;
            return;
        }
        /** @type {?} */
        let rc = this.data.length;
        /** @type {?} */
        let ci = this.realColumnIndex(index);
        // append missing rows
        for (let i = 0; column != null && i < column.length - rc; i++) {
            this.addRow();
        }
        rc = this.data.length;
        if (index == null) {
            // append to end
            for (let i = 0; i < rc; i++) {
                /** @type {?} */
                let row = this.data[i];
                row.push(column == null || column[i] == null ? new TableItem() : column[i]);
            }
            // update header if not already set by user
            if (this.header.length < this.data[0].length) {
                this.header.push(new TableHeaderItem());
            }
        }
        else {
            if (index >= this.data[0].length) {
                // if trying to append
                ci++;
            }
            // insert
            for (let i = 0; i < rc; i++) {
                /** @type {?} */
                let row = this.data[i];
                row.splice(ci, 0, column == null || column[i] == null ? new TableItem() : column[i]);
            }
            // update header if not already set by user
            if (this.header.length < this.data[0].length) {
                this.header.splice(ci, 0, new TableHeaderItem());
            }
        }
        this.dataChange.emit();
    }
    /**
     * Deletes `index`th column.
     *
     * Negative index starts from the end. -1 being the last element.
     *
     * \@memberof TableModel
     * @param {?} index
     * @return {?}
     */
    deleteColumn(index) {
        /** @type {?} */
        const rci = this.realColumnIndex(index);
        /** @type {?} */
        const rowCount = this.data.length;
        for (let i = 0; i < rowCount; i++) {
            this.data[i].splice(rci, 1);
        }
        // update header if not already set by user
        if (this.header.length > this.data[0].length) {
            this.header.splice(rci, 1);
        }
        this.dataChange.emit();
    }
    /**
     * @param {?} indexFrom
     * @param {?} indexTo
     * @return {?}
     */
    moveColumn(indexFrom, indexTo) {
        /** @type {?} */
        const headerFrom = this.header[indexFrom];
        this.addColumn(this.column(indexFrom), indexTo);
        this.deleteColumn(indexFrom + (indexTo < indexFrom ? 1 : 0));
        this.header[indexTo + (indexTo > indexFrom ? -1 : 0)] = headerFrom;
    }
    /**
     * Sorts the data currently present in the model based on `compare()`
     *
     * Direction is set by `ascending` and `descending` properties of `TableHeaderItem`
     * in `index`th column.
     *
     * \@memberof TableModel
     * @param {?} index
     * @return {?}
     */
    sort(index) {
        this.pushRowStateToModelData();
        this.data.sort((a, b) => (this.header[index].descending ? -1 : 1) * this.header[index].compare(a[index], b[index]));
        this.popRowStateFromModelData();
        this.header.forEach(column => column.sorted = false);
        this.header[index].sorted = true;
    }
    /**
     * Appends `rowsSelected` and `rowsExpanded` info to model data.
     *
     * When sorting rows, do this first so information about row selection
     * gets sorted with the other row info.
     *
     * Call `popRowSelectionFromModelData()` after sorting to make everything
     * right with the world again.
     *
     * \@memberof TableModel
     * @return {?}
     */
    pushRowStateToModelData() {
        for (let i = 0; i < this.data.length; i++) {
            /** @type {?} */
            const rowSelectedMark = new TableItem();
            rowSelectedMark.data = this.rowsSelected[i];
            this.data[i].push(rowSelectedMark);
            /** @type {?} */
            const rowExpandedMark = new TableItem();
            rowExpandedMark.data = this.rowsExpanded[i];
            this.data[i].push(rowExpandedMark);
            /** @type {?} */
            const rowContext = new TableItem();
            rowContext.data = this.rowsContext[i];
            this.data[i].push(rowContext);
            /** @type {?} */
            const rowClass = new TableItem();
            rowClass.data = this.rowsClass[i];
            this.data[i].push(rowClass);
        }
    }
    /**
     * Restores `rowsSelected` from data pushed by `pushRowSelectionToModelData()`
     *
     * Call after sorting data (if you previously pushed to maintain selection order)
     * to make everything right with the world again.
     *
     * \@memberof TableModel
     * @return {?}
     */
    popRowStateFromModelData() {
        for (let i = 0; i < this.data.length; i++) {
            this.rowsClass[i] = this.data[i].pop().data;
            this.rowsContext[i] = this.data[i].pop().data;
            this.rowsExpanded[i] = !!this.data[i].pop().data;
            this.rowsSelected[i] = !!this.data[i].pop().data;
        }
    }
    /**
     * Checks if row is filtered out.
     *
     * \@memberof TableModel
     * @param {?} index
     * @return {?}
     */
    isRowFiltered(index) {
        /** @type {?} */
        const ind = this.realRowIndex(index);
        return this.header.some((item, i) => item.filter(this.row(ind)[i]));
    }
    /**
     * Select/deselect `index`th row based on value
     *
     * @param {?} index
     * @param {?=} value
     * @return {?}
     */
    selectRow(index, value = true) {
        this.rowsSelected[index] = value;
        this.rowsSelectedChange.emit(index);
    }
    /**
     * Expands/Collapses `index`th row based on value
     *
     * @param {?} index
     * @param {?=} value
     * @return {?}
     */
    expandRow(index, value = true) {
        this.rowsExpanded[index] = value;
        this.rowsExpandedChange.emit(index);
    }
    /**
     * Gets the true index of a row based on it's relative position.
     * Like in Python, positive numbers start from the top and
     * negative numbers start from the bottom.
     *
     * @protected
     * \@memberof TableModel
     * @param {?} index
     * @return {?}
     */
    realRowIndex(index) {
        return this.realIndex(index, this.data.length);
    }
    /**
     * Gets the true index of a column based on it's relative position.
     * Like in Python, positive numbers start from the top and
     * negative numbers start from the bottom.
     *
     * @protected
     * \@memberof TableModel
     * @param {?} index
     * @return {?}
     */
    realColumnIndex(index) {
        return this.realIndex(index, this.data[0].length);
    }
    /**
     * Generic function to calculate the real index of something.
     * Used by `realRowIndex()` and `realColumnIndex()`
     *
     * @protected
     * \@memberof TableModel
     * @param {?} index
     * @param {?} length
     * @return {?}
     */
    realIndex(index, length) {
        if (index == null) {
            return length - 1;
        }
        else if (index >= 0) {
            return index >= length ? length - 1 : index;
        }
        else {
            return -index >= length ? 0 : length + index;
        }
    }
}
function TableModel_tsickle_Closure_declarations() {
    /** @type {?} */
    TableModel.prototype.dataChange;
    /** @type {?} */
    TableModel.prototype.rowsSelectedChange;
    /** @type {?} */
    TableModel.prototype.rowsExpandedChange;
    /**
     * Contains information about selection state of rows in the table.
     *
     * \@memberof TableModel
     * @type {?}
     */
    TableModel.prototype.rowsSelected;
    /**
     * Contains information about expanded state of rows in the table.
     *
     * \@memberof TableModel
     * @type {?}
     */
    TableModel.prototype.rowsExpanded;
    /**
     * Contains information about the context of the row.
     *
     * It affects styling of the row to reflect the context.
     *
     * string can be one of `"success" | "warning" | "info" | "error" | ""` and it's
     * empty or undefined by default
     *
     * \@memberof TableModel
     * @type {?}
     */
    TableModel.prototype.rowsContext;
    /**
     * Contains class name(s) of the row.
     *
     * It affects styling of the row to reflect the appended class name(s).
     *
     * It's empty or undefined by default
     *
     * \@memberof TableModel
     * @type {?}
     */
    TableModel.prototype.rowsClass;
    /**
     * Contains information about the header cells of the table.
     *
     * \@memberof TableModel
     * @type {?}
     */
    TableModel.prototype.header;
    /**
     * Tracks the current page of the table.
     *
     * \@memberof TableModel
     * @type {?}
     */
    TableModel.prototype.currentPage;
    /**
     * Length of page of the table.
     *
     * \@memberof TableModel
     * @type {?}
     */
    TableModel.prototype.pageLength;
    /**
     * Set to true when there is no more data to load in the table
     *
     * \@memberof TableModel
     * @type {?}
     */
    TableModel.prototype.isEnd;
    /**
     * Set to true when lazy loading to show loading indicator
     *
     * \@memberof TableModel
     * @type {?}
     */
    TableModel.prototype.isLoading;
    /**
     * Absolute total number of rows of the table.
     *
     * @protected
     * \@memberof TableModel
     * @type {?}
     */
    TableModel.prototype._totalDataLength;
    /**
     * Used in `data`
     *
     * @protected
     * \@memberof TableModel
     * @type {?}
     */
    TableModel.prototype._data;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtbW9kZWwuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsidGFibGUvdGFibGUtbW9kZWwuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixZQUFZLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxNQUFNOzswQkFxQ1EsSUFBSSxZQUFZLEVBQUU7a0NBQ1YsSUFBSSxZQUFZLEVBQUU7a0NBQ2xCLElBQUksWUFBWSxFQUFFOzs7Ozs7cUJBc0YvQixLQUFLOzs7Ozs7eUJBUUQsS0FBSzs7Ozs7OztxQkFvRDBCLENBQUMsRUFBRSxDQUFDOzs7Ozs7Ozs7OztJQWpML0MsSUFBSSxJQUFJLENBQUMsT0FBZ0M7UUFDeEMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFBRztZQUNsRSxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNmO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7O1FBR3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxLQUFLLENBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksS0FBSyxDQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7O1FBRzFELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzs7UUFHeEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJ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QUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7O2dCQUVqQyxFQUFFLEVBQUUsQ0FBQzthQUNMOztZQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2dCQUM1QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNyRjs7WUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksZUFBZSxFQUFFLENBQUMsQ0FBQzthQUNqRDtTQUNEO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUN2Qjs7Ozs7Ozs7OztJQVVELFlBQVksQ0FBQyxLQUFhOztRQUN6QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDOztRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztT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QUFLLENBQUM7U0FDN0M7S0FDRDtDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0RXZlbnRFbWl0dGVyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFBhZ2luYXRpb25Nb2RlbCB9IGZyb20gXCIuLy4uL3BhZ2luYXRpb24vcGFnaW5hdGlvbi1tb2RlbC5jbGFzc1wiO1xuaW1wb3J0IHsgVGFibGVIZWFkZXJJdGVtIH0gZnJvbSBcIi4vdGFibGUtaGVhZGVyLWl0ZW0uY2xhc3NcIjtcbmltcG9ydCB7IFRhYmxlSXRlbSB9IGZyb20gXCIuL3RhYmxlLWl0ZW0uY2xhc3NcIjtcblxuZXhwb3J0IGNsYXNzIFRhYmxlTW9kZWwgaW1wbGVtZW50cyBQYWdpbmF0aW9uTW9kZWwge1xuXHQvKipcblx0ICogU2V0cyBkYXRhIG9mIHRoZSB0YWJsZS5cblx0ICpcblx0ICogTWFrZSBzdXJlIGFsbCByb3dzIGFyZSB0aGUgc2FtZSBsZW5ndGggdG8ga2VlcCB0aGUgY29sdW1uIGNvdW50IGFjY3VyYXRlLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgVGFibGVNb2RlbFxuXHQgKi9cblx0c2V0IGRhdGEobmV3RGF0YTogQXJyYXk8QXJyYXk8VGFibGVJdGVtPj4pIHtcblx0XHRpZiAoIW5ld0RhdGEgfHwgKEFycmF5LmlzQXJyYXkobmV3RGF0YSkgJiYgbmV3RGF0YS5sZW5ndGggPT09IDApICkge1xuXHRcdFx0bmV3RGF0YSA9IFtbXV07XG5cdFx0fVxuXG5cdFx0dGhpcy5fZGF0YSA9IG5ld0RhdGE7XG5cblx0XHQvLyBpbml0IHJvd3NTZWxlY3RlZFxuXHRcdHRoaXMucm93c1NlbGVjdGVkID0gbmV3IEFycmF5PGJvb2xlYW4+KHRoaXMuX2RhdGEubGVuZ3RoKTtcblx0XHR0aGlzLnJvd3NFeHBhbmRlZCA9IG5ldyBBcnJheTxib29sZWFuPih0aGlzLl9kYXRhLmxlbmd0aCk7XG5cblx0XHQvLyBpbml0IHJvd3NDb250ZXh0XG5cdFx0dGhpcy5yb3dzQ29udGV4dCA9IG5ldyBBcnJheTxzdHJpbmc+KHRoaXMuX2RhdGEubGVuZ3RoKTtcblxuXHRcdC8vIGluaXQgcm93c0NsYXNzXG5cdFx0dGhpcy5yb3dzQ2xhc3MgPSBuZXcgQXJyYXk8c3RyaW5nPih0aGlzLl9kYXRhLmxlbmd0aCk7XG5cblx0XHQvLyBvbmx5IGNyZWF0ZSBhIGZyZXNoIGhlYWRlciBpZiBuZWNlc3NhcnkgKGhlYWRlciBkb2Vzbid0IGV4aXN0IG9yIGRpZmZlcnMgaW4gbGVuZ3RoKVxuXHRcdGlmICh0aGlzLmhlYWRlciA9PSBudWxsIHx8ICh0aGlzLmhlYWRlci5sZW5ndGggIT09IHRoaXMuX2RhdGFbMF0ubGVuZ3RoICYmIHRoaXMuX2RhdGFbMF0ubGVuZ3RoID4gMCkpIHtcblx0XHRcdGxldCBoZWFkZXIgPSBuZXcgQXJyYXk8VGFibGVIZWFkZXJJdGVtPigpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9kYXRhWzBdLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGhlYWRlci5wdXNoKG5ldyBUYWJsZUhlYWRlckl0ZW0oKSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmhlYWRlciA9IGhlYWRlcjtcblx0XHR9XG5cblx0XHR0aGlzLmRhdGFDaGFuZ2UuZW1pdCgpO1xuXHR9XG5cblx0ZGF0YUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0cm93c1NlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRyb3dzRXhwYW5kZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIGZ1bGwgZGF0YS5cblx0ICpcblx0ICogWW91IGNhbiB1c2UgaXQgdG8gYWx0ZXIgaW5kaXZpZHVhbCBgVGFibGVJdGVtYHMgYnV0IGlmIHlvdSBuZWVkIHRvIGNoYW5nZVxuXHQgKiB0YWJsZSBzdHJ1Y3R1cmUsIHVzZSBgYWRkUm93KClgIGFuZC9vciBgYWRkQ29sdW1uKClgXG5cdCAqXG5cdCAqIEByZWFkb25seVxuXHQgKiBAbWVtYmVyb2YgVGFibGVNb2RlbFxuXHQgKi9cblx0Z2V0IGRhdGEoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2RhdGE7XG5cdH1cblxuXHQvKipcblx0ICogQ29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgc2VsZWN0aW9uIHN0YXRlIG9mIHJvd3MgaW4gdGhlIHRhYmxlLlxuXHQgKlxuXHQgKiBAdHlwZSB7QXJyYXk8Ym9vbGVhbj59XG5cdCAqIEBtZW1iZXJvZiBUYWJsZU1vZGVsXG5cdCAqL1xuXHRyb3dzU2VsZWN0ZWQ6IEFycmF5PGJvb2xlYW4+O1xuXG5cdC8qKlxuXHQgKiBDb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCBleHBhbmRlZCBzdGF0ZSBvZiByb3dzIGluIHRoZSB0YWJsZS5cblx0ICpcblx0ICogQHR5cGUge0FycmF5PGJvb2xlYW4+fVxuXHQgKiBAbWVtYmVyb2YgVGFibGVNb2RlbFxuXHQgKi9cblx0cm93c0V4cGFuZGVkOiBBcnJheTxib29sZWFuPjtcblxuXHQvKipcblx0ICogQ29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNvbnRleHQgb2YgdGhlIHJvdy5cblx0ICpcblx0ICogSXQgYWZmZWN0cyBzdHlsaW5nIG9mIHRoZSByb3cgdG8gcmVmbGVjdCB0aGUgY29udGV4dC5cblx0ICpcblx0ICogc3RyaW5nIGNhbiBiZSBvbmUgb2YgYFwic3VjY2Vzc1wiIHwgXCJ3YXJuaW5nXCIgfCBcImluZm9cIiB8IFwiZXJyb3JcIiB8IFwiXCJgIGFuZCBpdCdzXG5cdCAqIGVtcHR5IG9yIHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdCAqXG5cdCAqIEB0eXBlIHtBcnJheTxzdHJpbmc+fVxuXHQgKiBAbWVtYmVyb2YgVGFibGVNb2RlbFxuXHQgKi9cblx0cm93c0NvbnRleHQ6IEFycmF5PHN0cmluZz47XG5cblx0LyoqXG5cdCAqIENvbnRhaW5zIGNsYXNzIG5hbWUocykgb2YgdGhlIHJvdy5cblx0ICpcblx0ICogSXQgYWZmZWN0cyBzdHlsaW5nIG9mIHRoZSByb3cgdG8gcmVmbGVjdCB0aGUgYXBwZW5kZWQgY2xhc3MgbmFtZShzKS5cblx0ICpcblx0ICogSXQncyBlbXB0eSBvciB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHQgKlxuXHQgKiBAdHlwZSB7QXJyYXk8c3RyaW5nPn1cblx0ICogQG1lbWJlcm9mIFRhYmxlTW9kZWxcblx0ICovXG5cdHJvd3NDbGFzczogQXJyYXk8c3RyaW5nPjtcblxuXHQvKipcblx0ICogQ29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGhlYWRlciBjZWxscyBvZiB0aGUgdGFibGUuXG5cdCAqXG5cdCAqIEB0eXBlIHtBcnJheTxUYWJsZUhlYWRlckl0ZW0+fVxuXHQgKiBAbWVtYmVyb2YgVGFibGVNb2RlbFxuXHQgKi9cblx0aGVhZGVyOiBBcnJheTxUYWJsZUhlYWRlckl0ZW0+O1xuXG5cdC8qKlxuXHQgKiBUcmFja3MgdGhlIGN1cnJlbnQgcGFnZSBvZiB0aGUgdGFibGUuXG5cdCAqXG5cdCAqIEB0eXBlIHtudW1iZXJ9XG5cdCAqIEBtZW1iZXJvZiBUYWJsZU1vZGVsXG5cdCAqL1xuXHRjdXJyZW50UGFnZTogbnVtYmVyO1xuXG5cdC8qKlxuXHQgKiBMZW5ndGggb2YgcGFnZSBvZiB0aGUgdGFibGUuXG5cdCAqXG5cdCAqIEB0eXBlIHtudW1iZXJ9XG5cdCAqIEBtZW1iZXJvZiBUYWJsZU1vZGVsXG5cdCAqL1xuXHRwYWdlTGVuZ3RoOiBudW1iZXI7XG5cblx0LyoqXG5cdCAqIFNldCB0byB0cnVlIHdoZW4gdGhlcmUgaXMgbm8gbW9yZSBkYXRhIHRvIGxvYWQgaW4gdGhlIHRhYmxlXG5cdCAqXG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKiBAbWVtYmVyb2YgVGFibGVNb2RlbFxuXHQgKi9cblx0aXNFbmQgPSBmYWxzZTtcblxuXHQvKipcblx0ICogU2V0IHRvIHRydWUgd2hlbiBsYXp5IGxvYWRpbmcgdG8gc2hvdyBsb2FkaW5nIGluZGljYXRvclxuXHQgKlxuXHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0ICogQG1lbWJlcm9mIFRhYmxlTW9kZWxcblx0ICovXG5cdGlzTG9hZGluZyA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBBYnNvbHV0ZSB0b3RhbCBudW1iZXIgb2Ygcm93cyBvZiB0aGUgdGFibGUuXG5cdCAqXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHR5cGUge251bWJlcn1cblx0ICogQG1lbWJlcm9mIFRhYmxlTW9kZWxcblx0ICovXG5cdHByb3RlY3RlZCBfdG90YWxEYXRhTGVuZ3RoOiBudW1iZXI7XG5cblx0LyoqXG5cdCAqIE1hbnVhbGx5IHNldCBkYXRhIGxlbmd0aCBpbiBjYXNlIHRoZSBkYXRhIGluIHRoZSB0YWJsZSBkb2Vzbid0XG5cdCAqIGNvcnJlY3RseSByZWZsZWN0IGFsbCB0aGUgZGF0YSB0aGF0IHRhYmxlIGlzIHRvIGRpc3BseS5cblx0ICpcblx0ICogRXhhbXBsZTogaWYgeW91IGhhdmUgbXVsdGlwbGUgcGFnZXMgb2YgZGF0YSB0aGF0IHRhYmxlIHdpbGwgZGlzcGxheVxuXHQgKiBidXQgeW91J3JlIGxvYWRpbmcgb25lIGF0IGEgdGltZS5cblx0ICpcblx0ICogU2V0IHRvIGBudWxsYCB0byByZXNldCB0byBkZWZhdWx0IGJlaGF2aW91ci5cblx0ICpcblx0ICogQG1lbWJlcm9mIFRhYmxlTW9kZWxcblx0ICovXG5cdHNldCB0b3RhbERhdGFMZW5ndGgobGVuZ3RoOiBudW1iZXIpIHtcblx0XHR0aGlzLl90b3RhbERhdGFMZW5ndGggPSBsZW5ndGg7XG5cdH1cblxuXHQvKipcblx0ICogVG90YWwgbGVuZ3RoIG9mIGRhdGEgdGhhdCB0YWJsZSBoYXMgYWNjZXNzIHRvLCBvciB0aGUgYW1vdW50IG1hbnVhbGx5IHNldFxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgVGFibGVNb2RlbFxuXHQgKi9cblx0Z2V0IHRvdGFsRGF0YUxlbmd0aCgpIHtcblx0XHQvLyBpZiBtYW51YWxseSBzZXQgZGF0YSBsZW5ndGhcblx0XHRpZiAodGhpcy5fdG90YWxEYXRhTGVuZ3RoICYmIHRoaXMuX3RvdGFsRGF0YUxlbmd0aCA+PSAwKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fdG90YWxEYXRhTGVuZ3RoO1xuXHRcdH1cblxuXHRcdC8vIGlmIGVtcHR5IGRhdGFzZXRcblx0XHRpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sZW5ndGggPT09IDEgJiYgdGhpcy5kYXRhWzBdLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZGF0YS5sZW5ndGg7XG5cdH1cblxuXHQvKipcblx0ICogVXNlZCBpbiBgZGF0YWBcblx0ICpcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAdHlwZSB7QXJyYXk8QXJyYXk8VGFibGVJdGVtPj59XG5cdCAqIEBtZW1iZXJvZiBUYWJsZU1vZGVsXG5cdCAqL1xuXHRwcm90ZWN0ZWQgX2RhdGE6IEFycmF5PEFycmF5PFRhYmxlSXRlbT4+ID0gW1tdXTtcblxuXHQvKipcblx0ICogUmV0dXJucyBob3cgbWFueSByb3dzIGlzIGN1cnJlbnRseSBzZWxlY3RlZFxuXHQgKlxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKiBAbWVtYmVyb2YgVGFibGVNb2RlbFxuXHQgKi9cblx0c2VsZWN0ZWRSb3dzQ291bnQoKTogbnVtYmVyIHtcblx0XHRsZXQgY291bnQgPSAwO1xuXHRcdGlmICh0aGlzLnJvd3NTZWxlY3RlZCkge1xuXHRcdFx0dGhpcy5yb3dzU2VsZWN0ZWQuZm9yRWFjaChyb3dTZWxlY3RlZCA9PiB7XG5cdFx0XHRcdGlmIChyb3dTZWxlY3RlZCkge1xuXHRcdFx0XHRcdGNvdW50Kys7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gY291bnQ7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBob3cgbWFueSByb3dzIGlzIGN1cnJlbnRseSBleHBhbmRlZFxuXHQgKlxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKiBAbWVtYmVyb2YgVGFibGVNb2RlbFxuXHQgKi9cblx0ZXhwYW5kZWRSb3dzQ291bnQoKTogbnVtYmVyIHtcblx0XHRsZXQgY291bnQgPSAwO1xuXHRcdGlmICh0aGlzLnJvd3NFeHBhbmRlZCkge1xuXHRcdFx0dGhpcy5yb3dzRXhwYW5kZWQuZm9yRWFjaChyb3dFeHBhbmRlZCA9PiB7XG5cdFx0XHRcdGlmIChyb3dFeHBhbmRlZCkge1xuXHRcdFx0XHRcdGNvdW50Kys7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gY291bnQ7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBgaW5kZXhgdGggcm93IG9mIHRoZSB0YWJsZS5cblx0ICpcblx0ICogTmVnYXRpdmUgaW5kZXggc3RhcnRzIGZyb20gdGhlIGVuZC4gLTEgYmVpbmcgdGhlIGxhc3QgZWxlbWVudC5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG5cdCAqIEByZXR1cm5zIHtBcnJheTxUYWJsZUl0ZW0+fVxuXHQgKiBAbWVtYmVyb2YgVGFibGVNb2RlbFxuXHQgKi9cblx0cm93KGluZGV4OiBudW1iZXIpOiBBcnJheTxUYWJsZUl0ZW0+IHtcblx0XHRyZXR1cm4gdGhpcy5kYXRhW3RoaXMucmVhbFJvd0luZGV4KGluZGV4KV07XG5cdH1cblxuXHQvKipcblx0ICogQWRkcyBhIHJvdyB0byB0aGUgYGluZGV4YHRoIHJvdyBvciBhcHBlbmRzIHRvIHRhYmxlIGlmIGluZGV4IG5vdCBwcm92aWRlZC5cblx0ICpcblx0ICogSWYgcm93IGlzIHNob3J0ZXIgdGhhbiBvdGhlciByb3dzIG9yIG5vdCBwcm92aWRlZCwgaXQgd2lsbCBiZSBwYWRkZWQgd2l0aFxuXHQgKiBlbXB0eSBgVGFibGVJdGVtYCBlbGVtZW50cy5cblx0ICpcblx0ICogSWYgcm93IGlzIGxvbmdlciB0aGFuIG90aGVyIHJvd3MsIG90aGVycyB3aWxsIGJlIGV4dGVuZGVkIHRvIG1hdGNoIHNvIG5vIGRhdGEgaXMgbG9zdC5cblx0ICpcblx0ICogSWYgY2FsbGVkIG9uIGFuIGVtcHR5IHRhYmxlIHdpdGggbm8gcGFyYW1ldGVycywgaXQgY3JlYXRlcyBhIDF4MSB0YWJsZS5cblx0ICpcblx0ICogTmVnYXRpdmUgaW5kZXggc3RhcnRzIGZyb20gdGhlIGVuZC4gLTEgYmVpbmcgdGhlIGxhc3QgZWxlbWVudC5cblx0ICpcblx0ICogQHBhcmFtIHtBcnJheTxUYWJsZUl0ZW0+fSByb3dcblx0ICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleF1cblx0ICogQG1lbWJlcm9mIFRhYmxlTW9kZWxcblx0ICovXG5cdGFkZFJvdyhyb3c/OiBBcnJheTxUYWJsZUl0ZW0+LCBpbmRleD86IG51bWJlcikge1xuXHRcdC8vIGlmIHRhYmxlIGVtcHR5IGNyZWF0ZSB0YWJsZSB3aXRoIHJvd1xuXHRcdGlmICghdGhpcy5kYXRhIHx8IHRoaXMuZGF0YS5sZW5ndGggPT09IDAgfHwgdGhpcy5kYXRhWzBdLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0bGV0IG5ld0RhdGEgPSBuZXcgQXJyYXk8QXJyYXk8VGFibGVJdGVtPj4oKTtcblx0XHRcdG5ld0RhdGEucHVzaChyb3cgPyByb3cgOiBbbmV3IFRhYmxlSXRlbSgpXSk7ICAvLyByb3cgb3Igb25lIGVtcHR5IG9uZSBjb2x1bW4gcm93XG5cdFx0XHR0aGlzLmRhdGEgPSBuZXdEYXRhO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IHJlYWxSb3cgPSByb3c7XG5cdFx0Y29uc3QgY29sdW1uQ291bnQgPSB0aGlzLmRhdGFbMF0ubGVuZ3RoO1xuXG5cdFx0aWYgKHJvdyA9PSBudWxsKSB7XG5cdFx0XHRyZWFsUm93ID0gbmV3IEFycmF5PFRhYmxlSXRlbT4oKTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uQ291bnQ7IGkrKykge1xuXHRcdFx0XHRyZWFsUm93LnB1c2gobmV3IFRhYmxlSXRlbSgpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocmVhbFJvdy5sZW5ndGggPCBjb2x1bW5Db3VudCkge1xuXHRcdFx0Ly8gZXh0ZW5kIHRoZSBsZW5ndGggb2YgcmVhbFJvd1xuXHRcdFx0Y29uc3QgZGlmZmVyZW5jZSA9IGNvbHVtbkNvdW50IC0gcmVhbFJvdy5sZW5ndGg7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRpZmZlcmVuY2U7IGkrKykge1xuXHRcdFx0XHRyZWFsUm93LnB1c2gobmV3IFRhYmxlSXRlbSgpKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHJlYWxSb3cubGVuZ3RoID4gY29sdW1uQ291bnQpIHtcblx0XHRcdC8vIGV4dGVuZCB0aGUgbGVuZ3RoIG9mIGhlYWRlclxuXHRcdFx0bGV0IGRpZmZlcmVuY2UgPSByZWFsUm93Lmxlbmd0aCAtIHRoaXMuaGVhZGVyLmxlbmd0aDtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgZGlmZmVyZW5jZTsgaisrKSB7XG5cdFx0XHRcdHRoaXMuaGVhZGVyLnB1c2gobmV3IFRhYmxlSGVhZGVySXRlbSgpKTtcblx0XHRcdH1cblx0XHRcdC8vIGV4dGVuZCB0aGUgbGVuZ3RoIG9mIGV2ZXJ5IG90aGVyIHJvd1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IGN1cnJlbnRSb3cgPSB0aGlzLmRhdGFbaV07XG5cdFx0XHRcdGRpZmZlcmVuY2UgPSByZWFsUm93Lmxlbmd0aCAtIGN1cnJlbnRSb3cubGVuZ3RoO1xuXHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGRpZmZlcmVuY2U7IGorKykge1xuXHRcdFx0XHRcdGN1cnJlbnRSb3cucHVzaChuZXcgVGFibGVJdGVtKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGluZGV4ID09IG51bGwpIHtcblx0XHRcdHRoaXMuZGF0YS5wdXNoKHJlYWxSb3cpO1xuXG5cdFx0XHQvLyB1cGRhdGUgcm93c1NlbGVjdGVkIHByb3BlcnR5IGZvciBsZW5ndGhcblx0XHRcdHRoaXMucm93c1NlbGVjdGVkLnB1c2goZmFsc2UpO1xuXG5cdFx0XHQvLyB1cGRhdGUgcm93c0V4cGFuZGVkIHByb3BlcnR5IGZvciBsZW5ndGhcblx0XHRcdHRoaXMucm93c0V4cGFuZGVkLnB1c2goZmFsc2UpO1xuXG5cdFx0XHQvLyB1cGRhdGUgcm93c0NvbnRleHQgcHJvcGVydHkgZm9yIGxlbmd0aFxuXHRcdFx0dGhpcy5yb3dzQ29udGV4dC5wdXNoKHVuZGVmaW5lZCk7XG5cblx0XHRcdC8vIHVwZGF0ZSByb3dzQ2xhc3MgcHJvcGVydHkgZm9yIGxlbmd0aFxuXHRcdFx0dGhpcy5yb3dzQ2xhc3MucHVzaCh1bmRlZmluZWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCByaSA9IHRoaXMucmVhbFJvd0luZGV4KGluZGV4KTtcblx0XHRcdHRoaXMuZGF0YS5zcGxpY2UocmksIDAsIHJlYWxSb3cpO1xuXG5cdFx0XHQvLyB1cGRhdGUgcm93c1NlbGVjdGVkIHByb3BlcnR5IGZvciBsZW5ndGhcblx0XHRcdHRoaXMucm93c1NlbGVjdGVkLnNwbGljZShyaSwgMCwgZmFsc2UpO1xuXG5cdFx0XHQvLyB1cGRhdGUgcm93c0V4cGFuZGVkIHByb3BlcnR5IGZvciBsZW5ndGhcblx0XHRcdHRoaXMucm93c0V4cGFuZGVkLnNwbGljZShyaSwgMCwgZmFsc2UpO1xuXG5cdFx0XHQvLyB1cGRhdGUgcm93c0NvbnRleHQgcHJvcGVydHkgZm9yIGxlbmd0aFxuXHRcdFx0dGhpcy5yb3dzQ29udGV4dC5zcGxpY2UocmksIDAsIHVuZGVmaW5lZCk7XG5cblx0XHRcdC8vIHVwZGF0ZSByb3dzQ2xhc3MgcHJvcGVydHkgZm9yIGxlbmd0aFxuXHRcdFx0dGhpcy5yb3dzQ2xhc3Muc3BsaWNlKHJpLCAwLCB1bmRlZmluZWQpO1xuXHRcdH1cblxuXHRcdHRoaXMuZGF0YUNoYW5nZS5lbWl0KCk7XG5cdH1cblxuXHQvKipcblx0ICogRGVsZXRlcyBgaW5kZXhgdGggcm93LlxuXHQgKlxuXHQgKiBOZWdhdGl2ZSBpbmRleCBzdGFydHMgZnJvbSB0aGUgZW5kLiAtMSBiZWluZyB0aGUgbGFzdCBlbGVtZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcblx0ICogQG1lbWJlcm9mIFRhYmxlTW9kZWxcblx0ICovXG5cdGRlbGV0ZVJvdyhpbmRleDogbnVtYmVyKSB7XG5cdFx0Y29uc3QgcnJpID0gdGhpcy5yZWFsUm93SW5kZXgoaW5kZXgpO1xuXHRcdHRoaXMuZGF0YS5zcGxpY2UocnJpLCAxKTtcblx0XHR0aGlzLnJvd3NTZWxlY3RlZC5zcGxpY2UocnJpLCAxKTtcblx0XHR0aGlzLnJvd3NFeHBhbmRlZC5zcGxpY2UocnJpLCAxKTtcblx0XHR0aGlzLnJvd3NDb250ZXh0LnNwbGljZShycmksIDEpO1xuXHRcdHRoaXMucm93c0NsYXNzLnNwbGljZShycmksIDEpO1xuXG5cdFx0dGhpcy5kYXRhQ2hhbmdlLmVtaXQoKTtcblx0fVxuXG5cdGhhc0V4cGFuZGFibGVSb3dzKCkge1xuXHRcdHJldHVybiB0aGlzLmRhdGEuc29tZShkYXRhID0+IGRhdGEuc29tZShkID0+IGQuZXhwYW5kZWREYXRhKSk7IC8vIGNoZWNraW5nIGZvciBzb21lIGluIDJEIGFycmF5XG5cdH1cblxuXHRpc1Jvd0V4cGFuZGFibGUoaW5kZXg6IG51bWJlcikge1xuXHRcdHJldHVybiB0aGlzLmRhdGFbaW5kZXhdLnNvbWUoZCA9PiBkLmV4cGFuZGVkRGF0YSk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBgaW5kZXhgdGggY29sdW1uIG9mIHRoZSB0YWJsZS5cblx0ICpcblx0ICogTmVnYXRpdmUgaW5kZXggc3RhcnRzIGZyb20gdGhlIGVuZC4gLTEgYmVpbmcgdGhlIGxhc3QgZWxlbWVudC5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG5cdCAqIEByZXR1cm5zIHtBcnJheTxUYWJsZUl0ZW0+fVxuXHQgKiBAbWVtYmVyb2YgVGFibGVNb2RlbFxuXHQgKi9cblx0Y29sdW1uKGluZGV4OiBudW1iZXIpOiBBcnJheTxUYWJsZUl0ZW0+IHtcblx0XHRsZXQgY29sdW1uID0gbmV3IEFycmF5PFRhYmxlSXRlbT4oKTtcblx0XHRjb25zdCByaSA9IHRoaXMucmVhbENvbHVtbkluZGV4KGluZGV4KTtcblx0XHRjb25zdCByYyA9IHRoaXMuZGF0YS5sZW5ndGg7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJjOyBpKyspIHtcblx0XHRcdGNvbnN0IHJvdyA9IHRoaXMuZGF0YVtpXTtcblx0XHRcdGNvbHVtbi5wdXNoKHJvd1tyaV0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2x1bW47XG5cdH1cblxuXHQvKipcblx0ICogQWRkcyBhIGNvbHVtbiB0byB0aGUgYGluZGV4YHRoIGNvbHVtbiBvciBhcHBlbmRzIHRvIHRhYmxlIGlmIGluZGV4IG5vdCBwcm92aWRlZC5cblx0ICpcblx0ICogSWYgY29sdW1uIGlzIHNob3J0ZXIgdGhhbiBvdGhlciBjb2x1bW5zIG9yIG5vdCBwcm92aWRlZCwgaXQgd2lsbCBiZSBwYWRkZWQgd2l0aFxuXHQgKiBlbXB0eSBgVGFibGVJdGVtYCBlbGVtZW50cy5cblx0ICpcblx0ICogSWYgY29sdW1uIGlzIGxvbmdlciB0aGFuIG90aGVyIGNvbHVtbnMsIG90aGVycyB3aWxsIGJlIGV4dGVuZGVkIHRvIG1hdGNoIHNvIG5vIGRhdGEgaXMgbG9zdC5cblx0ICpcblx0ICogSWYgY2FsbGVkIG9uIGFuIGVtcHR5IHRhYmxlIHdpdGggbm8gcGFyYW1ldGVycywgaXQgY3JlYXRlcyBhIDF4MSB0YWJsZS5cblx0ICpcblx0ICogTmVnYXRpdmUgaW5kZXggc3RhcnRzIGZyb20gdGhlIGVuZC4gLTEgYmVpbmcgdGhlIGxhc3QgZWxlbWVudC5cblx0ICpcblx0ICogQHBhcmFtIHtBcnJheTxUYWJsZUl0ZW0+fSBjb2x1bW5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleF1cblx0ICogQG1lbWJlcm9mIFRhYmxlTW9kZWxcblx0ICovXG5cdGFkZENvbHVtbihjb2x1bW4/OiBBcnJheTxUYWJsZUl0ZW0+LCBpbmRleD86IG51bWJlcikge1xuXHRcdC8vIGlmIHRhYmxlIGVtcHR5IGNyZWF0ZSB0YWJsZSB3aXRoIHJvd1xuXHRcdGlmICghdGhpcy5kYXRhIHx8IHRoaXMuZGF0YS5sZW5ndGggPT09IDAgfHwgdGhpcy5kYXRhWzBdLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0bGV0IG5ld0RhdGEgPSBuZXcgQXJyYXk8QXJyYXk8VGFibGVJdGVtPj4oKTtcblx0XHRcdGlmIChjb2x1bW4gPT0gbnVsbCkge1xuXHRcdFx0XHRuZXdEYXRhLnB1c2goW25ldyBUYWJsZUl0ZW0oKV0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRsZXQgaXRlbSA9IGNvbHVtbltpXTtcblx0XHRcdFx0XHRuZXdEYXRhLnB1c2goW2l0ZW1dKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5kYXRhID0gbmV3RGF0YTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCByYyA9IHRoaXMuZGF0YS5sZW5ndGg7ICAvLyByb3cgY291bnRcblx0XHRsZXQgY2kgPSB0aGlzLnJlYWxDb2x1bW5JbmRleChpbmRleCk7XG5cblx0XHQvLyBhcHBlbmQgbWlzc2luZyByb3dzXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGNvbHVtbiAhPSBudWxsICYmIGkgPCBjb2x1bW4ubGVuZ3RoIC0gcmM7IGkrKykge1xuXHRcdFx0dGhpcy5hZGRSb3coKTtcblx0XHR9XG5cdFx0cmMgPSB0aGlzLmRhdGEubGVuZ3RoO1xuXHRcdGlmIChpbmRleCA9PSBudWxsKSB7XG5cdFx0XHQvLyBhcHBlbmQgdG8gZW5kXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJjOyBpKyspIHtcblx0XHRcdFx0bGV0IHJvdyA9IHRoaXMuZGF0YVtpXTtcblx0XHRcdFx0cm93LnB1c2goY29sdW1uID09IG51bGwgfHwgY29sdW1uW2ldID09IG51bGwgPyBuZXcgVGFibGVJdGVtKCkgOiBjb2x1bW5baV0pO1xuXHRcdFx0fVxuXHRcdFx0Ly8gdXBkYXRlIGhlYWRlciBpZiBub3QgYWxyZWFkeSBzZXQgYnkgdXNlclxuXHRcdFx0aWYgKHRoaXMuaGVhZGVyLmxlbmd0aCA8IHRoaXMuZGF0YVswXS5sZW5ndGgpIHtcblx0XHRcdFx0dGhpcy5oZWFkZXIucHVzaChuZXcgVGFibGVIZWFkZXJJdGVtKCkpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoaW5kZXggPj0gdGhpcy5kYXRhWzBdLmxlbmd0aCkge1xuXHRcdFx0XHQvLyBpZiB0cnlpbmcgdG8gYXBwZW5kXG5cdFx0XHRcdGNpKys7XG5cdFx0XHR9XG5cdFx0XHQvLyBpbnNlcnRcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcmM7IGkrKykge1xuXHRcdFx0XHRsZXQgcm93ID0gdGhpcy5kYXRhW2ldO1xuXHRcdFx0XHRyb3cuc3BsaWNlKGNpLCAwLCBjb2x1bW4gPT0gbnVsbCB8fCBjb2x1bW5baV0gPT0gbnVsbCA/IG5ldyBUYWJsZUl0ZW0oKSA6IGNvbHVtbltpXSk7XG5cdFx0XHR9XG5cdFx0XHQvLyB1cGRhdGUgaGVhZGVyIGlmIG5vdCBhbHJlYWR5IHNldCBieSB1c2VyXG5cdFx0XHRpZiAodGhpcy5oZWFkZXIubGVuZ3RoIDwgdGhpcy5kYXRhWzBdLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLmhlYWRlci5zcGxpY2UoY2ksIDAsIG5ldyBUYWJsZUhlYWRlckl0ZW0oKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5kYXRhQ2hhbmdlLmVtaXQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZWxldGVzIGBpbmRleGB0aCBjb2x1bW4uXG5cdCAqXG5cdCAqIE5lZ2F0aXZlIGluZGV4IHN0YXJ0cyBmcm9tIHRoZSBlbmQuIC0xIGJlaW5nIHRoZSBsYXN0IGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuXHQgKiBAbWVtYmVyb2YgVGFibGVNb2RlbFxuXHQgKi9cblx0ZGVsZXRlQ29sdW1uKGluZGV4OiBudW1iZXIpIHtcblx0XHRjb25zdCByY2kgPSB0aGlzLnJlYWxDb2x1bW5JbmRleChpbmRleCk7XG5cdFx0Y29uc3Qgcm93Q291bnQgPSB0aGlzLmRhdGEubGVuZ3RoO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcm93Q291bnQ7IGkrKykge1xuXHRcdFx0dGhpcy5kYXRhW2ldLnNwbGljZShyY2ksIDEpO1xuXHRcdH1cblx0XHQvLyB1cGRhdGUgaGVhZGVyIGlmIG5vdCBhbHJlYWR5IHNldCBieSB1c2VyXG5cdFx0aWYgKHRoaXMuaGVhZGVyLmxlbmd0aCA+IHRoaXMuZGF0YVswXS5sZW5ndGgpIHtcblx0XHRcdHRoaXMuaGVhZGVyLnNwbGljZShyY2ksIDEpO1xuXHRcdH1cblxuXHRcdHRoaXMuZGF0YUNoYW5nZS5lbWl0KCk7XG5cdH1cblxuXHRtb3ZlQ29sdW1uKGluZGV4RnJvbTogbnVtYmVyLCBpbmRleFRvOiBudW1iZXIpIHtcblx0XHRjb25zdCBoZWFkZXJGcm9tID0gdGhpcy5oZWFkZXJbaW5kZXhGcm9tXTtcblxuXHRcdHRoaXMuYWRkQ29sdW1uKHRoaXMuY29sdW1uKGluZGV4RnJvbSksIGluZGV4VG8pO1xuXHRcdHRoaXMuZGVsZXRlQ29sdW1uKGluZGV4RnJvbSArIChpbmRleFRvIDwgaW5kZXhGcm9tID8gMSA6IDApKTtcblxuXHRcdHRoaXMuaGVhZGVyW2luZGV4VG8gKyAoaW5kZXhUbyA+IGluZGV4RnJvbSA/IC0xIDogMCldID0gaGVhZGVyRnJvbTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTb3J0cyB0aGUgZGF0YSBjdXJyZW50bHkgcHJlc2VudCBpbiB0aGUgbW9kZWwgYmFzZWQgb24gYGNvbXBhcmUoKWBcblx0ICpcblx0ICogRGlyZWN0aW9uIGlzIHNldCBieSBgYXNjZW5kaW5nYCBhbmQgYGRlc2NlbmRpbmdgIHByb3BlcnRpZXMgb2YgYFRhYmxlSGVhZGVySXRlbWBcblx0ICogaW4gYGluZGV4YHRoIGNvbHVtbi5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBjb2x1bW4gYmFzZWQgb24gd2hpY2ggaXQncyBzb3J0aW5nXG5cdCAqIEBtZW1iZXJvZiBUYWJsZU1vZGVsXG5cdCAqL1xuXHRzb3J0KGluZGV4OiBudW1iZXIpIHtcblx0XHR0aGlzLnB1c2hSb3dTdGF0ZVRvTW9kZWxEYXRhKCk7XG5cdFx0dGhpcy5kYXRhLnNvcnQoKGEsIGIpID0+ICh0aGlzLmhlYWRlcltpbmRleF0uZGVzY2VuZGluZyA/IC0xIDogMSkgKiB0aGlzLmhlYWRlcltpbmRleF0uY29tcGFyZShhW2luZGV4XSwgYltpbmRleF0pKTtcblx0XHR0aGlzLnBvcFJvd1N0YXRlRnJvbU1vZGVsRGF0YSgpO1xuXHRcdHRoaXMuaGVhZGVyLmZvckVhY2goY29sdW1uID0+IGNvbHVtbi5zb3J0ZWQgPSBmYWxzZSk7XG5cdFx0dGhpcy5oZWFkZXJbaW5kZXhdLnNvcnRlZCA9IHRydWU7XG5cdH1cblxuXHQvKipcblx0ICogQXBwZW5kcyBgcm93c1NlbGVjdGVkYCBhbmQgYHJvd3NFeHBhbmRlZGAgaW5mbyB0byBtb2RlbCBkYXRhLlxuXHQgKlxuXHQgKiBXaGVuIHNvcnRpbmcgcm93cywgZG8gdGhpcyBmaXJzdCBzbyBpbmZvcm1hdGlvbiBhYm91dCByb3cgc2VsZWN0aW9uXG5cdCAqIGdldHMgc29ydGVkIHdpdGggdGhlIG90aGVyIHJvdyBpbmZvLlxuXHQgKlxuXHQgKiBDYWxsIGBwb3BSb3dTZWxlY3Rpb25Gcm9tTW9kZWxEYXRhKClgIGFmdGVyIHNvcnRpbmcgdG8gbWFrZSBldmVyeXRoaW5nXG5cdCAqIHJpZ2h0IHdpdGggdGhlIHdvcmxkIGFnYWluLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgVGFibGVNb2RlbFxuXHQgKi9cblx0cHVzaFJvd1N0YXRlVG9Nb2RlbERhdGEoKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHJvd1NlbGVjdGVkTWFyayA9IG5ldyBUYWJsZUl0ZW0oKTtcblx0XHRcdHJvd1NlbGVjdGVkTWFyay5kYXRhID0gdGhpcy5yb3dzU2VsZWN0ZWRbaV07XG5cdFx0XHR0aGlzLmRhdGFbaV0ucHVzaChyb3dTZWxlY3RlZE1hcmspO1xuXG5cdFx0XHRjb25zdCByb3dFeHBhbmRlZE1hcmsgPSBuZXcgVGFibGVJdGVtKCk7XG5cdFx0XHRyb3dFeHBhbmRlZE1hcmsuZGF0YSA9IHRoaXMucm93c0V4cGFuZGVkW2ldO1xuXHRcdFx0dGhpcy5kYXRhW2ldLnB1c2gocm93RXhwYW5kZWRNYXJrKTtcblxuXHRcdFx0Y29uc3Qgcm93Q29udGV4dCA9IG5ldyBUYWJsZUl0ZW0oKTtcblx0XHRcdHJvd0NvbnRleHQuZGF0YSA9IHRoaXMucm93c0NvbnRleHRbaV07XG5cdFx0XHR0aGlzLmRhdGFbaV0ucHVzaChyb3dDb250ZXh0KTtcblxuXHRcdFx0Y29uc3Qgcm93Q2xhc3MgPSBuZXcgVGFibGVJdGVtKCk7XG5cdFx0XHRyb3dDbGFzcy5kYXRhID0gdGhpcy5yb3dzQ2xhc3NbaV07XG5cdFx0XHR0aGlzLmRhdGFbaV0ucHVzaChyb3dDbGFzcyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlc3RvcmVzIGByb3dzU2VsZWN0ZWRgIGZyb20gZGF0YSBwdXNoZWQgYnkgYHB1c2hSb3dTZWxlY3Rpb25Ub01vZGVsRGF0YSgpYFxuXHQgKlxuXHQgKiBDYWxsIGFmdGVyIHNvcnRpbmcgZGF0YSAoaWYgeW91IHByZXZpb3VzbHkgcHVzaGVkIHRvIG1haW50YWluIHNlbGVjdGlvbiBvcmRlcilcblx0ICogdG8gbWFrZSBldmVyeXRoaW5nIHJpZ2h0IHdpdGggdGhlIHdvcmxkIGFnYWluLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgVGFibGVNb2RlbFxuXHQgKi9cblx0cG9wUm93U3RhdGVGcm9tTW9kZWxEYXRhKCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0aGlzLnJvd3NDbGFzc1tpXSA9IHRoaXMuZGF0YVtpXS5wb3AoKS5kYXRhO1xuXHRcdFx0dGhpcy5yb3dzQ29udGV4dFtpXSA9IHRoaXMuZGF0YVtpXS5wb3AoKS5kYXRhO1xuXHRcdFx0dGhpcy5yb3dzRXhwYW5kZWRbaV0gPSAhIXRoaXMuZGF0YVtpXS5wb3AoKS5kYXRhO1xuXHRcdFx0dGhpcy5yb3dzU2VsZWN0ZWRbaV0gPSAhIXRoaXMuZGF0YVtpXS5wb3AoKS5kYXRhO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgcm93IGlzIGZpbHRlcmVkIG91dC5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIGFueSBvZiB0aGUgZmlsdGVycyBpbiBoZWFkZXIgZmlsdGVycyBvdXQgdGhlIGBpbmRleGB0aCByb3dcblx0ICogQG1lbWJlcm9mIFRhYmxlTW9kZWxcblx0ICovXG5cdGlzUm93RmlsdGVyZWQoaW5kZXg6IG51bWJlcikge1xuXHRcdGNvbnN0IGluZCA9IHRoaXMucmVhbFJvd0luZGV4KGluZGV4KTtcblx0XHRyZXR1cm4gdGhpcy5oZWFkZXIuc29tZSgoaXRlbSwgaSkgPT4gaXRlbS5maWx0ZXIodGhpcy5yb3coaW5kKVtpXSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNlbGVjdC9kZXNlbGVjdCBgaW5kZXhgdGggcm93IGJhc2VkIG9uIHZhbHVlXG5cdCAqXG5cdCAqIEBwYXJhbSBpbmRleFxuXHQgKiBAcGFyYW0gdmFsdWVcblx0ICovXG5cdHNlbGVjdFJvdyhpbmRleCwgdmFsdWUgPSB0cnVlKSB7XG5cdFx0dGhpcy5yb3dzU2VsZWN0ZWRbaW5kZXhdID0gdmFsdWU7XG5cdFx0dGhpcy5yb3dzU2VsZWN0ZWRDaGFuZ2UuZW1pdChpbmRleCk7XG5cdH1cblxuXHQvKipcblx0ICogRXhwYW5kcy9Db2xsYXBzZXMgYGluZGV4YHRoIHJvdyBiYXNlZCBvbiB2YWx1ZVxuXHQgKlxuXHQgKiBAcGFyYW0gaW5kZXhcblx0ICogQHBhcmFtIHZhbHVlXG5cdCAqL1xuXHRleHBhbmRSb3coaW5kZXgsIHZhbHVlID0gdHJ1ZSkge1xuXHRcdHRoaXMucm93c0V4cGFuZGVkW2luZGV4XSA9IHZhbHVlO1xuXHRcdHRoaXMucm93c0V4cGFuZGVkQ2hhbmdlLmVtaXQoaW5kZXgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIHRydWUgaW5kZXggb2YgYSByb3cgYmFzZWQgb24gaXQncyByZWxhdGl2ZSBwb3NpdGlvbi5cblx0ICogTGlrZSBpbiBQeXRob24sIHBvc2l0aXZlIG51bWJlcnMgc3RhcnQgZnJvbSB0aGUgdG9wIGFuZFxuXHQgKiBuZWdhdGl2ZSBudW1iZXJzIHN0YXJ0IGZyb20gdGhlIGJvdHRvbS5cblx0ICpcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcblx0ICogQHJldHVybnMge251bWJlcn1cblx0ICogQG1lbWJlcm9mIFRhYmxlTW9kZWxcblx0ICovXG5cdHByb3RlY3RlZCByZWFsUm93SW5kZXgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucmVhbEluZGV4KGluZGV4LCB0aGlzLmRhdGEubGVuZ3RoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSB0cnVlIGluZGV4IG9mIGEgY29sdW1uIGJhc2VkIG9uIGl0J3MgcmVsYXRpdmUgcG9zaXRpb24uXG5cdCAqIExpa2UgaW4gUHl0aG9uLCBwb3NpdGl2ZSBudW1iZXJzIHN0YXJ0IGZyb20gdGhlIHRvcCBhbmRcblx0ICogbmVnYXRpdmUgbnVtYmVycyBzdGFydCBmcm9tIHRoZSBib3R0b20uXG5cdCAqXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9XG5cdCAqIEBtZW1iZXJvZiBUYWJsZU1vZGVsXG5cdCAqL1xuXHRwcm90ZWN0ZWQgcmVhbENvbHVtbkluZGV4KGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnJlYWxJbmRleChpbmRleCwgdGhpcy5kYXRhWzBdLmxlbmd0aCk7XG5cdH1cblxuXHQvKipcblx0ICogR2VuZXJpYyBmdW5jdGlvbiB0byBjYWxjdWxhdGUgdGhlIHJlYWwgaW5kZXggb2Ygc29tZXRoaW5nLlxuXHQgKiBVc2VkIGJ5IGByZWFsUm93SW5kZXgoKWAgYW5kIGByZWFsQ29sdW1uSW5kZXgoKWBcblx0ICpcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcblx0ICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKiBAbWVtYmVyb2YgVGFibGVNb2RlbFxuXHQgKi9cblx0cHJvdGVjdGVkIHJlYWxJbmRleChpbmRleDogbnVtYmVyLCBsZW5ndGg6IG51bWJlcik6IG51bWJlciB7XG5cdFx0aWYgKGluZGV4ID09IG51bGwpIHtcblx0XHRcdHJldHVybiBsZW5ndGggLSAxO1xuXHRcdH0gZWxzZSBpZiAoaW5kZXggPj0gMCkge1xuXHRcdFx0cmV0dXJuIGluZGV4ID49IGxlbmd0aCA/IGxlbmd0aCAtIDEgOiBpbmRleDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIC1pbmRleCA+PSBsZW5ndGggPyAwIDogbGVuZ3RoICsgaW5kZXg7XG5cdFx0fVxuXHR9XG59XG4iXX0=