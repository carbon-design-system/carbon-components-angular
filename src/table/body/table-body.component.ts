import {
	Component,
	Input,
	EventEmitter,
	Output
} from "@angular/core";
import { TableModel } from "../table-model.class";

@Component({
	// tslint:disable-next-line: component-selector
	selector: "[ibmTableBody]",
	template: `
		<ng-container *ngIf="model">
			<ng-container *ngFor="let row of model.data; let i = index">
				<tr
					ibmTableRow
					[model]="model"
					[row]="row"
					[selected]="model.isRowSelected(i)"
					[expandable]="model.isRowExpandable(i)"
					[expanded]="model.isRowExpanded(i)"
					[checkboxLabel]="checkboxRowLabel"
					[expandButtonAriaLabel]="expandButtonAriaLabel"
					[skeleton]="skeleton"
					(selectRow)="onRowCheckboxChange(i)"
					(deselectRow)="onRowCheckboxChange(i)"
					(expandRow)="model.expandRow(i, !model.isRowExpanded(i))"
					*ngIf="!model.isRowFiltered(i)"
					[class]="(model.rowsClass[i] ? model.rowsClass[i] : null)"
					[ngClass]="{
						'tbody_row--success': !model.isRowSelected(i) && model.getRowContext(i) === 'success',
						'tbody_row--warning': !model.isRowSelected(i) && model.getRowContext(i) === 'warning',
						'tbody_row--info': !model.isRowSelected(i) && model.getRowContext(i) === 'info',
						'tbody_row--error': !model.isRowSelected(i) && model.getRowContext(i) === 'error'
					}">
				</tr>
				<tr
					*ngIf="model.isRowExpanded(i) && !model.isRowFiltered(i)"
					ibmTableExpandedRow
					ibmExpandedRowHover
					[row]="row"
					[expanded]="model.isRowExpanded(i)"
					[skeleton]="skeleton">
				</tr>
			</ng-container>
		</ng-container>
		<ng-content></ng-content>
	`
})
export class TableBody {
	@Input() model: TableModel;

	/**
	 * Controls whether to enable multiple or single row selection.
	 */
	@Input() enableSingleSelect = false;
	@Input() expandButtonAriaLabel;


	@Input() checkboxRowLabel;

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
}
