/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { LayerModule } from "../layer";
import {
	TilesModule,
	Tile,
	ClickableTile,
	ExpandableTile,
	SelectionTile,
	TileGroup
} from "./";

export default {
	title: "Components/Tiles",
	decorators: [
		moduleMetadata({
			imports: [
				TilesModule,
				LayerModule,
				DocumentationModule
			]
		})
	]
} as Meta;

const Template: Story<Tile> = (args) => ({
	props: args,
	template: `
		<ibm-tile>
			Tile content goes here...
		</ibm-tile>
	`
});
export const Basic = Template.bind({});

const LayerTemplate: Story<Tile> = (args) => ({
	props: args,
	template: `
		<ibm-tile>
			First layer
		</ibm-tile>
		<div ibmLayer>
			<ibm-tile>
				Second layer
			</ibm-tile>
			<div ibmLayer>
				<ibm-tile>Third layer</ibm-tile>
			</div>
		</div>
	`
});
export const WithLayers = LayerTemplate.bind({});

const ClickableTemplate: Story<ClickableTile> = (args) => ({
	props: args,
	template: `
		<ibm-clickable-tile href="https://www.carbondesignsystem.com/" target="_blank">
			Click the tile to open the Carbon Design System
		</ibm-clickable-tile>
	`
});
export const Clickable = ClickableTemplate.bind({});

const ExpandableTemplate: Story<ExpandableTile> = (args) => ({
	props: args,
	template: `
		<ibm-expandable-tile>
			<span class="cds--tile-content__above-the-fold" style="height: 200px">Above the fold content here</span>
			<span class="cds--tile-content__below-the-fold" style="height: 400px">Below the fold content here</span>
		</ibm-expandable-tile>
	`
});
export const Expandable = ExpandableTemplate.bind({});

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

const SelectableTemplate: Story<SelectionTile> = (args) => ({
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
Multiselect.argTypes = {
	selected: {
		action: "Tile selected!"
	}
};

const SkeletonTemplate: Story<Tile> = (args) => ({
	props: args,
	template: `
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
	`]
});
export const Skeleton = SkeletonTemplate.bind({});

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_tiles.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
