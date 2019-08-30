/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class TableItem {
    /**
     * Creates an instance of TableItem.
     * \@memberof TableItem
     * @param {?=} rawData
     */
    constructor(rawData) {
        /** @type {?} */
        const defaults = {
            data: ""
        };
        /** @type {?} */
        const data = Object.assign({}, defaults, rawData);
        this.data = data.data;
        this.expandedData = data.expandedData;
        this.template = data.template;
        this.expandedTemplate = data.expandedTemplate;
    }
}
function TableItem_tsickle_Closure_declarations() {
    /**
     * Data for the table item.
     *
     * \@memberof TableItem
     * @type {?}
     */
    TableItem.prototype.data;
    /**
     * Data for the expanded part of the row.
     *
     * You only need to set it for the first item in the row.
     *
     * \@memberof TableItem
     * @type {?}
     */
    TableItem.prototype.expandedData;
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
     * \@memberof TableItem
     * @type {?}
     */
    TableItem.prototype.template;
    /**
     * Template for rendering `expandedData`
     *
     * You only need to set it for the first item in the row.
     *
     * \@memberof TableItem
     * @type {?}
     */
    TableItem.prototype.expandedTemplate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaXRlbS5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ0YWJsZS90YWJsZS1pdGVtLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxNQUFNOzs7Ozs7SUF1RUwsWUFBWSxPQUFhOztRQUV4QixNQUFNLFFBQVEsR0FBRztZQUNoQixJQUFJLEVBQUUsRUFBRTtTQUNSLENBQUM7O1FBRUYsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7S0FDOUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdFRlbXBsYXRlUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCBjbGFzcyBUYWJsZUl0ZW0ge1xuXHQvKipcblx0ICogRGF0YSBmb3IgdGhlIHRhYmxlIGl0ZW0uXG5cdCAqXG5cdCAqIEB0eXBlIHsqfVxuXHQgKiBAbWVtYmVyb2YgVGFibGVJdGVtXG5cdCAqL1xuXHRkYXRhOiBhbnk7XG5cblx0LyoqXG5cdCAqIERhdGEgZm9yIHRoZSBleHBhbmRlZCBwYXJ0IG9mIHRoZSByb3cuXG5cdCAqXG5cdCAqIFlvdSBvbmx5IG5lZWQgdG8gc2V0IGl0IGZvciB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgcm93LlxuXHQgKlxuXHQgKiBAdHlwZSB7Kn1cblx0ICogQG1lbWJlcm9mIFRhYmxlSXRlbVxuXHQgKi9cblx0ZXhwYW5kZWREYXRhOiBhbnk7XG5cblx0LyoqXG5cdCAqIFVzZWQgdG8gZGlzcGxheSBkYXRhIGluIGEgZGVzaXJlZCB3YXkuXG5cdCAqXG5cdCAqIElmIG5vdCBwcm92aWRlZCwgZGlzcGxheXMgZGF0YSBhcyBhIHNpbXBsZSBzdHJpbmcuXG5cdCAqXG5cdCAqIFVzYWdlOlxuXHQgKlxuXHQgKiBJbiBhIGNvbXBvbmVudCB3aGVyZSB5b3UncmUgdXNpbmcgdGhlIHRhYmxlIGNyZWF0ZSBhIHRlbXBsYXRlIGxpa2U6XG5cdCAqXG5cdCAqIGBgYGh0bWxcblx0ICogPG5nLXRlbXBsYXRlICNjdXN0b21JdGVtVGVtcGxhdGUgbGV0LWRhdGE9XCJkYXRhXCI+XG5cdCAqIFx0PGk+PGEgW3JvdXRlckxpbmtdPVwiZGF0YS5saW5rXCI+e3tkYXRhLm5hbWV9fTwvYT48L2k+XG5cdCAqIDwvbmctdGVtcGxhdGU+XG5cdCAqIGBgYFxuXHQgKiB3aGVyZSB3ZSBhc3N1bWUgeW91ciBkYXRhIGNvbnRhaW5zIGBsaW5rYCBhbmQgYG5hbWVgLiBgbGV0LWRhdGE9XCJkYXRhXCJgIGlzXG5cdCAqIG5lY2Vzc2FyeSBmb3IgeW91IHRvIGJlIGFibGUgdG8gYWNjZXNzIGl0ZW0ncyBkYXRhIGluIHRoZSB0ZW1wbGF0ZS5cblx0ICpcblx0ICogQ3JlYXRlIGBWaWV3Q2hpbGRgIHByb3BlcnR5IHdpdGg6XG5cdCAqXG5cdCAqIGBgYHR5cGVzY3JpcHRcblx0ICogKGF0KVZpZXdDaGlsZChcImN1c3RvbUl0ZW1UZW1wbGF0ZVwiKVxuXHQgKiBwcm90ZWN0ZWQgY3VzdG9tSXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXHQgKiBgYGBcblx0ICpcblx0ICogU2V0IHRoZSB0ZW1wbGF0ZSB0byB0aGUgdGFibGUgaXRlbSwgZm9yIGV4YW1wbGU6XG5cdCAqXG5cdCAqIGBgYHR5cGVzY3JpcHRcblx0ICogdGhpcy5tb2RlbC5kYXRhID0gW1xuXHQgKiBcdFtuZXcgVGFibGVJdGVtKHtkYXRhOiB7bmFtZTogXCJDdXN0b20gaXRlbVwiLCBsaW5rOiBcIi90YWJsZVwifSwgdGVtcGxhdGU6IHRoaXMuY3VzdG9tSXRlbVRlbXBsYXRlfSldXG5cdCAqIF07XG5cdCAqIGBgYFxuXHQgKlxuXHQgKiBAdHlwZSB7VGVtcGxhdGVSZWY8YW55Pn1cblx0ICogQG1lbWJlcm9mIFRhYmxlSXRlbVxuXHQgKi9cblx0dGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0LyoqXG5cdCAqIFRlbXBsYXRlIGZvciByZW5kZXJpbmcgYGV4cGFuZGVkRGF0YWBcblx0ICpcblx0ICogWW91IG9ubHkgbmVlZCB0byBzZXQgaXQgZm9yIHRoZSBmaXJzdCBpdGVtIGluIHRoZSByb3cuXG5cdCAqXG5cdCAqIEB0eXBlIHtUZW1wbGF0ZVJlZjxhbnk+fVxuXHQgKiBAbWVtYmVyb2YgVGFibGVJdGVtXG5cdCAqL1xuXHRleHBhbmRlZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFRhYmxlSXRlbS5cblx0ICogQHBhcmFtIHsqfSBbcmF3RGF0YV1cblx0ICogQG1lbWJlcm9mIFRhYmxlSXRlbVxuXHQgKi9cblx0Y29uc3RydWN0b3IocmF3RGF0YT86IGFueSkge1xuXHRcdC8vIGRlZmF1bHRzIHNvIHdlIGRvbnQgbGVhdmUgdGhpbmdzIGVtcHR5XG5cdFx0Y29uc3QgZGVmYXVsdHMgPSB7XG5cdFx0XHRkYXRhOiBcIlwiXG5cdFx0fTtcblx0XHQvLyBmaWxsIG91ciBvYmplY3Qgd2l0aCBwcm92aWRlZCBwcm9wcywgYW5kIGZhbGxiYWNrIHRvIGRlZmF1bHRzXG5cdFx0Y29uc3QgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLCByYXdEYXRhKTtcblx0XHR0aGlzLmRhdGEgPSBkYXRhLmRhdGE7XG5cdFx0dGhpcy5leHBhbmRlZERhdGEgPSBkYXRhLmV4cGFuZGVkRGF0YTtcblx0XHR0aGlzLnRlbXBsYXRlID0gZGF0YS50ZW1wbGF0ZTtcblx0XHR0aGlzLmV4cGFuZGVkVGVtcGxhdGUgPSBkYXRhLmV4cGFuZGVkVGVtcGxhdGU7XG5cdH1cbn1cbiJdfQ==