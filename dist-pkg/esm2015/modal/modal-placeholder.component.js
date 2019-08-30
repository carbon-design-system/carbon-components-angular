/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ViewContainerRef, ViewChild } from "@angular/core";
import { PlaceholderService } from "./../placeholder/placeholder.service";
/**
 * Deprecated with v2.0, will be removed in v3.0
 * Using a modal in your application requires *this* component (`n-modal-placeholder`).
 * It would generally be placed near the end of your app component template
 * (app.component.ts or app.component.html) as:
 *
 * ```html
 * ...
 * <ibm-modal-placeholder></ibm-modal-placeholder>
 * ```
 *
 * A more complete example for `Modal` is given as follows:
 *
 * ```html
 * <ibm-modal size="xl" (overlaySelected)="closeModal()">
 * 	<ibm-modal-header (closeSelect)="closeModal()">Header text</ibm-modal-header>
 * 	<section class="modal-body">
 * 		<h1>It Works!</h1>
 * 		{{modalText}}
 * 	</section>
 * 	<ibm-modal-footer><button class="btn cancel-button" (click)="closeModal()">Cancel</button></ibm-modal-footer>
 * </ibm-modal>
 * ...
 * <ibm-modal-placeholder></ibm-modal-placeholder>
 * ```
 *
 * @deprecated
 */
