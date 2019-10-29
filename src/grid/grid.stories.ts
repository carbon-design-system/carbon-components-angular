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
					[noGutter]="noGutter"
					[noLeftGutter]="noLeftGutter"
					[noRightGutter]="noRightGutter"
					[condensed]="rowCondensed">
              		<div ibmCol class="custom-class-example" [columnNumbers]="{'md':2, 'sm': 12}">First Column</div>
					<div ibmCol class="custom-class-example" [columnNumbers]="{'md':2, 'sm': 12}">Second column</div>
					<div ibmCol class="custom-class-example" [columnNumbers]="{'md':2, 'sm': 12}">Third Column</div>
            	</div>
         	</div>
		`,
		props: {
			noGutter: boolean("Remove gutter", false),
			noLeftGutter: boolean("Remove left gutter", false),
			noRightGutter: boolean("Remove right gutter", false),
			rowCondensed: boolean("Row condensed", false),
			gridCondensed: boolean("Grid condensed", false)
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/directives/GridDirective.html"></ibm-documentation>
		`
	}));
