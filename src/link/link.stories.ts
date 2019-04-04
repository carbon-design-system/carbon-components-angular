import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";

import { LinkModule } from "../";

storiesOf("Link", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				LinkModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<a href="#" ibmLink [disabled]="disabled">link</a>
		`,
		props: {
			disabled: boolean("disabled", false)
		}
	}));
