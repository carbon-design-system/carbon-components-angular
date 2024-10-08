/* tslint:disable variable-name */

import { moduleMetadata, Meta } from "@storybook/angular";
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

const Template = (args) => ({
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
			[readonly]="readonly"
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
	readonly: false,
	shiftMultiplier: 4,
	theme: "dark"
};
Basic.argTypes = {
	valueChange: {
		control: "Value changed!"
	},
	theme: {
		options: ["light", "dark"],
		control: "radio"
	}
};

const RangeTemplate = (args) => ({
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
			[readonly]="readonly"
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
