import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[cdsToggletipLabel], [ibmToggletipLabel]"
})
export class ToggletipLabel {
	@HostBinding("class.cds--toggletip-label") toggleTipLabel = true;
}
