import {
	Component,
	ApplicationRef,
	Input,
	Output,
	EventEmitter,
	ViewChildren,
	ElementRef,
	AfterViewInit,
	HostListener,
	TemplateRef
} from "@angular/core";
import { Subscription, fromEvent } from "rxjs";

import { TableModel } from "./table.module";
import { TableHeaderItem } from "./table-header-item.class";
import { TableItem } from "./table-item.class";
import { getScrollbarWidth } from "../common/utils";
import { getFocusElementList, tabbableSelectorIgnoreTabIndex } from "../common/tab.service";
import { I18n } from "./../i18n/i18n.module";

/**
 * Build your table with this component by extending things that differ from default.
 *
 * [See demo](../../?path=/story/table--basic)
 *
 * Instead of the usual write-your-own-html approach you had with `<table>`,
 * carbon table uses model-view-controller approach.
 *
 * Here, you create a view (with built-in controller) and provide it a model.
 * Changes you make to the model are reflected in the view. Provide same model you use
 * in the table to the `<ibm-pagination>` components.
 * They provide a different view over the same data.
 *
 * ## Basic usage
 *
 * ```html
 * <ibm-table [model]="model"></ibm-table>
 * ```
 *
 * ```typescript
 * public model = new TableModel();
 *
 * this.model.data = [
 * 	[new TableItem({data: "asdf"}), new TableItem({data: "qwer"})],
 * 	[new TableItem({data: "csdf"}), new TableItem({data: "zwer"})],
 * 	[new TableItem({data: "bsdf"}), new TableItem({data: "swer"})],
 * 	[new TableItem({data: "csdf"}), new TableItem({data: "twer"})]
 * ];
 * ```
 *
 * ## Customization
 *
 * If you have custom data in your table, you need a way to display it. You can do that
 * by providing a template to `TableItem`.
 *
 * ```html
 * <ng-template #customTableItemTemplate let-data="data">
 * 	<a [routerLink]="data.link">{{data.name}} {{data.surname}}</a>
 * </ng-template>
 * ```
 *
 * ```typescript
 * customTableItemTemplate: TemplateRef<any>;
 *
 * this.customModel.data = [
 * 	[new TableItem({data: "asdf"}), new TableItem({data: {name: "Lessy", link: "/table"}, template: this.customTableItemTemplate})],
 * 	[new TableItem({data: "csdf"}), new TableItem({data: "swer"})],
 * 	[new TableItem({data: "bsdf"}), new TableItem({data: {name: "Alice", surname: "Bob"}, template: this.customTableItemTemplate})],
 * 	[new TableItem({data: "csdf"}), new TableItem({data: "twer"})],
 * ];
 * ```
 *
 * ### Sorting and filtering
 *
 * In case you need custom sorting and/or filtering you should subclass `TableHeaderItem`
 * and override needed functions.
 *
 * ```typescript
 * class FilterableHeaderItem extends TableHeaderItem {
 * 	// custom filter function
 * 	filter(item: TableItem): boolean {
 * 		if (typeof item.data === "string" && item.data.toLowerCase().indexOf(this.filterData.data.toLowerCase()) >= 0 ||
 * 		item.data.name && item.data.name.toLowerCase().indexOf(this.filterData.data.toLowerCase()) >= 0 ||
 * 		item.data.surname && item.data.surname.toLowerCase().indexOf(this.filterData.data.toLowerCase()) >= 0) {
 * 			return false;
 * 		}
 * 		return true;
 * 	}
 *
 * 	set filterCount(n) {}
 * 	get filterCount() {
 * 		return (this.filterData && this.filterData.data && this.filterData.data.length > 0) ? 1 : 0;
 * 	}
 *
 * 	// used for custom sorting
 * 	compare(one: TableItem, two: TableItem) {
 * 		const stringOne = (one.data.name || one.data.surname || one.data).toLowerCase();
 * 		const stringTwo = (two.data.name || two.data.surname || two.data).toLowerCase();
 *
 * 		if (stringOne > stringTwo) {
 * 			return 1;
 * 		} else if (stringOne < stringTwo) {
 * 			return -1;
 * 		} else {
 * 			return 0;
 * 		}
 * 	}
 * }
 * ```
 *
 * See `TableHeaderItem` class for more information.
 *
 * ## No data template
 *
 * When table has no data to show, it can show a message you provide it instead.
 *
 * ```html
 * <ibm-table [model]="model">No data.</ibm-table>
 * ```
 *
 * ... will show `No data.` message, but you can get creative and provide any template you want
 * to replace table's default `tbody`.
 *
 * ## Use pagination as table footer
 *
 * ```html
 * <ibm-pagination [model]="model" (selectPage)="selectPage($event)"></ibm-pagination>
 * ```
 *
 * `selectPage()` function should fetch the data from backend, create new `data`, apply it to `model.data`,
 * and update `model.currentPage`.
 *
 * If the data your server returns is a two dimensional array of objects, it would look something like this:
 *
 * ```typescript
 * selectPage(page) {
 * 	this.getPage(page).then((data: Array<Array<any>>) => {
 * 		// set the data and update page
 * 		this.model.data = this.prepareData(data);
 * 		this.model.currentPage = page;
 * 	});
 * }
 *
 * protected prepareData(data: Array<Array<any>>) {
 * 	// create new data from the service data
 * 	let newData = [];
 * 	data.forEach(dataRow => {
 * 		let row = [];
 * 		dataRow.forEach(dataElement => {
 * 			row.push(new TableItem({
 * 				data: dataElement,
 * 				template: typeof dataElement === "string" ? undefined : this.paginationTableItemTemplate
 * 				// your template can handle all the data types so you don't have to conditionally set it
 * 				// you can also set different templates for different columns based on index
 * 			}));
 * 		});
 * 		newData.push(row);
 * 	});
 * 	return newData;
 * }
 * ```
 *
 * <example-url>../../iframe.html?id=table--basic</example-url>
 *
 * @export
 * @class Table
 * @implements {AfterContentChecked}
 */
