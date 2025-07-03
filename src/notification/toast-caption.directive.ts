import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[cdsToastCaption], [ibmToastCaption]",
	standalone: true
})
export class ToastCaption {
	@HostBinding("class.cds--toast-notification__caption") baseClass = true;
}
