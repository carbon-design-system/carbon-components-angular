import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, object } from "@storybook/addon-knobs/angular";

import { GridModule } from "../";
import { DocumentationModule } from "./../documentation-component/documentation.module";

storiesOf("Grid", module)
	.addDecorator(
		moduleMetadata({
			imports: [GridModule, DocumentationModule]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
        	<div ibmGrid>
            	<div ibmRow>
              		<div ibmCol class="custom-class-example" [columnNumbers]="{'md':3, 'sm': 12}">First Column</div>
              		<div ibmCol class="custom-class-example" [columnNumbers]="{'md':3, 'sm': 12}">Second column</div>
            	</div>
         	</div>
		`
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/directives/GridDirective.html"></ibm-documentation>
		`
	}));
