/* tslint:disable variable-name */

import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { SliderModule, Slider } from "./";

export default {
	title: "Components/Slider",
	decorators: [
		moduleMetadata({
			imports: [
				SliderModule
			]
		})
	],
	component: Slider
} as Meta;

const Template: Story<Slider> = (args) => ({
	props: args,
	template: `
		<cds-slider
			[label]="label"
			[min]="min"
			[max]="max"
			[step]="step"
			[value]="value"
			[skeleton]="skeleton"
			[shiftMultiplier]="shiftMultiplier"
			[disabled]="disabled"
			aria-Label="Label for slider value"
			(valueChange)="valueChange($event)">
			<span minLabel>{{minLabel}}</span>
			<span maxLabel>{{maxLabel}}</span>
			<input [ngClass]="{'cds--text-input--light': theme === 'light'}"/>
		</cds-slider>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	min: 0,
	max: 100,
	step: 1,
	value: 0,
	minLabel: "0",
	maxLabel: "100",
	disabled: false,
	shiftMultiplier: 4
};
Basic.argTypes = {
	valueChange: {
		control: "Value changed!"
	},
	theme: {
		options: ["light", "dark"],
		defaultValue: "dark",
		control: "radio"
	}
};

const RangeTemplate: Story<Slider> = (args) => ({
	props: args,
	template: `
		<cds-slider
			[label]="label"
			[min]="min"
			[max]="max"
			[step]="step"
			[value]="value"
			[shiftMultiplier]="shiftMultiplier"
			[disabled]="disabled"
			aria-Label="Label for slider value"
			(valueChange)="valueChange($event)">
			<span minLabel>{{minLabel}}</span>
			<span maxLabel>{{maxLabel}}</span>
			<input [ngClass]="{'cds--text-input--light': theme === 'light'}"/>
			<input [ngClass]="{'cds--text-input--light': theme === 'light'}"/>
		</cds-slider>
	`
});
export const Range = RangeTemplate.bind({});
Range.args = {
	...Basic.args,
	value: [20, 80]
};
Range.argTypes = {
	...Basic.argTypes
};
