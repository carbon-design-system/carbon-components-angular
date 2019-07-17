import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import {
	withKnobs,
	text,
	boolean,
	select,
	number
} from "@storybook/addon-knobs/angular";

import { InputModule, DocumentationModule } from "../";

storiesOf("Input", module).addDecorator(
	moduleMetadata({
		imports: [InputModule, DocumentationModule]
	})
)
	.addDecorator(withKnobs)
	.add("Label", () => ({
		template: `
		<ibm-label
			[helperText]="helperText"
			[invalid]="invalid"
			[invalidText]="invalidText">
			{{label}}
			<input
				ibmText
				[invalid]="invalid"
				[disabled]="disabled"
				[theme]="theme"
				[placeholder]="placeholder"
				[autocomplete]="autocomplete">
		</ibm-label>
	`,
		props: {
			theme: select("Theme", ["dark", "light"], "dark"),
			disabled: boolean("Disabled", false),
			invalid: boolean("Show form validation", false),
			invalidText: text("Form validation content", "Validation message here"),
			label: text("Label", "Text Input label"),
			helperText: text("Helper text", "Optional helper text."),
			placeholder: text("Placeholder text", "Placeholder text"),
			autocomplete: text("autocomplete", "on")
		}
	}))
	.add("TextArea", () => ({
		template: `
		<ibm-label
			[helperText]="helperText"
			[invalid]="invalid"
			[invalidText]="invalidText">
			{{label}}
			<textarea
				ibmTextArea
				[placeholder]="placeholder"
				[invalid]="invalid"
				[disabled]="disabled"
				[theme]="theme"
				[rows]="rows"
				[cols]="cols"
				aria-label="textarea"></textarea>
		</ibm-label>
	`,
		props: {
			theme: select("Theme", ["dark", "light"], "dark"),
			disabled: boolean("Disabled", false),
			invalid: boolean("Show form validation", false),
			invalidText: text("Form validation content", "Validation message here"),
			label: text("Label", "Text area label"),
			helperText: text("Helper text", "Optional helper text."),
			placeholder: text("Placeholder text", "Placeholder text"),
			cols: number("cols", 50),
			rows: number("rows", 4)
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
