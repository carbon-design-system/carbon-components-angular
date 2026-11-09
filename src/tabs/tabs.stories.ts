import { moduleMetadata, Meta } from "@storybook/angular";
import { GridModule } from "../grid/grid.module";
import { IconModule } from "../icon/icon.module";

import {
	Tab,
	TabHeader,
	TabHeaderGroup,
	TabHeaders,
	TabSkeleton,
	Tabs
} from "./";

import { TabsStoryModule } from "./stories";

export default {
	title: "Components/Tabs",
	decorators: [
		moduleMetadata({
			imports: [
				Tabs,
				Tab,
				TabHeader,
				TabHeaderGroup,
				TabHeaders,
				TabSkeleton,
				IconModule,
				GridModule,
				TabsStoryModule
			]
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
	type: "line"
};
Basic.argTypes = {
	type: {
		options: ["line", "contained"],
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
			@for (item of data; track item.name) {
				<cds-tab
					[heading]="customTabs"
					title="Tab Content"
					[context]="item">
					Tab Content {{ $index + 1 }}
				</cds-tab>
			}
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

		<div style="margin-top: 5rem">
			<p>Contained tab skeleton:</p>
			<cds-tabs-skeleton [contained]="true"></cds-tabs-skeleton>
		</div>
	`
});
export const Skeleton = SkeletonTemplate.bind({});

const ContainedWithSecondaryLabelsTemplate = (args) => ({
	props: args,
	template: `
		<cds-tabs type="contained">
			<cds-tab heading="Engage" secondaryLabel="(21/25)">Tab Content 1</cds-tab>
			<cds-tab heading="Analyze" secondaryLabel="(12/16)">Tab Content 2</cds-tab>
			<cds-tab heading="Remediate" secondaryLabel="(0/7)">Tab Content 3</cds-tab>
			<cds-tab heading="Assets" secondaryLabel="(4/12)">Tab Content 4</cds-tab>
			<cds-tab heading="Monitoring" secondaryLabel="(0/10)" [disabled]="true">Tab Content 5</cds-tab>
		</cds-tabs>
	`
});
export const ContainedWithSecondaryLabels = ContainedWithSecondaryLabelsTemplate.bind({});
ContainedWithSecondaryLabels.storyName = "Contained with secondary labels";

const ContainedFullWidthTemplate = (args) => ({
	props: args,
	template: `
		<cds-tabs type="contained" [fullWidth]="true">
			<cds-tab heading="TLS">Tab Content 1</cds-tab>
			<cds-tab heading="Origin">Tab Content 2</cds-tab>
			<cds-tab heading="Rate limiting" [disabled]="true">Tab Content 3</cds-tab>
			<cds-tab heading="WAF">Tab Content 4</cds-tab>
			<cds-tab heading="IP Firewall">Tab Content 5</cds-tab>
			<cds-tab heading="Firewall rules">Tab Content 6</cds-tab>
			<cds-tab heading="Range">Tab Content 7</cds-tab>
			<cds-tab heading="Mutual TLS">Tab Content 8</cds-tab>
		</cds-tabs>
	`
});
export const ContainedFullWidth = ContainedFullWidthTemplate.bind({});
ContainedFullWidth.storyName = "Contained full width";
