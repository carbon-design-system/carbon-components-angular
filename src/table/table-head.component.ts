import {
	ApplicationRef,
	Component,
	HostBinding,
	Input,
	Output,
	EventEmitter
} from "@angular/core";

import { TableModel } from "./table.module";
import { I18n } from "./../i18n/i18n.module";

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
	<tr>
		<th
			class="bx--table-expand"
			*ngIf="model.hasExpandableRows()"
			[ibmDataGridFocus]="isDataGrid"
			[(columnIndex)]="columnIndex"
			(click)="setExpandIndex($event)">
		</th>
		<th
			class="bx--table-column-checkbox"
			*ngIf="!skeleton && showSelectionColumn"
			[ibmDataGridFocus]="isDataGrid"
			[(columnIndex)]="columnIndex"
			(click)="setCheckboxIndex()"
			style="width: 10px;">
			<ibm-checkbox
				inline="true"
				[size]="size !== ('lg' ? 'sm' : 'md')"
				[(ngModel)]="selectAllCheckbox"
				[indeterminate]="selectAllCheckboxSomeSelected"
				[attr.aria-label]="checkboxHeaderLabel | async"
				(change)="onSelectAllCheckboxChange()">
			</ibm-checkbox>
		</th>
		<ng-container *ngFor="let column of model.header; let i = index">
			<th
				[ngClass]='{"thead_action": column.filterTemplate || this.sort.observers.length > 0}'
				*ngIf="column.visible"
				[class]="column.className"
				[ngStyle]="column.style"
				[ibmDataGridFocus]="isDataGrid"
				[(columnIndex)]="columnIndex"
				(click)="setIndex(i)">
				<button
					class="bx--table-sort"
					*ngIf="!skeleton && this.sort.observers.length > 0 && column.sortable"
					[attr.aria-label]="(column.sorted && column.ascending ? sortDescendingLabel : sortAscendingLabel) | async"
					aria-live="polite"
					[ngClass]="{
						'bx--table-sort--active': column.sorted,
						'bx--table-sort--ascending': column.ascending
					}"
					(click)="sort.emit(i)">
					<span
						*ngIf="!column.template"
						[title]="column.data"
						tabindex="-1">
						{{column.data}}
					</span>
					<ng-template
						[ngTemplateOutlet]="column.template" [ngTemplateOutletContext]="{data: column.data}">
					</ng-template>
					<svg
						focusable="false"
						preserveAspectRatio="xMidYMid meet"
						style="will-change: transform;"
						xmlns="http://www.w3.org/2000/svg"
						class="bx--table-sort__icon"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						aria-hidden="true">
						<path d="M12.3 9.3l-3.8 3.8V1h-1v12.1L3.7 9.3 3 10l5 5 5-5z"></path>
					</svg>
					<svg
						focusable="false"
						preserveAspectRatio="xMidYMid meet"
						style="will-change: transform;"
						xmlns="http://www.w3.org/2000/svg"
						class="bx--table-sort__icon-unsorted"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						aria-hidden="true">
						<path d="M13.8 10.3L12 12.1V2h-1v10.1l-1.8-1.8-.7.7 3 3 3-3zM4.5 2l-3 3 .7.7L4 3.9V14h1V3.9l1.8 1.8.7-.7z"></path>
					</svg>
				</button>
				<span
					class="bx--table-header-label"
					*ngIf="!skeleton && this.sort.observers.length === 0 || (this.sort.observers.length > 0 && !column.sortable)">
					<span *ngIf="!column.template" [title]="column.data">{{column.data}}</span>
					<ng-template
						[ngTemplateOutlet]="column.template" [ngTemplateOutletContext]="{data: column.data}">
					</ng-template>
				</span>
				<button
					[ngClass]="{'active': column.filterCount > 0}"
					*ngIf="column.filterTemplate"
					type="button"
					aria-expanded="false"
					aria-haspopup="true"
					[ibmTooltip]="column.filterTemplate"
					trigger="click"
					[title]="filterTitle | async"
					placement="bottom,top"
					[data]="column.filterData">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon--sm"
						width="16"
						height="16"
						viewBox="0 0 16 16">
						<path d="M0 0v3l6 8v5h4v-5l6-8V0H0zm9 10.7V15H7v-4.3L1.3 3h13.5L9 10.7z"/>
					</svg>
					<span *ngIf="column.filterCount > 0">
						{{column.filterCount}}
					</span>
				</button>
			</th>
		</ng-container>
		<th *ngIf="!skeleton && stickyHeader" [ngStyle]="{'width': scrollbarWidth + 'px', 'padding': 0, 'border': 0}">
			<!--
				Scrollbar pushes body to the left so this header column is added to push
				the title bar the same amount and keep the header and body columns aligned.
			-->
		</th>
	</tr>
	`
})
export class TableHead {
	@Input() set model(m: TableModel) {
		this._model = m;
		this._model.rowsSelectedChange.subscribe(() => {
			this.selectAllCheckbox = false;
		});
	}
	get model(): TableModel {
		return this._model;
	}

	@Input() showSelectionColumn = true;

	@Input() selectAllCheckboxSomeSelected = false;

	@Input() selectAllCheckbox = false;

	@Input() skeleton = false;

	/**
	 * Deprecated as of v3.0, will be removed with v4.0
	 * @deprecated
	 */
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

	@Input() isDataGrid = false;

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
	 * Emits an index of the column when the data grid is being used.
	 */
	@Output() index = new EventEmitter<number>();
	/**
	 * Emits an index of the expanded column when the data grid is being used.
	 */
	@Output() expandIndex = new EventEmitter<Event>();
	/**
	 * Emits an index of the checkbox column when the data grid is being used.
	 */
	@Output() checkboxIndex = new EventEmitter();
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
	/**
	 * Deprecated as of v3.0, will be removed with v4.0
	 * @deprecated
	 */
	@Output() columnIndexChange: EventEmitter<number> = new EventEmitter();

	protected _model: TableModel;

	protected _columnIndex: number;

	constructor(protected applicationRef: ApplicationRef, protected i18n: I18n) {}

	setIndex(columnIndex) {
		this.index.emit(columnIndex);
	}

	setExpandIndex(event) {
		this.expandIndex.emit(event);
	}

	setCheckboxIndex() {
		this.checkboxIndex.emit();
	}

	/**
	 * Triggered whenever the header checkbox is clicked.
	 * Updates all the checkboxes in the table view.
	 * Emits the `selectAll` or `deselectAll` event.
	 */
	onSelectAllCheckboxChange() {
		this.applicationRef.tick(); // give app time to process the click if needed

		if (this.selectAllCheckboxSomeSelected) {
			this.selectAllCheckbox = false; // clear all boxes
			this.deselectAll.emit(this.model);
		} else if (this.selectAllCheckbox) {
			this.selectAll.emit(this.model);
		} else {
			this.deselectAll.emit(this.model);
		}

		this.selectAllCheckboxSomeSelected = false;

		for (let i = 0; i < this.model.rowsSelected.length; i++) {
			this.model.rowsSelected[i] = this.selectAllCheckbox;
		}
	}
}
