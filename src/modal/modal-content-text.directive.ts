import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[cdsModalContentText], [ibmModalContentText]"
})
export class ModalContentText {
	@HostBinding("class.cds--modal-content__text") modalContentTextClass = true;
}
