import { TableItem } from "./table-item.class";
import {
	EventEmitter,
	TemplateRef
} from "@angular/core";


export class TableHeaderItem {
	/**
	 * Defines if column under this TableHeaderItem should be displayed.
	 *
	 * @memberof TableHeaderItem
	 */
	visible = true;

	/**
	 * Number of applied filters.
	 *
	 * `filter()` should set it to appropriate number.
	 *
	 * @memberof TableHeaderItem
	 */
	filterCount = 0;

	private _ascending = true;

	/**
	 * If true, sort is set to ascending, if false descending will be true.
	 *
	 * @memberof TableHeaderItem
	 */
	set ascending(asc) {
		this._ascending = asc;
	}
	get ascending() {
		return this._ascending;
	}

	/**
	 * If true, sort is set to descending, if false ascending will be true.
	 *
	 * @memberof TableHeaderItem
	 */
	set descending(desc) {
		this._ascending = !desc;
	}
	get descending() {
		return !this._ascending;
	}

	sorted = false;

	/**
	 * Data for the header item.
	 *
	 * @type {*}
	 * @memberof TableHeaderItem
	 */
	data: any;

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
	 * private customHeaderTemplate: TemplateRef<any>;
	 * ```
	 *
	 * Set the template to the header item, for example:
	 *
	 * ```typescript
	 * this.model.header = [
	 * 		new TableHeaderItem({data: {name: "Custom header", link: "/table"}, template: this.customHeaderTemplate})
	 * ];
	 * ```
	 * @type {TemplateRef<any>}
	 * @memberof TableHeaderItem
	 */
	template: TemplateRef<any>;

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
	 * <ng-template #filter let-popover="popover" let-filter="filter">
	 * 	<div class="filter-options">
	 * 		<n-label>
	 * 			<label for="filter1">Value</label>
	 * 			<input type="text" [(ngModel)]="filter1" class="input-field" id="filter1">
	 * 		</n-label>
	 * 	</div>
	 * 	<div class="filter-options-buttons">
	 * 		<button class="btn" (click)="filter.data = filter1; popover.onClose()">Apply</button>
	 * 		<button class="btn btn-secondary" (click)="popover.onClose()">Cancel</button>
	 * 	</div>
	 * </ng-template>
	 * ```
	 *
	 * Set the template with, for example:
	 * ```typescript
	 * new FilterableHeaderItem({
	 * 	filterTemplate: this.filter
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
	 *
	 * @type {TemplateRef<any>}
	 * @memberof TableHeaderItem
	 */
	filterTemplate: TemplateRef<any>;

	/**
	 * This is where you store your data when applying filter.
	 *
	 * It is the actual object you have access to with `let-filter="filter"` in your template.
	 *
	 * Make sure to store data in `filter.data` in your template, and you will have it
	 * available in `filterData.data` in your extension of `TableHeaderItem`.
	 *
	 * Because angular and object references.
	 *
	 * @type {*}
	 * @memberof TableHeaderItem
	 */
	filterData: any;

	constructor(rawData?: any) {
		// defaults so we dont leave things empty
		const defaults = {
			data: "",
			visible: this.visible,
			filterCount: this.filterCount,
			filterData: {data: ""}
		};
		// fill our object with provided props, and fallback to defaults
		const data = Object.assign({}, defaults, rawData);
		this.data = data.data;
		this.visible = data.visible;
		this.filterCount = data.filterCount;
		this.template = data.template;
		this.filterTemplate = data.filterTemplate;
		this.filterData = data.filterData;
	}
	/**
	 * Used for sorting rows of the table.
	 *
	 * Override to enable different sorting.
	 *
	 * @param {TableItem} one
	 * @param {TableItem} two
	 * @returns {number}
	 * < 0 if `one` should go before `two`
	 * > 0 if `one` shoulg go after `two`
	 * 0 if it doesn't matter (they are the same)
	 * @memberof TableHeaderItem
	 */
	compare(one: TableItem, two: TableItem): number {
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
	 * @param {TableItem} item
	 * @returns {boolean}
	 * `true` to hide the row
	 * `false` to show the row
	 * @memberof TableHeaderItem
	 */
	filter(item: TableItem): boolean {
		this.filterCount = 0;
		return false;
	}
}
