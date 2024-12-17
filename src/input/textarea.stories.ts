/* tslint:disable variable-name */

import { Meta, moduleMetadata } from "@storybook/angular";
import { InputModule, TextareaLabelComponent } from "./";

export default {
	title: "Components/Input/Text area",
	decorators: [
		moduleMetadata({
			imports: [InputModule]
		})
	],
	args: {
		disabled: false,
		invalid: false,
		invalidText: "Invalid entry",
		warn: false,
		warnText: "This is a warning!",
		label: "Text input label",
		helperText: "Optional helper text",
		placeholder: "Placeholder",
		cols: 50,
		rows: 4,
		autocomplete: "on",
		theme: "dark",
		readonly: false,
		fluid: false,
		skeleton: false,
		maxlength: undefined,
		enableCounter: false
	},
	argTypes: {
		autocomplete: {
			options: ["on", "off"],
			control: "radio"
		},
		theme: {
			options: ["light", "dark"],
			control: "radio"
		},
		maxlength: {
			control: "number"
		}
	},
	component: TextareaLabelComponent
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<cds-textarea-label
		[helperText]="helperText"
		[invalid]="invalid"
		[disabled]="disabled"
		[invalidText]="invalidText"
		[fluid]="fluid"
		[skeleton]="skeleton"
		[warn]="warn"
		[warnText]="warnText"
		[enableCounter]="enableCounter">
		{{label}}
		<textarea
			cdsTextArea
			[placeholder]="placeholder"
			[invalid]="invalid"
			[disabled]="disabled"
			[theme]="theme"
			[rows]="rows"
			[cols]="cols"
			[readonly]="readonly"
			[maxlength]="maxlength"
			aria-label="textarea"
			style="width: 100%;">
		</textarea>
		</cds-textarea-label>
	`
});
export const Basic = Template.bind({});

export const Fluid = Template.bind({});
Fluid.args = {
	fluid: true
};

const SkeletonTemplate = (args) => ({
	props: args,
	template: `
		<cds-textarea-label skeleton="true">
			<div cdsTextArea skeleton="true"></div>
		</cds-textarea-label>
	`
});
export const Skeleton = SkeletonTemplate.bind({});
