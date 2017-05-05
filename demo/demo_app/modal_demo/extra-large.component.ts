import { Component } from "@angular/core";
import { ModalService } from "./../../../src/modal/modal.service";
import { Modal } from "../../../src/";
import { SampleModalComponent } from "./sample-modal.component";

@Modal()
@Component({
	selector: "xxl-modal",
	template: `
	<cdl-modal size="xxl" (overlaySelected)="closeModal()">
		<cdl-modal-header (closeSelect)="closeModal()">XXL</cdl-modal-header>
		<section class="modal-body">
			<p>This is an XXL Modal</p>
			<button class="btn" (click)="openModal()">Open another modal</button>
		</section>
		<cdl-modal-footer><button class="btn cancel-button" (click)="closeModal()">Cancel</button></cdl-modal-footer>
	</cdl-modal>
	`,
	styleUrls: ["./error-modal.component.scss"]
})
export class XLModalComponent {

	constructor(private modalService: ModalService) { }

	openModal(modalType) {
		this.modalService.create({component: SampleModalComponent, inputs: {modalText: "Ain't this cool!"}});
	}
}
