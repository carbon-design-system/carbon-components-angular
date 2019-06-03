import {
	Component,
	Input,
	Output,
	EventEmitter,
	HostBinding
} from "@angular/core";
import { TableModel } from "./../table-model.class";
import { I18n } from "./../../i18n/i18n.module";
import { TableItem } from "./../table-item.class";

@Component({
	// tslint:disable-next-line: component-selector
	selector: "[ibmTableRow]",
	template: `
		<ng-container *ngIf="model">
			<td
				*ngIf="model.hasExpandableRows()"
				ibmTableExpandButton
				[ibmDataGridFocus]="isDataGrid"
				[expanded]="expanded"
				[expandable]="expandable"
				[skeleton]="skeleton"
				[ariaLabel]="expandButtonAriaLabel"
				(expandRow)="expandRow.emit()"
				(click)="setExpandIndex($event)"
				[(columnIndex)]="columnIndex">
			</td>
			<td
				*ngIf="!skeleton && showSelectionColumn"
				ibmTableCheckbox
				[selected]="selected"
				[ibmDataGridFocus]="isDataGrid"
				[label]="checkboxLabel"
				[skeleton]="skeleton"
				(change)="onSelectionChange()"
				(click)="setCheckboxIndex()"
				[(columnIndex)]="columnIndex">
			</td>
			<ng-container *ngFor="let item of row; let j = index">
				<td
					*ngIf="model.header[j].visible"
					ibmTableData
					[item]="item"
					[class]="model.header[j].className"
					[ngStyle]="model.header[j].style"
					[ibmDataGridFocus]="isDataGrid"
					[skeleton]="skeleton"
					(click)="setIndex(j)"
					[(columnIndex)]="columnIndex">
				</td>
			</ng-container>
		</ng-container>
		<ng-content></ng-content>
	`
})
export class TableRowComponent {
	/**
	 * `TableModel` with data the table is to display.
	 */
	@Input() model: TableModel;

	@Input() row: TableItem[];

	@Input() expanded = false;

	@Input() expandable = false;

	@Input() selected = false;

	/**
	 * Size of the table rows.
	 */
	@Input() size: "sm" | "md" | "lg" = "md";

	/**
	 * Controls whether to enable multiple or single row selection.
	 */
	@Input() enableSingleSelect = false;

	@Input() expandButtonAriaLabel;

	@Input() checkboxLabel;
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

	@Input() skeleton = false;

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

	@Output() expandRow = new EventEmitter<void>();

	@Output() columnIndexChange = new EventEmitter<number>();

	@HostBinding("class.bx--data-table--selected") get selectedClass() {
		return this.selected;
	}

	@HostBinding("class.bx--parent-row") get parentRowClass() {
		return this.expandable;
	}

	@HostBinding("class.bx--expandable-row") get expandableRowClass() {
		return this.expanded;
	}

	@HostBinding("class.tbody_row--selectable") get selectableClass() {
		return false; // this.singleSelect
	}

	@HostBinding("attr.data-parent-row") get isParentRow() {
		return this.expandable ? true : null;
	}

	protected _columnIndex = 0;
	protected _model: TableModel;
	protected _checkboxRowLabel = this.i18n.get("TABLE.CHECKBOX_ROW");
	protected _expandButtonAriaLabel = this.i18n.get("TABLE.EXPAND_BUTTON");

	constructor(protected i18n: I18n) { }

	setExpandIndex(event) {
		this.columnIndex = 0;
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

	onSelectionChange() {
		if (this.selected) {
			this.deselectRow.emit();
		} else {
			this.selectRow.emit();
		}
	}
}
