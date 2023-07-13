/* tslint:disable variable-name */

import { moduleMetadata, Meta, Story  } from "@storybook/angular";
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
	component: IconButton
} as Meta;

const Template: Story<IconButton> = (args) => ({
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
Basic.argTypes = {
		align: {
		options: ["top", "left", "bottom", "right"],
		defaultValue: "bottom",
		control: { type: "select" }
	}
};
