import { Component } from "@angular/core";
import { Modal } from "../../../src";

@Modal()
@Component({
	selector: "error-modal",
	template: `
		<n-modal size="sm" modalType="error" (overlaySelected)="closeModal()">
			<n-modal-header (closeSelect)="closeModal()">Error</n-modal-header>
			<section class="modal-body">
				<p>The connection was lost. Try to log in again.</p>
			</section>
			<n-modal-footer><button class="btn--primary cancel-button" (click)="closeModal()">Close</button></n-modal-footer>
		</n-modal>
	`,
	styleUrls: ["./error-modal.component.scss"]
})
export class ErrorModalComponent {

	constructor() { }

}
