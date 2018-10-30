import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";

import { SwitchModule } from "../";

/**
 * Deprecated in favour of `Toggle` (to be removed in v3.0).
 *
 * @deprecated
 */
storiesOf("Switch", module).addDecorator(
	moduleMetadata({
		imports: [SwitchModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-switch [disabled]="disabled"></ibm-switch>
			<ibm-switch [disabled]="disabled" size="sm"></ibm-switch>
		`,
		props: {
			disabled: boolean("disabled", false)
		}
	}));
