import { TableHeaderItem } from "./table-header-item.class";
import { TableItem } from "./table-item.class";
import {
	EventEmitter
} from "@angular/core";

export class TableModel {
	/**
	 * Sets data of the table.
	 *
	 * Make sure all rows are the same length to keep the column count accurate.
	 *
	 * @memberof TableModel
	 */
	set data(newData: Array<Array<TableItem>>) {
		this._data = newData;

		// init rowsSelected
		this.rowsSelected = new Array<boolean>(this._data.length);

		// only create a fresh header if necessary (header doesn't exist or differs in length)
		if (this.header == null || this.header.length !== this._data[0].length) {
			let header = new Array<TableHeaderItem>();
			for (let i = 0; i < this._data[0].length; i++) {
				header.push(new TableHeaderItem());
			}
			this.header = header;
		}
	}

	/**
	 * Gets the full data.
	 *
	 * You can use it to alter individual `TableItem`s but if you need to change
	 * table structure, use `addRow()` and/or `addColumn()`
	 *
	 * @readonly
	 * @memberof TableModel
	 */
	get data() {
		return this._data;
	}

	/**
	 * Contains information about selection state of rows in the table.
	 *
	 * @type {Array<boolean>}
	 * @memberof TableModel
	 */
	rowsSelected: Array<boolean>;

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
	 * Absolute total number of rows of the table.
	 *
	 * @private
	 * @type {number}
	 * @memberof TableModel
	 */
	private _totalDataLength: number;
	set totalDataLength(length: number) {
		this._totalDataLength = length;
	}
	get totalDataLength() {
		return (this._totalDataLength && this._totalDataLength >= 0) ? this._totalDataLength : this.data.length;
	}

	/**
	 * Used in `data`
	 *
	 * @private
	 * @type {Array<Array<TableItem>>}
	 * @memberof TableModel
	 */
	private _data: Array<Array<TableItem>>;

	/**
	 * Returns how many rows is currently selected
	 *
	 * @returns {number}
	 * @memberof TableModel
	 */
	selectedRowsCount(): number {
		let retVal = 0;
		if (this.rowsSelected) {
			this.rowsSelected.forEach((rowSelected => {
				if (rowSelected) {
					retVal++;
				}
			}));
		}
		return retVal;
	}

	/**
	 * Returns `index`th row of the table.
	 *
	 * Negative index starts from the end. -1 being the last element.
	 *
	 * @param {number} index
	 * @returns {Array<TableItem>}
	 * @memberof TableModel
	 */
	row(index: number): Array<TableItem> {
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
	 * @param {Array<TableItem>} row
	 * @param {number} [index]
	 * @memberof TableModel
	 */
	addRow(row?: Array<TableItem>, index?: number) {
		// if table empty create table with row
		if (this.data == null || this.data.length === 0) {
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
		} else {
			const ri = this.realRowIndex(index);
			this.data.splice(ri, 0, realRow);

			// update rowsSelected property for length
			this.rowsSelected.splice(ri, 0, false);
		}
	}

	/**
	 * Deletes `index`th row.
	 *
	 * Negative index starts from the end. -1 being the last element.
	 *
	 * @param {number} index
	 * @memberof TableModel
	 */
	deleteRow(index: number) {
		const rri = this.realRowIndex(index);
		this.data.splice(rri, 1);
		this.rowsSelected.splice(rri, 1);
	}

	/**
	 * Returns `index`th column of the table.
	 *
	 * Negative index starts from the end. -1 being the last element.
	 *
	 * @param {number} index
	 * @returns {Array<TableItem>}
	 * @memberof TableModel
	 */
	column(index: number): Array<TableItem> {
		let retVal = new Array<TableItem>();
		const ri = this.realColumnIndex(index);
		const rc = this.data.length;

		for (let i = 0; i < rc; i++) {
			const row = this.data[i];
			retVal.push(row[ri]);
		}

		return retVal;
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
	 * @param {Array<TableItem>} column
	 * @param {number} [index]
	 * @memberof TableModel
	 */
	addColumn(column?: Array<TableItem>, index?: number) {
		// if table empty create table with row
		if (this.data == null || this.data.length === 0) {
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
		const ci = this.realColumnIndex(index);

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
	}

	/**
	 * Deletes `index`th column.
	 *
	 * Negative index starts from the end. -1 being the last element.
	 *
	 * @param {number} index
	 * @memberof TableModel
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
	}

	/**
	 * Sorts the data currently present in the model based on `compare()`
	 *
	 * Direction is set by `ascending` and `descending` properties of `TableHeaderItem`
	 * in `index`th column.
	 *
	 * @param {number} index The column based on which it's sorting
	 * @memberof TableModel
	 */
	sort(index: number) {
		this.pushRowSelectionToModelData();
		this.data.sort((a, b) => (this.header[index].descending ? -1 : 1) * this.header[index].compare(a[index], b[index]));
		this.popRowSelectionFromModelData();
		this.header[index].sorted = true;
	}

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
	pushRowSelectionToModelData() {
		for (let i = 0; i < this.data.length; i++) {
			const rowSelectedMark = new TableItem();
			rowSelectedMark.data = this.rowsSelected[i];
			this.data[i].push(rowSelectedMark);
		}
	}

	/**
	 * Restores `rowsSelected` from data pushed by `pushRowSelectionToModelData()`
	 *
	 * Call after sorting data (if you previously pushed to maintain selection order)
	 * to make everything right with the world again.
	 *
	 * @memberof TableModel
	 */
	popRowSelectionFromModelData() {
		for (let i = 0; i < this.data.length; i++) {
			this.rowsSelected[i] = !!this.data[i].pop().data;
		}
	}

	/**
	 * Checks if row is filtered out.
	 *
	 * @param {number} index
	 * @returns {boolean} true if any of the filters in header filters out the `index`th row
	 * @memberof TableModel
	 */
	isRowFiltered(index: number) {
		const ind = this.realRowIndex(index);
		return this.header.some((item, i) => item.filter(this.row(ind)[i]));
	}

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
	private realRowIndex(index: number): number {
		return this.realIndex(index, this.data.length);
	}

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
	private realColumnIndex(index: number): number {
		return this.realIndex(index, this.data[0].length);
	}

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
	private realIndex(index: number, length: number): number {
		if (index == null) {
			return length - 1;
		} else if (index >= 0) {
			return index >= length ? length - 1 : index;
		} else {
			return -index >= length ? 0 : length + index;
		}
	}
}
