import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[ibmModalHeaderLabel]"
})
export class ModalHeaderLabel {
	@HostBinding("class.cds--modal-header__label") modalHeaderLabelClass = true;
}
