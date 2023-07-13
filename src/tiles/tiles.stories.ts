/* tslint:disable variable-name */

import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { LayerModule } from "../layer";
import { SkeletonModule } from "../skeleton";
import { TilesModule, Tile } from "./";

export default {
	title: "Components/Tiles",
	decorators: [
		moduleMetadata({
			imports: [
				TilesModule,
				LayerModule,
				SkeletonModule
			]
		})
	],
	component: Tile
} as Meta;

const Template: Story<Tile> = (args) => ({
	props: args,
	template: `
		<cds-tile>
			Tile content goes here...
		</cds-tile>
	`
});
export const Basic = Template.bind({});

const LayerTemplate: Story<Tile> = (args) => ({
	props: args,
	template: `
		<cds-tile>
			First layer
		</cds-tile>
		<div cdsLayer>
			<cds-tile>
				Second layer
			</cds-tile>
			<div cdsLayer>
				<cds-tile>Third layer</cds-tile>
			</div>
		</div>
	`
});
export const WithLayers = LayerTemplate.bind({});

const SkeletonTemplate: Story<Tile> = (args) => ({
	props: args,
	template: `
		<cds-tile>
			<div class="skeleton-placeholder">
				<cds-skeleton-placeholder></cds-skeleton-placeholder>
			</div>
			<div class="skeleton-text">
				<cds-skeleton-text [lines]="3"></cds-skeleton-text>
			</div>
		</cds-tile>
	`,
	styles: [`
		.skeleton-placeholder {
			margin-bottom: 10px;
		}
	`]
});
export const Skeleton = SkeletonTemplate.bind({});
