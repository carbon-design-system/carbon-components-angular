import { Component } from "@angular/core";

@Component({
	selector: "ibm-modal-footer",
	template: `
		<footer class="bx--modal-footer">
			<ng-content></ng-content>
		</footer>
	`
})
export class ModalFooter {}
