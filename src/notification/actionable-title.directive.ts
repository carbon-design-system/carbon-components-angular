import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[cdsActionableTitle], [ibmActionableTitle]",
	standalone: true
})
export class ActionableTitle {
	@HostBinding("class.cds--actionable-notification__title") baseClass = true;
}
