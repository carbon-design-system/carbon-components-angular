/* tslint:disable variable-name */

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { ComboBoxModule, ComboBox } from "./";

import {
	DynamicListComboBox,
	ReactiveFormsCombobox,
	MockQueryCombobox
} from "./stories";

export default {
	title: "Components/Combobox",
	decorators: [
		moduleMetadata({
			declarations: [
				DynamicListComboBox,
				ReactiveFormsCombobox,
				MockQueryCombobox
			],
			imports: [
				FormsModule,
				ReactiveFormsModule,
				ComboBoxModule
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
			},
			{
				content: "five"
			},
			{
				content: "six"
			},
			{
				content: "seven"
			},
			{
				content: "eight"
			},
			{
				content: "nine"
			},
			{
				content: "ten"
			}
		],
		appendInline: false,
		dropUp: false,
		selectionFeedback: "top-after-reopen"
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
		maxLength: {
			control: false
		},
		type: {
			control: false
		},
		selected: { action: "Selection changed!" },
		submit: { action: "Submit" },
		search: { action: "Search" },
		clear: { action: "Clear!" }
	},
	parameters: {
		layout: "centered"
	},
	component: ComboBox
} as Meta;

const Template: Story<ComboBox> = (args) => ({
	props: args,
	template: `
		<cds-combo-box
			[(ngModel)]="model"
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
			(search)="search($event)"
			(clear)="clear($event)">
			<cds-dropdown-list></cds-dropdown-list>
		</cds-combo-box>
		<span>{{model | json}}</span>
	`
});
export const Basic = Template.bind({});
Basic.argTypes = {
	items: {
		controls: false
	}
};

const BasicMaxTemplate: Story<ComboBox> = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/combobox/stories/app-dynamic-list-combobox.component.ts
		-->
		<app-dynamic-list-combobox></app-dynamic-list-combobox>
	`
});
export const BasicMax = BasicMaxTemplate.bind({});
BasicMax.storyName = "Basic with max length";
BasicMax.args = {
	maxLength: 4
};
BasicMax.argTypes = {
	maxLength: {
		control: "number"
	}
};

const DynamicTemplate: Story<ComboBox> = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/combobox/stories/app-dynamic-list-combobox.component.ts
		-->
		<app-dynamic-list-combobox></app-dynamic-list-combobox>
	`
});
export const Dynamic = DynamicTemplate.bind({});
Dynamic.storyName = "Dynamically added list items";
Dynamic.parameters = {
	controls: {
		disable: true
	}
};


const MultiTemplate: Story<ComboBox> = (args) => ({
	props: args,
	template: `
		<cds-combo-box
			[invalid]="invalid"
			[invalidText]="invalidText"
			[label]="label"
			[warn]="warn"
			[disabled]="disabled"
			[size]="size"
			[helperText]="helperText"
			[appendInline]="false"
			[items]="items"
			[theme]="theme"
			[selectionFeedback]="selectionFeedback"
			[dropUp]="dropUp"
			[appendInline]="appendInline"
			type="multi"
			(selected)="selected($event)"
			(submit)="submit($event)"
			(clear)="clear($event)">
			<cds-dropdown-list></cds-dropdown-list>
		</cds-combo-box>
	`
});
export const Multiselect = MultiTemplate.bind({});
Multiselect.argTypes = {
	selectionFeedback: "top-after-reopen"
};

const ReactiveTemplate: Story<ComboBox> = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/combobox/stories/app-reactive-combobox.component.ts
		-->
		<app-reactive-combobox
			[disabled]="disabled"
			[invalid]="invalid"
			[size]="size"
			[invalidText]="invalidText"
			[warn]="warn"
			[warnText]="warnText"
			[label]="label"
			[helperText]="helperText"
			[items]="items"
			[theme]="theme">
		</app-reactive-combobox>
	`
});
export const ReactiveForms = ReactiveTemplate.bind({});

const MockQueryTemplate: Story<ComboBox> = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/combobox/stories/app-mock-query-search.component.ts
		-->
		<app-mock-query-search></app-mock-query-search>
	`
});
export const MockQuerySearch = MockQueryTemplate.bind({});
MockQuerySearch.parameters = {
	controls: {
		disable: true
	}
};
