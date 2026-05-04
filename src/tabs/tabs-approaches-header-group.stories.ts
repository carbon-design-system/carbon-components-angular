/* tslint:disable variable-name */

import {
	ChangeDetectorRef,
	Component,
	Input,
	ViewChildren,
	QueryList
} from "@angular/core";
import { moduleMetadata, Meta } from "@storybook/angular";
import { GridModule } from "../grid/grid.module";
import { IconModule } from "../icon/icon.module";
import { TabsModule } from "./";
import { Tab } from "./tab.component";
import { TabsStoryModule } from "./stories";

/**
 * Panes are projected before the header group in the DOM so `ViewChildren(Tab)` is
 * populated before headers bind `[paneReference]`; flex order keeps the tab bar on top.
 */
@Component({
	// tslint:disable-next-line: component-selector
	selector: "story-dismissable-tab-header-group",
	template: `
		<cds-tab-header-group
			*ngIf="panesReady"
			style="order: 0"
			[type]="type"
			[followFocus]="followFocus"
			[cacheActive]="cacheActive"
			[isNavigation]="isNavigation"
			[fullWidth]="fullWidth"
			[dismissable]="true"
			(tabClose)="onTabClose($event)">
			<cds-tab-header
				*ngFor="let tab of renderedTabs; let i = index"
				[paneReference]="paneAt(i)"
				[disabled]="tab.disabled">
				{{ tab.heading }}
			</cds-tab-header>
		</cds-tab-header-group>
		<cds-tab *ngFor="let tab of renderedTabs">{{ tab.content }}</cds-tab>
	`
})
class StoryDismissableTabHeaderGroupComponent {

	get panesReady(): boolean {
		return (
			!!this.paneQuery &&
			this.paneQuery.length === this.renderedTabs.length &&
			this.renderedTabs.length > 0
		);
	}
	@Input() type: "line" | "contained" = "line";
	@Input() followFocus = true;
	@Input() cacheActive = true;
	@Input() isNavigation = false;
	@Input() fullWidth = false;

	renderedTabs: Array<{ heading: string; content: string; disabled?: boolean }> = [
		{ heading: "Dashboard", content: "Tab Content 1" },
		{ heading: "Monitoring", content: "Tab Content 2" },
		{ heading: "Activity", content: "Tab Content 3" },
		{ heading: "Settings", content: "Tab Content 4", disabled: true }
	];

	@ViewChildren(Tab) private paneQuery!: QueryList<Tab>;

	constructor(private cdr: ChangeDetectorRef) {}

	paneAt(index: number): Tab {
		return this.paneQuery.get(index) as Tab;
	}

	onTabClose(tabIndex: number) {
		this.renderedTabs = this.renderedTabs.filter((_, i) => i !== tabIndex);
		this.cdr.detectChanges();
	}
}

/**
 * Fine-grained composition: `cds-tab-header-group` / `cds-tab-header-group-vertical`
 * with `[paneReference]` and sibling `cds-tab` panes.
 */
export default {
	title: "Components/Tabs/Tab header (Fine-grained)",
	decorators: [
		moduleMetadata({
			imports: [TabsStoryModule, IconModule, GridModule, TabsModule],
			declarations: [StoryDismissableTabHeaderGroupComponent]
		})
	]
} as Meta;

const headerGroupRegular = (args) => ({
	props: args,
	template: `
		<cds-tab-header-group
			[type]="type"
			[followFocus]="followFocus"
			[cacheActive]="cacheActive"
			[isNavigation]="isNavigation"
			[fullWidth]="fullWidth">
			<cds-tab-header [paneReference]="pane1">Dashboard</cds-tab-header>
			<cds-tab-header [paneReference]="pane2">Monitoring</cds-tab-header>
			<cds-tab-header [paneReference]="pane3" [disabled]="true">Activity</cds-tab-header>
			<cds-tab-header [paneReference]="pane4">Analyze</cds-tab-header>
		</cds-tab-header-group>

		<cds-tab #pane1>Tab content 1</cds-tab>
		<cds-tab #pane2>Tab content 2</cds-tab>
		<cds-tab #pane3>Tab content 3</cds-tab>
		<cds-tab #pane4>Tab content 4</cds-tab>
	`
});
export const HeaderGroupRegular = headerGroupRegular.bind({});
HeaderGroupRegular.storyName = "Regular";
HeaderGroupRegular.args = {
	followFocus: true,
	cacheActive: true,
	isNavigation: false,
	type: "line" as "line" | "contained",
	fullWidth: false
};
HeaderGroupRegular.argTypes = {
	type: {
		options: ["line", "contained"],
		control: "radio"
	}
};

