import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[cdsActionableButton]"
})
export class ActionableButton {
	@HostBinding("class.cds--actionable-notification__action-button") actionableButton = true;
	@HostBinding("attr.type") type = "button";
}
