import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[cdsToastTitle], [ibmToastTitle]"
})
export class ToastTitle {
	@HostBinding("class.cds--toast-notification__title") baseClass = true;
}
