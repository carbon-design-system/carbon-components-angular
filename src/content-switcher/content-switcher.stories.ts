import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs/angular";

import { ContentSwitcherModule } from "./content-switcher.module";
import { DocumentationModule } from "../documentation-component/documentation.module";

storiesOf("Components|Content Switcher", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				ContentSwitcherModule,
				DocumentationModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-content-switcher (selected)="selected($event)">
				<button ibmContentOption name="First">First section</button>
				<button ibmContentOption name="Second">Second section</button>
				<button ibmContentOption name="Third">Third section</button>
			</ibm-content-switcher>
		`,
		props: {
			selected: action("selection changed")
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/ContentSwitcher.html"></ibm-documentation>
		`
	}));
