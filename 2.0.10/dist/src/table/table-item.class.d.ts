import { TemplateRef } from "@angular/core";
export declare class TableItem {
    /**
     * Data for the table item.
     *
     * @type {*}
     * @memberof TableItem
     */
    data: any;
    /**
     * Data for the expanded part of the row.
     *
     * You only need to set it for the first item in the row.
     *
     * @type {*}
     * @memberof TableItem
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
     *
     * @type {TemplateRef<any>}
     * @memberof TableItem
     */
    template: TemplateRef<any>;
    /**
     * Template for rendering `expandedData`
     *
     * You only need to set it for the first item in the row.
     *
     * @type {TemplateRef<any>}
     * @memberof TableItem
     */
    expandedTemplate: TemplateRef<any>;
    /**
     * Creates an instance of TableItem.
     * @param {*} [rawData]
     * @memberof TableItem
     */
    constructor(rawData?: any);
}
