import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, object } from "@storybook/addon-knobs/angular";

import { GridModule } from "../";
import { DocumentationModule } from "../documentation-component/documentation.module";

storiesOf("Components|Grid", module)
	.addDecorator(
		moduleMetadata({
			imports: [GridModule, DocumentationModule]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22%3A&#13;
			%22GridFragment%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22%3A%22&#13;
			grid%22%2C%22outline%22%3Atrue%2C%22items%22%3A%5B%7B%22type%22%3A%22row%22%2C&#13;
			%22items%22%3A%5B%7B%22type%22%3A%22column%22%2C%22items%22%3A%5B%5D%2C%22id%22&#13;
			%3A%225%22%2C%22codeContext%22%3A%7B%22name%22%3A%22column-5%22%7D%7D%2C%7B%22&#13;
			type%22%3A%22column%22%2C%22items%22%3A%5B%5D%2C%22id%22%3A%226%22%2C%22codeContext&#13;
			%22%3A%7B%22name%22%3A%22column-6%22%7D%7D%5D%2C%22id%22%3A%224%22%2C%22codeContext&#13;
			%22%3A%7B%22name%22%3A%22row-4%22%7D%7D%2C%7B%22type%22%3A%22row%22%2C%22items%22%&#13;
			3A%5B%7B%22type%22%3A%22column%22%2C%22items%22%3A%5B%5D%2C%22id%22%3A%228%22%2C%22&#13;
			codeContext%22%3A%7B%22name%22%3A%22column-8%22%7D%7D%2C%7B%22type%22%3A%22column%22&#13;
			%2C%22items%22%3A%5B%5D%2C%22id%22%3A%229%22%2C%22codeContext%22%3A%7B%22name%22%3A%22&#13;
			column-9%22%7D%7D%5D%2C%22id%22%3A%227%22%2C%22codeContext%22%3A%7B%22name%22%3A%22&#13;
			row-7%22%7D%7D%5D%2C%22id%22%3A%223%22%2C%22codeContext%22%3A%7B%22name%22%3A%22&#13;
			grid-3%22%7D%7D%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
				Edit on Carbon UI Builder
			</a>
			<br><br>
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
			leftGutter: boolean("Left gutter", true),
			rightGutter: boolean("Right gutter", true),
			rowCondensed: boolean("Row condensed", false),
			gridCondensed: boolean("Grid condensed", false)
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_grid.griddirective.html"></ibm-documentation>
		`
	}));
