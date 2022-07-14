/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { InputModule, Label } from "./";

export default {
	title: "Components/Input",
	decorators: [
		moduleMetadata({
			imports: [InputModule, DocumentationModule]
		})
	]
} as Meta;

const Template: Story<Label> = (args) => ({
	props: args,
	template: `
		<ibm-label
		[helperText]="helperText"
		[invalid]="invalid"
		[invalidText]="invalidText"
		[warn]="warn"
		[disabled]="disabled"
		[warnText]="warnText">
		{{label}}
		<input
			ibmText
			[size]="size"
			[invalid]="invalid"
			[warn]="warn"
			[disabled]="disabled"
			[theme]="theme"
			[placeholder]="placeholder"
			[autocomplete]="autocomplete">
		</ibm-label>
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
	}
};

const TextareaTemplate: Story<Label> = (args) => ({
	props: args,
	template: `
		<ibm-label
		[helperText]="helperText"
		[invalid]="invalid"
		[disabled]="disabled"
		[invalidText]="invalidText">
		{{label}}
		<textarea
			ibmTextArea
			[placeholder]="placeholder"
			[invalid]="invalid"
			[disabled]="disabled"
			[theme]="theme"
			[rows]="rows"
			[cols]="cols"
			aria-label="textarea"></textarea>
		</ibm-label>
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
		<ibm-label skeleton="true">
			<input ibmText skeleton="true">
		</ibm-label>
		<br>
		<input ibmText skeleton="true">
		<br><br>
		<ibm-label skeleton="true">
			<div ibmTextArea skeleton="true"></div>
		</ibm-label>
	`
});
export const Skeleton = SkeletonTemplate.bind({});

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_input.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
