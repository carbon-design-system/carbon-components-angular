import {
	Component,
	ApplicationRef,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	AfterViewInit,
	TemplateRef,
	OnDestroy,
	HostBinding
} from "@angular/core";
import { Subscription, fromEvent, Observable } from "rxjs";

import { TableModel } from "./table-model.class";
import { TableHeaderItem } from "./table-header-item.class";
import { TableItem } from "./table-item.class";

import { getFocusElementList, tabbableSelectorIgnoreTabIndex } from "carbon-components-angular/common";
import { I18n, Overridable } from "carbon-components-angular/i18n";
import { merge } from "carbon-components-angular/utils";
import { DataGridInteractionModel } from "./data-grid-interaction-model.class";
import { TableDomAdapter } from "./table-adapter.class";
import { TableRowSize } from "./table.types";

/**
 * Build your table with this component by extending things that differ from default.
 *
 * [See demo](../../?path=/story/components-table--basic)
 *
 * Instead of the usual write-your-own-html approach you had with `<table>`,
 * carbon table uses model-view-controller approach.
 *
 * Here, you create a view (with built-in controller) and provide it a model.
 * Changes you make to the model are reflected in the view. Provide same model you use
 * in the table to the `<cds-pagination>` components.
 * They provide a different view over the same data.
 *
 * ## Basic usage
 *
 * ```html
 * <cds-table [model]="model"></cds-table>
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
 * If you want to do your sorting on the backend or query for sorted data as a result of user
 * clicking the table header, check table [`sort`](#sort) output documentation
 *
 * See `TableHeaderItem` class for more information.
 *
 * ## No data template
 *
 * When table has no data to show, it can show a message you provide it instead.
 *
 * ```html
 * <cds-table [model]="model">No data.</cds-table>
 * ```
 *
 * ... will show `No data.` message, but you can get creative and provide any template you want
 * to replace table's default `tbody`.
 *
 * ## Use pagination as table footer
 *
 * ```html
 * <cds-pagination [model]="model" (selectPage)="selectPage($event)"></cds-pagination>
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
 */
