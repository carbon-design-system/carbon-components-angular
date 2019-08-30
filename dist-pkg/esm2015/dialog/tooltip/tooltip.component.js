/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, TemplateRef, HostBinding, ElementRef } from "@angular/core";
import { getFocusElementList } from "./../../common/tab.service";
import { Dialog } from "./../dialog.component";
import { position } from "@carbon/utils-position";
/**
 * Extend the `Dialog` component to create a tooltip for exposing content.
 */
export class Tooltip extends Dialog {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        super(elementRef);
        this.elementRef = elementRef;
        this.style = "inline-block";
        /**
         * Value is set to `true` if the `Tooltip` is to display a `TemplateRef` instead of a string.
         */
        this.hasContentTemplate = false;
        /**
         * Sets the role of the tooltip. If there's no focusable content we leave it as a `tooltip`,
         * if there _is_ focusable content we switch to the interactive `dialog` role.
         */
        this.role = "tooltip";
    }
    /**
     * Check whether there is a template for the `Tooltip` content.
     * @return {?}
     */
    onDialogInit() {
        this.addGap["bottom"] = pos => {
            return position.addOffset(pos, 3, 0);
        };
        this.addGap["top"] = pos => {
            return position.addOffset(pos, -10, 0);
        };
        this.addGap["left"] = pos => {
            return position.addOffset(pos, -3, -6);
        };
        this.addGap["right"] = pos => {
            return position.addOffset(pos, -3, 6);
        };
        this.hasContentTemplate = this.dialogConfig.content instanceof TemplateRef;
    }
    /**
     * @return {?}
     */
    afterDialogViewInit() {
        /** @type {?} */
        const focusableElements = getFocusElementList(this.dialog.nativeElement);
        if (focusableElements.length > 0) {
            this.role = "dialog";
            focusableElements[0].focus();
        }
    }
}
Tooltip.decorators = [
    { type: Component, args: [{
                selector: "ibm-tooltip",
                template: `
		<div
			#dialog
			[id]="dialogConfig.compID"
			[attr.role]="role"
			[attr.data-floating-menu-direction]="placement"
			class="bx--tooltip bx--tooltip--shown">
			<span class="bx--tooltip__caret" aria-hidden="true"></span>
			<ng-template
					*ngIf="hasContentTemplate"
					[ngTemplateOutlet]="dialogConfig.content"
					[ngTemplateOutletContext]="{tooltip: this}">
			</ng-template>
			<p
				*ngIf="!hasContentTemplate">
				{{dialogConfig.content}}
			</p>
		</div>
		`
            }] }
];
/** @nocollapse */
Tooltip.ctorParameters = () => [
    { type: ElementRef }
];
Tooltip.propDecorators = {
    style: [{ type: HostBinding, args: ["style.display",] }]
};
function Tooltip_tsickle_Closure_declarations() {
    /** @type {?} */
    Tooltip.prototype.style;
    /**
     * Value is set to `true` if the `Tooltip` is to display a `TemplateRef` instead of a string.
     * @type {?}
     */
    Tooltip.prototype.hasContentTemplate;
    /**
     * Sets the role of the tooltip. If there's no focusable content we leave it as a `tooltip`,
     * if there _is_ focusable content we switch to the interactive `dialog` role.
     * @type {?}
     */
    Tooltip.prototype.role;
    /** @type {?} */
    Tooltip.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGlhbG9nL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLFdBQVcsRUFFWCxVQUFVLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFakUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQTJCbEQsTUFBTSxjQUFlLFNBQVEsTUFBTTs7OztJQVlsQyxZQUFzQixVQUFzQjtRQUMzQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFERyxlQUFVLEdBQVYsVUFBVSxDQUFZO3FCQVhOLGNBQWM7Ozs7a0NBSXhCLEtBQUs7Ozs7O29CQUtuQixTQUFTO0tBSXRCOzs7OztJQUtELFlBQVk7UUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3JDLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkMsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQzVCLE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdEMsQ0FBQztRQUVGLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sWUFBWSxXQUFXLENBQUM7S0FDM0U7Ozs7SUFFRCxtQkFBbUI7O1FBQ2xCLE1BQU0saUJBQWlCLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6RSxJQUFJLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7WUFDckIsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDN0I7S0FDRDs7O1lBaEVELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQlI7YUFDRjs7OztZQS9CQSxVQUFVOzs7b0JBaUNULFdBQVcsU0FBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRUZW1wbGF0ZVJlZixcblx0SG9zdEJpbmRpbmcsXG5cdElucHV0LFxuXHRFbGVtZW50UmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBnZXRGb2N1c0VsZW1lbnRMaXN0IH0gZnJvbSBcIi4vLi4vLi4vY29tbW9uL3RhYi5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IERpYWxvZyB9IGZyb20gXCIuLy4uL2RpYWxvZy5jb21wb25lbnRcIjtcbmltcG9ydCB7IHBvc2l0aW9uIH0gZnJvbSBcIkBjYXJib24vdXRpbHMtcG9zaXRpb25cIjtcblxuLyoqXG4gKiBFeHRlbmQgdGhlIGBEaWFsb2dgIGNvbXBvbmVudCB0byBjcmVhdGUgYSB0b29sdGlwIGZvciBleHBvc2luZyBjb250ZW50LlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLXRvb2x0aXBcIixcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2XG5cdFx0XHQjZGlhbG9nXG5cdFx0XHRbaWRdPVwiZGlhbG9nQ29uZmlnLmNvbXBJRFwiXG5cdFx0XHRbYXR0ci5yb2xlXT1cInJvbGVcIlxuXHRcdFx0W2F0dHIuZGF0YS1mbG9hdGluZy1tZW51LWRpcmVjdGlvbl09XCJwbGFjZW1lbnRcIlxuXHRcdFx0Y2xhc3M9XCJieC0tdG9vbHRpcCBieC0tdG9vbHRpcC0tc2hvd25cIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwiYngtLXRvb2x0aXBfX2NhcmV0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuXHRcdFx0PG5nLXRlbXBsYXRlXG5cdFx0XHRcdFx0Km5nSWY9XCJoYXNDb250ZW50VGVtcGxhdGVcIlxuXHRcdFx0XHRcdFtuZ1RlbXBsYXRlT3V0bGV0XT1cImRpYWxvZ0NvbmZpZy5jb250ZW50XCJcblx0XHRcdFx0XHRbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie3Rvb2x0aXA6IHRoaXN9XCI+XG5cdFx0XHQ8L25nLXRlbXBsYXRlPlxuXHRcdFx0PHBcblx0XHRcdFx0Km5nSWY9XCIhaGFzQ29udGVudFRlbXBsYXRlXCI+XG5cdFx0XHRcdHt7ZGlhbG9nQ29uZmlnLmNvbnRlbnR9fVxuXHRcdFx0PC9wPlxuXHRcdDwvZGl2PlxuXHRcdGBcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIERpYWxvZyB7XG5cdEBIb3N0QmluZGluZyhcInN0eWxlLmRpc3BsYXlcIikgc3R5bGUgPSBcImlubGluZS1ibG9ja1wiO1xuXHQvKipcblx0ICogVmFsdWUgaXMgc2V0IHRvIGB0cnVlYCBpZiB0aGUgYFRvb2x0aXBgIGlzIHRvIGRpc3BsYXkgYSBgVGVtcGxhdGVSZWZgIGluc3RlYWQgb2YgYSBzdHJpbmcuXG5cdCAqL1xuXHRwdWJsaWMgaGFzQ29udGVudFRlbXBsYXRlID0gZmFsc2U7XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSByb2xlIG9mIHRoZSB0b29sdGlwLiBJZiB0aGVyZSdzIG5vIGZvY3VzYWJsZSBjb250ZW50IHdlIGxlYXZlIGl0IGFzIGEgYHRvb2x0aXBgLFxuXHQgKiBpZiB0aGVyZSBfaXNfIGZvY3VzYWJsZSBjb250ZW50IHdlIHN3aXRjaCB0byB0aGUgaW50ZXJhY3RpdmUgYGRpYWxvZ2Agcm9sZS5cblx0ICovXG5cdHB1YmxpYyByb2xlID0gXCJ0b29sdGlwXCI7XG5cblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVjayB3aGV0aGVyIHRoZXJlIGlzIGEgdGVtcGxhdGUgZm9yIHRoZSBgVG9vbHRpcGAgY29udGVudC5cblx0ICovXG5cdG9uRGlhbG9nSW5pdCgpIHtcblx0XHR0aGlzLmFkZEdhcFtcImJvdHRvbVwiXSA9IHBvcyA9PiB7XG5cdFx0XHRyZXR1cm4gcG9zaXRpb24uYWRkT2Zmc2V0KHBvcywgMywgMCk7XG5cdFx0fTtcblx0XHR0aGlzLmFkZEdhcFtcInRvcFwiXSA9IHBvcyA9PiB7XG5cdFx0XHRyZXR1cm4gcG9zaXRpb24uYWRkT2Zmc2V0KHBvcywgLTEwLCAwKTtcblx0XHR9O1xuXHRcdHRoaXMuYWRkR2FwW1wibGVmdFwiXSA9IHBvcyA9PiB7XG5cdFx0XHRyZXR1cm4gcG9zaXRpb24uYWRkT2Zmc2V0KHBvcywgLTMsIC02KTtcblx0XHR9O1xuXHRcdHRoaXMuYWRkR2FwW1wicmlnaHRcIl0gPSBwb3MgPT4ge1xuXHRcdFx0cmV0dXJuIHBvc2l0aW9uLmFkZE9mZnNldChwb3MsIC0zLCA2KTtcblx0XHR9O1xuXG5cdFx0dGhpcy5oYXNDb250ZW50VGVtcGxhdGUgPSB0aGlzLmRpYWxvZ0NvbmZpZy5jb250ZW50IGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG5cdH1cblxuXHRhZnRlckRpYWxvZ1ZpZXdJbml0KCkge1xuXHRcdGNvbnN0IGZvY3VzYWJsZUVsZW1lbnRzID0gZ2V0Rm9jdXNFbGVtZW50TGlzdCh0aGlzLmRpYWxvZy5uYXRpdmVFbGVtZW50KTtcblx0XHRpZiAoZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5yb2xlID0gXCJkaWFsb2dcIjtcblx0XHRcdGZvY3VzYWJsZUVsZW1lbnRzWzBdLmZvY3VzKCk7XG5cdFx0fVxuXHR9XG59XG4iXX0=