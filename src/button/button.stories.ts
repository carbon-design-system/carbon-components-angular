import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, select } from "@storybook/addon-knobs/angular";

import { ButtonModule } from "../";
import { DocumentationModule } from "../documentation-component/documentation.module";

import { AddModule, CopyModule } from "@carbon/icons-angular";


storiesOf("Components|Button", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				AddModule,
				ButtonModule,
				CopyModule,
				DocumentationModule
			]
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
				With icon<svg class="bx--btn__icon" ibmIconAdd size="20"></svg>
			</button>
		`,
		props: {
			ibmButton: select("Button kind", ["primary", "secondary", "tertiary", "ghost", "danger", "danger--primary"], "primary"),
			size: select("Size of the buttons", ["normal", "sm", "field"], "normal")
		}
	}))
	.add("Icon only", () => ({
		template: `
			<button
				[ibmButton]="ibmButton"
				[size]="size"
				[iconOnly]="true"
				[hasAssistiveText]="true"
				[assistiveTextPlacement]="assistiveTextPlacement"
				[assistiveTextAlignment]="assistiveTextAlignment">
				<svg class="bx--btn__icon" ibmIconCopy size="20"></svg>
				<span class="bx--assistive-text">Icon description</span>
			</button>
		`,
		props: {
			ibmButton: select("Button kind", ["primary", "secondary", "tertiary", "ghost", "danger", "danger--primary"], "tertiary"),
			size: select("Size of the buttons", ["normal", "sm", "field"], "normal"),
			assistiveTextPlacement: select("Placement of assistive text", ["top", "bottom", "left", "right"], "top"),
			assistiveTextAlignment: select("Alignment of assistive text", ["center", "start", "end"], "center")
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
