import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, object } from "@storybook/addon-knobs/angular";

import { GridModule, DocumentationModule } from "../";

storiesOf("Grid", module)
	.addDecorator(
		moduleMetadata({
			imports: [GridModule, DocumentationModule]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
        	<div ibmGrid [condensed]="gridCondensed">
				<div
					ibmRow
					[gutter]="gutter"
					[leftGutter]="leftGutter"
					[rightGutter]="rightGutter"
					[condensed]="rowCondensed">
              		<div ibmCol class="custom-class-example" [columnNumbers]="{'md':2, 'sm': 12}">First Column</div>
					<div ibmCol class="custom-class-example" [columnNumbers]="{'md':2, 'sm': 12}">Second column</div>
					<div ibmCol class="custom-class-example" [columnNumbers]="{'md':2, 'sm': 12}">Third Column</div>
            	</div>
         	</div>
		`,
		props: {
			gutter: boolean("Gutter", true),
			leftGutter: boolean("Left gutter", true),
			rightGutter: boolean("Right gutter", true),
			rowCondensed: boolean("Row condensed", false),
			gridCondensed: boolean("Grid condensed", false)
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/directives/GridDirective.html"></ibm-documentation>
		`
	}));
