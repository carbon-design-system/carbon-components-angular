import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[cdsToastSubtitle], [ibmToastSubtitle]"
})
export class ToastSubtitle {
	@HostBinding("class.cds--toast-notification__subtitle") baseClass = true;
}
