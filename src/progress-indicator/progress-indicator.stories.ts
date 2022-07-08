/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { ProgressIndicatorModule, ProgressIndicator } from "./";

export default {
	title: "Components/Progress Indicator",
	decorators: [
		moduleMetadata({
			imports: [ProgressIndicatorModule, DocumentationModule]
		})
	]
} as Meta;

const Template: Story<ProgressIndicator> = (args) => ({
	props: args,
	template: `
		<ibm-progress-indicator
			[skeleton]="skeleton"
			[steps]="steps"
			[orientation]="orientation"
			[current]="current"
			(stepSelected)="stepSelected($event)"
			[spacing]="spacing">
		</ibm-progress-indicator>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	skeleton: false,
	current: 1,
	steps: [
		{
			text: "First step",
			state: ["complete"],
			optionalText: "optional text",
			onClick: () => {
				alert("First step clicked!");
			}
		},
		{
			text: "Second step",
			state: ["current"]
		},
		{
			text: "Third step",
			state: ["incomplete"]
		},
		{
			text: "Fourth step",
			state: ["incomplete", "error"]
		},
		{
			text: "Fifth step",
			state: ["incomplete"],
			disabled: true
		}
	]

};
Basic.argTypes = {
	steps: {
		control: false
	},
	StepSelected: {
		control: "Step selected!"
	},
	align: {
		options: ["default", "equal"],
		defaultValue: "default",
		control: "radio"
	},
	orientation: {
		options: ["horizontal", "veritcal"],
		defaultValue: "horizontal",
		control: "radio"
	}
};

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_progress_indicator.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
