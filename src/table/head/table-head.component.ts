import {
	ApplicationRef,
	Component,
	HostBinding,
	Input,
	Output,
	EventEmitter
} from "@angular/core";

import { TableModel } from "../table.module";
import { I18n } from "../../i18n/i18n.module";

/**
 * A subcomponent that creates the thead of the table
 *
 * ## Basic usage
 *
 * ```html
 * 	<thead ibmTableHead [model]="model"></thead>
 * ```
 *
 * @export
 * @class TableHead
 */
@Component({
	// tslint:disable-next-line:component-selector
	selector: "[ibmTableHead]",
	template: `
	<ng-container *ngIf="model">
		<tr>
			<th ibmTableHeadExpand *ngIf="model.hasExpandableRows()"></th>
			<th
				ibmTableHeadCheckbox
				*ngIf="showSelectionColumn"
				[checked]="selectAllCheckbox"
				[indeterminate]="selectAllCheckboxSomeSelected"
				[ariaLabel]="checkboxHeaderLabel"
				(change)="onSelectAllCheckboxChange()">
			</th>
			<ng-container *ngFor="let column of model.header; let i = index">
				<th
					ibmTableHeadCell
					[column]="column"
					[filterTitle]="filterTitle"
					(sort)="sort.emit(i)"
					*ngIf="column.visible"
					[class]="column.className"
					[ngStyle]="column.style">
				</th>
			</ng-container>
			<th *ngIf="!skeleton && stickyHeader" [ngStyle]="{'width': scrollbarWidth + 'px', 'padding': 0, 'border': 0}">
				<!--
					Scrollbar pushes body to the left so this header column is added to push
					the title bar the same amount and keep the header and body columns aligned.
				-->
			</th>
		</tr>
	</ng-container>
	<ng-content></ng-content>
	`
})
export class TableHead {
	@Input() model: TableModel;

	@Input() showSelectionColumn = true;

	@Input() selectAllCheckboxSomeSelected = false;

	@Input() selectAllCheckbox = false;

	@Input() skeleton = false;

	@Input() stickyHeader = false;

	@Input() checkboxHeaderLabel = this.i18n.get("TABLE.CHECKBOX_HEADER");
	@Input() sortDescendingLabel = this.i18n.get("TABLE.SORT_DESCENDING");
	@Input() sortAscendingLabel = this.i18n.get("TABLE.SORT_ASCENDING");
	@Input() filterTitle = this.i18n.get("TABLE.FILTER");

	/**
	 * Emits an index of the column that wants to be sorted.
	 */
	@Output() sort = new EventEmitter<number>();
	/**
	 * Emits if all rows are selected.
	 *
	 * @param {TableModel} model
	 */
	@Output() selectAll = new EventEmitter<TableModel>();
	/**
	 * Emits if all rows are deselected.
	 *
	 * @param {TableModel} model
	 */
	@Output() deselectAll = new EventEmitter<TableModel>();

	constructor(protected i18n: I18n) {}

	onSelectAllCheckboxChange() {
		if (!this.selectAllCheckbox) {
			this.selectAll.emit(this.model);
		} else {
			this.deselectAll.emit(this.model);
		}
	}
}
