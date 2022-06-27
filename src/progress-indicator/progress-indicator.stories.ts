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
			optionalText: "optional"
		},
		{
			text: "Second step",
			state: ["current"],
			tooltip: {
				description: "Overflow tooltip content."
			}
		},
		{
			text: "Third step",
			state: ["incomplete"],
			tooltip: {
				description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Animi consequuntur hic ratione aliquid cupiditate, nesciunt saepe iste
					blanditiis cumque maxime tenetur veniam est illo deserunt sint quae pariatur.
					Laboriosam, consequatur.`,
				align: "bottom-left"
			}
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
