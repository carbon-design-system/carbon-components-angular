import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";

import { InputModule } from "../";

storiesOf("Input", module).addDecorator(
	moduleMetadata({
		imports: [InputModule]
	})
)
	.addDecorator(withKnobs)
	.add("Label", () => ({
		template: `
		<ibm-label>
			Some Title
			<input ibmText placeholder="Optional placeholder text">
		</ibm-label>
	`
	}))
	.add("Input", () => ({
		template: `
			<input ibmText placeholder="Optional placeholder text"/>
		`
	})).add("TextArea", () => ({
		template: `
		<textarea ibmTextArea placeholder="Optional placeholder text"></textarea>
		`
	}));
