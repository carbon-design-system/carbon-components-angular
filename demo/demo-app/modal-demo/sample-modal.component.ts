import { Component, Injector } from "@angular/core";
import { Modal } from "../../../src";

@Modal()
@Component({
	selector: "app-sample-modal",
	template: `
		<ibm-modal size="xl">
			<ibm-modal-header (closeSelect)="closeModal()">Header text</ibm-modal-header>
			<section class="modal-body">
				<h1>Sample modal works.</h1>
				<button class="btn--icon-link" nPopover="Hello there" title="Popover title" placement="right" appendToBody="false">
					<ibm-icon icon="info" size="sm"></ibm-icon>
				</button>
				{{modalText}}
			</section>
			<ibm-modal-footer><button class="btn--primary cancel-button" (click)="closeModal()">Close</button></ibm-modal-footer>
		</ibm-modal>
	`,
	styleUrls: ["./sample-modal.component.scss"]
})
export class SampleModalComponent {
	modalText: string;
	constructor(private injector: Injector) {
		this.modalText = this.injector.get("modalText");
	}
}
