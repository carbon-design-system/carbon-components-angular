import { Component } from "@angular/core";
import { XLModalComponent } from "./extra-large.component";
import { ErrorModalComponent } from "./error-modal.component";
import { SampleModalComponent } from "./sample-modal.component";
import { FormModalComponent } from "./form-modal.component";
import { ModalService } from "../../../src";

@Component({
	selector: "modal-demo",
	templateUrl: "./modal-demo.component.html"
})
export class ModalDemo {

	data: Object;

	constructor(private modalService: ModalService) {}

	openModal(modalType) {
		switch (modalType) {
			case "XXL":
				this.modalService.create({component: XLModalComponent, inputs: {}});
				break;
			case "error":
				this.modalService.create({component: ErrorModalComponent, inputs: {}});
				break;
			case "form":
				this.modalService.create({
					component: FormModalComponent,
					inputs: {
						modalText: "This is where modal instructions should go.",
						fields: ["Field1", "Field2", "Field3"],
						submitted: this.formSubmitted.bind(this)
					}
				});
				break;
			default:
				this.modalService.create({component: SampleModalComponent, inputs: {modalText: "Hello Universe"}});
				break;
		}
	}

	formSubmitted(data) {
		this.data = data.value;
	}
}
