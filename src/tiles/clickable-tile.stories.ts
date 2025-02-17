import { moduleMetadata, Meta } from "@storybook/angular";
import { LayerModule } from "../layer";
import { IconModule } from "../icon";
import { TilesModule, ClickableTile } from "./";

export default {
	title: "Components/Tiles/Clickable",
	decorators: [
		moduleMetadata({
			imports: [
				TilesModule,
				LayerModule,
				IconModule
			]
		})
	],
	component: ClickableTile
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<cds-clickable-tile
			[disabled]="disabled"
			[href]="href"
			target="_blank">
			Click the tile to open the Carbon Design System
			<svg
				cdsClickableTileIcon
				cdsIcon="caret--right"
				size="16">
			</svg>
		</cds-clickable-tile>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	href: "https://www.carbondesignsystem.com/"
};

const LayerTemplate = (args) => ({
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
