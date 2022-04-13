import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[ibmToastTitle]"
})
export class ToastTitle {
	@HostBinding("class.cds--toast-notification__title") baseClass = true;
}
