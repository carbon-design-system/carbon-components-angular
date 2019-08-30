/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ContentChildren, QueryList, ContentChild } from "@angular/core";
import { Tab } from "./tab.component";
import { TabHeaders } from "./tab-headers.component";
/**
 * Build out your application's tabs using this component.
 * This is the parent of the `Tab` and `TabHeader` components.
 *
 * [See demo](../../?path=/story/tabs--basic)
 *
 * `Tabs` expects a set of `n-tab` elements
 *
 * ```html
 * <ibm-tabs>
 * 	<ibm-tab heading='tab1'>
 * 		tab 1 content
 * 	</ibm-tab>
 * 	<ibm-tab heading='tab1'>
 * 		tab 2 content
 * 	</ibm-tab>
 * 	<!-- ... -->
 * 	<ibm-tab heading='tab1'>
 * 		tab n content
 * 	</ibm-tab>
 * </ibm-tabs>
 * ```
 *
 * <example-url>../../iframe.html?id=tabs--basic</example-url>
 */
export class Tabs {
    constructor() {
        /**
         * Takes either the string value 'top' or 'bottom' to place TabHeader
         * relative to the `TabPanel`s.
         */
        this.position = "top";
        /**
         * Set to 'true' to have `Tab` items cached and not reloaded on tab switching.
         */
        this.cacheActive = false;
        /**
         * Set to 'true' to have tabs automatically activated and have their content displayed when they receive focus.
         */
        this.followFocus = true;
        /**
         * Set to `true` to put tabs in a loading state.
         */
        this.skeleton = false;
        /**
         * Set to `true` to have the tabIndex of the all tabpanels be -1.
         */
        this.isNavigation = false;
    }
    /**
     * After content is initialized update `Tab`s to cache (if turned on) and set the initial
     * selected Tab item.
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.tabHeaders) {
            this.tabHeaders.cacheActive = this.cacheActive;
        }
        this.tabs.forEach(tab => {
            tab.tabIndex = this.isNavigation ? -1 : 0;
        });
    }
    /**
     * true if the n-tab's are passed directly to the component as children
     * @return {?}
     */
    hasTabHeaders() {
        return this.tabs.length > 0;
    }
}
Tabs.decorators = [
    { type: Component, args: [{
                selector: "ibm-tabs",
                template: `
			<ibm-tab-headers
				*ngIf="hasTabHeaders() && position === 'top'"
				[skeleton]="skeleton"
				[tabs]="tabs"
				[followFocus]="followFocus"
				[cacheActive]="cacheActive"
				[contentBefore]="before"
				[contentAfter]="after"
				[ariaLabel]="ariaLabel"
				[ariaLabelledby]="ariaLabelledby">
			</ibm-tab-headers>
			<ng-content></ng-content>
			<ng-template #before>
				<ng-content select="[before]"></ng-content>
			</ng-template>
			<ng-template #after>
				<ng-content select="[after]"></ng-content>
			</ng-template>
			<ibm-tab-headers
				*ngIf="hasTabHeaders() && position === 'bottom'"
				[skeleton]="skeleton"
				[tabs]="tabs"
				[cacheActive]="cacheActive">
			</ibm-tab-headers>
	 `
            }] }
];
Tabs.propDecorators = {
    position: [{ type: Input }],
    cacheActive: [{ type: Input }],
    followFocus: [{ type: Input }],
    skeleton: [{ type: Input }],
    isNavigation: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    ariaLabelledby: [{ type: Input }],
    tabs: [{ type: ContentChildren, args: [Tab, { descendants: false },] }],
    tabHeaders: [{ type: ContentChild, args: [TabHeaders,] }]
};
function Tabs_tsickle_Closure_declarations() {
    /**
     * Takes either the string value 'top' or 'bottom' to place TabHeader
     * relative to the `TabPanel`s.
     * @type {?}
     */
    Tabs.prototype.position;
    /**
     * Set to 'true' to have `Tab` items cached and not reloaded on tab switching.
     * @type {?}
     */
    Tabs.prototype.cacheActive;
    /**
     * Set to 'true' to have tabs automatically activated and have their content displayed when they receive focus.
     * @type {?}
     */
    Tabs.prototype.followFocus;
    /**
     * Set to `true` to put tabs in a loading state.
     * @type {?}
     */
    Tabs.prototype.skeleton;
    /**
     * Set to `true` to have the tabIndex of the all tabpanels be -1.
     * @type {?}
     */
    Tabs.prototype.isNavigation;
    /**
     * Sets the aria label on the `TabHeader`s nav element.
     * @type {?}
     */
    Tabs.prototype.ariaLabel;
    /**
     * Sets the aria labelledby on the `TabHeader`s nav element.
     * @type {?}
     */
    Tabs.prototype.ariaLabelledby;
    /**
     * Maintains a `QueryList` of the `Tab` elements and updates if `Tab`s are added or removed.
     * @type {?}
     */
    Tabs.prototype.tabs;
    /**
     * Content child of the projected header component
     * @type {?}
     */
    Tabs.prototype.tabHeaders;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsidGFicy90YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUNmLFNBQVMsRUFFVCxZQUFZLEVBRVosTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RHJELE1BQU07Ozs7Ozt3QkFLaUMsS0FBSzs7OzsyQkFJcEIsS0FBSzs7OzsyQkFJTCxJQUFJOzs7O3dCQUlQLEtBQUs7Ozs7NEJBSUQsS0FBSzs7Ozs7OztJQXVCN0Isa0JBQWtCO1FBQ2pCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQy9DO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkIsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFDLENBQUMsQ0FBQztLQUNIOzs7OztJQUtELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztLQUM1Qjs7O1lBeEZELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJSO2FBQ0Y7Ozt1QkFNQyxLQUFLOzBCQUlMLEtBQUs7MEJBSUwsS0FBSzt1QkFJTCxLQUFLOzJCQUlMLEtBQUs7d0JBSUwsS0FBSzs2QkFJTCxLQUFLO21CQUtMLGVBQWUsU0FBQyxHQUFHLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFO3lCQUkzQyxZQUFZLFNBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdENvbnRlbnRDaGlsZHJlbixcblx0UXVlcnlMaXN0LFxuXHRBZnRlckNvbnRlbnRJbml0LFxuXHRDb250ZW50Q2hpbGQsXG5cdFF1ZXJ5XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUYWIgfSBmcm9tIFwiLi90YWIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUYWJIZWFkZXJzIH0gZnJvbSBcIi4vdGFiLWhlYWRlcnMuY29tcG9uZW50XCI7XG5cblxuLyoqXG4gKiBCdWlsZCBvdXQgeW91ciBhcHBsaWNhdGlvbidzIHRhYnMgdXNpbmcgdGhpcyBjb21wb25lbnQuXG4gKiBUaGlzIGlzIHRoZSBwYXJlbnQgb2YgdGhlIGBUYWJgIGFuZCBgVGFiSGVhZGVyYCBjb21wb25lbnRzLlxuICpcbiAqIFtTZWUgZGVtb10oLi4vLi4vP3BhdGg9L3N0b3J5L3RhYnMtLWJhc2ljKVxuICpcbiAqIGBUYWJzYCBleHBlY3RzIGEgc2V0IG9mIGBuLXRhYmAgZWxlbWVudHNcbiAqXG4gKiBgYGBodG1sXG4gKiA8aWJtLXRhYnM+XG4gKiBcdDxpYm0tdGFiIGhlYWRpbmc9J3RhYjEnPlxuICogXHRcdHRhYiAxIGNvbnRlbnRcbiAqIFx0PC9pYm0tdGFiPlxuICogXHQ8aWJtLXRhYiBoZWFkaW5nPSd0YWIxJz5cbiAqIFx0XHR0YWIgMiBjb250ZW50XG4gKiBcdDwvaWJtLXRhYj5cbiAqIFx0PCEtLSAuLi4gLS0+XG4gKiBcdDxpYm0tdGFiIGhlYWRpbmc9J3RhYjEnPlxuICogXHRcdHRhYiBuIGNvbnRlbnRcbiAqIFx0PC9pYm0tdGFiPlxuICogPC9pYm0tdGFicz5cbiAqIGBgYFxuICpcbiAqIDxleGFtcGxlLXVybD4uLi8uLi9pZnJhbWUuaHRtbD9pZD10YWJzLS1iYXNpYzwvZXhhbXBsZS11cmw+XG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tdGFic1wiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdFx0PGlibS10YWItaGVhZGVyc1xuXHRcdFx0XHQqbmdJZj1cImhhc1RhYkhlYWRlcnMoKSAmJiBwb3NpdGlvbiA9PT0gJ3RvcCdcIlxuXHRcdFx0XHRbc2tlbGV0b25dPVwic2tlbGV0b25cIlxuXHRcdFx0XHRbdGFic109XCJ0YWJzXCJcblx0XHRcdFx0W2ZvbGxvd0ZvY3VzXT1cImZvbGxvd0ZvY3VzXCJcblx0XHRcdFx0W2NhY2hlQWN0aXZlXT1cImNhY2hlQWN0aXZlXCJcblx0XHRcdFx0W2NvbnRlbnRCZWZvcmVdPVwiYmVmb3JlXCJcblx0XHRcdFx0W2NvbnRlbnRBZnRlcl09XCJhZnRlclwiXG5cdFx0XHRcdFthcmlhTGFiZWxdPVwiYXJpYUxhYmVsXCJcblx0XHRcdFx0W2FyaWFMYWJlbGxlZGJ5XT1cImFyaWFMYWJlbGxlZGJ5XCI+XG5cdFx0XHQ8L2libS10YWItaGVhZGVycz5cblx0XHRcdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblx0XHRcdDxuZy10ZW1wbGF0ZSAjYmVmb3JlPlxuXHRcdFx0XHQ8bmctY29udGVudCBzZWxlY3Q9XCJbYmVmb3JlXVwiPjwvbmctY29udGVudD5cblx0XHRcdDwvbmctdGVtcGxhdGU+XG5cdFx0XHQ8bmctdGVtcGxhdGUgI2FmdGVyPlxuXHRcdFx0XHQ8bmctY29udGVudCBzZWxlY3Q9XCJbYWZ0ZXJdXCI+PC9uZy1jb250ZW50PlxuXHRcdFx0PC9uZy10ZW1wbGF0ZT5cblx0XHRcdDxpYm0tdGFiLWhlYWRlcnNcblx0XHRcdFx0Km5nSWY9XCJoYXNUYWJIZWFkZXJzKCkgJiYgcG9zaXRpb24gPT09ICdib3R0b20nXCJcblx0XHRcdFx0W3NrZWxldG9uXT1cInNrZWxldG9uXCJcblx0XHRcdFx0W3RhYnNdPVwidGFic1wiXG5cdFx0XHRcdFtjYWNoZUFjdGl2ZV09XCJjYWNoZUFjdGl2ZVwiPlxuXHRcdFx0PC9pYm0tdGFiLWhlYWRlcnM+XG5cdCBgXG59KVxuZXhwb3J0IGNsYXNzIFRhYnMgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblx0LyoqXG5cdCAqIFRha2VzIGVpdGhlciB0aGUgc3RyaW5nIHZhbHVlICd0b3AnIG9yICdib3R0b20nIHRvIHBsYWNlIFRhYkhlYWRlclxuXHQgKiByZWxhdGl2ZSB0byB0aGUgYFRhYlBhbmVsYHMuXG5cdCAqL1xuXHRASW5wdXQoKSBwb3NpdGlvbjogXCJ0b3BcIiB8IFwiYm90dG9tXCIgPSBcInRvcFwiO1xuXHQvKipcblx0ICogU2V0IHRvICd0cnVlJyB0byBoYXZlIGBUYWJgIGl0ZW1zIGNhY2hlZCBhbmQgbm90IHJlbG9hZGVkIG9uIHRhYiBzd2l0Y2hpbmcuXG5cdCAqL1xuXHRASW5wdXQoKSBjYWNoZUFjdGl2ZSA9IGZhbHNlO1xuXHQvKipcblx0ICogU2V0IHRvICd0cnVlJyB0byBoYXZlIHRhYnMgYXV0b21hdGljYWxseSBhY3RpdmF0ZWQgYW5kIGhhdmUgdGhlaXIgY29udGVudCBkaXNwbGF5ZWQgd2hlbiB0aGV5IHJlY2VpdmUgZm9jdXMuXG5cdCAqL1xuXHRASW5wdXQoKSBmb2xsb3dGb2N1cyA9IHRydWU7XG5cdC8qKlxuXHQgKiBTZXQgdG8gYHRydWVgIHRvIHB1dCB0YWJzIGluIGEgbG9hZGluZyBzdGF0ZS5cblx0ICovXG5cdEBJbnB1dCgpIHNrZWxldG9uID0gZmFsc2U7XG5cdC8qKlxuXHQgKiBTZXQgdG8gYHRydWVgIHRvIGhhdmUgdGhlIHRhYkluZGV4IG9mIHRoZSBhbGwgdGFicGFuZWxzIGJlIC0xLlxuXHQgKi9cblx0QElucHV0KCkgaXNOYXZpZ2F0aW9uID0gZmFsc2U7XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBhcmlhIGxhYmVsIG9uIHRoZSBgVGFiSGVhZGVyYHMgbmF2IGVsZW1lbnQuXG5cdCAqL1xuXHRASW5wdXQoKSBhcmlhTGFiZWw6IHN0cmluZztcblx0LyoqXG5cdCAqIFNldHMgdGhlIGFyaWEgbGFiZWxsZWRieSBvbiB0aGUgYFRhYkhlYWRlcmBzIG5hdiBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCkgYXJpYUxhYmVsbGVkYnk6IHN0cmluZztcblxuXHQvKipcblx0ICogTWFpbnRhaW5zIGEgYFF1ZXJ5TGlzdGAgb2YgdGhlIGBUYWJgIGVsZW1lbnRzIGFuZCB1cGRhdGVzIGlmIGBUYWJgcyBhcmUgYWRkZWQgb3IgcmVtb3ZlZC5cblx0ICovXG5cdEBDb250ZW50Q2hpbGRyZW4oVGFiLCB7IGRlc2NlbmRhbnRzOiBmYWxzZSB9KSB0YWJzOiBRdWVyeUxpc3Q8VGFiPjtcblx0LyoqXG5cdCAqIENvbnRlbnQgY2hpbGQgb2YgdGhlIHByb2plY3RlZCBoZWFkZXIgY29tcG9uZW50XG5cdCAqL1xuXHRAQ29udGVudENoaWxkKFRhYkhlYWRlcnMpIHRhYkhlYWRlcnM7XG5cblx0LyoqXG5cdCAqIEFmdGVyIGNvbnRlbnQgaXMgaW5pdGlhbGl6ZWQgdXBkYXRlIGBUYWJgcyB0byBjYWNoZSAoaWYgdHVybmVkIG9uKSBhbmQgc2V0IHRoZSBpbml0aWFsXG5cdCAqIHNlbGVjdGVkIFRhYiBpdGVtLlxuXHQgKi9cblx0bmdBZnRlckNvbnRlbnRJbml0KCkge1xuXHRcdGlmICh0aGlzLnRhYkhlYWRlcnMpIHtcblx0XHRcdHRoaXMudGFiSGVhZGVycy5jYWNoZUFjdGl2ZSA9IHRoaXMuY2FjaGVBY3RpdmU7XG5cdFx0fVxuXG5cdFx0dGhpcy50YWJzLmZvckVhY2godGFiID0+IHtcblx0XHRcdHRhYi50YWJJbmRleCA9IHRoaXMuaXNOYXZpZ2F0aW9uID8gLTEgOiAwO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIHRydWUgaWYgdGhlIG4tdGFiJ3MgYXJlIHBhc3NlZCBkaXJlY3RseSB0byB0aGUgY29tcG9uZW50IGFzIGNoaWxkcmVuXG5cdCAqL1xuXHRoYXNUYWJIZWFkZXJzKCkge1xuXHRcdHJldHVybiB0aGlzLnRhYnMubGVuZ3RoID4gMDtcblx0fVxufVxuIl19