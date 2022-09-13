import { Component, Inject } from "@angular/core";
import { ModalService, BaseModal } from "../";

@Component({
	selector: "app-input-modal",
	template: `
		<ibm-modal
			[size]="size"
			[open]="open"
			(overlaySelected)="closeModal()">
			<ibm-modal-header (closeSelect)="closeModal()">Edit account name</ibm-modal-header>
			<section class="cds--modal-content">
				<ibm-label>
					Account name
					<input
						ibmText
						[value]="inputValue"
						(change)="onChange($event)">
				</ibm-label>
			</section>
			<ibm-modal-footer>
				<button class="cds--btn cds--btn--secondary" (click)="closeModal()">Cancel</button>
				<button class="cds--btn cds--btn--primary" modal-primary-focus (click)="closeModal()">Save</button>
			</ibm-modal-footer>
		</ibm-modal>
	`
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
