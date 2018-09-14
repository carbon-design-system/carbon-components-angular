import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, object } from "@storybook/addon-knobs/angular";

import { PillInputModule } from "../pill-input/pill-input.module";

storiesOf("Tag", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				PillInputModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-tag [showCloseIcon]=false>IBM</ibm-tag>
			<br><br>
			<ibm-tag [showCloseIcon]=false type="beta">Beta</ibm-tag>
			<br><br>
			<ibm-tag [showCloseIcon]=false type="community">Community</ibm-tag>
			<br><br>
			<ibm-tag [showCloseIcon]=false type="custom">Custom</ibm-tag>
			<br><br>
			<ibm-tag [showCloseIcon]=false type="dedicated">Dedicated</ibm-tag>
			<br><br>
			<ibm-tag [showCloseIcon]=false type="experimental">Experimental</ibm-tag>
			<br><br>
			<ibm-tag [showCloseIcon]=false type="local">Local</ibm-tag>
			<br><br>
			<ibm-tag [showCloseIcon]=false type="private">Private</ibm-tag>
			<br><br>
			<ibm-tag [showCloseIcon]=false type="third-party">Third-party</ibm-tag>
		`,
		props: {
			item:
				{
					content: "one",
					selected: false
				}
		}
	}));
