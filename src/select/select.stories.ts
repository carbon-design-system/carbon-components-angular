/* tslint:disable variable-name */

import { FormsModule } from "@angular/forms";
import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import {
	SelectModule,
	Select,
	Option,
	OptGroup
} from "./";

export default {
	title: "Components/Select",
	decorators: [
		moduleMetadata({
			imports: [
				SelectModule,
				FormsModule,
				DocumentationModule
			]
		})
	],
	args: {
		skeleton: false,
		disabled: false,
		invalid: false,
		invalidText: "Please select an option.",
		warn: false,
		warnText: "This is a warning!",
		label: "Select label",
		helperText: "Optional helper text"
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
		display: {
			options: ["default", "inline"],
			defaultValue: "on",
			control: "radio"
		}
	},
	component: Select,
	subcomponents: {
		Option,
		OptGroup
	}
} as Meta;

const Template: Story<Select> = (args) => ({
	props: args,
	template: `
		<ibm-select
			[skeleton]="skeleton"
			[disabled]="disabled"
			[size]="size"
			[invalid]="invalid"
			[invalidText]="invalidText"
			[warn]="warn"
			[warnText]="warnText"
			[label]="label"
			[helperText]="helperText"
			[theme]="theme"
			[(ngModel)]="model"
			[display]="display">
			<option value="default" disabled selected hidden>Choose an option</option>
			<option value="solong">A much longer option that is worth having around to check how text flows</option>
			<optgroup label="Category 1">
				<option value="option1">Option 1</option>
				<option value="option2">Option 2</option>
			</optgroup>
			<optgroup label="Category 2">
				<option value="option1">Option 1</option>
				<option value="option2">Option 2</option>
			</optgroup>
		</ibm-select>

		<span>Selected: {{ model }}</span>
	`
});
export const Basic = Template.bind({});
Basic.argTypes = {
	model: {
		defaultValue: "default",
		control: false
	}
};

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_select.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
