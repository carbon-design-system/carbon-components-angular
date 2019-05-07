import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, select } from "@storybook/addon-knobs/angular";

import { ButtonModule } from "../";
import { DocumentationModule } from "./../documentation-component/documentation.module";

storiesOf("Button", module)
	.addDecorator(
		moduleMetadata({
			imports: [ButtonModule, DocumentationModule]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<button [ibmButton]="ibmButton" [size]="size">Button</button>
			&nbsp;
			<button [ibmButton]="ibmButton" [size]="size" disabled="true">Button</button>
			&nbsp;
			<button [ibmButton]="ibmButton" [size]="size">
				With icon
				<svg class="bx--btn__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
					<path d="M7 7H4v2h3v3h2V9h3V7H9V4H7v3zm1 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" fill-rule="evenodd" />
				</svg>
			</button>
		`,
		props: {
			ibmButton: select("Button kind", ["primary", "secondary", "tertiary", "ghost", "danger", "danger--primary"], "primary"),
			size: select("Size of the buttons", ["normal", "sm"], "normal")
		}
	}))
	.add("Skeleton", () => ({
		template: `
			<button ibmButton skeleton="true"></button>
			&nbsp;
			<button ibmButton skeleton="true" size="sm"></button>
		`
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/directives/Button.html"></ibm-documentation>
		`
	}));
