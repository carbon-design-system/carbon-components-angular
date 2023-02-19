import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[cdsActionableSubtitle]"
})
export class ActionableSubtitle {
	@HostBinding("class.cds--actionable-notification__subtitle") baseClass = true;
}
