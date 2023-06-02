/* tslint:disable variable-name */

import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { LayerModule } from "../layer";
import {
	TilesModule,
	SelectionTile,
	TileGroup
} from "./";

export default {
	title: "Components/Tiles/Grouped",
	decorators: [
		moduleMetadata({
			imports: [TilesModule, LayerModule]
		})
	],
	argTypes: {
		multiple: {
			control: false
		}
	},
	component: TileGroup,
	subcomponents: {
		TileGroup,
		SelectionTile
	}
} as Meta;

const SelectableTemplate: Story<TileGroup> = (args) => ({
	props: args,
	template: `
		<cds-tile-group (selected)="selected($event)" [multiple]="false">
			<cds-selection-tile value="tile1" [selected]="true">Selectable Tile</cds-selection-tile>
			<cds-selection-tile value="tile2">Selectable Tile</cds-selection-tile>
			<cds-selection-tile value="tile3">Selectable Tile</cds-selection-tile>
		</cds-tile-group>
	`
});
export const Selectable = SelectableTemplate.bind({});
Selectable.argTypes = {
	selected: {
		action: "Tile selected!"
	}
};

const MultiTemplate: Story<TileGroup> = (args) => ({
	props: args,
	template: `
		<cds-tile-group (selected)="selected($event)" [multiple]="true">
			<cds-selection-tile value="tile1" [selected]="true">Selectable Tile</cds-selection-tile>
			<cds-selection-tile value="tile2">Selectable Tile</cds-selection-tile>
			<cds-selection-tile value="tile3">Selectable Tile</cds-selection-tile>
		</cds-tile-group>
	`
});
export const Multiselect = MultiTemplate.bind({});
Multiselect.argTypes = {
	selected: {
		action: "Tile selected!"
	}
};

const LayerTemplate: Story<TileGroup> = (args) => ({
	props: args,
	template: `
		<cds-tile-group (selected)="selected($event)" [multiple]="false">
			<cds-selection-tile value="tile1" [selected]="true">First Layer</cds-selection-tile>
			<cds-selection-tile value="tile2">First Layer</cds-selection-tile>
		</cds-tile-group>
		<div cdsLayer>
			<cds-tile-group (selected)="selected($event)" [multiple]="false">
				<cds-selection-tile value="tile1" [selected]="true">Second Layer</cds-selection-tile>
				<cds-selection-tile value="tile2">Second Layer</cds-selection-tile>
			</cds-tile-group>
			<div cdsLayer>
				<cds-tile-group (selected)="selected($event)" [multiple]="false">
					<cds-selection-tile value="tile1" [selected]="true">Third Layer</cds-selection-tile>
					<cds-selection-tile value="tile2">Third Layer</cds-selection-tile>
				</cds-tile-group>
			</div>
		</div>
	`
});
export const WithLayers = LayerTemplate.bind({});
