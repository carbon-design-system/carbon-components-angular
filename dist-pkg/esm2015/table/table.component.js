/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ApplicationRef, Input, Output, EventEmitter, ElementRef, TemplateRef } from "@angular/core";
import { fromEvent } from "rxjs";
import { TableModel } from "./table.module";
import { TableHeaderItem } from "./table-header-item.class";
import { TableItem } from "./table-item.class";
import { getScrollbarWidth } from "../common/utils";
import { getFocusElementList, tabbableSelectorIgnoreTabIndex } from "../common/tab.service";
import { I18n } from "./../i18n/i18n.module";
import { merge } from "./../utils/object";
/**
 * @record
 */
export function TableTranslations() { }
function TableTranslations_tsickle_Closure_declarations() {
    /** @type {?} */
    TableTranslations.prototype.FILTER;
    /** @type {?} */
    TableTranslations.prototype.END_OF_DATA;
    /** @type {?} */
    TableTranslations.prototype.SCROLL_TOP;
    /** @type {?} */
    TableTranslations.prototype.CHECKBOX_HEADER;
    /** @type {?} */
    TableTranslations.prototype.CHECKBOX_ROW;
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
 */
export class Table {
    /**
     * Creates an instance of Table.
     *
     * @param {?} elementRef
     * @param {?} applicationRef
     * @param {?} i18n
     */
    constructor(elementRef, applicationRef, i18n) {
        this.elementRef = elementRef;
        this.applicationRef = applicationRef;
        this.i18n = i18n;
        /**
         * Size of the table rows.
         *
         */
        this.size = "md";
        /**
         * Set to `true` for a loading table.
         */
        this.skeleton = false;
        /**
         * Set to `true` for a data grid with keyboard interactions.
         */
        this.isDataGrid = false;
        /**
         * Controls whether to show the selection checkboxes column or not.
         *
         */
        this.showSelectionColumn = true;
        /**
         * Controls whether to enable multiple or single row selection.
         *
         */
        this.enableSingleSelect = false;
        /**
         * Distance (in px) from the bottom that view has to reach before
         * `scrollLoad` event is emitted.
         *
         */
        this.scrollLoadDistance = 0;
        /**
         * Set to `true` to enable users to resize columns.
         *
         * Works for columns with width set in pixels.
         *
         */
        this.columnsResizable = false;
        /**
         * Set to `true` to enable users to drag and drop columns.
         *
         * Changing the column order in table changes table model. Be aware of it when you add additional data
         * to the model.
         *
         */
        this.columnsDraggable = false;
        this.checkboxHeaderLabel = this.i18n.getOverridable("TABLE.CHECKBOX_HEADER");
        this.checkboxRowLabel = this.i18n.getOverridable("TABLE.CHECKBOX_ROW");
        this.endOfDataText = this.i18n.getOverridable("TABLE.END_OF_DATA");
        this.scrollTopText = this.i18n.getOverridable("TABLE.SCROLL_TOP");
        this.filterTitle = this.i18n.getOverridable("TABLE.FILTER");
        /**
         * Controls if all checkboxes are viewed as selected.
         *
         */
        this.selectAllCheckbox = false;
        /**
         * Controls the indeterminate state of the header checkbox.
         *
         */
        this.selectAllCheckboxSomeSelected = false;
        /**
         * Set to `false` to remove table rows (zebra) stripes.
         *
         */
        this.striped = true;
        /**
         * Set to `true` to stick the header to the top of the table
         */
        this.stickyHeader = false;
        /**
         * Emits an index of the column that wants to be sorted.
         *
         */
        this.sort = new EventEmitter();
        /**
         * Emits if all rows are selected.
         *
         */
        this.selectAll = new EventEmitter();
        /**
         * Emits if all rows are deselected.
         *
         */
        this.deselectAll = new EventEmitter();
        /**
         * Emits if a single row is selected.
         *
         */
        this.selectRow = new EventEmitter();
        /**
         * Emits if a single row is deselected.
         *
         */
        this.deselectRow = new EventEmitter();
        /**
         * Emits when table requires more data to be loaded.
         *
         */
        this.scrollLoad = new EventEmitter();
        this.columnIndex = 0;
        this.isColumnDragging = false;
        this.columnDraggedHoverIndex = -1;
        this.columnDraggedPosition = "";
        this._expandButtonAriaLabel = this.i18n.getOverridable("TABLE.EXPAND_BUTTON");
        this._sortDescendingLabel = this.i18n.getOverridable("TABLE.SORT_DESCENDING");
        this._sortAscendingLabel = this.i18n.getOverridable("TABLE.SORT_ASCENDING");
    }
    /**
     * Creates a skeleton model with a row and column count specified by the user
     *
     * Example:
     *
     * ```typescript
     * this.model = Table.skeletonModel(5, 5);
     * ```
     *
     * @param {?} rowCount
     * @param {?} columnCount
     * @return {?}
     */
    static skeletonModel(rowCount, columnCount) {
        /** @type {?} */
        const model = new TableModel();
        /** @type {?} */
        let header = new Array();
        /** @type {?} */
        let data = new Array();
        /** @type {?} */
        let row = new Array();
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
    /**
     * @param {?} element
     * @param {?} index
     * @return {?}
     */
    static setTabIndex(element, index) {
        /** @type {?} */
        const focusElementList = getFocusElementList(element, tabbableSelectorIgnoreTabIndex);
        if (element.firstElementChild && element.firstElementChild.classList.contains("bx--table-sort")) {
            focusElementList[1].tabIndex = index;
        }
        else if (focusElementList.length > 0) {
            focusElementList[0].tabIndex = index;
        }
        else {
            element.tabIndex = index;
        }
    }
    /**
     * `TableModel` with data the table is to display.
     *
     * @param {?} m
     * @return {?}
     */
    set model(m) {
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
                    /** @type {?} */
                    const expandedRows = this.elementRef.nativeElement.querySelectorAll(".bx--expandable-row:not(.bx--parent-row)");
                    Array.from(expandedRows).forEach(row => {
                        if (row.firstElementChild.tabIndex === undefined || row.firstElementChild.tabIndex !== -1) {
                            row.firstElementChild.tabIndex = -1;
                        }
                    });
                });
            });
        }
    }
    /**
     * @return {?}
     */
    get model() {
        return this._model;
    }
    /**
     * Controls whether to show the selection checkboxes column or not.
     *
     * @deprecated in the next major carbon-components-angular version in favour of
     * `showSelectionColumn` because of new attribute `enableSingleSelect`
     *  please use `showSelectionColumn` instead
     * @param {?} value
     * @return {?}
     */
    set enableRowSelect(value) {
        this.showSelectionColumn = value;
    }
    /**
     * @return {?}
     */
    get enableRowSelect() {
        return this.showSelectionColumn;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set expandButtonAriaLabel(value) {
        this._expandButtonAriaLabel.override(value);
    }
    /**
     * @return {?}
     */
    get expandButtonAriaLabel() {
        return this._expandButtonAriaLabel.value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set sortDescendingLabel(value) {
        this._sortDescendingLabel.override(value);
    }
    /**
     * @return {?}
     */
    get sortDescendingLabel() {
        return this._sortDescendingLabel.value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set sortAscendingLabel(value) {
        this._sortAscendingLabel.override(value);
    }
    /**
     * @return {?}
     */
    get sortAscendingLabel() {
        return this._sortAscendingLabel.value;
    }
    /**
     * Expects an object that contains some or all of:
     * ```
     * {
     * 		"FILTER": "Filter",
     * 		"END_OF_DATA": "You've reached the end of your content",
     * 		"SCROLL_TOP": "Scroll to top",
     * 		"CHECKBOX_HEADER": "Select all rows",
     * 		"CHECKBOX_ROW": "Select row"
     * }
     * ```
     * @param {?} value
     * @return {?}
     */
    set translations(value) {
        /** @type {?} */
        const valueWithDefaults = merge(this.i18n.getMultiple("TABLE"), value);
        this.filterTitle.override(valueWithDefaults.FILTER);
        this.endOfDataText.override(valueWithDefaults.END_OF_DATA);
        this.scrollTopText.override(valueWithDefaults.SCROLL_TOP);
        this.checkboxHeaderLabel.override(valueWithDefaults.CHECKBOX_HEADER);
        this.checkboxRowLabel.override(valueWithDefaults.CHECKBOX_ROW);
    }
    /**
     * @return {?}
     */
    get noData() {
        return !this.model.data ||
            this.model.data.length === 0 ||
            this.model.data.length === 1 && this.model.data[0].length === 0;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.isDataGrid) {
            this.handleTabIndex();
        }
    }
    /**
     * @param {?} event
     * @param {?} column
     * @return {?}
     */
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
    /**
     * @param {?} event
     * @param {?} column
     * @return {?}
     */
    columnResizeProgress(event, column) {
        /** @type {?} */
        const move = event.clientX - this.columnResizeMouseX;
        column.style.width = `${this.columnResizeWidth + move}px`;
    }
    /**
     * @param {?} event
     * @param {?} column
     * @return {?}
     */
    columnResizeEnd(event, column) {
        this.mouseMoveSubscription.unsubscribe();
        this.mouseUpSubscription.unsubscribe();
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onRowSelect(index) {
        if (!this.showSelectionColumn && this.enableSingleSelect) {
            this.model.rowsSelected.forEach((element, index) => {
                this.model.selectRow(index, false);
            });
            this.model.selectRow(index, !this.model.rowsSelected[index]);
            this.onRowCheckboxChange(index);
        }
    }
    /**
     * @return {?}
     */
    updateSelectAllCheckbox() {
        /** @type {?} */
        const selectedRowsCount = this.model.selectedRowsCount();
        if (selectedRowsCount <= 0) {
            // reset select all checkbox if nothing selected
            this.selectAllCheckbox = false;
            this.selectAllCheckboxSomeSelected = false;
        }
        else if (selectedRowsCount < this.model.data.length) {
            this.selectAllCheckboxSomeSelected = true;
        }
    }
    /**
     * Triggered whenever the header checkbox is clicked.
     * Updates all the checkboxes in the table view.
     * Emits the `selectAll` or `deselectAll` event.
     *
     * @return {?}
     */
    onSelectAllCheckboxChange() {
        this.applicationRef.tick(); // give app time to process the click if needed
        if (this.selectAllCheckboxSomeSelected) {
            this.selectAllCheckbox = false; // clear all boxes
            this.deselectAll.emit(this.model);
        }
        else if (this.selectAllCheckbox) {
            this.selectAll.emit(this.model);
        }
        else {
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
     * @param {?} index
     * @return {?}
     */
    onRowCheckboxChange(index) {
        /** @type {?} */
        let startValue = this.model.rowsSelected[0];
        if (this.model.rowsSelected[index]) {
            this.selectRow.emit({ model: this.model, selectedRowIndex: index });
        }
        else {
            this.deselectRow.emit({ model: this.model, deselectedRowIndex: index });
        }
        for (let i = 1; i < this.model.rowsSelected.length; i++) {
            /** @type {?} */
            let one = this.model.rowsSelected[i];
            if (!!one !== !!startValue) { // !! essentially converts to boolean and we want undefined to be false
                // !! essentially converts to boolean and we want undefined to be false
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
     * @param {?} event
     * @return {?}
     */
    onScroll(event) {
        /** @type {?} */
        const distanceFromBottom = event.target.scrollHeight - event.target.clientHeight - event.target.scrollTop;
        if (distanceFromBottom <= this.scrollLoadDistance) {
            this.scrollLoad.emit(this.model);
        }
        else {
            this.model.isEnd = false;
        }
    }
    /**
     * @param {?} event
     * @param {?} columnIndex
     * @return {?}
     */
    columnDragStart(event, columnIndex) {
        this.isColumnDragging = true;
        this.columnDraggedHoverIndex = columnIndex;
        event.dataTransfer.setData("columnIndex", JSON.stringify(columnIndex));
    }
    /**
     * @param {?} event
     * @param {?} columnIndex
     * @return {?}
     */
    columnDragEnd(event, columnIndex) {
        this.isColumnDragging = false;
        this.columnDraggedHoverIndex = -1;
    }
    /**
     * @param {?} event
     * @param {?} position
     * @param {?} columnIndex
     * @return {?}
     */
    columnDragEnter(event, position, columnIndex) {
        this.columnDraggedPosition = position;
        this.columnDraggedHoverIndex = columnIndex;
    }
    /**
     * @param {?} event
     * @param {?} position
     * @param {?} columnIndex
     * @return {?}
     */
    columnDragLeave(event, position, columnIndex) {
        this.columnDraggedPosition = "";
    }
    /**
     * @param {?} event
     * @param {?} position
     * @param {?} columnIndex
     * @return {?}
     */
    columnDragover(event, position, columnIndex) {
        this.columnDraggedHoverIndex = columnIndex;
        this.columnDraggedPosition = position;
        // needed to tell browser to allow dropping
        event.preventDefault();
    }
    /**
     * @param {?} event
     * @param {?} position
     * @param {?} columnIndex
     * @return {?}
     */
    columnDrop(event, position, columnIndex) {
        this.isColumnDragging = false;
        this.columnDraggedHoverIndex = -1;
        this.columnDraggedPosition = "";
        this.model.moveColumn(parseInt(event.dataTransfer.getData("columnIndex"), 10), columnIndex + (position === "right" ? 1 : 0));
    }
    /**
     * @return {?}
     */
    get scrollbarWidth() {
        return getScrollbarWidth();
    }
    /**
     * @param {?} row
     * @return {?}
     */
    firstExpandedDataInRow(row) {
        /** @type {?} */
        const found = row.find(d => d.expandedData);
        if (found) {
            return found.expandedData;
        }
        return found;
    }
    /**
     * @param {?} row
     * @return {?}
     */
    firstExpandedTemplateInRow(row) {
        /** @type {?} */
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
     * @param {?} event
     * @return {?}
     */
    scrollToTop(event) {
        event.target.parentElement.parentElement.parentElement.parentElement.children[1].scrollTop = 0;
        this.model.isEnd = false;
    }
    /**
     * @return {?}
     */
    handleTabIndex() {
        setTimeout(() => {
            /** @type {?} */
            const focusElementList = getFocusElementList(this.elementRef.nativeElement, tabbableSelectorIgnoreTabIndex);
            if (focusElementList.length > 0) {
                focusElementList.forEach(tabbable => {
                    tabbable.tabIndex = -1;
                });
            }
            Array.from(this.elementRef.nativeElement.querySelectorAll("td, th")).forEach(cell => Table.setTabIndex(cell, -1));
            /** @type {?} */
            const rows = this.elementRef.nativeElement.firstElementChild.rows;
            if (Array.from(rows[0].querySelectorAll("th")).some(th => getFocusElementList(th, tabbableSelectorIgnoreTabIndex).length > 0)) {
                Table.setTabIndex(rows[0].querySelector("th"), 0);
            }
            else {
                Table.setTabIndex(rows[1].querySelector("td"), 0);
            }
        });
    }
    /**
     * @param {?} columnIndex
     * @return {?}
     */
    setIndex(columnIndex) {
        if (this.model.hasExpandableRows() && this.showSelectionColumn) {
            this.columnIndex = columnIndex + 2;
        }
        else if (this.model.hasExpandableRows() || this.showSelectionColumn) {
            this.columnIndex = columnIndex + 1;
        }
    }
    /**
     * @return {?}
     */
    setCheckboxIndex() {
        if (this.model.hasExpandableRows()) {
            this.columnIndex = 1;
        }
        else {
            this.columnIndex = 0;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    setExpandIndex(event) {
        this.columnIndex = 0;
    }
    /**
     * @param {?} row
     * @return {?}
     */
    getSelectionLabelValue(row) {
        if (!this.selectionLabelColumn) {
            return { value: this.i18n.get().TABLE.ROW };
        }
        return { value: row[this.selectionLabelColumn].data };
    }
    /**
     * @return {?}
     */
    getExpandButtonAriaLabel() {
        return this._expandButtonAriaLabel.subject;
    }
    /**
     * @return {?}
     */
    getSortDescendingLabel() {
        return this._sortDescendingLabel.subject;
    }
    /**
     * @return {?}
     */
    getSortAscendingLabel() {
        return this._sortAscendingLabel.subject;
    }
}
Table.decorators = [
    { type: Component, args: [{
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
						[attr.aria-label]="checkboxHeaderLabel.subject | async"
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
							[attr.aria-label]="(column.sorted && column.ascending ? getSortDescendingLabel() : getSortAscendingLabel()) | async"
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
							[title]="filterTitle.subject | async"
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
						[attr.aria-label]="getExpandButtonAriaLabel() | async"
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
							[aria-label]="checkboxRowLabel.subject | i18nReplace:getSelectionLabelValue(row) | async"
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
					<h5>{{endOfDataText.subject | async}}</h5>
					<button (click)="scrollToTop($event)" class="btn--secondary-sm">
						{{scrollTopText.subject | async}}
					</button>
				</td>
			</tr>
		</tfoot>
	</table>
	`
            }] }
];
/** @nocollapse */
Table.ctorParameters = () => [
    { type: ElementRef },
    { type: ApplicationRef },
    { type: I18n }
];
Table.propDecorators = {
    size: [{ type: Input }],
    skeleton: [{ type: Input }],
    isDataGrid: [{ type: Input }],
    model: [{ type: Input }],
    enableRowSelect: [{ type: Input }],
    showSelectionColumn: [{ type: Input }],
    enableSingleSelect: [{ type: Input }],
    scrollLoadDistance: [{ type: Input }],
    columnsResizable: [{ type: Input }],
    columnsDraggable: [{ type: Input }],
    expandButtonAriaLabel: [{ type: Input }],
    sortDescendingLabel: [{ type: Input }],
    sortAscendingLabel: [{ type: Input }],
    translations: [{ type: Input }],
    striped: [{ type: Input }],
    stickyHeader: [{ type: Input }],
    footerTemplate: [{ type: Input }],
    selectionLabelColumn: [{ type: Input }],
    sort: [{ type: Output }],
    selectAll: [{ type: Output }],
    deselectAll: [{ type: Output }],
    selectRow: [{ type: Output }],
    deselectRow: [{ type: Output }],
    scrollLoad: [{ type: Output }]
};
function Table_tsickle_Closure_declarations() {
    /**
     * Size of the table rows.
     *
     * @type {?}
     */
    Table.prototype.size;
    /**
     * Set to `true` for a loading table.
     * @type {?}
     */
    Table.prototype.skeleton;
    /**
     * Set to `true` for a data grid with keyboard interactions.
     * @type {?}
     */
    Table.prototype.isDataGrid;
    /**
     * Controls whether to show the selection checkboxes column or not.
     *
     * @type {?}
     */
    Table.prototype.showSelectionColumn;
    /**
     * Controls whether to enable multiple or single row selection.
     *
     * @type {?}
     */
    Table.prototype.enableSingleSelect;
    /**
     * Distance (in px) from the bottom that view has to reach before
     * `scrollLoad` event is emitted.
     *
     * @type {?}
     */
    Table.prototype.scrollLoadDistance;
    /**
     * Set to `true` to enable users to resize columns.
     *
     * Works for columns with width set in pixels.
     *
     * @type {?}
     */
    Table.prototype.columnsResizable;
    /**
     * Set to `true` to enable users to drag and drop columns.
     *
     * Changing the column order in table changes table model. Be aware of it when you add additional data
     * to the model.
     *
     * @type {?}
     */
    Table.prototype.columnsDraggable;
    /** @type {?} */
    Table.prototype.checkboxHeaderLabel;
    /** @type {?} */
    Table.prototype.checkboxRowLabel;
    /** @type {?} */
    Table.prototype.endOfDataText;
    /** @type {?} */
    Table.prototype.scrollTopText;
    /** @type {?} */
    Table.prototype.filterTitle;
    /**
     * Controls if all checkboxes are viewed as selected.
     *
     * @type {?}
     */
    Table.prototype.selectAllCheckbox;
    /**
     * Controls the indeterminate state of the header checkbox.
     *
     * @type {?}
     */
    Table.prototype.selectAllCheckboxSomeSelected;
    /**
     * Set to `false` to remove table rows (zebra) stripes.
     *
     * @type {?}
     */
    Table.prototype.striped;
    /**
     * Set to `true` to stick the header to the top of the table
     * @type {?}
     */
    Table.prototype.stickyHeader;
    /**
     * Set footer template to customize what is displayed in the tfoot section of the table
     * @type {?}
     */
    Table.prototype.footerTemplate;
    /**
     * Used to populate the row selection checkbox label with a useful value if set.
     *
     * Example:
     * ```
     * <ibm-table [selectionLabelColumn]="0"></ibm-table>
     * <!-- results in aria-label="Select first column value"
     * (where "first column value" is the value of the first column in the row -->
     * ```
     * @type {?}
     */
    Table.prototype.selectionLabelColumn;
    /**
     * Emits an index of the column that wants to be sorted.
     *
     * @type {?}
     */
    Table.prototype.sort;
    /**
     * Emits if all rows are selected.
     *
     * @type {?}
     */
    Table.prototype.selectAll;
    /**
     * Emits if all rows are deselected.
     *
     * @type {?}
     */
    Table.prototype.deselectAll;
    /**
     * Emits if a single row is selected.
     *
     * @type {?}
     */
    Table.prototype.selectRow;
    /**
     * Emits if a single row is deselected.
     *
     * @type {?}
     */
    Table.prototype.deselectRow;
    /**
     * Emits when table requires more data to be loaded.
     *
     * @type {?}
     */
    Table.prototype.scrollLoad;
    /** @type {?} */
    Table.prototype.columnIndex;
    /** @type {?} */
    Table.prototype.isColumnDragging;
    /** @type {?} */
    Table.prototype.columnDraggedHoverIndex;
    /** @type {?} */
    Table.prototype.columnDraggedPosition;
    /** @type {?} */
    Table.prototype._model;
    /** @type {?} */
    Table.prototype._expandButtonAriaLabel;
    /** @type {?} */
    Table.prototype._sortDescendingLabel;
    /** @type {?} */
    Table.prototype._sortAscendingLabel;
    /** @type {?} */
    Table.prototype.columnResizeWidth;
    /** @type {?} */
    Table.prototype.columnResizeMouseX;
    /** @type {?} */
    Table.prototype.mouseMoveSubscription;
    /** @type {?} */
    Table.prototype.mouseUpSubscription;
    /** @type {?} */
    Table.prototype.elementRef;
    /** @type {?} */
    Table.prototype.applicationRef;
    /** @type {?} */
    Table.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbInRhYmxlL3RhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxjQUFjLEVBQ2QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUVWLFdBQVcsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWdCLFNBQVMsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUUzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RixPQUFPLEVBQUUsSUFBSSxFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNmExQyxNQUFNOzs7Ozs7OztJQTBUTCxZQUFzQixVQUFzQixFQUFZLGNBQThCLEVBQVksSUFBVTtRQUF0RixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVksbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVksU0FBSSxHQUFK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blx0Q29tcG9uZW50LFxuXHRBcHBsaWNhdGlvblJlZixcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRFbGVtZW50UmVmLFxuXHRBZnRlclZpZXdJbml0LFxuXHRUZW1wbGF0ZVJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyBUYWJsZU1vZGVsIH0gZnJvbSBcIi4vdGFibGUubW9kdWxlXCI7XG5pbXBvcnQgeyBUYWJsZUhlYWRlckl0ZW0gfSBmcm9tIFwiLi90YWJsZS1oZWFkZXItaXRlbS5jbGFzc1wiO1xuaW1wb3J0IHsgVGFibGVJdGVtIH0gZnJvbSBcIi4vdGFibGUtaXRlbS5jbGFzc1wiO1xuaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyV2lkdGggfSBmcm9tIFwiLi4vY29tbW9uL3V0aWxzXCI7XG5pbXBvcnQgeyBnZXRGb2N1c0VsZW1lbnRMaXN0LCB0YWJiYWJsZVNlbGVjdG9ySWdub3JlVGFiSW5kZXggfSBmcm9tIFwiLi4vY29tbW9uL3RhYi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBJMThuLCBPdmVycmlkYWJsZSB9IGZyb20gXCIuLy4uL2kxOG4vaTE4bi5tb2R1bGVcIjtcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSBcIi4vLi4vdXRpbHMvb2JqZWN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVUcmFuc2xhdGlvbnMge1xuXHRGSUxURVI6IHN0cmluZztcblx0RU5EX09GX0RBVEE6IHN0cmluZztcblx0U0NST0xMX1RPUDogc3RyaW5nO1xuXHRDSEVDS0JPWF9IRUFERVI6IHN0cmluZztcblx0Q0hFQ0tCT1hfUk9XOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgeW91ciB0YWJsZSB3aXRoIHRoaXMgY29tcG9uZW50IGJ5IGV4dGVuZGluZyB0aGluZ3MgdGhhdCBkaWZmZXIgZnJvbSBkZWZhdWx0LlxuICpcbiAqIFtTZWUgZGVtb10oLi4vLi4vP3BhdGg9L3N0b3J5L3RhYmxlLS1iYXNpYylcbiAqXG4gKiBJbnN0ZWFkIG9mIHRoZSB1c3VhbCB3cml0ZS15b3VyLW93bi1odG1sIGFwcHJvYWNoIHlvdSBoYWQgd2l0aCBgPHRhYmxlPmAsXG4gKiBjYXJib24gdGFibGUgdXNlcyBtb2RlbC12aWV3LWNvbnRyb2xsZXIgYXBwcm9hY2guXG4gKlxuICogSGVyZSwgeW91IGNyZWF0ZSBhIHZpZXcgKHdpdGggYnVpbHQtaW4gY29udHJvbGxlcikgYW5kIHByb3ZpZGUgaXQgYSBtb2RlbC5cbiAqIENoYW5nZXMgeW91IG1ha2UgdG8gdGhlIG1vZGVsIGFyZSByZWZsZWN0ZWQgaW4gdGhlIHZpZXcuIFByb3ZpZGUgc2FtZSBtb2RlbCB5b3UgdXNlXG4gKiBpbiB0aGUgdGFibGUgdG8gdGhlIGA8aWJtLXBhZ2luYXRpb24+YCBjb21wb25lbnRzLlxuICogVGhleSBwcm92aWRlIGEgZGlmZmVyZW50IHZpZXcgb3ZlciB0aGUgc2FtZSBkYXRhLlxuICpcbiAqICMjIEJhc2ljIHVzYWdlXG4gKlxuICogYGBgaHRtbFxuICogPGlibS10YWJsZSBbbW9kZWxdPVwibW9kZWxcIj48L2libS10YWJsZT5cbiAqIGBgYFxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIHB1YmxpYyBtb2RlbCA9IG5ldyBUYWJsZU1vZGVsKCk7XG4gKlxuICogdGhpcy5tb2RlbC5kYXRhID0gW1xuICogXHRbbmV3IFRhYmxlSXRlbSh7ZGF0YTogXCJhc2RmXCJ9KSwgbmV3IFRhYmxlSXRlbSh7ZGF0YTogXCJxd2VyXCJ9KV0sXG4gKiBcdFtuZXcgVGFibGVJdGVtKHtkYXRhOiBcImNzZGZcIn0pLCBuZXcgVGFibGVJdGVtKHtkYXRhOiBcInp3ZXJcIn0pXSxcbiAqIFx0W25ldyBUYWJsZUl0ZW0oe2RhdGE6IFwiYnNkZlwifSksIG5ldyBUYWJsZUl0ZW0oe2RhdGE6IFwic3dlclwifSldLFxuICogXHRbbmV3IFRhYmxlSXRlbSh7ZGF0YTogXCJjc2RmXCJ9KSwgbmV3IFRhYmxlSXRlbSh7ZGF0YTogXCJ0d2VyXCJ9KV1cbiAqIF07XG4gKiBgYGBcbiAqXG4gKiAjIyBDdXN0b21pemF0aW9uXG4gKlxuICogSWYgeW91IGhhdmUgY3VzdG9tIGRhdGEgaW4geW91ciB0YWJsZSwgeW91IG5lZWQgYSB3YXkgdG8gZGlzcGxheSBpdC4gWW91IGNhbiBkbyB0aGF0XG4gKiBieSBwcm92aWRpbmcgYSB0ZW1wbGF0ZSB0byBgVGFibGVJdGVtYC5cbiAqXG4gKiBgYGBodG1sXG4gKiA8bmctdGVtcGxhdGUgI2N1c3RvbVRhYmxlSXRlbVRlbXBsYXRlIGxldC1kYXRhPVwiZGF0YVwiPlxuICogXHQ8YSBbcm91dGVyTGlua109XCJkYXRhLmxpbmtcIj57e2RhdGEubmFtZX19IHt7ZGF0YS5zdXJuYW1lfX08L2E+XG4gKiA8L25nLXRlbXBsYXRlPlxuICogYGBgXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogY3VzdG9tVGFibGVJdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gKlxuICogdGhpcy5jdXN0b21Nb2RlbC5kYXRhID0gW1xuICogXHRbbmV3IFRhYmxlSXRlbSh7ZGF0YTogXCJhc2RmXCJ9KSwgbmV3IFRhYmxlSXRlbSh7ZGF0YToge25hbWU6IFwiTGVzc3lcIiwgbGluazogXCIvdGFibGVcIn0sIHRlbXBsYXRlOiB0aGlzLmN1c3RvbVRhYmxlSXRlbVRlbXBsYXRlfSldLFxuICogXHRbbmV3IFRhYmxlSXRlbSh7ZGF0YTogXCJjc2RmXCJ9KSwgbmV3IFRhYmxlSXRlbSh7ZGF0YTogXCJzd2VyXCJ9KV0sXG4gKiBcdFtuZXcgVGFibGVJdGVtKHtkYXRhOiBcImJzZGZcIn0pLCBuZXcgVGFibGVJdGVtKHtkYXRhOiB7bmFtZTogXCJBbGljZVwiLCBzdXJuYW1lOiBcIkJvYlwifSwgdGVtcGxhdGU6IHRoaXMuY3VzdG9tVGFibGVJdGVtVGVtcGxhdGV9KV0sXG4gKiBcdFtuZXcgVGFibGVJdGVtKHtkYXRhOiBcImNzZGZcIn0pLCBuZXcgVGFibGVJdGVtKHtkYXRhOiBcInR3ZXJcIn0pXSxcbiAqIF07XG4gKiBgYGBcbiAqXG4gKiAjIyMgU29ydGluZyBhbmQgZmlsdGVyaW5nXG4gKlxuICogSW4gY2FzZSB5b3UgbmVlZCBjdXN0b20gc29ydGluZyBhbmQvb3IgZmlsdGVyaW5nIHlvdSBzaG91bGQgc3ViY2xhc3MgYFRhYmxlSGVhZGVySXRlbWBcbiAqIGFuZCBvdmVycmlkZSBuZWVkZWQgZnVuY3Rpb25zLlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGNsYXNzIEZpbHRlcmFibGVIZWFkZXJJdGVtIGV4dGVuZHMgVGFibGVIZWFkZXJJdGVtIHtcbiAqIFx0Ly8gY3VzdG9tIGZpbHRlciBmdW5jdGlvblxuICogXHRmaWx0ZXIoaXRlbTogVGFibGVJdGVtKTogYm9vbGVhbiB7XG4gKiBcdFx0aWYgKHR5cGVvZiBpdGVtLmRhdGEgPT09IFwic3RyaW5nXCIgJiYgaXRlbS5kYXRhLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLmZpbHRlckRhdGEuZGF0YS50b0xvd2VyQ2FzZSgpKSA+PSAwIHx8XG4gKiBcdFx0aXRlbS5kYXRhLm5hbWUgJiYgaXRlbS5kYXRhLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuZmlsdGVyRGF0YS5kYXRhLnRvTG93ZXJDYXNlKCkpID49IDAgfHxcbiAqIFx0XHRpdGVtLmRhdGEuc3VybmFtZSAmJiBpdGVtLmRhdGEuc3VybmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5maWx0ZXJEYXRhLmRhdGEudG9Mb3dlckNhc2UoKSkgPj0gMCkge1xuICogXHRcdFx0cmV0dXJuIGZhbHNlO1xuICogXHRcdH1cbiAqIFx0XHRyZXR1cm4gdHJ1ZTtcbiAqIFx0fVxuICpcbiAqIFx0c2V0IGZpbHRlckNvdW50KG4pIHt9XG4gKiBcdGdldCBmaWx0ZXJDb3VudCgpIHtcbiAqIFx0XHRyZXR1cm4gKHRoaXMuZmlsdGVyRGF0YSAmJiB0aGlzLmZpbHRlckRhdGEuZGF0YSAmJiB0aGlzLmZpbHRlckRhdGEuZGF0YS5sZW5ndGggPiAwKSA/IDEgOiAwO1xuICogXHR9XG4gKlxuICogXHQvLyB1c2VkIGZvciBjdXN0b20gc29ydGluZ1xuICogXHRjb21wYXJlKG9uZTogVGFibGVJdGVtLCB0d286IFRhYmxlSXRlbSkge1xuICogXHRcdGNvbnN0IHN0cmluZ09uZSA9IChvbmUuZGF0YS5uYW1lIHx8IG9uZS5kYXRhLnN1cm5hbWUgfHwgb25lLmRhdGEpLnRvTG93ZXJDYXNlKCk7XG4gKiBcdFx0Y29uc3Qgc3RyaW5nVHdvID0gKHR3by5kYXRhLm5hbWUgfHwgdHdvLmRhdGEuc3VybmFtZSB8fCB0d28uZGF0YSkudG9Mb3dlckNhc2UoKTtcbiAqXG4gKiBcdFx0aWYgKHN0cmluZ09uZSA+IHN0cmluZ1R3bykge1xuICogXHRcdFx0cmV0dXJuIDE7XG4gKiBcdFx0fSBlbHNlIGlmIChzdHJpbmdPbmUgPCBzdHJpbmdUd28pIHtcbiAqIFx0XHRcdHJldHVybiAtMTtcbiAqIFx0XHR9IGVsc2Uge1xuICogXHRcdFx0cmV0dXJuIDA7XG4gKiBcdFx0fVxuICogXHR9XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBTZWUgYFRhYmxlSGVhZGVySXRlbWAgY2xhc3MgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogIyMgTm8gZGF0YSB0ZW1wbGF0ZVxuICpcbiAqIFdoZW4gdGFibGUgaGFzIG5vIGRhdGEgdG8gc2hvdywgaXQgY2FuIHNob3cgYSBtZXNzYWdlIHlvdSBwcm92aWRlIGl0IGluc3RlYWQuXG4gKlxuICogYGBgaHRtbFxuICogPGlibS10YWJsZSBbbW9kZWxdPVwibW9kZWxcIj5ObyBkYXRhLjwvaWJtLXRhYmxlPlxuICogYGBgXG4gKlxuICogLi4uIHdpbGwgc2hvdyBgTm8gZGF0YS5gIG1lc3NhZ2UsIGJ1dCB5b3UgY2FuIGdldCBjcmVhdGl2ZSBhbmQgcHJvdmlkZSBhbnkgdGVtcGxhdGUgeW91IHdhbnRcbiAqIHRvIHJlcGxhY2UgdGFibGUncyBkZWZhdWx0IGB0Ym9keWAuXG4gKlxuICogIyMgVXNlIHBhZ2luYXRpb24gYXMgdGFibGUgZm9vdGVyXG4gKlxuICogYGBgaHRtbFxuICogPGlibS1wYWdpbmF0aW9uIFttb2RlbF09XCJtb2RlbFwiIChzZWxlY3RQYWdlKT1cInNlbGVjdFBhZ2UoJGV2ZW50KVwiPjwvaWJtLXBhZ2luYXRpb24+XG4gKiBgYGBcbiAqXG4gKiBgc2VsZWN0UGFnZSgpYCBmdW5jdGlvbiBzaG91bGQgZmV0Y2ggdGhlIGRhdGEgZnJvbSBiYWNrZW5kLCBjcmVhdGUgbmV3IGBkYXRhYCwgYXBwbHkgaXQgdG8gYG1vZGVsLmRhdGFgLFxuICogYW5kIHVwZGF0ZSBgbW9kZWwuY3VycmVudFBhZ2VgLlxuICpcbiAqIElmIHRoZSBkYXRhIHlvdXIgc2VydmVyIHJldHVybnMgaXMgYSB0d28gZGltZW5zaW9uYWwgYXJyYXkgb2Ygb2JqZWN0cywgaXQgd291bGQgbG9vayBzb21ldGhpbmcgbGlrZSB0aGlzOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIHNlbGVjdFBhZ2UocGFnZSkge1xuICogXHR0aGlzLmdldFBhZ2UocGFnZSkudGhlbigoZGF0YTogQXJyYXk8QXJyYXk8YW55Pj4pID0+IHtcbiAqIFx0XHQvLyBzZXQgdGhlIGRhdGEgYW5kIHVwZGF0ZSBwYWdlXG4gKiBcdFx0dGhpcy5tb2RlbC5kYXRhID0gdGhpcy5wcmVwYXJlRGF0YShkYXRhKTtcbiAqIFx0XHR0aGlzLm1vZGVsLmN1cnJlbnRQYWdlID0gcGFnZTtcbiAqIFx0fSk7XG4gKiB9XG4gKlxuICogcHJvdGVjdGVkIHByZXBhcmVEYXRhKGRhdGE6IEFycmF5PEFycmF5PGFueT4+KSB7XG4gKiBcdC8vIGNyZWF0ZSBuZXcgZGF0YSBmcm9tIHRoZSBzZXJ2aWNlIGRhdGFcbiAqIFx0bGV0IG5ld0RhdGEgPSBbXTtcbiAqIFx0ZGF0YS5mb3JFYWNoKGRhdGFSb3cgPT4ge1xuICogXHRcdGxldCByb3cgPSBbXTtcbiAqIFx0XHRkYXRhUm93LmZvckVhY2goZGF0YUVsZW1lbnQgPT4ge1xuICogXHRcdFx0cm93LnB1c2gobmV3IFRhYmxlSXRlbSh7XG4gKiBcdFx0XHRcdGRhdGE6IGRhdGFFbGVtZW50LFxuICogXHRcdFx0XHR0ZW1wbGF0ZTogdHlwZW9mIGRhdGFFbGVtZW50ID09PSBcInN0cmluZ1wiID8gdW5kZWZpbmVkIDogdGhpcy5wYWdpbmF0aW9uVGFibGVJdGVtVGVtcGxhdGVcbiAqIFx0XHRcdFx0Ly8geW91ciB0ZW1wbGF0ZSBjYW4gaGFuZGxlIGFsbCB0aGUgZGF0YSB0eXBlcyBzbyB5b3UgZG9uJ3QgaGF2ZSB0byBjb25kaXRpb25hbGx5IHNldCBpdFxuICogXHRcdFx0XHQvLyB5b3UgY2FuIGFsc28gc2V0IGRpZmZlcmVudCB0ZW1wbGF0ZXMgZm9yIGRpZmZlcmVudCBjb2x1bW5zIGJhc2VkIG9uIGluZGV4XG4gKiBcdFx0XHR9KSk7XG4gKiBcdFx0fSk7XG4gKiBcdFx0bmV3RGF0YS5wdXNoKHJvdyk7XG4gKiBcdH0pO1xuICogXHRyZXR1cm4gbmV3RGF0YTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIDxleGFtcGxlLXVybD4uLi8uLi9pZnJhbWUuaHRtbD9pZD10YWJsZS0tYmFzaWM8L2V4YW1wbGUtdXJsPlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBUYWJsZVxuICogQGltcGxlbWVudHMge0FmdGVyQ29udGVudENoZWNrZWR9XG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tdGFibGVcIixcblx0dGVtcGxhdGU6IGBcblx0PHRhYmxlXG5cdGNsYXNzPVwiYngtLWRhdGEtdGFibGUgYngtLWRhdGEtdGFibGUtLXNvcnRcIlxuXHRbbmdDbGFzc109XCJ7XG5cdFx0J2J4LS1kYXRhLXRhYmxlLS1jb21wYWN0Jzogc2l6ZSA9PT0gJ3NtJyxcblx0XHQnYngtLWRhdGEtdGFibGUtLXRhbGwnOiBzaXplID09PSAnbGcnLFxuXHRcdCdieC0tZGF0YS10YWJsZS0temVicmEnOiBzdHJpcGVkLFxuXHRcdCdieC0tc2tlbGV0b24nOiBza2VsZXRvblxuXHR9XCI+XG5cdFx0PHRoZWFkPlxuXHRcdFx0PHRyPlxuXHRcdFx0XHQ8dGhcblx0XHRcdFx0XHRjbGFzcz1cImJ4LS10YWJsZS1leHBhbmRcIlxuXHRcdFx0XHRcdCpuZ0lmPVwibW9kZWwuaGFzRXhwYW5kYWJsZVJvd3MoKVwiXG5cdFx0XHRcdFx0W2libURhdGFHcmlkRm9jdXNdPVwiaXNEYXRhR3JpZFwiXG5cdFx0XHRcdFx0Wyhjb2x1bW5JbmRleCldPVwiY29sdW1uSW5kZXhcIlxuXHRcdFx0XHRcdChjbGljayk9XCJzZXRFeHBhbmRJbmRleCgkZXZlbnQpXCI+XG5cdFx0XHRcdDwvdGg+XG5cdFx0XHRcdDx0aFxuXHRcdFx0XHRcdGNsYXNzPVwiYngtLXRhYmxlLWNvbHVtbi1jaGVja2JveFwiXG5cdFx0XHRcdFx0Km5nSWY9XCIhc2tlbGV0b24gJiYgc2hvd1NlbGVjdGlvbkNvbHVtblwiXG5cdFx0XHRcdFx0W2libURhdGFHcmlkRm9jdXNdPVwiaXNEYXRhR3JpZFwiXG5cdFx0XHRcdFx0Wyhjb2x1bW5JbmRleCldPVwiY29sdW1uSW5kZXhcIlxuXHRcdFx0XHRcdChjbGljayk9XCJzZXRDaGVja2JveEluZGV4KClcIlxuXHRcdFx0XHRcdHN0eWxlPVwid2lkdGg6IDEwcHg7XCI+XG5cdFx0XHRcdFx0PGlibS1jaGVja2JveFxuXHRcdFx0XHRcdFx0aW5saW5lPVwidHJ1ZVwiXG5cdFx0XHRcdFx0XHRbc2l6ZV09XCJzaXplICE9PSAoJ2xnJyA/ICdzbScgOiAnbWQnKVwiXG5cdFx0XHRcdFx0XHRbKG5nTW9kZWwpXT1cInNlbGVjdEFsbENoZWNrYm94XCJcblx0XHRcdFx0XHRcdFtpbmRldGVybWluYXRlXT1cInNlbGVjdEFsbENoZWNrYm94U29tZVNlbGVjdGVkXCJcblx0XHRcdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwiY2hlY2tib3hIZWFkZXJMYWJlbC5zdWJqZWN0IHwgYXN5bmNcIlxuXHRcdFx0XHRcdFx0KGNoYW5nZSk9XCJvblNlbGVjdEFsbENoZWNrYm94Q2hhbmdlKClcIj5cblx0XHRcdFx0XHQ8L2libS1jaGVja2JveD5cblx0XHRcdFx0PC90aD5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIG1vZGVsLmhlYWRlcjsgbGV0IGkgPSBpbmRleFwiPlxuXHRcdFx0XHRcdDx0aFxuXHRcdFx0XHRcdFx0W25nQ2xhc3NdPSd7XCJ0aGVhZF9hY3Rpb25cIjogY29sdW1uLmZpbHRlclRlbXBsYXRlIHx8IHRoaXMuc29ydC5vYnNlcnZlcnMubGVuZ3RoID4gMH0nXG5cdFx0XHRcdFx0XHQqbmdJZj1cImNvbHVtbi52aXNpYmxlXCJcblx0XHRcdFx0XHRcdFtjbGFzc109XCJjb2x1bW4uY2xhc3NOYW1lXCJcblx0XHRcdFx0XHRcdFtuZ1N0eWxlXT1cImNvbHVtbi5zdHlsZVwiXG5cdFx0XHRcdFx0XHRbaWJtRGF0YUdyaWRGb2N1c109XCJpc0RhdGFHcmlkXCJcblx0XHRcdFx0XHRcdFsoY29sdW1uSW5kZXgpXT1cImNvbHVtbkluZGV4XCJcblx0XHRcdFx0XHRcdFtkcmFnZ2FibGVdPVwiY29sdW1uc0RyYWdnYWJsZVwiXG5cdFx0XHRcdFx0XHQoZHJhZ3N0YXJ0KT1cImNvbHVtbkRyYWdTdGFydCgkZXZlbnQsIGkpXCJcblx0XHRcdFx0XHRcdChkcmFnZW5kKT1cImNvbHVtbkRyYWdFbmQoJGV2ZW50LCBpKVwiXG5cdFx0XHRcdFx0XHQoY2xpY2spPVwic2V0SW5kZXgoaSlcIj5cblx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0Km5nSWY9XCJjb2x1bW5zUmVzaXphYmxlXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJjb2x1bW4tcmVzaXplLWhhbmRsZVwiXG5cdFx0XHRcdFx0XHRcdChtb3VzZWRvd24pPVwiY29sdW1uUmVzaXplU3RhcnQoJGV2ZW50LCBjb2x1bW4pXCI+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJieC0tdGFibGUtc29ydFwiXG5cdFx0XHRcdFx0XHRcdCpuZ0lmPVwiIXNrZWxldG9uICYmIHRoaXMuc29ydC5vYnNlcnZlcnMubGVuZ3RoID4gMCAmJiBjb2x1bW4uc29ydGFibGVcIlxuXHRcdFx0XHRcdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cIihjb2x1bW4uc29ydGVkICYmIGNvbHVtbi5hc2NlbmRpbmcgPyBnZXRTb3J0RGVzY2VuZGluZ0xhYmVsKCkgOiBnZXRTb3J0QXNjZW5kaW5nTGFiZWwoKSkgfCBhc3luY1wiXG5cdFx0XHRcdFx0XHRcdGFyaWEtbGl2ZT1cInBvbGl0ZVwiXG5cdFx0XHRcdFx0XHRcdFtuZ0NsYXNzXT1cIntcblx0XHRcdFx0XHRcdFx0XHQnYngtLXRhYmxlLXNvcnQtLWFjdGl2ZSc6IGNvbHVtbi5zb3J0ZWQsXG5cdFx0XHRcdFx0XHRcdFx0J2J4LS10YWJsZS1zb3J0LS1hc2NlbmRpbmcnOiBjb2x1bW4uYXNjZW5kaW5nXG5cdFx0XHRcdFx0XHRcdH1cIlxuXHRcdFx0XHRcdFx0XHQoY2xpY2spPVwic29ydC5lbWl0KGkpXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRcdFx0Km5nSWY9XCIhY29sdW1uLnRlbXBsYXRlXCJcblx0XHRcdFx0XHRcdFx0XHRbdGl0bGVdPVwiY29sdW1uLmRhdGFcIlxuXHRcdFx0XHRcdFx0XHRcdHRhYmluZGV4PVwiLTFcIj5cblx0XHRcdFx0XHRcdFx0XHR7e2NvbHVtbi5kYXRhfX1cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGVcblx0XHRcdFx0XHRcdFx0XHRbbmdUZW1wbGF0ZU91dGxldF09XCJjb2x1bW4udGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2RhdGE6IGNvbHVtbi5kYXRhfVwiPlxuXHRcdFx0XHRcdFx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0Zm9jdXNhYmxlPVwiZmFsc2VcIlxuXHRcdFx0XHRcdFx0XHRcdHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cIndpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XCJcblx0XHRcdFx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImJ4LS10YWJsZS1zb3J0X19pY29uXCJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjE2XCJcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCIxNlwiXG5cdFx0XHRcdFx0XHRcdFx0dmlld0JveD1cIjAgMCAxNiAxNlwiXG5cdFx0XHRcdFx0XHRcdFx0YXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk0xMi4zIDkuM2wtMy44IDMuOFYxaC0xdjEyLjFMMy43IDkuMyAzIDEwbDUgNSA1LTV6XCI+PC9wYXRoPlxuXHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdFx0XHRcdGZvY3VzYWJsZT1cImZhbHNlXCJcblx0XHRcdFx0XHRcdFx0XHRwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9XCJ3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1wiXG5cdFx0XHRcdFx0XHRcdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJieC0tdGFibGUtc29ydF9faWNvbi11bnNvcnRlZFwiXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg9XCIxNlwiXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiMTZcIlxuXHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuXHRcdFx0XHRcdFx0XHRcdGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNMTMuOCAxMC4zTDEyIDEyLjFWMmgtMXYxMC4xbC0xLjgtMS44LS43LjcgMyAzIDMtM3pNNC41IDJsLTMgMyAuNy43TDQgMy45VjE0aDFWMy45bDEuOCAxLjguNy0uN3pcIj48L3BhdGg+XG5cdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImJ4LS10YWJsZS1oZWFkZXItbGFiZWxcIlxuXHRcdFx0XHRcdFx0XHQqbmdJZj1cIiFza2VsZXRvbiAmJiB0aGlzLnNvcnQub2JzZXJ2ZXJzLmxlbmd0aCA9PT0gMCB8fCAodGhpcy5zb3J0Lm9ic2VydmVycy5sZW5ndGggPiAwICYmICFjb2x1bW4uc29ydGFibGUpXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuICpuZ0lmPVwiIWNvbHVtbi50ZW1wbGF0ZVwiIFt0aXRsZV09XCJjb2x1bW4uZGF0YVwiPnt7Y29sdW1uLmRhdGF9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlXG5cdFx0XHRcdFx0XHRcdFx0W25nVGVtcGxhdGVPdXRsZXRdPVwiY29sdW1uLnRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntkYXRhOiBjb2x1bW4uZGF0YX1cIj5cblx0XHRcdFx0XHRcdFx0PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0W25nQ2xhc3NdPVwieydhY3RpdmUnOiBjb2x1bW4uZmlsdGVyQ291bnQgPiAwfVwiXG5cdFx0XHRcdFx0XHRcdCpuZ0lmPVwiY29sdW1uLmZpbHRlclRlbXBsYXRlXCJcblx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG5cdFx0XHRcdFx0XHRcdGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcblx0XHRcdFx0XHRcdFx0W2libVRvb2x0aXBdPVwiY29sdW1uLmZpbHRlclRlbXBsYXRlXCJcblx0XHRcdFx0XHRcdFx0dHJpZ2dlcj1cImNsaWNrXCJcblx0XHRcdFx0XHRcdFx0W3RpdGxlXT1cImZpbHRlclRpdGxlLnN1YmplY3QgfCBhc3luY1wiXG5cdFx0XHRcdFx0XHRcdHBsYWNlbWVudD1cImJvdHRvbSx0b3BcIlxuXHRcdFx0XHRcdFx0XHRbZGF0YV09XCJjb2x1bW4uZmlsdGVyRGF0YVwiPlxuXHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJpY29uLS1zbVwiXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg9XCIxNlwiXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiMTZcIlxuXHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwiTTAgMHYzbDYgOHY1aDR2LTVsNi04VjBIMHptOSAxMC43VjE1SDd2LTQuM0wxLjMgM2gxMy41TDkgMTAuN3pcIi8+XG5cdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiAqbmdJZj1cImNvbHVtbi5maWx0ZXJDb3VudCA+IDBcIj5cblx0XHRcdFx0XHRcdFx0XHR7e2NvbHVtbi5maWx0ZXJDb3VudH19XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0Km5nSWY9XCJjb2x1bW5zRHJhZ2dhYmxlICYmIGlzQ29sdW1uRHJhZ2dpbmdcIlxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJkcm9wLWFyZWFcIj5cblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHQqbmdJZj1cImNvbHVtbkRyYWdnZWRIb3ZlckluZGV4ID09IGkgJiYgY29sdW1uRHJhZ2dlZFBvc2l0aW9uID09ICdsZWZ0J1wiXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiZHJvcC1pbmRpY2F0b3ItbGVmdFwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiZHJvcC1hcmVhLWxlZnRcIlxuXHRcdFx0XHRcdFx0XHQoZHJhZ2VudGVyKT1cImNvbHVtbkRyYWdFbnRlcigkZXZlbnQsICdsZWZ0JywgaSlcIlxuXHRcdFx0XHRcdFx0XHQoZHJhZ2xlYXZlKT1cImNvbHVtbkRyYWdMZWF2ZSgkZXZlbnQsICdsZWZ0JywgaSlcIlxuXHRcdFx0XHRcdFx0XHQoZHJhZ292ZXIpPVwiY29sdW1uRHJhZ292ZXIoJGV2ZW50LCAnbGVmdCcsIGkpXCJcblx0XHRcdFx0XHRcdFx0KGRyb3ApPVwiY29sdW1uRHJvcCgkZXZlbnQsICdsZWZ0JywgaSlcIj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImRyb3AtYXJlYS1yaWdodFwiXG5cdFx0XHRcdFx0XHRcdChkcmFnZW50ZXIpPVwiY29sdW1uRHJhZ0VudGVyKCRldmVudCwgJ3JpZ2h0JywgaSlcIlxuXHRcdFx0XHRcdFx0XHQoZHJhZ2xlYXZlKT1cImNvbHVtbkRyYWdMZWF2ZSgkZXZlbnQsICdyaWdodCcsIGkpXCJcblx0XHRcdFx0XHRcdFx0KGRyYWdvdmVyKT1cImNvbHVtbkRyYWdvdmVyKCRldmVudCwgJ3JpZ2h0JywgaSlcIlxuXHRcdFx0XHRcdFx0XHQoZHJvcCk9XCJjb2x1bW5Ecm9wKCRldmVudCwgJ3JpZ2h0JywgaSlcIj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0Km5nSWY9XCJjb2x1bW5EcmFnZ2VkSG92ZXJJbmRleCA9PSBpICYmIGNvbHVtbkRyYWdnZWRQb3NpdGlvbiA9PSAncmlnaHQnXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJkcm9wLWluZGljYXRvci1yaWdodFwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC90aD5cblx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdDx0aCAqbmdJZj1cIiFza2VsZXRvbiAmJiBzdGlja3lIZWFkZXJcIiBbbmdTdHlsZV09XCJ7J3dpZHRoJzogc2Nyb2xsYmFyV2lkdGggKyAncHgnLCAncGFkZGluZyc6IDAsICdib3JkZXInOiAwfVwiPlxuXHRcdFx0XHRcdDwhLS1cblx0XHRcdFx0XHRcdFNjcm9sbGJhciBwdXNoZXMgYm9keSB0byB0aGUgbGVmdCBzbyB0aGlzIGhlYWRlciBjb2x1bW4gaXMgYWRkZWQgdG8gcHVzaFxuXHRcdFx0XHRcdFx0dGhlIHRpdGxlIGJhciB0aGUgc2FtZSBhbW91bnQgYW5kIGtlZXAgdGhlIGhlYWRlciBhbmQgYm9keSBjb2x1bW5zIGFsaWduZWQuXG5cdFx0XHRcdFx0LS0+XG5cdFx0XHRcdDwvdGg+XG5cdFx0XHQ8L3RyPlxuXHRcdDwvdGhlYWQ+XG5cdFx0PHRib2R5XG5cdFx0Km5nSWY9XCIhbm9EYXRhOyBlbHNlIG5vRGF0YVRlbXBsYXRlXCJcblx0XHRbbmdTdHlsZV09XCJ7J292ZXJmbG93LXknOiAnc2Nyb2xsJ31cIlxuXHRcdChzY3JvbGwpPVwib25TY3JvbGwoJGV2ZW50KVwiPlxuXHRcdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcm93IG9mIG1vZGVsLmRhdGE7IGxldCBpID0gaW5kZXhcIj5cblx0XHRcdFx0PHRyICpuZ0lmPVwiIW1vZGVsLmlzUm93RmlsdGVyZWQoaSlcIlxuXHRcdFx0XHRcdChjbGljayk9XCJvblJvd1NlbGVjdChpKVwiXG5cdFx0XHRcdFx0W2F0dHIuZGF0YS1wYXJlbnQtcm93XT1cIihtb2RlbC5pc1Jvd0V4cGFuZGFibGUoaSkgPyAndHJ1ZScgOiBudWxsKVwiXG5cdFx0XHRcdFx0W2NsYXNzXT1cIm1vZGVsLnJvd3NDbGFzc1tpXSA/IG1vZGVsLnJvd3NDbGFzc1tpXSA6IG51bGxcIlxuXHRcdFx0XHRcdFtuZ0NsYXNzXT1cIntcblx0XHRcdFx0XHRcdCdieC0tZGF0YS10YWJsZS0tc2VsZWN0ZWQnOiBtb2RlbC5yb3dzU2VsZWN0ZWRbaV0sXG5cdFx0XHRcdFx0XHQnYngtLXBhcmVudC1yb3cnOiBtb2RlbC5pc1Jvd0V4cGFuZGFibGUoaSksXG5cdFx0XHRcdFx0XHQnYngtLWV4cGFuZGFibGUtcm93JzogbW9kZWwucm93c0V4cGFuZGVkW2ldLFxuXHRcdFx0XHRcdFx0J3Rib2R5X3Jvdy0tc2VsZWN0YWJsZSc6IGVuYWJsZVNpbmdsZVNlbGVjdCxcblx0XHRcdFx0XHRcdCd0Ym9keV9yb3ctLXN1Y2Nlc3MnOiAhbW9kZWwucm93c1NlbGVjdGVkW2ldICYmIG1vZGVsLnJvd3NDb250ZXh0W2ldID09PSAnc3VjY2VzcycsXG5cdFx0XHRcdFx0XHQndGJvZHlfcm93LS13YXJuaW5nJzogIW1vZGVsLnJvd3NTZWxlY3RlZFtpXSAmJiBtb2RlbC5yb3dzQ29udGV4dFtpXSA9PT0gJ3dhcm5pbmcnLFxuXHRcdFx0XHRcdFx0J3Rib2R5X3Jvdy0taW5mbyc6ICFtb2RlbC5yb3dzU2VsZWN0ZWRbaV0gJiYgbW9kZWwucm93c0NvbnRleHRbaV0gPT09ICdpbmZvJyxcblx0XHRcdFx0XHRcdCd0Ym9keV9yb3ctLWVycm9yJzogIW1vZGVsLnJvd3NTZWxlY3RlZFtpXSAmJiBtb2RlbC5yb3dzQ29udGV4dFtpXSA9PT0gJ2Vycm9yJ1xuXHRcdFx0XHRcdH1cIj5cblx0XHRcdFx0XHQ8dGRcblx0XHRcdFx0XHQqbmdJZj1cIm1vZGVsLmhhc0V4cGFuZGFibGVSb3dzKClcIlxuXHRcdFx0XHRcdGNsYXNzPVwiYngtLXRhYmxlLWV4cGFuZFwiXG5cdFx0XHRcdFx0W2libURhdGFHcmlkRm9jdXNdPVwiaXNEYXRhR3JpZFwiXG5cdFx0XHRcdFx0Wyhjb2x1bW5JbmRleCldPVwiY29sdW1uSW5kZXhcIlxuXHRcdFx0XHRcdFthdHRyLmRhdGEtcHJldmlvdXMtdmFsdWVdPVwiKG1vZGVsLnJvd3NFeHBhbmRlZFtpXSA/ICdjb2xsYXBzZWQnIDogbnVsbClcIlxuXHRcdFx0XHRcdChjbGljayk9XCJzZXRFeHBhbmRJbmRleCgkZXZlbnQpXCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHQqbmdJZj1cIiFza2VsZXRvbiAmJiBtb2RlbC5pc1Jvd0V4cGFuZGFibGUoaSlcIlxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJieC0tdGFibGUtZXhwYW5kX19idXR0b25cIlxuXHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJnZXRFeHBhbmRCdXR0b25BcmlhTGFiZWwoKSB8IGFzeW5jXCJcblx0XHRcdFx0XHRcdChjbGljayk9XCJtb2RlbC5leHBhbmRSb3coaSwgIW1vZGVsLnJvd3NFeHBhbmRlZFtpXSlcIj5cblx0XHRcdFx0XHRcdFx0PGlibS1pY29uLWNoZXZyb24tcmlnaHQxNiBpbm5lckNsYXNzPVwiYngtLXRhYmxlLWV4cGFuZF9fc3ZnXCI+PC9pYm0taWNvbi1jaGV2cm9uLXJpZ2h0MTY+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdDx0ZFxuXHRcdFx0XHRcdFx0Km5nSWY9XCIhc2tlbGV0b24gJiYgc2hvd1NlbGVjdGlvbkNvbHVtblwiXG5cdFx0XHRcdFx0XHRbaWJtRGF0YUdyaWRGb2N1c109XCJpc0RhdGFHcmlkXCJcblx0XHRcdFx0XHRcdFsoY29sdW1uSW5kZXgpXT1cImNvbHVtbkluZGV4XCJcblx0XHRcdFx0XHRcdChjbGljayk9XCJzZXRDaGVja2JveEluZGV4KClcIj5cblx0XHRcdFx0XHRcdDxpYm0tY2hlY2tib3hcblx0XHRcdFx0XHRcdFx0aW5saW5lPVwidHJ1ZVwiXG5cdFx0XHRcdFx0XHRcdFthcmlhLWxhYmVsXT1cImNoZWNrYm94Um93TGFiZWwuc3ViamVjdCB8IGkxOG5SZXBsYWNlOmdldFNlbGVjdGlvbkxhYmVsVmFsdWUocm93KSB8IGFzeW5jXCJcblx0XHRcdFx0XHRcdFx0W3NpemVdPVwic2l6ZSAhPT0gKCdsZycgPyAnc20nIDogJ21kJylcIlxuXHRcdFx0XHRcdFx0XHRbKG5nTW9kZWwpXT1cIm1vZGVsLnJvd3NTZWxlY3RlZFtpXVwiXG5cdFx0XHRcdFx0XHRcdChjaGFuZ2UpPVwib25Sb3dDaGVja2JveENoYW5nZShpKVwiPlxuXHRcdFx0XHRcdFx0PC9pYm0tY2hlY2tib3g+XG5cdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHJvdzsgbGV0IGogPSBpbmRleFwiPlxuXHRcdFx0XHRcdFx0PHRkICpuZ0lmPVwibW9kZWwuaGVhZGVyW2pdLnZpc2libGVcIlxuXHRcdFx0XHRcdFx0XHRbY2xhc3NdPVwibW9kZWwuaGVhZGVyW2pdLmNsYXNzTmFtZVwiXG5cdFx0XHRcdFx0XHRcdFtuZ1N0eWxlXT1cIm1vZGVsLmhlYWRlcltqXS5zdHlsZVwiXG5cdFx0XHRcdFx0XHRcdFtpYm1EYXRhR3JpZEZvY3VzXT1cImlzRGF0YUdyaWRcIlxuXHRcdFx0XHRcdFx0XHRbKGNvbHVtbkluZGV4KV09XCJjb2x1bW5JbmRleFwiXG5cdFx0XHRcdFx0XHRcdChjbGljayk9XCJzZXRJbmRleChqKVwiPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiAqbmdJZj1cInNrZWxldG9uICYmIGkgPT09IDBcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCIhc2tlbGV0b24gJiYgIWl0ZW0udGVtcGxhdGVcIj57e2l0ZW0uZGF0YX19PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZVxuXHRcdFx0XHRcdFx0XHRcdCpuZ0lmPVwiIXNrZWxldG9uXCJcblx0XHRcdFx0XHRcdFx0XHRbbmdUZW1wbGF0ZU91dGxldF09XCJpdGVtLnRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntkYXRhOiBpdGVtLmRhdGF9XCI+XG5cdFx0XHRcdFx0XHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHQ8dHJcblx0XHRcdFx0Km5nSWY9XCJtb2RlbC5yb3dzRXhwYW5kZWRbaV0gJiYgIW1vZGVsLmlzUm93RmlsdGVyZWQoaSlcIlxuXHRcdFx0XHRjbGFzcz1cImJ4LS1leHBhbmRhYmxlLXJvd1wiXG5cdFx0XHRcdGlibUV4cGFuZGVkUm93SG92ZXJcblx0XHRcdFx0W2F0dHIuZGF0YS1jaGlsZC1yb3ddPVwiKG1vZGVsLnJvd3NFeHBhbmRlZFtpXSA/ICd0cnVlJyA6IG51bGwpXCI+XG5cdFx0XHRcdFx0PHRkXG5cdFx0XHRcdFx0XHRbaWJtRGF0YUdyaWRGb2N1c109XCJpc0RhdGFHcmlkXCJcblx0XHRcdFx0XHRcdFsoY29sdW1uSW5kZXgpXT1cImNvbHVtbkluZGV4XCJcblx0XHRcdFx0XHRcdFthdHRyLmNvbHNwYW5dPVwicm93Lmxlbmd0aCArIDJcIlxuXHRcdFx0XHRcdFx0KGNsaWNrKT1cInNldEV4cGFuZEluZGV4KCRldmVudClcIj5cblx0XHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCIhZmlyc3RFeHBhbmRlZFRlbXBsYXRlSW5Sb3cocm93KVwiPnt7Zmlyc3RFeHBhbmRlZERhdGFJblJvdyhyb3cpfX08L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZVxuXHRcdFx0XHRcdFx0XHRbbmdUZW1wbGF0ZU91dGxldF09XCJmaXJzdEV4cGFuZGVkVGVtcGxhdGVJblJvdyhyb3cpXCJcblx0XHRcdFx0XHRcdFx0W25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntkYXRhOiBmaXJzdEV4cGFuZGVkRGF0YUluUm93KHJvdyl9XCI+XG5cdFx0XHRcdFx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHQ8L3Rib2R5PlxuXHRcdDxuZy10ZW1wbGF0ZSAjbm9EYXRhVGVtcGxhdGU+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+XG5cdFx0PHRmb290PlxuXHRcdFx0PG5nLXRlbXBsYXRlXG5cdFx0XHRcdFtuZ1RlbXBsYXRlT3V0bGV0XT1cImZvb3RlclRlbXBsYXRlXCI+XG5cdFx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdFx0PHRyICpuZ0lmPVwidGhpcy5tb2RlbC5pc0xvYWRpbmdcIj5cblx0XHRcdFx0PHRkIGNsYXNzPVwidGFibGVfbG9hZGluZy1pbmRpY2F0b3JcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYngtLWxvYWRpbmcgYngtLWxvYWRpbmctLXNtYWxsXCI+XG5cdFx0XHRcdFx0XHQ8c3ZnIGNsYXNzPVwiYngtLWxvYWRpbmdfX3N2Z1wiIHZpZXdCb3g9XCItNzUgLTc1IDE1MCAxNTBcIj5cblx0XHRcdFx0XHRcdFx0PGNpcmNsZSBjbGFzcz1cImJ4LS1sb2FkaW5nX19zdHJva2VcIiBjeD1cIjBcIiBjeT1cIjBcIiByPVwiMzcuNVwiIC8+XG5cdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC90ZD5cblx0XHRcdDwvdHI+XG5cdFx0XHQ8dHIgKm5nSWY9XCJ0aGlzLm1vZGVsLmlzRW5kXCI+XG5cdFx0XHRcdDx0ZCBjbGFzcz1cInRhYmxlX2VuZC1pbmRpY2F0b3JcIj5cblx0XHRcdFx0XHQ8aDU+e3tlbmRPZkRhdGFUZXh0LnN1YmplY3QgfCBhc3luY319PC9oNT5cblx0XHRcdFx0XHQ8YnV0dG9uIChjbGljayk9XCJzY3JvbGxUb1RvcCgkZXZlbnQpXCIgY2xhc3M9XCJidG4tLXNlY29uZGFyeS1zbVwiPlxuXHRcdFx0XHRcdFx0e3tzY3JvbGxUb3BUZXh0LnN1YmplY3QgfCBhc3luY319XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHQ8L3RyPlxuXHRcdDwvdGZvb3Q+XG5cdDwvdGFibGU+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgVGFibGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBza2VsZXRvbiBtb2RlbCB3aXRoIGEgcm93IGFuZCBjb2x1bW4gY291bnQgc3BlY2lmaWVkIGJ5IHRoZSB1c2VyXG5cdCAqXG5cdCAqIEV4YW1wbGU6XG5cdCAqXG5cdCAqIGBgYHR5cGVzY3JpcHRcblx0ICogdGhpcy5tb2RlbCA9IFRhYmxlLnNrZWxldG9uTW9kZWwoNSwgNSk7XG5cdCAqIGBgYFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gcm93Q291bnRcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbkNvdW50XG5cdCAqL1xuXHRzdGF0aWMgc2tlbGV0b25Nb2RlbChyb3dDb3VudDogbnVtYmVyLCBjb2x1bW5Db3VudDogbnVtYmVyKSB7XG5cdFx0Y29uc3QgbW9kZWwgPSBuZXcgVGFibGVNb2RlbCgpO1xuXHRcdGxldCBoZWFkZXIgPSBuZXcgQXJyYXk8VGFibGVIZWFkZXJJdGVtPigpO1xuXHRcdGxldCBkYXRhID0gbmV3IEFycmF5PEFycmF5PFRhYmxlSXRlbT4+KCk7XG5cdFx0bGV0IHJvdyA9IG5ldyBBcnJheTxUYWJsZUl0ZW0+KCk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbkNvdW50OyBpKyspIHtcblx0XHRcdGhlYWRlci5wdXNoKG5ldyBUYWJsZUhlYWRlckl0ZW0oKSk7XG5cdFx0XHRyb3cucHVzaChuZXcgVGFibGVJdGVtKCkpO1xuXHRcdH1cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJvd0NvdW50IC0gMTsgaSsrKSB7XG5cdFx0XHRkYXRhLnB1c2gocm93KTtcblx0XHR9XG5cblx0XHRtb2RlbC5oZWFkZXIgPSBoZWFkZXI7XG5cdFx0bW9kZWwuZGF0YSA9IGRhdGE7XG5cdFx0cmV0dXJuIG1vZGVsO1xuXHR9XG5cblx0c3RhdGljIHNldFRhYkluZGV4KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBpbmRleDogLTEgfCAwKSB7XG5cdFx0Y29uc3QgZm9jdXNFbGVtZW50TGlzdCA9IGdldEZvY3VzRWxlbWVudExpc3QoZWxlbWVudCwgdGFiYmFibGVTZWxlY3Rvcklnbm9yZVRhYkluZGV4KTtcblx0XHRpZiAoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCAmJiBlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcImJ4LS10YWJsZS1zb3J0XCIpKSB7XG5cdFx0XHRmb2N1c0VsZW1lbnRMaXN0WzFdLnRhYkluZGV4ID0gaW5kZXg7XG5cdFx0fSBlbHNlIGlmIChmb2N1c0VsZW1lbnRMaXN0Lmxlbmd0aCA+IDApIHtcblx0XHRcdGZvY3VzRWxlbWVudExpc3RbMF0udGFiSW5kZXggPSBpbmRleDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbWVudC50YWJJbmRleCA9IGluZGV4O1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTaXplIG9mIHRoZSB0YWJsZSByb3dzLlxuXHQgKlxuXHQgKiBAdHlwZSB7KFwic21cIiB8IFwibWRcIiB8IFwibGdcIil9XG5cdCAqL1xuXHRASW5wdXQoKSBzaXplOiBcInNtXCIgfCBcIm1kXCIgfCBcImxnXCIgPSBcIm1kXCI7XG5cdC8qKlxuXHQgKiBTZXQgdG8gYHRydWVgIGZvciBhIGxvYWRpbmcgdGFibGUuXG5cdCAqL1xuXHRASW5wdXQoKSBza2VsZXRvbiA9IGZhbHNlO1xuXHQvKipcblx0ICogU2V0IHRvIGB0cnVlYCBmb3IgYSBkYXRhIGdyaWQgd2l0aCBrZXlib2FyZCBpbnRlcmFjdGlvbnMuXG5cdCAqL1xuXHRASW5wdXQoKSBpc0RhdGFHcmlkID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIGBUYWJsZU1vZGVsYCB3aXRoIGRhdGEgdGhlIHRhYmxlIGlzIHRvIGRpc3BsYXkuXG5cdCAqXG5cdCAqIEB0eXBlIHtUYWJsZU1vZGVsfVxuXHQgKi9cblx0QElucHV0KClcblx0c2V0IG1vZGVsKG06IFRhYmxlTW9kZWwpIHtcblx0XHRpZiAodGhpcy5fbW9kZWwpIHtcblx0XHRcdHRoaXMuX21vZGVsLmRhdGFDaGFuZ2UudW5zdWJzY3JpYmUoKTtcblx0XHRcdHRoaXMuX21vZGVsLnJvd3NTZWxlY3RlZENoYW5nZS51bnN1YnNjcmliZSgpO1xuXHRcdH1cblxuXHRcdHRoaXMuX21vZGVsID0gbTtcblx0XHR0aGlzLl9tb2RlbC5yb3dzU2VsZWN0ZWRDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlU2VsZWN0QWxsQ2hlY2tib3goKSk7XG5cdFx0dGhpcy5fbW9kZWwuZGF0YUNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0dGhpcy51cGRhdGVTZWxlY3RBbGxDaGVja2JveCgpO1xuXHRcdFx0aWYgKHRoaXMuaXNEYXRhR3JpZCkge1xuXHRcdFx0XHR0aGlzLmhhbmRsZVRhYkluZGV4KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0aWYgKHRoaXMuaXNEYXRhR3JpZCkge1xuXHRcdFx0dGhpcy5fbW9kZWwucm93c0V4cGFuZGVkQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdC8vIEFsbG93cyB0aGUgZXhwYW5kZWQgcm93IHRvIGhhdmUgYSBmb2N1cyBzdGF0ZSB3aGVuIGl0IGV4aXN0cyBpbiB0aGUgRE9NXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGV4cGFuZGVkUm93cyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYngtLWV4cGFuZGFibGUtcm93Om5vdCguYngtLXBhcmVudC1yb3cpXCIpO1xuXHRcdFx0XHRcdEFycmF5LmZyb208YW55PihleHBhbmRlZFJvd3MpLmZvckVhY2gocm93ID0+IHtcblx0XHRcdFx0XHRcdGlmIChyb3cuZmlyc3RFbGVtZW50Q2hpbGQudGFiSW5kZXggPT09IHVuZGVmaW5lZCB8fCByb3cuZmlyc3RFbGVtZW50Q2hpbGQudGFiSW5kZXggIT09IC0xKSB7XG5cdFx0XHRcdFx0XHRcdHJvdy5maXJzdEVsZW1lbnRDaGlsZC50YWJJbmRleCA9IC0xO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGdldCBtb2RlbCgpOiBUYWJsZU1vZGVsIHtcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWw7XG5cdH1cblxuXHQvKipcblx0ICogQ29udHJvbHMgd2hldGhlciB0byBzaG93IHRoZSBzZWxlY3Rpb24gY2hlY2tib3hlcyBjb2x1bW4gb3Igbm90LlxuXHQgKlxuXHQgKiBAZGVwcmVjYXRlZCBpbiB0aGUgbmV4dCBtYWpvciBjYXJib24tY29tcG9uZW50cy1hbmd1bGFyIHZlcnNpb24gaW4gZmF2b3VyIG9mXG5cdCAqIGBzaG93U2VsZWN0aW9uQ29sdW1uYCBiZWNhdXNlIG9mIG5ldyBhdHRyaWJ1dGUgYGVuYWJsZVNpbmdsZVNlbGVjdGBcblx0ICogIHBsZWFzZSB1c2UgYHNob3dTZWxlY3Rpb25Db2x1bW5gIGluc3RlYWRcblx0ICovXG5cdEBJbnB1dCgpXG5cdHNldCBlbmFibGVSb3dTZWxlY3QodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLnNob3dTZWxlY3Rpb25Db2x1bW4gPSB2YWx1ZTtcblx0fVxuXG5cdGdldCBlbmFibGVSb3dTZWxlY3QgKCkge1xuXHRcdHJldHVybiB0aGlzLnNob3dTZWxlY3Rpb25Db2x1bW47XG5cdH1cblxuXHQvKipcblx0ICogQ29udHJvbHMgd2hldGhlciB0byBzaG93IHRoZSBzZWxlY3Rpb24gY2hlY2tib3hlcyBjb2x1bW4gb3Igbm90LlxuXHQgKlxuXHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0ICovXG5cdEBJbnB1dCgpIHNob3dTZWxlY3Rpb25Db2x1bW4gPSB0cnVlO1xuXG5cdC8qKlxuXHQgKiBDb250cm9scyB3aGV0aGVyIHRvIGVuYWJsZSBtdWx0aXBsZSBvciBzaW5nbGUgcm93IHNlbGVjdGlvbi5cblx0ICpcblx0ICogQHR5cGUge2Jvb2xlYW59XG5cdCAqL1xuXHRASW5wdXQoKSBlbmFibGVTaW5nbGVTZWxlY3QgPSBmYWxzZTtcblxuXHQvKipcblx0ICogRGlzdGFuY2UgKGluIHB4KSBmcm9tIHRoZSBib3R0b20gdGhhdCB2aWV3IGhhcyB0byByZWFjaCBiZWZvcmVcblx0ICogYHNjcm9sbExvYWRgIGV2ZW50IGlzIGVtaXR0ZWQuXG5cdCAqXG5cdCAqIEB0eXBlIHtudW1iZXJ9XG5cdCAqL1xuXHRASW5wdXQoKSBzY3JvbGxMb2FkRGlzdGFuY2UgPSAwO1xuXG5cdC8qKlxuXHQgKiBTZXQgdG8gYHRydWVgIHRvIGVuYWJsZSB1c2VycyB0byByZXNpemUgY29sdW1ucy5cblx0ICpcblx0ICogV29ya3MgZm9yIGNvbHVtbnMgd2l0aCB3aWR0aCBzZXQgaW4gcGl4ZWxzLlxuXHQgKlxuXHQgKi9cblx0QElucHV0KCkgY29sdW1uc1Jlc2l6YWJsZSA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBTZXQgdG8gYHRydWVgIHRvIGVuYWJsZSB1c2VycyB0byBkcmFnIGFuZCBkcm9wIGNvbHVtbnMuXG5cdCAqXG5cdCAqIENoYW5naW5nIHRoZSBjb2x1bW4gb3JkZXIgaW4gdGFibGUgY2hhbmdlcyB0YWJsZSBtb2RlbC4gQmUgYXdhcmUgb2YgaXQgd2hlbiB5b3UgYWRkIGFkZGl0aW9uYWwgZGF0YVxuXHQgKiB0byB0aGUgbW9kZWwuXG5cdCAqXG5cdCAqL1xuXHRASW5wdXQoKSBjb2x1bW5zRHJhZ2dhYmxlID0gZmFsc2U7XG5cblx0QElucHV0KClcblx0c2V0IGV4cGFuZEJ1dHRvbkFyaWFMYWJlbCh2YWx1ZTogc3RyaW5nIHwgT2JzZXJ2YWJsZTxzdHJpbmc+KSB7XG5cdFx0dGhpcy5fZXhwYW5kQnV0dG9uQXJpYUxhYmVsLm92ZXJyaWRlKHZhbHVlKTtcblx0fVxuXHRnZXQgZXhwYW5kQnV0dG9uQXJpYUxhYmVsKCkge1xuXHRcdHJldHVybiB0aGlzLl9leHBhbmRCdXR0b25BcmlhTGFiZWwudmFsdWU7XG5cdH1cblx0QElucHV0KClcblx0c2V0IHNvcnREZXNjZW5kaW5nTGFiZWwodmFsdWU6IHN0cmluZyB8IE9ic2VydmFibGU8c3RyaW5nPikge1xuXHRcdHRoaXMuX3NvcnREZXNjZW5kaW5nTGFiZWwub3ZlcnJpZGUodmFsdWUpO1xuXHR9XG5cdGdldCBzb3J0RGVzY2VuZGluZ0xhYmVsKCkge1xuXHRcdHJldHVybiB0aGlzLl9zb3J0RGVzY2VuZGluZ0xhYmVsLnZhbHVlO1xuXHR9XG5cdEBJbnB1dCgpXG5cdHNldCBzb3J0QXNjZW5kaW5nTGFiZWwodmFsdWU6IHN0cmluZyB8IE9ic2VydmFibGU8c3RyaW5nPikge1xuXHRcdHRoaXMuX3NvcnRBc2NlbmRpbmdMYWJlbC5vdmVycmlkZSh2YWx1ZSk7XG5cdH1cblx0Z2V0IHNvcnRBc2NlbmRpbmdMYWJlbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc29ydEFzY2VuZGluZ0xhYmVsLnZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEV4cGVjdHMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgc29tZSBvciBhbGwgb2Y6XG5cdCAqIGBgYFxuXHQgKiB7XG5cdCAqXHRcdFwiRklMVEVSXCI6IFwiRmlsdGVyXCIsXG5cdCAqXHRcdFwiRU5EX09GX0RBVEFcIjogXCJZb3UndmUgcmVhY2hlZCB0aGUgZW5kIG9mIHlvdXIgY29udGVudFwiLFxuXHQgKlx0XHRcIlNDUk9MTF9UT1BcIjogXCJTY3JvbGwgdG8gdG9wXCIsXG5cdCAqXHRcdFwiQ0hFQ0tCT1hfSEVBREVSXCI6IFwiU2VsZWN0IGFsbCByb3dzXCIsXG5cdCAqXHRcdFwiQ0hFQ0tCT1hfUk9XXCI6IFwiU2VsZWN0IHJvd1wiXG5cdCAqIH1cblx0ICogYGBgXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRzZXQgdHJhbnNsYXRpb25zICh2YWx1ZSkge1xuXHRcdGNvbnN0IHZhbHVlV2l0aERlZmF1bHRzID0gbWVyZ2UodGhpcy5pMThuLmdldE11bHRpcGxlKFwiVEFCTEVcIiksIHZhbHVlKTtcblx0XHR0aGlzLmZpbHRlclRpdGxlLm92ZXJyaWRlKHZhbHVlV2l0aERlZmF1bHRzLkZJTFRFUik7XG5cdFx0dGhpcy5lbmRPZkRhdGFUZXh0Lm92ZXJyaWRlKHZhbHVlV2l0aERlZmF1bHRzLkVORF9PRl9EQVRBKTtcblx0XHR0aGlzLnNjcm9sbFRvcFRleHQub3ZlcnJpZGUodmFsdWVXaXRoRGVmYXVsdHMuU0NST0xMX1RPUCk7XG5cdFx0dGhpcy5jaGVja2JveEhlYWRlckxhYmVsLm92ZXJyaWRlKHZhbHVlV2l0aERlZmF1bHRzLkNIRUNLQk9YX0hFQURFUik7XG5cdFx0dGhpcy5jaGVja2JveFJvd0xhYmVsLm92ZXJyaWRlKHZhbHVlV2l0aERlZmF1bHRzLkNIRUNLQk9YX1JPVyk7XG59XG5cblx0Y2hlY2tib3hIZWFkZXJMYWJlbCA9IHRoaXMuaTE4bi5nZXRPdmVycmlkYWJsZShcIlRBQkxFLkNIRUNLQk9YX0hFQURFUlwiKTtcblx0Y2hlY2tib3hSb3dMYWJlbCA9IHRoaXMuaTE4bi5nZXRPdmVycmlkYWJsZShcIlRBQkxFLkNIRUNLQk9YX1JPV1wiKTtcblx0ZW5kT2ZEYXRhVGV4dCA9IHRoaXMuaTE4bi5nZXRPdmVycmlkYWJsZShcIlRBQkxFLkVORF9PRl9EQVRBXCIpO1xuXHRzY3JvbGxUb3BUZXh0ID0gdGhpcy5pMThuLmdldE92ZXJyaWRhYmxlKFwiVEFCTEUuU0NST0xMX1RPUFwiKTtcblx0ZmlsdGVyVGl0bGUgPSB0aGlzLmkxOG4uZ2V0T3ZlcnJpZGFibGUoXCJUQUJMRS5GSUxURVJcIik7XG5cblx0LyoqXG5cdCAqIENvbnRyb2xzIGlmIGFsbCBjaGVja2JveGVzIGFyZSB2aWV3ZWQgYXMgc2VsZWN0ZWQuXG5cdCAqXG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0c2VsZWN0QWxsQ2hlY2tib3ggPSBmYWxzZTtcblxuXHQvKipcblx0ICogQ29udHJvbHMgdGhlIGluZGV0ZXJtaW5hdGUgc3RhdGUgb2YgdGhlIGhlYWRlciBjaGVja2JveC5cblx0ICpcblx0ICogQHR5cGUge2Jvb2xlYW59XG5cdCAqL1xuXHRzZWxlY3RBbGxDaGVja2JveFNvbWVTZWxlY3RlZCA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBTZXQgdG8gYGZhbHNlYCB0byByZW1vdmUgdGFibGUgcm93cyAoemVicmEpIHN0cmlwZXMuXG5cdCAqXG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0QElucHV0KCkgc3RyaXBlZCA9IHRydWU7XG5cblx0LyoqXG5cdCAqIFNldCB0byBgdHJ1ZWAgdG8gc3RpY2sgdGhlIGhlYWRlciB0byB0aGUgdG9wIG9mIHRoZSB0YWJsZVxuXHQgKi9cblx0QElucHV0KCkgc3RpY2t5SGVhZGVyID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIFNldCBmb290ZXIgdGVtcGxhdGUgdG8gY3VzdG9taXplIHdoYXQgaXMgZGlzcGxheWVkIGluIHRoZSB0Zm9vdCBzZWN0aW9uIG9mIHRoZSB0YWJsZVxuXHQgKi9cblx0QElucHV0KCkgZm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0LyoqXG5cdCAqIFVzZWQgdG8gcG9wdWxhdGUgdGhlIHJvdyBzZWxlY3Rpb24gY2hlY2tib3ggbGFiZWwgd2l0aCBhIHVzZWZ1bCB2YWx1ZSBpZiBzZXQuXG5cdCAqXG5cdCAqIEV4YW1wbGU6XG5cdCAqIGBgYFxuXHQgKiA8aWJtLXRhYmxlIFtzZWxlY3Rpb25MYWJlbENvbHVtbl09XCIwXCI+PC9pYm0tdGFibGU+XG5cdCAqIDwhLS0gcmVzdWx0cyBpbiBhcmlhLWxhYmVsPVwiU2VsZWN0IGZpcnN0IGNvbHVtbiB2YWx1ZVwiXG5cdCAqICh3aGVyZSBcImZpcnN0IGNvbHVtbiB2YWx1ZVwiIGlzIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgY29sdW1uIGluIHRoZSByb3cgLS0+XG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCkgc2VsZWN0aW9uTGFiZWxDb2x1bW46IG51bWJlcjtcblxuXHQvKipcblx0ICogRW1pdHMgYW4gaW5kZXggb2YgdGhlIGNvbHVtbiB0aGF0IHdhbnRzIHRvIGJlIHNvcnRlZC5cblx0ICpcblx0ICovXG5cdEBPdXRwdXQoKSBzb3J0ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0LyoqXG5cdCAqIEVtaXRzIGlmIGFsbCByb3dzIGFyZSBzZWxlY3RlZC5cblx0ICpcblx0ICogQHBhcmFtIHtUYWJsZU1vZGVsfSBtb2RlbFxuXHQgKi9cblx0QE91dHB1dCgpIHNlbGVjdEFsbCA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0PigpO1xuXG5cdC8qKlxuXHQgKiBFbWl0cyBpZiBhbGwgcm93cyBhcmUgZGVzZWxlY3RlZC5cblx0ICpcblx0ICogQHBhcmFtIHtUYWJsZU1vZGVsfSBtb2RlbFxuXHQgKi9cblx0QE91dHB1dCgpIGRlc2VsZWN0QWxsID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3Q+KCk7XG5cblx0LyoqXG5cdCAqIEVtaXRzIGlmIGEgc2luZ2xlIHJvdyBpcyBzZWxlY3RlZC5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9ICh7bW9kZWw6IHRoaXMubW9kZWwsIHNlbGVjdGVkUm93SW5kZXg6IGluZGV4fSlcblx0ICovXG5cdEBPdXRwdXQoKSBzZWxlY3RSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdD4oKTtcblxuXHQvKipcblx0ICogRW1pdHMgaWYgYSBzaW5nbGUgcm93IGlzIGRlc2VsZWN0ZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSAoe21vZGVsOiB0aGlzLm1vZGVsLCBkZXNlbGVjdGVkUm93SW5kZXg6IGluZGV4fSlcblx0ICovXG5cdEBPdXRwdXQoKSBkZXNlbGVjdFJvdyA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0PigpO1xuXG5cdC8qKlxuXHQgKiBFbWl0cyB3aGVuIHRhYmxlIHJlcXVpcmVzIG1vcmUgZGF0YSB0byBiZSBsb2FkZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7VGFibGVNb2RlbH0gbW9kZWxcblx0ICovXG5cdEBPdXRwdXQoKSBzY3JvbGxMb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxUYWJsZU1vZGVsPigpO1xuXG5cdGdldCBub0RhdGEoKSB7XG5cdFx0cmV0dXJuICF0aGlzLm1vZGVsLmRhdGEgfHxcblx0XHRcdHRoaXMubW9kZWwuZGF0YS5sZW5ndGggPT09IDAgfHxcblx0XHRcdHRoaXMubW9kZWwuZGF0YS5sZW5ndGggPT09IDEgJiYgdGhpcy5tb2RlbC5kYXRhWzBdLmxlbmd0aCA9PT0gMDtcblx0fVxuXG5cdGNvbHVtbkluZGV4ID0gMDtcblxuXHRwdWJsaWMgaXNDb2x1bW5EcmFnZ2luZyA9IGZhbHNlO1xuXHRwdWJsaWMgY29sdW1uRHJhZ2dlZEhvdmVySW5kZXggPSAtMTtcblx0cHVibGljIGNvbHVtbkRyYWdnZWRQb3NpdGlvbiA9IFwiXCI7XG5cblx0cHJvdGVjdGVkIF9tb2RlbDogVGFibGVNb2RlbDtcblxuXHRwcm90ZWN0ZWQgX2V4cGFuZEJ1dHRvbkFyaWFMYWJlbCAgPSB0aGlzLmkxOG4uZ2V0T3ZlcnJpZGFibGUoXCJUQUJMRS5FWFBBTkRfQlVUVE9OXCIpO1xuXHRwcm90ZWN0ZWQgX3NvcnREZXNjZW5kaW5nTGFiZWwgPSB0aGlzLmkxOG4uZ2V0T3ZlcnJpZGFibGUoXCJUQUJMRS5TT1JUX0RFU0NFTkRJTkdcIik7XG5cdHByb3RlY3RlZCBfc29ydEFzY2VuZGluZ0xhYmVsID0gdGhpcy5pMThuLmdldE92ZXJyaWRhYmxlKFwiVEFCTEUuU09SVF9BU0NFTkRJTkdcIik7XG5cblx0cHJvdGVjdGVkIGNvbHVtblJlc2l6ZVdpZHRoOiBudW1iZXI7XG5cdHByb3RlY3RlZCBjb2x1bW5SZXNpemVNb3VzZVg6IG51bWJlcjtcblx0cHJvdGVjdGVkIG1vdXNlTW92ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXHRwcm90ZWN0ZWQgbW91c2VVcFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFRhYmxlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0FwcGxpY2F0aW9uUmVmfSBhcHBsaWNhdGlvblJlZlxuXHQgKi9cblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCBhcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYsIHByb3RlY3RlZCBpMThuOiBJMThuKSB7fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRpZiAodGhpcy5pc0RhdGFHcmlkKSB7XG5cdFx0XHR0aGlzLmhhbmRsZVRhYkluZGV4KCk7XG5cdFx0fVxuXHR9XG5cblx0Y29sdW1uUmVzaXplU3RhcnQoZXZlbnQsIGNvbHVtbikge1xuXHRcdHRoaXMuY29sdW1uUmVzaXplV2lkdGggPSBwYXJzZUludChjb2x1bW4uc3R5bGUud2lkdGgsIDEwKTtcblx0XHR0aGlzLmNvbHVtblJlc2l6ZU1vdXNlWCA9IGV2ZW50LmNsaWVudFg7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHRoaXMubW91c2VNb3ZlU3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KGRvY3VtZW50LmJvZHksIFwibW91c2Vtb3ZlXCIpLnN1YnNjcmliZShldmVudCA9PiB7XG5cdFx0XHR0aGlzLmNvbHVtblJlc2l6ZVByb2dyZXNzKGV2ZW50LCBjb2x1bW4pO1xuXHRcdH0pO1xuXHRcdHRoaXMubW91c2VVcFN1YnNjcmlwdGlvbiA9IGZyb21FdmVudChkb2N1bWVudC5ib2R5LCBcIm1vdXNldXBcIikuc3Vic2NyaWJlKGV2ZW50ID0+IHtcblx0XHRcdHRoaXMuY29sdW1uUmVzaXplRW5kKGV2ZW50LCBjb2x1bW4pO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29sdW1uUmVzaXplUHJvZ3Jlc3MoZXZlbnQsIGNvbHVtbikge1xuXHRcdGNvbnN0IG1vdmUgPSBldmVudC5jbGllbnRYIC0gdGhpcy5jb2x1bW5SZXNpemVNb3VzZVg7XG5cdFx0Y29sdW1uLnN0eWxlLndpZHRoID0gYCR7dGhpcy5jb2x1bW5SZXNpemVXaWR0aCArIG1vdmV9cHhgO1xuXHR9XG5cblx0Y29sdW1uUmVzaXplRW5kKGV2ZW50LCBjb2x1bW4pIHtcblx0XHR0aGlzLm1vdXNlTW92ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHRcdHRoaXMubW91c2VVcFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHR9XG5cblx0b25Sb3dTZWxlY3QoaW5kZXg6IG51bWJlcikge1xuXHRcdGlmICghdGhpcy5zaG93U2VsZWN0aW9uQ29sdW1uICYmIHRoaXMuZW5hYmxlU2luZ2xlU2VsZWN0KSB7XG5cdFx0XHR0aGlzLm1vZGVsLnJvd3NTZWxlY3RlZC5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0XHR0aGlzLm1vZGVsLnNlbGVjdFJvdyhpbmRleCwgZmFsc2UpO1xuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLm1vZGVsLnNlbGVjdFJvdyhpbmRleCwgIXRoaXMubW9kZWwucm93c1NlbGVjdGVkW2luZGV4XSk7XG5cdFx0XHR0aGlzLm9uUm93Q2hlY2tib3hDaGFuZ2UoaW5kZXgpO1xuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZVNlbGVjdEFsbENoZWNrYm94KCkge1xuXHRcdGNvbnN0IHNlbGVjdGVkUm93c0NvdW50ID0gdGhpcy5tb2RlbC5zZWxlY3RlZFJvd3NDb3VudCgpO1xuXG5cdFx0aWYgKHNlbGVjdGVkUm93c0NvdW50IDw9IDApIHtcblx0XHRcdC8vIHJlc2V0IHNlbGVjdCBhbGwgY2hlY2tib3ggaWYgbm90aGluZyBzZWxlY3RlZFxuXHRcdFx0dGhpcy5zZWxlY3RBbGxDaGVja2JveCA9IGZhbHNlO1xuXHRcdFx0dGhpcy5zZWxlY3RBbGxDaGVja2JveFNvbWVTZWxlY3RlZCA9IGZhbHNlO1xuXHRcdH0gZWxzZSBpZiAoc2VsZWN0ZWRSb3dzQ291bnQgPCB0aGlzLm1vZGVsLmRhdGEubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLnNlbGVjdEFsbENoZWNrYm94U29tZVNlbGVjdGVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVHJpZ2dlcmVkIHdoZW5ldmVyIHRoZSBoZWFkZXIgY2hlY2tib3ggaXMgY2xpY2tlZC5cblx0ICogVXBkYXRlcyBhbGwgdGhlIGNoZWNrYm94ZXMgaW4gdGhlIHRhYmxlIHZpZXcuXG5cdCAqIEVtaXRzIHRoZSBgc2VsZWN0QWxsYCBvciBgZGVzZWxlY3RBbGxgIGV2ZW50LlxuXHQgKlxuXHQgKi9cblx0b25TZWxlY3RBbGxDaGVja2JveENoYW5nZSgpIHtcblx0XHR0aGlzLmFwcGxpY2F0aW9uUmVmLnRpY2soKTsgLy8gZ2l2ZSBhcHAgdGltZSB0byBwcm9jZXNzIHRoZSBjbGljayBpZiBuZWVkZWRcblxuXHRcdGlmICh0aGlzLnNlbGVjdEFsbENoZWNrYm94U29tZVNlbGVjdGVkKSB7XG5cdFx0XHR0aGlzLnNlbGVjdEFsbENoZWNrYm94ID0gZmFsc2U7IC8vIGNsZWFyIGFsbCBib3hlc1xuXHRcdFx0dGhpcy5kZXNlbGVjdEFsbC5lbWl0KHRoaXMubW9kZWwpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zZWxlY3RBbGxDaGVja2JveCkge1xuXHRcdFx0dGhpcy5zZWxlY3RBbGwuZW1pdCh0aGlzLm1vZGVsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kZXNlbGVjdEFsbC5lbWl0KHRoaXMubW9kZWwpO1xuXHRcdH1cblxuXHRcdHRoaXMuc2VsZWN0QWxsQ2hlY2tib3hTb21lU2VsZWN0ZWQgPSBmYWxzZTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tb2RlbC5yb3dzU2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMubW9kZWwucm93c1NlbGVjdGVkW2ldID0gdGhpcy5zZWxlY3RBbGxDaGVja2JveDtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVHJpZ2dlcmVkIHdoZW4gYSBzaW5nbGUgcm93IGlzIGNsaWNrZWQuXG5cdCAqIFVwZGF0ZXMgdGhlIGhlYWRlciBjaGVja2JveCBzdGF0ZS5cblx0ICogRW1pdHMgdGhlIGBzZWxlY3RSb3dgIG9yIGBkZXNlbGVjdFJvd2AgZXZlbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuXHQgKiBAcmV0dXJuc1xuXHQgKi9cblx0b25Sb3dDaGVja2JveENoYW5nZShpbmRleDogbnVtYmVyKSB7XG5cdFx0bGV0IHN0YXJ0VmFsdWUgPSB0aGlzLm1vZGVsLnJvd3NTZWxlY3RlZFswXTtcblxuXHRcdGlmICh0aGlzLm1vZGVsLnJvd3NTZWxlY3RlZFtpbmRleF0pIHtcblx0XHRcdHRoaXMuc2VsZWN0Um93LmVtaXQoe21vZGVsOiB0aGlzLm1vZGVsLCBzZWxlY3RlZFJvd0luZGV4OiBpbmRleH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRlc2VsZWN0Um93LmVtaXQoe21vZGVsOiB0aGlzLm1vZGVsLCBkZXNlbGVjdGVkUm93SW5kZXg6IGluZGV4fSk7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLm1vZGVsLnJvd3NTZWxlY3RlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IG9uZSA9IHRoaXMubW9kZWwucm93c1NlbGVjdGVkW2ldO1xuXG5cdFx0XHRpZiAoISFvbmUgIT09ICEhc3RhcnRWYWx1ZSkgeyAgLy8gISEgZXNzZW50aWFsbHkgY29udmVydHMgdG8gYm9vbGVhbiBhbmQgd2Ugd2FudCB1bmRlZmluZWQgdG8gYmUgZmFsc2Vcblx0XHRcdFx0Ly8gc2V0IGluZGV0ZXJtaW5hdGVcblx0XHRcdFx0dGhpcy5zZWxlY3RBbGxDaGVja2JveCA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLnNlbGVjdEFsbENoZWNrYm94U29tZVNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuc2VsZWN0QWxsQ2hlY2tib3hTb21lU2VsZWN0ZWQgPSBmYWxzZTtcblx0XHR0aGlzLnNlbGVjdEFsbENoZWNrYm94ID0gc3RhcnRWYWx1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUcmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBzY3JvbGxzIG9uIHRoZSBgPHRib2R5PmAgZWxlbWVudC5cblx0ICogRW1pdHMgdGhlIGBzY3JvbGxMb2FkYCBldmVudC5cblx0ICpcblx0ICogQHBhcmFtIHthbnl9IGV2ZW50XG5cdCAqL1xuXHRvblNjcm9sbChldmVudCkge1xuXHRcdGNvbnN0IGRpc3RhbmNlRnJvbUJvdHRvbSA9IGV2ZW50LnRhcmdldC5zY3JvbGxIZWlnaHQgLSBldmVudC50YXJnZXQuY2xpZW50SGVpZ2h0IC0gZXZlbnQudGFyZ2V0LnNjcm9sbFRvcDtcblxuXHRcdGlmIChkaXN0YW5jZUZyb21Cb3R0b20gPD0gdGhpcy5zY3JvbGxMb2FkRGlzdGFuY2UpIHtcblx0XHRcdHRoaXMuc2Nyb2xsTG9hZC5lbWl0KHRoaXMubW9kZWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm1vZGVsLmlzRW5kID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0Y29sdW1uRHJhZ1N0YXJ0KGV2ZW50LCBjb2x1bW5JbmRleCkge1xuXHRcdHRoaXMuaXNDb2x1bW5EcmFnZ2luZyA9IHRydWU7XG5cdFx0dGhpcy5jb2x1bW5EcmFnZ2VkSG92ZXJJbmRleCA9IGNvbHVtbkluZGV4O1xuXHRcdGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiY29sdW1uSW5kZXhcIiwgSlNPTi5zdHJpbmdpZnkoY29sdW1uSW5kZXgpKTtcblx0fVxuXG5cdGNvbHVtbkRyYWdFbmQoZXZlbnQsIGNvbHVtbkluZGV4KSB7XG5cdFx0dGhpcy5pc0NvbHVtbkRyYWdnaW5nID0gZmFsc2U7XG5cdFx0dGhpcy5jb2x1bW5EcmFnZ2VkSG92ZXJJbmRleCA9IC0xO1xuXHR9XG5cblx0Y29sdW1uRHJhZ0VudGVyKGV2ZW50LCBwb3NpdGlvbiwgY29sdW1uSW5kZXgpIHtcblx0XHR0aGlzLmNvbHVtbkRyYWdnZWRQb3NpdGlvbiA9IHBvc2l0aW9uO1xuXHRcdHRoaXMuY29sdW1uRHJhZ2dlZEhvdmVySW5kZXggPSBjb2x1bW5JbmRleDtcblx0fVxuXG5cdGNvbHVtbkRyYWdMZWF2ZShldmVudCwgcG9zaXRpb24sIGNvbHVtbkluZGV4KSB7XG5cdFx0dGhpcy5jb2x1bW5EcmFnZ2VkUG9zaXRpb24gPSBcIlwiO1xuXHR9XG5cblx0Y29sdW1uRHJhZ292ZXIoZXZlbnQsIHBvc2l0aW9uLCBjb2x1bW5JbmRleCkge1xuXHRcdHRoaXMuY29sdW1uRHJhZ2dlZEhvdmVySW5kZXggPSBjb2x1bW5JbmRleDtcblx0XHR0aGlzLmNvbHVtbkRyYWdnZWRQb3NpdGlvbiA9IHBvc2l0aW9uO1xuXG5cdFx0Ly8gbmVlZGVkIHRvIHRlbGwgYnJvd3NlciB0byBhbGxvdyBkcm9wcGluZ1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxuXHRjb2x1bW5Ecm9wKGV2ZW50LCBwb3NpdGlvbiwgY29sdW1uSW5kZXgpIHtcblx0XHR0aGlzLmlzQ29sdW1uRHJhZ2dpbmcgPSBmYWxzZTtcblx0XHR0aGlzLmNvbHVtbkRyYWdnZWRIb3ZlckluZGV4ID0gLTE7XG5cdFx0dGhpcy5jb2x1bW5EcmFnZ2VkUG9zaXRpb24gPSBcIlwiO1xuXG5cdFx0dGhpcy5tb2RlbC5tb3ZlQ29sdW1uKFxuXHRcdFx0cGFyc2VJbnQoZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJjb2x1bW5JbmRleFwiKSwgMTApLFxuXHRcdFx0Y29sdW1uSW5kZXggKyAocG9zaXRpb24gPT09IFwicmlnaHRcIiA/IDEgOiAwKVxuXHRcdCk7XG5cdH1cblxuXHRnZXQgc2Nyb2xsYmFyV2lkdGgoKSB7XG5cdFx0cmV0dXJuIGdldFNjcm9sbGJhcldpZHRoKCk7XG5cdH1cblxuXHRmaXJzdEV4cGFuZGVkRGF0YUluUm93KHJvdykge1xuXHRcdGNvbnN0IGZvdW5kID0gcm93LmZpbmQoZCA9PiBkLmV4cGFuZGVkRGF0YSk7XG5cdFx0aWYgKGZvdW5kKSB7XG5cdFx0XHRyZXR1cm4gZm91bmQuZXhwYW5kZWREYXRhO1xuXHRcdH1cblx0XHRyZXR1cm4gZm91bmQ7XG5cdH1cblxuXHRmaXJzdEV4cGFuZGVkVGVtcGxhdGVJblJvdyhyb3cpIHtcblx0XHRjb25zdCBmb3VuZCA9IHJvdy5maW5kKGQgPT4gZC5leHBhbmRlZFRlbXBsYXRlKTtcblx0XHRpZiAoZm91bmQpIHtcblx0XHRcdHJldHVybiBmb3VuZC5leHBhbmRlZFRlbXBsYXRlO1xuXHRcdH1cblx0XHRyZXR1cm4gZm91bmQ7XG5cdH1cblx0LyoqXG5cdCAqIFRyaWdnZXJlZCB3aGVuIHRoZSB1c2VyIHNjcm9sbHMgb24gdGhlIGA8dGJvZHk+YCBlbGVtZW50LlxuXHQgKiBFbWl0cyB0aGUgYHNjcm9sbExvYWRgIGV2ZW50LlxuXHQgKlxuXHQgKiBAcGFyYW0ge2FueX0gZXZlbnRcblx0ICovXG5cdHNjcm9sbFRvVG9wKGV2ZW50KSB7XG5cdFx0ZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0uc2Nyb2xsVG9wID0gMDtcblx0XHR0aGlzLm1vZGVsLmlzRW5kID0gZmFsc2U7XG5cdH1cblxuXHRoYW5kbGVUYWJJbmRleCgpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGNvbnN0IGZvY3VzRWxlbWVudExpc3QgPSBnZXRGb2N1c0VsZW1lbnRMaXN0KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0YWJiYWJsZVNlbGVjdG9ySWdub3JlVGFiSW5kZXgpO1xuXHRcdFx0aWYgKGZvY3VzRWxlbWVudExpc3QubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRmb2N1c0VsZW1lbnRMaXN0LmZvckVhY2godGFiYmFibGUgPT4ge1xuXHRcdFx0XHRcdHRhYmJhYmxlLnRhYkluZGV4ID0gLTE7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0QXJyYXkuZnJvbTxIVE1MRWxlbWVudD4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRkLCB0aFwiKSkuZm9yRWFjaChjZWxsID0+IFRhYmxlLnNldFRhYkluZGV4KGNlbGwsIC0xKSk7XG5cblx0XHRcdGNvbnN0IHJvd3MgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5yb3dzO1xuXHRcdFx0aWYgKEFycmF5LmZyb20ocm93c1swXS5xdWVyeVNlbGVjdG9yQWxsKFwidGhcIikpLnNvbWUodGggPT4gZ2V0Rm9jdXNFbGVtZW50TGlzdCh0aCwgdGFiYmFibGVTZWxlY3Rvcklnbm9yZVRhYkluZGV4KS5sZW5ndGggPiAwKSkge1xuXHRcdFx0XHRUYWJsZS5zZXRUYWJJbmRleChyb3dzWzBdLnF1ZXJ5U2VsZWN0b3IoXCJ0aFwiKSwgMCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRUYWJsZS5zZXRUYWJJbmRleChyb3dzWzFdLnF1ZXJ5U2VsZWN0b3IoXCJ0ZFwiKSwgMCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRzZXRJbmRleChjb2x1bW5JbmRleCkge1xuXHRcdGlmICh0aGlzLm1vZGVsLmhhc0V4cGFuZGFibGVSb3dzKCkgJiYgdGhpcy5zaG93U2VsZWN0aW9uQ29sdW1uKSB7XG5cdFx0XHR0aGlzLmNvbHVtbkluZGV4ID0gY29sdW1uSW5kZXggKyAyO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5tb2RlbC5oYXNFeHBhbmRhYmxlUm93cygpIHx8IHRoaXMuc2hvd1NlbGVjdGlvbkNvbHVtbikge1xuXHRcdFx0dGhpcy5jb2x1bW5JbmRleCA9IGNvbHVtbkluZGV4ICsgMTtcblx0XHR9XG5cdH1cblxuXHRzZXRDaGVja2JveEluZGV4KCkge1xuXHRcdGlmICh0aGlzLm1vZGVsLmhhc0V4cGFuZGFibGVSb3dzKCkpIHtcblx0XHRcdHRoaXMuY29sdW1uSW5kZXggPSAxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvbHVtbkluZGV4ID0gMDtcblx0XHR9XG5cdH1cblxuXHRzZXRFeHBhbmRJbmRleChldmVudCkge1xuXHRcdHRoaXMuY29sdW1uSW5kZXggPSAwO1xuXHR9XG5cblx0Z2V0U2VsZWN0aW9uTGFiZWxWYWx1ZShyb3c6IFRhYmxlSXRlbVtdKSB7XG5cdFx0aWYgKCF0aGlzLnNlbGVjdGlvbkxhYmVsQ29sdW1uKSB7XG5cdFx0XHRyZXR1cm4geyB2YWx1ZTogdGhpcy5pMThuLmdldCgpLlRBQkxFLlJPVyB9O1xuXHRcdH1cblx0XHRyZXR1cm4geyB2YWx1ZTogcm93W3RoaXMuc2VsZWN0aW9uTGFiZWxDb2x1bW5dLmRhdGEgfTtcblx0fVxuXG5cdGdldEV4cGFuZEJ1dHRvbkFyaWFMYWJlbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fZXhwYW5kQnV0dG9uQXJpYUxhYmVsLnN1YmplY3Q7XG5cdH1cblx0Z2V0U29ydERlc2NlbmRpbmdMYWJlbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc29ydERlc2NlbmRpbmdMYWJlbC5zdWJqZWN0O1xuXHR9XG5cdGdldFNvcnRBc2NlbmRpbmdMYWJlbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fc29ydEFzY2VuZGluZ0xhYmVsLnN1YmplY3Q7XG5cdH1cbn1cbiJdfQ==