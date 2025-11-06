import { Component, Inject } from "@angular/core";
import { ModalService, BaseModal, Modal, ModalHeader, ModalFooter } from "../";
import { Label, TextInput } from "../../input";
import { PLACEHOLDER_SERVICE_PROVIDER } from "../../placeholder";

@Component({
	selector: "app-input-modal",
	template: `
		<cds-modal
			[size]="size"
			[open]="open"
			(overlaySelected)="closeModal()">
			<cds-modal-header (closeSelect)="closeModal()">Edit account name</cds-modal-header>
			<section class="cds--modal-content">
				<cds-label>
					Account name
					<input
						cdsText
						[value]="inputValue"
						(change)="onChange($event)">
				</cds-label>
			</section>
			<cds-modal-footer>
				<button class="cds--btn cds--btn--secondary" (click)="closeModal()">Cancel</button>
				<button class="cds--btn cds--btn--primary" modal-primary-focus (click)="closeModal()">Save</button>
			</cds-modal-footer>
		</cds-modal>
	`,
	standalone: true,
	imports: [Modal, ModalHeader, TextInput, Label, ModalFooter],
	providers: [ModalService, PLACEHOLDER_SERVICE_PROVIDER]
})
export class InputModal extends BaseModal {
	constructor(
		@Inject("modalText") public modalText,
		@Inject("size") public size,
		@Inject("data") public data,
		@Inject("inputValue") public inputValue,
		protected modalService: ModalService) {
		super();
	}

	onChange(event) {
		this.data.next(event.target.value);
	}
}
