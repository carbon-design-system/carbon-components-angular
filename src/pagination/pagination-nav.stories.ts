/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { PaginationModule, PaginationNav } from "./";

import { PaginationNavStory } from "./pagination-nav/stories";

// Storybook starts here
export default {
	title: "Components/Pagination",
	decorators: [
		moduleMetadata({
			imports: [
				PaginationModule,
				DocumentationModule
			],
			declarations: [PaginationNavStory]
		})
	],
	component: PaginationNav
} as Meta;

const Template: Story<PaginationNav> = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/pagination/pagination-nav/stories/pagination-nav-story.component.ts
		-->
		<app-pagination
			[disabled]="disabled"
			[totalDataLength]="totalDataLength"
			[numOfItemsToShow]="numOfItemsToShow"
			[skeleton]="skeleton">
		</app-pagination>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	disabled: false,
	totalDataLength: 10,
	numOfItemsToShow: 4,
	skeleton: false
};

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_pagination.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
