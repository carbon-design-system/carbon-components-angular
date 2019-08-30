/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, TemplateRef, HostBinding } from "@angular/core";
/** @type {?} */
let nextId = 0;
/**
 * The `Tab` component is a child of the `Tabs` component.
 * It represents one `Tab` item and its content within a panel of other `Tab` items.
 *
 *
 * `Tab` takes a string or `TemplateRef` for the header, and any content for the body of the tab.
 * Disabled states should be handled by the application (ie. switch to the tab, but display some
 * indication as to _why_ the tab is disabled).
 *
 * When the tab is selected the `select` output will be triggered.
 * The `select` output will also be triggered for the active tab when the tabs are loaded or updated.
 *
 *
 * Tab with string header:
 *
 * ```html
 * <ibm-tab heading='tab1'>
 * 	tab 1 content
 * </ibm-tab>
 * ```
 *
 * Tab with custom header:
 *
 * ```html
 * <ng-template #tabHeading>
 * 	<ibm-icon
 * 		icon="facebook"
 * 		size="sm"
 * 		style="margin-right: 7px;">
 * 	</ibm-icon>
 * 	Hello Tab 1
 * </ng-template>
 * <ibm-tabs>
 * 	<ibm-tab [heading]="tabHeading">
 * 		Tab 1 content <ibm-icon icon="alert" size="lg"></ibm-icon>
 * 	</ibm-tab>
 * 	<ibm-tab heading='Tab2'>
 * 		Tab 2 content
 * 	</ibm-tab>
 * 	<ibm-tab heading='Tab3'>
 * 		Tab 3 content
 * 	</ibm-tab>
 * </ibm-tabs>
 * ```
 */
