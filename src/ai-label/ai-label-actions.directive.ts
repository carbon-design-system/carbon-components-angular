import { Directive, HostBinding } from "@angular/core";

/**
 * Host for actions inside a `<cds-ai-label>` popover. Applies `cds--toggletip-actions`
 * and `cds--ai-label-actions`.
 *
 * ```html
 * <cds-ai-label>
 *   <div cdsAILabelContent>
 *     <p>Explanation text</p>
 *     <div cdsAILabelActions>
 *       <button cdsButton="ghost" size="sm">View details</button>
 *     </div>
 *   </div>
 * </cds-ai-label>
 * ```
 */
@Directive({
	selector: "[cdsAILabelActions], [ibmAILabelActions]",
	standalone: true
})
export class AILabelActions {
	@HostBinding("class.cds--toggletip-actions") toggletipActions = true;
	@HostBinding("class.cds--ai-label-actions") aiLabelActions = true;
}
