import { Component } from "@angular/core";
import { Modal } from "../../../src";

@Modal()
@Component({
	selector: "error-modal",
	template: `
		<cdl-modal size="sm" (overlaySelected)="closeModal()">
			<cdl-modal-header modalType="error" (closeSelect)="closeModal()">Error</cdl-modal-header>
			<section class="content">
				<p>The connection was lost. Try to log in again.</p>
			</section>
			<cdl-modal-footer><button class="btn cancel-button" (click)="closeModal()">Close</button></cdl-modal-footer>
		</cdl-modal>
	`,
	styleUrls: ["./error-modal.component.scss"]
})
export class ErrorModalComponent {

	constructor() { }

}
