import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, text, select } from "@storybook/addon-knobs/angular";

import { ModalModule } from "../";
import { Component, Input, Inject } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Modal, ModalService } from "../";
import { ModalButton, AlertModalType } from "./alert-modal.interface";

@Modal()
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
				<button class="bx--btn bx--btn--primary" modal-primary-focus (click)="closeModal()">Close</button>
			</ibm-modal-footer>
		</ibm-modal>
	`
})
class SampleModalComponent {
	constructor(@Inject("modalText") public modalText) {}
}

@Modal()
@Component({
	selector: "app-modal-story",
	template: `
		<button class="bx--btn bx--btn--primary" (click)="openModal()">Open Modal</button>
	`
})
class ModalStory {

	@Input() modalText = "Hello, World";

	constructor(private modalService: ModalService) { }

	openModal() {
		this.modalService.create({
			component: SampleModalComponent,
			inputs: {
				modalText: this.modalText
			}
		});
	}
}


@Modal()
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

	constructor(private modalService: ModalService) { }

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
				SampleModalComponent
			],
			imports: [
				ModalModule,
				BrowserAnimationsModule
			],
			entryComponents: [
				SampleModalComponent
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<app-modal-story [modalText]="modalText"></app-modal-story>
		<ibm-modal-placeholder></ibm-modal-placeholder>
		`,
		props: {
			modalText: text("modalText", "Hello, World!")
		}
	}))
	.addDecorator(
		moduleMetadata({
			declarations: [
				AlertModalStory
			],
			imports: [
				ModalModule,
				BrowserAnimationsModule
			],
			entryComponents: [
				SampleModalComponent
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Transactional", () => ({
		template: `
		<app-alert-modal-story
			[modalType]="modalType"
			[modalLabel]="modalLabel"
			[modalTitle]="modalTitle"
			[modalContent]="modalContent"
			[buttons]="buttons">
		</app-alert-modal-story>
		<ibm-modal-placeholder></ibm-modal-placeholder>
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
	.addDecorator(
		moduleMetadata({
			declarations: [
				AlertModalStory
			],
			imports: [
				ModalModule,
				BrowserAnimationsModule
			],
			entryComponents: [
				SampleModalComponent
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Passive", () => ({
		template: `
		<app-alert-modal-story
			[modalType]="modalType"
			[modalLabel]="modalLabel"
			[modalTitle]="modalTitle"
			[modalContent]="modalContent">
		</app-alert-modal-story>
		<ibm-modal-placeholder></ibm-modal-placeholder>
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
