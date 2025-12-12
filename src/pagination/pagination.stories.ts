/* tslint:disable variable-name */

import { moduleMetadata, Meta } from "@storybook/angular";


import { PaginationModule, Pagination } from "./";

import { PaginationStory } from "./stories";

export default {
	title: "Components/Pagination",
	decorators: [
		moduleMetadata({
			imports: [PaginationModule],
			declarations: [PaginationStory]
		})
	],
	component: Pagination
} as Meta;

const Template = (args) => ({
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
			[backwardDisabled]="backwardDisabled"
			[forwardDisabled]="forwardDisabled"
			[skeleton]="skeleton">
		</app-pagination>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	disabled: false,
	pageInputDisabled: false,
	pagesUnknown: false,
	totalDataLength: 105,
	showPageInput: true,
	skeleton: false,
	backwardDisabled: false,
	forwardDisabled: false
};
