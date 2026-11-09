import { Component, inject } from "@angular/core";
import {
	ModalService,
	BaseModal,
	ModalButtonType,
	Modal,
	ModalHeader,
	ModalHeaderLabel,
	ModalHeaderHeading,
	ModalContent,
	ModalContentText,
	ModalFooter,
	AlertModal
} from "../";
import { PLACEHOLDER_SERVICE_PROVIDER, Placeholder } from "../../placeholder";

@Component({
	selector: "app-sample-modal",
	template: `
		<cds-modal
			[size]="size"
			[open]="open"
			[isFullWidth]="isFullWidth"
			(overlaySelected)="closeModal()">
			<cds-modal-header (closeSelect)="closeModal()" [showCloseButton]="showCloseButton">
				<h2 cdsModalHeaderLabel>Label</h2>
				<h3 cdsModalHeaderHeading>Modal</h3>
			</cds-modal-header>
			<section cdsModalContent>
				<h1>Sample modal works.</h1>
				<p cdsModalContentText>{{modalText}}</p>
			</section>
			<cds-modal-footer>
				<button class="cds--btn cds--btn--secondary" (click)="showSecondaryModal()">Show secondary modal</button>
				<button class="cds--btn cds--btn--primary" modal-primary-focus (click)="closeModal()">Close</button>
			</cds-modal-footer>
		</cds-modal>
		<!-- we need the placeholder again, somce this is standalone and we cannot assume that the higher component has a placeholder-->
		<cds-placeholder></cds-placeholder>
	`,
	imports: [
		Modal,
		ModalHeader,
		ModalHeaderLabel,
		ModalHeaderHeading,
		ModalContent,
		ModalContentText,
		ModalFooter,
		AlertModal,
		Placeholder
	],
	providers: [ModalService, PLACEHOLDER_SERVICE_PROVIDER],
	standalone: true
})
export class SampleModal extends BaseModal {
	public modalText = inject<any>("modalText" as any);
	public size = inject<any>("size" as any);
	public isFullWidth = inject<any>("isFullWidth" as any);
	public showCloseButton = inject<boolean | undefined>("showCloseButton" as any) ?? true;
	protected modalService = inject(ModalService);

	showSecondaryModal() {
		this.modalService.show({
			label: "Secondary header label",
			title: "Sample secondary modal works.",
			content: this.modalText,
			size: this.size,
			buttons: [{
				text: "Cancel",
				type: ModalButtonType.secondary
			}, {
				text: "OK",
				type: ModalButtonType.primary,
				click: () => alert("OK button clicked")
			}]
		});
	}
}
