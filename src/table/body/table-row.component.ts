import {
	Component,
	Input,
	Output,
	EventEmitter,
	ElementRef
} from "@angular/core";
import { TableModel } from "./../table-model.class";
import { getScrollbarWidth } from "./../../common/utils";
import { I18n } from "./../../i18n/i18n.module";
import { getFocusElementList, tabbableSelectorIgnoreTabIndex } from "./../../common/tab.service";
import { TableItem } from "./../table-item.class";
import { Table } from "./../table.module";

@Component({
	// tslint:disable-next-line: component-selector
	selector: "[ibmTableRow]",
	template: `
		<td
			*ngIf="model.hasExpandableRows()"
			class="bx--table-expand"
			[ibmDataGridFocus]="isDataGrid"
			[(columnIndex)]="columnIndex"
			[attr.data-previous-value]="(model.rowsExpanded[index] ? 'collapsed' : null)"
			(click)="setExpandIndex($event)">
			<button
				*ngIf="model.isRowExpandable(index)"
				class="bx--table-expand__button"
				[attr.aria-label]="expandButtonAriaLabel | async"
				(click)="model.expandRow(index, !model.rowsExpanded[index])">
				<ibm-icon-chevron-right16 innerClass="bx--table-expand__svg"></ibm-icon-chevron-right16>
			</button>
		</td>
		<td
			*ngIf="!skeleton && showSelectionColumn"
			[ibmDataGridFocus]="isDataGrid"
			[(columnIndex)]="columnIndex"
			(click)="setCheckboxIndex()">
			<ibm-checkbox
				inline="true"
				[aria-label]="checkboxRowLabel | i18nReplace:getSelectionLabelValue(row) | async"
				[size]="size !== ('lg' ? 'sm' : 'md')"
				[(ngModel)]="model.rowsSelected[index]"
				(change)="onRowCheckboxChange(index)">
			</ibm-checkbox>
		</td>
		<ng-container *ngFor="let item of row; let j = index">
			<td
				*ngIf="model.header[j].visible"
				[class]="model.header[j].className"
				[ngStyle]="model.header[j].style"
				[ibmDataGridFocus]="isDataGrid"
				[(columnIndex)]="columnIndex"
				(click)="setIndex(j)">
				<ng-container *ngIf="!item.template">{{item.data}}</ng-container>
				<ng-template
					[ngTemplateOutlet]="item.template" [ngTemplateOutletContext]="{data: item.data}">
				</ng-template>
			</td>
		</ng-container>
	`
})
export class TableRow {
	/**
	 * `TableModel` with data the table is to display.
	 */
	@Input()
	set model(m: TableModel) {
		if (this._model) {
			this._model.dataChange.unsubscribe();
			this._model.rowsSelectedChange.unsubscribe();
		}

		this._model = m;
		this._model.dataChange.subscribe(() => {
			if (this.isDataGrid) {
				this.handleTabIndex();
			}
		});
		if (this.isDataGrid) {
			this._model.rowsExpandedChange.subscribe(() => {
				// Allows the expanded row to have a focus state when it exists in the DOM
				setTimeout(() => {
					const expandedRows = this.elementRef.nativeElement.querySelectorAll(".bx--expandable-row:not(.bx--parent-row)");
					Array.from<any>(expandedRows).forEach(row => {
						if (row.firstElementChild.tabIndex === undefined || row.firstElementChild.tabIndex !== -1) {
							row.firstElementChild.tabIndex = -1;
						}
					});
				});
			});
		}
	}

	get model(): TableModel {
		return this._model;
	}

	@Input() row;

	@Input() index;

	/**
	 * Size of the table rows.
	 */
	@Input() size: "sm" | "md" | "lg" = "md";

	/**
	 * Controls whether to enable multiple or single row selection.
	 */
	@Input() enableSingleSelect = false;
	@Input()
	set expandButtonAriaLabel(value) {
		this._expandButtonAriaLabel.next(value);
	}
	get expandButtonAriaLabel() {
		return this._expandButtonAriaLabel;
	}

	@Input() set checkboxRowLabel(value) {
		this._checkboxRowLabel.next(value);
	}
	get checkboxRowLabel() {
		return this._checkboxRowLabel;
	}
	/**
	 * Set to `true` for a data grid with keyboard interactions.
	 */
	@Input() isDataGrid = false;

