import {
	Directive,
	HostBinding,
	Input
} from "@angular/core";

@Directive({
	selector: "[cdsToggletipButton], [ibmToggletipButton]"
})
export class ToggletipButton {
	@HostBinding("class.cds--toggletip-button") toggletipButton = true;
	@HostBinding("attr.type") toggletipButtonType = "button";
	@HostBinding("attr.aria-label") @Input() ariaLabel = "Show information";
}
