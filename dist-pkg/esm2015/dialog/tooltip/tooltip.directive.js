/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input, ElementRef, ViewContainerRef, HostBinding } from "@angular/core";
import { DialogDirective } from "./../dialog.directive";
import { Tooltip } from "./tooltip.component";
import { DialogService } from "./../dialog.service";
/**
 * Directive for extending `Dialog` to create tooltips.
 *
 * [See demo](../../?path=/story/tooltip--basic)
 *
 * class: TooltipDirective (extends PopoverDirective)
 *
 *
 * selector: `nTooltip`
 *
 *
 * ```html
 * <button nTooltip="I am a tooltip" placement="right" trigger="mouseenter" type="danger">Tooltip Right</button>
 * <button nTooltip="I am a tooltip" type="warning">Tooltip Top warning on click</button>
 * ```
 *
 * <example-url>../../iframe.html?id=tooltip--basic</example-url>
 */
export class TooltipDirective extends DialogDirective {
    /**
     * Creates an instance of `TooltipDirective`.
     * @param {?} elementRef
     * @param {?} viewContainerRef
     * @param {?} dialogService
     */
    constructor(elementRef, viewContainerRef, dialogService) {
        super(elementRef, viewContainerRef, dialogService);
        this.elementRef = elementRef;
        this.viewContainerRef = viewContainerRef;
        this.dialogService = dialogService;
        /**
         * Set tooltip type to reflect 'warning' or 'error' styles.
         */
        this.tooltipType = "";
        this.tabIndex = 0;
        this.className = true;
        dialogService.create(Tooltip);
    }
    /**
     * @return {?}
     */
    get descriptorId() {
        return this.expanded ? this.dialogConfig["compID"] : null;
    }
    /**
     * Extends the `Dialog` component's data structure with tooltip properties.
     * @return {?}
     */
    onDialogInit() {
        this.dialogConfig.content = this.ibmTooltip;
        this.dialogConfig["type"] = this.tooltipType;
    }
}
TooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ibmTooltip]",
                exportAs: "ibmTooltip",
                providers: [
                    DialogService
                ]
            },] }
];
/** @nocollapse */
TooltipDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: DialogService }
];
TooltipDirective.propDecorators = {
    ibmTooltip: [{ type: Input }],
    tooltipType: [{ type: Input, args: ["tooltip-type",] }],
    tabIndex: [{ type: HostBinding, args: ["tabindex",] }],
    className: [{ type: HostBinding, args: ["class.bx--tooltip__trigger",] }],
    descriptorId: [{ type: HostBinding, args: ["attr.aria-describedby",] }]
};
function TooltipDirective_tsickle_Closure_declarations() {
    /**
     * The string or template content to be exposed by the tooltip.
     * @type {?}
     */
    TooltipDirective.prototype.ibmTooltip;
    /**
     * Set tooltip type to reflect 'warning' or 'error' styles.
     * @type {?}
     */
    TooltipDirective.prototype.tooltipType;
    /** @type {?} */
    TooltipDirective.prototype.tabIndex;
    /** @type {?} */
    TooltipDirective.prototype.className;
    /** @type {?} */
    TooltipDirective.prototype.elementRef;
    /** @type {?} */
    TooltipDirective.prototype.viewContainerRef;
    /** @type {?} */
    TooltipDirective.prototype.dialogService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGlhbG9nL3Rvb2x0aXAvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsS0FBSyxFQUVMLFVBQVUsRUFHVixnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJwRCxNQUFNLHVCQUF3QixTQUFRLGVBQWU7Ozs7Ozs7SUFzQnBELFlBQ1csVUFBc0IsRUFDdEIsZ0JBQWtDLEVBQ2xDLGFBQTRCO1FBRXRDLEtBQUssQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFKekMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGtCQUFhLEdBQWIsYUFBYSxDQUFlOzs7OzJCQWhCd0IsRUFBRTt3QkFFN0IsQ0FBQzt5QkFFa0IsSUFBSTtRQWUxRCxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzlCOzs7O0lBZEQsSUFBMEMsWUFBWTtRQUNyRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLFdBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQztLQUN2RDs7Ozs7SUFpQkQsWUFBWTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksV0FBUSxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQzFDOzs7WUE1Q0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsU0FBUyxFQUFFO29CQUNWLGFBQWE7aUJBQ2I7YUFDRDs7OztZQW5DQSxVQUFVO1lBR1YsZ0JBQWdCO1lBS1IsYUFBYTs7O3lCQWdDcEIsS0FBSzswQkFLTCxLQUFLLFNBQUMsY0FBYzt1QkFFcEIsV0FBVyxTQUFDLFVBQVU7d0JBRXRCLFdBQVcsU0FBQyw0QkFBNEI7MkJBRXhDLFdBQVcsU0FBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHREaXJlY3RpdmUsXG5cdElucHV0LFxuXHRUZW1wbGF0ZVJlZixcblx0RWxlbWVudFJlZixcblx0SW5qZWN0b3IsXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0Vmlld0NvbnRhaW5lclJlZixcblx0SG9zdEJpbmRpbmdcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERpYWxvZ0RpcmVjdGl2ZSB9IGZyb20gXCIuLy4uL2RpYWxvZy5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tIFwiLi90b29sdGlwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gXCIuLy4uL2RpYWxvZy5zZXJ2aWNlXCI7XG5cblxuLyoqXG4gKiBEaXJlY3RpdmUgZm9yIGV4dGVuZGluZyBgRGlhbG9nYCB0byBjcmVhdGUgdG9vbHRpcHMuXG4gKlxuICogW1NlZSBkZW1vXSguLi8uLi8/cGF0aD0vc3RvcnkvdG9vbHRpcC0tYmFzaWMpXG4gKlxuICogY2xhc3M6IFRvb2x0aXBEaXJlY3RpdmUgKGV4dGVuZHMgUG9wb3ZlckRpcmVjdGl2ZSlcbiAqXG4gKlxuICogc2VsZWN0b3I6IGBuVG9vbHRpcGBcbiAqXG4gKlxuICogYGBgaHRtbFxuICogPGJ1dHRvbiBuVG9vbHRpcD1cIkkgYW0gYSB0b29sdGlwXCIgcGxhY2VtZW50PVwicmlnaHRcIiB0cmlnZ2VyPVwibW91c2VlbnRlclwiIHR5cGU9XCJkYW5nZXJcIj5Ub29sdGlwIFJpZ2h0PC9idXR0b24+XG4gKiA8YnV0dG9uIG5Ub29sdGlwPVwiSSBhbSBhIHRvb2x0aXBcIiB0eXBlPVwid2FybmluZ1wiPlRvb2x0aXAgVG9wIHdhcm5pbmcgb24gY2xpY2s8L2J1dHRvbj5cbiAqIGBgYFxuICpcbiAqIDxleGFtcGxlLXVybD4uLi8uLi9pZnJhbWUuaHRtbD9pZD10b29sdGlwLS1iYXNpYzwvZXhhbXBsZS11cmw+XG4gKi9cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogXCJbaWJtVG9vbHRpcF1cIixcblx0ZXhwb3J0QXM6IFwiaWJtVG9vbHRpcFwiLFxuXHRwcm92aWRlcnM6IFtcblx0XHREaWFsb2dTZXJ2aWNlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcERpcmVjdGl2ZSBleHRlbmRzIERpYWxvZ0RpcmVjdGl2ZSB7XG5cdC8qKlxuXHQgKiBUaGUgc3RyaW5nIG9yIHRlbXBsYXRlIGNvbnRlbnQgdG8gYmUgZXhwb3NlZCBieSB0aGUgdG9vbHRpcC5cblx0ICovXG5cdEBJbnB1dCgpIGlibVRvb2x0aXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cdC8qKlxuXHQgKiBTZXQgdG9vbHRpcCB0eXBlIHRvIHJlZmxlY3QgJ3dhcm5pbmcnIG9yICdlcnJvcicgc3R5bGVzLlxuXHQgKi9cblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuXHRASW5wdXQoXCJ0b29sdGlwLXR5cGVcIikgdG9vbHRpcFR5cGU6IFwid2FybmluZ1wiIHwgXCJlcnJvclwiIHwgXCJcIiA9IFwiXCI7XG5cblx0QEhvc3RCaW5kaW5nKFwidGFiaW5kZXhcIikgdGFiSW5kZXggPSAwO1xuXG5cdEBIb3N0QmluZGluZyhcImNsYXNzLmJ4LS10b29sdGlwX190cmlnZ2VyXCIpIGNsYXNzTmFtZSA9IHRydWU7XG5cblx0QEhvc3RCaW5kaW5nKFwiYXR0ci5hcmlhLWRlc2NyaWJlZGJ5XCIpIGdldCBkZXNjcmlwdG9ySWQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5leHBhbmRlZCA/IHRoaXMuZGlhbG9nQ29uZmlnLmNvbXBJRCA6IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBgVG9vbHRpcERpcmVjdGl2ZWAuXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRwcm90ZWN0ZWQgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcblx0XHRwcm90ZWN0ZWQgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZVxuXHQpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmLCB2aWV3Q29udGFpbmVyUmVmLCBkaWFsb2dTZXJ2aWNlKTtcblx0XHRkaWFsb2dTZXJ2aWNlLmNyZWF0ZShUb29sdGlwKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBFeHRlbmRzIHRoZSBgRGlhbG9nYCBjb21wb25lbnQncyBkYXRhIHN0cnVjdHVyZSB3aXRoIHRvb2x0aXAgcHJvcGVydGllcy5cblx0ICovXG5cdG9uRGlhbG9nSW5pdCgpIHtcblx0XHR0aGlzLmRpYWxvZ0NvbmZpZy5jb250ZW50ID0gdGhpcy5pYm1Ub29sdGlwO1xuXHRcdHRoaXMuZGlhbG9nQ29uZmlnLnR5cGUgPSB0aGlzLnRvb2x0aXBUeXBlO1xuXHR9XG59XG4iXX0=