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
			<ibm-toggle [disabled]="disabled" [checked]="checked"></ibm-toggle>
		`,
		props: {
			disabled: boolean("disabled", false),
			checked: boolean("checked", false)
		}

	}))
	.add("Small", () => ({
		template: `
			<ibm-toggle [disabled]="disabled" [checked]="checked" size="sm"></ibm-toggle>
		`,
		props: {
			disabled: boolean("disabled", false),
			checked: boolean("checked", false)
		}
	}));
