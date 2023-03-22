import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[cdsActionableTitle], [ibmActionableTitle]"
})
export class ActionableTitle {
	@HostBinding("class.cds--actionable-notification__title") baseClass = true;
}
