import { TableModel, TableItem } from "./table.module";
import {
	Component,
	AfterContentChecked,
	ApplicationRef,
	Input,
	Output,
	ViewChild,
	ContentChildren,
	EventEmitter,
	ViewEncapsulation
} from "@angular/core";

import { getScrollbarWidth } from "../common/utils";

/**
 * Build your table with this component by extending things that differ from default.
 *
 * demo: [https://pages.github.ibm.com/peretz/neutrino/#/table](https://pages.github.ibm.com/peretz/neutrino/#/table)
 *
 * ## Build your own table footer with neutrino components
 *
 * ```html
 * <p class="table-footer">
 * 	<span class="table-selection-info">{{model.selectedRowsCount()}} of {{model.totalDataLength}} rows selected</span>
 * 	<n-table-pagination [model]="model" (selectPage)="selectPage($event)"></n-table-pagination>
 * 	<n-table-goto-page (selectPage)="selectPage($event)"></n-table-goto-page>
 * </p>
 * ```
 *
 * `selectPage()` function should fetch the data from backend, create new `data`, apply it to `model.data`,
 * and update `model.currentPage`.
 *
 * If the data your server returns is a two dimensional array of objects, it would look something like this:
 *
 * ```typescript
 * selectPage(page) {
 * 	this.service.getPage(page).then((data: Array<Array<any>>) => {
 * 		let newData = [];
 *
 * 		// create new data from the service data
 * 		data.forEach(dataRow => {
 * 			let row = [];
 * 			dataRow.forEach(dataElement => {
 * 				row.push(new TableItem({
 * 					data: dataElement,
 * 					template: typeof dataElement === "string" ? undefined : this.customTableItemTemplate
 * 					// your template can handle all the data types so you don't have to conditionally set it
 * 					// you can also set different templates for different columns based on index
 * 				}));
 * 			});
 * 			newData.push(row);
 * 		});
 *
 * 		// set the data and update page
 * 		this.model.data = newData;
 * 		this.model.currentPage = page;
 * 	});
 * }
 * ```
 *
 * @export
 * @class Table
 * @implements {AfterContentChecked}
 */
