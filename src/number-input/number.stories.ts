import { moduleMetadata, Meta } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { NumberComponent } from "./";

export default {
	title: "Components/Number Input",
	decorators: [
		moduleMetadata({
			imports: [FormsModule]
		})
	],
	args: {
		value: 0,
		label: "Number input label",
		helperText: "Optional helper text",
		invalidText: "Invalid text",
		min: 0,
		max: 100,
		step: 1,
		invalid: false,
		readonly: false,
		disabled: false,
		size: "md",
		theme: "dark",
		warn: false,
		warnText: "Warn text",
		fluid: false
	},
	argTypes: {
		size: {
			options: ["sm", "md", "lg"],
			control: "radio"
		},
		theme: {
			options: ["light", "dark"],
			control: "radio"
		},
		// Actions
		change: { action: "changed"}
	},
	component: NumberComponent
} as Meta;

const Template = (args) => ({
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
			[readonly]="readonly"
			[disabled]="disabled"
			[fluid]="fluid"
			(change)="change($event)">
		</cds-number>
	`
});
export const Basic = Template.bind({});

export const Fluid = Template.bind({});
Fluid.args = {
	fluid: true
};

const ModelTemplate = (args) => ({
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
			[warn]="warn"
			[warnText]="warnText"
			[disabled]="disabled"
			[(ngModel)]="value"
			[fluid]="fluid"
			(change)="change($event)">
		</cds-number>
		{{ value }}
	`
});
export const NgModel = ModelTemplate.bind({});
NgModel.story = "ngModel";

const SkeletonTemplate = (args) => ({
	props: args,
	template: `
		<cds-number
			label="Number input label"
			skeleton="true"
			[fluid]="fluid"
			(change)="change($event)">
		</cds-number>
	`
});
export const Skeleton = SkeletonTemplate.bind({});
