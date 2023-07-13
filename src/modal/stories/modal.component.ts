import { Component, Input } from "@angular/core";
import { ModalService } from "../";

import { SampleModal } from "./sample-modal.component";

@Component({
	selector: "app-modal-story",
	template: `
		<button class="cds--btn cds--btn--primary" (click)="openModal()">Open Modal</button>
	`
})
export class ModalStory {
	@Input() modalText = "Hello, World";
	@Input() size = "md";
	@Input() showCloseButton = true;

	constructor(protected modalService: ModalService) { }

	openModal() {
		this.modalService.create({
			component: SampleModal,
			inputs: {
				modalText: this.modalText,
				size: this.size,
				showCloseButton: this.showCloseButton
			}
		});
	}
}
