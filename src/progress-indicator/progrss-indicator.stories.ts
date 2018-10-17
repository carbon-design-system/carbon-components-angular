import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, object } from "@storybook/addon-knobs/angular";

import { ProgressIndicatorModule } from "../";

storiesOf("ProgressIndicator", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				ProgressIndicatorModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<ibm-progress-indicator [steps]="steps">
		</ibm-progress-indicator>
		`,
		props: {
			steps : [
				{
					text: "1. ONE",
					state: ["complete"]
				},
				{
					text: "2. TWO",
					state: ["complete"]
				},
				{
					text: "3. THREE",
					state: ["current"]
				},
				{
					text: "4. FOUR",
					state: ["incomplete"]
				},
				{
					text: "5. FIVE",
					state: ["incomplete"]
				},
				{
					text: "6. SIX",
					state: ["incomplete"]
				}
			]
		}
	}));
