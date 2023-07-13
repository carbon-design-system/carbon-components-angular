/* tslint:disable variable-name */

import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { IconModule } from "../icon";
import { ButtonModule, Button } from "./";

export default {
	title: "Components/Button",
	decorators: [
		moduleMetadata({
			imports: [
				ButtonModule,
				IconModule
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
			control: { type: "select" },
			name: "cdsButton"
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
	parameters: {
		layout: "centered"
	},
	component: Button
} as Meta;

const Template: Story<Button> = (args) => ({
	props: args,
	template: `
		<button
			[cdsButton]="kind"
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
			[cdsButton]="kind"
			[size]="size"
			[isExpressive]="isExpressive"
			[disabled]="disabled"
			(click)="onClick($event)"
			(mouseenter)="onMouseEnter($event)"
			(mouseleave)="onMouseleave($event)"
			(focus)="onFocus($event)"
			(blur)="onBlur($event)">
			With icon
			<svg class="cds--btn__icon" cdsIcon="add" size="16"></svg>
		</button>
	`
});
export const WithIcon = WithIconTemplate.bind({});
