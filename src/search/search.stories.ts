import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs/angular";

import { SearchModule } from "../";

storiesOf("Search", module).addDecorator(
	moduleMetadata({
		imports: [SearchModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<div style="width: 250px;">
			<ibm-search [size]="'lg'"></ibm-search>
		</div>
		`
	}))
	.add("Small", () => ({
		template: `
		<div style="width: 250px;">
			<ibm-search [size]="'sm'"></ibm-search>
		</div>
		`
	}));
