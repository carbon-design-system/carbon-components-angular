import { storiesOf, moduleMetadata } from "@storybook/angular";
import { select, withKnobs } from "@storybook/addon-knobs/angular";
import { action } from "@storybook/addon-actions";

import { TilesModule } from "../";
import { SkeletonModule } from "../skeleton/index";
import { RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { Component } from "@angular/core";
import { DocumentationModule } from "../documentation-component/documentation.module";

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
				SkeletonModule,
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
		<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22%3A%22Tile%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22%3A%22tile%22%2C%22items%22%3A%5B%7B%22type%22%3A%22text%22%2C%22text%22%3A%22tile%20content%20goes%20here..%22%2C%22id%22%3A%223%22%2C%22codeContext%22%3A%7B%22name%22%3A%22text-3%22%7D%7D%5D%2C%22id%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22%3A%22tile-2%22%7D%7D%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
			Edit on Carbon UI Builder
		</a>
		<br><br>
		<ibm-tile [theme]="theme">
			tile content goes here...
		</ibm-tile>
		`,
		props: {
			theme: select("theme", ["dark", "light"], "dark")
		}
	}))
	.add("Multiple", () => ({
		template: `
		<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22%3A%22Tile%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22%3A%22tile%22%2C%22items%22%3A%5B%7B%22type%22%3A%22text%22%2C%22text%22%3A%22tile%20content%20goes%20here..%22%2C%22id%22%3A%223%22%2C%22codeContext%22%3A%7B%22name%22%3A%22text-3%22%7D%7D%5D%2C%22id%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22%3A%22tile-2%22%7D%7D%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
			Edit on Carbon UI Builder
		</a>
		<br><br>
		<div style="display: flex; flex-flow: row wrap; justify-content: space-around;">
			<ibm-tile>
				Tile 1
			</ibm-tile>
			<ibm-tile>
				Tile 2
			</ibm-tile>
			<ibm-tile>
				Tile 3
			</ibm-tile>
		</div>
		`
	}))
	.add("Clickable", () => ({
		template: `
		<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22%3A%22Clickable%20tile%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22%3A%22clickable-tile%22%2C%22items%22%3A%5B%7B%22type%22%3A%22text%22%2C%22text%22%3A%22Clickable%20tile%22%2C%22id%22%3A%223%22%2C%22codeContext%22%3A%7B%22name%22%3A%22text-3%22%7D%7D%5D%2C%22id%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22%3A%22clickable-tile-2%22%7D%7D%5D%2C%22id%22%3A1%2C%22codeContext%22%3A%7B%22name%22%3A%22undefined-1%22%7D%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
			Edit on Carbon UI Builder
		</a>
		<br><br>
		<ibm-clickable-tile href="https://www.carbondesignsystem.com/" target="_blank">
			Click the tile to open the Carbon Design System
		</ibm-clickable-tile>
		`
	}))
	.add("Routable", () => ({
		template: `
			<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22%3A%22Tile%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22%3A%22tile%22%2C%22items%22%3A%5B%7B%22type%22%3A%22text%22%2C%22text%22%3A%22tile%20content%20goes%20here..%22%2C%22id%22%3A%223%22%2C%22codeContext%22%3A%7B%22name%22%3A%22text-3%22%7D%7D%5D%2C%22id%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22%3A%22tile-2%22%7D%7D%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
				Edit on Carbon UI Builder
			</a>
			<br><br>
			<ibm-clickable-tile [route]="['foo']">
				Click to trigger the <code>foo</code> route
			</ibm-clickable-tile>
			<ibm-clickable-tile [route]="['bar']">
				Click to trigger the <code>bar</code> route
			</ibm-clickable-tile>
			<router-outlet></router-outlet>
		`
	}))
	.add("Selectable", () => ({
		template: `
			<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22%3A%22Selectable%20tile%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22%3A%22selectable-tile%22%2C%22standalone%22%3Atrue%2C%22disabled%22%3Afalse%2C%22selected%22%3Afalse%2C%22items%22%3A%5B%7B%22type%22%3A%22text%22%2C%22text%22%3A%22Selectable%20Tile%22%2C%22id%22%3A%224%22%2C%22codeContext%22%3A%7B%22name%22%3A%22text-4%22%7D%7D%5D%2C%22id%22%3A%223%22%2C%22codeContext%22%3A%7B%22name%22%3A%22selectable-tile-3%22%7D%7D%5D%2C%22id%22%3A1%2C%22codeContext%22%3A%7B%22name%22%3A%22undefined-1%22%7D%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
				Edit on Carbon UI Builder
			</a>
			<br><br>
			<ibm-tile-group (selected)="selected($event)" [multiple]="false">
				<ibm-selection-tile value="tile1" [selected]="true">Selectable Tile</ibm-selection-tile>
				<ibm-selection-tile value="tile2">Selectable Tile</ibm-selection-tile>
				<ibm-selection-tile value="tile3">Selectable Tile</ibm-selection-tile>
			</ibm-tile-group>
		`,
		props: {
			selected: action("tile selected")
		}
	}))
	.add("Multi-select", () => ({
		template: `
			<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22%3A%22Selectable%20tiles%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22%3A%22selectable-tile-group%22%2C%22tileGroup%22%3Atrue%2C%22items%22%3A%5B%7B%22type%22%3A%22selectable-tile%22%2C%22codeContext%22%3A%7B%22value%22%3A%22Tile%201%22%2C%22name%22%3A%22selectable-tile-4%22%2C%22formItemName%22%3A%22selectable-tile-group-3%22%7D%2C%22standalone%22%3Afalse%2C%22selected%22%3Afalse%2C%22items%22%3A%5B%7B%22type%22%3A%22text%22%2C%22text%22%3A%22Selectable%20Tile%22%2C%22id%22%3A%227%22%2C%22codeContext%22%3A%7B%22name%22%3A%22text-7%22%7D%7D%5D%2C%22id%22%3A%224%22%7D%2C%7B%22type%22%3A%22selectable-tile%22%2C%22codeContext%22%3A%7B%22value%22%3A%22Tile%202%22%2C%22name%22%3A%22selectable-tile-5%22%2C%22formItemName%22%3A%22selectable-tile-group-3%22%7D%2C%22standalone%22%3Afalse%2C%22selected%22%3Afalse%2C%22items%22%3A%5B%7B%22type%22%3A%22text%22%2C%22text%22%3A%22Selectable%20Tile%22%2C%22id%22%3A%228%22%2C%22codeContext%22%3A%7B%22name%22%3A%22text-8%22%7D%7D%5D%2C%22id%22%3A%225%22%7D%2C%7B%22type%22%3A%22selectable-tile%22%2C%22codeContext%22%3A%7B%22value%22%3A%22Tile%203%22%2C%22name%22%3A%22selectable-tile-6%22%2C%22formItemName%22%3A%22selectable-tile-group-3%22%7D%2C%22standalone%22%3Afalse%2C%22selected%22%3Afalse%2C%22items%22%3A%5B%7B%22type%22%3A%22text%22%2C%22text%22%3A%22Selectable%20Tile%22%2C%22id%22%3A%229%22%2C%22codeContext%22%3A%7B%22name%22%3A%22text-9%22%7D%7D%5D%2C%22id%22%3A%226%22%7D%5D%2C%22id%22%3A%223%22%2C%22codeContext%22%3A%7B%22name%22%3A%22selectable-tile-group-3%22%7D%7D%5D%2C%22id%22%3A1%2C%22codeContext%22%3A%7B%22name%22%3A%22undefined-1%22%7D%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
				Edit on Carbon UI Builder
			</a>
			<br><br>
			<ibm-tile-group (selected)="selected($event)" [multiple]="true">
				<ibm-selection-tile value="tile1" [selected]="true">Selectable Tile</ibm-selection-tile>
				<ibm-selection-tile value="tile2">Selectable Tile</ibm-selection-tile>
				<ibm-selection-tile value="tile3">Selectable Tile</ibm-selection-tile>
			</ibm-tile-group>
		`,
		props: {
			selected: action("tile selected")
		}
	}))
	.add("Expandable", () => ({
		template: `
		<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22%3A%22Expandable%20tile%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22%3A%22expandable-tile%22%2C%22light%22%3Afalse%2C%22expanded%22%3Atrue%2C%22outline%22%3Afalse%2C%22items%22%3A%5B%7B%22type%22%3A%22text%22%2C%22text%22%3A%22Above%20fold%22%2C%22id%22%3A%223%22%2C%22codeContext%22%3A%7B%22name%22%3A%22text-3%22%7D%7D%2C%7B%22type%22%3A%22tile-fold%22%2C%22items%22%3A%5B%7B%22type%22%3A%22text%22%2C%22text%22%3A%22Below%20fold%22%2C%22id%22%3A%225%22%2C%22codeContext%22%3A%7B%22name%22%3A%22text-5%22%7D%7D%5D%2C%22id%22%3A%224%22%2C%22codeContext%22%3A%7B%22name%22%3A%22tile-fold-4%22%7D%7D%5D%2C%22id%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22%3A%22expandable-tile-2%22%7D%7D%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
			Edit on Carbon UI Builder
		</a>
		<br><br>
		<ibm-expandable-tile>
			<span class="bx--tile-content__above-the-fold" style="height: 200px">Above the fold content here</span>
			<span class="bx--tile-content__below-the-fold" style="height: 400px">Below the fold content here</span>
		</ibm-expandable-tile>
		`
	}))
	.add("Skeleton", () => ({
		template: `
		<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22%3A%22Tile%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22%3A%22tile%22%2C%22items%22%3A%5B%7B%22type%22%3A%22text%22%2C%22text%22%3A%22tile%20content%20goes%20here..%22%2C%22id%22%3A%223%22%2C%22codeContext%22%3A%7B%22name%22%3A%22text-3%22%7D%7D%5D%2C%22id%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22%3A%22tile-2%22%7D%7D%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
			Edit on Carbon UI Builder
		</a>
		<br><br>
		<ibm-tile>
			<div class="skeleton-placeholder">
				<ibm-skeleton-placeholder></ibm-skeleton-placeholder>
			</div>
			<div class="skeleton-text">
				<ibm-skeleton-text [lines]="3"></ibm-skeleton-text>
			</div>
		</ibm-tile>
		`,
		styles: [`
			.skeleton-placeholder {
				margin-bottom: 10px;
			}
		`
		]
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_tiles.tile.html"></ibm-documentation>
		`
	}));
