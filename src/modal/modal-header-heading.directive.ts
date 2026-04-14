import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
	selector: "[cdsModalHeaderHeading], [ibmModalHeaderHeading]",
	standalone: true
})
export class ModalHeaderHeading {
	@HostBinding("class.cds--modal-header__heading") modalHeaderHeadingClass = true;
}
