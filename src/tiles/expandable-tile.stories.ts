/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { LayerModule } from "../layer";
import { TilesModule, ExpandableTile } from "./";

export default {
	title: "Components/Tiles/Expandable",
	decorators: [
		moduleMetadata({
			imports: [TilesModule, LayerModule]
		})
	],
	component: ExpandableTile
} as Meta;

const Template: Story<ExpandableTile> = (args) => ({
	props: args,
	template: `
		<ibm-expandable-tile>
			<span class="cds--tile-content__above-the-fold" style="height: 200px">Above the fold content here</span>
			<span class="cds--tile-content__below-the-fold" style="height: 400px">Below the fold content here</span>
		</ibm-expandable-tile>
	`
});
export const Basic = Template.bind({});

const LayerTemplate: Story<ExpandableTile> = (args) => ({
	props: args,
	template: `
		<ibm-expandable-tile>
			<span class="cds--tile-content__above-the-fold" style="height: 200px">
				First Layer, above the fold content here
			</span>
			<span class="cds--tile-content__below-the-fold" style="height: 400px">
				First Layer, below the fold content here
			</span>
		</ibm-expandable-tile>
		<div ibmLayer>
			<ibm-expandable-tile>
				<span class="cds--tile-content__above-the-fold" style="height: 200px">
					Second layer, above the fold content here
				</span>
				<span class="cds--tile-content__below-the-fold" style="height: 400px">
					Second layer, below the fold content here
				</span>
			</ibm-expandable-tile>
			<div ibmLayer>
				<ibm-expandable-tile>
					<span class="cds--tile-content__above-the-fold" style="height: 200px">
						Third layer, above the fold content here
					</span>
					<span class="cds--tile-content__below-the-fold" style="height: 400px">
						Third layer, below the fold content here
					</span>
				</ibm-expandable-tile>
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
