import {
	Directive,
	Input,
	ElementRef,
	HostListener
} from "@angular/core";
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
		if (focusElement.firstElementChild &&
			focusElement.firstElementChild.classList.contains("bx--table-sort-v2")) {
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
					this.focus(this.elementRef.nativeElement.nextElementSibling);
				}
				break;
			case "Left": // IE specific value
			case "ArrowLeft":
				if (this.elementRef.nativeElement.previousElementSibling) {
					this.focus(this.elementRef.nativeElement.previousElementSibling);
				}
				break;
			case "Down": // IE specific value
			case "ArrowDown":
				if (rowIndex < rows.length - 1) {
					rowIndex++;
					const bodyCells = rows[rowIndex].querySelectorAll("td");
					if (rows[rowIndex].className === "bx--expandable-row-v2") {
						this.focus(bodyCells[0]);
					} else {
						this.focus(bodyCells[this.columnIndex]);
					}
				}
				break;
			case "Up": // IE specific value
			case "ArrowUp":
				const headerCells = rows[0].querySelectorAll("th");
				if (rowIndex === 1 &&
					Array.from(headerCells).some(th => getFocusElementList(th, tabbableSelectorIgnoreTabIndex).length > 0)) {
					this.focus(headerCells[this.columnIndex]);
				} else if (rowIndex > 1) {
					rowIndex--;
					const bodyCells = rows[rowIndex].querySelectorAll("td");
					if (rows[rowIndex].className === "bx--expandable-row-v2") {
						this.focus(bodyCells[0]);
					} else {
						this.focus(bodyCells[this.columnIndex]);
					}
				}
				break;
			case "Home":
				this.focus(rows[rowIndex].querySelectorAll("th, td")[0]);
				if (event.ctrlKey) {
					const rows = this.elementRef.nativeElement.closest("table").rows;
					const headerCells = rows[0].querySelectorAll("th");
					if (Array.from(headerCells).some(th => getFocusElementList(th, tabbableSelectorIgnoreTabIndex).length > 0)) {
						this.focus(headerCells[0]);
					} else {
						this.focus(rows[1].querySelectorAll("td")[0]);
					}
				}
				break;
			case "End":
				this.columnIndex = rows[rows.length - 1].querySelectorAll("td").length - 1;
				this.focus(rows[rowIndex].querySelectorAll("th, td")[this.columnIndex]);
				if (event.ctrlKey) {
					const rows = this.elementRef.nativeElement.closest("table").rows;
					this.columnIndex = rows[rows.length - 1].querySelectorAll("td").length - 1;
					this.focus(rows[rows.length - 1].querySelectorAll("td")[this.columnIndex]);
				}
				break;
		}
	}

	@HostListener("click", ["$event"])
	onClick() {
		this.focus(this.elementRef.nativeElement);
	}
}
