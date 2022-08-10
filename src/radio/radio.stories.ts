/* tslint:disable variable-name */

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { RadioModule, RadioGroup, Radio } from "./";

import { ReactiveFormsStory } from "./stories";

export default {
	title: "Components/Radio",
	decorators: [
		moduleMetadata({
			declarations: [ReactiveFormsStory],
			imports: [
				FormsModule,
				ReactiveFormsModule,
				RadioModule
			]
		})
	],
	component: RadioGroup,
	subcomponents: Radio
} as Meta;

const Template: Story<Radio> = (args) => ({
	props: args,
	template: `
	<fieldset class="cds--fieldset">
		<legend class="cds--label">{{label}}</legend>
		<ibm-radio-group
			[disabled]="disabled"
			aria-label="radiogroup"
			[orientation]="orientation"
			[labelPlacement]="labelPlacement"
			(change)="onChange($event)">
			<ibm-radio value="Zero" [checked]="true">
				Zero
			</ibm-radio>
			<ibm-radio [value]="One">One</ibm-radio>
			<ibm-radio [value]="Two">Two</ibm-radio>
			<ibm-radio [value]="Three">Three</ibm-radio>
			<ibm-radio [value]="Four" [disabled]="true">Four</ibm-radio>
		</ibm-radio-group>
	</fieldset>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	label: "Radio button heading"
};
Basic.argTypes = {
	onChange: {
		control: "Changed!"
	},
	orientation: {
		options: ["horizontal", "vertical"],
		defaultValue: "horizontal",
		control: "radio"
	},
	labelPlacement: {
		options: ["left", "right"],
		defaultValue: "right",
		control: "radio"
	}
};

const SkeletonTemplate: Story<Radio> = (args) => ({
	props: args,
	template: `
		<ibm-radio-group skeleton="true">
			<ibm-radio></ibm-radio>
		</ibm-radio-group>
	`
});
export const Skeleton = SkeletonTemplate.bind({});

const ReactiveFormsTemplate: Story<Radio> = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/radio/stories/app-reactive-form.component.ts
		-->
		<app-reactive-forms></app-reactive-forms>
	`
});
export const ReactiveForms = ReactiveFormsTemplate.bind({});
ReactiveForms.parameters = {
	controls: {
		disabled: true
	}
};
