import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean, select } from "@storybook/addon-knobs/angular";

import { NumberModule } from "../";

storiesOf("Number", module).addDecorator(
	moduleMetadata({
		imports: [NumberModule]
	})
)
	.addDecorator(withKnobs)
	.add("Number input", () => ({
		template: `
			<div style="width: 250px;">
				<ibm-number [theme]="theme" [disabled]="disabled"></ibm-number>
			</div>
		`,
		props: {
			theme: select("theme", ["dark", "light"], "dark"),
			disabled: boolean("disabled", false)
		}
	}));
