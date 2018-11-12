import { TooltipDirective } from "./tooltip.directive";
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
 *
 * @export
 * @class EllipsisTooltip
 * @extends {TooltipDirective}
 */
export declare class EllipsisTooltip extends TooltipDirective {
    /**
     * Toggles tooltip in view if text is truncated.
     * @returns null
     * @memberof EllipsisTooltip
     */
    toggle(): void;
}
