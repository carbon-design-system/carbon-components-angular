import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[cdsToggletipAction], [ibmToggletipAction]"
})
export class ToggletipAction {
	@HostBinding("class.cds--toggletip-actions") toggleTipActions = true;
}
