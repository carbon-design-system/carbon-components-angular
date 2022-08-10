/* tslint:disable variable-name */

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
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
				ReactiveFormsModule
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
		<ibm-select
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
		</ibm-select>
		<br>
		<div>
			<span>Selected: {{ model }}</span>
			<button (click)="model = ["default","option1","option2","option3"][Math.floor(Math.random() * 4)]">
				Select random
			</button>
		</div>
	`
});
export const NgModel = NgModelTemplate.bind({});
NgModel.argTypes = {
	model: {
		defaultValue: "option2",
		control: false
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
	control: {
		disabled: true
	}
};

const OptionsSelectedTemplate: Story<Select> = (args) => ({
	props: args,
	template: `
		<ibm-select label="Type">
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
		</ibm-select>
		<button (click)="["on-hand","in-transit-inbound","in-transit-outbound"][Math.floor(Math.random() * 3)]">
			Select random
		</button>
	`
});
export const OptionsSelected = OptionsSelectedTemplate.bind({});
OptionsSelected.storyName = "Changing selected through option selected property";
OptionsSelected.args = {
	selected: "in-transit-inbound"
};

const ValuePropertyTemplate: Story<Select> = (args) => ({
	props: args,
	template: `
		<ibm-select label="Type" [value]="selected">
			<option value="on-hand">On hand</option>
			<option value="in-transit-inbound">Inbound in-transit</option>
			<option value="in-transit-outbound">Outbound in-transit</option>
		</ibm-select>
		<button (click)="selected = ["on-hand","in-transit-inbound","in-transit-outbound"][Math.floor(Math.random() * 3)];">
			Select random
		</button>
	`
});
export const ValueProperty = ValuePropertyTemplate.bind({});
ValueProperty.storyName = "Changing selected through value property";
ValueProperty.args = {
	selected: "in-tarnsit-outbound"
};
