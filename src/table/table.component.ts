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
		ibmTable
		sortable="true"
		[size]="size"
		[striped]="striped"
		[skeleton]="skeleton">
		<thead
			ibmTableHead
			[model]="model"
			[showSelectionColumn]="showSelectionColumn"
			[selectAllCheckboxSomeSelected]="selectAllCheckboxSomeSelected"
			[selectAllCheckbox]="selectAllCheckbox"
			[(columnIndex)]="columnIndex"
			[skeleton]="skeleton"
			[isDataGrid]="isDataGrid"
			[checkboxHeaderLabel]="checkboxHeaderLabel"
			[sortDescendingLabel]="sortDescendingLabel"
			[sortAscendingLabel]="sortAscendingLabel"
			[filterTitle]="filterTitle"
			[stickyHeader]="stickyHeader"
			(index)="setIndex($event)"
			(expandIndex)="setExpandIndex(columnIndex)"
			(checkboxIndex)="setCheckboxIndex()"
			(sort)="sort.emit($event)"
			(selectAll)="selectAll.emit($event)"
			(deselectAll)="deselectAll.emit($event)">
		</thead>
		<tbody
			ibmTableBody
			[model]="model"
			[checkboxRowLabel]="checkboxRowLabel"
			[selectionLabelColumn]="selectionLabelColumn"
			[showSelectionColumn]="showSelectionColumn"
			[isDataGrid]="isDataGrid"
			[checkboxRowLabel]="checkboxRowLabel"
			[expandButtonAriaLabel]="expandButtonAriaLabel"
			[enableSingleSelect]="enableSingleSelect"
			[skeleton]="skeleton"
			*ngIf="!noData; else noDataTemplate"
			[ngStyle]="{'overflow-y': 'scroll'}"
			(scroll)="onScroll($event)"
			(selectRow)="onSelectRow($event)"
			(deselectRow)="onSelectRow($event)"
			[(columnIndex)]="columnIndex">
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
	 */
	@Input() showSelectionColumn = true;

	/**
	 * Controls whether to enable multiple or single row selection.
	 */
	@Input() enableSingleSelect = false;

	/**
	 * Distance (in px) from the bottom that view has to reach before
	 * `scrollLoad` event is emitted.
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

	@Input() expandButtonAriaLabel;
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
			this.checkboxRowLabel = value.CHECKBOX_ROW ;
		}
	}

	checkboxHeaderLabel = this.i18n.get("TABLE.CHECKBOX_HEADER");
	endOfDataText = this.i18n.get("TABLE.END_OF_DATA");
	scrollTopText = this.i18n.get("TABLE.SCROLL_TOP");
	filterTitle = this.i18n.get("TABLE.FILTER");
	// just get an initial value, the internal component will handle the rest
	checkboxRowLabel = this.i18n.get().TABLE.CHECKBOX_ROW;

	/**
	 * Controls if all checkboxes are viewed as selected.
	 */
	selectAllCheckbox = false;

	/**
	 * Controls the indeterminate state of the header checkbox.
	 */
	selectAllCheckboxSomeSelected = false;

	/**
	 * Set to `false` to remove table rows (zebra) stripes.
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
	 */
	@Output() scrollLoad = new EventEmitter<TableModel>();

	get noData() {
		return !this.model.data ||
			this.model.data.length === 0 ||
			this.model.data.length === 1 && this.model.data[0].length === 0;
	}

	columnIndex = 0;

	protected _model: TableModel;

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
	 */
	constructor(
		protected elementRef: ElementRef,
		protected applicationRef: ApplicationRef,
		protected i18n: I18n
	) {}

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

		this.model.selectAll(this.selectAllCheckbox);
	}

	/**
	 * Triggered when the user scrolls on the `<tbody>` element.
	 * Emits the `scrollLoad` event.
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

	/**
	 * Triggered when the user scrolls on the `<tbody>` element.
	 * Emits the `scrollLoad` event.
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

	setCheckboxIndex() {
		if (this.model.hasExpandableRows()) {
			this.columnIndex = 1;
		} else {
			this.columnIndex = 0;
		}
	}

	setExpandIndex() {
		this.columnIndex = 0;
	}

	setIndex(columnIndex) {
		if (this.model.hasExpandableRows() && this.showSelectionColumn) {
			this.columnIndex = columnIndex + 2;
		} else if (this.model.hasExpandableRows() || this.showSelectionColumn) {
			this.columnIndex = columnIndex + 1;
		}
	}

	onSelectRow(event) {
		if (Object.keys(event).includes("selectedRowIndex")) {
			this.model.selectRow(event.selectedRowIndex, true);
			this.selectRow.emit(event);
		} else {
			this.model.selectRow(event.deselectedRowIndex, false);
			this.deselectRow.emit(event);
		}
	}
}
