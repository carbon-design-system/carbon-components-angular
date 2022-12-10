import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { select, withKnobs } from "@storybook/addon-knobs/angular";

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
			<ibm-content-switcher
				(selected)="selected($event)"
				[theme]="theme"
				[size]="size">
				<button ibmContentOption name="First">First section</button>
				<button ibmContentOption name="Second">Second section</button>
				<button ibmContentOption name="Third">Third section</button>
			</ibm-content-switcher>
		`,
		props: {
			selected: action("selection changed"),
			theme: select("theme", ["dark", "light"], "dark"),
			size: select("size", ["sm", "md", "lg"], "md")
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_content_switcher.contentswitcher.html"></ibm-documentation>
		`
	}));
