import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
	selector: "[cdsModalContent], [ibmModalContent]"
})
export class ModalContent {
	@HostBinding("class.cds--modal-content") modalContentClass = true;
	/**
	 * Provide whether the modal content has a form element.
	 * If `true` is used here, non-form child content should have `cds--modal-content__regular-content` class.
	 */
	@HostBinding("class.cds--modal-content--with-form") @Input() hasForm = false;
}
