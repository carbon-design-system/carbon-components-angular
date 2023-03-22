import { Component, Inject } from "@angular/core";
import {
	ModalService,
	BaseModal,
	ModalButtonType
} from "../";

@Component({
	selector: "app-sample-modal",
	template: `
		<cds-modal
			[size]="size"
			[open]="open"
			(overlaySelected)="closeModal()">
			<cds-modal-header (closeSelect)="closeModal()" [showCloseButton]="showCloseButton">
				<h2 cdsModalHeaderLabel>Label</h2>
				<h3 cdsModalHeaderHeading>Modal</h3>
			</cds-modal-header>
			<section cdsModalContent>
				<h1>Sample modal works.</h1>
				<p cdsModalContentText>{{modalText}}</p>
			</section>
			<cds-modal-footer>
				<button class="cds--btn cds--btn--secondary" (click)="showSecondaryModal()">Show secondary modal</button>
				<button class="cds--btn cds--btn--primary" modal-primary-focus (click)="closeModal()">Close</button>
			</cds-modal-footer>
		</cds-modal>
	`
})
export class SampleModal extends BaseModal {
	constructor(
		@Inject("modalText") public modalText,
		@Inject("size") public size,
		@Inject("showCloseButton") public showCloseButton = true,
		protected modalService: ModalService) {
		super();
	}

	showSecondaryModal() {
		this.modalService.show({
			label: "Secondary header label",
			title: "Sample secondary modal works.",
			content: this.modalText,
			size: this.size,
			buttons: [{
				text: "Cancel",
				type: ModalButtonType.secondary
			}, {
				text: "OK",
				type: ModalButtonType.primary,
				click: () => alert("OK button clicked")
			}]
		});
	}
}
