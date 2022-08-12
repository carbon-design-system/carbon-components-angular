/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
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
		<ibm-tile-group (selected)="selected($event)" [multiple]="false">
			<ibm-selection-tile value="tile1" [selected]="true">Selectable Tile</ibm-selection-tile>
			<ibm-selection-tile value="tile2">Selectable Tile</ibm-selection-tile>
			<ibm-selection-tile value="tile3">Selectable Tile</ibm-selection-tile>
		</ibm-tile-group>
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
		<ibm-tile-group (selected)="selected($event)" [multiple]="true">
			<ibm-selection-tile value="tile1" [selected]="true">Selectable Tile</ibm-selection-tile>
			<ibm-selection-tile value="tile2">Selectable Tile</ibm-selection-tile>
			<ibm-selection-tile value="tile3">Selectable Tile</ibm-selection-tile>
		</ibm-tile-group>
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
		<ibm-tile-group (selected)="selected($event)" [multiple]="false">
			<ibm-selection-tile value="tile1" [selected]="true">First Layer</ibm-selection-tile>
			<ibm-selection-tile value="tile2">First Layer</ibm-selection-tile>
		</ibm-tile-group>
		<div ibmLayer>
			<ibm-tile-group (selected)="selected($event)" [multiple]="false">
				<ibm-selection-tile value="tile1" [selected]="true">Second Layer</ibm-selection-tile>
				<ibm-selection-tile value="tile2">Second Layer</ibm-selection-tile>
			</ibm-tile-group>
			<div ibmLayer>
				<ibm-tile-group (selected)="selected($event)" [multiple]="false">
					<ibm-selection-tile value="tile1" [selected]="true">Third Layer</ibm-selection-tile>
					<ibm-selection-tile value="tile2">Third Layer</ibm-selection-tile>
				</ibm-tile-group>
			</div>
		</div>
	`
});
export const WithLayers = LayerTemplate.bind({});