@Component({
	selector: "cds-table, ibm-table",
	template: `
	<table
		cdsTable
		[sortable]="sortable"
		[noBorder]="noBorder"
		[ngClass]="{'cds--data-table--sticky-header': stickyHeader}"
		[size]="size"
		[striped]="striped"
		[skeleton]="skeleton"
		[attr.aria-labelledby]="ariaLabelledby"
		[attr.aria-describedby]="ariaDescribedby">
		<thead
			cdsTableHead
			[sortable]="sortable"
			(deselectAll)="onDeselectAll()"
			(selectAll)="onSelectAll()"
			(sort)="doSort($event)"
			[checkboxHeaderLabel]="getCheckboxHeaderLabel()"
			[filterTitle]="getFilterTitle()"
			[model]="model"
			[selectAllCheckbox]="selectAllCheckbox"
			[selectAllCheckboxSomeSelected]="selectAllCheckboxSomeSelected"
			[showSelectionColumn]="showSelectionColumn"
			[enableSingleSelect]="enableSingleSelect"
			[skeleton]="skeleton"
			[sortAscendingLabel]="sortAscendingLabel"
			[sortDescendingLabel]="sortDescendingLabel"
			[stickyHeader]="stickyHeader">
		</thead>
		<tbody
			cdsTableBody
			(deselectRow)="onSelectRow($event)"
			(scroll)="onScroll($event)"
			(selectRow)="onSelectRow($event)"
			[checkboxRowLabel]="getCheckboxRowLabel()"
			[enableSingleSelect]="enableSingleSelect"
			(rowClick)="onRowClick($event)"
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
					<div class="cds--loading cds--loading--small">
						<svg class="cds--loading__svg" viewBox="-75 -75 150 150">
							<circle class="cds--loading__stroke" cx="0" cy="0" r="37.5" />
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
	`,
	styles: [`
		:host {
			display: block;
		}
	`]
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
		if (element.firstElementChild && element.firstElementChild.classList.contains("cds--table-sort") && focusElementList.length > 1) {
			focusElementList[1].tabIndex = index;
		} else if (focusElementList.length > 0) {
			focusElementList[0].tabIndex = index;
		} else {
			element.tabIndex = index;
		}
	}

	static focus(element: HTMLElement) {
		const focusElementList = getFocusElementList(element, tabbableSelectorIgnoreTabIndex);
		if (element.firstElementChild && element.firstElementChild.classList.contains("cds--table-sort") && focusElementList.length > 1) {
			focusElementList[1].focus();
		} else if (focusElementList.length > 0) {
			focusElementList[0].focus();
		} else {
			element.focus();
		}
	}

	/**
	 * Id of the table header title element
	 */
	@Input() ariaLabelledby: string;
	/**
	 * Id of the table header description element
	 */
	@Input() ariaDescribedby: string;

	/**
	 * `TableModel` with data the table is to display.
	 */
	@Input()
	set model(m: TableModel) {
		if (this._model) {
			this.subscriptions.unsubscribe();
			// Need to create a new subscription instance here because unsubscribing prevents any new subscriptions
			// from being added for some reason. When a new model is set, none of the subscriptions would exist.
			this.subscriptions = new Subscription();
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
					const expandedRows = this.elementRef.nativeElement.querySelectorAll(".cds--expandable-row:not(.cds--parent-row)");
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
	@Input() size: TableRowSize = "md";
	/**
	 * Set to `true` for a loading table.
	 */
	@Input() skeleton = false;
	/**
	 * Set to `true` for a data grid with keyboard interactions.
	 */
	@Input() set isDataGrid(value: boolean) {
		this._isDataGrid = value;
		if (this.isViewReady) {
			if (value) {
				this.enableDataGridInteractions();
			} else {
				this.disableDataGridInteractions();
			}
		}
	}

	/**
	 * Setting sortable to false will disable all headers including headers which are sortable. Is is
	 * possible to set the sortable state on the header item to disable/enable sorting for only some headers.
	 */
	@Input() sortable = true;

	@Input() noBorder = true;

	get isDataGrid(): boolean {
		return this._isDataGrid;
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
	 * @todo - Enable column resize when Carbon officially supports feature
	 * Set to `true` to enable users to resize columns.
	 *
	 * Works for columns with width set in pixels.
	 *
	 */
	// @Input() columnsResizable = false;

	/**
	 * @todo - Enable columns drag & drop when Carbon officially supports feature
	 * Set to `true` to enable users to drag and drop columns.
	 *
	 * Changing the column order in table changes table model. Be aware of it when you add additional data
	 * to the model.
	 *
	 */
	// @Input() columnsDraggable = false;

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
	set translations(value) {
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
	 * Allows table content to scroll horizontally
	 */
	@HostBinding("class.cds--data-table-content") tableContent = true;

	/**
	 * Set to `true` to stick the header to the top of the table
	 */
	@HostBinding("class.cds--data-table_inner-container") @Input() stickyHeader = false;

	/**
	 * Set footer template to customize what is displayed in the tfoot section of the table
	 */
	@Input() footerTemplate: TemplateRef<any>;

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

	/**
	 * Emits an index of the column that wants to be sorted.
	 *
	 * If no observers are provided (default), table will attempt to do a simple sort of the data loaded
	 * into the model.
	 *
	 * If an observer is provided, table will not attempt any sorting of its own and it is up to the observer
	 * to sort the table. This is what you typically want if you're using a backend query to get the sorted
	 * data or want to sort data across multiple pages.
	 *
	 * Usage:
	 *
	 * ```typescript
	 * @Component({
	 * 	selector: "app-table",
	 * 	template: `
	 * 		<cds-table
	 * 			[model]="model"
	 * 			(sort)="simpleSort($event)">
	 * 			No data.
	 * 		</cds-table>
	 * 	`
	 * })
	 * export class TableApp implements OnInit, OnChanges {
	 * 	@Input() model = new TableModel();
	 *
	 * 	ngOnInit() {
	 * 		this.model.header = [
	 * 			new TableHeaderItem({ data: "Name" }),
	 * 			new TableHeaderItem({ data: "hwer" })
	 * 		];
	 *
	 * 		this.model.data = [
	 * 			[new TableItem({ data: "Name 1" }), new TableItem({ data: "qwer" })],
	 * 			[new TableItem({ data: "Name 3" }), new TableItem({ data: "zwer" })],
	 * 			[new TableItem({ data: "Name 2" }), new TableItem({ data: "swer" })],
	 * 			[new TableItem({ data: "Name 4" }), new TableItem({data: "twer"})],
	 * 			[new TableItem({ data: "Name 5" }), new TableItem({data: "twer"})],
	 * 			[new TableItem({ data: "Name 6" }), new TableItem({data: "twer"})]
	 * 		];
	 * 	}
	 *
	 * 	simpleSort(index: number) {
	 * 		// this function does a simple sort, which is the default for the table and if that's
	 * 		// all you want, you don't need to do this.
	 *
	 * 		// here you can query your backend and update the model.data based on the result
	 * 		if (this.model.header[index].sorted) {
	 * 			// if already sorted flip sorting direction
	 * 			this.model.header[index].ascending = this.model.header[index].descending;
	 * 		}
	 * 		this.model.sort(index);
	 * 	}
	 * }
	 * ```
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
	 * Emits if a row item excluding expandButtons, checkboxes, or radios is clicked.
	 */
	@Output() rowClick = new EventEmitter<number>();

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
	protected _isDataGrid = false;
	// flag to prevent getters/setters from querying the view before it's fully instantiated
	protected isViewReady = false;

	protected subscriptions = new Subscription();
	protected positionSubscription: Subscription;

	protected interactionModel: DataGridInteractionModel;
	protected interactionPositionSubscription: Subscription;

	protected _expandButtonAriaLabel = this.i18n.getOverridable("TABLE.EXPAND_BUTTON");
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
	) { }

	ngAfterViewInit() {
		this.isViewReady = true;
		if (this.isDataGrid) {
			this.enableDataGridInteractions();
		}
	}

	ngOnDestroy() {
		this.subscriptions.unsubscribe();
		if (this.positionSubscription) {
			this.positionSubscription.unsubscribe();
		}
	}

	enableDataGridInteractions() {
		// if we have an `interactioModel` we've already enabled datagrid
		if (this.interactionModel) {
			return;
		}
		const table = this.elementRef.nativeElement.querySelector("table") as HTMLTableElement;
		const tableAdapter = new TableDomAdapter(table);
		const keydownEventStream = fromEvent<KeyboardEvent>(table, "keydown");
		const clickEventStream = fromEvent<MouseEvent>(table, "click");
		this.interactionModel = new DataGridInteractionModel(keydownEventStream, clickEventStream, tableAdapter);
		this.positionSubscription = this.interactionModel.position.subscribe(event => {
			const [currentRow, currentColumn] = event.current;
			const [previousRow, previousColumn] = event.previous;

			const currentElement = tableAdapter.getCell(currentRow, currentColumn);
			Table.setTabIndex(currentElement, 0);

			// if the model has just initialized don't focus or reset anything
			if (previousRow === -1 || previousColumn === -1) { return; }
			// Make the previous cell unfocusable (if it's not the current)
			if (previousRow !== currentRow || previousColumn !== currentColumn) {
				const previousElement = tableAdapter.getCell(previousRow, previousColumn);
				Table.setTabIndex(previousElement, -1);
			}
			Table.focus(currentElement);
		});
		// call this after assigning `this.interactionModel` since it depends on it
		this.resetTabIndex();
	}

	disableDataGridInteractions() {
		// unsubscribe first so we don't cause the focus to fly around
		if (this.positionSubscription) {
			this.positionSubscription.unsubscribe();
		}
		// undo tab indexing (also resets the model)
		this.resetTabIndex(0);
		// null out the model ref
		this.interactionModel = null;
	}

	onSelectAll() {
		this.model.selectAll(true);
		this.selectAll.emit(this.model);
	}

	onDeselectAll() {
		this.model.selectAll(false);
		this.deselectAll.emit(this.model);
	}

	onSelectRow(event) {
		// check for the existence of the selectedRowIndex property
		if (Object.keys(event).includes("selectedRowIndex")) {
			if (this.enableSingleSelect) {
				this.model.selectAll(false);
			}
			this.model.selectRow(event.selectedRowIndex, true);
			this.selectRow.emit(event);
		} else {
			this.model.selectRow(event.deselectedRowIndex, false);
			this.deselectRow.emit(event);
		}
	}

	onRowClick(index: number) {
		this.rowClick.emit(index);
	}

	updateSelectAllCheckbox() {
		const selectedRowsCount = this.model.selectedRowsCount();

		if (selectedRowsCount <= 0) {
			// reset select all checkbox if nothing selected
			this.selectAllCheckbox = false;
			this.selectAllCheckboxSomeSelected = false;
		} else if (selectedRowsCount < this.model.data.length) {
			this.selectAllCheckbox = true;
			this.selectAllCheckboxSomeSelected = true;
		} else {
			this.selectAllCheckbox = true;
			this.selectAllCheckboxSomeSelected = false;
		}
	}

	resetTabIndex(newTabIndex = -1) {
		// ensure the view is ready for the reset before we preform the actual reset
		setTimeout(() => {
			// reset all the tabIndexes we can find
			const focusElementList = getFocusElementList(this.elementRef.nativeElement, tabbableSelectorIgnoreTabIndex);
			if (focusElementList) {
				focusElementList.forEach(tabbable => {
					tabbable.tabIndex = newTabIndex;
				});
			}
			// reset interaction model positions and tabIndexes
			if (this.interactionModel) {
				this.interactionModel.resetTabIndexes(newTabIndex);
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

	doSort(index: number) {
		if (this.sort.observers.length === 0) {
			// no sort provided so do the simple sort
			this.model.cycleSortState(index);
			this.model.sort(index);
		}

		this.sort.emit(index);
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
