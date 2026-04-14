import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[cdsModalContentText], [ibmModalContentText]",
	standalone: true
})
export class ModalContentText {
	@HostBinding("class.cds--modal-content__text") modalContentTextClass = true;
}
