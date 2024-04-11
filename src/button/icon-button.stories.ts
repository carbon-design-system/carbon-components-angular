/* tslint:disable variable-name */

import { moduleMetadata, Meta } from "@storybook/angular";
import { IconModule } from "../icon";
import {
	ButtonModule,
	IconButton
} from "./";

export default {
	title: "Components/Button/Icon Button",
	decorators: [
		moduleMetadata({
			imports: [
				ButtonModule,
				IconModule
			]
		})
	],
	args: {
		align: "bottom",
		kind: "primary",
		size: "md",
		isExpressive: "false",
		disabled: false
	},
	argTypes: {
		align: {
			options: ["top", "left", "bottom", "right"],
			control: { type: "select" }
		},
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
			name: "kind"
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
	component: IconButton
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<cds-icon-button
			buttonId="icon-btn1"
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
			<svg class="cds--btn__icon" cdsIcon="copy" size="16"></svg>
		</cds-icon-button>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	buttonAttributes: {
		"aria-label": "Example button aria-label"
	},
	buttonNgClass: {
		"example-global-class": true
	}
};
