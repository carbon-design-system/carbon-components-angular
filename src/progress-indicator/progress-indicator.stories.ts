/* tslint:disable variable-name */

import { moduleMetadata, Meta } from "@storybook/angular";
import { ProgressIndicatorModule, ProgressIndicator } from "./";

export default {
	title: "Components/Progress Indicator",
	decorators: [
		moduleMetadata({
			imports: [ProgressIndicatorModule]
		})
	],
	component: ProgressIndicator
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<cds-progress-indicator
			[skeleton]="skeleton"
			[steps]="steps"
			[orientation]="orientation"
			[current]="current"
			(stepSelected)="stepSelected($event)"
			[spacing]="spacing">
		</cds-progress-indicator>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	skeleton: false,
	current: 1,
	steps: [
		{
			label: "First step",
			complete: true,
			secondaryLabel: "optional text",
			onClick: () => {
				alert("First step clicked!");
			}
		},
		{
			label: "Second step",
			complete: false,
			current: true
		},
		{
			label: "Third step",
			complete: false
		},
		{
			label: "Fourth step",
			complete: false,
			invalid: true
		},
		{
			label: "Fifth step",
			complete: false,
			disabled: true
		}
	],
	align: "default",
	orientation: "horizontal"
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
		control: "radio"
	},
	orientation: {
		options: ["horizontal", "vertical"],
		control: "radio"
	}
};
