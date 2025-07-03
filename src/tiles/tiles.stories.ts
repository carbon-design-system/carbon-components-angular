import { moduleMetadata, Meta } from "@storybook/angular";
import { LayerDirective } from "../layer";
import { SkeletonPlaceholder, SkeletonText } from "../skeleton";
import { Tile, TileGroup } from "./";

export default {
	title: "Components/Tiles",
	decorators: [
		moduleMetadata({
			imports: [
				Tile,
				TileGroup,
				LayerDirective,
				SkeletonPlaceholder,
				SkeletonText
			]
		})
	],
	component: Tile
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<cds-tile>
			Tile content goes here...
		</cds-tile>
	`
});
export const Basic = Template.bind({});

const LayerTemplate = (args) => ({
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

const SkeletonTemplate = (args) => ({
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
