import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, text, select } from "@storybook/addon-knobs/angular";

import { ModalModule } from "../";
import { Component, Input, Inject } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Modal, ModalService } from "../";
import { ModalButton, AlertModalType, ModalButtonType } from "./alert-modal.interface";
import { PlaceholderModule } from "./../placeholder/placeholder.module";
import { BaseModal } from "./base-modal.class";
import { ExperimentalComponenent } from "../../.storybook/experimental.component";
import { ExperimentalModule } from "../experimental.module";

@Component({
	selector: "app-sample-modal",
	template: `
		<ibm-modal>
			<ibm-modal-header (closeSelect)="closeModal()">Header label</ibm-modal-header>
			<section class="bx--modal-content">
				<h1>Sample modal works.</h1>
				<p class="bx--modal-content__text">{{modalText}}</p>
			</section>
			<ibm-modal-footer>
				<button class="bx--btn bx--btn--secondary" (click)="showSecondaryModal()">Show Secondary Modal</button>
				<button class="bx--btn bx--btn--primary" modal-primary-focus (click)="closeModal()">Close</button>
			</ibm-modal-footer>
		</ibm-modal>
	`
})
class SampleModal extends BaseModal {
	constructor(
		@Inject("modalText") public modalText,
		protected modalService: ModalService) {
		super();
	}

	showSecondaryModal() {
		this.modalService.show({
			modalLabel: "Secondary header label",
			modalTitle: "Sample secondary modal works.",
			modalContent: this.modalText,
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

@Component({
	selector: "app-modal-story",
	template: `
		<button class="bx--btn bx--btn--primary" (click)="openModal()">Open Modal</button>
	`
})
class ModalStory {

	@Input() modalText = "Hello, World";

	constructor(protected modalService: ModalService) { }

	openModal() {
		this.modalService.create({
			component: SampleModal,
			inputs: {
				modalText: this.modalText
			}
		});
	}
}


@Component({
	selector: "app-alert-modal-story",
	template: `
		<button class="bx--btn bx--btn--primary" (click)="openModal()">Open Modal</button>
	`
})
class AlertModalStory {
	@Input() modalType: AlertModalType;
	@Input() modalLabel: string;
	@Input() modalTitle: string;
	@Input() modalContent: string;
	@Input() buttons: Array<ModalButton>;

	constructor(protected modalService: ModalService) { }

	openModal() {
		this.modalService.show({
			modalType: this.modalType,
			label: this.modalLabel,
			title: this.modalTitle,
			content: this.modalContent,
			buttons: this.buttons
		});
	}
}

storiesOf("Modal", module)
	.addDecorator(
		moduleMetadata({
			declarations: [
				ModalStory,
				SampleModal,
				AlertModalStory,
				ExperimentalComponenent
			],
			imports: [
				ModalModule,
				PlaceholderModule,
				BrowserAnimationsModule,
				ExperimentalModule
			],
			entryComponents: [
				SampleModal
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<app-modal-story [modalText]="modalText"></app-modal-story>
		<ibm-placeholder></ibm-placeholder>
		`,
		props: {
			modalText: text("modalText", "Hello, World!")
		}
	}))
	.add("Transactional", () => ({
		template: `
		<app-experimental-component></app-experimental-component>
		<app-alert-modal-story
			[modalType]="modalType"
			[modalLabel]="modalLabel"
			[modalTitle]="modalTitle"
			[modalContent]="modalContent"
			[buttons]="buttons">
		</app-alert-modal-story>
		<ibm-placeholder></ibm-placeholder>
		`,
		props: {
			modalType: select("modalType", ["default", "danger"], "default"),
			modalLabel: text("modalLabel", "optional label"),
			modalTitle: text("modalTitle", "Delete service from application"),
			modalContent: text("modalContent", `Are you sure you want to remove the Speech to Text service from the node-test app?`),
			buttons: [{
				text: "Cancel",
				type: "secondary"
			}, {
				text: "Delete",
				type: "primary",
				click: () => alert("Delete button clicked")
			}]
		}
	}))
	.add("Passive", () => ({
		template: `
		<app-experimental-component></app-experimental-component>
		<app-alert-modal-story
			[modalType]="modalType"
			[modalLabel]="modalLabel"
			[modalTitle]="modalTitle"
			[modalContent]="modalContent">
		</app-alert-modal-story>
		<ibm-placeholder></ibm-placeholder>
		`,
		props: {
			modalType: select("modalType", ["default", "danger"], "default"),
			modalLabel: text("modalLabel", "optional label"),
			modalTitle: text("modalTitle", "Passive modal title"),
			modalContent: text("modalContent", "Passive modal notifications should only appear if there is an action " +
				"the user needs to address immediately. Passive modal notifications are persistent on screen")
		}
	}))
;
