/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DropdownModule, Dropdown } from "./";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { PlaceholderModule } from "../placeholder";

export default {
	title: "Components/Dropdown",
	decorators: [
		moduleMetadata({
			imports: [
				DropdownModule,
				PlaceholderModule,
				DocumentationModule
			]
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
		type: {
			options: ["multi", "single"],
			control: "select",
			defaultValue: "multi"
		},
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
		onClose: { action: "Closed!" }
	}
} as Meta;

const Template: Story<Dropdown> = (args) => ({
	props: args,
	template: `
		<ibm-dropdown
			[type]="type"
			[label]="label"
			[helperText]="helperText"
			[size]="size"
			[dropUp]="dropUp"
			[invalid]="invalid"
			[invalidText]="invalidText"
			[warn]="warn"
			[warnText]="warnText"
			[theme]="theme"
			placeholder="Select"
			[disabled]="disabled"
			(selected)="selected($event)"
			(onClose)="onClose($event)">
			<ibm-dropdown-list [items]="items"></ibm-dropdown-list>
		</ibm-dropdown>
	`
});
export const Basic = Template.bind({});

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_dropdown.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
