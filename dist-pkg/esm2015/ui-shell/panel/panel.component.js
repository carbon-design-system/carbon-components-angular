/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from "@angular/core";
/**
 * `Panel` is a component that can be used to display content on the right side of the screen.
 * `Panel`s are generally activated by and linked to a `HeaderAction` component.
 */
export class Panel {
    constructor() {
        /**
         * Controls the visibility of the panel
         */
        this.expanded = false;
    }
}
Panel.decorators = [
    { type: Component, args: [{
                selector: "ibm-panel",
                template: `
		<aside
			class="bx--panel--overlay"
			[ngClass]="{
				'bx--panel--expanded': expanded
			}">
			<ng-content></ng-content>
		</aside>
	`
            }] }
];
Panel.propDecorators = {
    expanded: [{ type: Input }]
};
function Panel_tsickle_Closure_declarations() {
    /**
     * Controls the visibility of the panel
     * @type {?}
     */
    Panel.prototype.expanded;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpLXNoZWxsL3BhbmVsL3BhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBa0JqRCxNQUFNOzs7Ozt3QkFJZSxLQUFLOzs7O1lBaEJ6QixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7RUFRVDthQUNEOzs7dUJBS0MsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG4vKipcbiAqIGBQYW5lbGAgaXMgYSBjb21wb25lbnQgdGhhdCBjYW4gYmUgdXNlZCB0byBkaXNwbGF5IGNvbnRlbnQgb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIHNjcmVlbi5cbiAqIGBQYW5lbGBzIGFyZSBnZW5lcmFsbHkgYWN0aXZhdGVkIGJ5IGFuZCBsaW5rZWQgdG8gYSBgSGVhZGVyQWN0aW9uYCBjb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tcGFuZWxcIixcblx0dGVtcGxhdGU6IGBcblx0XHQ8YXNpZGVcblx0XHRcdGNsYXNzPVwiYngtLXBhbmVsLS1vdmVybGF5XCJcblx0XHRcdFtuZ0NsYXNzXT1cIntcblx0XHRcdFx0J2J4LS1wYW5lbC0tZXhwYW5kZWQnOiBleHBhbmRlZFxuXHRcdFx0fVwiPlxuXHRcdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHRcdDwvYXNpZGU+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgUGFuZWwge1xuXHQvKipcblx0ICogQ29udHJvbHMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIHBhbmVsXG5cdCAqL1xuXHRASW5wdXQoKSBleHBhbmRlZCA9IGZhbHNlO1xufVxuIl19