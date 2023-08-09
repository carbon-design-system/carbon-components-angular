/* tslint:disable variable-name */

import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { NumberModule, NumberComponent } from "./";

export default {
	title: "Components/Number Input",
	decorators: [
		moduleMetadata({
			imports: [NumberModule]
		})
	],
	component: NumberComponent
} as Meta;

const Template: Story<NumberComponent> = (args) => ({
	props: args,
	template: `
		<cds-number
			[label]="label"
			[helperText]="[helperText]"
			[theme]="theme"
			[min]="min"
			[max]="max"
			[step]="step"
			[invalid]="invalid"
			[invalidText]="invalidText"
			[warn]="warn"
			[warnText]="warnText"
			[size]="size"
			[disabled]="disabled">
		</cds-number>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	value: 0,
	label: "Number input label",
	helperText: "Optional helper text",
	invalidText: "Invalid text",
	min: 0,
	max: 100,
	step: 1,
	invalid: false,
	disabled: false
};
Basic.argTypes = {
	size: {
		options: ["sm", "md", "lg"],
		defaultValue: "md",
		control: "radio"
	},
	theme: {
		options: ["light", "dark"],
		defaultValue: "dark",
		control: "radio"
	}
};

const ModelTemplate: Story<NumberComponent> = (args) => ({
	props: args,
	template: `
		<cds-number
			[label]="label"
			[helperText]="[helperText]"
			[theme]="theme"
			[min]="min"
			[size]="size"
			[max]="max"
			[step]="step"
			[precision]="precision"
			[invalid]="invalid"
			[invalidText]="invalidText"
			[disabled]="disabled"
			[(ngModel)]="value">
		</cds-number>
		{{ value }}
	`
});
export const NgModel = ModelTemplate.bind({});
NgModel.story = "ngModel";
NgModel.args = {
	...Basic.args
};
NgModel.argTypes = {
	...Basic.argTypes
};

const SkeletonTemplate: Story<NumberComponent> = (args) => ({
	props: args,
	template: `
		<cds-number label="Number input label" skeleton="true"></cds-number>
	`
});
export const Skeleton = SkeletonTemplate.bind({});
