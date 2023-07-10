import { TableItem } from "./table-item.class";
import { TemplateRef } from "@angular/core";

export type SortType = "ASCENDING" | "DESCENDING" | "NONE";
export class TableHeaderItem {
	/**
	 * If true, sort is set to ascending, if false descending will be true.
	 *
	 */
	set ascending(asc: boolean) {
		this.sortDirection = asc ? "ASCENDING" : "DESCENDING";
	}
	get ascending() {
		return this.sortDirection === "ASCENDING";
	}

	/**
	 * If true, sort is set to descending, if false ascending will be true.
	 *
	 */
	set descending(desc: boolean) {
		this.sortDirection = desc ? "DESCENDING" : "ASCENDING";
	}
	get descending() {
		return this.sortDirection === "DESCENDING";
	}

	get title() {
		if (this._title) {
			return this._title;
		}

		if (!this.data) {
			return "";
		}

		if (typeof this.data === "string") {
			return this.data;
		}

		if (
			this.data.toString &&
			this.data.constructor !== ({}).constructor
		) {
			return this.data.toString();
		}

		// data can’t be reasonably converted to an end user readable string
		return "";
	}

	set title(title) {
		this._title = title;
	}
	/**
	 * Defines if column under this TableHeaderItem should be displayed.
	 *
	 */
	visible = true;

	/**
	 * Disables sorting by default.
	 *
	 */
	sorted = false;

	/**
	 * Enables sorting on click by default.
	 * If false then this column won't show a sorting arrow at all.
	 *
	 */
	sortable = true;

	/**
	 * Number of applied filters.
	 *
	 * `filter()` should set it to appropriate number.
	 *
	 */
	filterCount = 0;

	/**
	 * The number of rows to span
	 * **NOTE:** not supported by the default carbon table
	 */
	rowSpan = 1;

	/**
	 * The number of columns to span
	 */
	colSpan = 1;

	/**
	 * Attach a class to the column, both the header and column cells.
	 *
	 */
	className: string;

	/**
	 * Style for the column, applied to every element in the column.
	 *
	 * ngStyle-like format
	 *
	 */
	style = {};

	/**
	 * Data for the header item.
	 */
	data: any;

	/**
	 * Data for the header item for general usage in the controller.
	 * For example, which `field` is this column related to.
	 */
	metadata: any;

	/**
	 * Used to display data in a desired way.
	 *
	 * If not provided, displays data as a simple string.
	 *
	 * Usage:
	 *
	 * In a component where you're using the table create a template like:
	 *
	 * ```html
	 * <ng-template #customHeaderTemplate let-data="data">
	 * 		<i><a [routerLink]="data.link">{{data.name}}</a></i>
	 * </ng-template>
	 * ```
	 * where we assume your data contains `link` and `name`. `let-data="data"` is
	 * necessary for you to be able to access item's data in the template.
	 *
	 * Create `ViewChild` property with:
	 *
	 * ```typescript
	 * (at)ViewChild("customHeaderTemplate")
	 * protected customHeaderTemplate: TemplateRef<any>;
	 * ```
	 *
	 * Set the template to the header item, for example:
	 *
	 * ```typescript
	 * this.model.header = [
	 * 		new TableHeaderItem({data: {name: "Custom header", link: "/table"}, template: this.customHeaderTemplate})
	 * ];
	 * ```
	 */
	template: TemplateRef<any>;

	/**
	 * The label for the sort button
	 */
	ariaSortLabel: string;

	/**
	 * A callback function to format the sort label. Will be heavily called.
	 */
	formatSortLabel: (label: string, staticLabel?: string) => string;

	/**
	 * Used as a template for popover filter.
	 *
	 * `let-popover="popover"` will give you access to popover component and allow you to
	 * manipulate it if needed.
	 *
	 * `let-filter="filter"` will give you access to the "filter". The main takeaway is
	 * store the data you need to `filter.data`. You will be able to access it as
	 * `this.filterData.data` from your `filter()` function when you extend `TableHeaderItem`
	 *
	 * Example:
	 * ```html
	 * <ng-template #filter let-popover="popover">
	 * 	<cds-label class="first-label">
	 * 		Value
	 * 		<input type="text" [(ngModel)]="filter1" class="input-field">
	 * 	</cds-label>
	 * </ng-template>
	 *
	 * <ng-template #filterFooter let-popover="popover" let-filter="data">
	 * 	<button class="btn--primary" (click)="filter.data = filter1; popover.onClose()">Apply</button>
	 * 	<button class="btn--secondary" (click)="popover.onClose()">Cancel</button>
	 * </ng-template>
	 * ```
	 *
	 * Set the template with, for example:
	 * ```typescript
	 * new FilterableHeaderItem({
	 * 	filterTemplate: this.filter,
	 *	filterFooter: this.filterFooter
	 * })
	 * ```
	 *
	 * ```typescript
	 * class FilterableHeaderItem extends TableHeaderItem {
	 * 	// custom filter function
	 * 	filter(item: TableItem): boolean {
	 * 		if (typeof item.data === "string" && item.data.indexOf(this.filterData.data) >= 0) {
	 * 			this.filterCount = 1;
	 * 			return false;
	 * 		}
	 * 		this.filterCount = 0;
	 * 		return true;
	 * 	}
	 * }
	 * ```
	 */
	filterTemplate: TemplateRef<any>;

	/**
	 * Used along with `filterTemplate` to construct the filter popover
	 */
	filterFooter: TemplateRef<any>;

	/**
	 * This is where you store your data when applying filter.
	 *
	 * It is the actual object you have access to with `let-filter="data"` in your template.
	 *
	 * Make sure to store data in `filter.data` in your template, and you will have it
	 * available in `filterData.data` in your extension of `TableHeaderItem`.
	 *
	 * Because angular and object references.
	 */
	filterData: any;

	sortDirection: SortType = "NONE";



	private _title: string;

	/**
	 * Creates an instance of TableHeaderItem.
	 */
	constructor(rawData?: any) {
		// defaults so we dont leave things empty
		const defaults = {
			data: "",
			visible: this.visible,
			style: this.style,
			filterCount: this.filterCount,
			filterData: {data: ""}
		};
		// fill our object with provided props, and fallback to defaults
		const data = Object.assign({}, defaults, rawData);
		for (let property of Object.getOwnPropertyNames(data)) {
			if (data.hasOwnProperty(property)) {
				this[property] = data[property];
			}
		}
	}

	/**
	 * Used for sorting rows of the table.
	 *
	 * Override to enable different sorting.
	 *
	 * < 0 if `one` should go before `two`
	 * > 0 if `one` should go after `two`
	 * 0 if it doesn't matter (they are the same)
	 */
	compare(one: TableItem, two: TableItem): number {
		if (!one || !two) {
			return 0;
		}

		if (typeof one.data === "string") {
			return one.data.localeCompare(two.data);
		}

		if (one.data < two.data) {
			return -1;
		} else if (one.data > two.data) {
			return 1;
		} else {
			return 0;
		}
	}

	/**
	 * Used to filter rows in the table.
	 *
	 * Override to make a custom filter.
	 *
	 * Even though there is just one filter function, there can be multiple filters.
	 * When implementing filter, set `filterCount` before returning.
	 *
	 * `true` to hide the row
	 * `false` to show the row
	 */
	filter(item: TableItem): boolean {
		this.filterCount = 0;
		return false;
	}
}
