import {
	EventEmitter
} from "@angular/core";

import { PaginationModel } from "./../pagination/pagination-model.class";
import { TableHeaderItem } from "./table-header-item.class";
import { TableItem } from "./table-item.class";

export class TableModel implements PaginationModel {
	/**
	 * Sets data of the table.
	 *
	 * Make sure all rows are the same length to keep the column count accurate.
	 */
	set data(newData: TableItem[][]) {
		if (!newData || (Array.isArray(newData) && newData.length === 0) ) {
			newData = [[]];
		}

		this._data = newData;

		// init rowsSelected
		this.rowsSelected = new Array<boolean>(this._data.length).fill(false);
		this.rowsExpanded = new Array<boolean>(this._data.length).fill(false);

		// init rowsContext
		this.rowsContext = new Array<string>(this._data.length);

		// only create a fresh header if necessary (header doesn't exist or differs in length)
		if (this.header == null || (this.header.length !== this._data[0].length && this._data[0].length > 0)) {
			let header = new Array<TableHeaderItem>();
			for (let i = 0; i < this._data[0].length; i++) {
				header.push(new TableHeaderItem());
			}
			this.header = header;
		}

		this.dataChange.emit();
	}

	dataChange = new EventEmitter();
	rowsSelectedChange = new EventEmitter();
	rowsExpandedChange = new EventEmitter();

	/**
	 * Gets the full data.
	 *
	 * You can use it to alter individual `TableItem`s but if you need to change
	 * table structure, use `addRow()` and/or `addColumn()`
	 */
	get data() {
		return this._data;
	}

	/**
	 * Contains information about selection state of rows in the table.
	 */
	rowsSelected: Array<boolean>;

	/**
	 * Contains information about expanded state of rows in the table.
	 */
	rowsExpanded: Array<boolean>;

	/**
	 * Contains information about the context of the row.
	 *
	 * It affects styling of the row to reflect the context.
	 *
	 * string can be one of `"success" | "warning" | "info" | "error" | ""` and it's
	 * empty or undefined by default
	 */
	rowsContext: Array<string>;

	/**
	 * Contains information about the header cells of the table.
	 */
	header: TableHeaderItem[];

	/**
	 * Tracks the current page of the table.
	 */
	currentPage: number;

	/**
	 * Length of page of the table.
	 */
	pageLength: number;

	/**
	 * Set to true when there is no more data to load in the table
	 */
	isEnd = false;

	/**
	 * Set to true when lazy loading to show loading indicator
	 */
	isLoading = false;

	/**
	 * Absolute total number of rows of the table.
	 */
	protected _totalDataLength: number;

	/**
	 * Manually set data length in case the data in the table doesn't
	 * correctly reflect all the data that table is to disply.
	 *
	 * Example: if you have multiple pages of data that table will display
	 * but you're loading one at a time.
	 *
	 * Set to `null` to reset to default behaviour.
	 */
	set totalDataLength(length: number) {
		this._totalDataLength = length;
	}

	/**
	 * Total length of data that table has access to, or the amount manually set
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
	 * Used in `data`
	 */
	protected _data: TableItem[][] = [];

