/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ViewContainerRef, ViewChild } from "@angular/core";
import { PlaceholderService } from "./../placeholder/placeholder.module";
/**
 * Deprecated as of v2.0, will be removed with v3.0
 * Using a dialog (popover, tooltip, etc) with appendToBody="true" in your application
 * requires *this* component (`n-dialog-placeholder`).
 * It would generally be placed near the end of your app component template
 * (app.component.ts or app.component.html) as:
 *
 * ```html
 * ...
 * <ibm-dialog-placeholder></ibm-dialog-placeholder>
 * ```
 *
 * A more complete example for `Popover` is given as follows:
 *
 * ```html
 * <button [ibmPopover]="Hello" appendToBody="true"></button>
 * ...
 * <ibm-dialog-placeholder></ibm-dialog-placeholder>
 * ```
 *
 * @deprecated
 */
export class DialogPlaceholder {
    /**
     * Creates an instance of `DialogPlaceholder`.
     * @param {?} placeholderService
     */
    constructor(placeholderService) {
        this.placeholderService = placeholderService;
    }
    /**
     * Initializes the component using `PlaceholderService`.
     * @return {?}
     */
    ngOnInit() {
        console.warn("`ibm-dialog-placeholder` has been deprecated in favour of `ibm-placeholder`");
        this.placeholderService.registerViewContainerRef(this.viewContainerRef);
    }
}
DialogPlaceholder.decorators = [
    { type: Component, args: [{
                selector: "ibm-dialog-placeholder",
                template: `<div #dialogPlaceholder></div>`
            }] }
];
/** @nocollapse */
DialogPlaceholder.ctorParameters = () => [
    { type: PlaceholderService }
];
DialogPlaceholder.propDecorators = {
    viewContainerRef: [{ type: ViewChild, args: ["dialogPlaceholder", { read: ViewContainerRef },] }]
};
function DialogPlaceholder_tsickle_Closure_declarations() {
    /**
     * Maintains a reference to the view DOM element of the `DialogPlaceholder`.
     * @type {?}
     */
    DialogPlaceholder.prototype.viewContainerRef;
    /** @type {?} */
    DialogPlaceholder.prototype.placeholderService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXBsYWNlaG9sZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJkaWFsb2cvZGlhbG9nLXBsYWNlaG9sZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFFVCxnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCekUsTUFBTTs7Ozs7SUFTTCxZQUFtQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtLQUFLOzs7OztJQUs5RCxRQUFRO1FBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyw2RUFBNkUsQ0FBQyxDQUFDO1FBQzVGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUN4RTs7O1lBckJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUUsZ0NBQWdDO2FBQzFDOzs7O1lBM0JRLGtCQUFrQjs7OytCQWdDekIsU0FBUyxTQUFDLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRPbkluaXQsXG5cdFZpZXdDb250YWluZXJSZWYsXG5cdFZpZXdDaGlsZFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGxhY2Vob2xkZXJTZXJ2aWNlIH0gZnJvbSBcIi4vLi4vcGxhY2Vob2xkZXIvcGxhY2Vob2xkZXIubW9kdWxlXCI7XG5cbi8qKlxuICogRGVwcmVjYXRlZCBhcyBvZiB2Mi4wLCB3aWxsIGJlIHJlbW92ZWQgd2l0aCB2My4wXG4gKiBVc2luZyBhIGRpYWxvZyAocG9wb3ZlciwgdG9vbHRpcCwgZXRjKSB3aXRoIGFwcGVuZFRvQm9keT1cInRydWVcIiBpbiB5b3VyIGFwcGxpY2F0aW9uXG4gKiByZXF1aXJlcyAqdGhpcyogY29tcG9uZW50IChgbi1kaWFsb2ctcGxhY2Vob2xkZXJgKS5cbiAqIEl0IHdvdWxkIGdlbmVyYWxseSBiZSBwbGFjZWQgbmVhciB0aGUgZW5kIG9mIHlvdXIgYXBwIGNvbXBvbmVudCB0ZW1wbGF0ZVxuICogKGFwcC5jb21wb25lbnQudHMgb3IgYXBwLmNvbXBvbmVudC5odG1sKSBhczpcbiAqXG4gKiBgYGBodG1sXG4gKiAuLi5cbiAqIDxpYm0tZGlhbG9nLXBsYWNlaG9sZGVyPjwvaWJtLWRpYWxvZy1wbGFjZWhvbGRlcj5cbiAqIGBgYFxuICpcbiAqIEEgbW9yZSBjb21wbGV0ZSBleGFtcGxlIGZvciBgUG9wb3ZlcmAgaXMgZ2l2ZW4gYXMgZm9sbG93czpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIFtpYm1Qb3BvdmVyXT1cIkhlbGxvXCIgYXBwZW5kVG9Cb2R5PVwidHJ1ZVwiPjwvYnV0dG9uPlxuICogLi4uXG4gKiA8aWJtLWRpYWxvZy1wbGFjZWhvbGRlcj48L2libS1kaWFsb2ctcGxhY2Vob2xkZXI+XG4gKiBgYGBcbiAqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLWRpYWxvZy1wbGFjZWhvbGRlclwiLFxuXHR0ZW1wbGF0ZTogYDxkaXYgI2RpYWxvZ1BsYWNlaG9sZGVyPjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nUGxhY2Vob2xkZXIgaW1wbGVtZW50cyBPbkluaXQge1xuXHQvKipcblx0ICogTWFpbnRhaW5zIGEgcmVmZXJlbmNlIHRvIHRoZSB2aWV3IERPTSBlbGVtZW50IG9mIHRoZSBgRGlhbG9nUGxhY2Vob2xkZXJgLlxuXHQgKi9cblx0QFZpZXdDaGlsZChcImRpYWxvZ1BsYWNlaG9sZGVyXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIGBEaWFsb2dQbGFjZWhvbGRlcmAuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGxhY2Vob2xkZXJTZXJ2aWNlOiBQbGFjZWhvbGRlclNlcnZpY2UpIHsgfVxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplcyB0aGUgY29tcG9uZW50IHVzaW5nIGBQbGFjZWhvbGRlclNlcnZpY2VgLlxuXHQgKi9cblx0bmdPbkluaXQoKSB7XG5cdFx0Y29uc29sZS53YXJuKFwiYGlibS1kaWFsb2ctcGxhY2Vob2xkZXJgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgaW4gZmF2b3VyIG9mIGBpYm0tcGxhY2Vob2xkZXJgXCIpO1xuXHRcdHRoaXMucGxhY2Vob2xkZXJTZXJ2aWNlLnJlZ2lzdGVyVmlld0NvbnRhaW5lclJlZih0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuXHR9XG59XG4iXX0=