/* tslint:disable variable-name */

import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { LayerModule } from "../layer";
import { TilesModule, ClickableTile } from "./";

export default {
	title: "Components/Tiles/Clickable",
	decorators: [
		moduleMetadata({
			imports: [TilesModule, LayerModule]
		})
	],
	component: ClickableTile
} as Meta;

const Template: Story<ClickableTile> = (args) => ({
	props: args,
	template: `
		<cds-clickable-tile
			[disabled]="disabled"
			[href]="href"
			target="_blank">
			Click the tile to open the Carbon Design System
		</cds-clickable-tile>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	href: "https://www.carbondesignsystem.com/"
};

const LayerTemplate: Story<ClickableTile> = (args) => ({
	props: args,
	template: `
		<cds-clickable-tile>
			First layer
		</cds-clickable-tile>
		<div cdsLayer>
			<cds-clickable-tile>
				Second layer
			</cds-clickable-tile>
			<div cdsLayer>
				<cds-clickable-tile>Third layer</cds-clickable-tile>
			</div>
		</div>
	`
});
export const WithLayers = LayerTemplate.bind({});
WithLayers.parameters = {
	controls: {
		disable: true
	}
};
