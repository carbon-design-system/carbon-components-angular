import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[ibmActionableSubtitle]"
})
export class ActionableSubtitle {
	@HostBinding("class.cds--actionable-notification__subtitle") baseClass = true;
}
