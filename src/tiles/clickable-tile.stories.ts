/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
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
		<ibm-clickable-tile
			[disabled]="disabled"
			[href]="href"
			target="_blank">
			Click the tile to open the Carbon Design System
		</ibm-clickable-tile>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	href: "https://www.carbondesignsystem.com/"
};

const LayerTemplate: Story<ClickableTile> = (args) => ({
	props: args,
	template: `
		<ibm-clickable-tile>
			First layer
		</ibm-clickable-tile>
		<div ibmLayer>
			<ibm-clickable-tile>
				Second layer
			</ibm-clickable-tile>
			<div ibmLayer>
				<ibm-clickable-tile>Third layer</ibm-clickable-tile>
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
