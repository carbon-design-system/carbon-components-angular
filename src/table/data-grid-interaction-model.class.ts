import {
	BehaviorSubject,
	Observable,
	combineLatest
} from "rxjs";
import { map } from "rxjs/operators";
import { TableAdapter } from "./table-adapter.class";
import { tabbableSelectorIgnoreTabIndex, getFocusElementList } from "./../common/tab.service";

export interface DataGridPosition {
	current: [number, number];
	previous: [number, number];
}

export class DataGridInteractionModel {
	readonly position: Observable<DataGridPosition>;
	readonly rowIndex: Observable<{ current: number, previous: number }>;
	readonly columnIndex: Observable<{ current: number, previous: number }>;

	protected rowSubject = new BehaviorSubject({ current: 0, previous: -1 });
	protected columnSubject = new BehaviorSubject({ current: 0, previous: -1 });

	protected get currentRow() {
		return this.rowSubject.getValue().current;
	}

	protected get currentColumn() {
		return this.columnSubject.getValue().current;
	}

	protected get lastColumn() {
		return this.tableAdapter.lastColumn;
	}

	protected get lastRow() {
		return this.tableAdapter.lastRow;
	}

	constructor(
		protected keyboardEventStream: Observable<KeyboardEvent>,
		protected clickEventStream: Observable<MouseEvent>,
		protected tableAdapter: TableAdapter) {
		this.rowIndex = this.rowSubject.asObservable();
		this.columnIndex = this.columnSubject.asObservable();
		this.position = combineLatest(this.rowIndex, this.columnIndex).pipe(map(positions => {
			const [row, column] = positions;
			return {
				current: [row.current, column.current],
				previous: [row.previous, column.previous]
			};
		})) as Observable<DataGridPosition>;
		this.keyboardEventStream.subscribe(this.handleKeyboardEvent.bind(this));
		this.clickEventStream.subscribe(this.handleClickEvent.bind(this));
	}

	handleKeyboardEvent(event: KeyboardEvent) {
		const currentCell = this.tableAdapter.getCell(this.currentRow, this.currentColumn);
		switch (event.key) {
			case "Right": // IE specific value
			case "ArrowRight":
				event.preventDefault();
				// add the colspan since getColumnFromCell will return the
				// first column containing the cell (of N columns it may span)
				// and we want to navigate to the next "real" column
				this.goToColumn(this.tableAdapter.getColumnFromCell(currentCell) + currentCell.colSpan);
				break;
			case "Left": // IE specific value
			case "ArrowLeft":
				event.preventDefault();
				// we only ever need to subtract 1 from the column, since getColumnFromCell returns the
				// first of N columns containing the cell
				this.goToColumn(this.tableAdapter.getColumnFromCell(currentCell) - 1);
				break;
			case "Down": // IE specific value
			case "ArrowDown":
				event.preventDefault();
				this.goToRow(this.currentRow + 1);
				break;
			case "Up": // IE specific value
			case "ArrowUp":
				event.preventDefault();
				this.goToRow(this.currentRow - 1);
				break;
			case "Home":
				event.preventDefault();
				if (event.ctrlKey) {
					this.goTo({row: 0, column: 0});
				} else {
					this.goToColumn(0);
				}
				break;
			case "End":
				event.preventDefault();
				if (event.ctrlKey) {
					this.goTo({ row: this.lastRow, column: this.lastColumn });
				} else {
					this.goToColumn(this.lastColumn);
				}
				break;
		}
	}

	handleClickEvent(event: MouseEvent) {
		const cell = (event.target as HTMLElement).closest("td, th") as HTMLTableCellElement;
		const [rowIndex, cellIndex] = this.tableAdapter.getPositionFromCell(cell);
		this.goTo({ row: rowIndex, column: cellIndex });
	}

	goToColumn(index: number) {
		if (index > this.lastColumn || index < 0) { return; }
		this.goTo({ row: this.currentRow, column: index});
	}

	goToRow(index: number) {
		if (index > this.lastRow || index < 0) { return; }
		this.goTo({row: index, column: this.currentColumn});
	}

	goTo({row, column}) {
		this.rowSubject.next({ current: row, previous: this.currentRow });
		this.columnSubject.next({ current: column, previous: this.currentColumn });
	}

	resetTabIndexes() {
		for (let i = 0; i < this.tableAdapter.lastRow; i++) {
			const row = this.tableAdapter.getRow(i) as HTMLTableRowElement;
			for (const cell of Array.from(row.cells)) {
				const tabbableElements = getFocusElementList(cell, tabbableSelectorIgnoreTabIndex);
				tabbableElements.forEach((node: HTMLElement) => node.tabIndex = -1);
				cell.tabIndex = -1;
			}
		}

		this.rowSubject.next({ current: 0, previous: -1 });
		this.columnSubject.next({ current: 0, previous: -1 });
	}
}
