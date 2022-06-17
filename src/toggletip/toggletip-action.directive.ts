import {
	Directive,
	HostBinding
} from "@angular/core";

@Directive({
	selector: "[ibmToggletipAction]"
})
export class ToggletipAction {
	@HostBinding("class.cds--toggletip-actions") toggleTipActions = true;
}
