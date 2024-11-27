import {
	Component,
	Input,
	EventEmitter,
	Output
} from "@angular/core";
import { TableModel } from "../table-model.class";
import { I18n, Overridable } from "carbon-components-angular/i18n";
import { Observable } from "rxjs";
import { TableRowSize } from "../table.types";

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: "[cdsTableBody], [ibmTableBody]",
	template: `
		@if (model) {
			@for (row of model.data; track row; let i = $index) {
				@if (!model.isRowFiltered(i)) {
					<tr
						cdsTableRow
						[model]="model"
						[row]="row"
						[size]="size"
						[selected]="model.isRowSelected(i)"
						[expandable]="model.isRowExpandable(i)"
						[expanded]="model.isRowExpanded(i)"
						[checkboxLabel]="getCheckboxRowLabel()"
						[expandButtonAriaLabel]="getExpandButtonAriaLabel()"
						[showSelectionColumn]="showSelectionColumn"
						[enableSingleSelect]="enableSingleSelect"
						[skeleton]="skeleton"
						(selectRow)="onRowCheckboxChange(i)"
						(deselectRow)="onRowCheckboxChange(i)"
						(expandRow)="model.expandRow(i, !model.isRowExpanded(i))"
						(rowClick)="onRowClick(i)"
						[class]="(model.rowsClass[i] ? model.rowsClass[i] : null)"
						[ngClass]="{
							'tbody_row--success': !model.isRowSelected(i) && model.getRowContext(i) === 'success',
							'tbody_row--warning': !model.isRowSelected(i) && model.getRowContext(i) === 'warning',
							'tbody_row--info': !model.isRowSelected(i) && model.getRowContext(i) === 'info',
							'tbody_row--error': !model.isRowSelected(i) && model.getRowContext(i) === 'error'
						}">
					</tr>
				}
				@if (model.isRowExpandable(i) && !shouldExpandAsTable(row) && !model.isRowFiltered(i)) {
					<tr
						cdsTableExpandedRow
						cdsExpandedRowHover
						[row]="row"
						[expanded]="model.isRowExpanded(i)"
						[skeleton]="skeleton">
					</tr>
				}
				@if (model.isRowExpandable(i) && shouldExpandAsTable(row) && model.isRowExpanded(i) && !model.isRowFiltered(i)) {
					@for (expandedDataRow of firstExpandedDataInRow(row); track expandedDataRow) {
						<tr
							cdsTableRow
							[model]="model"
							[showSelectionColumnCheckbox]="false"
							[showSelectionColumn]="showSelectionColumn"
							[row]="expandedDataRow"
							[size]="size"
							[skeleton]="skeleton">
						</tr>
					}
				}
			}
		}
		<ng-content />
	`
})
export class TableBody {
	@Input() model: TableModel;

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
	set checkboxRowLabel(value: string | Observable<string>) {
		this._checkboxRowLabel.override(value);
	}

	get checkboxRowLabel() {
		return this._checkboxRowLabel.value;
	}

	/**
	 * Controls whether to show the selection checkboxes column or not.
	 */
	@Input() showSelectionColumn = true;

	/**
	 * Size of the table rows.
	 */
	@Input() size: TableRowSize = "md";

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
	 * Emits if a single row is selected.
	 *
	 * @param ({model: this.model, selectedRowIndex: index})
	 */
	@Output() selectRow = new EventEmitter<Object>();

	/**
	 * Emits if a single row is deselected.
	 *
	 * @param ({model: this.model, deselectedRowIndex: index})
	 */
	@Output() deselectRow = new EventEmitter<Object>();

	/**
	 * Emits if a row item excluding expandButtons, checkboxes, or radios is clicked.
	 */
	@Output() rowClick = new EventEmitter<number>();

	protected _checkboxRowLabel = this.i18n.getOverridable("TABLE.CHECKBOX_ROW");
	protected _expandButtonAriaLabel = this.i18n.getOverridable("TABLE.EXPAND_BUTTON");

	constructor(protected i18n: I18n) { }

	/**
	 * Triggered when a single row is clicked.
	 * Updates the header checkbox state.
	 * Emits the `selectRow` or `deselectRow` event.
	 */
	onRowCheckboxChange(index: number) {
		if (this.model.isRowSelected(index)) {
			this.deselectRow.emit({ model: this.model, deselectedRowIndex: index });
		} else {
			this.selectRow.emit({ model: this.model, selectedRowIndex: index });
		}
	}

	onRowClick(index: number) {
		this.rowClick.emit(index);
	}

	getCheckboxRowLabel(): Observable<string> {
		return this._checkboxRowLabel.subject;
	}

	getExpandButtonAriaLabel(): Observable<string> {
		return this._expandButtonAriaLabel.subject;
	}

	firstExpandedDataInRow(row) {
		const found = row.find(d => d.expandedData);
		if (found) {
			return found.expandedData;
		}
		return found;
	}

	shouldExpandAsTable(row) {
		return row.some(d => d.expandAsTable);
	}
}
