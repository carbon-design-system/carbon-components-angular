import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[ibmToastSubtitle]"
})
export class ToastSubtitle {
	@HostBinding("class.cds--toast-notification__subtitle") baseClass = true;
}
