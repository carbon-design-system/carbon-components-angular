import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[cdsModalHeaderLabel], [ibmModalHeaderLabel]",
	standalone: true
})
export class ModalHeaderLabel {
	@HostBinding("class.cds--modal-header__label") modalHeaderLabelClass = true;
}
