/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { PaginationModule, Pagination } from "./";

import { PaginationStory } from "./stories";

export default {
	title: "Components/Pagination",
	decorators: [
		moduleMetadata({
			imports: [
				PaginationModule,
				DocumentationModule
			],
			declarations: [
				PaginationStory
			]
		})
	],
	component: Pagination
} as Meta;

const Template: Story<Pagination> = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/pagination/stories/pagination.component.ts
		-->
		<app-pagination
			[disabled]="disabled"
			[pageInputDisabled]="pageInputDisabled"
			[pagesUnknown]="pagesUnknown"
			[totalDataLength]="totalDataLength"
			[showPageInput]="showPageInput"
			[skeleton]="skeleton">
		</app-pagination>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	disabled: false,
	pageInputDisabled: false,
	pageUnknown: false,
	totalDataLength: 105,
	showPageInput: true,
	skeleton: false
};

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_pagination.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
