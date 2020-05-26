/**
 * An abstract class that represents a cell in a table
 */
export abstract class TableCellAdapter {
	/**
	 * The index of the cell in the table
	 */
	cellIndex: number;
	/**
	 * The number of columns spanned by this cell
	 */
	colSpan: number;
	/**
	 * The number of rows spanned by this cell
	 */
	rowSpan: number;
}

/**
 * An abstract class that represents a row in a table
 */
export abstract class TableRowAdapter {
	/**
	 * The index of the row in the table
	 */
	rowIndex: number;
	/**
	 * An array (or `HTMLCollection`) of `TableCellAdapter`s
	 */
	cells: HTMLCollection | TableCellAdapter[];
}

/**
 * An abstract representation of a table that provides
 * a standard interface to query 2d tables for cell and row information.
 */
export abstract class TableAdapter {
	/**
	 * The last accessible column in the table
	 */
	public get lastColumnIndex(): number { return; }

	/**
	 * The last accessible row in the table
	 */
	public get lastRowIndex(): number { return; }

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
	 * @param column index of the column
	 */
	getColumn(column: number): TableCellAdapter[] { return; }

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

enum TableDomSpanDirection {
	colSpan = "colSpan",
	rowSpan = "rowSpan"
}

/**
 * A concrete implementation of `TableAdapter`
 *
 * Provides standard and consistent access to table cells and rows
 */
export class TableDomAdapter implements TableAdapter {
	/**
	 * The last accessible column in the table
	 */
	public get lastColumnIndex() {
		return this.getRealRowLength(this.tableElement.rows[0]);
	}

	/**
	 * The last accessible row in the table
	 */
	public get lastRowIndex() {
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
		const col = this.getColumn(column);

		return this.findCellInColumn(col, row).cell;
	}

	/**
	 * Returns a column from the table, using the `id` and `headers` attributes
	 *
	 * See here for more detail these attributes: https://www.w3.org/TR/WCAG20-TECHS/H43.html
	 *
	 * @param column the index of the column
	 */
	getColumn(column: number): HTMLTableCellElement[] {
		const firstHeader = Array.from(this.tableElement.rows[0].cells);

		const { cell: header, realIndex: realColumnIndex } = this.findCellInRow(firstHeader, column);

		const linkedCells: HTMLTableCellElement[] = [];

		for (let i = 1; i < this.tableElement.rows.length; i++) {
			const row = this.tableElement.rows[i];
			// query for any cells that are linked to the given header id
			// `~=` matches values in space separated lists - so `[headers~='foo']` would match `headers="foo bar"` and `headers="foo"`
			// but not `headers="bar"` or `headers="bar baz"`
			const linkedRowCells: NodeListOf<HTMLTableCellElement> = row.querySelectorAll(`[headers~='${header.id}']`);
			// if we have more than one cell, get the one that is closest to the column
			if (linkedRowCells.length > 1) {
				const { cell } = this.findCellInRow(Array.from(linkedRowCells), column - realColumnIndex);
				linkedCells.push(cell);
			} else if (linkedRowCells[0]) {
				linkedCells.push(linkedRowCells[0]);
			}
		}

		// return an empty array if we can't find any linked cells
		// returning anything else would be a lie
		if (!linkedCells) {
			return [];
		}

		return [header, ...linkedCells];
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
		if (!row) {
			return;
		}
		// if the cell has linked headers we can do a more accurate lookup
		if (cell && cell.headers) {
			const ids = cell.headers.split(" ");
			const headerRows = Array.from(this.tableElement.tHead.rows);
			const indexes = [];

			// start from the last row and work up
			for (const headerRow of headerRows.reverse()) {
				const headerCells = Array.from(headerRow.cells);
				const header = headerCells.find(headerCell => ids.includes(headerCell.id));
				// if we have a matching header, find it's index (adjusting for colspans)
				if (header) {
					// this is borrowed from below
					let cellIndex = 0;
					for (const c of headerCells) {
						if (c === header) { break; }
						cellIndex += c.colSpan;
					}
					indexes.push(cellIndex);
				}
			}

			// sort the indexes largest to smallest to find the closest matching header index
			const firstIndex = indexes.sort((a, b) => b - a)[0];

			// search the row for cells that share the header
			let similarCells = [];
			for (const id of ids) {
				// there's no selector that will match two space separated lists,
				// so we have to iterate through the ids and query the row for each
				const rowCells = Array.from(row.querySelectorAll(`[headers~='${id}']`));
				for (const rowCell of rowCells) {
					// only keep one set of cells
					if (!similarCells.includes(rowCell)) {
						similarCells.push(rowCell);
					}
				}
			}

			// DOM order is not preserved, so we have to sort the row
			similarCells = similarCells.sort((a: HTMLTableCellElement, b: HTMLTableCellElement) => a.cellIndex - b.cellIndex);

			// return the header index plus any adjustment within that headers column
			return firstIndex + similarCells.indexOf(cell);
		}

		// fallback if the cell isn't linked to any headers
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

	/**
	 * Helper function that returns the "real" length of a row.
	 * Only accurate with regard to colspans (though that's sufficient for it's uses here)
	 *
	 * TODO: Take rowSpan into account
	 *
	 * @param row the row to get the length of
	 */
	protected getRealRowLength(row: HTMLTableRowElement): number {
		// start at -1 since the colspans will sum to 1 index greater than the total
		return Array.from(row.cells).reduce((count, cell) => count + cell.colSpan, -1);
	}

	/**
	 * Finds a cell and it's real index given an array of cells, a target index, and the spanning direction
	 *
	 * @param cells An array of cells to search
	 * @param targetIndex The index we think the cell is located at
	 * @param spanDirection The direction of the cell spans. Should be `"colSpan"` for a row and `"rowSpan"` for a column
	 */
	protected findCell(cells: HTMLTableCellElement[], targetIndex: number, spanDirection: TableDomSpanDirection) {
		// rows/cols can have fewer total cells than the actual table
		// the model pretends all rows/cols behave the same (with col/row spans > 1 being N cells long)
		// this maps that view to the HTML view (col/row spans > 1 are one element, so the array is shorter)
		let realIndex = 0;
		// i is only used for iterating the cells
		for (let i = 0; i < targetIndex;) {
			// skip the next N cells
			i += cells[realIndex][spanDirection];
			// don't bump realIndex if i now exceeds the cell we're shooting for
			if (i > targetIndex) { break; }
			// finally, increment realIndex (to keep it generally in step with i)
			realIndex++;
		}

		return {
			cell: cells[realIndex],
			realIndex
		};
	}

	/**
	 * Helper method around `findCell`, searches based on a row of cells
	 *
	 * @param row the row of elements to search
	 * @param index the index of the element
	 */
	protected findCellInRow(row: HTMLTableCellElement[], index: number) {
		return this.findCell(row, index, TableDomSpanDirection.colSpan);
	}

	/**
	 * Helper method around `findCell`, searches based on a column of cells
	 *
	 * @param col the column of elements to search
	 * @param index the index of the element
	 */
	protected findCellInColumn(col: HTMLTableCellElement[], index: number) {
		return this.findCell(col, index, TableDomSpanDirection.rowSpan);
	}
}
