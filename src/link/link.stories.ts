import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";

import { LinkModule } from "../";
import { DocumentationModule } from "../documentation-component/documentation.module";

storiesOf("Components|Link", module)
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
			<a href="https://builder.carbondesignsystem.com/from-json/%7B%22&#13;
			title%22%3A%22Link%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22&#13;
			type%22%3A%22link%22%2C%22text%22%3A%22Link%22%2C%22inline%22%3Afalse&#13;
			%2C%22disabled%22%3Afalse%2C%22codeContext%22%3A%7B%22href%22%3A%22%23&#13;
			%22%2C%22name%22%3A%22link-2%22%7D%2C%22id%22%3A%222%22%7D%5D%2C%22id%&#13;
			22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
				Edit on Carbon UI Builder
			</a>
			<br><br>
			<a href="#" ibmLink [disabled]="disabled" [inline]="inline">link</a>
		`,
		props: {
			disabled: boolean("disabled", false),
			inline: boolean("inline", false)
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_link.link.html"></ibm-documentation>
		`
	}));
