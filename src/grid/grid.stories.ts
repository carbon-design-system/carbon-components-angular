import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, object } from "@storybook/addon-knobs/angular";

import { GridModule } from "../";

storiesOf("Grid", module)
	.addDecorator(
		moduleMetadata({
			imports: [GridModule]
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
	}));
