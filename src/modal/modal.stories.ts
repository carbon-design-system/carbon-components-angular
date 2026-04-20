/* tslint:disable variable-name */

import { moduleMetadata, Meta } from "@storybook/angular";
import { PlaceholderModule } from "../placeholder";
import { InputModule } from "../input";
import { ButtonModule } from "../button";
import { IconModule } from "../icon";
import { ModalModule, Modal } from "./";
import { AILabelModule } from "../ai-label";
import { AI_LABEL_INNER, AI_LABEL_STORY_STYLES } from "../storybook/ai-label-story-shared";

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
				InputModule,
				ButtonModule,
				IconModule,
				PlaceholderModule,
				AILabelModule
			]
		})
	]
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/modal/stories/modal.component.ts
		-->
		<app-modal-story [modalText]="modalText" [size]="size" [showCloseButton]="showCloseButton"></app-modal-story>
		<cds-placeholder></cds-placeholder>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	modalText: "Hello, world!",
	showCloseButton: true
};

const FormTemplate = (args) => ({
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

const TransactionTemplate = (args) => ({
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
		<cds-placeholder></cds-placeholder>
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

const PassiveTemplate = (args) => ({
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
		<cds-placeholder></cds-placeholder>
	`
});
export const Passive = PassiveTemplate.bind({});
Passive.args = {
	modalLabel: "Optional label",
	modalTitle: "Delete service from application",
	modalContent: "Are you sure you want to remove the Speech to Text service from the node-test app?",
	modalType: "default"
};
Passive.argTypes = {
	modalType: {
		options: ["default", "danger"],
		control: "select"
	}
};

const DataPassingTemplate = (args) => ({
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
		<cds-placeholder></cds-placeholder>
	`
});
export const DataPassing = DataPassingTemplate.bind({});
DataPassing.args = {
	modalText: "Hello, world!",
	size: "md"
};
DataPassing.argTypes = {
	size: {
		options: ["xs", "sm", "md", "lg"],
		control: "select"
	}
};

const SimpleTemplate = (args) => ({
	props: args,
	template: `
		<button #trigger cdsButton="primary" (click)="open = true">Open</button>
		<cds-modal [open]="open" [trigger]="trigger" (overlaySelected)="open = false" (close)="open = false">
			<cds-modal-header (closeSelect)="open = false" [showCloseButton]="showCloseButton">
				<p class="cds--modal-header__label cds--type-delta">No service required</p>
				<p class="cds--modal-header__heading cds--type-beta">A very simple modal</p>
			</cds-modal-header>
			<div class="cds--modal-content">
				<p>hello world</p>
			</div>
			<cds-modal-footer>
				<ng-container>
					<button
						cdsButton="primary"
						(click)="open = false"
						[attr.modal-primary-focus]="true">
						Okay
					</button>
				</ng-container>
			</cds-modal-footer>
		</cds-modal>
	`
});
export const Simple = SimpleTemplate.bind({});
Simple.args = {
	open: true,
	showCloseButton: true
};

const withAILabelTemplate = (args) => ({
	props: args,
	styles: AI_LABEL_STORY_STYLES,
	template: `
		<cds-modal
			[open]="open"
			[decorator]="decoratorTpl"
			(overlaySelected)="open = false"
			(close)="open = false">
			<cds-modal-header [decorator]="decoratorTpl" (closeSelect)="open = false" [showCloseButton]="showCloseButton">
				<p class="cds--modal-header__heading cds--type-beta">Modal with decorator</p>
			</cds-modal-header>
			<div class="cds--modal-content">
				<p>Decorators apply <code>cds--modal--decorator</code> on the overlay.</p>
			</div>
			<cds-modal-footer>
				<button cdsButton="primary" (click)="open = false" [attr.modal-primary-focus]="true">Close</button>
			</cds-modal-footer>
		</cds-modal>
		<ng-template #decoratorTpl>
			<cds-ai-label
				class="ai-label-container"
				kind="default"
				size="sm"
				[autoAlign]="true"
				aiText="AI"
				ariaLabel="Show information">
				` + AI_LABEL_INNER + `
			</cds-ai-label>
		</ng-template>
	`
});
export const withAILabel = withAILabelTemplate.bind({});
withAILabel.args = {
	open: true,
	showCloseButton: true
};

/**
 * Composed pattern: launch control, full header (label + title), scrolling body with fields,
 * footer actions, and shared AI label on the modal shell.
 */
const composedWithAILabelTemplate = (args) => ({
	props: args,
	styles: [
		...AI_LABEL_STORY_STYLES,
		`
		.ai-label-modal .cds--form-item {
			margin-top: 1rem;
		}
		`
	],
	template: `
		<div class="ai-label-modal">
			<button #launchBtn cdsButton="primary" (click)="open = true">Launch composed modal</button>
			<cds-modal
				[open]="open"
				[decorator]="decoratorTpl"
				[trigger]="launchBtn"
				(overlaySelected)="open = false"
				(close)="open = false">
				<cds-modal-header [decorator]="decoratorTpl" (closeSelect)="open = false" [showCloseButton]="showCloseButton">
					<p class="cds--modal-header__label cds--type-delta">Account resources</p>
					<p class="cds--modal-header__heading cds--type-beta">Add a custom domain</p>
				</cds-modal-header>
				<div class="cds--modal-content">
					<p style="margin-bottom: 1rem">
						Custom domains direct requests for your apps in this Cloud Foundry
						organization to a URL that you own. A custom domain can be a
						shared domain, a shared subdomain, or a shared domain and host.
					</p>
					<p style="margin-bottom: 1rem">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
						eu nibh odio. Nunc a consequat est, id porttitor sapien.
					</p>
					<cds-text-label>
						Domain name
						<input
							cdsText
							id="text-input-1"
							placeholder="e.g. github.com"
							modal-primary-focus />
					</cds-text-label>
					<label class="cds--label" style="display:block;margin-top:1rem">
						Region
						<select class="cds--select-input" style="display:block;width:100%;margin-top:0.25rem">
							<option value="us-south">US South</option>
							<option value="us-east">US East</option>
						</select>
					</label>
				</div>
				<cds-modal-footer>
					<button cdsButton="secondary" (click)="open = false">Cancel</button>
					<button cdsButton="primary" (click)="open = false">Save</button>
				</cds-modal-footer>
			</cds-modal>
		</div>
		<ng-template #decoratorTpl>
			<cds-ai-label
				class="ai-label-container"
				kind="default"
				size="md"
				[autoAlign]="true"
				aiText="AI"
				ariaLabel="Show information">
				` + AI_LABEL_INNER + `
			</cds-ai-label>
		</ng-template>
	`
});

export const composedWithAILabel = composedWithAILabelTemplate.bind({});
composedWithAILabel.storyName = "Composed with AI label";
composedWithAILabel.args = {
	open: true,
	showCloseButton: true
};
