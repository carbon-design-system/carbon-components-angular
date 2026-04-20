/* tslint:disable variable-name */

import { moduleMetadata, Meta } from "@storybook/angular";
import { LayerModule } from "../layer";
import {
	TilesModule,
	SelectionTile,
	TileGroup
} from "./";
import { AILabelModule } from "../ai-label";
import { ButtonModule } from "../button";
import { IconModule } from "../icon";
import { AI_LABEL_INNER, AI_LABEL_STORY_STYLES } from "../storybook/ai-label-story-shared";

export default {
	title: "Components/Tiles/Grouped",
	decorators: [
		moduleMetadata({
			imports: [TilesModule, LayerModule, AILabelModule, ButtonModule, IconModule]
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

const SelectableTemplate = (args) => ({
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

const withAILabelTemplate = (args) => ({
	props: args,
	styles: AI_LABEL_STORY_STYLES,
	template: `
		<cds-tile-group (selected)="selected($event)" [multiple]="false">
			<cds-selection-tile value="t1" [decorator]="decoratorTpl">Tile with decorator</cds-selection-tile>
			<cds-selection-tile value="t2">Plain tile</cds-selection-tile>
		</cds-tile-group>
		<ng-template #decoratorTpl>
			<cds-ai-label
				class="ai-label-container"
				kind="default"
				size="mini"
				[autoAlign]="true"
				[align]="'bottom-end'"
				aiText="AI"
				ariaLabel="Show information">
				` + AI_LABEL_INNER + `
			</cds-ai-label>
		</ng-template>
	`
});
export const withAILabel = withAILabelTemplate.bind({});
withAILabel.argTypes = {
	selected: {
		action: "Tile selected!"
	}
};

const MultiTemplate = (args) => ({
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

const LayerTemplate = (args) => ({
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
