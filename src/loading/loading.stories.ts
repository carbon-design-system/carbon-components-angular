import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, select } from "@storybook/addon-knobs/angular";

import { LoadingModule } from "../";

storiesOf("Loading", module).addDecorator(
	moduleMetadata({
		imports: [LoadingModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<ibm-loading [isActive]="isActive" [size]="size" [overlay]="overlay"></ibm-loading>
	`,
		props: {
			isActive: boolean("Active", true),
			overlay: boolean("With overlay", false),
			size: select("Size of the loading circle", ["normal", "sm"], "normal")
		}
	}));
