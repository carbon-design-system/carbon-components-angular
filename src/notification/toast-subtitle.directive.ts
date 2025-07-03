import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[cdsToastSubtitle], [ibmToastSubtitle]",
	standalone: true
})
export class ToastSubtitle {
	@HostBinding("class.cds--toast-notification__subtitle") baseClass = true;
}
