import { Component } from "@angular/core";
import { XLModalComponent } from "./extra-large.component";
import { ErrorModalComponent } from "./error-modal.component";
import { SampleModalComponent } from "./sample-modal.component";
import { FormModalComponent } from "./form-modal.component";
import {DrilldownModalComponent } from "./drilldown-modal.component";
import { ModalService } from "../../../src";

@Component({
	selector: "modal-demo",
	template: `
	<button class="btn" (click)="openModal()">XL Modal</button>
	<button class="btn" (click)="openModal('XXL')">XXL Modal</button>
	<button class="btn" (click)="openModal('error')">Error Modal</button>
	<button class="btn" (click)="openModal('form')">Form Modal</button>
	<button class="btn" (click)="openModal('close')">Programmatic close</button>
	<button class="btn" (click)="openModal('drill')">Drilldown modal</button>

	<div>{{this.data | json}}</div>
	`
})
export class ModalDemo {

	data: Object;

	constructor(private modalService: ModalService) {}

	openModal(modalType) {
		switch (modalType) {
			case "XXL":
				this.modalService.create({component: XLModalComponent});
				break;
			case "error":
				this.modalService.create({component: ErrorModalComponent});
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
			case "close":
				let m = this.modalService.create({component: SampleModalComponent, inputs: {modalText: "I close in 2s."}});
				m.onDestroy(() => console.log("closed!"));
				setTimeout(() => m.destroy(), 2000);
				break;
			case "drill":
				this.modalService.create({component: DrilldownModalComponent});
				break;
			default:
				this.modalService.create({component: SampleModalComponent, inputs: {modalText: "Hello universe."}});
				break;
		}
	}

	formSubmitted(data) {
		this.data = data.value;
	}
}
