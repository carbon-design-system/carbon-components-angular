import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[ibmToastTitle]"
})
export class ToastTitle {
	@HostBinding("class.bx--toast-notification__title") baseClass = true;
}
