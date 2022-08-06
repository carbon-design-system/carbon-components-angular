/* tslint:disable variable-name */

import { Component, Input } from "@angular/core";
import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import {
	InlineLoadingModule,
	InlineLoading,
	InlineLoadingState
} from "./";

@Component({
	selector: "app-inline-loading",
	template: `
		<ibm-inline-loading
			[state]="state"
			[loadingText]="loadingText"
			[successText]="successText"
			[errorText]="errorText"
			(onSuccess)="onSuccess($event)">
		</ibm-inline-loading>
		<button ibmButton (click)="toggleState()">Toggle state</button>
		<p>State: {{ state }}</p>
	`
})
class InlineLoadingStory {
	@Input() loadingText = "";
	@Input() successText = "";
	@Input() errorText = "";

	state = InlineLoadingState.Active;

	toggleState() {
		switch (this.state) {
			case InlineLoadingState.Inactive: this.state = InlineLoadingState.Active; break;
			case InlineLoadingState.Active: this.state = InlineLoadingState.Finished; break;
			case InlineLoadingState.Finished: this.state = InlineLoadingState.Error; break;
			case InlineLoadingState.Error: this.state = InlineLoadingState.Inactive; break;
		}
	}
}

// Storybook starts here
export default {
	title: "Components/Inline loading",
	decorators: [
		moduleMetadata({
			declarations: [
				InlineLoadingStory
			],
			imports: [
				InlineLoadingModule,
				DocumentationModule
			]
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
			You can create your own implementation by using the component source as an example.
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

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_inline_loading.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
