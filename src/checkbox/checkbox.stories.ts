/* tslint:disable variable-name */

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { CheckboxModule, Checkbox } from "./";
import { ReactiveFormsStory } from "./stories";

export default {
	title: "Components/Checkbox",
	decorators: [
		moduleMetadata({
			declarations: [ReactiveFormsStory],
			imports: [
				FormsModule,
				ReactiveFormsModule,
				CheckboxModule
			]
		})
	],
	component: Checkbox
} as Meta;

const Template: Story<Checkbox> = (args) => ({
	props: args,
	template: `
		<fieldset class="cds--fieldset">
			<legend class="cds--label">{{label}}</legend>
			<cds-checkbox
				[disabled]="disabled"
				[indeterminate]="indeterminate"
				[checked]="checked"
				(checkedChange)="onChange($event)"
				[hideLabel]="hideLabel"
				(indeterminateChange)="onIndeterminateChange($event)">
				Indeterminate checkbox
			</cds-checkbox>
		</fieldset>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	label: "Label",
	hideLabel: false,
	indeterminate: true,
	checked: true,
	disabled: false
};
Basic.argTypes = {
	onChange: { action: "Changed!" },
	onIndeterminateChange: { action: "Indeterminate Change!" }
};

const ModelTemplate: Story<Checkbox> = (args) => ({
	props: args,
	template: `
		<cds-checkbox
			[(ngModel)]="model">
			ngModel checkbox
		</cds-checkbox>

		<div style="display:flex; flex-direction: column; width: 150px">
			<button (click)="model=!model">Set model</button>
			Checked: {{ model }}
		</div>
	`
});
export const WithNgModel = ModelTemplate.bind({});
WithNgModel.storyName = "With NgModel";
WithNgModel.args = {
	model: true
};
WithNgModel.parameters = {
	controls: { disabled: true }
};

const ReactiveTemplate: Story = (args) => ({
	props: args,
	template: `
	<!--
	app-* components are for demo purposes only.
	You can create your own implementation by using the component source found at:
	https://github.com/IBM/carbon-components-angular/tree/master/src/checkbox/stories/reactive-form.component.ts
	-->
	<app-reactive-forms></app-reactive-forms>
	`
});
export const WithReactiveForms = ReactiveTemplate.bind({});
