import { Component } from "@angular/core";


/**
 * @export
 * @class ModalFooterComponent
 */
@Component({
	selector: "ibm-modal-footer",
	template: `
		<footer role="contentinfo" class="modal_footer--border">
			<ng-content></ng-content>
		</footer>
	`
})
export class ModalFooterComponent {}
