import {
	TemplateRef
} from "@angular/core";

export class TableItem {
	/**
	 * Data for the table item.
	 */
	data: any;

	/**
	 * Data for the expanded part of the row.
	 *
	 * You only need to set it for the first item in the row.
	 */
	expandedData: any;

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
	 * <ng-template #customItemTemplate let-data="data">
	 * 	<i><a [routerLink]="data.link">{{data.name}}</a></i>
	 * </ng-template>
	 * ```
	 * where we assume your data contains `link` and `name`. `let-data="data"` is
	 * necessary for you to be able to access item's data in the template.
	 *
	 * Create `ViewChild` property with:
	 *
	 * ```typescript
	 * (at)ViewChild("customItemTemplate")
	 * protected customItemTemplate: TemplateRef<any>;
	 * ```
	 *
	 * Set the template to the table item, for example:
	 *
	 * ```typescript
	 * this.model.data = [
	 * 	[new TableItem({data: {name: "Custom item", link: "/table"}, template: this.customItemTemplate})]
	 * ];
	 * ```
	 */
	template: TemplateRef<any>;

	/**
	 * Template for rendering `expandedData`
	 *
	 * You only need to set it for the first item in the row.
	 *
	 */
	expandedTemplate: TemplateRef<any>;

	/**
	 * The number of rows to span
	 */
	rowSpan = 1;

	/**
	 * The number of columns to span
	 */
	colSpan = 1;

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

		if (this.data.toString) {
			return this.data.toString();
		}

		return JSON.stringify(this.data);
	}

	set title(title) {
		this._title = title;
	}

	private _title: string;

	/**
	 * Creates an instance of TableItem.
	 */
	constructor(rawData?: any) {
		// defaults so we dont leave things empty
		const defaults = {
			data: ""
		};
		// fill our object with provided props, and fallback to defaults
		const data = Object.assign({}, defaults, rawData);
		for (const property of Object.getOwnPropertyNames(data)) {
			if (data.hasOwnProperty(property)) {
				this[property] = data[property];
			}
		}
	}
}
