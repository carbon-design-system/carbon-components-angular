/**
 * An abstract class that represents a cell in a table
 */
export abstract class TableCellAdapter {
	cellIndex: number;
	colSpan: number;
}

/**
 * An abstract class that represents a row in a table
 */
export abstract class TableRowAdapter {
	rowIndex: number;
	cells: HTMLCollection | TableCellAdapter[];
}

/**
 * An abstract representation of a table that provides
 * a standard interface to query 2d tables for cell and row information.
 */
export abstract class TableAdapter {
	/**
	 * The last acccessible column in the table
	 */
	public get lastColumn(): number { return; }

	/**
	 * The last accessible row in the table
	 */
	public get lastRow(): number { return; }

	/**
	 * Returns a cell from the table
	 *
	 * @param row index of the row
	 * @param column index of the column
	 */
	getCell(row: number, column: number): TableCellAdapter { return; }

	/**
	 * Returns a row from the table
	 *
	 * @param row index of the row
	 */
	getRow(row: number): TableRowAdapter { return; }

	/**
	 * Finds the column index of a given cell
	 *
	 * @param cell the cell to search for
	 */
	findColumnIndex(cell: TableCellAdapter): number { return; }

	/**
	 * Finds the row index of a given cell
	 *
	 * @param cell the cell to search for
	 */
	findRowIndex(cell: TableCellAdapter): number { return; }

	/**
	 * Finds the row and column index of a given cell
	 *
	 * @param cell the cell to search for
	 * @returns a tuple that follows the `[row, column]` convention
	 */
	findIndex(cell: TableCellAdapter): [number, number] { return; }
}

/**
 * A concrete implementation of `TableAdapter`
 *
 * Provides standard and consistent access to table cells and rows
 */
export class TableDomAdapter implements TableAdapter {
	/**
	 * The last acccessible column in the table
	 */
	public get lastColumn() {
		return this.tableElement.rows[0].cells.length - 1;
	}

	/**
	 * The last accessible row in the table
	 */
	public get lastRow() {
		return this.tableElement.rows.length - 1;
	}

	/**
	 * `TableDomAdapter` works on a normal HTML table structure.
	 * Custom tables that don't follow the standard structure should use a custom implementation of `TableAdapter`.
	 *
	 * The standard structure allows us to directly query rows for cells and indexes - though we do have to handle colspans specially.
	 *
	 * @param tableElement the root HTML table element.
	 */
	constructor(public tableElement: HTMLTableElement) { }

	/**
	 * Returns a cell from the table taking colspans in to account.
	 *
	 * @param row index of the row
	 * @param column index of the column
	 */
	getCell(row: number, column: number): HTMLTableCellElement {
		const baseRow = this.getRow(row);
		let baseCells = Array.from(baseRow.cells);

		// rows can have fewer total cells than the actual table
		// the model pretends all rows behave the same (with colspans > 1 being N cells long)
		// this maps that view to the HTML view (colspans > 1 are one element, so the array is shorter)
		let realIndex = 0;
		// i is only used for iterating the "cells"
		for (let i = 0; i < column;) {
			// skip the next N "cells"
			i += baseCells[realIndex].colSpan;
			// don't bump realIndex if i now exceeds the column we're shooting for
			if (i > column) { break; }
			// finally, increment realIndex (to keep it generally in step with i)
			realIndex++;
		}
		return baseCells[realIndex];
	}

	/**
	 * Returns a row from the table
	 *
	 * @param row index of the row
	 */
	getRow(row: number): HTMLTableRowElement {
		return this.tableElement.rows[row];
	}

	/**
	 * Finds the column index of a given cell
	 *
	 * @param cell the cell to search for
	 */
	findColumnIndex(cell: HTMLTableCellElement): number {
		const row = this.getRow(this.findRowIndex(cell));
		let cellIndex = 0;
		for (const c of Array.from(row.cells)) {
			if (c === cell) { break; }
			cellIndex += c.colSpan;
		}
		return cellIndex;
	}

	/**
	 * Finds the row index of a given cell
	 *
	 * @param cell the cell to search for
	 */
	findRowIndex(cell: HTMLTableCellElement): number {
		for (const row of Array.from(this.tableElement.rows)) {
			if (row.contains(cell)) {
				return row.rowIndex;
			}
		}
	}

	/**
	 * Finds the row and column index of a given cell
	 *
	 * @param cell the cell to search for
	 * @returns a tuple that follows the `[row, column]` convention
	 */
	findIndex(cell: HTMLTableCellElement): [number, number] {
		return [this.findRowIndex(cell), this.findColumnIndex(cell)];
	}
}
