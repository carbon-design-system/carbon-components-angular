import { moduleMetadata, Meta } from "@storybook/angular";
import {
	Pagination,
	PaginationNav,
	PaginationNavItem,
	PaginationOverflow } from "./";

import { PaginationNavStory } from "./pagination-nav/stories";
import { I18N_SERVICE_PROVIDER } from "../i18n";

// Storybook starts here
export default {
	title: "Components/Pagination Nav",
	decorators: [
		moduleMetadata({
			imports: [
				Pagination,
				PaginationNav,
				PaginationNavItem,
				PaginationOverflow,
				PaginationNavStory
			]
		})
	],
	component: PaginationNav
} as Meta;

const Template = (args) => ({
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
			[size]="size">
		</app-pagination>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	disabled: false,
	totalDataLength: 10,
	numOfItemsToShow: 4,
	skeleton: false,
	size: "md"
};