@Component({
	selector: "ibm-table",
	template: `
	<table
	class="bx--data-table bx--data-table--sort"
	[ngClass]="{
		'bx--data-table--compact': size === 'sm',
		'bx--data-table--tall': size === 'lg',
		'bx--data-table--zebra': striped,
		'bx--skeleton': skeleton
	}">
		<thead>
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
						[draggable]="columnsDraggable"
						(dragstart)="columnDragStart($event, i)"
						(dragend)="columnDragEnd($event, i)"
						(click)="setIndex(i)">
						<div
							*ngIf="columnsResizable"
							class="column-resize-handle"
							(mousedown)="columnResizeStart($event, column)">
						</div>
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
						<div
						*ngIf="columnsDraggable && isColumnDragging"
						class="drop-area">
							<div
							*ngIf="columnDraggedHoverIndex == i && columnDraggedPosition == 'left'"
							class="drop-indicator-left"></div>
							<div
							class="drop-area-left"
							(dragenter)="columnDragEnter($event, 'left', i)"
							(dragleave)="columnDragLeave($event, 'left', i)"
							(dragover)="columnDragover($event, 'left', i)"
							(drop)="columnDrop($event, 'left', i)">
							</div>

							<div
							class="drop-area-right"
							(dragenter)="columnDragEnter($event, 'right', i)"
							(dragleave)="columnDragLeave($event, 'right', i)"
							(dragover)="columnDragover($event, 'right', i)"
							(drop)="columnDrop($event, 'right', i)">
							</div>
							<div
							*ngIf="columnDraggedHoverIndex == i && columnDraggedPosition == 'right'"
							class="drop-indicator-right"></div>
						</div>
					</th>
				</ng-container>
				<th *ngIf="!skeleton && stickyHeader" [ngStyle]="{'width': scrollbarWidth + 'px', 'padding': 0, 'border': 0}">
					<!--
						Scrollbar pushes body to the left so this header column is added to push
						the title bar the same amount and keep the header and body columns aligned.
					-->
				</th>
			</tr>
		</thead>
		<tbody
		*ngIf="!noData; else noDataTemplate"
		[ngStyle]="{'overflow-y': 'scroll'}"
		(scroll)="onScroll($event)">
			<ng-container *ngFor="let row of model.data; let i = index">
				<tr *ngIf="!model.isRowFiltered(i)"
					(click)="onRowSelect(i)"
					[attr.data-parent-row]="(model.isRowExpandable(i) ? 'true' : null)"
					[class]="model.rowsClass[i] ? model.rowsClass[i] : null"
					[ngClass]="{
						'bx--data-table--selected': model.rowsSelected[i],
						'bx--parent-row': model.isRowExpandable(i),
						'bx--expandable-row': model.rowsExpanded[i],
						'tbody_row--selectable': enableSingleSelect,
						'tbody_row--success': !model.rowsSelected[i] && model.rowsContext[i] === 'success',
						'tbody_row--warning': !model.rowsSelected[i] && model.rowsContext[i] === 'warning',
						'tbody_row--info': !model.rowsSelected[i] && model.rowsContext[i] === 'info',
						'tbody_row--error': !model.rowsSelected[i] && model.rowsContext[i] === 'error'
					}">
					<td
					*ngIf="model.hasExpandableRows()"
					class="bx--table-expand"
					[ibmDataGridFocus]="isDataGrid"
					[(columnIndex)]="columnIndex"
					[attr.data-previous-value]="(model.rowsExpanded[i] ? 'collapsed' : null)"
					(click)="setExpandIndex($event)">
						<button
						*ngIf="!skeleton && model.isRowExpandable(i)"
						class="bx--table-expand__button"
						[attr.aria-label]="expandButtonAriaLabel | async"
						(click)="model.expandRow(i, !model.rowsExpanded[i])">
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
							[(ngModel)]="model.rowsSelected[i]"
							(change)="onRowCheckboxChange(i)">
						</ibm-checkbox>
					</td>
					<ng-container *ngFor="let item of row; let j = index">
						<td *ngIf="model.header[j].visible"
							[class]="model.header[j].className"
							[ngStyle]="model.header[j].style"
							[ibmDataGridFocus]="isDataGrid"
							[(columnIndex)]="columnIndex"
							(click)="setIndex(j)">
							<span *ngIf="skeleton && i === 0"></span>
							<ng-container *ngIf="!skeleton && !item.template">{{item.data}}</ng-container>
							<ng-template
								*ngIf="!skeleton"
								[ngTemplateOutlet]="item.template" [ngTemplateOutletContext]="{data: item.data}">
							</ng-template>
						</td>
					</ng-container>
				</tr>
				<tr
				*ngIf="model.rowsExpanded[i] && !model.isRowFiltered(i)"
				class="bx--expandable-row"
				ibmExpandedRowHover
				[attr.data-child-row]="(model.rowsExpanded[i] ? 'true' : null)">
					<td
						[ibmDataGridFocus]="isDataGrid"
						[(columnIndex)]="columnIndex"
						[attr.colspan]="row.length + 2"
						(click)="setExpandIndex($event)">
						<ng-container *ngIf="!firstExpandedTemplateInRow(row)">{{firstExpandedDataInRow(row)}}</ng-container>
						<ng-template
							[ngTemplateOutlet]="firstExpandedTemplateInRow(row)"
							[ngTemplateOutletContext]="{data: firstExpandedDataInRow(row)}">
						</ng-template>
					</td>
				</tr>
			</ng-container>
		</tbody>
		<ng-template #noDataTemplate><ng-content></ng-content></ng-template>
		<tfoot>
			<ng-template
				[ngTemplateOutlet]="footerTemplate">
			</ng-template>
			<tr *ngIf="this.model.isLoading">
				<td class="table_loading-indicator">
					<div class="bx--loading bx--loading--small">
						<svg class="bx--loading__svg" viewBox="-75 -75 150 150">
							<circle class="bx--loading__stroke" cx="0" cy="0" r="37.5" />
						</svg>
					</div>
				</td>
			</tr>
			<tr *ngIf="this.model.isEnd">
				<td class="table_end-indicator">
					<h5>{{endOfDataText | async}}</h5>
					<button (click)="scrollToTop($event)" class="btn--secondary-sm">
						{{scrollTopText | async}}
					</button>
				</td>
			</tr>
		</tfoot>
	</table>
	`
})
export class Table implements AfterViewInit {
	/**
	 * Creates a skeleton model with a row and column count specified by the user
	 *
	 * Example:
	 *
	 * ```typescript
	 * this.model = Table.skeletonModel(5, 5);
	 * ```
	 *
	 * @param {number} rowCount
	 * @param {number} columnCount
	 */
	static skeletonModel(rowCount: number, columnCount: number) {
		const model = new TableModel();
		let header = new Array<TableHeaderItem>();
		let data = new Array<Array<TableItem>>();
		let row = new Array<TableItem>();

		for (let i = 0; i < columnCount; i++) {
			header.push(new TableHeaderItem());
			row.push(new TableItem());
		}
		for (let i = 0; i < rowCount - 1; i++) {
			data.push(row);
		}

		model.header = header;
		model.data = data;
		return model;
	}

