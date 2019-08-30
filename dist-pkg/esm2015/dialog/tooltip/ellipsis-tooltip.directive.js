/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive } from "@angular/core";
import { TooltipDirective } from "./tooltip.directive";
import { DialogService } from "./../dialog.service";
/**
 * A directive that creates a tooltip `Dialog` for exposing truncated text.
 *
 * class: EllipsisTooltip (extends PopoverDirective)
 *
 * selector: `nEllipsisTooltip`
 *
 * ```html
 * <div class="ellipsis" nEllipsisTooltip>Tooltip for ellipsis because I can and I am really really long</div>
 * ```
 */
export class EllipsisTooltip extends TooltipDirective {
    /**
     * Toggles tooltip in view if text is truncated.
     * \@memberof EllipsisTooltip
     * @return {?} null
     */
    toggle() {
        if (this.elementRef.nativeElement.scrollWidth <= this.elementRef.nativeElement.offsetWidth) {
            return;
        }
        this.dialogConfig.content = this.elementRef.nativeElement.innerText;
        super.toggle();
    }
}
EllipsisTooltip.decorators = [
    { type: Directive, args: [{
                selector: "[ibmEllipsisTooltip]",
                providers: [
                    DialogService
                ]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMtdG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGlhbG9nL3Rvb2x0aXAvZWxsaXBzaXMtdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBT1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7QUFxQnBELE1BQU0sc0JBQXVCLFNBQVEsZ0JBQWdCOzs7Ozs7SUFNcEQsTUFBTTtRQUNMLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRTtZQUMzRixPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDcEUsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ2Y7OztZQW5CRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsU0FBUyxFQUFFO29CQUNWLGFBQWE7aUJBQ2I7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdERpcmVjdGl2ZSxcblx0SW5wdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRFbGVtZW50UmVmLFxuXHRJbmplY3Rvcixcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSBcIi4vdG9vbHRpcC5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwiLi8uLi9kaWFsb2cuc2VydmljZVwiO1xuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gXCIuL3Rvb2x0aXAuY29tcG9uZW50XCI7XG5cblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IGNyZWF0ZXMgYSB0b29sdGlwIGBEaWFsb2dgIGZvciBleHBvc2luZyB0cnVuY2F0ZWQgdGV4dC5cbiAqXG4gKiBjbGFzczogRWxsaXBzaXNUb29sdGlwIChleHRlbmRzIFBvcG92ZXJEaXJlY3RpdmUpXG4gKlxuICogc2VsZWN0b3I6IGBuRWxsaXBzaXNUb29sdGlwYFxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgY2xhc3M9XCJlbGxpcHNpc1wiIG5FbGxpcHNpc1Rvb2x0aXA+VG9vbHRpcCBmb3IgZWxsaXBzaXMgYmVjYXVzZSBJIGNhbiBhbmQgSSBhbSByZWFsbHkgcmVhbGx5IGxvbmc8L2Rpdj5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6IFwiW2libUVsbGlwc2lzVG9vbHRpcF1cIixcblx0cHJvdmlkZXJzOiBbXG5cdFx0RGlhbG9nU2VydmljZVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEVsbGlwc2lzVG9vbHRpcCBleHRlbmRzIFRvb2x0aXBEaXJlY3RpdmUge1xuXHQvKipcblx0ICogVG9nZ2xlcyB0b29sdGlwIGluIHZpZXcgaWYgdGV4dCBpcyB0cnVuY2F0ZWQuXG5cdCAqIEByZXR1cm5zIG51bGxcblx0ICogQG1lbWJlcm9mIEVsbGlwc2lzVG9vbHRpcFxuXHQgKi9cblx0dG9nZ2xlKCkge1xuXHRcdGlmICh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aCA8PSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuZGlhbG9nQ29uZmlnLmNvbnRlbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pbm5lclRleHQ7XG5cdFx0c3VwZXIudG9nZ2xlKCk7XG5cdH1cbn1cbiJdfQ==