const headerGroupVertical = (args) => ({
	props: args,
	template: `
		<cds-tabs-vertical-grouped [height]="height">
			<cds-tab-header-group-vertical
				[followFocus]="followFocus"
				[cacheActive]="cacheActive"
				[isNavigation]="isNavigation">
				<cds-tab-header [paneReference]="vp1">Dashboard</cds-tab-header>
				<cds-tab-header [paneReference]="vp2">Monitoring</cds-tab-header>
				<cds-tab-header [paneReference]="vp3" [disabled]="true">Activity</cds-tab-header>
				<cds-tab-header [paneReference]="vp4">Analyze</cds-tab-header>
			</cds-tab-header-group-vertical>

			<cds-tab #vp1>Tab content 1</cds-tab>
			<cds-tab #vp2>Tab content 2</cds-tab>
			<cds-tab #vp3>Tab content 3</cds-tab>
			<cds-tab #vp4>Tab content 4</cds-tab>
		</cds-tabs-vertical-grouped>
	`
});
export const HeaderGroupVertical = headerGroupVertical.bind({});
HeaderGroupVertical.storyName = "Vertical";
HeaderGroupVertical.args = {
	followFocus: true,
	cacheActive: true,
	isNavigation: false,
	height: "320px"
};
HeaderGroupVertical.argTypes = {
	height: { control: "text" }
};

const headerGroupIconTabs = (args) => ({
	props: args,
	template: `
		<ng-template #ip1Icon><svg cdsIcon="dashboard" size="16"></svg></ng-template>
		<ng-template #ip2Icon><svg cdsIcon="cloud--monitoring" size="16"></svg></ng-template>
		<ng-template #ip3Icon><svg cdsIcon="activity" size="16"></svg></ng-template>
		<ng-template #ip4Icon><svg cdsIcon="settings" size="16"></svg></ng-template>

		<cds-tab-header-group
			[type]="type"
			[followFocus]="followFocus"
			[cacheActive]="cacheActive"
			[isNavigation]="isNavigation">
			<cds-tab-header [paneReference]="ip1" [icon]="ip1Icon" title="Dashboard">Dashboard</cds-tab-header>
			<cds-tab-header [paneReference]="ip2" [icon]="ip2Icon" title="Monitoring">Monitoring</cds-tab-header>
			<cds-tab-header [paneReference]="ip3" [icon]="ip3Icon" title="Activity" [disabled]="true">Activity</cds-tab-header>
			<cds-tab-header [paneReference]="ip4" [icon]="ip4Icon" title="Settings">Settings</cds-tab-header>
		</cds-tab-header-group>

		<cds-tab #ip1>Tab content 1</cds-tab>
		<cds-tab #ip2>Tab content 2</cds-tab>
		<cds-tab #ip3>Tab content 3</cds-tab>
		<cds-tab #ip4>Tab content 4</cds-tab>
	`
});
export const HeaderGroupIconTabs = headerGroupIconTabs.bind({});
HeaderGroupIconTabs.storyName = "Icon tabs";
HeaderGroupIconTabs.args = {
	...HeaderGroupRegular.args
};
HeaderGroupIconTabs.argTypes = {
	...HeaderGroupRegular.argTypes
};

const headerGroupIconOnly = (args) => ({
	props: args,
	template: `
		<ng-template #ioSave><svg cdsIcon="save" size="16"></svg></ng-template>
		<ng-template #ioSearch><svg cdsIcon="search" size="16"></svg></ng-template>
		<ng-template #ioInfo><svg cdsIcon="information--filled" size="16"></svg></ng-template>
		<ng-template #ioDoc><svg cdsIcon="document" size="16"></svg></ng-template>

		<cds-tab-header-group
			[type]="type"
			[iconSize]="iconSize"
			[followFocus]="followFocus"
			[cacheActive]="cacheActive"
			[isNavigation]="isNavigation">
			<cds-tab-header
				[paneReference]="io1"
				[icon]="ioSave"
				[iconOnly]="true"
				[iconSize]="iconSize"
				iconLabel="Save"
				[disabled]="true">
			</cds-tab-header>
			<cds-tab-header
				[paneReference]="io2"
				[icon]="ioSearch"
				[iconOnly]="true"
				[iconSize]="iconSize"
				iconLabel="Search">
			</cds-tab-header>
			<cds-tab-header
				[paneReference]="io3"
				[icon]="ioInfo"
				[iconOnly]="true"
				[iconSize]="iconSize"
				iconLabel="Info"
				[badgeIndicator]="true">
			</cds-tab-header>
			<cds-tab-header
				[paneReference]="io4"
				[icon]="ioDoc"
				[iconOnly]="true"
				[iconSize]="iconSize"
				iconLabel="Document">
			</cds-tab-header>
		</cds-tab-header-group>

		<cds-tab #io1>Tab content 1</cds-tab>
		<cds-tab #io2>Tab content 2</cds-tab>
		<cds-tab #io3>Tab content 3</cds-tab>
		<cds-tab #io4>Tab content 4</cds-tab>
	`
});
export const HeaderGroupIconOnly = headerGroupIconOnly.bind({});
HeaderGroupIconOnly.storyName = "Icon only";
HeaderGroupIconOnly.args = {
	...HeaderGroupRegular.args,
	iconSize: "default" as "default" | "lg"
};
HeaderGroupIconOnly.argTypes = {
	...HeaderGroupRegular.argTypes,
	iconSize: {
		options: ["default", "lg"],
		control: "radio"
	}
};

