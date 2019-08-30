/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, HostBinding } from "@angular/core";
export class TooltipDefinition {
    constructor() {
        this.id = `definition-tooltip-${TooltipDefinition.tooltipItemCount++}`;
        /**
         * The placement in which the `TooltipDefinition` appears.
         * Set to `"top"` to have it positioned above the trigger text
         */
        this.placement = "bottom";
        this.className = true;
    }
}
TooltipDefinition.tooltipItemCount = 0;
TooltipDefinition.decorators = [
    { type: Component, args: [{
                selector: "ibm-tooltip-definition",
                template: `
		<button type="button" class="bx--tooltip__trigger" [attr.aria-describedby]="id">
			<ng-content></ng-content>
		</button>
		<div
			[id]="id"
			[ngClass]="{
				'bx--tooltip--definition__bottom' : placement === 'bottom',
				'bx--tooltip--definition__top' : placement === 'top'
			}"
			role="tooltip"
			[attr.aria-label]="content">
			<span class="bx--tooltip__caret"></span>
			<p>{{content}}</p>
		</div>
	`
            }] }
];
TooltipDefinition.propDecorators = {
    id: [{ type: Input }],
    content: [{ type: Input }],
    placement: [{ type: Input }],
    className: [{ type: HostBinding, args: ["class.bx--tooltip--definition",] }]
};
function TooltipDefinition_tsickle_Closure_declarations() {
    /** @type {?} */
    TooltipDefinition.tooltipItemCount;
    /** @type {?} */
    TooltipDefinition.prototype.id;
    /**
     * Body content for the `TooltipDefinition`.
     * @type {?}
     */
    TooltipDefinition.prototype.content;
    /**
     * The placement in which the `TooltipDefinition` appears.
     * Set to `"top"` to have it positioned above the trigger text
     * @type {?}
     */
    TooltipDefinition.prototype.placement;
    /** @type {?} */
    TooltipDefinition.prototype.className;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1kZWZpbml0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJkaWFsb2cvdG9vbHRpcC90b29sdGlwLWRlZmluaXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFxQjlELE1BQU07O2tCQUdTLHNCQUFzQixpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFOzs7Ozt5QkFTbkMsUUFBUTt5QkFFVyxJQUFJOzs7cUNBYnBDLENBQUM7O1lBcEIzQixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7RUFlVDthQUNEOzs7aUJBSUMsS0FBSztzQkFJTCxLQUFLO3dCQUtMLEtBQUs7d0JBRUwsV0FBVyxTQUFDLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS10b29sdGlwLWRlZmluaXRpb25cIixcblx0dGVtcGxhdGU6IGBcblx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ4LS10b29sdGlwX190cmlnZ2VyXCIgW2F0dHIuYXJpYS1kZXNjcmliZWRieV09XCJpZFwiPlxuXHRcdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHRcdDwvYnV0dG9uPlxuXHRcdDxkaXZcblx0XHRcdFtpZF09XCJpZFwiXG5cdFx0XHRbbmdDbGFzc109XCJ7XG5cdFx0XHRcdCdieC0tdG9vbHRpcC0tZGVmaW5pdGlvbl9fYm90dG9tJyA6IHBsYWNlbWVudCA9PT0gJ2JvdHRvbScsXG5cdFx0XHRcdCdieC0tdG9vbHRpcC0tZGVmaW5pdGlvbl9fdG9wJyA6IHBsYWNlbWVudCA9PT0gJ3RvcCdcblx0XHRcdH1cIlxuXHRcdFx0cm9sZT1cInRvb2x0aXBcIlxuXHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJjb250ZW50XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImJ4LS10b29sdGlwX19jYXJldFwiPjwvc3Bhbj5cblx0XHRcdDxwPnt7Y29udGVudH19PC9wPlxuXHRcdDwvZGl2PlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBEZWZpbml0aW9uIHtcblx0c3RhdGljIHRvb2x0aXBJdGVtQ291bnQgPSAwO1xuXG5cdEBJbnB1dCgpIGlkID0gYGRlZmluaXRpb24tdG9vbHRpcC0ke1Rvb2x0aXBEZWZpbml0aW9uLnRvb2x0aXBJdGVtQ291bnQrK31gO1xuXHQvKipcblx0ICogQm9keSBjb250ZW50IGZvciB0aGUgYFRvb2x0aXBEZWZpbml0aW9uYC5cblx0ICovXG5cdEBJbnB1dCgpIGNvbnRlbnQ6IHN0cmluZztcblx0LyoqXG5cdCAqIFRoZSBwbGFjZW1lbnQgaW4gd2hpY2ggdGhlIGBUb29sdGlwRGVmaW5pdGlvbmAgYXBwZWFycy5cblx0ICogU2V0IHRvIGBcInRvcFwiYCB0byBoYXZlIGl0IHBvc2l0aW9uZWQgYWJvdmUgdGhlIHRyaWdnZXIgdGV4dFxuXHQgKi9cblx0QElucHV0KCkgcGxhY2VtZW50OiBcImJvdHRvbVwiIHwgXCJ0b3BcIiA9IFwiYm90dG9tXCI7XG5cblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLXRvb2x0aXAtLWRlZmluaXRpb25cIikgY2xhc3NOYW1lID0gdHJ1ZTtcbn1cbiJdfQ==