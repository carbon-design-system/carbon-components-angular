/* tslint:disable variable-name */

import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { InlineLoadingModule, InlineLoading } from "./";

import { InlineLoadingStory } from "./stories";

export default {
	title: "Components/Inline loading",
	decorators: [
		moduleMetadata({
			declarations: [InlineLoadingStory],
			imports: [InlineLoadingModule]
		})
	],
	args: {
		loadingText: "Loading data...",
		successText: "Data loaded!",
		errorText: "Data not found"
	},
	argTypes: {
		onSuccess: {
			action: "Success!"
		}
	},
	component: InlineLoading
} as Meta;

const Template: Story<InlineLoading> = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/inline-loading/stories/inline.component.ts
		-->
		<app-inline-loading
			#loading
			(onSuccess)="onSuccess()"
			[loadingText]="loadingText"
			[successText]="successText"
			[errorText]="errorText">
		</app-inline-loading>
	`
});
export const Basic = Template.bind({});
