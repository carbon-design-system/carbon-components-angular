import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean, select } from "@storybook/addon-knobs/angular";

import { ToggleModule } from "../";

storiesOf("Toggle", module).addDecorator(
	moduleMetadata({
		imports: [ToggleModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-toggle [disabled]="disabled" [checked]="checked" [size]="size"></ibm-toggle>
		`,
		props: {
			disabled: boolean("disabled", false),
			checked: boolean("checked", false),
			size: select("size", ["md", "sm"], "md")
		}
	}));
