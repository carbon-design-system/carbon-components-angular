/* tslint:disable variable-name */

import {
	Component,
	AfterContentInit,
	Inject,
	Input
} from "@angular/core";
import { Observable, Subject } from "rxjs";
import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { PlaceholderModule } from "../placeholder";
import { InputModule } from "../input";
import { ButtonModule } from "../button";
import {
	ModalModule,
	Modal,
	ModalService,
	BaseModal,
	ModalButton,
	AlertModalType,
	ModalButtonType
} from "./";

@Component({
	selector: "app-sample-modal",
	template: `
		<ibm-modal
			[size]="size"
			[open]="open"
			(overlaySelected)="closeModal()">
			<ibm-modal-header (closeSelect)="closeModal()" [showCloseButton]="showCloseButton">
				<h2 ibmModalHeaderLabel>Label</h2>
				<h3 ibmModalHeaderHeading>Modal</h3>
			</ibm-modal-header>
			<section ibmModalContent>
				<h1>Sample modal works.</h1>
				<p ibmModalContentText>{{modalText}}</p>
			</section>
			<ibm-modal-footer>
				<button class="cds--btn cds--btn--secondary" (click)="showSecondaryModal()">Show secondary modal</button>
				<button class="cds--btn cds--btn--primary" modal-primary-focus (click)="closeModal()">Close</button>
			</ibm-modal-footer>
		</ibm-modal>
	`
})
class SampleModal extends BaseModal {
	constructor(
		@Inject("modalText") public modalText,
		@Inject("size") public size,
		@Inject("showCloseButton") public showCloseButton = true,
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
	selector: "app-form-modal",
	template: `
		<ibm-modal
			size="lg"
			open="true"
			(overlaySelected)="closeModal()">
			<ibm-modal-header (closeSelect)="closeModal()">
				<h2 ibmModalHeaderLabel>Label</h2>
				<h3 ibmModalHeaderHeading>Modal</h3>
			</ibm-modal-header>
			<section ibmModalContent hasForm="true">
				<h1 ibmModalContentText class="cds--modal-content__regular-content modal-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus erat vel aliquam sodales.
					Phasellus porta velit vel libero pulvinar, sit amet semper purus volutpat.
				</h1>
				<div class="cds--text-input__field-wrapper">
					<ibm-label helperText="Helper text">
						{{label}}
						<input
							ibmText
							placeholder="Placeholder"
							[autocomplete]="false">
					</ibm-label>
				</div>
			</section>
			<ibm-modal-footer>
				<button class="cds--btn cds--btn--secondary" (click)="closeModal()">Show secondary modal</button>
				<button class="cds--btn cds--btn--primary" modal-primary-focus (click)="closeModal()">Close</button>
			</ibm-modal-footer>
		</ibm-modal>
	`,
	styles: [`
		.modal-text {
			margin-bottom: 30px;
		}
	`]
})
class SampleFormModal extends BaseModal { }

