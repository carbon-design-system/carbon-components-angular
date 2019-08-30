/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ViewContainerRef, ViewChild } from "@angular/core";
import { PlaceholderService } from "./placeholder.service";
/**
 * Using a modal, dialog (Tooltip, OverflowMenu), or any other component that draws out of the normal page flow
 * in your application *requires* this component (`ibm-placeholder`).
 * It would generally be placed near the end of your root app component template
 * (app.component.ts or app.component.html) as:
 *
 * ```
 * <ibm-placeholder></ibm-placeholder>
 * ```
 */
export class Placeholder {
    /**
     * Creates an instance of `Placeholder`.
     * @param {?} placeholderService
     */
    constructor(placeholderService) {
        this.placeholderService = placeholderService;
    }
    /**
     * Registers the components view with `PlaceholderService`
     * @return {?}
     */
    ngOnInit() {
        this.placeholderService.registerViewContainerRef(this.viewContainerRef);
    }
}
Placeholder.decorators = [
    { type: Component, args: [{
                selector: "ibm-placeholder",
                template: `<div #placeholder></div>`
            }] }
];
/** @nocollapse */
Placeholder.ctorParameters = () => [
    { type: PlaceholderService }
];
Placeholder.propDecorators = {
    viewContainerRef: [{ type: ViewChild, args: ["placeholder", { read: ViewContainerRef },] }]
};
function Placeholder_tsickle_Closure_declarations() {
    /**
     * Maintains a reference to the view DOM element of the `Placeholder`.
     * @type {?}
     */
    Placeholder.prototype.viewContainerRef;
    /** @type {?} */
    Placeholder.prototype.placeholderService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Vob2xkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbInBsYWNlaG9sZGVyL3BsYWNlaG9sZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFFVCxnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7OztBQWdCM0QsTUFBTTs7Ozs7SUFTTCxZQUFtQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtLQUFLOzs7OztJQUs5RCxRQUFRO1FBQ1AsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0tBQ3hFOzs7WUFwQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSwwQkFBMEI7YUFDcEM7Ozs7WUFmUSxrQkFBa0I7OzsrQkFvQnpCLFNBQVMsU0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdE9uSW5pdCxcblx0Vmlld0NvbnRhaW5lclJlZixcblx0Vmlld0NoaWxkXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQbGFjZWhvbGRlclNlcnZpY2UgfSBmcm9tIFwiLi9wbGFjZWhvbGRlci5zZXJ2aWNlXCI7XG5cbi8qKlxuICogVXNpbmcgYSBtb2RhbCwgZGlhbG9nIChUb29sdGlwLCBPdmVyZmxvd01lbnUpLCBvciBhbnkgb3RoZXIgY29tcG9uZW50IHRoYXQgZHJhd3Mgb3V0IG9mIHRoZSBub3JtYWwgcGFnZSBmbG93XG4gKiBpbiB5b3VyIGFwcGxpY2F0aW9uICpyZXF1aXJlcyogdGhpcyBjb21wb25lbnQgKGBpYm0tcGxhY2Vob2xkZXJgKS5cbiAqIEl0IHdvdWxkIGdlbmVyYWxseSBiZSBwbGFjZWQgbmVhciB0aGUgZW5kIG9mIHlvdXIgcm9vdCBhcHAgY29tcG9uZW50IHRlbXBsYXRlXG4gKiAoYXBwLmNvbXBvbmVudC50cyBvciBhcHAuY29tcG9uZW50Lmh0bWwpIGFzOlxuICpcbiAqIGBgYFxuICogPGlibS1wbGFjZWhvbGRlcj48L2libS1wbGFjZWhvbGRlcj5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLXBsYWNlaG9sZGVyXCIsXG5cdHRlbXBsYXRlOiBgPGRpdiAjcGxhY2Vob2xkZXI+PC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBQbGFjZWhvbGRlciBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdC8qKlxuXHQgKiBNYWludGFpbnMgYSByZWZlcmVuY2UgdG8gdGhlIHZpZXcgRE9NIGVsZW1lbnQgb2YgdGhlIGBQbGFjZWhvbGRlcmAuXG5cdCAqL1xuXHRAVmlld0NoaWxkKFwicGxhY2Vob2xkZXJcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYFBsYWNlaG9sZGVyYC5cblx0ICovXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwbGFjZWhvbGRlclNlcnZpY2U6IFBsYWNlaG9sZGVyU2VydmljZSkgeyB9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyB0aGUgY29tcG9uZW50cyB2aWV3IHdpdGggYFBsYWNlaG9sZGVyU2VydmljZWBcblx0ICovXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMucGxhY2Vob2xkZXJTZXJ2aWNlLnJlZ2lzdGVyVmlld0NvbnRhaW5lclJlZih0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuXHR9XG59XG4iXX0=