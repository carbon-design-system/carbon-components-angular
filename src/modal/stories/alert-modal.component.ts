import { Component, Input } from "@angular/core";

import {
	ModalService,
	ModalButton,
	AlertModalType
} from "../";
import { PLACEHOLDER_SERVICE_PROVIDER } from "../../placeholder";

@Component({
	selector: "app-alert-modal-story",
	template: `
		<button class="cds--btn cds--btn--primary" (click)="openModal()">Open Modal</button>
	`,
	providers: [ModalService, PLACEHOLDER_SERVICE_PROVIDER],
	standalone: true
})
export class AlertModalStory {
	@Input() modalType: AlertModalType;
	@Input() modalLabel: string;
	@Input() modalTitle: string;
	@Input() modalContent: string;
	@Input() buttons: Array<ModalButton>;
	@Input() size: "xs" | "sm" | "md" | "lg";
	@Input() showCloseButton: boolean;

	constructor(protected modalService: ModalService) { }

	openModal() {
		this.modalService.show({
			type: this.modalType,
			label: this.modalLabel,
			title: this.modalTitle,
			content: this.modalContent,
			size: this.size,
			buttons: this.buttons,
			showCloseButton: this.showCloseButton
		});
	}
}
