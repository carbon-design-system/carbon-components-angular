/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class TableHeaderItem {
    /**
     * Creates an instance of TableHeaderItem.
     * \@memberof TableHeaderItem
     * @param {?=} rawData
     */
    constructor(rawData) {
        /**
         * Defines if column under this TableHeaderItem should be displayed.
         *
         * \@memberof TableHeaderItem
         */
        this.visible = true;
        /**
         * Disables sorting by default.
         *
         * \@memberof TableHeaderItem
         */
        this.sorted = false;
        /**
         * Enables sorting on click by default.
         * If false then this column won't show a sorting arrow at all.
         *
         * \@memberof TableHeaderItem
         */
        this.sortable = true;
        /**
         * Number of applied filters.
         *
         * `filter()` should set it to appropriate number.
         *
         * \@memberof TableHeaderItem
         */
        this.filterCount = 0;
        /**
         * Style for the column, applied to every element in the column.
         *
         * ngStyle-like format
         *
         * \@memberof TableHeaderItem
         */
        this.style = {};
        /**
         * used in `ascending`
         *
         * @protected
         * \@memberof TableHeaderItem
         */
        this._ascending = true;
        /** @type {?} */
        const defaults = {
            data: "",
            visible: this.visible,
            style: this.style,
            filterCount: this.filterCount,
            filterData: { data: "" }
        };
        /** @type {?} */
        const data = Object.assign({}, defaults, rawData);
        for (let property of Object.getOwnPropertyNames(data)) {
            if (data.hasOwnProperty(property)) {
                this[property] = data[property];
            }
        }
    }
    /**
     * If true, sort is set to ascending, if false descending will be true.
     *
     * \@memberof TableHeaderItem
     * @param {?} asc
     * @return {?}
     */
    set ascending(asc) {
        this._ascending = asc;
    }
    /**
     * @return {?}
     */
    get ascending() {
        return this._ascending;
    }
    /**
     * If true, sort is set to descending, if false ascending will be true.
     *
     * \@memberof TableHeaderItem
     * @param {?} desc
     * @return {?}
     */
    set descending(desc) {
        this._ascending = !desc;
    }
    /**
     * @return {?}
     */
    get descending() {
        return !this._ascending;
    }
    /**
     * Used for sorting rows of the table.
     *
     * Override to enable different sorting.
     *
     * < 0 if `one` should go before `two`
     * > 0 if `one` shoulg go after `two`
     * 0 if it doesn't matter (they are the same)
     * \@memberof TableHeaderItem
     * @param {?} one
     * @param {?} two
     * @return {?}
     */
    compare(one, two) {
        if (one.data < two.data) {
            return -1;
        }
        else if (one.data > two.data) {
            return 1;
        }
        else {
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
     * \@memberof TableHeaderItem
     * @param {?} item
     * @return {?}
     */
    filter(item) {
        this.filterCount = 0;
        return false;
    }
}
function TableHeaderItem_tsickle_Closure_declarations() {
    /**
     * Defines if column under this TableHeaderItem should be displayed.
     *
     * \@memberof TableHeaderItem
     * @type {?}
     */
    TableHeaderItem.prototype.visible;
    /**
     * Disables sorting by default.
     *
     * \@memberof TableHeaderItem
     * @type {?}
     */
    TableHeaderItem.prototype.sorted;
    /**
     * Enables sorting on click by default.
     * If false then this column won't show a sorting arrow at all.
     *
     * \@memberof TableHeaderItem
     * @type {?}
     */
    TableHeaderItem.prototype.sortable;
    /**
     * Number of applied filters.
     *
     * `filter()` should set it to appropriate number.
     *
     * \@memberof TableHeaderItem
     * @type {?}
     */
    TableHeaderItem.prototype.filterCount;
    /**
     * Attach a class to the column, both the header and column cells.
     *
     * \@memberof TableHeaderItem
     * @type {?}
     */
    TableHeaderItem.prototype.className;
    /**
     * Style for the column, applied to every element in the column.
     *
     * ngStyle-like format
     *
     * \@memberof TableHeaderItem
     * @type {?}
     */
    TableHeaderItem.prototype.style;
    /**
     * Data for the header item.
     *
     * \@memberof TableHeaderItem
     * @type {?}
     */
    TableHeaderItem.prototype.data;
    /**
     * Data for the header item for general usage in the controller.
     * For example, which `field` is this column related to.
     *
     * \@memberof TableHeaderItem
     * @type {?}
     */
    TableHeaderItem.prototype.metadata;
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
     * \@memberof TableHeaderItem
     * @type {?}
     */
    TableHeaderItem.prototype.template;
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
     * 	<ibm-label class="first-label">
     * 		Value
     * 		<input type="text" [(ngModel)]="filter1" class="input-field">
     * 	</ibm-label>
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
     * 	filterFooter: this.filterFooter
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
     * \@memberof TableHeaderItem
     * @type {?}
     */
    TableHeaderItem.prototype.filterTemplate;
    /**
     * Used along with `filterTemplate` to construct the filter popover
     *
     * \@memberof TableHeaderItem
     * @type {?}
     */
    TableHeaderItem.prototype.filterFooter;
    /**
     * This is where you store your data when applying filter.
     *
     * It is the actual object you have access to with `let-filter="data"` in your template.
     *
     * Make sure to store data in `filter.data` in your template, and you will have it
     * available in `filterData.data` in your extension of `TableHeaderItem`.
     *
     * Because angular and object references.
     *
     * \@memberof TableHeaderItem
     * @type {?}
     */
    TableHeaderItem.prototype.filterData;
    /**
     * used in `ascending`
     *
     * @protected
     * \@memberof TableHeaderItem
     * @type {?}
     */
    TableHeaderItem.prototype._ascending;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVhZGVyLWl0ZW0uY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsidGFibGUvdGFibGUtaGVhZGVyLWl0ZW0uY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE1BQU07Ozs7OztJQXFOTCxZQUFZLE9BQWE7Ozs7Ozt1QkEvTWYsSUFBSTs7Ozs7O3NCQU9MLEtBQUs7Ozs7Ozs7d0JBUUgsSUFBSTs7Ozs7Ozs7MkJBU0QsQ0FBQzs7Ozs7Ozs7cUJBZ0JQLEVBQUU7Ozs7Ozs7MEJBZ0thLElBQUk7O1FBUzFCLE1BQU0sUUFBUSxHQUFHO1lBQ2hCLElBQUksRUFBRSxFQUFFO1lBQ1IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsVUFBVSxFQUFFLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBQztTQUN0QixDQUFDOztRQUVGLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNsRCxLQUFLLElBQUksUUFBUSxJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0RCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDaEM7U0FDRDtLQUNEOzs7Ozs7OztJQWhMRCxJQUFJLFNBQVMsQ0FBQyxHQUFHO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO0tBQ3RCOzs7O0lBQ0QsSUFBSSxTQUFTO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3ZCOzs7Ozs7OztJQU9ELElBQUksVUFBVSxDQUFDLElBQUk7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQztLQUN4Qjs7OztJQUNELElBQUksVUFBVTtRQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCOzs7Ozs7Ozs7Ozs7OztJQThLRCxPQUFPLENBQUMsR0FBYyxFQUFFLEdBQWM7UUFDckMsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUU7WUFDeEIsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNWO2FBQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUU7WUFDL0IsT0FBTyxDQUFDLENBQUM7U0FDVDthQUFNO1lBQ04sT0FBTyxDQUFDLENBQUM7U0FDVDtLQUNEOzs7Ozs7Ozs7Ozs7Ozs7SUFnQkQsTUFBTSxDQUFDLElBQWU7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsT0FBTyxLQUFLLENBQUM7S0FDYjtDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGVJdGVtIH0gZnJvbSBcIi4vdGFibGUtaXRlbS5jbGFzc1wiO1xuaW1wb3J0IHtcblx0RXZlbnRFbWl0dGVyLFxuXHRUZW1wbGF0ZVJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgVGFibGVIZWFkZXJJdGVtIHtcblx0LyoqXG5cdCAqIERlZmluZXMgaWYgY29sdW1uIHVuZGVyIHRoaXMgVGFibGVIZWFkZXJJdGVtIHNob3VsZCBiZSBkaXNwbGF5ZWQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBUYWJsZUhlYWRlckl0ZW1cblx0ICovXG5cdHZpc2libGUgPSB0cnVlO1xuXG5cdC8qKlxuXHQgKiBEaXNhYmxlcyBzb3J0aW5nIGJ5IGRlZmF1bHQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBUYWJsZUhlYWRlckl0ZW1cblx0ICovXG5cdHNvcnRlZCA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBFbmFibGVzIHNvcnRpbmcgb24gY2xpY2sgYnkgZGVmYXVsdC5cblx0ICogSWYgZmFsc2UgdGhlbiB0aGlzIGNvbHVtbiB3b24ndCBzaG93IGEgc29ydGluZyBhcnJvdyBhdCBhbGwuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBUYWJsZUhlYWRlckl0ZW1cblx0ICovXG5cdHNvcnRhYmxlID0gdHJ1ZTtcblxuXHQvKipcblx0ICogTnVtYmVyIG9mIGFwcGxpZWQgZmlsdGVycy5cblx0ICpcblx0ICogYGZpbHRlcigpYCBzaG91bGQgc2V0IGl0IHRvIGFwcHJvcHJpYXRlIG51bWJlci5cblx0ICpcblx0ICogQG1lbWJlcm9mIFRhYmxlSGVhZGVySXRlbVxuXHQgKi9cblx0ZmlsdGVyQ291bnQgPSAwO1xuXG5cdC8qKlxuXHQgKiBBdHRhY2ggYSBjbGFzcyB0byB0aGUgY29sdW1uLCBib3RoIHRoZSBoZWFkZXIgYW5kIGNvbHVtbiBjZWxscy5cblx0ICpcblx0ICogQG1lbWJlcm9mIFRhYmxlSGVhZGVySXRlbVxuXHQgKi9cblx0Y2xhc3NOYW1lOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIFN0eWxlIGZvciB0aGUgY29sdW1uLCBhcHBsaWVkIHRvIGV2ZXJ5IGVsZW1lbnQgaW4gdGhlIGNvbHVtbi5cblx0ICpcblx0ICogbmdTdHlsZS1saWtlIGZvcm1hdFxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgVGFibGVIZWFkZXJJdGVtXG5cdCAqL1xuXHRzdHlsZSA9IHt9O1xuXG5cdC8qKlxuXHQgKiBJZiB0cnVlLCBzb3J0IGlzIHNldCB0byBhc2NlbmRpbmcsIGlmIGZhbHNlIGRlc2NlbmRpbmcgd2lsbCBiZSB0cnVlLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgVGFibGVIZWFkZXJJdGVtXG5cdCAqL1xuXHRzZXQgYXNjZW5kaW5nKGFzYykge1xuXHRcdHRoaXMuX2FzY2VuZGluZyA9IGFzYztcblx0fVxuXHRnZXQgYXNjZW5kaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLl9hc2NlbmRpbmc7XG5cdH1cblxuXHQvKipcblx0ICogSWYgdHJ1ZSwgc29ydCBpcyBzZXQgdG8gZGVzY2VuZGluZywgaWYgZmFsc2UgYXNjZW5kaW5nIHdpbGwgYmUgdHJ1ZS5cblx0ICpcblx0ICogQG1lbWJlcm9mIFRhYmxlSGVhZGVySXRlbVxuXHQgKi9cblx0c2V0IGRlc2NlbmRpbmcoZGVzYykge1xuXHRcdHRoaXMuX2FzY2VuZGluZyA9ICFkZXNjO1xuXHR9XG5cdGdldCBkZXNjZW5kaW5nKCkge1xuXHRcdHJldHVybiAhdGhpcy5fYXNjZW5kaW5nO1xuXHR9XG5cblx0LyoqXG5cdCAqIERhdGEgZm9yIHRoZSBoZWFkZXIgaXRlbS5cblx0ICpcblx0ICogQHR5cGUgeyp9XG5cdCAqIEBtZW1iZXJvZiBUYWJsZUhlYWRlckl0ZW1cblx0ICovXG5cdGRhdGE6IGFueTtcblxuXHQvKipcblx0ICogRGF0YSBmb3IgdGhlIGhlYWRlciBpdGVtIGZvciBnZW5lcmFsIHVzYWdlIGluIHRoZSBjb250cm9sbGVyLlxuXHQgKiBGb3IgZXhhbXBsZSwgd2hpY2ggYGZpZWxkYCBpcyB0aGlzIGNvbHVtbiByZWxhdGVkIHRvLlxuXHQgKlxuXHQgKiBAdHlwZSB7Kn1cblx0ICogQG1lbWJlcm9mIFRhYmxlSGVhZGVySXRlbVxuXHQgKi9cblx0bWV0YWRhdGE6IGFueTtcblxuXHQvKipcblx0ICogVXNlZCB0byBkaXNwbGF5IGRhdGEgaW4gYSBkZXNpcmVkIHdheS5cblx0ICpcblx0ICogSWYgbm90IHByb3ZpZGVkLCBkaXNwbGF5cyBkYXRhIGFzIGEgc2ltcGxlIHN0cmluZy5cblx0ICpcblx0ICogVXNhZ2U6XG5cdCAqXG5cdCAqIEluIGEgY29tcG9uZW50IHdoZXJlIHlvdSdyZSB1c2luZyB0aGUgdGFibGUgY3JlYXRlIGEgdGVtcGxhdGUgbGlrZTpcblx0ICpcblx0ICogYGBgaHRtbFxuXHQgKiA8bmctdGVtcGxhdGUgI2N1c3RvbUhlYWRlclRlbXBsYXRlIGxldC1kYXRhPVwiZGF0YVwiPlxuXHQgKiBcdFx0PGk+PGEgW3JvdXRlckxpbmtdPVwiZGF0YS5saW5rXCI+e3tkYXRhLm5hbWV9fTwvYT48L2k+XG5cdCAqIDwvbmctdGVtcGxhdGU+XG5cdCAqIGBgYFxuXHQgKiB3aGVyZSB3ZSBhc3N1bWUgeW91ciBkYXRhIGNvbnRhaW5zIGBsaW5rYCBhbmQgYG5hbWVgLiBgbGV0LWRhdGE9XCJkYXRhXCJgIGlzXG5cdCAqIG5lY2Vzc2FyeSBmb3IgeW91IHRvIGJlIGFibGUgdG8gYWNjZXNzIGl0ZW0ncyBkYXRhIGluIHRoZSB0ZW1wbGF0ZS5cblx0ICpcblx0ICogQ3JlYXRlIGBWaWV3Q2hpbGRgIHByb3BlcnR5IHdpdGg6XG5cdCAqXG5cdCAqIGBgYHR5cGVzY3JpcHRcblx0ICogKGF0KVZpZXdDaGlsZChcImN1c3RvbUhlYWRlclRlbXBsYXRlXCIpXG5cdCAqIHByb3RlY3RlZCBjdXN0b21IZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pjtcblx0ICogYGBgXG5cdCAqXG5cdCAqIFNldCB0aGUgdGVtcGxhdGUgdG8gdGhlIGhlYWRlciBpdGVtLCBmb3IgZXhhbXBsZTpcblx0ICpcblx0ICogYGBgdHlwZXNjcmlwdFxuXHQgKiB0aGlzLm1vZGVsLmhlYWRlciA9IFtcblx0ICogXHRcdG5ldyBUYWJsZUhlYWRlckl0ZW0oe2RhdGE6IHtuYW1lOiBcIkN1c3RvbSBoZWFkZXJcIiwgbGluazogXCIvdGFibGVcIn0sIHRlbXBsYXRlOiB0aGlzLmN1c3RvbUhlYWRlclRlbXBsYXRlfSlcblx0ICogXTtcblx0ICogYGBgXG5cdCAqIEB0eXBlIHtUZW1wbGF0ZVJlZjxhbnk+fVxuXHQgKiBAbWVtYmVyb2YgVGFibGVIZWFkZXJJdGVtXG5cdCAqL1xuXHR0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHQvKipcblx0ICogVXNlZCBhcyBhIHRlbXBsYXRlIGZvciBwb3BvdmVyIGZpbHRlci5cblx0ICpcblx0ICogYGxldC1wb3BvdmVyPVwicG9wb3ZlclwiYCB3aWxsIGdpdmUgeW91IGFjY2VzcyB0byBwb3BvdmVyIGNvbXBvbmVudCBhbmQgYWxsb3cgeW91IHRvXG5cdCAqIG1hbmlwdWxhdGUgaXQgaWYgbmVlZGVkLlxuXHQgKlxuXHQgKiBgbGV0LWZpbHRlcj1cImZpbHRlclwiYCB3aWxsIGdpdmUgeW91IGFjY2VzcyB0byB0aGUgXCJmaWx0ZXJcIi4gVGhlIG1haW4gdGFrZWF3YXkgaXNcblx0ICogc3RvcmUgdGhlIGRhdGEgeW91IG5lZWQgdG8gYGZpbHRlci5kYXRhYC4gWW91IHdpbGwgYmUgYWJsZSB0byBhY2Nlc3MgaXQgYXNcblx0ICogYHRoaXMuZmlsdGVyRGF0YS5kYXRhYCBmcm9tIHlvdXIgYGZpbHRlcigpYCBmdW5jdGlvbiB3aGVuIHlvdSBleHRlbmQgYFRhYmxlSGVhZGVySXRlbWBcblx0ICpcblx0ICogRXhhbXBsZTpcblx0ICogYGBgaHRtbFxuXHQgKiA8bmctdGVtcGxhdGUgI2ZpbHRlciBsZXQtcG9wb3Zlcj1cInBvcG92ZXJcIj5cblx0ICogXHQ8aWJtLWxhYmVsIGNsYXNzPVwiZmlyc3QtbGFiZWxcIj5cblx0ICogXHRcdFZhbHVlXG5cdCAqIFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImZpbHRlcjFcIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG5cdCAqIFx0PC9pYm0tbGFiZWw+XG5cdCAqIDwvbmctdGVtcGxhdGU+XG5cdCAqXG5cdCAqIDxuZy10ZW1wbGF0ZSAjZmlsdGVyRm9vdGVyIGxldC1wb3BvdmVyPVwicG9wb3ZlclwiIGxldC1maWx0ZXI9XCJkYXRhXCI+XG5cdCAqIFx0PGJ1dHRvbiBjbGFzcz1cImJ0bi0tcHJpbWFyeVwiIChjbGljayk9XCJmaWx0ZXIuZGF0YSA9IGZpbHRlcjE7IHBvcG92ZXIub25DbG9zZSgpXCI+QXBwbHk8L2J1dHRvbj5cblx0ICogXHQ8YnV0dG9uIGNsYXNzPVwiYnRuLS1zZWNvbmRhcnlcIiAoY2xpY2spPVwicG9wb3Zlci5vbkNsb3NlKClcIj5DYW5jZWw8L2J1dHRvbj5cblx0ICogPC9uZy10ZW1wbGF0ZT5cblx0ICogYGBgXG5cdCAqXG5cdCAqIFNldCB0aGUgdGVtcGxhdGUgd2l0aCwgZm9yIGV4YW1wbGU6XG5cdCAqIGBgYHR5cGVzY3JpcHRcblx0ICogbmV3IEZpbHRlcmFibGVIZWFkZXJJdGVtKHtcblx0ICogXHRmaWx0ZXJUZW1wbGF0ZTogdGhpcy5maWx0ZXIsXG5cdCAqXHRmaWx0ZXJGb290ZXI6IHRoaXMuZmlsdGVyRm9vdGVyXG5cdCAqIH0pXG5cdCAqIGBgYFxuXHQgKlxuXHQgKiBgYGB0eXBlc2NyaXB0XG5cdCAqIGNsYXNzIEZpbHRlcmFibGVIZWFkZXJJdGVtIGV4dGVuZHMgVGFibGVIZWFkZXJJdGVtIHtcblx0ICogXHQvLyBjdXN0b20gZmlsdGVyIGZ1bmN0aW9uXG5cdCAqIFx0ZmlsdGVyKGl0ZW06IFRhYmxlSXRlbSk6IGJvb2xlYW4ge1xuXHQgKiBcdFx0aWYgKHR5cGVvZiBpdGVtLmRhdGEgPT09IFwic3RyaW5nXCIgJiYgaXRlbS5kYXRhLmluZGV4T2YodGhpcy5maWx0ZXJEYXRhLmRhdGEpID49IDApIHtcblx0ICogXHRcdFx0dGhpcy5maWx0ZXJDb3VudCA9IDE7XG5cdCAqIFx0XHRcdHJldHVybiBmYWxzZTtcblx0ICogXHRcdH1cblx0ICogXHRcdHRoaXMuZmlsdGVyQ291bnQgPSAwO1xuXHQgKiBcdFx0cmV0dXJuIHRydWU7XG5cdCAqIFx0fVxuXHQgKiB9XG5cdCAqIGBgYFxuXHQgKlxuXHQgKiBAdHlwZSB7VGVtcGxhdGVSZWY8YW55Pn1cblx0ICogQG1lbWJlcm9mIFRhYmxlSGVhZGVySXRlbVxuXHQgKi9cblx0ZmlsdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0LyoqXG5cdCAqIFVzZWQgYWxvbmcgd2l0aCBgZmlsdGVyVGVtcGxhdGVgIHRvIGNvbnN0cnVjdCB0aGUgZmlsdGVyIHBvcG92ZXJcblx0ICpcblx0ICogQHR5cGUge1RlbXBsYXRlUmVmPGFueT59XG5cdCAqIEBtZW1iZXJvZiBUYWJsZUhlYWRlckl0ZW1cblx0ICovXG5cdGZpbHRlckZvb3RlcjogVGVtcGxhdGVSZWY8YW55PjtcblxuXHQvKipcblx0ICogVGhpcyBpcyB3aGVyZSB5b3Ugc3RvcmUgeW91ciBkYXRhIHdoZW4gYXBwbHlpbmcgZmlsdGVyLlxuXHQgKlxuXHQgKiBJdCBpcyB0aGUgYWN0dWFsIG9iamVjdCB5b3UgaGF2ZSBhY2Nlc3MgdG8gd2l0aCBgbGV0LWZpbHRlcj1cImRhdGFcImAgaW4geW91ciB0ZW1wbGF0ZS5cblx0ICpcblx0ICogTWFrZSBzdXJlIHRvIHN0b3JlIGRhdGEgaW4gYGZpbHRlci5kYXRhYCBpbiB5b3VyIHRlbXBsYXRlLCBhbmQgeW91IHdpbGwgaGF2ZSBpdFxuXHQgKiBhdmFpbGFibGUgaW4gYGZpbHRlckRhdGEuZGF0YWAgaW4geW91ciBleHRlbnNpb24gb2YgYFRhYmxlSGVhZGVySXRlbWAuXG5cdCAqXG5cdCAqIEJlY2F1c2UgYW5ndWxhciBhbmQgb2JqZWN0IHJlZmVyZW5jZXMuXG5cdCAqXG5cdCAqIEB0eXBlIHsqfVxuXHQgKiBAbWVtYmVyb2YgVGFibGVIZWFkZXJJdGVtXG5cdCAqL1xuXHRmaWx0ZXJEYXRhOiBhbnk7XG5cblx0LyoqXG5cdCAqIHVzZWQgaW4gYGFzY2VuZGluZ2Bcblx0ICpcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAbWVtYmVyb2YgVGFibGVIZWFkZXJJdGVtXG5cdCAqL1xuXHRwcm90ZWN0ZWQgX2FzY2VuZGluZyA9IHRydWU7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgVGFibGVIZWFkZXJJdGVtLlxuXHQgKiBAcGFyYW0geyp9IFtyYXdEYXRhXVxuXHQgKiBAbWVtYmVyb2YgVGFibGVIZWFkZXJJdGVtXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihyYXdEYXRhPzogYW55KSB7XG5cdFx0Ly8gZGVmYXVsdHMgc28gd2UgZG9udCBsZWF2ZSB0aGluZ3MgZW1wdHlcblx0XHRjb25zdCBkZWZhdWx0cyA9IHtcblx0XHRcdGRhdGE6IFwiXCIsXG5cdFx0XHR2aXNpYmxlOiB0aGlzLnZpc2libGUsXG5cdFx0XHRzdHlsZTogdGhpcy5zdHlsZSxcblx0XHRcdGZpbHRlckNvdW50OiB0aGlzLmZpbHRlckNvdW50LFxuXHRcdFx0ZmlsdGVyRGF0YToge2RhdGE6IFwiXCJ9XG5cdFx0fTtcblx0XHQvLyBmaWxsIG91ciBvYmplY3Qgd2l0aCBwcm92aWRlZCBwcm9wcywgYW5kIGZhbGxiYWNrIHRvIGRlZmF1bHRzXG5cdFx0Y29uc3QgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLCByYXdEYXRhKTtcblx0XHRmb3IgKGxldCBwcm9wZXJ0eSBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkYXRhKSkge1xuXHRcdFx0aWYgKGRhdGEuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG5cdFx0XHRcdHRoaXNbcHJvcGVydHldID0gZGF0YVtwcm9wZXJ0eV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFVzZWQgZm9yIHNvcnRpbmcgcm93cyBvZiB0aGUgdGFibGUuXG5cdCAqXG5cdCAqIE92ZXJyaWRlIHRvIGVuYWJsZSBkaWZmZXJlbnQgc29ydGluZy5cblx0ICpcblx0ICogQHBhcmFtIHtUYWJsZUl0ZW19IG9uZVxuXHQgKiBAcGFyYW0ge1RhYmxlSXRlbX0gdHdvXG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9XG5cdCAqIDwgMCBpZiBgb25lYCBzaG91bGQgZ28gYmVmb3JlIGB0d29gXG5cdCAqID4gMCBpZiBgb25lYCBzaG91bGcgZ28gYWZ0ZXIgYHR3b2Bcblx0ICogMCBpZiBpdCBkb2Vzbid0IG1hdHRlciAodGhleSBhcmUgdGhlIHNhbWUpXG5cdCAqIEBtZW1iZXJvZiBUYWJsZUhlYWRlckl0ZW1cblx0ICovXG5cdGNvbXBhcmUob25lOiBUYWJsZUl0ZW0sIHR3bzogVGFibGVJdGVtKTogbnVtYmVyIHtcblx0XHRpZiAob25lLmRhdGEgPCB0d28uZGF0YSkge1xuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH0gZWxzZSBpZiAob25lLmRhdGEgPiB0d28uZGF0YSkge1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBVc2VkIHRvIGZpbHRlciByb3dzIGluIHRoZSB0YWJsZS5cblx0ICpcblx0ICogT3ZlcnJpZGUgdG8gbWFrZSBhIGN1c3RvbSBmaWx0ZXIuXG5cdCAqXG5cdCAqIEV2ZW4gdGhvdWdoIHRoZXJlIGlzIGp1c3Qgb25lIGZpbHRlciBmdW5jdGlvbiwgdGhlcmUgY2FuIGJlIG11bHRpcGxlIGZpbHRlcnMuXG5cdCAqIFdoZW4gaW1wbGVtZW50aW5nIGZpbHRlciwgc2V0IGBmaWx0ZXJDb3VudGAgYmVmb3JlIHJldHVybmluZy5cblx0ICpcblx0ICogQHBhcmFtIHtUYWJsZUl0ZW19IGl0ZW1cblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqIGB0cnVlYCB0byBoaWRlIHRoZSByb3dcblx0ICogYGZhbHNlYCB0byBzaG93IHRoZSByb3dcblx0ICogQG1lbWJlcm9mIFRhYmxlSGVhZGVySXRlbVxuXHQgKi9cblx0ZmlsdGVyKGl0ZW06IFRhYmxlSXRlbSk6IGJvb2xlYW4ge1xuXHRcdHRoaXMuZmlsdGVyQ291bnQgPSAwO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuIl19