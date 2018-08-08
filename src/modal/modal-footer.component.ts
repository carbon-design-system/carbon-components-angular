import { Component } from "@angular/core";


/**
 * @export
 * @class ModalFooterComponent
 */
@Component({
	selector: "ibm-modal-footer",
	template: `
		<footer role="contentinfo" class="bx--modal-footer">
			<ng-content></ng-content>
		</footer>
	`
})
export class ModalFooterComponent {}
