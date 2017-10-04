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

/**
 * Build your table with this component by extending things that differ from default.
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
	<div class="table-container">
		<table>
			<thead>
				<tr>
					<th class="check-column" *ngIf="enableRowSelect">
						<n-checkbox [(ngModel)]="selectAllCheckbox"
							[indeterminate]="selectAllCheckboxSomeSelected"
							(change)="onSelectAllCheckboxChange()"
							class="select-checkbox">
						</n-checkbox>
					</th>
					<ng-container *ngFor="let column of model.header; let i = index">
						<th
							*ngIf="column.visible"
							[ngStyle]="column.style">
							<div class="header-item-wrapper">
								<span class="cell-ellipsis"
									(click)="sort.emit(i)">
									<span *ngIf="!column.template">{{column.data}}</span>
									<ng-template
										[ngTemplateOutlet]="column.template" [ngOutletContext]="{data: column.data}">
									</ng-template>
								</span>
								<span (click)="sort.emit(i)">
									<!-- arrow up -->
									<svg
										*ngIf="column.descending && column.sorted"
										xmlns="http://www.w3.org/2000/svg"
										class="icon--blue-sm"
										width="16"
										height="16"
										viewBox="0 0 16 16">
										<path d="M13.5 5.5L8 0 2.5 5.5l1 1 3.8-3.8V16h1.4V2.7l3.8 3.8z"/>
									</svg>
									<!-- arrow down -->
									<svg
										*ngIf="column.ascending && column.sorted"
										xmlns="http://www.w3.org/2000/svg"
										class="icon--blue-sm"
										width="16"
										height="16"
										viewBox="0 0 16 16">
										<path d="M13.5 10.5L8 16l-5.5-5.5 1-1 3.8 3.8V0h1.4v13.3l3.8-3.8z"/>
									</svg>
								</span>
								<button class="btn--unstyled col-actions"
									[ngClass]="{'filter-enabled': column.filterCount > 0}"
									*ngIf="column.filterTemplate"
									[nPopover]="column.filterTemplate"
									title="Filter"
									placement="right-bottom"
									popoverFilter="true"
									[appendToBody]="true">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="icon--sm"
										width="16"
										height="16"
										viewBox="0 0 16 16">
										<path d="M0 0v3l6 8v5h4v-5l6-8V0H0zm9 10.7V15H7v-4.3L1.3 3h13.5L9 10.7z"/>
									</svg>
									<span *ngIf="column.filterCount > 0" class="filter-count">
										{{column.filterCount}}
									</span>
								</button>
							</div>
						</th>
					</ng-container>
				</tr>
			</thead>
			<tbody [ngClass]="{striped: striped}" (scroll)="onScroll($event)">
				<ng-container *ngFor="let row of model.data; let i = index">
					<tr *ngIf="!model.isRowFiltered(i)"
						[ngClass]="{selected: model.rowsSelected[i]}">
						<td class="check-column" *ngIf="enableRowSelect">
							<n-checkbox
								class="select-checkbox"
								[(ngModel)]="model.rowsSelected[i]"
								(change)="onRowCheckboxChange()">
							</n-checkbox>
						</td>
						<ng-container *ngFor="let item of row; let i = index">
							<td *ngIf="model.header[i].visible"
								[ngStyle]="model.header[i].style">
								<span *ngIf="!item.template" class="cell-ellipsis">{{item.data}}</span>
								<ng-template
									[ngTemplateOutlet]="item.template" [ngOutletContext]="{data: item.data}">
								</ng-template>
							</td>
						</ng-container>
					</tr>
				</ng-container>
			</tbody>
		</table>
	</div>
	`,
	styleUrls: ["./table.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class Table {
	/**
	 * `TableModel` with data the table is to display.
	 *
	 * @type {TableModel}
	 * @memberof Table
	 */
	@Input() model: TableModel;

	/**
	 * Controls whether to show the selection checkboxes column or not.
	 *
	 * @memberof Table
	 */
	@Input() enableRowSelect = true;

	/**
	 * Distance (in px) from the bottom that view has to reach before
	 * `scrollLoad` event is emitted.
	 *
	 * @memberof Table
	 */
	@Input() scrollLoadDistance = 0;
	selectAllCheckbox = false;
	selectAllCheckboxSomeSelected = false;

	/**
	 * Set to `true` to make table rows striped.
	 *
	 * @memberof Table
	 */
	@Input() striped = false;

	/**
	 * Emits an index of the column that wants to be sorted.
	 *
	 * @memberof Table
	 */
	@Output() sort = new EventEmitter<number>();

	@Output() selectAll = new EventEmitter<Object>();
	@Output() selectRow = new EventEmitter<Object>();
	@Output() scrollLoad = new EventEmitter<TableModel>();
	@ViewChild("body") body;

	constructor(private applicationRef: ApplicationRef) {}

	onSelectAllCheckboxChange(event) {
		this.applicationRef.tick();  // give app time to process the click if needed
		if (this.selectAllCheckboxSomeSelected) {
			this.selectAllCheckbox = false; // clear all boxes
		}
		this.selectAllCheckboxSomeSelected = false;
		for (let i = 0; i < this.model.rowsSelected.length; i++) {
			this.model.rowsSelected[i] = this.selectAllCheckbox;
		}
	}
	onRowCheckboxChange() {
		let startValue = this.model.rowsSelected[0];

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

	onScroll(event) {
		const distanceFromBottom = event.target.scrollHeight - event.target.clientHeight - event.target.scrollTop;

		if (distanceFromBottom <= this.scrollLoadDistance) {
			this.scrollLoad.emit(this.model);
		}
	}
}
