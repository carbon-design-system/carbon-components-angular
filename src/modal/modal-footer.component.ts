import { Component } from "@angular/core";

@Component({
	selector: "cds-modal-footer, ibm-modal-footer",
	template: `
		<footer class="cds--modal-footer">
			<ng-content></ng-content>
		</footer>
	`
})
export class ModalFooter {}
