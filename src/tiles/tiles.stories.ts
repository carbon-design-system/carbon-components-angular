/* tslint:disable variable-name */

import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
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
