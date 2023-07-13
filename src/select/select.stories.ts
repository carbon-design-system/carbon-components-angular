/* tslint:disable variable-name */

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import {
	SelectModule,
	Select,
	Option,
	OptGroup
} from "./";

import { ReactiveFormsSelect } from "./stories";

export default {
	title: "Components/Select",
	decorators: [
		moduleMetadata({
			imports: [
				SelectModule,
				FormsModule,
				ReactiveFormsModule
			],
			declarations: [ReactiveFormsSelect]
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
		<cds-select
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
		</cds-select>
	`
});
export const Basic = Template.bind({});
Basic.argTypes = {
	model: {
		defaultValue: "default",
		control: false
	}
};

const NgModelTemplate: Story<Select> = (args) => ({
	props: args,
	template: `
		<cds-select
			[(ngModel)]="model"
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
			[display]="display"
			ariaLabel='ngModel select'>
			<option value="default" disabled selected hidden>Choose an option</option>
			<option value="option1">Option 1</option>
			<option value="option2">Option 2</option>
			<option value="option3">Option 3</option>
		</cds-select>
	`
});
export const NgModel = NgModelTemplate.bind({});
NgModel.argTypes = {
	model: {
		defaultValue: "option2",
		options: ["default", "option1", "option2", "option3"],
		control: "select"
	}
};

const ReactiveTemplate: Story<Select> = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/select/stories/app-reactive-form.component.ts
		-->
		<app-reactive-form></app-reactive-form>
	`
});
export const ReactiveForms = ReactiveTemplate.bind({});
ReactiveForms.parameters = {
	controls: {
		disable: true
	}
};

const OptionsSelectedTemplate: Story<Select> = (args) => ({
	props: args,
	template: `
		<cds-select label="Type">
			<option
				value="on-hand"
				[selected]="selected === 'on-hand'">
				On hand
			</option>
			<option
				value="in-transit-inbound"
				[selected]="selected === 'in-transit-inbound'">
				Inbound in-transit
			</option>
			<option
				value="in-transit-outbound"
				[selected]="selected === 'in-transit-outbound'">
				Outbound in-transit
			</option>
		</cds-select>
	`
});
export const OptionsSelected = OptionsSelectedTemplate.bind({});
OptionsSelected.storyName = "Changing selected through option selected property";
OptionsSelected.args = {
	selected: "in-transit-inbound"
};
OptionsSelected.argTypes = {
	selected: {
		options: ["on-hand", "in-transit-inbound", "in-transit-outbound"],
		control: "select"
	}
};

const ValuePropertyTemplate: Story<Select> = (args) => ({
	props: args,
	template: `
		<cds-select label="Type" [value]="selected">
			<option value="on-hand">On hand</option>
			<option value="in-transit-inbound">Inbound in-transit</option>
			<option value="in-transit-outbound">Outbound in-transit</option>
		</cds-select>
	`
});
export const ValueProperty = ValuePropertyTemplate.bind({});
ValueProperty.storyName = "Changing selected through value property";
ValueProperty.args = {
	selected: "in-transit-outbound"
};
ValueProperty.argTypes = {
	selected: {
		options: ["on-hand", "in-transit-inbound", "in-transit-outbound"],
		control: "select"
	}
};
