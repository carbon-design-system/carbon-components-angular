/* tslint:disable variable-name */

import { moduleMetadata, Meta, Story  } from "@storybook/angular";


import { ToggleModule, Toggle } from "./";

export default {
	title: "Components/Toggle",
	decorators: [
		moduleMetadata({
			imports: [ToggleModule]
		})
	],
	component: Toggle
} as Meta;

const Template: Story<Toggle> = (args) => ({
	props: args,
	template: `
		<cds-toggle
			[skeleton]="skeleton"
			[label]="label"
			[hideLabel]="hideLabel"
			[onText]="onText"
			[offText]="offText"
			[disabled]="disabled"
			[checked]="checked"
			(checkedChange)="onChange($event)"
			[size]="size">
		</cds-toggle>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	disabled: false,
	checked: false,
	hideLabel: false,
	label: "Toggle element label",
	onText: "On",
	offText: "Off",
	skeleton: false
};
Basic.argTypes = {
	onChange: {
		control: "Toggled!"
	},
	size: {
		options: ["sm", "md"],
		defaultValue: "md",
		control: "radio"
	}
};
