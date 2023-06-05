/* tslint:disable variable-name */

import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { ProgressBarModule, ProgressBar } from "./";

export default {
	title: "Components/Progress Bar",
	decorators: [
		moduleMetadata({
			imports: [ProgressBarModule]
		})
	],
	component: ProgressBar
} as Meta;

const Template: Story = (args) => ({
	props: args,
	template: `
		<cds-progress-bar
			[label]="label"
			[helperText]="helperText"
			[max]="max"
			[size]="size"
			[status]="status"
			[type]="type"
			[value]="value">
		</cds-progress-bar>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	label: "Progress bar label",
	helperText: "Optional helper text",
	max: 100,
	size: "big",
	status: "active",
	type: "default",
	value: 35
};

Basic.argTypes = {
	size: {
		options: ["big", "small"],
		control: "radio"
	},
	status: {
		options: ["active", "finished", "error"],
		control: "radio"
	},
	type: {
		options: ["default", "inline", "indented"],
		control: "radio"
	}
};

const IndeterminateTemplate: Story = (args) => ({
	props: args,
	template: `
		<cds-progress-bar
			[label]="label"
			[helperText]="helperText"
			[size]="size"
			[status]="status"
			[type]="type">
		</cds-progress-bar>
	`
});
export const Indeterminate = IndeterminateTemplate.bind({});
Indeterminate.args = {
	label: "Progress bar label",
	helperText: "Optional helper text",
	size: "big",
	type: "default"
};

Indeterminate.argTypes = {
	...Basic.argTypes,
	status: {
		control: false
	}
};
