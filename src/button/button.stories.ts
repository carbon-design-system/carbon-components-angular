/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { IconModule } from "../icon";
import {
	ButtonModule,
	Button,
	IconButton as IconButtonComponent
} from "./";

export default {
	title: "Components/Button",
	decorators: [
		moduleMetadata({
			imports: [
				ButtonModule,
				IconModule,
				DocumentationModule
			]
		})
	],
	argTypes: {
		kind: {
			options: [
				"primary",
				"secondary",
				"tertiary",
				"ghost",
				"danger",
				"danger--primary",
				"danger--tertiary",
				"danger--ghost"
			],
			defaultValue: "primary",
			control: { type: "select" }
		},
		size: {
			options: ["sm", "md", "lg", "xl", "2xl"],
			defaultValue: "md",
			control: { type: "select" }
		},
		isExpressive: {
			type: "boolean",
			defaultValue: false
		},
		disabled: {
			type: "boolean",
			defaultValue: false
		},
		// Actions
		onClick: { action: "clicked" },
		onMouseEnter: { action: "mouseenter" },
		onMouseLeave: { action: "mouseleave" },
		onFocus: { action: "focus" },
		onBlur: { action: "blur" }
	},
	component: Button,
	subcomponents: { IconButtonComponent }
} as Meta;

const Template: Story<Button> = (args) => ({
	props: args,
	template: `
		<button
			[ibmButton]="kind"
			[size]="size"
			[isExpressive]="isExpressive"
			[disabled]="disabled"
			(click)="onClick($event)"
			(mouseenter)="onMouseEnter($event)"
			(mouseleave)="onMouseLeave($event)"
			(focus)="onFocus($event)"
			(blur)="onBlur($event)">
			Button
		</button>
	`
});
export const Basic = Template.bind({});

const WithIconTemplate: Story<Button> = (args) => ({
	props: args,
	template: `
		<button
			[ibmButton]="kind"
			[size]="size"
			[isExpressive]="isExpressive"
			[disabled]="disabled"
			(click)="onClick($event)"
			(mouseenter)="onMouseEnter($event)"
			(mouseleave)="onMouseleave($event)"
			(focus)="onFocus($event)"
			(blur)="onBlur($event)">
			With icon
			<svg class="cds--btn__icon" ibmIcon="add" size="16"></svg>
		</button>
	`
});
export const WithIcon = WithIconTemplate.bind({});

const IconButtonTemplate: Story<IconButtonComponent> = (args) => ({
	props: args,
	template: `
		<ibm-icon-button
			id="icon-btn1"
			type="button"
			[kind]="kind"
			[size]="size"
			[align]="align"
			[buttonNgClass]="buttonNgClass"
			[buttonAttributes]="buttonAttributes"
			[disabled]="disabled"
			description="Icon Description"
			(click)="onClick($event)"
			(mouseenter)="onMouseEnter($event)"
			(mouseleave)="onMouseleave($event)"
			(focus)="onFocus($event)"
			(blur)="onBlur($event)">
			<svg class="cds--btn__icon" ibmIcon="copy" size="16"></svg>
		</ibm-icon-button>
	`
});
export const IconButton = IconButtonTemplate.bind({});
IconButton.args = {
	buttonAttributes: {
		"aria-label": "Example button aria-label"
	},
	buttonNgClass: {
		"example-global-class": true
	}
};

IconButton.argTypes = {
		align: {
		options: ["top", "left", "bottom", "right"],
		defaultValue: "bottom",
		control: { type: "select" }
	}
};

const ButtonSetTemplate: Story<Button> = (args) => ({
	props: args,
	template: `
		<ibm-button-set>
			<button ibmButton="secondary" [size]="size" [isExpressive]="isExpressive">Button</button>
			<button [ibmButton]="ibmButton" [size]="size" [isExpressive]="isExpressive">Button</button>
		</ibm-button-set>
	`
});
export const ButtonSet = ButtonSetTemplate.bind({});

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/classes/src_accordion.accordion.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
