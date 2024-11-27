import {
	Component,
	Input,
	Output,
	EventEmitter,
	HostBinding,
	HostListener
} from "@angular/core";
import { TableModel } from "../table-model.class";
import { I18n, Overridable } from "carbon-components-angular/i18n";
import { TableItem } from "../table-item.class";
import { Observable } from "rxjs";
import { TableRowSize } from "../table.types";

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: "[cdsTableRow], [ibmTableRow]",
	template: `
		@if (model) {
			@if (model.hasExpandableRows()) {
				<td
					cdsTableExpandButton
					class="cds--table-expand-v2"
					[expanded]="expanded"
					[expandable]="expandable"
					[skeleton]="skeleton"
					[ariaLabel]="getExpandButtonAriaLabel()"
					[headers]="model.getHeaderId('expand')"
					(expandRow)="expandRow.emit()">
				</td>
			}
			@if (!skeleton && showSelectionColumn && !enableSingleSelect) {
				@if (!showSelectionColumnCheckbox) {
					<td></td>
				} @else {
					<td
						cdsTableCheckbox
						class="cds--table-column-checkbox"
						[size]="size"
						[selected]="selected"
						[label]="getCheckboxLabel()"
						[row]="row"
						[skeleton]="skeleton"
						[headers]="model.getHeaderId('select')"
						(selectedChange)="onSelectionChange()">
					</td>
				}
			}
			@if (!skeleton && showSelectionColumn && enableSingleSelect) {
				<td
					cdsTableRadio
					[selected]="selected"
					[label]="getCheckboxLabel()"
					[row]="row"
					[skeleton]="skeleton"
					[headers]="model.getHeaderId('select')"
					(change)="onSelectionChange()">
				</td>
			}
			@for (item of row; track item; let j = $index) {
				@if (item && model.getHeader(j) && model.getHeader(j).visible) {
					<td
						cdsTableData
						[headers]="model.getHeaderId(j, item.colSpan)"
						[item]="item"
						[title]="item.title"
						[class]="model.getHeader(j).className"
						[ngStyle]="model.getHeader(j).style"
						[skeleton]="skeleton"
						[attr.colspan]="item.colSpan"
						[attr.rowspan]="item.rowSpan"
						(click)="onRowClick()"
						(keydown.enter)="onRowClick()">
					</td>
				}
				@if (item && model.getHeader(j) == null) {
					<td
						cdsTableData
						[headers]="model.getHeaderId(j, item.colSpan)"
						[item]="item"
						[title]="item.title"
						[skeleton]="skeleton"
						[attr.colspan]="item.colSpan"
						[attr.rowspan]="item.rowSpan"
						(click)="onRowClick()"
						(keydown.enter)="onRowClick()">
					</td>
				}
			}
		}
		<ng-content />
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
	@Input() size: TableRowSize = "md";

	/**
	 * Controls whether to enable multiple or single row selection.
	 */
	@Input() enableSingleSelect = false;

	@Input()
	set expandButtonAriaLabel(value: string | Observable<string>) {
		this._expandButtonAriaLabel.override(value);
	}

	get expandButtonAriaLabel() {
		return this._expandButtonAriaLabel.value;
	}

	@Input()
	set checkboxLabel(value: string | Observable<string>) {
		this._checkboxLabel.override(value);
	}

	get checkboxLabel() {
		return this._checkboxLabel.value;
	}

	/**
	 * Controls whether to show the selection checkboxes column or not.
	 */
	@Input() showSelectionColumn = true;

	/**
	 * Shows or hide the checkbox in the selection column when `showSelectionColumn`
	 * is set to true
	 */
	@Input() showSelectionColumnCheckbox = true;

	/**
	 * Used to populate the row selection checkbox label with a useful value if set.
	 *
	 * Example:
	 * ```
	 * <cds-table [selectionLabelColumn]="0"></cds-table>
	 * <!-- results in aria-label="Select first column value"
	 * (where "first column value" is the value of the first column in the row -->
	 * ```
	 */
	@Input() selectionLabelColumn: number;

	@Input() skeleton = false;

	/**
	 * Emits when the row is selected.
	 */
	@Output() selectRow = new EventEmitter();

	/**
	 * Emits when the row is deselected.
	 */
	@Output() deselectRow = new EventEmitter();

	/**
	 * Emits when the row is expanded
	 */
	@Output() expandRow = new EventEmitter();

	/**
	 * Emits when a row is clicked regardless of `enableSingleSelect` or `showSelectionColumn`.
	 * Should only get emitted when a row item is selected excluding expand buttons,
	 * checkboxes, or radios.
	 */
	@Output() rowClick = new EventEmitter();

	@HostBinding("class.cds--data-table--selected") get selectedClass() {
		return this.selected;
	}

	@HostBinding("class.cds--parent-row") get parentRowClass() {
		return this.expandable;
	}

	@HostBinding("class.cds--expandable-row") get expandableRowClass() {
		return this.expanded;
	}

	@HostBinding("class.tbody_row--selectable") get selectableClass() {
		return false; // this.singleSelect
	}

	@HostBinding("attr.data-parent-row") get isParentRow() {
		return this.expandable ? true : null;
	}

	@HostBinding("attr.tabindex") get isAccessible() {
		return this.enableSingleSelect && !this.showSelectionColumn ? 0 : null;
	}

	protected _checkboxLabel = this.i18n.getOverridable("TABLE.CHECKBOX_ROW");
	protected _expandButtonAriaLabel = this.i18n.getOverridable("TABLE.EXPAND_BUTTON");

	constructor(protected i18n: I18n) { }

	@HostListener("click")
	onHostClick() {
		if (this.enableSingleSelect && !this.showSelectionColumn) {
			this.onSelectionChange();
		}
	}

	onRowClick() {
		this.rowClick.emit();
	}

	onSelectionChange() {
		if (this.selected) {
			this.deselectRow.emit();
		} else {
			this.selectRow.emit();
		}
	}

	getCheckboxLabel(): Observable<string> {
		return this._checkboxLabel.subject;
	}

	getExpandButtonAriaLabel(): Observable<string> {
		return this._expandButtonAriaLabel.subject;
	}
}
