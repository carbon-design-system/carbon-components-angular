import {
	Component,
	Input,
	AfterContentInit
} from "@angular/core";
import { Observable, Subject } from "rxjs";

import { ModalService } from "../";
import { InputModal } from "./input-modal.component";

@Component({
	selector: "app-data-passing-modal",
	template: `
		<button class="cds--btn cds--btn--primary" (click)="openModal()">Open Modal</button>
		<h3>Data passed from input modal on close: </h3>{{ modalInputValue }}
	`
})
export class DataPassingModal {
	@Input() modalText = "Hello, World";
	@Input() size = "md";

	protected modalInputValue = "";

	constructor(protected modalService: ModalService) { }

	openModal() {
		const componentRef = this.modalService.create({
			component: InputModal,
			inputs: {
				modalText: this.modalText,
				inputValue: this.modalInputValue,
				size: this.size,
			}
		});

		componentRef.instance.close.subscribe((result: string) => {
			if (result === undefined) {
				console.log("Modal closed without value");
			} else {
				this.modalInputValue = result;
			}
		});
	}
}
