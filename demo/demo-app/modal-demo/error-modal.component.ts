import { Component } from "@angular/core";
import { Modal } from "../../../src";

@Modal()
@Component({
	selector: "error-modal",
	template: `
		<n-modal size="sm" (overlaySelected)="closeModal()">
			<n-modal-header modalType="error" (closeSelect)="closeModal()">Error</n-modal-header>
			<section class="modal-body">
				<p>The connection was lost. Try to log in again.</p>
			</section>
			<n-modal-footer><button class="btn cancel-button" (click)="closeModal()">Close</button></n-modal-footer>
		</n-modal>
	`,
	styleUrls: ["./error-modal.component.scss"]
})
export class ErrorModalComponent {

	constructor() { }

}
