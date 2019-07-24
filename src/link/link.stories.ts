import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";

import { LinkModule, DocumentationModule } from "../";

storiesOf("Link", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				LinkModule,
				DocumentationModule
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
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/directives/Link.html"></ibm-documentation>
		`
	}));
