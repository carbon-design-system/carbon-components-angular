import { Component } from "@angular/core";
import { ModalService } from "./../../../src/modal/modal.service";
import { Modal } from "../../../src/";
import { ErrorModalComponent } from "./error-modal.component";

@Modal()
@Component({
	selector: "xxl-modal",
	template: `
	<cdl-modal size="xxl" (overlaySelected)="closeModal()">
		<cdl-modal-header (closeSelect)="closeModal()">XXL</cdl-modal-header>
		<section class="modal-body">
			<p>This is an XXL modal.</p>
		</section>
		<cdl-modal-footer>
			<button class="btn btn-secondary cancel-button" (click)="closeModal()">Cancel</button>
			<button class="btn submit-button" (click)="openModal()">Submit and get error message</button>
		</cdl-modal-footer>
	</cdl-modal>
	`,
	styleUrls: ["./form-modal.component.scss"]
})
export class XLModalComponent {

	constructor(private modalService: ModalService) { }

	openModal(modalType) {
		this.modalService.create({component: ErrorModalComponent});
	}
}
