/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { ComboBoxModule, ComboBox } from "./";

export default {
	title: "Components/Combobox",
	decorators: [
		moduleMetadata({
			imports: [ComboBoxModule, DocumentationModule]
		})
	],
	args: {
		label: "Label",
		helperText: "Optional helper text",
		disabled: false,
		invalid: false,
		invalidText: "A valid value is required",
		warn: false,
		warnText: "This is a warning",
		items: [
			{
				content: "one"
			},
			{
				content: "two"
			},
			{
				content: "three"
			},
			{
				content: "four"
			}
		],
		appendInline: false,
		dropUp: false
	},
	argTypes: {
		size: {
			options: ["sm", "md", "lg"],
			defaultValue: "md",
			control: "radio"
		},
		theme: {
			options: ["light", "dark"],
			defaultValue: "dark",
			control: "radio"
		},
		selected: { action: "Selection changed!" },
		submit: { action: "Submit" },
		search: { action: "Search" }
	}
} as Meta;

const Template: Story<ComboBox> = (args) => ({
	props: args,
	template: `
		<ibm-combo-box
			[disabled]="disabled"
			[invalid]="invalid"
			[size]="size"
			[appendInline]="appendInline"
			[invalidText]="invalidText"
			[warn]="warn"
			[warnText]="warnText"
			[label]="label"
			[helperText]="helperText"
			[items]="items"
			[theme]="theme"
			[dropUp]="dropUp"
			(selected)="selected($event)"
			(submit)="submit($event)"
			(search)="search($event)">
			<ibm-dropdown-list></ibm-dropdown-list>
		</ibm-combo-box>
	`
});
export const Basic = Template.bind({});
Basic.argTypes = {
	items: {
		controls: false
	}
};

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/classes/src_combobox.combobox.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
