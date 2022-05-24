import {
	Directive,
	HostBinding,
	Input
} from "@angular/core";

@Directive({
	selector: "[ibmToggletipButton]"
})
export class ToggletipButton {
	@HostBinding("class.cds--toggletip-button") toggletipButton = true;
	/**
	 * @todo
	 * Do we want to set the type? It is set in react, but what if the user wants the trigger to be a paragraph element?
	 * I think it should be limited to button imo
	 */
	@HostBinding("attr.type") toggletipButtonType = "button";
	@HostBinding("attr.aria-label") @Input() ariaLabel = "Show information";
}