@Component({
	selector: "app-modal-story",
	template: `
		<button class="cds--btn cds--btn--primary" (click)="openModal()">Open Modal</button>
	`
})
class ModalStory {
	@Input() modalText = "Hello, World";
	@Input() size = "default";
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

@Component({
	selector: "app-input-modal",
	template: `
		<ibm-modal
			[size]="size"
			[open]="open"
			(overlaySelected)="closeModal()">
			<ibm-modal-header (closeSelect)="closeModal()">Edit account name</ibm-modal-header>
			<section class="cds--modal-content">
				<ibm-label>
					Account name
					<input
						ibmText
						[value]="inputValue"
						(change)="onChange($event)">
				</ibm-label>
			</section>
			<ibm-modal-footer>
				<button class="cds--btn cds--btn--secondary" (click)="closeModal()">Cancel</button>
				<button class="cds--btn cds--btn--primary" modal-primary-focus (click)="closeModal()">Save</button>
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
		<button class="cds--btn cds--btn--primary" (click)="openModal()">Open Modal</button>
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
		<button class="cds--btn cds--btn--primary" (click)="openModal()">Open Modal</button>
	`
})
class AlertModalStory {
	@Input() modalType: AlertModalType;
	@Input() modalLabel: string;
	@Input() modalTitle: string;
	@Input() modalContent: string;
	@Input() buttons: Array<ModalButton>;
	@Input() size: "xs" | "sm" | "lg";
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

// Story starts here
export default {
	title: "Components/Modal",
	decorators: [
		moduleMetadata({
			declarations: [
				ModalStory,
				SampleModal,
				InputModal,
				DataPassingModal,
				AlertModalStory,
				SampleFormModal
			],
			imports: [
				ModalModule,
				DocumentationModule,
				InputModule,
				ButtonModule,
				PlaceholderModule
			]
		})
	]
} as Meta;

const Template: Story<Modal> = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source as an example.
		-->
		<app-modal-story [modalText]="modalText" [size]="size" [showCloseButton]="showCloseButton"></app-modal-story>
		<ibm-placeholder></ibm-placeholder>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	modalText: "Hello, world!",
	showCloseButton: true
};

const FormTemplate: Story<Modal> = (args) => ({
	props: args,
	template: `<app-form-modal></app-form-modal>`
});
export const FormModal = FormTemplate.bind({});

const TransactionTemplate: Story<Modal> = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source as an example.
		-->
		<app-alert-modal-story
			[modalType]="modalType"
			[modalLabel]="modalLabel"
			[modalTitle]="modalTitle"
			[modalContent]="modalContent"
			[size]="size"
			[showCloseButton]="showCloseButton"
			[buttons]="buttons">
		</app-alert-modal-story>
		<ibm-placeholder></ibm-placeholder>
	`
});
export const Transactional = TransactionTemplate.bind({});
Transactional.args = {
	modalLabel: "Optional label",
	modalTitle: "Delete service from application",
	modalContent: "Are you sure you want to remove the Speech to Text service from the node-test app?",
	showCloseButton: true,
	buttons: [{
		text: "Cancel",
		type: "Secondary"
	}, {
		text: "Delete",
		type: "primary",
		click: () => {
			alert("Delete button clicked!");
		}
	}]
};

const PassiveTemplate: Story<Modal> = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source as an example.
		-->
		<app-alert-modal-story
			[modalType]="modalType"
			[modalLabel]="modalLabel"
			[modalTitle]="modalTitle"
			[size]="size"
			[modalContent]="modalContent">
		</app-alert-modal-story>
		<ibm-placeholder></ibm-placeholder>
	`
});
export const Passive = PassiveTemplate.bind({});
Passive.args = {
	modalLabel: "Optional label",
	modalTitle: "Delete service from application",
	modalContent: "Are you sure you want to remove the Speech to Text service from the node-test app?"
};
Passive.argTypes = {
	modalType: {
		defaultValue: "default",
		options: ["default", "danger"],
		control: "select"
	}
};

const DataPassingTemplate: Story<Modal> = (args) => ({
	props: args,
	template: `
		<!--
			app-* components are for demo purposes only.
			You can create your own implementation by using the component source as an example.
		-->
		<app-data-passing-modal
			[modalText]="modalText"
			[size]="size">
		</app-data-passing-modal>
		<ibm-placeholder></ibm-placeholder>
	`
});
export const DataPassing = DataPassingTemplate.bind({});
Passive.args = {
	modalText: "Hello, world!"
};
Passive.argTypes = {
	modalType: {
		defaultValue: "default",
		options: ["xs", "sm", "default", "lg"],
		control: "select"
	}
};

const SimpleTemplate: Story<Modal> = (args) => ({
	props: args,
	template: `
		<button #trigger ibmButton="primary" (click)="open = true">Open</button>
		<ibm-modal [open]="open" [trigger]="trigger" (overlaySelected)="open = false">
			<ibm-modal-header (closeSelect)="open = false" [showCloseButton]="showCloseButton">
				<p class="cds--modal-header__label cds--type-delta">No service required</p>
				<p class="cds--modal-header__heading cds--type-beta">A very simple modal</p>
			</ibm-modal-header>
			<div class="cds--modal-content">
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
	`
});
export const Simple = SimpleTemplate.bind({});
Simple.args = {
	open: true,
	showCloseButton: true
};

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_modal.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
