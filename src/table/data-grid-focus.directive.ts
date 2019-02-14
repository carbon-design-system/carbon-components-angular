import {
	Directive,
	Input,
	ElementRef,
	HostListener
} from "@angular/core";
import { Table } from "./table.component";
import { getFocusElementList, tabbableSelectorIgnoreTabIndex } from "../common/tab.service";

@Directive({
	selector: "[ibmDataGridFocus]"
})

export class DataGridFocus {
	@Input() ibmDataGridFocus: boolean;
	@Input() columnIndex: number;

	constructor(private elementRef: ElementRef) {}

	focus(focusElement) {
		const focusElementList = getFocusElementList(focusElement, tabbableSelectorIgnoreTabIndex);
		if (focusElement.firstElementChild && focusElement.firstElementChild.classList.contains("bx--table-sort-v2")) {
			focusElementList[1].focus();
		} else if (focusElementList.length > 0) {
			focusElementList[0].focus();
		}  else {
			focusElement.focus();
		}
	}

	@HostListener("keyup", ["$event"])
	keyUp(event: KeyboardEvent) {
		if (!this.ibmDataGridFocus) {
			return;
		}
		const rows = this.elementRef.nativeElement.closest("table").rows;
		let rowIndex = Array.from(rows).findIndex(item => item === this.elementRef.nativeElement.closest("tr"));

		switch (event.key) {
			case "Right": // IE specific value
			case "ArrowRight":
				if (this.elementRef.nativeElement.nextElementSibling) {
					const nextSibling = this.elementRef.nativeElement.nextElementSibling;
					Table.setTabIndex(this.elementRef.nativeElement, -1);
					Table.setTabIndex(nextSibling, 0);
					this.focus(nextSibling);
				}
				break;
			case "Left": // IE specific value
			case "ArrowLeft":
				if (this.elementRef.nativeElement.previousElementSibling) {
					const previousSibling = this.elementRef.nativeElement.previousElementSibling;
					Table.setTabIndex(this.elementRef.nativeElement, -1);
					Table.setTabIndex(previousSibling, 0);
					this.focus(previousSibling);
				}
				break;
			case "Down": // IE specific value
			case "ArrowDown":
				if (rowIndex < rows.length - 1) {
					rowIndex++;
					const row = rows[rowIndex].querySelectorAll("td");
					Table.setTabIndex(this.elementRef.nativeElement, -1);
					if (rows[rowIndex].className === "bx--expandable-row-v2") {
						Table.setTabIndex(row[0], 0);
						this.focus(row[0]);
					} else {
						Table.setTabIndex(row[this.columnIndex], 0);
						this.focus(row[this.columnIndex]);
					}
				}
				break;
			case "Up": // IE specific value
			case "ArrowUp":
				const headerRow = rows[0].querySelectorAll("th");
				Table.setTabIndex(this.elementRef.nativeElement, -1);
				if (rowIndex === 1 && Array.from(headerRow).some(th => getFocusElementList(th, tabbableSelectorIgnoreTabIndex).length > 0)) {
					Table.setTabIndex(headerRow[this.columnIndex], 0);
					this.focus(headerRow[this.columnIndex]);
				} else if (rowIndex > 1) {
					rowIndex--;
					const row = rows[rowIndex].querySelectorAll("td");
					if (rows[rowIndex].className === "bx--expandable-row-v2") {
						Table.setTabIndex(row[0], 0);
						this.focus(row[0]);
					} else {
						Table.setTabIndex(row[this.columnIndex], 0);
						this.focus(row[this.columnIndex]);
					}
				}
				break;
			case "Home":
				Table.setTabIndex(this.elementRef.nativeElement, -1);
				if (event.ctrlKey) {
					const headerRow = rows[0].querySelectorAll("th");
					if (Array.from(headerRow).some(th => getFocusElementList(th, tabbableSelectorIgnoreTabIndex).length > 0)) {
						Table.setTabIndex(headerRow[0], 0);
						this.focus(headerRow[0]);
					} else {
						const firstBodyCell = rows[1].querySelectorAll("td")[0];
						Table.setTabIndex(firstBodyCell, 0);
						this.focus(firstBodyCell);
					}
				} else if (this.elementRef.nativeElement.parentElement.className !== "bx--expandable-row-v2") {
					const firstRowCell = rows[rowIndex].querySelectorAll("th, td")[0];
					Table.setTabIndex(firstRowCell, 0);
					this.focus(firstRowCell);
				}
				break;
			case "End":
				const lastRow = rows[rows.length - 1].querySelectorAll("td");
				Table.setTabIndex(this.elementRef.nativeElement, -1);
				if (event.ctrlKey) {
					this.columnIndex = lastRow.length - 1;
					Table.setTabIndex(lastRow[this.columnIndex], 0);
					this.focus(lastRow[this.columnIndex]);
				} else if (this.elementRef.nativeElement.parentElement.className !== "bx--expandable-row-v2") {
					this.columnIndex = lastRow.length - 1;
					const lastRowCell = rows[rowIndex].querySelectorAll("th, td")[this.columnIndex];
					Table.setTabIndex(lastRowCell, 0);
					this.focus(lastRowCell);
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
		focusElementList.forEach(element => Table.setTabIndex(element, -1));
		Table.setTabIndex(this.elementRef.nativeElement, 0);
		this.focus(this.elementRef.nativeElement);
	}
}
