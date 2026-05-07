
import { moduleMetadata, Meta } from "@storybook/angular";
import { GridModule } from "../grid/grid.module";
import { IconModule } from "../icon/icon.module";
import { TabsModule } from "./";
import { TabsStoryModule } from "./stories";

/**
 * Projected `cds-tabs` / `cds-tabs-vertical` with `cds-tab` children (mirrors Tab header stories).
 */
export default {
	title: "Components/Tabs/Regular",
	decorators: [
		moduleMetadata({
			imports: [TabsStoryModule, IconModule, GridModule, TabsModule]
		})
	]
} as Meta;

const cdsTabsRegular = (args) => ({
	props: args,
	template: `
		<cds-tabs
			[type]="type"
			[followFocus]="followFocus"
			[cacheActive]="cacheActive"
			[isNavigation]="isNavigation">
			<cds-tab heading="Dashboard">Tab content 1</cds-tab>
			<cds-tab heading="Monitoring">Tab content 2</cds-tab>
			<cds-tab heading="Activity" [disabled]="true">Tab content 3</cds-tab>
			<cds-tab heading="Analyze">Tab content 4</cds-tab>
		</cds-tabs>
	`
});
export const CdsTabsRegular = cdsTabsRegular.bind({});
CdsTabsRegular.storyName = "Regular";
CdsTabsRegular.args = {
	followFocus: true,
	cacheActive: true,
	isNavigation: false,
	type: "line" as "line" | "contained"
};
CdsTabsRegular.argTypes = {
	type: {
		options: ["line", "contained"],
		control: "radio"
	}
};

const cdsTabsVertical = (args) => ({
	props: args,
	template: `
		<cds-tabs-vertical
			[followFocus]="followFocus"
			[cacheActive]="cacheActive"
			[isNavigation]="isNavigation"
			[height]="height">
			<cds-tab heading="Dashboard">Tab content 1</cds-tab>
			<cds-tab heading="Monitoring">Tab content 2</cds-tab>
			<cds-tab
				heading="Extra long label that will go two lines then truncate when it goes beyond the tab length">
				Tab content 3
			</cds-tab>
			<cds-tab heading="Activity" [disabled]="true">Tab content 4</cds-tab>
		</cds-tabs-vertical>
	`
});
export const CdsTabsVertical = cdsTabsVertical.bind({});
CdsTabsVertical.storyName = "Vertical";
CdsTabsVertical.args = {
	followFocus: true,
	cacheActive: true,
	isNavigation: false,
	height: "320px"
};
CdsTabsVertical.argTypes = {
	height: { control: "text" }
};

const cdsTabsIconTabs = (args) => ({
	props: args,
	template: `
		<ng-template #ip1Icon><svg cdsIcon="dashboard" size="16"></svg></ng-template>
		<ng-template #ip2Icon><svg cdsIcon="cloud--monitoring" size="16"></svg></ng-template>
		<ng-template #ip3Icon><svg cdsIcon="activity" size="16"></svg></ng-template>
		<ng-template #ip4Icon><svg cdsIcon="settings" size="16"></svg></ng-template>

		<cds-tabs
			[type]="type"
			[followFocus]="followFocus"
			[cacheActive]="cacheActive"
			[isNavigation]="isNavigation">
			<cds-tab heading="Dashboard" title="Dashboard" [icon]="ip1Icon">Tab content 1</cds-tab>
			<cds-tab heading="Monitoring" title="Monitoring" [icon]="ip2Icon">Tab content 2</cds-tab>
			<cds-tab heading="Activity" title="Activity" [icon]="ip3Icon" [disabled]="true">Tab content 3</cds-tab>
			<cds-tab heading="Settings" title="Settings" [icon]="ip4Icon">Tab content 4</cds-tab>
		</cds-tabs>
	`
});
export const CdsTabsIconTabs = cdsTabsIconTabs.bind({});
CdsTabsIconTabs.storyName = "Icon tabs";
CdsTabsIconTabs.args = {
	...CdsTabsRegular.args
};
CdsTabsIconTabs.argTypes = {
	...CdsTabsRegular.argTypes
};

