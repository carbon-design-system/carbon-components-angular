/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, HostBinding } from "@angular/core";
export class TooltipIcon {
    constructor() {
        /**
         * The placement in which the `TooltipIcon` appears.
         * Set to `"top"` to have it positioned above the icon
         */
        this.placement = "bottom";
        this.className = true;
    }
}
TooltipIcon.decorators = [
    { type: Component, args: [{
                selector: "ibm-tooltip-icon",
                template: `
		<button
			type="button"
			class="bx--tooltip__trigger"
			[ngClass]="{
				'bx--tooltip--icon__bottom' : placement === 'bottom',
				'bx--tooltip--icon__top' : placement === 'top'
			}"
			[attr.aria-label]="content">
			<ng-content></ng-content>
		</button>
	`
            }] }
];
TooltipIcon.propDecorators = {
    content: [{ type: Input }],
    placement: [{ type: Input }],
    className: [{ type: HostBinding, args: ["class.bx--tooltip-icon",] }]
};
function TooltipIcon_tsickle_Closure_declarations() {
    /**
     * Body content for the `TooltipIcon`.
     * @type {?}
     */
    TooltipIcon.prototype.content;
    /**
     * The placement in which the `TooltipIcon` appears.
     * Set to `"top"` to have it positioned above the icon
     * @type {?}
     */
    TooltipIcon.prototype.placement;
    /** @type {?} */
    TooltipIcon.prototype.className;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJkaWFsb2cvdG9vbHRpcC90b29sdGlwLWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFpQjlELE1BQU07Ozs7Ozt5QkFTa0MsUUFBUTt5QkFFSSxJQUFJOzs7O1lBMUJ2RCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7OztFQVdUO2FBQ0Q7OztzQkFLQyxLQUFLO3dCQUtMLEtBQUs7d0JBRUwsV0FBVyxTQUFDLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS10b29sdGlwLWljb25cIixcblx0dGVtcGxhdGU6IGBcblx0XHQ8YnV0dG9uXG5cdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdGNsYXNzPVwiYngtLXRvb2x0aXBfX3RyaWdnZXJcIlxuXHRcdFx0W25nQ2xhc3NdPVwie1xuXHRcdFx0XHQnYngtLXRvb2x0aXAtLWljb25fX2JvdHRvbScgOiBwbGFjZW1lbnQgPT09ICdib3R0b20nLFxuXHRcdFx0XHQnYngtLXRvb2x0aXAtLWljb25fX3RvcCcgOiBwbGFjZW1lbnQgPT09ICd0b3AnXG5cdFx0XHR9XCJcblx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwiY29udGVudFwiPlxuXHRcdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHRcdDwvYnV0dG9uPlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBJY29uIHtcblx0LyoqXG5cdCAqIEJvZHkgY29udGVudCBmb3IgdGhlIGBUb29sdGlwSWNvbmAuXG5cdCAqL1xuXHRASW5wdXQoKSBjb250ZW50OiBzdHJpbmc7XG5cdC8qKlxuXHQgKiBUaGUgcGxhY2VtZW50IGluIHdoaWNoIHRoZSBgVG9vbHRpcEljb25gIGFwcGVhcnMuXG5cdCAqIFNldCB0byBgXCJ0b3BcImAgdG8gaGF2ZSBpdCBwb3NpdGlvbmVkIGFib3ZlIHRoZSBpY29uXG5cdCAqL1xuXHRASW5wdXQoKSBwbGFjZW1lbnQ6IFwiYm90dG9tXCIgfCBcInRvcFwiID0gXCJib3R0b21cIjtcblxuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy5ieC0tdG9vbHRpcC1pY29uXCIpIGNsYXNzTmFtZSA9IHRydWU7XG59XG4iXX0=