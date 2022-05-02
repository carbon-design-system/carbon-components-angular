import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean, select } from "@storybook/addon-knobs/angular";

import { TabsModule } from "./";
import { Component, Input } from "@angular/core";
import { DocumentationModule } from "../documentation-component/documentation.module";

@Component({
	selector: "ibm-header-group",
	template: `
		<ibm-tab-header-group
			[type]="type"
			[followFocus]="followFocus"
			[cacheActive]="cacheActive"
			[isNavigation]="isNavigation"
			[skeleton]="true">
			<ibm-tab-header [paneReference]="content1">
				Content 1
			</ibm-tab-header>
			<ibm-tab-header [paneReference]="content2">
				Content 2
			</ibm-tab-header>
			<ibm-tab-header [paneReference]="content3" disabled="true">
				Content 3
			</ibm-tab-header>
			<ibm-tab-header [paneReference]="content4">
				Content 4
			</ibm-tab-header>
			<ibm-tab-header [paneReference]="content5">
				Content 5
			</ibm-tab-header>
			<ibm-tab-header [paneReference]="content6">
				Content 6
			</ibm-tab-header>
			<ibm-tab-header [paneReference]="content7">
				Content 7
			</ibm-tab-header>
			<ibm-tab-header [paneReference]="content8">
				Content 8
			</ibm-tab-header>
			<ibm-tab-header [paneReference]="content9">
				Content 9
			</ibm-tab-header>
			<ibm-tab-header [paneReference]="content10">
				Content 10
			</ibm-tab-header>
			<span before>Is before</span>
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
			Tab Content 4
		</ibm-tab>
		<ibm-tab #content6>
			Tab Content 4
		</ibm-tab>
		<ibm-tab #content7>
			Tab Content 4
		</ibm-tab>
		<ibm-tab #content8>
			Tab Content 4
		</ibm-tab>
		<ibm-tab #content9>
			Tab Content 4
		</ibm-tab>
		<ibm-tab #content10>
			Tab Content 4
		</ibm-tab>

	`
})
class TabStory {
	@Input() followFocus = true;
	@Input() cacheActive = false;
	@Input() isNavigation = true;
	@Input() type = "line";
}

storiesOf("Components|Tabs", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				TabsModule,
				DocumentationModule
			],
			declarations: [TabStory]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-tabs [followFocus]="followFocus" [isNavigation]="isNavigation" [cacheActive]="cacheActive">
				<ibm-tab heading="one">Tab Content 1</ibm-tab>
				<ibm-tab heading="two">Tab Content 2</ibm-tab>
				<ibm-tab heading="three">Tab Content 3</ibm-tab>
				<ibm-tab heading="four" disabled="true">Tab Content 4</ibm-tab>
			</ibm-tabs>
		`,
		props: {
			followFocus: boolean("followFocus", true),
			isNavigation: boolean("isNavigation", false),
			cacheActive: boolean("Cache active", true)
		}
	}))
	.add("Contained", () => ({
		template: `
			<ibm-tabs type="contained" [followFocus]="followFocus" [isNavigation]="isNavigation" [cacheActive]="cacheActive">
				<ibm-tab heading="Content one">Tab Content 1</ibm-tab>
				<ibm-tab heading="Content two">Tab Content 2</ibm-tab>
				<ibm-tab heading="Content three">Tab Content 3</ibm-tab>
				<ibm-tab heading="Content four" disabled="true">Tab Content 4</ibm-tab>
				<ibm-tab heading="Content five" disabled="true">Tab Content 5</ibm-tab>
				<ibm-tab heading="Content six" disabled="true">Tab Content 5</ibm-tab>
				<ibm-tab heading="Content seven" disabled="true">Tab Content 5</ibm-tab>
				<ibm-tab heading="Content eight" disabled="true">Tab Content 5</ibm-tab>
				<ibm-tab heading="Content nine" disabled="true">Tab Content 5</ibm-tab>
				<ibm-tab heading="Content ten" disabled="true">Tab Content 5</ibm-tab>
				<ibm-tab heading="Content eleven" disabled="true">Tab Content 5</ibm-tab>
				<ibm-tab heading="Content twelve" disabled="true">Tab Content 5</ibm-tab>
				<ibm-tab heading="Content thirteen" disabled="true">Tab Content 5</ibm-tab>
				<ibm-tab heading="Content fourteen" disabled="true">Tab Content 5</ibm-tab>
				<ibm-tab heading="Content fiften" disabled="true">Tab Content 5</ibm-tab>
				<ibm-tab heading="Content sixteen" disabled="true">Tab Content 5</ibm-tab>
				<ibm-tab heading="Content seventeen" disabled="true">Tab Content 5</ibm-tab>
			</ibm-tabs>
		`,
		props: {
			followFocus: boolean("followFocus", true),
			isNavigation: boolean("isNavigation", false),
			cacheActive: boolean("Cache active", true)
		}
	}))
	.add("With template", () => ({
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
		`,
		props: {
			followFocus: boolean("followFocus", true),
			isNavigation: boolean("isNavigation", false),
			data: [
				{ name: "one" },
				{ name: "two" },
				{ name: "three" }
			],
			type: select("type", ["line", "contained"], "line")
		}
	}))
	.add("Width before and after content", () => ({
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
		`,
		props: {
			followFocus: boolean("followFocus", true),
			isNavigation: boolean("isNavigation", false),
			type: select("type", ["line", "contained"], "line")
		}
	}))
	.add("With TabHeaderGroup", () => ({
		template: `
			<ibm-header-group
				[type]="type"
				[followFocus]="followFocus"
				[cacheActive]="cacheActive"
				[isNavigation]="isNavigation">
			</ibm-header-group>
		`,
		props: {
			followFocus: boolean("followFocus", true),
			cacheActive: boolean("Cache active", true),
			isNavigation: boolean("isNavigation", true),
			type: select("type", ["line", "contained"], "line")
		}
	}))
	.add("Skeleton", () => ({
		template: `
			<ibm-tabs skeleton="true">
				<ibm-tab></ibm-tab>
				<ibm-tab></ibm-tab>
			</ibm-tabs>
		`
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_tabs.tabs.html"></ibm-documentation>
		`
	}));
