import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[ibmToastCaption]"
})
export class ToastCaption {
	@HostBinding("class.bx--toast-notification__caption") baseClass = true;
}
