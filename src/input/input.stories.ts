/* tslint:disable variable-name */

import { moduleMetadata, Meta } from "@storybook/angular";
import { InputModule, TextInputLabelComponent } from "./";

export default {
	title: "Components/Input",
	decorators: [
		moduleMetadata({
			imports: [InputModule]
		})
	],
	component: TextInputLabelComponent
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<cds-text-label
		[helperText]="helperText"
		[invalid]="invalid"
		[invalidText]="invalidText"
		[warn]="warn"
		[disabled]="disabled"
		[warnText]="warnText">
		{{label}}
		<input
			cdsText
			type="text"
			[size]="size"
			[invalid]="invalid"
			[warn]="warn"
			[disabled]="disabled"
			[theme]="theme"
			[placeholder]="placeholder"
			[autocomplete]="autocomplete">
		</cds-text-label>
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
	placeholder: "Placeholder",
	autocomplete: "on",
	theme: "dark",
	size: "md"
};
Basic.argTypes = {
	autocomplete: {
		options: ["on", "off"],
		control: "radio"
	},
	theme: {
		options: ["light", "dark"],
		control: "radio"
	},
	size: {
		options: ["sm", "md", "lg"],
		contorl: "select"
	}
};


const SkeletonTemplate = (args) => ({
	props: args,
	template: `
		<cds-label skeleton="true">
			<input cdsText skeleton="true">
		</cds-label>
		<br>
		<input cdsText skeleton="true">
	`
});
export const Skeleton = SkeletonTemplate.bind({});
