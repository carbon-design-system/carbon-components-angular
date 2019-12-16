import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";
import { action } from "@storybook/addon-actions";

import { TilesModule, DocumentationModule } from "../";
import { RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { Component } from "@angular/core";

@Component({
	selector: "app-bar",
	template: "<h1>bar</h1>"
})
class BarComponent { }

@Component({
	selector: "app-foo",
	template: "<h1>foo</h1>"
})
class FooComponent {}

storiesOf("Components|Tiles", module)
	.addDecorator(
		moduleMetadata({
			declarations: [FooComponent, BarComponent],
			imports: [
				TilesModule,
				DocumentationModule,
				RouterModule.forRoot([
					{
						path: "bar",
						component: BarComponent
					},
					{
						path: "foo",
						component: FooComponent
					}
				], {
					initialNavigation: false,
					useHash: true
				})
			],
			providers: [
				{provide: APP_BASE_HREF, useValue: "/"}
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<ibm-tile [skeleton]="skeleton">
			tile content goes here...
		</ibm-tile>
		`,
		props: {
			skeleton: boolean("Set skeleton state", false)
		}
	}))
	.add("Multiple", () => ({
		template: `
		<div style="display: flex; flex-flow: row wrap; justify-content: space-around;">
			<ibm-tile [skeleton]="skeleton">
				Tile 1
			</ibm-tile>
			<ibm-tile [skeleton]="skeleton">
				Tile 2
			</ibm-tile>
			<ibm-tile [skeleton]="skeleton">
				Tile 3
			</ibm-tile>
		</div>
		`,
		props: {
			skeleton: boolean("Set skeleton state", false)
		}
	}))
	.add("Clickable", () => ({
		template: `
		<ibm-clickable-tile [skeleton]="skeleton" href="https://www.carbondesignsystem.com/" target="_blank">
			Click the tile to open the Carbon Design System
		</ibm-clickable-tile>
		`,
		props: {
			skeleton: boolean("Set skeleton state", false)
		}
	}))
	.add("Routable", () => ({
		template: `
			<ibm-clickable-tile [route]="['foo']" [skeleton]="skeleton">
				Click to trigger the <code>foo</code> route
			</ibm-clickable-tile>
			<ibm-clickable-tile [route]="['bar']" [skeleton]="skeleton">
				Click to trigger the <code>bar</code> route
			</ibm-clickable-tile>
			<router-outlet></router-outlet>
		`,
		props: {
			skeleton: boolean("Set skeleton state", false)
		}
	}))
	.add("Selectable", () => ({
		template: `
			<ibm-tile-group (selected)="selected($event)" [multiple]="false" [skeleton]="skeleton">
				<ibm-selection-tile value="tile1" [selected]="true">Selectable Tile</ibm-selection-tile>
				<ibm-selection-tile value="tile2">Selectable Tile</ibm-selection-tile>
				<ibm-selection-tile value="tile3">Selectable Tile</ibm-selection-tile>
			</ibm-tile-group>
		`,
		props: {
			skeleton: boolean("Set skeleton state", false),
			selected: action("tile selected")
		}
	}))
	.add("Multi-select", () => ({
		template: `
			<ibm-tile-group (selected)="selected($event)" [multiple]="true" [skeleton]="skeleton">
				<ibm-selection-tile value="tile1" [selected]="true">Selectable Tile</ibm-selection-tile>
				<ibm-selection-tile value="tile2">Selectable Tile</ibm-selection-tile>
				<ibm-selection-tile value="tile3">Selectable Tile</ibm-selection-tile>
			</ibm-tile-group>
		`,
		props: {
			skeleton: boolean("Set skeleton state", false),
			selected: action("tile selected")
		}
	}))
	.add("Expandable", () => ({
		template: `
		<ibm-expandable-tile [skeleton]="skeleton">
			<span class="bx--tile-content__above-the-fold" style="height: 200px">Above the fold content here</span>
			<span class="bx--tile-content__below-the-fold" style="height: 400px">Below the fold content here</span>
		</ibm-expandable-tile>
		`,
		props: {
			skeleton: boolean("Set skeleton state", false)
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/Tile.html"></ibm-documentation>
		`
	}));
