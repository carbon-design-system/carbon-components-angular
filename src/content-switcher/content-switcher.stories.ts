import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, object } from "@storybook/addon-knobs/angular";

import { ContentSwitcherModule } from "../";


storiesOf("Content Switcher", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				ContentSwitcherModule,
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-content-switcher (selected)="selected($event)">
				<button ibmContentOption>First section</button>
				<button ibmContentOption>Second section</button>
				<button ibmContentOption>Third section</button>
			</ibm-content-switcher>
		`,
		props: {
			selected: action("selection changed")
		}
	}));