export class Tab {
    constructor() {
        /**
         * Boolean value reflects if the `Tab` is using a custom template for the heading.
         * Default value is false.
         */
        this.headingIsTemplate = false;
        /**
         * Indicates whether the `Tab` is active/selected.
         * Determines whether it's `TabPanel` is rendered.
         */
        this.active = false;
        /**
         * Indicates whether or not the `Tab` item is disabled.
         */
        this.disabled = false;
        this.tabIndex = 0;
        /**
         * Sets the id of the `Tab`. Will be uniquely generated if not provided.
         */
        this.id = `n-tab-${nextId++}`;
        /**
         * Set to true to have Tab items cached and not reloaded on tab switching.
         */
        this.cacheActive = false;
        /**
         * Value 'selected' to be emitted after a new `Tab` is selected.
         */
        this.selected = new EventEmitter();
        /**
         * Used to set the id property on the element.
         */
        this.attrClass = this.id;
    }
    /**
     * Checks for custom heading template on initialization and updates the value
     * of the boolean 'headingIsTemplate'.
     * @return {?}
     */
    ngOnInit() {
        if (this.heading instanceof TemplateRef) {
            this.headingIsTemplate = true;
        }
    }
    /**
     * Emit the status of the `Tab`, specifically 'select' and 'selected' properties.
     * @return {?}
     */
    doSelect() {
        this.selected.emit();
    }
    /**
     * Returns value indicating whether this `Tab` should be rendered in a `TabPanel`.
     * @return {?}
     */
    shouldRender() {
        return this.active || this.cacheActive;
    }
}
Tab.decorators = [
    { type: Component, args: [{
                selector: "ibm-tab",
                template: `
		<div
			[tabindex]="tabIndex"
			role="tabpanel"
			*ngIf="shouldRender()"
			[ngStyle]="{'display': active ? null : 'none'}"
			[attr.aria-labelledby]="id + '-header'">
			<ng-content></ng-content>
		</div>
	 `
            }] }
];
Tab.propDecorators = {
    heading: [{ type: Input }],
    context: [{ type: Input }],
    active: [{ type: Input }],
    disabled: [{ type: Input }],
    tabIndex: [{ type: Input }],
    id: [{ type: Input }],
    cacheActive: [{ type: Input }],
    selected: [{ type: Output }],
    attrClass: [{ type: HostBinding, args: ["attr.id",] }]
};
function Tab_tsickle_Closure_declarations() {
    /**
     * Boolean value reflects if the `Tab` is using a custom template for the heading.
     * Default value is false.
     * @type {?}
     */
    Tab.prototype.headingIsTemplate;
    /**
     * The `Tab`'s title to be displayed or custom temaplate for the `Tab` heading.
     * @type {?}
     */
    Tab.prototype.heading;
    /**
     * Allows the user to pass data to the custom template for the `Tab` heading.
     * @type {?}
     */
    Tab.prototype.context;
    /**
     * Indicates whether the `Tab` is active/selected.
     * Determines whether it's `TabPanel` is rendered.
     * @type {?}
     */
    Tab.prototype.active;
    /**
     * Indicates whether or not the `Tab` item is disabled.
     * @type {?}
     */
    Tab.prototype.disabled;
    /** @type {?} */
    Tab.prototype.tabIndex;
    /**
     * Sets the id of the `Tab`. Will be uniquely generated if not provided.
     * @type {?}
     */
    Tab.prototype.id;
    /**
     * Set to true to have Tab items cached and not reloaded on tab switching.
     * @type {?}
     */
    Tab.prototype.cacheActive;
    /**
     * Value 'selected' to be emitted after a new `Tab` is selected.
     * @type {?}
     */
    Tab.prototype.selected;
    /**
     * Used to set the id property on the element.
     * @type {?}
     */
    Tab.prototype.attrClass;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ0YWJzL3RhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRVosV0FBVyxFQUNYLFdBQVcsRUFDWCxNQUFNLGVBQWUsQ0FBQzs7QUFHdkIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERmLE1BQU07Ozs7OztpQ0FLc0IsS0FBSzs7Ozs7c0JBY2QsS0FBSzs7Ozt3QkFJSCxLQUFLO3dCQUVMLENBQUM7Ozs7a0JBS1AsU0FBUyxNQUFNLEVBQUUsRUFBRTs7OzsyQkFJVixLQUFLOzs7O3dCQUlhLElBQUksWUFBWSxFQUFROzs7O3lCQUs3QixJQUFJLENBQUMsRUFBRTs7Ozs7OztJQU0zQyxRQUFRO1FBQ1AsSUFBSSxJQUFJLENBQUMsT0FBTyxZQUFZLFdBQVcsRUFBRTtZQUN4QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1NBQzlCO0tBQ0Q7Ozs7O0lBS0QsUUFBUTtRQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDckI7Ozs7O0lBS0QsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3ZDOzs7WUFoRkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUU7Ozs7Ozs7OztHQVNSO2FBQ0Y7OztzQkFXQyxLQUFLO3NCQUlMLEtBQUs7cUJBS0wsS0FBSzt1QkFJTCxLQUFLO3VCQUVMLEtBQUs7aUJBS0wsS0FBSzswQkFJTCxLQUFLO3VCQUlMLE1BQU07d0JBS04sV0FBVyxTQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdE9uSW5pdCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyLFxuXHRDb250ZW50Q2hpbGQsXG5cdFRlbXBsYXRlUmVmLFxuXHRIb3N0QmluZGluZ1xufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5cbmxldCBuZXh0SWQgPSAwO1xuXG4vKipcbiogVGhlIGBUYWJgIGNvbXBvbmVudCBpcyBhIGNoaWxkIG9mIHRoZSBgVGFic2AgY29tcG9uZW50LlxuKiBJdCByZXByZXNlbnRzIG9uZSBgVGFiYCBpdGVtIGFuZCBpdHMgY29udGVudCB3aXRoaW4gYSBwYW5lbCBvZiBvdGhlciBgVGFiYCBpdGVtcy5cbipcbipcbiogYFRhYmAgdGFrZXMgYSBzdHJpbmcgb3IgYFRlbXBsYXRlUmVmYCBmb3IgdGhlIGhlYWRlciwgYW5kIGFueSBjb250ZW50IGZvciB0aGUgYm9keSBvZiB0aGUgdGFiLlxuKiBEaXNhYmxlZCBzdGF0ZXMgc2hvdWxkIGJlIGhhbmRsZWQgYnkgdGhlIGFwcGxpY2F0aW9uIChpZS4gc3dpdGNoIHRvIHRoZSB0YWIsIGJ1dCBkaXNwbGF5IHNvbWVcbiogaW5kaWNhdGlvbiBhcyB0byBfd2h5XyB0aGUgdGFiIGlzIGRpc2FibGVkKS5cbipcbiogV2hlbiB0aGUgdGFiIGlzIHNlbGVjdGVkIHRoZSBgc2VsZWN0YCBvdXRwdXQgd2lsbCBiZSB0cmlnZ2VyZWQuXG4qIFRoZSBgc2VsZWN0YCBvdXRwdXQgd2lsbCBhbHNvIGJlIHRyaWdnZXJlZCBmb3IgdGhlIGFjdGl2ZSB0YWIgd2hlbiB0aGUgdGFicyBhcmUgbG9hZGVkIG9yIHVwZGF0ZWQuXG4qXG4qXG4qIFRhYiB3aXRoIHN0cmluZyBoZWFkZXI6XG4qXG4qIGBgYGh0bWxcbiogPGlibS10YWIgaGVhZGluZz0ndGFiMSc+XG4qIFx0dGFiIDEgY29udGVudFxuKiA8L2libS10YWI+XG4qIGBgYFxuKlxuKiBUYWIgd2l0aCBjdXN0b20gaGVhZGVyOlxuKlxuKiBgYGBodG1sXG4qIDxuZy10ZW1wbGF0ZSAjdGFiSGVhZGluZz5cbiogXHQ8aWJtLWljb25cbiogXHRcdGljb249XCJmYWNlYm9va1wiXG4qIFx0XHRzaXplPVwic21cIlxuKiBcdFx0c3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDdweDtcIj5cbiogXHQ8L2libS1pY29uPlxuKiBcdEhlbGxvIFRhYiAxXG4qIDwvbmctdGVtcGxhdGU+XG4qIDxpYm0tdGFicz5cbiogXHQ8aWJtLXRhYiBbaGVhZGluZ109XCJ0YWJIZWFkaW5nXCI+XG4qIFx0XHRUYWIgMSBjb250ZW50IDxpYm0taWNvbiBpY29uPVwiYWxlcnRcIiBzaXplPVwibGdcIj48L2libS1pY29uPlxuKiBcdDwvaWJtLXRhYj5cbiogXHQ8aWJtLXRhYiBoZWFkaW5nPSdUYWIyJz5cbiogXHRcdFRhYiAyIGNvbnRlbnRcbiogXHQ8L2libS10YWI+XG4qIFx0PGlibS10YWIgaGVhZGluZz0nVGFiMyc+XG4qIFx0XHRUYWIgMyBjb250ZW50XG4qIFx0PC9pYm0tdGFiPlxuKiA8L2libS10YWJzPlxuKiBgYGBcbiovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLXRhYlwiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXZcblx0XHRcdFt0YWJpbmRleF09XCJ0YWJJbmRleFwiXG5cdFx0XHRyb2xlPVwidGFicGFuZWxcIlxuXHRcdFx0Km5nSWY9XCJzaG91bGRSZW5kZXIoKVwiXG5cdFx0XHRbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBhY3RpdmUgPyBudWxsIDogJ25vbmUnfVwiXG5cdFx0XHRbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiaWQgKyAnLWhlYWRlcidcIj5cblx0XHRcdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblx0XHQ8L2Rpdj5cblx0IGBcbn0pXG5leHBvcnQgY2xhc3MgVGFiIGltcGxlbWVudHMgT25Jbml0IHtcblx0LyoqXG5cdCAqIEJvb2xlYW4gdmFsdWUgcmVmbGVjdHMgaWYgdGhlIGBUYWJgIGlzIHVzaW5nIGEgY3VzdG9tIHRlbXBsYXRlIGZvciB0aGUgaGVhZGluZy5cblx0ICogRGVmYXVsdCB2YWx1ZSBpcyBmYWxzZS5cblx0ICovXG5cdHB1YmxpYyBoZWFkaW5nSXNUZW1wbGF0ZSA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBUaGUgYFRhYmAncyB0aXRsZSB0byBiZSBkaXNwbGF5ZWQgb3IgY3VzdG9tIHRlbWFwbGF0ZSBmb3IgdGhlIGBUYWJgIGhlYWRpbmcuXG5cdCAqL1xuXHRASW5wdXQoKSBoZWFkaW5nOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXHQvKipcblx0ICogQWxsb3dzIHRoZSB1c2VyIHRvIHBhc3MgZGF0YSB0byB0aGUgY3VzdG9tIHRlbXBsYXRlIGZvciB0aGUgYFRhYmAgaGVhZGluZy5cblx0ICovXG5cdEBJbnB1dCgpIGNvbnRleHQ6IGFueTtcblx0LyoqXG5cdCAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBgVGFiYCBpcyBhY3RpdmUvc2VsZWN0ZWQuXG5cdCAqIERldGVybWluZXMgd2hldGhlciBpdCdzIGBUYWJQYW5lbGAgaXMgcmVuZGVyZWQuXG5cdCAqL1xuXHRASW5wdXQoKSBhY3RpdmUgPSBmYWxzZTtcblx0LyoqXG5cdCAqIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCB0aGUgYFRhYmAgaXRlbSBpcyBkaXNhYmxlZC5cblx0ICovXG5cdEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG5cblx0QElucHV0KCkgdGFiSW5kZXggPSAwO1xuXHQvLyBkbyB3ZSBuZWVkIGlkJ3M/XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBpZCBvZiB0aGUgYFRhYmAuIFdpbGwgYmUgdW5pcXVlbHkgZ2VuZXJhdGVkIGlmIG5vdCBwcm92aWRlZC5cblx0ICovXG5cdEBJbnB1dCgpIGlkID0gYG4tdGFiLSR7bmV4dElkKyt9YDtcblx0LyoqXG5cdCAqIFNldCB0byB0cnVlIHRvIGhhdmUgVGFiIGl0ZW1zIGNhY2hlZCBhbmQgbm90IHJlbG9hZGVkIG9uIHRhYiBzd2l0Y2hpbmcuXG5cdCAqL1xuXHRASW5wdXQoKSBjYWNoZUFjdGl2ZSA9IGZhbHNlO1xuXHQvKipcblx0ICogVmFsdWUgJ3NlbGVjdGVkJyB0byBiZSBlbWl0dGVkIGFmdGVyIGEgbmV3IGBUYWJgIGlzIHNlbGVjdGVkLlxuXHQgKi9cblx0QE91dHB1dCgpIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0LyoqXG5cdCAqIFVzZWQgdG8gc2V0IHRoZSBpZCBwcm9wZXJ0eSBvbiB0aGUgZWxlbWVudC5cblx0ICovXG5cdEBIb3N0QmluZGluZyhcImF0dHIuaWRcIikgYXR0ckNsYXNzID0gdGhpcy5pZDtcblxuXHQvKipcblx0ICogQ2hlY2tzIGZvciBjdXN0b20gaGVhZGluZyB0ZW1wbGF0ZSBvbiBpbml0aWFsaXphdGlvbiBhbmQgdXBkYXRlcyB0aGUgdmFsdWVcblx0ICogb2YgdGhlIGJvb2xlYW4gJ2hlYWRpbmdJc1RlbXBsYXRlJy5cblx0ICovXG5cdG5nT25Jbml0KCkge1xuXHRcdGlmICh0aGlzLmhlYWRpbmcgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuXHRcdFx0dGhpcy5oZWFkaW5nSXNUZW1wbGF0ZSA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEVtaXQgdGhlIHN0YXR1cyBvZiB0aGUgYFRhYmAsIHNwZWNpZmljYWxseSAnc2VsZWN0JyBhbmQgJ3NlbGVjdGVkJyBwcm9wZXJ0aWVzLlxuXHQgKi9cblx0ZG9TZWxlY3QoKSB7XG5cdFx0dGhpcy5zZWxlY3RlZC5lbWl0KCk7XG5cdH1cblxuXHQvKipcbiBcdCogUmV0dXJucyB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBgVGFiYCBzaG91bGQgYmUgcmVuZGVyZWQgaW4gYSBgVGFiUGFuZWxgLlxuIFx0Ki9cblx0c2hvdWxkUmVuZGVyKCkge1xuXHRcdHJldHVybiB0aGlzLmFjdGl2ZSB8fCB0aGlzLmNhY2hlQWN0aXZlO1xuXHR9XG59XG4iXX0=