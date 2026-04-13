import { Directive } from "@angular/core";

/**
 * Optional marker for the main body region inside `<cds-slug>`. Implementing this for semantics only.
 * The structure also matches that of toggletip, in future we may need this.
 *
 * ```html
 * <cds-slug size="md">
 *   <div cdsAILabelContent>
 *     <p>AI Explained</p>
 *   </div>
 *   <div cdsAILabelActions>
 *     <button cdsButton="ghost" size="sm">View details</button>
 *   </div>
 * </cds-slug>
 * ```
 */
@Directive({
	selector: "[cdsAILabelContent], [ibmAILabelContent]"
})
export class AILabelContent {}
