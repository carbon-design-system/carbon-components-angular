import { ApplicationRef, EventEmitter, ElementRef, AfterViewInit, TemplateRef } from "@angular/core";
import { Subscription, Observable } from "rxjs";
import { TableModel } from "./table.module";
import { TableItem } from "./table-item.class";
import { I18n, Overridable } from "./../i18n/i18n.module";
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
 *
 * @export
 * @class Table
 * @implements {AfterContentChecked}
 */
export declare class Table implements AfterViewInit {
    protected elementRef: ElementRef;
    protected applicationRef: ApplicationRef;
    protected i18n: I18n;
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
    static skeletonModel(rowCount: number, columnCount: number): TableModel;
    static setTabIndex(element: HTMLElement, index: -1 | 0): void;
    /**
     * Size of the table rows.
     *
     * @type {("sm" | "md" | "lg")}
     */
    size: "sm" | "md" | "lg";
    /**
     * Set to `true` for a loading table.
     */
    skeleton: boolean;
    /**
     * Set to `true` for a data grid with keyboard interactions.
     */
    isDataGrid: boolean;
    /**
     * `TableModel` with data the table is to display.
     *
     * @type {TableModel}
     */
    model: TableModel;
    /**
     * Controls whether to show the selection checkboxes column or not.
     *
     * @deprecated in the next major carbon-components-angular version in favour of
     * `showSelectionColumn` because of new attribute `enableSingleSelect`
     *  please use `showSelectionColumn` instead
     */
    enableRowSelect: boolean;
    /**
     * Controls whether to show the selection checkboxes column or not.
     *
     * @type {boolean}
     */
    showSelectionColumn: boolean;
    /**
     * Controls whether to enable multiple or single row selection.
     *
     * @type {boolean}
     */
    enableSingleSelect: boolean;
    /**
     * Distance (in px) from the bottom that view has to reach before
     * `scrollLoad` event is emitted.
     *
     * @type {number}
     */
    scrollLoadDistance: number;
    /**
     * Set to `true` to enable users to resize columns.
     *
     * Works for columns with width set in pixels.
     *
     */
    columnsResizable: boolean;
    /**
     * Set to `true` to enable users to drag and drop columns.
     *
     * Changing the column order in table changes table model. Be aware of it when you add additional data
     * to the model.
     *
     */
    columnsDraggable: boolean;
    expandButtonAriaLabel: string | Observable<string>;
    sortDescendingLabel: string | Observable<string>;
    sortAscendingLabel: string | Observable<string>;
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
    translations: any;
    checkboxHeaderLabel: Overridable;
    checkboxRowLabel: Overridable;
    endOfDataText: Overridable;
    scrollTopText: Overridable;
    filterTitle: Overridable;
    /**
     * Controls if all checkboxes are viewed as selected.
     *
     * @type {boolean}
     */
    selectAllCheckbox: boolean;
    /**
     * Controls the indeterminate state of the header checkbox.
     *
     * @type {boolean}
     */
    selectAllCheckboxSomeSelected: boolean;
    /**
     * Set to `false` to remove table rows (zebra) stripes.
     *
     * @type {boolean}
     */
    striped: boolean;
    /**
     * Set to `true` to stick the header to the top of the table
     */
    stickyHeader: boolean;
    /**
     * Set footer template to customize what is displayed in the tfoot section of the table
     */
    footerTemplate: TemplateRef<any>;
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
    selectionLabelColumn: number;
    /**
     * Emits an index of the column that wants to be sorted.
     *
     */
    sort: EventEmitter<number>;
    /**
     * Emits if all rows are selected.
     *
     * @param {TableModel} model
     */
    selectAll: EventEmitter<Object>;
    /**
     * Emits if all rows are deselected.
     *
     * @param {TableModel} model
     */
    deselectAll: EventEmitter<Object>;
    /**
     * Emits if a single row is selected.
     *
     * @param {Object} ({model: this.model, selectedRowIndex: index})
     */
    selectRow: EventEmitter<Object>;
    /**
     * Emits if a single row is deselected.
     *
     * @param {Object} ({model: this.model, deselectedRowIndex: index})
     */
    deselectRow: EventEmitter<Object>;
    /**
     * Emits when table requires more data to be loaded.
     *
     * @param {TableModel} model
     */
    scrollLoad: EventEmitter<TableModel>;
    readonly noData: boolean;
    columnIndex: number;
    isColumnDragging: boolean;
    columnDraggedHoverIndex: number;
    columnDraggedPosition: string;
    protected _model: TableModel;
    protected _expandButtonAriaLabel: Overridable;
    protected _sortDescendingLabel: Overridable;
    protected _sortAscendingLabel: Overridable;
    protected columnResizeWidth: number;
    protected columnResizeMouseX: number;
    protected mouseMoveSubscription: Subscription;
    protected mouseUpSubscription: Subscription;
    /**
     * Creates an instance of Table.
     *
     * @param {ApplicationRef} applicationRef
     */
    constructor(elementRef: ElementRef, applicationRef: ApplicationRef, i18n: I18n);
    ngAfterViewInit(): void;
    columnResizeStart(event: any, column: any): void;
    columnResizeProgress(event: any, column: any): void;
    columnResizeEnd(event: any, column: any): void;
    onRowSelect(index: number): void;
    updateSelectAllCheckbox(): void;
    /**
     * Triggered whenever the header checkbox is clicked.
     * Updates all the checkboxes in the table view.
     * Emits the `selectAll` or `deselectAll` event.
     *
     */
    onSelectAllCheckboxChange(): void;
    /**
     * Triggered when a single row is clicked.
     * Updates the header checkbox state.
     * Emits the `selectRow` or `deselectRow` event.
     *
     * @param {number} index
     * @returns
     */
    onRowCheckboxChange(index: number): void;
    /**
     * Triggered when the user scrolls on the `<tbody>` element.
     * Emits the `scrollLoad` event.
     *
     * @param {any} event
     */
    onScroll(event: any): void;
    columnDragStart(event: any, columnIndex: any): void;
    columnDragEnd(event: any, columnIndex: any): void;
    columnDragEnter(event: any, position: any, columnIndex: any): void;
    columnDragLeave(event: any, position: any, columnIndex: any): void;
    columnDragover(event: any, position: any, columnIndex: any): void;
    columnDrop(event: any, position: any, columnIndex: any): void;
    readonly scrollbarWidth: number;
    firstExpandedDataInRow(row: any): any;
    firstExpandedTemplateInRow(row: any): any;
    /**
     * Triggered when the user scrolls on the `<tbody>` element.
     * Emits the `scrollLoad` event.
     *
     * @param {any} event
     */
    scrollToTop(event: any): void;
    handleTabIndex(): void;
    setIndex(columnIndex: any): void;
    setCheckboxIndex(): void;
    setExpandIndex(event: any): void;
    getSelectionLabelValue(row: TableItem[]): {
        value: any;
    };
    getExpandButtonAriaLabel(): Observable<string>;
    getSortDescendingLabel(): Observable<string>;
    getSortAscendingLabel(): Observable<string>;
}
