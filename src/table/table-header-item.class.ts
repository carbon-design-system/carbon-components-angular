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
	 * @ViewChild("customHeaderTemplate")
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

	constructor(rawData?: any) {
		// defaults so we dont leave things empty
		const defaults = {
			data: "",
			visible: this.visible,
			filterCount: this.filterCount
		};
		// fill our object with provided props, and fallback to defaults
		const data = Object.assign({}, defaults, rawData);
		this.data = data.data;
		this.visible = data.visible;
		this.filterCount = data.filterCount;
		this.template = data.template;
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
