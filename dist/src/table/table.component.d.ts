import { ApplicationRef, EventEmitter } from "@angular/core";
import { TableModel } from "./table.module";
/**
 * Build your table with this component by extending things that differ from default.
 *
 * demo: [https://angular.carbondesignsystem.com/?selectedKind=Table](https://angular.carbondesignsystem.com/?selectedKind=Table)
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
 * 	set filterCount(n) {}
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
 * private prepareData(data: Array<Array<any>>) {
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
 * @export
 * @class Table
 * @implements {AfterContentChecked}
 */
export declare class Table {
    private applicationRef;
    /**
     * Size of the table rows.
     *
     * @type {("sm" | "md" | "lg")}
     * @memberof Table
     */
    size: "sm" | "md" | "lg";
    /**
     * `TableModel` with data the table is to display.
     *
     * @type {TableModel}
     * @memberof Table
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
     * @memberof Table
     */
    showSelectionColumn: boolean;
    /**
     * Controls whether to enable multiple or single row selection.
     *
     * @type {boolean}
     * @memberof Table
     */
    enableSingleSelect: boolean;
    /**
     * Distance (in px) from the bottom that view has to reach before
     * `scrollLoad` event is emitted.
     *
     * @type {number}
     * @memberof Table
     */
    scrollLoadDistance: number;
    /**
     * Set to `true` to enable users to resize columns.
     *
     * Works for columns with width set in pixels.
     *
     * @memberof Table
     */
    columnsResizable: boolean;
    /**
     * Set to `true` to enable users to drag and drop columns.
     *
     * Changing the column order in table changes table model. Be aware of it when you add additional data
     * to the model.
     *
     * @memberof Table
     */
    columnsDraggable: boolean;
    /**
     * Controls if all checkboxes are viewed as selected.
     *
     * @type {boolean}
     * @memberof Table
     */
    selectAllCheckbox: boolean;
    /**
     * Controls the indeterminate state of the header checkbox.
     *
     * @type {boolean}
     * @memberof Table
     */
    selectAllCheckboxSomeSelected: boolean;
    /**
     * Set to `false` to remove table rows (zebra) stripes.
     *
     * @type {boolean}
     * @memberof Table
     */
    striped: boolean;
    /**
     * Emits an index of the column that wants to be sorted.
     *
     * @memberof Table
     */
    sort: EventEmitter<number>;
    /**
     * Emits if all rows are selected.
     *
     * @param {TableModel} model
     * @memberof Table
     */
    selectAll: EventEmitter<Object>;
    /**
     * Emits if all rows are deselected.
     *
     * @param {TableModel} model
     * @memberof Table
     */
    deselectAll: EventEmitter<Object>;
    /**
     * Emits if a single row is selected.
     *
     * @param {Object} ({model: this.model, selectedRowIndex: index})
     * @memberof Table
     */
    selectRow: EventEmitter<Object>;
    /**
     * Emits if a single row is deselected.
     *
     * @param {Object} ({model: this.model, deselectedRowIndex: index})
     * @memberof Table
     */
    deselectRow: EventEmitter<Object>;
    /**
     * Emits when table requires more data to be loaded.
     *
     * @param {TableModel} model
     * @memberof Table
     */
    scrollLoad: EventEmitter<TableModel>;
    private _model;
    private columnResizeWidth;
    private columnResizeMouseX;
    private mouseMoveSubscription;
    private mouseUpSubscription;
    private isColumnDragging;
    private columnDraggedHoverIndex;
    private columnDraggedPosition;
    /**
     * Creates an instance of Table.
     *
     * @param {ApplicationRef} applicationRef
     * @memberof Table
     */
    constructor(applicationRef: ApplicationRef);
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
     * @memberof Table
     */
    onSelectAllCheckboxChange(): void;
    /**
     * Triggered when a single row is clicked.
     * Updates the header checkbox state.
     * Emits the `selectRow` or `deselectRow` event.
     *
     * @param {number} index
     * @returns
     * @memberof Table
     */
    onRowCheckboxChange(index: number): void;
    /**
     * Triggered when the user scrolls on the `<tbody>` element.
     * Emits the `scrollLoad` event.
     *
     * @param {any} event
     * @memberof Table
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
     * @memberof Table
     */
    scrollToTop(event: any): void;
}
