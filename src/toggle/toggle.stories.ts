import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";

import { ToggleModule } from "../";

storiesOf("Toggle", module).addDecorator(
	moduleMetadata({
		imports: [ToggleModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-toggle [disabled]="disabled"></ibm-toggle>
		`,
		props: {
			disabled: boolean("disabled", false)
		}

	}))
	.add("Small", () => ({
		template: `
			<ibm-toggle [disabled]="disabled" size="sm"></ibm-toggle>
		`,
		props: {
			disabled: boolean("disabled", false)
		}
	}));
