/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { PlaceholderModule } from "../placeholder";
import { InputModule } from "../input";
import { ButtonModule } from "../button";
import { ModalModule, Modal } from "./";

import {
	ModalStory,
	SampleModal,
	InputModal,
	DataPassingModal,
	AlertModalStory,
	SampleFormModal
} from "./stories";

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
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/modal/stories/modal.component.ts
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
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/modal/stories/form-modal.component.ts
		-->
		<app-form-modal></app-form-modal>
	`
});
export const FormModal = FormTemplate.bind({});

const TransactionTemplate: Story<Modal> = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/modal/stories/alert-modal.component.ts
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
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/modal/stories/alert-modal.component.ts
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
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/modal/stories/data-passing.component.ts
		-->
		<app-data-passing-modal
			[modalText]="modalText"
			[size]="size">
		</app-data-passing-modal>
		<ibm-placeholder></ibm-placeholder>
	`
});
export const DataPassing = DataPassingTemplate.bind({});
DataPassing.args = {
	modalText: "Hello, world!"
};
DataPassing.argTypes = {
	size: {
		defaultValue: "md",
		options: ["xs", "sm", "md", "lg"],
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
