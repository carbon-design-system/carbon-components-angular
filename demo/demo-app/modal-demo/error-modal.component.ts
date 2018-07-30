import { Component } from "@angular/core";
import { Modal } from "../../../src";

@Modal()
@Component({
	selector: "app-error-modal",
	template: `
		<ibm-modal size="sm" modalType="error">
			<ibm-modal-header (closeSelect)="closeModal()">Error</ibm-modal-header>
			<section class="modal-body">
				<p>The connection was lost. Try to log in again.</p>
			</section>
			<ibm-modal-footer><button class="btn--primary cancel-button" (click)="closeModal()">Close</button></ibm-modal-footer>
		</ibm-modal>
	`,
	styleUrls: ["./error-modal.component.scss"]
})
export class ErrorModalComponent {

	constructor() { }

}
