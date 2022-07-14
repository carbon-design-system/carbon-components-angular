/* tslint:disable variable-name */

import { Component, Input } from "@angular/core";
import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { TabsModule } from "./";

@Component({
	selector: "ibm-header-group",
	template: `
		<ibm-tab-header-group
			[type]="type"
			[followFocus]="followFocus"
			[cacheActive]="cacheActive"
			[isNavigation]="isNavigation">
			<button ibmTabHeader [paneReference]="content1">
				Content 1
			</button>
			<button ibmTabHeader [paneReference]="content2">
				Content 2
			</button>
			<button ibmTabHeader [paneReference]="content3" disabled="true">
				Content 3
			</button>
			<button ibmTabHeader [paneReference]="content4">
				Content 4
			</button>
			<button ibmTabHeader [paneReference]="content5">
				Content 5
			</button>
		</ibm-tab-header-group>

		<ibm-tab #content1>
			Tab Content 1
		</ibm-tab>
		<ibm-tab #content2>
			Tab Content 2
		</ibm-tab>
		<ibm-tab #content3>
			Tab Content 3
		</ibm-tab>
		<ibm-tab #content4>
			Tab Content 4
		</ibm-tab>
		<ibm-tab #content5>
			Tab Content 5
		</ibm-tab>
	`
})
class TabStory {
	@Input() skeleton = false;
	@Input() followFocus = true;
	@Input() cacheActive = false;
	@Input() isNavigation = true;
	@Input() type = "line";
}

// Storybook starts here
export default {
	title: "Components/Tabs",
	decorators: [
		moduleMetadata({
			imports: [
				TabsModule,
				DocumentationModule
			],
			declarations: [TabStory]
		})
	]
} as Meta;

const Template: Story = (args) => ({
	props: args,
	template: `
		<ibm-tabs
			[type]="type"
			[followFocus]="followFocus"
			[isNavigation]="isNavigation"
			[cacheActive]="cacheActive">
			<ibm-tab heading="one">Tab Content 1</ibm-tab>
			<ibm-tab heading="two">Tab Content 2</ibm-tab>
			<ibm-tab heading="three">Tab Content 3</ibm-tab>
			<ibm-tab heading="three">Tab Content 3</ibm-tab>
		</ibm-tabs>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	followFocus: true,
	cacheActive: true,
	isNavigation: false
};
Basic.argTypes = {
	type: {
		options: ["inline", "contained"],
		defaultValue: "inline",
		control: "radio"
	}
};

const WithTemplate: Story = (args) => ({
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
		<ibm-tabs [type]="type" [followFocus]="followFocus" [isNavigation]="isNavigation">
			<ibm-tab
				*ngFor="let item of data; let i = index;"
				[heading]="customTabs"
				title="Tab Content"
				[context]="item">
				Tab Content {{i + 1}}
			</ibm-tab>
			<ibm-tab [heading]="iconTab" title="Custom tab content">Tab Content Custom</ibm-tab>
		</ibm-tabs>
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

const BeforeAndAfterTemplate: Story = (args) => ({
	props: args,
	template: `
		<div style="font-weight: 600; padding-bottom: 10px; padding-top: 20px;">before</div>
		<ibm-tabs [type]="type" [followFocus]="followFocus" [isNavigation]="isNavigation">
			<ibm-tab heading="one">foo</ibm-tab>
			<ibm-tab heading="two">bar</ibm-tab>
			<span before>content before</span>
		</ibm-tabs>
		<div style="font-weight: 600; padding-bottom: 10px; padding-top: 20px;">after</div>
		<ibm-tabs [type]="type" [followFocus]="followFocus" [isNavigation]="isNavigation">
			<ibm-tab heading="one">foo</ibm-tab>
			<ibm-tab heading="two">bar</ibm-tab>
			<span after>content after</span>
		</ibm-tabs>
		<div style="font-weight: 600; padding-bottom: 10px; padding-top: 20px;">both</div>
		<ibm-tabs [type]="type" [followFocus]="followFocus" [isNavigation]="isNavigation">
			<ibm-tab heading="one">foo</ibm-tab>
			<ibm-tab heading="two">bar</ibm-tab>
			<span before>content before</span>
			<span after>content after</span>
		</ibm-tabs>
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

const TabHeaderGroupTemplate: Story = (args) => ({
	props: args,
	template: `
		<ibm-header-group
			[type]="type"
			[followFocus]="followFocus"
			[cacheActive]="cacheActive"
			[isNavigation]="isNavigation">
		</ibm-header-group>
	`
});
export const TabheaderGroup = TabHeaderGroupTemplate.bind({});
TabheaderGroup.args = {
	...Basic.args
};
TabheaderGroup.argTypes = {
	...Basic.argTypes
};

const SkeletonTemplate: Story = (args) => ({
	props: args,
	template: `
		<ibm-tabs skeleton="true">
			<ibm-tab></ibm-tab>
			<ibm-tab></ibm-tab>
		</ibm-tabs>

		<div style="margin-top: 5rem">
			<p>Tab skeleton component for ibm-tab-header-group:</p>
			<ibm-tabs-skeleton></ibm-tabs-skeleton>
		</div>
	`
});
export const Skeleton = SkeletonTemplate.bind({});

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/classes/src_tabs.tabs.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