	/**
	 * Returns how many rows is currently selected
	 */
	selectedRowsCount(): number {
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
	 */
	expandedRowsCount(): number {
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
	 * @param index
	 */
	row(index: number): TableItem[] {
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
	 * @param [row]
	 * @param [index]
	 */
	addRow(row?: TableItem[], index?: number) {
		// if table empty create table with row
		if (!this.data || this.data.length === 0 || this.data[0].length === 0) {
			let newData = new Array<Array<TableItem>>();
			newData.push(row ? row : [new TableItem()]);  // row or one empty one column row
			this.data = newData;

			return;
		}

		let realRow = row;
		const columnCount = this.data[0].length;

		if (row == null) {
			realRow = new Array<TableItem>();
			for (let i = 0; i < columnCount; i++) {
				realRow.push(new TableItem());
			}
		}

		if (realRow.length < columnCount) {
			// extend the length of realRow
			const difference = columnCount - realRow.length;
			for (let i = 0; i < difference; i++) {
				realRow.push(new TableItem());
			}
		} else if (realRow.length > columnCount) {
			// extend the length of header
			let difference = realRow.length - this.header.length;
			for (let j = 0; j < difference; j++) {
				this.header.push(new TableHeaderItem());
			}
			// extend the length of every other row
			for (let i = 0; i < this.data.length; i++) {
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
		} else {
			const ri = this.realRowIndex(index);
			this.data.splice(ri, 0, realRow);

			// update rowsSelected property for length
			this.rowsSelected.splice(ri, 0, false);

			// update rowsExpanded property for length
			this.rowsExpanded.splice(ri, 0, false);

			// update rowsContext property for length
			this.rowsContext.splice(ri, 0, undefined);
		}

		this.dataChange.emit();
	}

	/**
	 * Deletes `index`th row.
	 *
	 * Negative index starts from the end. -1 being the last element.
	 *
	 * @param index
	 */
	deleteRow(index: number) {
		const rri = this.realRowIndex(index);
		this.data.splice(rri, 1);
		this.rowsSelected.splice(rri, 1);
		this.rowsExpanded.splice(rri, 1);
		this.rowsContext.splice(rri, 1);

		this.dataChange.emit();
	}

	hasExpandableRows() {
		return this.data.some(data => data.some(d => d.expandedData)); // checking for some in 2D array
	}

	isRowExpandable(index: number) {
		return this.data[index].some(d => d.expandedData);
	}

	isRowExpanded(index: number) {
		return this.rowsExpanded[index];
	}

	getRowContext(index: number) {
		return this.rowsContext[index];
	}

	/**
	 * Returns `index`th column of the table.
	 *
	 * Negative index starts from the end. -1 being the last element.
	 *
	 * @param index
	 */
	column(index: number): TableItem[] {
		let column = new Array<TableItem>();
		const ri = this.realColumnIndex(index);
		const rc = this.data.length;

		for (let i = 0; i < rc; i++) {
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
	 * @param [column]
	 * @param [index]
	 */
	addColumn(column?: TableItem[], index?: number) {
		// if table empty create table with row
		if (!this.data || this.data.length === 0 || this.data[0].length === 0) {
			let newData = new Array<Array<TableItem>>();
			if (column == null) {
				newData.push([new TableItem()]);
			} else {
				for (let i = 0; i < column.length; i++) {
					let item = column[i];
					newData.push([item]);
				}
			}
			this.data = newData;

			return;
		}

		let rc = this.data.length;  // row count
		let ci = this.realColumnIndex(index);

		// append missing rows
		for (let i = 0; column != null && i < column.length - rc; i++) {
			this.addRow();
		}
		rc = this.data.length;
		if (index == null) {
			// append to end
			for (let i = 0; i < rc; i++) {
				let row = this.data[i];
				row.push(column == null || column[i] == null ? new TableItem() : column[i]);
			}
			// update header if not already set by user
			if (this.header.length < this.data[0].length) {
				this.header.push(new TableHeaderItem());
			}
		} else {
			if (index >= this.data[0].length) {
				// if trying to append
				ci++;
			}
			// insert
			for (let i = 0; i < rc; i++) {
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
	 * @param index
	 */
	deleteColumn(index: number) {
		const rci = this.realColumnIndex(index);
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

	moveColumn(indexFrom: number, indexTo: number) {
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
	 * @param index The column based on which it's sorting
	 */
	sort(index: number) {
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
	 */
	pushRowStateToModelData() {
		for (let i = 0; i < this.data.length; i++) {
			const rowSelectedMark = new TableItem();
			rowSelectedMark.data = this.rowsSelected[i];
			this.data[i].push(rowSelectedMark);

			const rowExpandedMark = new TableItem();
			rowExpandedMark.data = this.rowsExpanded[i];
			this.data[i].push(rowExpandedMark);

			const rowContext = new TableItem();
			rowContext.data = this.rowsContext[i];
			this.data[i].push(rowContext);
		}
	}

	/**
	 * Restores `rowsSelected` from data pushed by `pushRowSelectionToModelData()`
	 *
	 * Call after sorting data (if you previously pushed to maintain selection order)
	 * to make everything right with the world again.
	 */
	popRowStateFromModelData() {
		for (let i = 0; i < this.data.length; i++) {
			this.rowsContext[i] = this.data[i].pop().data;
			this.rowsExpanded[i] = !!this.data[i].pop().data;
			this.rowsSelected[i] = !!this.data[i].pop().data;
		}
	}

	/**
	 * Checks if row is filtered out.
	 *
	 * @param index
	 * @returns true if any of the filters in header filters out the `index`th row
	 */
	isRowFiltered(index: number): boolean {
		const realIndex = this.realRowIndex(index);
		return this.header.some((item, i) => item.filter(this.row(realIndex)[i]));
	}

	/**
	 * Select/deselect `index`th row based on value
	 *
	 * @param index index of the row to select
	 * @param value state to set the row to. Defaults to `true`
	 */
	selectRow(index: number, value = true) {
		this.rowsSelected[index] = value;
		this.rowsSelectedChange.emit(index);
	}

	/**
	 * Selects or deselects all rows in the model
	 *
	 * @param value state to set all rows to. Defaults to `true`
	 */
	selectAll(value = true) {
		for (let i = 0; i < this.rowsSelected.length; i++) {
			this.rowsSelected[i] = value;
		}
	}

	isRowSelected(index: number) {
		return this.rowsSelected[index];
	}

	/**
	 * Expands/Collapses `index`th row based on value
	 *
	 * @param index index of the row to expand or collapse
	 * @param value expanded state of the row. `true` is expanded and `false` is collapsed
	 */
	expandRow(index: number, value = true) {
		this.rowsExpanded[index] = value;
		this.rowsExpandedChange.emit(index);
	}

	/**
	 * Gets the true index of a row based on it's relative position.
	 * Like in Python, positive numbers start from the top and
	 * negative numbers start from the bottom.
	 *
	 * @param index
	 */
	protected realRowIndex(index: number): number {
		return this.realIndex(index, this.data.length);
	}

	/**
	 * Gets the true index of a column based on it's relative position.
	 * Like in Python, positive numbers start from the top and
	 * negative numbers start from the bottom.
	 *
	 * @param index
	 */
	protected realColumnIndex(index: number): number {
		return this.realIndex(index, this.data[0].length);
	}

	/**
	 * Generic function to calculate the real index of something.
	 * Used by `realRowIndex()` and `realColumnIndex()`
	 *
	 * @param index
	 * @param length
	 */
	protected realIndex(index: number, length: number): number {
		if (index == null) {
			return length - 1;
		} else if (index >= 0) {
			return index >= length ? length - 1 : index;
		} else {
			return -index >= length ? 0 : length + index;
		}
	}
}
