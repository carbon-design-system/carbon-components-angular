import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
	selector: "[ibmModalHeaderHeading]"
})
export class ModalHeaderHeading {
	@HostBinding("class.bx--modal-header__heading") modalHeaderHeadingClass = true;
}
