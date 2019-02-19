import {
	Directive,
	Input,
	ElementRef,
	HostListener,
	Output,
	EventEmitter
} from "@angular/core";
import { Table } from "./table.component";
import { getFocusElementList, tabbableSelectorIgnoreTabIndex } from "../common/tab.service";
import { setTabIndex } from "../utils/a11y";

@Directive({
	selector: "[ibmDataGridFocus]"
})
export class DataGridFocus {
	@Input() ibmDataGridFocus: boolean;
	@Input() set columnIndex(value: number) {
		const shouldEmit = value !== this._columnIndex;
		this._columnIndex = value;
		if (shouldEmit) {
			this.columnIndexChange.emit(value);
		}
	}
	get columnIndex(): number {
		return this._columnIndex;
	}
	@Output() columnIndexChange: EventEmitter<number> = new EventEmitter();

	protected _columnIndex: number;

	constructor(protected elementRef: ElementRef) {}

	focus(element) {
		const focusElementList = getFocusElementList(element, tabbableSelectorIgnoreTabIndex);
		if (element.firstElementChild && element.firstElementChild.classList.contains("bx--table-sort-v2")) {
			focusElementList[1].focus();
		} else if (focusElementList.length > 0) {
			focusElementList[0].focus();
		}  else {
			element.focus();
		}
	}

	@HostListener("keyup", ["$event"])
	keyUp(event: KeyboardEvent) {
		if (!this.ibmDataGridFocus) {
			return;
		}
		const element = this.elementRef.nativeElement;
		const rows = element.closest("table").rows;
		const closestTr = element.closest("tr");
		let rowIndex = Array.from(rows).indexOf(closestTr);

		const headerRow = rows[0].querySelectorAll("th");

		switch (event.key) {
			case "Right": // IE specific value
			case "ArrowRight":
				if (element.nextElementSibling && Array.from(headerRow).indexOf(element.nextElementSibling) < headerRow.length - 1) {
					this.columnIndex++;
					const nextSibling = element.nextElementSibling;
					setTabIndex(element, -1);
					setTabIndex(nextSibling, 0);
					this.focus(nextSibling);
				}
				break;
			case "Left": // IE specific value
			case "ArrowLeft":
				if (element.previousElementSibling) {
					this.columnIndex--;
					const previousSibling = element.previousElementSibling;
					setTabIndex(element, -1);
					setTabIndex(previousSibling, 0);
					this.focus(previousSibling);
				}
				break;
			case "Down": // IE specific value
			case "ArrowDown":
				if (rowIndex < rows.length - 1) {
					rowIndex++;
					const row = rows[rowIndex].querySelectorAll("td");
					setTabIndex(element, -1);
					if (rows[rowIndex].classList.item(0) === "bx--expandable-row-v2") {
						setTabIndex(row[0], 0);
						this.focus(row[0]);
					} else {
						setTabIndex(row[this.columnIndex], 0);
						this.focus(row[this.columnIndex]);
					}
				}
				break;
			case "Up": // IE specific value
			case "ArrowUp":
				if ((rowIndex !== 1 && Array.from(headerRow).some(th => getFocusElementList(th, tabbableSelectorIgnoreTabIndex).length < 0)) ||
					rowIndex === 0) {
						return;
				}
				setTabIndex(element, -1);
				rowIndex--;
				const row = rows[rowIndex].querySelectorAll("td, th");
				if (rows[rowIndex].classList.item(0) === "bx--expandable-row-v2") {
					setTabIndex(row[0], 0);
					this.focus(row[0]);
				} else {
					setTabIndex(row[this.columnIndex], 0);
					this.focus(row[this.columnIndex]);
				}
				break;
			case "Home":
				this.columnIndex = 0;
				setTabIndex(element, -1);
				if (event.ctrlKey) {
					if (Array.from(headerRow).some(th => getFocusElementList(th, tabbableSelectorIgnoreTabIndex).length > 0)) {
						setTabIndex(headerRow[0], 0);
						this.focus(headerRow[0]);
					} else {
						const firstBodyCell = rows[1].querySelectorAll("td")[0];
						setTabIndex(firstBodyCell, 0);
						this.focus(firstBodyCell);
					}
				} else {
					const firstRowCell = rows[rowIndex].querySelectorAll("th, td")[0];
					setTabIndex(firstRowCell, 0);
					this.focus(firstRowCell);
				}
				break;
			case "End":
				const lastRow = rows[rows.length - 1].querySelectorAll("td");
				setTabIndex(element, -1);
				if (event.ctrlKey) {
					this.columnIndex = lastRow.length - 1;
					setTabIndex(lastRow[this.columnIndex], 0);
					this.focus(lastRow[this.columnIndex]);
				} else {
					const currentRow = rows[rowIndex].querySelectorAll("th, td");
					this.columnIndex = currentRow.length - 1;
					setTabIndex(currentRow[this.columnIndex], 0);
					this.focus(currentRow[this.columnIndex]);
				}
				break;
		}
	}

	@HostListener("click", ["$event"])
	onClick() {
		if (!this.ibmDataGridFocus) {
			return;
		}
		const focusElementList = getFocusElementList(this.elementRef.nativeElement.closest("table"), tabbableSelectorIgnoreTabIndex);
		focusElementList.forEach(element => setTabIndex(element, -1));
		setTabIndex(this.elementRef.nativeElement, 0);
		this.focus(this.elementRef.nativeElement);
	}
}
