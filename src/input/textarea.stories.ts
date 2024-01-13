/* tslint:disable variable-name */

import { moduleMetadata, Meta } from "@storybook/angular";
import { InputModule, TextareaLabelComponent } from "./";

export default {
	title: "Components/Input/Text area",
	decorators: [
		moduleMetadata({
			imports: [InputModule]
		})
	],
	component: TextareaLabelComponent
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<cds-textarea-label
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
		</cds-textarea-label>
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
	cols: 50,
	rows: 4,
	autocomplete: "on",
	theme: "dark"
};
Basic.argTypes = {
	autocomplete: {
		options: ["on", "off"],
		control: "radio"
	},
	theme: {
		options: ["light", "dark"],
		control: "radio"
	}
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
