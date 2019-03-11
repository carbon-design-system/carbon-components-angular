import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";

import { TabsModule } from "../";

// NOTE: non-experimental styles include some temporary workarounds in preview.scss
// these should be removed when experimental becomes non-experimental
storiesOf("Tabs", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				TabsModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-tabs [followFocus]="followFocus" [isNavigation]="isNavigation">
				<ibm-tab heading="one">foo</ibm-tab>
				<ibm-tab heading="two">bar</ibm-tab>
			</ibm-tabs>
		`,
		props: {
			followFocus: boolean("followFocus", true),
			isNavigation: boolean("isNavigation", false)
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
			<ibm-tabs [followFocus]="followFocus" [isNavigation]="isNavigation">
				<ibm-tab *ngFor="let item of data; let i = index;" [heading]="customTabs" [context]="item">Tab Content {{i + 1}}</ibm-tab>
				<ibm-tab [heading]="iconTab">Tab Content 4</ibm-tab>
			</ibm-tabs>
		`,
		props: {
			followFocus: boolean("followFocus", true),
			isNavigation: boolean("isNavigation", false),
			data: [
				{ name: "one" },
				{ name: "two" },
				{ name: "three" }
			]
		}
	}))
	.add("Skeleton", () => ({
		template: `
			<ibm-tabs skeleton="true">
				<ibm-tab></ibm-tab>
				<ibm-tab></ibm-tab>
			</ibm-tabs>
		`
	}));
