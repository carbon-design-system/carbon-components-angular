import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";

import { LoadingModule } from "../";

storiesOf("Loading", module).addDecorator(
	moduleMetadata({
		imports: [LoadingModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<ibm-loading [overlay]="true"></ibm-loading>
		`
	}))
	.add("Small", () => ({
		template: `
		<ibm-loading size="sm"></ibm-loading>
		`
	}));
