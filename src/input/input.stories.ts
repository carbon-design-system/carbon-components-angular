import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import {
	withKnobs,
	text,
	boolean,
	select,
	number
} from "@storybook/addon-knobs/angular";

import { InputModule } from "../";
import { DocumentationModule } from "../documentation-component/documentation.module";

storiesOf("Components|Input", module).addDecorator(
	moduleMetadata({
		imports: [InputModule, DocumentationModule]
	})
)
	.addDecorator(withKnobs)
	.add("Label", () => ({
		template: `
		<ibm-label
			[disabled]="disabled"
			[helperText]="helperText"
			[invalid]="invalid"
			[invalidText]="invalidText"
			[warn]="warn"
			[disabled]="disabled"
			[warnText]="warnText">
			{{label}}
			<input
				ibmText
				[size]="size"
				[invalid]="invalid"
				[warn]="warn"
				[disabled]="disabled"
				[theme]="theme"
				[placeholder]="placeholder"
				[autocomplete]="autocomplete">
		</ibm-label>
	`,
		props: {
			theme: select("Theme", ["dark", "light"], "dark"),
			size: select("Size", ["sm", "md", "lg"], "md"),
			disabled: boolean("Disabled", false),
			invalid: boolean("Show form validation", false),
			invalidText: text("Form validation content", "Validation message here"),
			warn: boolean("Show the warning state", false),
			warnText: text("Text for the warning", "This is a warning"),
			label: text("Label", "Text Input label"),
			helperText: text("Helper text", "Optional helper text."),
			placeholder: text("Placeholder text", "Placeholder text"),
			autocomplete: text("autocomplete", "on")
		}
	}))
	.add("TextArea", () => ({
		template: `
		<ibm-label
			[disabled]="disabled"
			[helperText]="helperText"
			[invalid]="invalid"
			[disabled]="disabled"
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
			<ibm-documentation src="documentation/classes/src_input.label.html"></ibm-documentation>
		`
	}));
