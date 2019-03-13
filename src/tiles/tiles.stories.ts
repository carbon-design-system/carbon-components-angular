import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs/angular";
import { action } from "@storybook/addon-actions";

import { TilesModule } from "../";

storiesOf("Tiles", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				TilesModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<ibm-tile>
			tile content goes here...
		</ibm-tile>
		`
	}))
	.add("Multiple", () => ({
		template: `
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
		<ibm-clickable-tile href="https://www.carbondesignsystem.com/" target="_blank">
			Click the tile to open the Carbon Design System
		</ibm-clickable-tile>
		`
	}))
	.add("Selectable", () => ({
		template: `
			<ibm-tile-group (selected)="selected($event)">
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
			<ibm-tile-group (selected)="selected($event)" type="multi">
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
		<ibm-expandable-tile>
			<ibm-above-the-fold><div style="height: 200px">Above the fold content here</div></ibm-above-the-fold>
			<ibm-below-the-fold><div style="height: 400px">Below the fold content here</div></ibm-below-the-fold>
		</ibm-expandable-tile>
		`
	}));
