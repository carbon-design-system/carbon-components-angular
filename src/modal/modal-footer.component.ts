import { Component } from "@angular/core";

@Component({
	selector: "cdl-modal-footer",
	template: `
		<footer>
			<ng-content></ng-content>
		</footer>
	`
})

export class ModalFooterComponent {
	constructor() {}
}
