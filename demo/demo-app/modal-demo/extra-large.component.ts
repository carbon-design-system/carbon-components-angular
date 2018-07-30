import { Component } from "@angular/core";
import { ModalService } from "./../../../src/modal/modal.service";
import { Modal } from "../../../src/";
import { ErrorModalComponent } from "./error-modal.component";

@Modal()
@Component({
	selector: "app-xxl-modal",
	template: `
	<ibm-modal size="xxl">
		<ibm-modal-header (closeSelect)="closeModal()">XXL</ibm-modal-header>
		<section class="modal_body">
			<p>This is an XXL modal.</p>
		</section>
		<ibm-modal-footer>
			<button class="btn--secondary cancel-button" (click)="closeModal()">Cancel</button>
			<button class="btn--primary submit-button" (click)="openModal()">Submit and get error message</button>
		</ibm-modal-footer>
	</ibm-modal>
	`,
	styleUrls: ["./form-modal.component.scss"]
})
export class XLModalComponent {

	constructor(private modalService: ModalService) { }

	openModal(modalType) {
		this.modalService.create({component: ErrorModalComponent});
	}
}
