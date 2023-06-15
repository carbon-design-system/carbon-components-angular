/* tslint:disable variable-name */

import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { InputModule, Label } from "./";

export default {
	title: "Components/Input",
	decorators: [
		moduleMetadata({
			imports: [InputModule]
		})
	]
} as Meta;

const Template: Story<Label> = (args) => ({
	props: args,
	template: `
		<cds-label
		[helperText]="helperText"
		[invalid]="invalid"
		[invalidText]="invalidText"
		[warn]="warn"
		[disabled]="disabled"
		[warnText]="warnText">
		{{label}}
		<input
			cdsText
			[size]="size"
			[invalid]="invalid"
			[warn]="warn"
			[disabled]="disabled"
			[theme]="theme"
			[placeholder]="placeholder"
			[autocomplete]="autocomplete">
		</cds-label>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	disabled: false,
	invalid: false,
	invalidText: "Invalid entry",
	warn: false,
	warnText: "This is a warning!",
	label: "Text input label",
	helperText: "Optional helper text",
	placeholder: "Placeholder"
};
Basic.argTypes = {
	autocomplete: {
		options: ["on", "off"],
		defaultValue: "on",
		control: "radio"
	},
	theme: {
		options: ["light", "dark"],
		defaultValue: "dark",
		control: "radio"
	},
	size: {
		options: ["sm", "md", "lg"],
		defaultValue: "md",
		contorl: "select"
	},
	component: Label
};

const TextareaTemplate: Story<Label> = (args) => ({
	props: args,
	template: `
		<cds-label
		[helperText]="helperText"
		[invalid]="invalid"
		[disabled]="disabled"
		[invalidText]="invalidText">
		{{label}}
		<textarea
			cdsTextArea
			[placeholder]="placeholder"
			[invalid]="invalid"
			[disabled]="disabled"
			[theme]="theme"
			[rows]="rows"
			[cols]="cols"
			aria-label="textarea"></textarea>
		</cds-label>
	`
});
export const TextArea = TextareaTemplate.bind({});
TextArea.args = {
	...Basic.args,
	cols: 50,
	rows: 4
};
TextArea.argTypes = {
	...Basic.argTypes
};

const SkeletonTemplate: Story<Label> = (args) => ({
	props: args,
	template: `
		<cds-label skeleton="true">
			<input cdsText skeleton="true">
		</cds-label>
		<br>
		<input cdsText skeleton="true">
		<br><br>
		<cds-label skeleton="true">
			<div cdsTextArea skeleton="true"></div>
		</cds-label>
	`
});
export const Skeleton = SkeletonTemplate.bind({});
