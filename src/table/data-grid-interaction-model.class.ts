import {
	BehaviorSubject,
	Observable,
	combineLatest
} from "rxjs";
import { map } from "rxjs/operators";
import { TableAdapter } from "./table-adapter.class";
import { tabbableSelectorIgnoreTabIndex, getFocusElementList } from "carbon-components-angular/common";

/**
 * The current and previous position in the grid.
 *
 * `current` and `previous` are tuples that follow the `[row, column]` convention.
 */
export interface DataGridPosition {
	current: [number, number];
	previous: [number, number];
}

/**
 * `DataGridInteractionModel` provides centralized control over arbitrary 2d grids, following the w3 specs.
 *
 * Refs:
 *  - https://www.w3.org/TR/wai-aria-practices/examples/grid/dataGrids.html
 *  - https://www.w3.org/TR/wai-aria-practices/#grid
 *
 * Example usage (taken from `table.component`):
```typescript
// a standard HTML table
const table = this.elementRef.nativeElement.querySelector("table") as HTMLTableElement;

// `TableDomAdapter` implements `TableAdapter` and provides a consistent interface to query rows and columns in a table
const tableAdapter = new TableDomAdapter(table);

// the keydown events that we'll use for keyboard navigation of the table
const keydownEventStream = fromEvent<KeyboardEvent>(table, "keydown");

// the click events we'll use to ensure focus is updated correctly on click
const clickEventStream = fromEvent<MouseEvent>(table, "click");

// the `DataGridInteractionModel` instance!
this.interactionModel = new DataGridInteractionModel(keydownEventStream, clickEventStream, tableAdapter);

// subscribe to the combined position updates
this.interactionModel.position.subscribe(event => {
	const [currentRow, currentColumn] = event.current;
	const [previousRow, previousColumn] = event.previous;

	// query the TableAdapter for the cell at the current row and column ...
	const currentElement = tableAdapter.getCell(currentRow, currentColumn);
	// ... and make it focusable it
	Table.setTabIndex(currentElement, 0);

	// if the model has just initialized don't focus or reset anything
	if (previousRow === -1 || previousColumn === -1) { return; }

	// query the TableAdapter for the cell at the previous row and column ...
	const previousElement = tableAdapter.getCell(previousRow, previousColumn);
	// ... and make it unfocusable (now there is only a single focusable cell)
	Table.setTabIndex(previousElement, -1);

	// finally, focus the current cell (skipped during initilzation)
	Table.focus(currentElement);
});
```
 */
export class DataGridInteractionModel {
	/**
	 * An Observable that provides an aggregated view of the `rowIndex` and `columnIndex` Observables
	 */
	readonly position: Observable<DataGridPosition>;
	/**
	 * An Observable that provides the current and previous row indexes.
	 */
	readonly rowIndex: Observable<{ current: number, previous: number }>;
	/**
	 * An Observable that provides the current and previous column indexes.
	 */
	readonly columnIndex: Observable<{ current: number, previous: number }>;

	/**
	 * Internal subject to handle changes in row
	 */
	protected rowSubject = new BehaviorSubject({ current: 0, previous: -1 });
	/**
	 * Internal subject to handle changes in column
	 */
	protected columnSubject = new BehaviorSubject({ current: 0, previous: -1 });

	/**
	 * The latest value emitted by the rowSubject
	 */
	protected get currentRow() {
		return this.rowSubject.getValue().current;
	}

	/**
	 * The latest value emitted by the columnSubject
	 */
	protected get currentColumn() {
		return this.columnSubject.getValue().current;
	}

	/**
	 * The last column as reported by the adapter
	 */
	protected get lastColumn() {
		return this.tableAdapter.lastColumnIndex;
	}

	/**
	 * The last row as reported by the adapter
	 */
	protected get lastRow() {
		return this.tableAdapter.lastRowIndex;
	}

