import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";

import { SwitchModule } from "../";

storiesOf("Switch", module).addDecorator(
	moduleMetadata({
		imports: [SwitchModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `<ibm-switch [disabled]="disabled"></ibm-switch>`,
		props: {
			disabled: boolean("disabled", false)
		}
	}));
