/* tslint:disable variable-name */

import { moduleMetadata, Meta } from "@storybook/angular";
import { LayerModule } from "../layer";
import { SkeletonModule } from "../skeleton";
import { TilesModule, Tile } from "./";
import { AILabelModule } from "../ai-labels";
import { ButtonModule } from "../button";
import { IconModule } from "../icon";
import { AI_LABEL_INNER, AI_LABEL_STORY_STYLES } from "../storybook/ai-label-story-shared";

export default {
	title: "Components/Tiles",
	decorators: [
		moduleMetadata({
			imports: [
				TilesModule,
				LayerModule,
				SkeletonModule,
				AILabelModule,
				ButtonModule,
				IconModule
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

export const withAILabel = () => ({
	styles: AI_LABEL_STORY_STYLES,
	template: `
		<cds-tile [decorator]="decoratorTpl">
			Tile with AI label
		</cds-tile>
		<ng-template #decoratorTpl>
			<cds-ai-label
				class="ai-label-container"
				kind="default"
				size="mini"
				[autoAlign]="true"
				aiText="AI"
				ariaLabel="Show information">
				` + AI_LABEL_INNER + `
			</cds-ai-label>
		</ng-template>
	`
});