@Component({
	selector: "n-table",
	template: `
	<table [ngClass]="{
		'table--sm': size === 'sm',
		'table': size === 'default' || size === 'md',
		'table--lg': size === 'lg'
	}">
		<thead>
			<tr>
				<th class="table_checkbox-col" *ngIf="showSelectionColumn">
					<n-checkbox
						[size]="size !== 'lg' ? 'sm' : 'md'"
						[(ngModel)]="selectAllCheckbox"
						[indeterminate]="selectAllCheckboxSomeSelected"
						(change)="onSelectAllCheckboxChange()">
					</n-checkbox>
				</th>
				<ng-container *ngFor="let column of model.header; let i = index">
					<th [ngClass]='{"thead_action": column.filterTemplate || this.sort.observers.length > 0}'
						*ngIf="column.visible"
						[ngStyle]="column.style">
						<div class="table_cell-wrapper">
							<span class="table_data-wrapper"
								(click)="sort.emit(i)">
								<span *ngIf="!column.template" [title]="column.data">{{column.data}}</span>
								<ng-template
									[ngTemplateOutlet]="column.template" [ngTemplateOutletContext]="{data: column.data}">
								</ng-template>
							</span>
							<span class="thead_sort" (click)="sort.emit(i)">
								<!-- arrow up -->
								<svg
									*ngIf="column.descending && column.sorted"
									xmlns="http://www.w3.org/2000/svg"
									class="icon--sm"
									width="16"
									height="16"
									viewBox="0 0 16 16">
									<path d="M13.5 5.5L8 0 2.5 5.5l1 1 3.8-3.8V16h1.4V2.7l3.8 3.8z"/>
								</svg>
								<!-- arrow down -->
								<svg
									*ngIf="column.ascending && column.sorted"
									xmlns="http://www.w3.org/2000/svg"
									class="icon--sm"
									width="16"
									height="16"
									viewBox="0 0 16 16">
									<path d="M13.5 10.5L8 16l-5.5-5.5 1-1 3.8 3.8V0h1.4v13.3l3.8-3.8z"/>
								</svg>
							</span>
							<button class="thead_filter-btn btn--icon-link"
								[ngClass]="{'filter-enabled': column.filterCount > 0}"
								*ngIf="column.filterTemplate"
								type="button"
								aria-expanded="false"
								aria-haspopup="true"
								[nPopover]="column.filterTemplate"
								[footer]="column.filterFooter"
								attr.title="{{'TABLE.FILTER' | translate}}"
								placement="right-bottom"
								popoverFilter="true"
								[appendToBody]="true"
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
						</div>
					</th>
				</ng-container>
				<th [ngStyle]="{'width': scrollbarWidth + 'px', 'padding': 0, 'border': 0}">
					<!--
						Scrollbar pushes body to the left so this header column is added to push
						the title bar the same amount and keep the header and body columns aligned.
					-->
				</th>
			</tr>
		</thead>
		<tbody
		[ngClass]="{'table_tbody--striped': striped}"
		[ngStyle]="{'overflow-y': 'scroll'}"
		(scroll)="onScroll($event)">
			<ng-container *ngFor="let row of model.data; let i = index">
				<tr *ngIf="!model.isRowFiltered(i)"
					(click)="onRowSelect(i)"
					[ngClass]="{
						selected: model.rowsSelected[i],
						'tbody_row--selectable': enableSingleSelect,
						'tbody_row--success': !model.rowsSelected[i] && model.rowsContext[i] === 'success',
						'tbody_row--warning': !model.rowsSelected[i] && model.rowsContext[i] === 'warning',
						'tbody_row--info': !model.rowsSelected[i] && model.rowsContext[i] === 'info',
						'tbody_row--error': !model.rowsSelected[i] && model.rowsContext[i] === 'error'
					}">
					<td class="table_checkbox-col" *ngIf="showSelectionColumn">
						<n-checkbox
							[size]="size !== 'lg' ? 'sm' : 'md'"
							[(ngModel)]="model.rowsSelected[i]"
							(change)="onRowCheckboxChange(i)">
						</n-checkbox>
					</td>
					<ng-container *ngFor="let item of row; let i = index">
						<td *ngIf="model.header[i].visible"
							[ngStyle]="model.header[i].style">
							<div class="table_cell-wrapper">
								<span *ngIf="!item.template" class="table_data-wrapper" [title]="item.data">{{item.data}}</span>
								<ng-template
									[ngTemplateOutlet]="item.template" [ngTemplateOutletContext]="{data: item.data}">
								</ng-template>
							</div>
						</td>
					</ng-container>
				</tr>
			</ng-container>
		</tbody>
		<tfoot>
			<tr *ngIf="this.model.isLoading">
				<td class="table_loading-indicator">
					<n-static-icon icon="loading_rows" size="lg"></n-static-icon>
				</td>
			</tr>
			<tr *ngIf="this.model.isEnd">
				<td class="table_end-indicator">
					<h5>{{'TABLE.END_OF_DATA'| translate}}</h5>
					<button (click)="scrollToTop($event)" class="btn--secondary-sm">
						{{ 'TABLE.SCROLL_TOP' | translate}}
					</button>
				</td>
			</tr>
		</tfoot>
	</table>
	`
})
export class Table {
	/**
	 * Size of the table rows.
	 * (size `"default"` is being deprecated as of neutrino v1.2.0, please use `"md"` instead)
	 *
	 * @type {("sm" | "md" |"default" | "lg")}
	 * @memberof Table
	 */
	@Input() size: "sm" | "md" |"default" | "lg" = "md";

	/**
	 * `TableModel` with data the table is to display.
	 *
	 * @type {TableModel}
	 * @memberof Table
	 */
	@Input()
	set model(m: TableModel) {
		if (this._model) {
			this._model.dataChange.unsubscribe();
			this._model.rowsSelectedChange.unsubscribe();
		}

		this._model = m;
		this._model.rowsSelectedChange.subscribe(() => this.updateSelectAllCheckbox());
		this._model.dataChange.subscribe(() => this.updateSelectAllCheckbox());
	}

	get model(): TableModel {
		return this._model;
	}

	/**
	 * @deprecated in the next major neutrino version in favour of
	 * `showSelectionColumn` because of new attribute `enableSingleSelect`
	 *  please use `showSelectionColumn` instead
	 */
	@Input()
	set enableRowSelect(value: boolean) {
		this.showSelectionColumn = value;
	}

	get enableRowSelect () {
		return this.showSelectionColumn;
	}

	/**
	 * Controls whether to show the selection checkboxes column or not.
	 *
	 * @type {boolean}
	 * @memberof Table
	 */
	@Input() showSelectionColumn = true;

	/**
	 * Controls whether to enable multiple or single row selection.
	 *
	 * @type {boolean}
	 * @memberof Table
	 */
	@Input() enableSingleSelect = false;

	/**
	 * Distance (in px) from the bottom that view has to reach before
	 * `scrollLoad` event is emitted.
	 *
	 * @type {number}
	 * @memberof Table
	 */
	@Input() scrollLoadDistance = 0;

	/**
	 * Controls if all checkboxes are viewed as selected.
	 *
	 * @type {boolean}
	 * @memberof Table
	 */
	selectAllCheckbox = false;

