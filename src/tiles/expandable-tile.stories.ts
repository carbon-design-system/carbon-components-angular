/* tslint:disable variable-name */

import { moduleMetadata, Meta, Story } from "@storybook/angular";
import { LayerModule } from "../layer";
import { ButtonModule } from "../button";
import { TilesModule, ExpandableTile } from "./";

export default {
	title: "Components/Tiles/Expandable",
	decorators: [
		moduleMetadata({
			imports: [
				ButtonModule,
				LayerModule,
				TilesModule
			]
		})
	],
	component: ExpandableTile
} as Meta;

const Template: Story<ExpandableTile> = (args) => ({
	props: args,
	template: `
		<cds-expandable-tile>
			<span cdsAboveFold style="height: 200px">Above the fold content here</span>
			<span cdsBelowFold style="height: 400px">Below the fold content here</span>
		</cds-expandable-tile>
	`
});
export const Basic = Template.bind({});

const InteractiveTemplate: Story<ExpandableTile> = (args) => ({
	props: args,
	template: `
		<cds-expandable-tile [interactive]="true">
			<span cdsAboveFold style="height: 200px">
				Above the fold content
				<button ibmButton>Click me!</button>
			</span>
			<span cdsBelowFold style="height: 400px">
				Below the fold content here
				<button ibmButton>No me!</button>
			</span>
		</cds-expandable-tile>
	`
});
export const Interactive = InteractiveTemplate.bind({});

const LayerTemplate: Story<ExpandableTile> = (args) => ({
	props: args,
	template: `
		<cds-expandable-tile>
			<span cdsAboveFold style="height: 200px">
				First Layer, above the fold content here
			</span>
			<span cdsBelowFold style="height: 400px">
				First Layer, below the fold content here
			</span>
		</cds-expandable-tile>
		<div cdsLayer>
			<cds-expandable-tile>
				<span cdsAboveFold style="height: 200px">
					Second layer, above the fold content here
				</span>
				<span cdsBelowFold style="height: 400px">
					Second layer, below the fold content here
				</span>
			</cds-expandable-tile>
			<div cdsLayer>
				<cds-expandable-tile>
					<span cdsAboveFold style="height: 200px">
						Third layer, above the fold content here
					</span>
					<span cdsBelowFold style="height: 400px">
						Third layer, below the fold content here
					</span>
				</cds-expandable-tile>
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
