/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { ProgressBarModule } from "./";

export default {
	title: "Components/Progress Bar",
	decorators: [
		moduleMetadata({
			imports: [ProgressBarModule, DocumentationModule]
		})
	]
} as Meta;

const Template: Story = (args) => ({
	props: args,
	template: `
		<ibm-progress-bar
			[label]="label"
			[helperText]="helperText"
			[max]="max"
			[size]="size"
			[status]="status"
			[type]="type"
			[value]="value">
		</ibm-progress-bar>
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
		<ibm-progress-bar
			[label]="label"
			[helperText]="helperText"
			[size]="size"
			[status]="status"
			[type]="type">
		</ibm-progress-bar>
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

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_progress_bar.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
