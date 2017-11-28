import { Component } from "@angular/core";


/**
 * class: ModalFooterComponent
 *
 * selector: `n-modal-footer`
 *
 * source: `src/modal/modal-footer.component.ts`
 *
 * @export
 * @class ModalFooterComponent
 */
@Component({
	selector: "n-modal-footer",
	template: `
		<footer role="contentinfo" class="modal_footer--border">
			<ng-content></ng-content>
		</footer>
	`
})
export class ModalFooterComponent {}
