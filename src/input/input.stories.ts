import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, select } from "@storybook/addon-knobs/angular";

import { InputModule, DocumentationModule } from "../";

storiesOf("Input", module).addDecorator(
	moduleMetadata({
		imports: [InputModule, DocumentationModule]
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
		<input ibmText [theme]="theme" aria-label="input" placeholder="Optional placeholder text"/>
	`,
		props: {
			theme: select("Theme", ["dark", "light"], "dark")
		}
	}))
	.add("TextArea", () => ({
		template: `
		<textarea ibmTextArea [theme]="theme" aria-label="textarea" placeholder="Optional placeholder text" rows="4" cols="50"></textarea>
	`,
		props: {
			theme: select("Theme", ["dark", "light"], "dark")
		}
	}))
	.add("Skeleton", () => ({
		template: `
		<ibm-label skeleton="true">
			<input ibmText skeleton="true">
		</ibm-label>
		<br>
		<input ibmText skeleton="true">
		<br><br>
		<ibm-label skeleton="true">
			<div ibmTextArea skeleton="true"></div>
		</ibm-label>
		`
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/Label.html"></ibm-documentation>
		`
	}));
