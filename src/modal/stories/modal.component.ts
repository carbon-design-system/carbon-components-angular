import { Component, inject, Input } from "@angular/core";
import { ModalService } from "../";

import { SampleModal } from "./sample-modal.component";
import { PLACEHOLDER_SERVICE_PROVIDER, Placeholder } from "../../placeholder";

@Component({
	selector: "app-modal-story",
	template: `
		<button class="cds--btn cds--btn--primary" (click)="openModal()">Open Modal</button>
	`,
	imports: [SampleModal, Placeholder],
	providers: [ModalService, PLACEHOLDER_SERVICE_PROVIDER],
	standalone: true
})
export class ModalStory {
	@Input() modalText = "Hello, World";
	@Input() size = "md";
	@Input() showCloseButton = true;
	@Input() isFullWidth = false;
	@Input() ariaLabelledby: string;

	protected modalService = inject(ModalService);

	openModal() {
		this.modalService.create({
			component: SampleModal,
			inputs: {
				modalText: this.modalText,
				size: this.size,
				showCloseButton: this.showCloseButton,
				isFullWidth: this.isFullWidth,
				ariaLabelledby: this.ariaLabelledby
			}
		});
	}
}
