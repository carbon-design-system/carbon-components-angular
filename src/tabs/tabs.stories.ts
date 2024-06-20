/* tslint:disable variable-name */

import { moduleMetadata, Meta } from "@storybook/angular";


import { TabsModule } from "./";

import { TabStory } from "./stories";

export default {
	title: "Components/Tabs",
	decorators: [
		moduleMetadata({
			imports: [
				TabsModule
			],
			declarations: [TabStory]
		})
	]
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<cds-tabs
			[type]="type"
			[followFocus]="followFocus"
			[isNavigation]="isNavigation"
			[cacheActive]="cacheActive">
			<cds-tab heading="one">Tab Content 1</cds-tab>
			<cds-tab heading="two">Tab Content 2</cds-tab>
			<cds-tab heading="three" [tabContent]="three"></cds-tab>
			<cds-tab heading="four" [tabContent]="four"></cds-tab>
		</cds-tabs>

		<!-- Use templates if you would like to have lifecycle hooks called when cacheActive is false -->
		<ng-template #three>
			Tab Content 3
		</ng-template>

		<ng-template #four>
			Tab Content 4
		</ng-template>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	followFocus: true,
	cacheActive: true,
	isNavigation: false,
	type: "inline"
};
Basic.argTypes = {
	type: {
		options: ["inline", "contained"],
		control: "radio"
	}
};

const WithTemplate = (args) => ({
	props: args,
	template: `
		<ng-template #customTabs let-item>
			{{item ? item.name : "wait for it"}}
		</ng-template>
		<ng-template #iconTab>
			<div style="height: 14px;">
				Something custom
				<svg width="16" height="16" viewBox="0 0 16 16"
				style="height: 14px; width: 14px; fill: #3d70b2;">
					<path d="M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
					<path d="M9 13H7V7h2z"></path>
					<path d="M7 4a1 1 0 1 1 2 0 1 1 0 1 1-2 0"></path>
				</svg>
			</div>
		</ng-template>
		<cds-tabs [type]="type" [followFocus]="followFocus" [isNavigation]="isNavigation">
			<cds-tab
				*ngFor="let item of data; let i = index;"
				[heading]="customTabs"
				title="Tab Content"
				[context]="item">
				Tab Content {{i + 1}}
			</cds-tab>
			<cds-tab [heading]="iconTab" title="Custom tab content">Tab Content Custom</cds-tab>
		</cds-tabs>
	`
});
export const With = WithTemplate.bind({});
With.storyName = "With template";
With.args = {
	followFocus: true,
	isNavigation: false,
	data: [
		{ name: "one" },
		{ name: "two" },
		{ name: "three" }
	]
};
With.argTypes = {
	...Basic.argTypes
};

const BeforeAndAfterTemplate = (args) => ({
	props: args,
	template: `
		<div style="font-weight: 600; padding-bottom: 10px; padding-top: 20px;">before</div>
		<cds-tabs [type]="type" [followFocus]="followFocus" [isNavigation]="isNavigation">
			<cds-tab heading="one">foo</cds-tab>
			<cds-tab heading="two">bar</cds-tab>
			<span before>content before</span>
		</cds-tabs>
		<div style="font-weight: 600; padding-bottom: 10px; padding-top: 20px;">after</div>
		<cds-tabs [type]="type" [followFocus]="followFocus" [isNavigation]="isNavigation">
			<cds-tab heading="one">foo</cds-tab>
			<cds-tab heading="two">bar</cds-tab>
			<span after>content after</span>
		</cds-tabs>
		<div style="font-weight: 600; padding-bottom: 10px; padding-top: 20px;">both</div>
		<cds-tabs [type]="type" [followFocus]="followFocus" [isNavigation]="isNavigation">
			<cds-tab heading="one">foo</cds-tab>
			<cds-tab heading="two">bar</cds-tab>
			<span before>content before</span>
			<span after>content after</span>
		</cds-tabs>
	`
});
export const BeforeAndAfter = BeforeAndAfterTemplate.bind({});
BeforeAndAfter.storyName = "Width before and after content";
BeforeAndAfter.args = {
	followFocus: true,
	isNavigation: false
};
BeforeAndAfter.argTypes = {
	...Basic.argTypes
};

const TabHeaderGroupTemplate = (args) => ({
	props: args,
	template: `
		<!--
		app-* components are for demo purposes only.
		You can create your own implementation by using the component source found at:
		https://github.com/IBM/carbon-components-angular/tree/master/src/pagination/stories/pagination.component.ts
		-->
		<app-header-group
			[type]="type"
			[followFocus]="followFocus"
			[cacheActive]="cacheActive"
			[isNavigation]="isNavigation">
		</app-header-group>
	`
});
export const TabheaderGroup = TabHeaderGroupTemplate.bind({});
TabheaderGroup.args = {
	...Basic.args
};
TabheaderGroup.argTypes = {
	...Basic.argTypes
};

const SkeletonTemplate = (args) => ({
	props: args,
	template: `
		<cds-tabs skeleton="true">
			<cds-tab></cds-tab>
			<cds-tab></cds-tab>
		</cds-tabs>

		<div style="margin-top: 5rem">
			<p>Tab skeleton component for cds-tab-header-group:</p>
			<cds-tabs-skeleton></cds-tabs-skeleton>
		</div>
	`
});
export const Skeleton = SkeletonTemplate.bind({});
