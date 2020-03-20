import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, text, select } from "@storybook/addon-knobs/angular";

import { ModalModule } from "../";
import { Component, Input, Inject } from "@angular/core";
import { ModalService } from "../";
import { DocumentationModule } from "./../documentation-component/documentation.module";
import {
	ModalButton,
	AlertModalType,
	ModalButtonType
} from "./alert-modal.interface";
import { PlaceholderModule } from "./../placeholder/index";
import { BaseModal } from "./base-modal.class";
import { Observable, Subject } from "rxjs";
import { InputModule } from "../input";
import { ButtonModule } from "../forms";

@Component({
	selector: "app-sample-modal",
	template: `
		<ibm-modal [size]="size" [open]="open" (overlaySelected)="closeModal()">
			<ibm-modal-header (closeSelect)="closeModal()">Header label</ibm-modal-header>
			<section class="bx--modal-content">
				<h1>Sample modal works.</h1>
				<p class="bx--modal-content__text">{{modalText}}</p>
			</section>
			<ibm-modal-footer>
				<button class="bx--btn bx--btn--secondary" (click)="showSecondaryModal()">Show secondary modal</button>
				<button class="bx--btn bx--btn--primary" modal-primary-focus (click)="closeModal()">Close</button>
			</ibm-modal-footer>
		</ibm-modal>
	`
})
class SampleModal extends BaseModal {
	constructor(
		@Inject("modalText") public modalText,
		@Inject("size") public size,
		protected modalService: ModalService) {
		super();
	}

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

@Component({
	selector: "app-modal-story",
	template: `
		<button class="bx--btn bx--btn--primary" (click)="openModal()">Open Modal</button>
	`
})
class ModalStory {

	@Input() modalText = "Hello, World";

	@Input() size = "default";

	constructor(protected modalService: ModalService) { }

	openModal() {
		this.modalService.create({
			component: SampleModal,
			inputs: {
				modalText: this.modalText,
				size: this.size
			}
		});
	}
}

@Component({
	selector: "app-input-modal",
	template: `
		<ibm-modal [size]="size" [open]="open" (overlaySelected)="closeModal()">
			<ibm-modal-header (closeSelect)="closeModal()">Edit account name</ibm-modal-header>
			<section class="bx--modal-content">
				<ibm-label>
					Account name
					<input
						ibmText
						[value]="inputValue"
						(change)="onChange($event)">
				</ibm-label>
			</section>
			<ibm-modal-footer>
				<button class="bx--btn bx--btn--secondary" (click)="closeModal()">Cancel</button>
				<button class="bx--btn bx--btn--primary" modal-primary-focus (click)="closeModal()">Save</button>
			</ibm-modal-footer>
		</ibm-modal>
	`
})
class InputModal extends BaseModal {
	constructor(
		@Inject("modalText") public modalText,
		@Inject("size") public size,
		@Inject("data") public data,
		@Inject("inputValue") public inputValue,
		protected modalService: ModalService) {
		super();
	}

	onChange(event) {
		this.data.next(event.target.value);
	}
}

@Component({
	selector: "app-data-passing-modal",
	template: `
		<button class="bx--btn bx--btn--primary" (click)="openModal()">Open Modal</button>
		<h3>Data passed from input modal on input change: </h3>{{ modalInputValue }}
	`
})
class DataPassingModal implements AfterContentInit {
	@Input() modalText = "Hello, World";

	@Input() size = "default";

	protected modalInputValue = "";
	protected data: Observable<string> = new Subject<string>();

	constructor(protected modalService: ModalService) { }

	openModal() {
		this.modalService.create({
			component: InputModal,
			inputs: {
				modalText: this.modalText,
				inputValue: this.modalInputValue,
				size: this.size,
				data: this.data
			}
		});
	}

	ngAfterContentInit() {
		this.data.subscribe(value => this.modalInputValue = value);
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
	@Input() size: "xs" | "sm" | "lg";

	constructor(protected modalService: ModalService) { }

	openModal() {
		this.modalService.show({
			type: this.modalType,
			label: this.modalLabel,
			title: this.modalTitle,
			content: this.modalContent,
			size: this.size,
			buttons: this.buttons
		});
	}
}

storiesOf("Components|Modal", module)
	.addDecorator(
		moduleMetadata({
			declarations: [
				ModalStory,
				SampleModal,
				InputModal,
				DataPassingModal,
				AlertModalStory
			],
			imports: [
				ModalModule,
				PlaceholderModule,
				InputModule,
				ButtonModule,
				DocumentationModule
			],
			entryComponents: [
				SampleModal,
				InputModal
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<app-modal-story [modalText]="modalText" [size]="size"></app-modal-story>
		<ibm-placeholder></ibm-placeholder>
		`,
		props: {
			modalText: text("modalText", "Hello, World!"),
			size: select("size", ["xs", "sm", "lg"], "sm")
		}
	}))
	.add("Transactional", () => ({
		template: `
		<app-alert-modal-story
			[modalType]="modalType"
			[modalLabel]="modalLabel"
			[modalTitle]="modalTitle"
			[modalContent]="modalContent"
			[size]="size"
			[buttons]="buttons">
		</app-alert-modal-story>
		<ibm-placeholder></ibm-placeholder>
		`,
		props: {
			modalType: select("modalType", ["default", "danger"], "default"),
			modalLabel: text("modalLabel", "optional label"),
			modalTitle: text("modalTitle", "Delete service from application"),
			modalContent: text("modalContent", `Are you sure you want to remove the Speech to Text service from the node-test app?`),
			size: select("size", ["xs", "sm", "default", "lg"], "default"),
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
		<app-alert-modal-story
			[modalType]="modalType"
			[modalLabel]="modalLabel"
			[modalTitle]="modalTitle"
			[size]="size"
			[modalContent]="modalContent">
		</app-alert-modal-story>
		<ibm-placeholder></ibm-placeholder>
		`,
		props: {
			modalType: select("modalType", ["default", "danger"], "default"),
			modalLabel: text("modalLabel", "optional label"),
			modalTitle: text("modalTitle", "Passive modal title"),
			size: select("size", ["xs", "sm", "default", "lg"], "default"),
			modalContent: text("modalContent", "Passive modal notifications should only appear if there is an action " +
				"the user needs to address immediately. Passive modal notifications are persistent on screen")
		}
	}))
	.add("Data passing", () => ({
		template: `
			<app-data-passing-modal
				[modalText]="modalText"
				[size]="size">
			</app-data-passing-modal>
			<ibm-placeholder></ibm-placeholder>
		`,
		props: {
			modalText: text("modalText", "Hello, World!"),
			size: select("size", ["xs", "sm", "default", "lg"], "default")
		}
	}))
	.add("Simple modal", () => ({
		template: `
			<button #trigger ibmButton="primary" (click)="open = true">Open</button>
			<ibm-modal [open]="open" [trigger]="trigger" (overlaySelected)="open = false">
				<ibm-modal-header (closeSelect)="open = false">
					<p class="bx--modal-header__label bx--type-delta">No service required</p>
					<p class="bx--modal-header__heading bx--type-beta">A very simple modal</p>
				</ibm-modal-header>
				<div class="bx--modal-content">
					<p>hello world</p>
				</div>
				<ibm-modal-footer>
					<ng-container>
						<button
							ibmButton="primary"
							(click)="open = false"
							[attr.modal-primary-focus]="true">
							Okay
						</button>
					</ng-container>
				</ibm-modal-footer>
			</ibm-modal>
		`,
		props: {
			open: false
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/Modal.html"></ibm-documentation>
		`
	}));
