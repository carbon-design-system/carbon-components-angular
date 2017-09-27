import { Component } from "@angular/core";

@Component({
	selector: "n-modal-footer",
	template: `
		<footer role="contentinfo" class="modal_footer--border">
			<ng-content></ng-content>
		</footer>
	`
})

export class ModalFooterComponent {
	constructor() {}
}
