import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { moduleMetadata, Meta } from "@storybook/angular";
import { Checkbox } from "./";
import { ReactiveFormsStory } from "./stories";
import { AILabelModule } from "../ai-label";
import { ButtonModule } from "../button";
import { IconModule } from "../icon";
import { AI_LABEL_INNER, AI_LABEL_STORY_STYLES } from "../storybook/ai-label-story-shared";

export default {
	title: "Components/Checkbox",
	decorators: [
		moduleMetadata({
			declarations: [ReactiveFormsStory],
			imports: [
				FormsModule,
				ReactiveFormsModule,
				Checkbox,
				ButtonModule,
				AILabelModule,
				IconModule
			]
		})
	],
	component: Checkbox
} as Meta;

const Template = (args) => ({
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

const ModelTemplate = (args) => ({
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

const ReactiveTemplate = (args) => ({
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

const singleTemplate = () => ({
	template: `
		<cds-checkbox
			class="some-class"
			id="checkbox-3"
			helperText="Helper text goes here">
			Checkbox label
		</cds-checkbox>
		<br /><br />
		<cds-checkbox
			class="some-class"
			id="checkbox-4"
			[invalid]="true"
			invalidText="Invalid text goes here">
			Checkbox label
		</cds-checkbox>
		<br /><br />
		<cds-checkbox
			class="some-class"
			id="checkbox-5"
			[warn]="true"
			warnText="Warning text goes here">
			Checkbox label
		</cds-checkbox>
		<br /><br />
		<cds-checkbox
			class="some-class"
			id="checkbox-6"
			[readOnly]="true">
			Checkbox label
		</cds-checkbox>
	`
});
export const Single = singleTemplate.bind({});


const groupStatePropagationTemplate = (args) => ({
	props: args,
	template: `
		<div style="max-width: 32rem;">
			<cds-checkbox-group
				legend="Controlled group"
				[helperText]="groupHelperText"
				[readOnly]="groupReadOnly"
				[invalid]="groupInvalid"
				[invalidText]="groupInvalidText"
				[warn]="groupWarn"
				[warnText]="groupWarnText">
				<cds-checkbox id="group-inherit-1">Inherits from group</cds-checkbox>
				<cds-checkbox id="group-inherit-2">Inherits from group</cds-checkbox>
				<cds-checkbox id="group-override-invalid" [invalid]="false">
					Explicit invalid false (overrides group invalid)
				</cds-checkbox>
			</cds-checkbox-group>


			<p class="cds--label-01" style="margin-bottom: 1rem; margin-top: 2rem;">
				Checkbox sets its own invalid message:
			</p>
			<cds-checkbox-group
				legend="Mixed per-checkbox state"
				helperText="Group helper (hidden when any checkbox is invalid/warn at group level).">
				<cds-checkbox id="mixed-1">Default</cds-checkbox>
				<cds-checkbox
					id="mixed-2"
					[invalid]="true"
					invalidText="This checkbox has its own error">
					Own invalid state
				</cds-checkbox>
			</cds-checkbox-group>
		</div>
	`
});
export const GroupStatePropagation = groupStatePropagationTemplate.bind({});
GroupStatePropagation.storyName = "Group state (host injection)";
GroupStatePropagation.args = {
	groupReadOnly: false,
	groupInvalid: false,
	groupInvalidText: "Invalid message goes here",
	groupWarn: false,
	groupWarnText: "Warning message goes here",
	groupHelperText: "Helper text goes here"
};

const withAILabelTemplate = (args) => ({
	props: args,
	styles: AI_LABEL_STORY_STYLES,
	template: `
		<div class="ai-label-check-radio-container">
			<cds-checkbox-group
				legend="Group Label"
				[decorator]="decoratorDefaultTpl"
				[readOnly]="readOnly"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[warn]="warn"
				[warnText]="warnText">
				<cds-checkbox id="checkbox-label-1">Checkbox label</cds-checkbox>
				<cds-checkbox id="checkbox-label-2">Checkbox label</cds-checkbox>
				<cds-checkbox id="checkbox-label-3">Checkbox label</cds-checkbox>
			</cds-checkbox-group>

			<cds-checkbox-group
				legend="Group Label"
				[readOnly]="readOnly"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[warn]="warn"
				[warnText]="warnText">
				<cds-checkbox id="checkbox-label-4" [decorator]="decoratorDefaultTpl">Checkbox label</cds-checkbox>
				<cds-checkbox id="checkbox-label-5" [decorator]="decoratorDefaultTpl">Checkbox label</cds-checkbox>
				<cds-checkbox id="checkbox-label-6">Checkbox label</cds-checkbox>
			</cds-checkbox-group>

			<cds-checkbox-group
				legend="Group Label"
				[readOnly]="readOnly"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[warn]="warn"
				[warnText]="warnText">
				<cds-checkbox id="checkbox-label-7" [decorator]="decoratorInlineTpl">Checkbox label</cds-checkbox>
				<cds-checkbox id="checkbox-label-8" [decorator]="decoratorInlineTpl">Checkbox label</cds-checkbox>
				<cds-checkbox id="checkbox-label-9">Checkbox label</cds-checkbox>
			</cds-checkbox-group>
		</div>

		<ng-template #decoratorDefaultTpl>
			<cds-ai-label
				size="mini"
				aiText="AI"
				[autoAlign]="true"
				ariaLabel="Show information">
				` + AI_LABEL_INNER + `
			</cds-ai-label>
		</ng-template>
		<ng-template #decoratorInlineTpl>
			<cds-ai-label
				[autoAlign]="true"
				kind="inline"
				size="md"
				aiText="AI"
				ariaLabel="Show information">
				` + AI_LABEL_INNER + `
			</cds-ai-label>
		</ng-template>
	`
});

export const withAILabel = withAILabelTemplate.bind({});
withAILabel.args = {
	readOnly: false,
	invalid: false,
	invalidText: "Invalid message goes here",
	warn: false,
	warnText: "Warning message goes here"
};