	/**
	 * Controls whether to show the selection checkboxes column or not.
	 */
	@Input() showSelectionColumn = true;

	/**
	 * Used to populate the row selection checkbox label with a useful value if set.
	 *
	 * Example:
	 * ```
	 * <ibm-table [selectionLabelColumn]="0"></ibm-table>
	 * <!-- results in aria-label="Select first column value"
	 * (where "first column value" is the value of the first column in the row -->
	 * ```
	 */
	@Input() selectionLabelColumn: number;

	/**
	 * Emits if a single row is selected.
	 *
	 * @param {Object} ({model: this.model, selectedRowIndex: index})
	 */
	@Output() selectRow = new EventEmitter<Object>();

	/**
	 * Emits if a single row is deselected.
	 *
	 * @param {Object} ({model: this.model, deselectedRowIndex: index})
	 */
	@Output() deselectRow = new EventEmitter<Object>();

	get scrollbarWidth() {
		return getScrollbarWidth();
	}

	public columnIndex = 0;
	protected _model: TableModel;
	protected _checkboxRowLabel = this.i18n.get("TABLE.CHECKBOX_ROW");
	protected _expandButtonAriaLabel = this.i18n.get("TABLE.EXPAND_BUTTON");

	constructor(protected elementRef: ElementRef, protected i18n: I18n) { }

	onRowSelect(index: number) {
		if (!this.showSelectionColumn && this.enableSingleSelect) {
			this.model.rowsSelected.forEach((element, index) => {
				this.model.selectRow(index, false);
			});
			this.model.selectRow(index, !this.model.rowsSelected[index]);
			this.onRowCheckboxChange(index);
		}
	}

	/**
	 * Triggered when a single row is clicked.
	 * Updates the header checkbox state.
	 * Emits the `selectRow` or `deselectRow` event.
	 */
	onRowCheckboxChange(index: number) {
		if (this.model.rowsSelected[index]) {
			this.selectRow.emit({ model: this.model, selectedRowIndex: index });
		} else {
			this.deselectRow.emit({ model: this.model, deselectedRowIndex: index });
		}
	}

	handleTabIndex() {
		setTimeout(() => {
			const focusElementList = getFocusElementList(this.elementRef.nativeElement, tabbableSelectorIgnoreTabIndex);
			if (focusElementList.length > 0) {
				focusElementList.forEach(tabbable => {
					tabbable.tabIndex = -1;
				});
			}
			Array.from<HTMLElement>(this.elementRef.nativeElement.querySelectorAll("td, th")).forEach(cell => Table.setTabIndex(cell, -1));

			const rows = this.elementRef.nativeElement.firstElementChild.rows;
			if (Array.from(rows[0].querySelectorAll("th")).some(th => getFocusElementList(th, tabbableSelectorIgnoreTabIndex).length > 0)) {
				Table.setTabIndex(rows[0].querySelector("th"), 0);
			} else {
				Table.setTabIndex(rows[1].querySelector("td"), 0);
			}
		});
	}

	setExpandIndex(event) {
		this.columnIndex = 0;
	}

	firstExpandedDataInRow(row) {
		const found = row.find(d => d.expandedData);
		if (found) {
			return found.expandedData;
		}
		return found;
	}

	firstExpandedTemplateInRow(row) {
		const found = row.find(d => d.expandedTemplate);
		if (found) {
			return found.expandedTemplate;
		}
		return found;
	}

	setCheckboxIndex() {
		if (this.model.hasExpandableRows()) {
			this.columnIndex = 1;
		} else {
			this.columnIndex = 0;
		}
	}

	setIndex(columnIndex) {
		if (this.model.hasExpandableRows() && this.showSelectionColumn) {
			this.columnIndex = columnIndex + 2;
		} else if (this.model.hasExpandableRows() || this.showSelectionColumn) {
			this.columnIndex = columnIndex + 1;
		}
	}

	getSelectionLabelValue(row: TableItem[]) {
		if (!this.selectionLabelColumn) {
			return { value: this.i18n.get().TABLE.ROW };
		}
		return { value: row[this.selectionLabelColumn].data };
	}
}
