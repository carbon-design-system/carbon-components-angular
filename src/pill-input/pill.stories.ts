import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, object } from "@storybook/addon-knobs/angular";

import { PillInputModule } from "../";

storiesOf("Pill", module)
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
            <ibm-pill [item]="items">
                Pill
			</ibm-pill>
		`,
		props: {
			item:
				{
					content: "one",
					selected: false
				}
		}
	}));