	static setTabIndex(element: HTMLElement, index: -1 | 0) {
		const focusElementList = getFocusElementList(element, tabbableSelectorIgnoreTabIndex);
		if (element.firstElementChild && element.firstElementChild.classList.contains("bx--table-sort")) {
			focusElementList[1].tabIndex = index;
		} else if (focusElementList.length > 0) {
			focusElementList[0].tabIndex = index;
		} else {
			element.tabIndex = index;
		}
	}

	/**
	 * Size of the table rows.
	 *
	 * @type {("sm" | "md" | "lg")}
	 */
	@Input() size: "sm" | "md" | "lg" = "md";
	/**
	 * Set to `true` for a loading table.
	 */
	@Input() skeleton = false;
	/**
	 * Set to `true` for a data grid with keyboard interactions.
	 */
	@Input() isDataGrid = false;

	/**
	 * `TableModel` with data the table is to display.
	 *
	 * @type {TableModel}
	 */
	@Input()
	set model(m: TableModel) {
		if (this._model) {
			this._model.dataChange.unsubscribe();
			this._model.rowsSelectedChange.unsubscribe();
		}

		this._model = m;
		this._model.rowsSelectedChange.subscribe(() => this.updateSelectAllCheckbox());
		this._model.dataChange.subscribe(() => {
			this.updateSelectAllCheckbox();
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

	/**
	 * Controls whether to show the selection checkboxes column or not.
	 *
	 * @deprecated in the next major carbon-components-angular version in favour of
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
	 */
	@Input() showSelectionColumn = true;

	/**
	 * Controls whether to enable multiple or single row selection.
	 *
	 * @type {boolean}
	 */
	@Input() enableSingleSelect = false;

	/**
	 * Distance (in px) from the bottom that view has to reach before
	 * `scrollLoad` event is emitted.
	 *
	 * @type {number}
	 */
	@Input() scrollLoadDistance = 0;

	/**
	 * Set to `true` to enable users to resize columns.
	 *
	 * Works for columns with width set in pixels.
	 *
	 */
	@Input() columnsResizable = false;

	/**
	 * Set to `true` to enable users to drag and drop columns.
	 *
	 * Changing the column order in table changes table model. Be aware of it when you add additional data
	 * to the model.
	 *
	 */
	@Input() columnsDraggable = false;

	@Input()
	set expandButtonAriaLabel(value) {
		this._expandButtonAriaLabel.next(value);
	}
	get expandButtonAriaLabel() {
		return this._expandButtonAriaLabel;
	}
	@Input()
	set sortDescendingLabel(value) {
		this._sortDescendingLabel.next(value);
	}
	get sortDescendingLabel() {
		return this._sortDescendingLabel;
	}
	@Input()
	set sortAscendingLabel(value) {
		this._sortAscendingLabel.next(value);
	}
	get sortAscendingLabel() {
		return this._sortAscendingLabel;
	}

	/**
	 * Expects an object that contains some or all of:
	 * ```
	 * {
	 *		"FILTER": "Filter",
	 *		"END_OF_DATA": "You've reached the end of your content",
	 *		"SCROLL_TOP": "Scroll to top",
	 *		"CHECKBOX_HEADER": "Select all rows",
	 *		"CHECKBOX_ROW": "Select row"
	 * }
	 * ```
	 */
	@Input()
	set translations (value) {
		if (value.FILTER) {
			this.filterTitle.next(value.FILTER);
		}
		if (value.END_OF_DATA) {
			this.endOfDataText.next(value.END_OF_DATA);
		}
		if (value.SCROLL_TOP) {
			this.scrollTopText.next(value.SCROLL_TOP);
		}
		if (value.CHECKBOX_HEADER) {
			this.checkboxHeaderLabel.next(value.CHECKBOX_HEADER);
		}
		if (value.CHECKBOX_ROW) {
			this.checkboxRowLabel.next(value.CHECKBOX_ROW);
		}
	}

	checkboxHeaderLabel = this.i18n.get("TABLE.CHECKBOX_HEADER");
	checkboxRowLabel = this.i18n.get("TABLE.CHECKBOX_ROW");
	endOfDataText = this.i18n.get("TABLE.END_OF_DATA");
	scrollTopText = this.i18n.get("TABLE.SCROLL_TOP");
	filterTitle = this.i18n.get("TABLE.FILTER");

	/**
	 * Controls if all checkboxes are viewed as selected.
	 *
	 * @type {boolean}
	 */
	selectAllCheckbox = false;

	/**
	 * Controls the indeterminate state of the header checkbox.
	 *
	 * @type {boolean}
	 */
	selectAllCheckboxSomeSelected = false;

	/**
	 * Set to `false` to remove table rows (zebra) stripes.
	 *
	 * @type {boolean}
	 */
	@Input() striped = true;

	/**
	 * Set to `true` to stick the header to the top of the table
	 */
	@Input() stickyHeader = false;

	/**
	 * Set footer template to customize what is displayed in the tfoot section of the table
	 */
	@Input() footerTemplate: TemplateRef<any>;

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
	 * Emits an index of the column that wants to be sorted.
	 *
	 */
	@Output() sort = new EventEmitter<number>();

	/**
	 * Emits if all rows are selected.
	 *
	 * @param {TableModel} model
	 */
	@Output() selectAll = new EventEmitter<Object>();

	/**
	 * Emits if all rows are deselected.
	 *
	 * @param {TableModel} model
	 */
	@Output() deselectAll = new EventEmitter<Object>();

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
	 * Emits when table requires more data to be loaded.
	 *
	 * @param {TableModel} model
	 */
	@Output() scrollLoad = new EventEmitter<TableModel>();

	get noData() {
		return !this.model.data ||
			this.model.data.length === 0 ||
			this.model.data.length === 1 && this.model.data[0].length === 0;
	}

	columnIndex = 0;

	protected _model: TableModel;

	protected _expandButtonAriaLabel  = this.i18n.get("TABLE.EXPAND_BUTTON");
	protected _sortDescendingLabel = this.i18n.get("TABLE.SORT_DESCENDING");
	protected _sortAscendingLabel = this.i18n.get("TABLE.SORT_ASCENDING");

	protected columnResizeWidth: number;
	protected columnResizeMouseX: number;
	protected mouseMoveSubscription: Subscription;
	protected mouseUpSubscription: Subscription;

	protected isColumnDragging = false;
	protected columnDraggedHoverIndex = -1;
	protected columnDraggedPosition = "";

	/**
	 * Creates an instance of Table.
	 *
	 * @param {ApplicationRef} applicationRef
	 */
	constructor(protected elementRef: ElementRef, protected applicationRef: ApplicationRef, protected i18n: I18n) {}

	ngAfterViewInit() {
		if (this.isDataGrid) {
			this.handleTabIndex();
		}
	}

	columnResizeStart(event, column) {
		this.columnResizeWidth = parseInt(column.style.width, 10);
		this.columnResizeMouseX = event.clientX;
		event.preventDefault();

		this.mouseMoveSubscription = fromEvent(document.body, "mousemove").subscribe(event => {
			this.columnResizeProgress(event, column);
		});
		this.mouseUpSubscription = fromEvent(document.body, "mouseup").subscribe(event => {
			this.columnResizeEnd(event, column);
		});
	}

	columnResizeProgress(event, column) {
		const move = event.clientX - this.columnResizeMouseX;
		column.style.width = `${this.columnResizeWidth + move}px`;
	}

	columnResizeEnd(event, column) {
		this.mouseMoveSubscription.unsubscribe();
		this.mouseUpSubscription.unsubscribe();
	}

	onRowSelect(index: number) {
		if (!this.showSelectionColumn && this.enableSingleSelect) {
			this.model.rowsSelected.forEach((element, index) => {
				this.model.selectRow(index, false);
			});
			this.model.selectRow(index, !this.model.rowsSelected[index]);
			this.onRowCheckboxChange(index);
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
	 */
	onScroll(event) {
		const distanceFromBottom = event.target.scrollHeight - event.target.clientHeight - event.target.scrollTop;

		if (distanceFromBottom <= this.scrollLoadDistance) {
			this.scrollLoad.emit(this.model);
		} else {
			this.model.isEnd = false;
		}
	}

	columnDragStart(event, columnIndex) {
		this.isColumnDragging = true;
		this.columnDraggedHoverIndex = columnIndex;
		event.dataTransfer.setData("columnIndex", JSON.stringify(columnIndex));
	}

	columnDragEnd(event, columnIndex) {
		this.isColumnDragging = false;
		this.columnDraggedHoverIndex = -1;
	}

	columnDragEnter(event, position, columnIndex) {
		this.columnDraggedPosition = position;
		this.columnDraggedHoverIndex = columnIndex;
	}

	columnDragLeave(event, position, columnIndex) {
		this.columnDraggedPosition = "";
	}

	columnDragover(event, position, columnIndex) {
		this.columnDraggedHoverIndex = columnIndex;
		this.columnDraggedPosition = position;

		// needed to tell browser to allow dropping
		event.preventDefault();
	}

	columnDrop(event, position, columnIndex) {
		this.isColumnDragging = false;
		this.columnDraggedHoverIndex = -1;
		this.columnDraggedPosition = "";

		this.model.moveColumn(
			parseInt(event.dataTransfer.getData("columnIndex"), 10),
			columnIndex + (position === "right" ? 1 : 0)
		);
	}

	get scrollbarWidth() {
		return getScrollbarWidth();
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
	/**
	 * Triggered when the user scrolls on the `<tbody>` element.
	 * Emits the `scrollLoad` event.
	 *
	 * @param {any} event
	 */
	scrollToTop(event) {
		event.target.parentElement.parentElement.parentElement.parentElement.children[1].scrollTop = 0;
		this.model.isEnd = false;
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

	setIndex(columnIndex) {
		if (this.model.hasExpandableRows() && this.showSelectionColumn) {
			this.columnIndex = columnIndex + 2;
		} else if (this.model.hasExpandableRows() || this.showSelectionColumn) {
			this.columnIndex = columnIndex + 1;
		}
	}

	setCheckboxIndex() {
		if (this.model.hasExpandableRows()) {
			this.columnIndex = 1;
		} else {
			this.columnIndex = 0;
		}
	}

	setExpandIndex(event) {
		this.columnIndex = 0;
	}

	getSelectionLabelValue(row: TableItem[]) {
		if (!this.selectionLabelColumn) {
			return { value: this.i18n.get().TABLE.ROW };
		}
		return { value: row[this.selectionLabelColumn].data };
	}
}