const headerGroupTabHeaderIcons = (args) => ({
	props: args,
	template: `
		<ng-template #dashIcon><svg cdsIcon="dashboard" size="16"></svg></ng-template>
		<ng-template #monIcon><svg cdsIcon="cloud--monitoring" size="16"></svg></ng-template>
		<ng-template #actIcon><svg cdsIcon="activity" size="16"></svg></ng-template>
		<ng-template #settingsIcon><svg cdsIcon="settings" size="16"></svg></ng-template>

		<cds-tab-header-group
			type="contained"
			[followFocus]="followFocus"
			[cacheActive]="cacheActive"
			[dismissable]="dismissable"
			[isNavigation]="isNavigation">
			<cds-tab-header
				[paneReference]="ch1"
				[icon]="dashIcon"
				secondaryLabel="(21/25)">
				Dashboard
			</cds-tab-header>
			<cds-tab-header
				[paneReference]="ch2"
				[icon]="monIcon"
				secondaryLabel="(12/16)">
				Monitoring
			</cds-tab-header>
			<cds-tab-header
				[paneReference]="ch3"
				[icon]="actIcon"
				secondaryLabel="(0/7)"
				[disabled]="true">
				Activity
			</cds-tab-header>
			<cds-tab-header
				[paneReference]="ch4"
				[icon]="settingsIcon"
				secondaryLabel="(4/12)">
				Settings
			</cds-tab-header>
		</cds-tab-header-group>

		<cds-tab #ch1>Tab content 1</cds-tab>
		<cds-tab #ch2>Tab content 2</cds-tab>
		<cds-tab #ch3>Tab content 3</cds-tab>
		<cds-tab #ch4>Tab content 4</cds-tab>
	`
});
export const HeaderGroupTabHeaderIcons = headerGroupTabHeaderIcons.bind({});
HeaderGroupTabHeaderIcons.storyName = "Tab header + icons";
HeaderGroupTabHeaderIcons.args = {
	followFocus: true,
	cacheActive: true,
	isNavigation: false,
	dismissable: false
};

const headerGroupVerticalTabHeaderIcons = (args) => ({
	props: args,
	template: `
		<ng-template #vDashIcon><svg cdsIcon="dashboard" size="16"></svg></ng-template>
		<ng-template #vMonIcon><svg cdsIcon="cloud--monitoring" size="16"></svg></ng-template>
		<ng-template #vActIcon><svg cdsIcon="activity" size="16"></svg></ng-template>
		<ng-template #vSettingsIcon><svg cdsIcon="settings" size="16"></svg></ng-template>

		<cds-tabs-vertical-grouped [height]="height">
			<cds-tab-header-group-vertical
				[followFocus]="followFocus"
				[cacheActive]="cacheActive"
				[isNavigation]="isNavigation">
				<cds-tab-header
					[paneReference]="cv1"
					[icon]="vDashIcon"
					secondaryLabel="(21/25)">
					Dashboard
				</cds-tab-header>
				<cds-tab-header
					[paneReference]="cv2"
					[icon]="vMonIcon"
					secondaryLabel="(12/16)">
					Monitoring
				</cds-tab-header>
				<cds-tab-header
					[paneReference]="cv3"
					[icon]="vActIcon"
					secondaryLabel="(0/7)"
					[disabled]="true">
					Activity
				</cds-tab-header>
				<cds-tab-header
					[paneReference]="cv4"
					[icon]="vSettingsIcon"
					secondaryLabel="(4/12)">
					Settings
				</cds-tab-header>
			</cds-tab-header-group-vertical>

			<cds-tab #cv1>Tab content 1</cds-tab>
			<cds-tab #cv2>Tab content 2</cds-tab>
			<cds-tab #cv3>Tab content 3</cds-tab>
			<cds-tab #cv4>Tab content 4</cds-tab>
		</cds-tabs-vertical-grouped>
	`
});
export const HeaderGroupVerticalTabHeaderIcons = headerGroupVerticalTabHeaderIcons.bind({});
HeaderGroupVerticalTabHeaderIcons.storyName = "Vertical + tab-header + icons";
HeaderGroupVerticalTabHeaderIcons.args = {
	followFocus: true,
	cacheActive: true,
	isNavigation: false,
	height: "320px"
};
HeaderGroupVerticalTabHeaderIcons.argTypes = {
	height: { control: "text" }
};

const headerGroupDismissable = (args) => ({
	props: args,
	template: `
		<story-dismissable-tab-header-group
			[type]="type"
			[followFocus]="followFocus"
			[cacheActive]="cacheActive"
			[isNavigation]="isNavigation"
			[fullWidth]="fullWidth">
		</story-dismissable-tab-header-group>
	`
});
export const Dismissable = headerGroupDismissable.bind({});
Dismissable.storyName = "Dismissable";
Dismissable.args = {
	followFocus: true,
	cacheActive: true,
	isNavigation: false,
	type: "line" as "line" | "contained",
	fullWidth: false
};
Dismissable.argTypes = {
	type: {
		options: ["line", "contained"],
		control: "radio"
	}
};