	/**
	 * `DataGridInteractionModel` requires knowledge of events, and a representation of your table/grid to be useful.
	 *
	 * @param keyboardEventStream an Observable of KeyboardEvents. Should be scoped to the table container.
	 * @param clickEventStream an Observable of ClickEvents. should only include clicks that take action on items known by the TableAdapter
	 * @param tableAdapter an instance of a concrete class that implements TableAdapter. The standard carbon table uses TableDomAdapter
	 */
	constructor(
		protected keyboardEventStream: Observable<KeyboardEvent>,
		protected clickEventStream: Observable<MouseEvent>,
		protected tableAdapter: TableAdapter
	) {
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

	/**
	 * Handles moving the position according to the w3 datagrid navigation specs
	 *
	 * Refs:
	 *  - https://www.w3.org/TR/wai-aria-practices/examples/grid/dataGrids.html
	 *  - https://www.w3.org/TR/wai-aria-practices/#grid
	 *
	 * @param event the KeyboardEvent to handle
	 */
	handleKeyboardEvent(event: KeyboardEvent) {
		const currentCell = this.tableAdapter.getCell(this.currentRow, this.currentColumn);
		let currentColumn = this.tableAdapter.findColumnIndex(currentCell);
		let currentRow = this.tableAdapter.findRowIndex(currentCell);

		switch (event.key) {
			case "ArrowRight":
				event.preventDefault();
				// add the colspan since findColumnIndex will return the
				// first column containing the cell (of N columns it may span)
				// and we want to navigate to the next "real" column
				this.goToColumn(currentColumn + currentCell.colSpan);
				break;
			case "ArrowLeft":
				event.preventDefault();
				// we only ever need to subtract 1 from the column, since findColumnIndex returns the
				// first of N columns containing the cell
				this.goToColumn(currentColumn - 1);
				break;
			case "ArrowDown":
				event.preventDefault();
				this.goToRow(currentRow + currentCell.rowSpan);
				break;
			case "ArrowUp":
				event.preventDefault();
				this.goToRow(currentRow - 1);
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

	/**
	 * Handles moving the position to the clicked cell
	 *
	 * @param event the MouseEvent to handle
	 */
	handleClickEvent(event: MouseEvent) {
		const cell = (event.target as HTMLElement).closest("td, th") as HTMLTableCellElement;
		const [rowIndex, cellIndex] = this.tableAdapter.findIndex(cell);
		this.goTo({ row: rowIndex, column: cellIndex });
	}

	/**
	 * Jump to a specific column without changing the row
	 *
	 * @param index column to jump to
	 */
	goToColumn(index: number) {
		if (index > this.lastColumn || index < 0) { return; }
		this.goTo({ row: this.currentRow, column: index});
	}

	/**
	 * Jump to a specific row without changing the column
	 *
	 * @param index row to jump to
	 */
	goToRow(index: number) {
		if (index > this.lastRow || index < 0) { return; }
		this.goTo({row: index, column: this.currentColumn});
	}

	/**
	 * Jump to the specified row and column
	 *
	 * @param param0 an object that contains `row` and `column` properties
	 */
	goTo({row, column}) {
		this.rowSubject.next({ current: row, previous: this.currentRow });
		this.columnSubject.next({ current: column, previous: this.currentColumn });
	}

	/**
	 * Convenience method to reset the tab indexes on a standard carbon table.
	 * For custom tables you may want to reset the indexes manually and simply call `.reset()`
	 */
	resetTabIndexes(newTabIndex = -1) {
		for (let i = 0; i < this.tableAdapter.lastRowIndex; i++) {
			const row = this.tableAdapter.getRow(i) as HTMLTableRowElement;
			for (const cell of Array.from(row.cells)) {
				const tabbableElements = getFocusElementList(cell, tabbableSelectorIgnoreTabIndex);
				tabbableElements.forEach((node: HTMLElement) => node.tabIndex = newTabIndex);
				cell.tabIndex = newTabIndex;
			}
		}

		this.reset();
	}

	/**
	 * Resets the models focus position
	 */
	reset() {
		this.rowSubject.next({ current: 0, previous: -1 });
		this.columnSubject.next({ current: 0, previous: -1 });
	}
}
