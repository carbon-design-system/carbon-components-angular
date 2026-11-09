import { moduleMetadata, Meta } from "@storybook/angular";
import { InlineLoading } from "./";

import { InlineLoadingStory } from "./stories";

export default {
	title: "Components/Inline loading",
	decorators: [
		moduleMetadata({
			imports: [InlineLoading, InlineLoadingStory]
		})
	],
	args: {
		loadingText: "Loading data...",
		successText: "Data loaded!",
		errorText: "Data not found",
		iconDescription: "Inline loading status"
	},
	argTypes: {
		onSuccess: {
			action: "Success!"
		}
	},
	component: InlineLoading
} as Meta;

const Template = (args) => ({
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
			[errorText]="errorText"
			[iconDescription]="iconDescription">
		</app-inline-loading>
	`
});
export const Basic = Template.bind({});
