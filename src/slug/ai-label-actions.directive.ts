import { Directive, HostBinding } from "@angular/core";

/**
 * Host for actions inside a `<cds-slug>` popover. Applies `cds--toggletip-actions`
 * and `cds--ai-label-actions`.
 *
 * ```html
 * <cds-slug>
 *   <div cdsAILabelContent>
 *     <p>Explanation text</p>
 *     <div cdsAILabelActions>
 *       <button cdsButton="ghost" size="sm">View details</button>
 *     </div>
 *   </div>
 * </cds-slug>
 * ```
 */
@Directive({
	selector: "[cdsAILabelActions], [ibmAILabelActions]"
})
export class AILabelActions {
	@HostBinding("class.cds--toggletip-actions") toggletipActions = true;
	@HostBinding("class.cds--ai-label-actions") aiLabelActions = true;
}
