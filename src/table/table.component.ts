import {
	Component,
	ApplicationRef,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	AfterViewInit,
	TemplateRef,
	OnDestroy
} from "@angular/core";
import { Subscription, fromEvent, Observable } from "rxjs";

import { TableModel } from "./table.module";
import { TableHeaderItem } from "./table-header-item.class";
import { TableItem } from "./table-item.class";

import { getFocusElementList, tabbableSelectorIgnoreTabIndex } from "../common/tab.service";
import { I18n, Overridable } from "./../i18n/i18n.module";
import { merge } from "./../utils/object";
import { DataGridInteractionModel } from "./data-grid-interaction-model.class";
import { TableDomAdapter } from "./table-adapter.class";

export interface TableTranslations {
	FILTER: string;
	END_OF_DATA: string;
	SCROLL_TOP: string;
	CHECKBOX_HEADER: string;
	CHECKBOX_ROW: string;
}

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
			(deselectAll)="onDeselectAll()"
			(selectAll)="onSelectAll()"
			(sort)="sort.emit($event)"
			[checkboxHeaderLabel]="getCheckboxHeaderLabel()"
			[filterTitle]="getFilterTitle()"
			[model]="model"
			[size]="size"
			[selectAllCheckbox]="selectAllCheckbox"
			[selectAllCheckboxSomeSelected]="selectAllCheckboxSomeSelected"
			[showSelectionColumn]="showSelectionColumn"
			[skeleton]="skeleton"
			[sortAscendingLabel]="sortAscendingLabel"
			[sortDescendingLabel]="sortDescendingLabel"
			[stickyHeader]="stickyHeader">
		</thead>
		<tbody
			ibmTableBody
			(deselectRow)="onSelectRow($event)"
			(scroll)="onScroll($event)"
			(selectRow)="onSelectRow($event)"
			[checkboxRowLabel]="getCheckboxRowLabel()"
			[enableSingleSelect]="enableSingleSelect"
			[expandButtonAriaLabel]="expandButtonAriaLabel"
			[model]="model"
			[size]="size"
			[ngStyle]="{'overflow-y': 'scroll'}"
			[selectionLabelColumn]="selectionLabelColumn"
			[showSelectionColumn]="showSelectionColumn"
			[skeleton]="skeleton"
			*ngIf="!noData; else noDataTemplate">
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
					<h5>{{getEndOfDataText() | async}}</h5>
					<button (click)="scrollToTop($event)" class="btn--secondary-sm">
						{{getScrollTopText() | async}}
					</button>
				</td>
			</tr>
		</tfoot>
	</table>
	`
})
export class Table implements AfterViewInit, OnDestroy {
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

	static focus(element: HTMLElement) {
		const focusElementList = getFocusElementList(element, tabbableSelectorIgnoreTabIndex);
		if (element.firstElementChild && element.firstElementChild.classList.contains("bx--table-sort")) {
			focusElementList[1].focus();
		} else if (focusElementList.length > 0) {
			focusElementList[0].focus();
		} else {
			element.focus();
		}
	}

	/**
	 * `TableModel` with data the table is to display.
	 */
	@Input()
	set model(m: TableModel) {
		if (this._model) {
			this.subscriptions.unsubscribe();
		}

		this._model = m;

		const rowsChange = this._model.rowsSelectedChange.subscribe(() => this.updateSelectAllCheckbox());
		const dataChange = this._model.dataChange.subscribe(() => {
			if (this.isDataGrid) {
				this.resetTabIndex();
			}
			this.updateSelectAllCheckbox();
		});

		this.subscriptions.add(rowsChange);
		this.subscriptions.add(dataChange);

		if (this.isDataGrid) {
			const expandedChange = this._model.rowsExpandedChange.subscribe(() => {
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
			this.subscriptions.add(expandedChange);
		}
	}

	get model(): TableModel {
		return this._model;
	}

	/**
	 * Size of the table rows.
	 */
	@Input() size: "sm" | "sh" | "md" | "lg" = "md";
	/**
	 * Set to `true` for a loading table.
	 */
	@Input() skeleton = false;
	/**
	 * Set to `true` for a data grid with keyboard interactions.
	 */
	@Input() isDataGrid = false;

	/**
	 * Controls whether to show the selection checkboxes column or not.
	 *
	 * @deprecated in the next major carbon-components-angular version in favor of
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

	@Input()
	set expandButtonAriaLabel(value: string | Observable<string>) {
		this._expandButtonAriaLabel.override(value);
	}
	get expandButtonAriaLabel() {
		return this._expandButtonAriaLabel.value;
	}
	@Input()
	set sortDescendingLabel(value: string | Observable<string>) {
		this._sortDescendingLabel.override(value);
	}
	get sortDescendingLabel() {
		return this._sortDescendingLabel.value;
	}
	@Input()
	set sortAscendingLabel(value: string | Observable<string>) {
		this._sortAscendingLabel.override(value);
	}
	get sortAscendingLabel() {
		return this._sortAscendingLabel.value;
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
		const valueWithDefaults = merge(this.i18n.getMultiple("TABLE"), value);
		this._filterTitle.override(valueWithDefaults.FILTER);
		this._endOfDataText.override(valueWithDefaults.END_OF_DATA);
		this._scrollTopText.override(valueWithDefaults.SCROLL_TOP);
		this._checkboxHeaderLabel.override(valueWithDefaults.CHECKBOX_HEADER);
		this._checkboxRowLabel.override(valueWithDefaults.CHECKBOX_ROW);
	}

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
	 * @param model
	 */
	@Output() selectAll = new EventEmitter<Object>();

	/**
	 * Emits if all rows are deselected.
	 *
	 * @param model
	 */
	@Output() deselectAll = new EventEmitter<Object>();

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
	 * Emits when table requires more data to be loaded.
	 */
	@Output() scrollLoad = new EventEmitter<TableModel>();

	/**
	 * Controls if all checkboxes are viewed as selected.
	 */
	selectAllCheckbox = false;

	/**
	 * Controls the indeterminate state of the header checkbox.
	 */
	selectAllCheckboxSomeSelected = false;

	get noData() {
		return !this.model.data ||
			this.model.data.length === 0 ||
			this.model.data.length === 1 && this.model.data[0].length === 0;
	}

	public isColumnDragging = false;
	public columnDraggedHoverIndex = -1;
	public columnDraggedPosition = "";

	protected _model: TableModel;

	protected subscriptions = new Subscription();

	protected interactionModel: DataGridInteractionModel;
	protected interactionPositionSubscription: Subscription;

	protected _expandButtonAriaLabel  = this.i18n.getOverridable("TABLE.EXPAND_BUTTON");
	protected _sortDescendingLabel = this.i18n.getOverridable("TABLE.SORT_DESCENDING");
	protected _sortAscendingLabel = this.i18n.getOverridable("TABLE.SORT_ASCENDING");
	protected _checkboxHeaderLabel = this.i18n.getOverridable("TABLE.CHECKBOX_HEADER");
	protected _checkboxRowLabel = this.i18n.getOverridable("TABLE.CHECKBOX_ROW");
	protected _endOfDataText = this.i18n.getOverridable("TABLE.END_OF_DATA");
	protected _scrollTopText = this.i18n.getOverridable("TABLE.SCROLL_TOP");
	protected _filterTitle = this.i18n.getOverridable("TABLE.FILTER");

	protected columnResizeWidth: number;
	protected columnResizeMouseX: number;
	protected mouseMoveSubscription: Subscription;
	protected mouseUpSubscription: Subscription;

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
			const table = this.elementRef.nativeElement.querySelector("table") as HTMLTableElement;
			const tableAdapter = new TableDomAdapter(table);
			const keydownEventStream = fromEvent<KeyboardEvent>(table, "keydown");
			const clickEventStream = fromEvent<MouseEvent>(table, "click");
			this.interactionModel = new DataGridInteractionModel(keydownEventStream, clickEventStream, tableAdapter);
			this.interactionModel.position.subscribe(event => {
				const [currentRow, currentColumn] = event.current;
				const [previousRow, previousColumn] = event.previous;

				const currentElement = tableAdapter.getCell(currentRow, currentColumn);
				Table.setTabIndex(currentElement, 0);

				// if the model has just initialized don't focus or reset anything
				if (previousRow === -1 || previousColumn === -1) { return; }

				const previousElement = tableAdapter.getCell(previousRow, previousColumn);
				Table.setTabIndex(previousElement, -1);
				Table.focus(currentElement);
			});
			// call this after assigning `this.interactionModel` since it depends on it
			this.resetTabIndex();
		}
	}

	ngOnDestroy() {
		this.subscriptions.unsubscribe();
	}

	onSelectAll() {
		this.selectAll.emit(this.model);
		this.model.selectAll(true);
	}

	onDeselectAll() {
		this.deselectAll.emit(this.model);
		this.model.selectAll(false);
	}

	onSelectRow(event) {
		// check for the existence of the selectedRowIndex property
		if (Object.keys(event).includes("selectedRowIndex")) {
			this.model.selectRow(event.selectedRowIndex, true);
			this.selectRow.emit(event);

			if (!this.showSelectionColumn && this.enableSingleSelect) {
				const index = event.selectedRowIndex;
				this.model.rowsSelected.forEach((_, index) => {
					this.model.selectRow(index, false);
				});
				this.model.selectRow(index, !this.model.rowsSelected[index]);
			}
		} else {
			this.model.selectRow(event.deselectedRowIndex, false);
			this.deselectRow.emit(event);
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
		} else {
			this.selectAllCheckbox = true;
			this.selectAllCheckboxSomeSelected = false;
		}
	}

	resetTabIndex() {
		setTimeout(() => {
			// reset all the tabIndexes we can find
			const focusElementList = getFocusElementList(this.elementRef.nativeElement, tabbableSelectorIgnoreTabIndex);
			if (focusElementList.length > 0) {
				focusElementList.forEach(tabbable => {
					tabbable.tabIndex = -1;
				});
			}
			// reset interaction model positions and tabIndexes
			if (this.interactionModel) {
				this.interactionModel.resetTabIndexes();
			}
		});
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

	getSelectionLabelValue(row: TableItem[]) {
		if (!this.selectionLabelColumn) {
			return { value: this.i18n.get().TABLE.ROW };
		}
		return { value: row[this.selectionLabelColumn].data };
	}

	getExpandButtonAriaLabel() {
		return this._expandButtonAriaLabel.subject;
	}
	getSortDescendingLabel() {
		return this._sortDescendingLabel.subject;
	}
	getSortAscendingLabel() {
		return this._sortAscendingLabel.subject;
	}

	getCheckboxHeaderLabel() {
		return this._checkboxHeaderLabel.subject;
	}

	getCheckboxRowLabel() {
		return this._checkboxRowLabel.subject;
	}

	getEndOfDataText() {
		return this._endOfDataText.subject;
	}

	getScrollTopText() {
		return this._scrollTopText.subject;
	}

	getFilterTitle() {
		return this._filterTitle.subject;
	}

}
