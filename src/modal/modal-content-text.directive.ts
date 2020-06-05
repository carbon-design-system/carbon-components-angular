import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[ibmModalContentText]"
})
export class ModalContentText {
	@HostBinding("class.bx--modal-content__text") modalContentTextClass = true;
}
