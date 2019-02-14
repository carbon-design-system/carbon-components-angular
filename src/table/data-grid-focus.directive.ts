import {
	Directive,
	Input,
	ElementRef,
	HostListener
} from "@angular/core";
import { Table } from "./table.component";
import { getFocusElementList, tabbableSelectorIgnoreTabIndex } from "../common/tab.service";
import { setTabIndex } from "../utils/a11y";

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
		const element = this.elementRef.nativeElement;
		const rows = element.closest("table").rows;
		let rowIndex = Array.from(rows).findIndex(item => item === element.closest("tr"));

		switch (event.key) {
			case "Right": // IE specific value
			case "ArrowRight":
				if (element.nextElementSibling && element.nextElementSibling.style.width !== "0px") {
					const nextSibling = element.nextElementSibling;
					setTabIndex(element, -1);
					setTabIndex(nextSibling, 0);
					this.focus(nextSibling);
				}
				break;
			case "Left": // IE specific value
			case "ArrowLeft":
				if (element.previousElementSibling) {
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
					if (rows[rowIndex].className === "bx--expandable-row-v2") {
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
				const headerRow = rows[0].querySelectorAll("th");
				setTabIndex(element, -1);
				if (rowIndex === 1 && Array.from(headerRow).some(th => getFocusElementList(th, tabbableSelectorIgnoreTabIndex).length > 0)) {
					setTabIndex(headerRow[this.columnIndex], 0);
					this.focus(headerRow[this.columnIndex]);
				} else if (rowIndex > 1) {
					rowIndex--;
					const row = rows[rowIndex].querySelectorAll("td");
					if (rows[rowIndex].className === "bx--expandable-row-v2") {
						setTabIndex(row[0], 0);
						this.focus(row[0]);
					} else {
						setTabIndex(row[this.columnIndex], 0);
						this.focus(row[this.columnIndex]);
					}
				}
				break;
			case "Home":
				setTabIndex(element, -1);
				if (event.ctrlKey) {
					const headerRow = rows[0].querySelectorAll("th");
					if (Array.from(headerRow).some(th => getFocusElementList(th, tabbableSelectorIgnoreTabIndex).length > 0)) {
						setTabIndex(headerRow[0], 0);
						this.focus(headerRow[0]);
					} else {
						const firstBodyCell = rows[1].querySelectorAll("td")[0];
						setTabIndex(firstBodyCell, 0);
						this.focus(firstBodyCell);
					}
				} else if (element.parentElement.className !== "bx--expandable-row-v2") {
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
				} else if (element.parentElement.className !== "bx--expandable-row-v2") {
					this.columnIndex = lastRow.length - 1;
					const lastRowCell = rows[rowIndex].querySelectorAll("th, td")[this.columnIndex];
					setTabIndex(lastRowCell, 0);
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
		focusElementList.forEach(element => setTabIndex(element, -1));
		setTabIndex(this.elementRef.nativeElement, 0);
		this.focus(this.elementRef.nativeElement);
	}
}
