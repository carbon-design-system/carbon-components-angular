import { moduleMetadata, Meta } from "@storybook/angular";
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
	args: {
		kind: "primary",
		size: "md",
		isExpressive: "false",
		disabled: false
	},
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
			control: { type: "select" },
			name: "cdsButton"
		},
		size: {
			options: ["sm", "md", "lg", "xl", "2xl"],
			control: { type: "select" }
		},
		isExpressive: {
			type: "boolean"
		},
		disabled: {
			type: "boolean"
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

const Template = (args) => ({
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

const WithIconTemplate = (args) => ({
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
