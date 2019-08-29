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
		switch (event.key) {
			case "Right": // IE specific value
			case "ArrowRight":
				event.preventDefault();
				const currentNextCell = this.tableAdapter.getCell(this.currentRow, this.currentColumn);
				if (currentNextCell.colSpan > 1) {
					this.goToColumn(currentNextCell.cellIndex + currentNextCell.colSpan + 1);
				} else {
					this.nextColumn();
				}
				break;
			case "Left": // IE specific value
			case "ArrowLeft":
				event.preventDefault();
				const currentPreviousCell = this.tableAdapter.getCell(this.currentRow, this.currentColumn);
				if (currentPreviousCell.colSpan > 1) {
					this.goToColumn(currentPreviousCell.cellIndex - 1);
				} else {
					this.previousColumn();
				}
				break;
			case "Down": // IE specific value
			case "ArrowDown":
				event.preventDefault();
				this.nextRow();
				break;
			case "Up": // IE specific value
			case "ArrowUp":
				event.preventDefault();
				this.previousRow();
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
		const cell = this.tableAdapter.getCellFromElement(event.target as HTMLElement);
		const row = this.tableAdapter.getRowFromCell(cell);
		this.goTo({ row: row.rowIndex, column: cell.cellIndex });
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

	nextColumn() {
		this.goToColumn(this.currentColumn + 1);
	}

	previousColumn() {
		this.goToColumn(this.currentColumn - 1);
	}

	nextRow() {
		this.goToRow(this.currentRow + 1);
	}

	previousRow() {
		this.goToRow(this.currentRow - 1);
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