	/**
	 * Controls the indeterminate state of the header checkbox.
	 *
	 * @type {boolean}
	 * @memberof Table
	 */
	selectAllCheckboxSomeSelected = false;

	/**
	 * Set to `true` to make table rows striped.
	 *
	 * @type {boolean}
	 * @memberof Table
	 */
	@Input() striped = false;

	/**
	 * Emits an index of the column that wants to be sorted.
	 *
	 * @memberof Table
	 */
	@Output() sort = new EventEmitter<number>();

	/**
	 * Emits if all rows are selected.
	 *
	 * @param {TableModel} model
	 * @memberof Table
	 */
	@Output() selectAll = new EventEmitter<Object>();

	/**
	 * Emits if all rows are deselected.
	 *
	 * @param {TableModel} model
	 * @memberof Table
	 */
	@Output() deselectAll = new EventEmitter<Object>();

	/**
	 * Emits if a single row is selected.
	 *
	 * @param {Object} ({model: this.model, selectedRowIndex: index})
	 * @memberof Table
	 */
	@Output() selectRow = new EventEmitter<Object>();

	/**
	 * Emits if a single row is deselected.
	 *
	 * @param {Object} ({model: this.model, deselectedRowIndex: index})
	 * @memberof Table
	 */
	@Output() deselectRow = new EventEmitter<Object>();

	/**
	 * Emits when table requires more data to be loaded.
	 *
	 * @param {TableModel} model
	 * @memberof Table
	 */
	@Output() scrollLoad = new EventEmitter<TableModel>();

	private _model: TableModel;

	/**
	 * Creates an instance of Table.
	 *
	 * @param {ApplicationRef} applicationRef
	 * @memberof Table
	 */
	constructor(private applicationRef: ApplicationRef) {}

	onRowSelect(index: number) {
		if (!this.showSelectionColumn && this.enableSingleSelect) {
			this.model.rowsSelected.forEach((element, indsex) => {
				this.model.selectRow(indsex, false);
			});

			!this.model.rowsSelected[index] ? this.model.selectRow(index) : this.model.selectRow(index, false);
		}
	}

	updateSelectAllCheckbox() {
		const selectedRowsCount = this.model.selectedRowsCount();

		if (selectedRowsCount <= 0) {
			// reset select all checkbox if nothing selected
			this.selectAllCheckbox = false;
			this.selectAllCheckboxSomeSelected = false;
		} else if (selectedRowsCount < this.model.data.length) {
			this.selectAllCheckboxSomeSelected = true;
		}
	}

	/**
	 * Triggered whenever the header checkbox is clicked.
	 * Updates all the checkboxes in the table view.
	 * Emits the `selectAll` or `deselectAll` event.
	 *
	 * @memberof Table
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

	/**
	 * Triggered when a single row is clicked.
	 * Updates the header checkbox state.
	 * Emits the `selectRow` or `deselectRow` event.
	 *
	 * @param {number} index
	 * @returns
	 * @memberof Table
	 */
	onRowCheckboxChange(index: number) {
		let startValue = this.model.rowsSelected[0];

		if (this.model.rowsSelected[index]) {
			this.selectRow.emit({model: this.model, selectedRowIndex: index});
		} else {
			this.deselectRow.emit({model: this.model, deselectedRowIndex: index});
		}

		for (let i = 1; i < this.model.rowsSelected.length; i++) {
			let one = this.model.rowsSelected[i];

			if (!!one !== !!startValue) {  // !! essentially converts to boolean and we want undefined to be false
				// set indeterminate
				this.selectAllCheckbox = false;
				this.selectAllCheckboxSomeSelected = true;
				return;
			}
		}

		this.selectAllCheckboxSomeSelected = false;
		this.selectAllCheckbox = startValue;
	}

	/**
	 * Triggered when the user scrolls on the `<tbody>` element.
	 * Emits the `scrollLoad` event.
	 *
	 * @param {any} event
	 * @memberof Table
	 */
	onScroll(event) {
		const distanceFromBottom = event.target.scrollHeight - event.target.clientHeight - event.target.scrollTop;

		if (distanceFromBottom <= this.scrollLoadDistance) {
			this.scrollLoad.emit(this.model);
		} else {
			this.model.isEnd = false;
		}
	}

	get scrollbarWidth() {
		return getScrollbarWidth();
	}

	/**
	 * Triggered when the user scrolls on the `<tbody>` element.
	 * Emits the `scrollLoad` event.
	 *
	 * @param {any} event
	 * @memberof Table
	 */
	scrollToTop(event) {
		event.target.parentElement.parentElement.parentElement.parentElement.children[1].scrollTop = 0;
		this.model.isEnd = false;
	}
}
