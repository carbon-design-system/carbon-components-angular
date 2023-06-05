/* tslint:disable variable-name */

import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { PaginationModule, PaginationNav } from "./";

import { PaginationNavStory } from "./pagination-nav/stories";

// Storybook starts here
export default {
	title: "Components/Pagination Nav",
	decorators: [
		moduleMetadata({
			imports: [PaginationModule],
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
