import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean, select } from "@storybook/addon-knobs/angular";

import { TabsModule, DocumentationModule } from "../";
import { Component, Input } from "@angular/core";

@Component({
	selector: "ibm-header-group",
	template: `
		<ibm-tab-header-group [type]="type" [followFocus]="followFocus" [cacheActive]="cacheActive">
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
	`
})
class TabStory {
	@Input() followFocus = true;
	@Input() cacheActive = false;
	@Input() type = "default";
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
	.add("Container", () => ({
		template: `
			<ibm-tabs type="container" [followFocus]="followFocus" [isNavigation]="isNavigation" [cacheActive]="cacheActive">
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
				<ibm-tab *ngFor="let item of data; let i = index;" [heading]="customTabs" [context]="item">Tab Content {{i + 1}}</ibm-tab>
				<ibm-tab [heading]="iconTab">Tab Content Custom</ibm-tab>
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
			type: select("type", ["default", "container"], "default")
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
			type: select("type", ["default", "container"], "default")
		}
	}))
	.add("With TabHeaderGroup", () => ({
		template: `
			<ibm-header-group [type]="type" [followFocus]="followFocus" [cacheActive]="cacheActive"></ibm-header-group>
		`,
		props: {
			followFocus: boolean("followFocus", true),
			cacheActive: boolean("Cache active", true),
			type: select("type", ["default", "container"], "default")
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
			<ibm-documentation src="documentation/components/Tabs.html"></ibm-documentation>
		`
	}));
