import { Component } from "@angular/core";

@Component({
	selector: "cdl-modal-footer",
	template: `
		<footer role="contentinfo">
			<ng-content></ng-content>
		</footer>
	`
})

export class ModalFooterComponent {
	constructor() {}
}
