import { Component, Injector } from "@angular/core";
import { Modal } from "../../../src";

@Modal()
@Component({
	selector: "sample-modal",
	template: `
		<n-modal size="xl" (overlaySelected)="closeModal()">
			<n-modal-header (closeSelect)="closeModal()">Header text</n-modal-header>
			<section class="modal-body">
				<h1>Sample modal works.</h1>
				{{modalText}}
			</section>
			<n-modal-footer><button class="btn cancel-button" (click)="closeModal()">Close</button></n-modal-footer>
		</n-modal>
	`,
	styleUrls: ["./sample-modal.component.scss"]
})
export class SampleModalComponent {
	modalText: string;
	constructor(private injector: Injector) {
		this.modalText = this.injector.get("modalText");
	}
}
