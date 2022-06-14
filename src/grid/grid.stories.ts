import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";

import { GridModule } from "./";
import { DocumentationModule } from "../documentation-component/documentation.module";

storiesOf("Components|Grid", module)
	.addDecorator(
		moduleMetadata({
			imports: [GridModule, DocumentationModule]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic flex grid", () => ({
		template: `
        	<div ibmGrid [condensed]="gridCondensed">
				<div
					ibmRow
					[gutter]="gutter"
					[leftGutter]="leftGutter"
					[rightGutter]="rightGutter"
					[condensed]="rowCondensed">
              		<div ibmCol class="custom-class-example" [columnNumbers]="{'md': 2, 'sm': 12}">First Column</div>
					<div ibmCol class="custom-class-example" [columnNumbers]="{'md': 2, 'sm': 12}">Second column</div>
					<div ibmCol class="custom-class-example" [columnNumbers]="{'md': 2, 'sm': 12}">Third Column</div>
            	</div>
         	</div>
		`,
		props: {
			gutter: boolean("Gutter", true),
			rowCondensed: boolean("Row condensed", false),
			gridCondensed: boolean("Grid condensed", false)
		},
		styles: [`@use '@carbon/styles/scss/grid/flexbox';`]
	}))
	.add("Basic css grid", () => ({
		template: `
        	<div ibmGrid [useCssGrid]="true">
				<div ibmCol class="custom-class-example" [columnNumbers]="{'md': 2, 'sm': 12}">First Column</div>
				<div ibmCol class="custom-class-example" [columnNumbers]="{'md': 2, 'sm': 12}">Second column</div>
				<div ibmCol class="custom-class-example" [columnNumbers]="{'md': 2, 'sm': 12}">Third Column</div>
				<div ibmCol>
					<div ibmGrid>Should be css subgrid </div>
				</div>
         	</div>
		`,
		props: {
			gutter: boolean("Gutter", true),
			rowCondensed: boolean("Row condensed", false),
			gridCondensed: boolean("Grid condensed", false)
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_grid.griddirective.html"></ibm-documentation>
		`
	}));
