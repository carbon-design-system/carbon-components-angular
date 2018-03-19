import { Component } from "@angular/core";
import { XLModalComponent } from "./extra-large.component";
import { ErrorModalComponent } from "./error-modal.component";
import { SampleModalComponent } from "./sample-modal.component";
import { FormModalComponent } from "./form-modal.component";
import { DrilldownModalComponent } from "./drilldown-modal.component";
import { ModalService } from "../../../src";

@Component({
	selector: "app-modal-demo",
	template: `
	<h1 class="p-demo-heading">Modal</h1>

	<h2 class="p-demo-section">Default</h2>
	<button class="btn--primary" (click)="openModal()">XL modal</button>
	<button class="btn--primary" (click)="openModal('XXL')">XXL modal</button>
	<h3 class="p-demo-variation">Form</h3>
	<button class="btn--primary" (click)="openModal('form')">Form modal</button>
	<p style="margin-top: 40px">Form data: {{this.data | json}}</p>
	<h2 class="p-demo-section">Nag</h2>
	<button class="btn--primary" (click)="openModal('error')">Error modal</button>
	<h2 class="p-demo-section">Custom</h2>
	<button class="btn--primary" (click)="openModal('close')">Programmatic close</button>
	<button class="btn--primary" (click)="openModal('drill')">Drill-down modal</button>
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