export class ModalPlaceholder {
    /**
     * Creates an instance of `ModalPlaceholder`.
     * @param {?} placeholderService
     */
    constructor(placeholderService) {
        this.placeholderService = placeholderService;
    }
    /**
     * Initializes the component using `ModalService`.
     * @return {?}
     */
    ngOnInit() {
        console.warn("`ibm-modal-placeholder` has been deprecated in favour of `ibm-placeholder`");
        this.placeholderService.registerViewContainerRef(this.viewContainerRef);
    }
}
ModalPlaceholder.decorators = [
    { type: Component, args: [{
                selector: "ibm-modal-placeholder",
                template: `<div #modalplaceholder></div>`
            }] }
];
/** @nocollapse */
ModalPlaceholder.ctorParameters = () => [
    { type: PlaceholderService }
];
ModalPlaceholder.propDecorators = {
    viewContainerRef: [{ type: ViewChild, args: ["modalplaceholder", { read: ViewContainerRef },] }]
};
function ModalPlaceholder_tsickle_Closure_declarations() {
    /**
     * Maintains a reference to the view DOM element of the `ModalPlaceholder`.
     * @type {?}
     */
    ModalPlaceholder.prototype.viewContainerRef;
    /** @type {?} */
    ModalPlaceholder.prototype.placeholderService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtcGxhY2Vob2xkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbIm1vZGFsL21vZGFsLXBsYWNlaG9sZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFFVCxnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DMUUsTUFBTTs7Ozs7SUFTTCxZQUFtQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtLQUFJOzs7OztJQUs3RCxRQUFRO1FBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyw0RUFBNEUsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUN4RTs7O1lBckJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUUsK0JBQStCO2FBQ3pDOzs7O1lBbENRLGtCQUFrQjs7OytCQXVDekIsU0FBUyxTQUFDLGtCQUFrQixFQUFFLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRPbkluaXQsXG5cdFZpZXdDb250YWluZXJSZWYsXG5cdFZpZXdDaGlsZFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGxhY2Vob2xkZXJTZXJ2aWNlIH0gZnJvbSBcIi4vLi4vcGxhY2Vob2xkZXIvcGxhY2Vob2xkZXIuc2VydmljZVwiO1xuXG5cbi8qKlxuICogRGVwcmVjYXRlZCB3aXRoIHYyLjAsIHdpbGwgYmUgcmVtb3ZlZCBpbiB2My4wXG4gKiBVc2luZyBhIG1vZGFsIGluIHlvdXIgYXBwbGljYXRpb24gcmVxdWlyZXMgKnRoaXMqIGNvbXBvbmVudCAoYG4tbW9kYWwtcGxhY2Vob2xkZXJgKS5cbiAqIEl0IHdvdWxkIGdlbmVyYWxseSBiZSBwbGFjZWQgbmVhciB0aGUgZW5kIG9mIHlvdXIgYXBwIGNvbXBvbmVudCB0ZW1wbGF0ZVxuICogKGFwcC5jb21wb25lbnQudHMgb3IgYXBwLmNvbXBvbmVudC5odG1sKSBhczpcbiAqXG4gKiBgYGBodG1sXG4gKiAuLi5cbiAqIDxpYm0tbW9kYWwtcGxhY2Vob2xkZXI+PC9pYm0tbW9kYWwtcGxhY2Vob2xkZXI+XG4gKiBgYGBcbiAqXG4gKiBBIG1vcmUgY29tcGxldGUgZXhhbXBsZSBmb3IgYE1vZGFsYCBpcyBnaXZlbiBhcyBmb2xsb3dzOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxpYm0tbW9kYWwgc2l6ZT1cInhsXCIgKG92ZXJsYXlTZWxlY3RlZCk9XCJjbG9zZU1vZGFsKClcIj5cbiAqIFx0PGlibS1tb2RhbC1oZWFkZXIgKGNsb3NlU2VsZWN0KT1cImNsb3NlTW9kYWwoKVwiPkhlYWRlciB0ZXh0PC9pYm0tbW9kYWwtaGVhZGVyPlxuICogXHQ8c2VjdGlvbiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAqIFx0XHQ8aDE+SXQgV29ya3MhPC9oMT5cbiAqIFx0XHR7e21vZGFsVGV4dH19XG4gKiBcdDwvc2VjdGlvbj5cbiAqIFx0PGlibS1tb2RhbC1mb290ZXI+PGJ1dHRvbiBjbGFzcz1cImJ0biBjYW5jZWwtYnV0dG9uXCIgKGNsaWNrKT1cImNsb3NlTW9kYWwoKVwiPkNhbmNlbDwvYnV0dG9uPjwvaWJtLW1vZGFsLWZvb3Rlcj5cbiAqIDwvaWJtLW1vZGFsPlxuICogLi4uXG4gKiA8aWJtLW1vZGFsLXBsYWNlaG9sZGVyPjwvaWJtLW1vZGFsLXBsYWNlaG9sZGVyPlxuICogYGBgXG4gKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1tb2RhbC1wbGFjZWhvbGRlclwiLFxuXHR0ZW1wbGF0ZTogYDxkaXYgI21vZGFscGxhY2Vob2xkZXI+PC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbFBsYWNlaG9sZGVyIGltcGxlbWVudHMgT25Jbml0IHtcblx0LyoqXG5cdCAqIE1haW50YWlucyBhIHJlZmVyZW5jZSB0byB0aGUgdmlldyBET00gZWxlbWVudCBvZiB0aGUgYE1vZGFsUGxhY2Vob2xkZXJgLlxuXHQgKi9cblx0QFZpZXdDaGlsZChcIm1vZGFscGxhY2Vob2xkZXJcIiwge3JlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBgTW9kYWxQbGFjZWhvbGRlcmAuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGxhY2Vob2xkZXJTZXJ2aWNlOiBQbGFjZWhvbGRlclNlcnZpY2UpIHt9XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemVzIHRoZSBjb21wb25lbnQgdXNpbmcgYE1vZGFsU2VydmljZWAuXG5cdCAqL1xuXHRuZ09uSW5pdCgpIHtcblx0XHRjb25zb2xlLndhcm4oXCJgaWJtLW1vZGFsLXBsYWNlaG9sZGVyYCBoYXMgYmVlbiBkZXByZWNhdGVkIGluIGZhdm91ciBvZiBgaWJtLXBsYWNlaG9sZGVyYFwiKTtcblx0XHR0aGlzLnBsYWNlaG9sZGVyU2VydmljZS5yZWdpc3RlclZpZXdDb250YWluZXJSZWYodGhpcy52aWV3Q29udGFpbmVyUmVmKTtcblx0fVxufVxuIl19