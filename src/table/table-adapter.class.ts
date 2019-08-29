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

	getCellFromElement(element: HTMLElement): TableCellAdapter { return; }

	getRow(row: number): TableRowAdapter { return; }

	getRowFromCell(cell: TableCellAdapter): TableRowAdapter { return; }
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

		let i = 0;
		let cell: HTMLTableCellElement;
		while (i <= column) {
			cell = baseCells[i];
			i += cell.colSpan;
		}
		return cell;
	}

	getCellFromElement(element: HTMLElement): HTMLTableCellElement {
		return element.closest("td, th") as HTMLTableCellElement;
	}

	getRow(row: number): HTMLTableRowElement {
		return this.tableElement.rows[row];
	}

	getRowFromCell(cell: HTMLTableCellElement): HTMLTableRowElement {
		for (const row of Array.from(this.tableElement.rows)) {
			if (row.contains(cell)) {
				return row;
			}
		}
	}
}