const cdsTabsIconOnly = (args) => ({
	props: args,
	template: `
		<ng-template #ioSave><svg cdsIcon="save" size="16"></svg></ng-template>
		<ng-template #ioSearch><svg cdsIcon="search" size="16"></svg></ng-template>
		<ng-template #ioInfo><svg cdsIcon="information--filled" size="16"></svg></ng-template>
		<ng-template #ioDoc><svg cdsIcon="document" size="16"></svg></ng-template>

		<cds-tabs
			[type]="type"
			[iconSize]="iconSize"
			[followFocus]="followFocus"
			[cacheActive]="cacheActive"
			[isNavigation]="isNavigation">
			<cds-tab
				[icon]="ioSave"
				[iconOnly]="true"
				iconLabel="Save"
				[disabled]="true">
				Tab content 1
			</cds-tab>
			<cds-tab [icon]="ioSearch" [iconOnly]="true" iconLabel="Search">
				Tab content 2
			</cds-tab>
			<cds-tab
				[icon]="ioInfo"
				[iconOnly]="true"
				iconLabel="Info"
				[badgeIndicator]="true">
				Tab content 3
			</cds-tab>
			<cds-tab [icon]="ioDoc" [iconOnly]="true" iconLabel="Document">
				Tab content 4
			</cds-tab>
		</cds-tabs>
	`
});
export const CdsTabsIconOnly = cdsTabsIconOnly.bind({});
CdsTabsIconOnly.storyName = "Icon only";
CdsTabsIconOnly.args = {
	...CdsTabsRegular.args,
	iconSize: "default" as "default" | "lg"
};
CdsTabsIconOnly.argTypes = {
	...CdsTabsRegular.argTypes,
	iconSize: {
		options: ["default", "lg"],
		control: "radio"
	}
};

const cdsTabsTabIcons = (args) => ({
	props: args,
	template: `
		<ng-template #dashIcon><svg cdsIcon="dashboard" size="16"></svg></ng-template>
		<ng-template #monIcon><svg cdsIcon="cloud--monitoring" size="16"></svg></ng-template>
		<ng-template #actIcon><svg cdsIcon="activity" size="16"></svg></ng-template>
		<ng-template #settingsIcon><svg cdsIcon="settings" size="16"></svg></ng-template>

		<cds-tabs
			type="contained"
			[followFocus]="followFocus"
			[cacheActive]="cacheActive"
			[dismissable]="dismissable"
			[isNavigation]="isNavigation">
			<cds-tab heading="Dashboard" title="Dashboard" [icon]="dashIcon" secondaryLabel="(21/25)">
				Tab content 1
			</cds-tab>
			<cds-tab heading="Monitoring" title="Monitoring" [icon]="monIcon" secondaryLabel="(12/16)">
				Tab content 2
			</cds-tab>
			<cds-tab
				heading="Activity"
				title="Activity"
				[icon]="actIcon"
				secondaryLabel="(0/7)"
				[disabled]="true">
				Tab content 3
			</cds-tab>
			<cds-tab heading="Settings" title="Settings" [icon]="settingsIcon" secondaryLabel="(4/12)">
				Tab content 4
			</cds-tab>
		</cds-tabs>
	`
});
export const CdsTabsTabIcons = cdsTabsTabIcons.bind({});
CdsTabsTabIcons.storyName = "Tab header + icons";
CdsTabsTabIcons.args = {
	followFocus: true,
	cacheActive: true,
	isNavigation: false,
	dismissable: false
};

const cdsTabsDismissable = (args) => ({
	props: {
		...args,
		renderedTabs: [
			{ heading: "Dashboard", content: "Tab Content 1" },
			{ heading: "Monitoring", content: "Tab Content 2" },
			{ heading: "Activity", content: "Tab Content 3" },
			{ heading: "Settings", content: "Tab Content 4", disabled: true }
		],
		onTabClose(this: any, tabIndex: number) {
			this.renderedTabs = this.renderedTabs.filter((_: unknown, i: number) => i !== tabIndex);
		}
	},
	template: `
		<cds-tabs
			[type]="type"
			[dismissable]="true"
			(tabClose)="onTabClose($event)">
			@for (tab of renderedTabs; track tab.heading) {
				<cds-tab
					[heading]="tab.heading"
					[disabled]="tab.disabled">
					{{ tab.content }}
				</cds-tab>
			}
		</cds-tabs>
	`
});
export const Dismissable = cdsTabsDismissable.bind({});
Dismissable.storyName = "Dismissable";
Dismissable.args = {
	type: "line" as "line" | "contained"
};
Dismissable.argTypes = {
	type: {
		options: ["line", "contained"],
		control: "radio"
	}
};
