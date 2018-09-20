import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs/angular";

import { TagModule } from "../tag/tag.module";

storiesOf("Tag", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				TagModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-tag>IBM</ibm-tag>
			<br><br>
			<ibm-tag type="beta">Beta</ibm-tag>
			<br><br>
			<ibm-tag type="community">Community</ibm-tag>
			<br><br>
			<ibm-tag type="custom">Custom</ibm-tag>
			<br><br>
			<ibm-tag type="dedicated">Dedicated</ibm-tag>
			<br><br>
			<ibm-tag type="experimental">Experimental</ibm-tag>
			<br><br>
			<ibm-tag type="local">Local</ibm-tag>
			<br><br>
			<ibm-tag type="private">Private</ibm-tag>
			<br><br>
			<ibm-tag type="third-party">Third-party</ibm-tag>
		`
	}));
