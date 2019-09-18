export interface TableCellAdapter {
	cellIndex: number;
	colSpan: number;
}

export interface TableRowAdapter {
	rowIndex: number;
	cells: HTMLCollection | TableCellAdapter[];
}

export abstract class TableAdapter {
	public get lastColumn(): number { return; }

	public get lastRow(): number { return; }

	getCell(row: number, column: number): TableCellAdapter { return; }

	getRow(row: number): TableRowAdapter { return; }

	getColumnFromCell(cell: TableCellAdapter): number { return; }

	getRowFromCell(cell: TableCellAdapter): number { return; }

	getPositionFromCell(cell: TableCellAdapter): [number, number] { return; }
}

export class TableDomAdapter implements TableAdapter {
	public get lastColumn() {
		return this.tableElement.rows[0].cells.length - 1;
	}

	public get lastRow() {
		return this.tableElement.rows.length - 1;
	}

	constructor(public tableElement: HTMLTableElement) { }

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

	getRow(row: number): HTMLTableRowElement {
		return this.tableElement.rows[row];
	}

	getColumnFromCell(cell: HTMLTableCellElement): number {
		const row = this.getRow(this.getRowFromCell(cell));
		let cellIndex = 0;
		for (const c of Array.from(row.cells)) {
			if (c === cell) { break; }
			cellIndex += c.colSpan;
		}
		return cellIndex;
	}

	getRowFromCell(cell: HTMLTableCellElement): number {
		for (const row of Array.from(this.tableElement.rows)) {
			if (row.contains(cell)) {
				return row.rowIndex;
			}
		}
	}

	getPositionFromCell(cell: HTMLTableCellElement): [number, number] {
		return [this.getRowFromCell(cell), this.getColumnFromCell(cell)];
	}
}
