/* tslint:disable variable-name */

import { Meta, moduleMetadata } from "@storybook/angular";
import { InputModule, TextareaLabelComponent } from "./";
import { AILabelModule } from "../ai-label";
import { ButtonModule } from "../button";
import { IconModule } from "../icon";
import { AI_LABEL_INNER, AI_LABEL_STORY_STYLES } from "../storybook/ai-label-story-shared";
import { FormsModule } from "@angular/forms";

export default {
	title: "Components/Input/Text area",
	decorators: [
		moduleMetadata({
			imports: [
				InputModule,
				AILabelModule,
				ButtonModule,
				IconModule,
				FormsModule
			]
		})
	],
	args: {
		disabled: false,
		invalid: false,
		invalidText: "Invalid entry",
		warn: false,
		warnText: "This is a warning!",
		label: "Text input label",
		helperText: "Optional helper text",
		placeholder: "Placeholder",
		cols: 50,
		rows: 4,
		autocomplete: "on",
		theme: "dark",
		readonly: false,
		fluid: false,
		skeleton: false,
		enableCounter: true,
		maxCount: 500,
		counterMode: "character"
	},
	argTypes: {
		autocomplete: {
			options: ["on", "off"],
			control: "radio"
		},
		theme: {
			options: ["light", "dark"],
			control: "radio"
		},
		counterMode: {
			options: ["word", "character"],
			control: "radio"
		}
	},
	component: TextareaLabelComponent
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<cds-textarea-label
		[helperText]="helperText"
		[invalid]="invalid"
		[disabled]="disabled"
		[invalidText]="invalidText"
		[fluid]="fluid"
		[skeleton]="skeleton"
		[warn]="warn"
		[warnText]="warnText"
		[enableCounter]="enableCounter"
		[maxCount]="maxCount"
		[counterMode]="counterMode">
		{{label}}
		<textarea
			cdsTextArea
			[placeholder]="placeholder"
			[invalid]="invalid"
			[disabled]="disabled"
			[theme]="theme"
			[rows]="rows"
			[cols]="cols"
			[readonly]="readonly"
			style="width: 100%"
			aria-label="textarea"></textarea>
		</cds-textarea-label>
	`
});
export const Basic = Template.bind({});

export const Fluid = Template.bind({});
Fluid.args = {
	fluid: true
};

const SkeletonTemplate = (args) => ({
	props: args,
	template: `
		<cds-textarea-label skeleton="true">
			<div cdsTextArea skeleton="true"></div>
		</cds-textarea-label>
	`
});
export const Skeleton = SkeletonTemplate.bind({});

export const withAILabel = () => ({
	styles: AI_LABEL_STORY_STYLES,
	template: `
		<cds-textarea-label [decorator]="decoratorTpl">
			Text area with decorator
			<textarea cdsTextArea rows="4" placeholder="Placeholder" aria-label="textarea" style="width: 100%;"></textarea>
		</cds-textarea-label>
		<ng-template #decoratorTpl>
			<cds-ai-label
				class="ai-label-container"
				kind="default"
				size="mini"
				[autoAlign]="true"
				[align]="'bottom-end'"
				aiText="AI"
				ariaLabel="Show information">
				` + AI_LABEL_INNER + `
			</cds-ai-label>
		</ng-template>
	`
});
