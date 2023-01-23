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
		<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22%3A%22Text%20input%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22%3A%22text-input%22%2C%22label%22%3A%22Text%20input%20label%22%2C%22placeholder%22%3A%22Text%20input%20placeholder%22%2C%22helperText%22%3A%22Helper%20text%22%2C%22inputType%22%3A%22text%22%2C%22id%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22%3A%22text-input-2%22%7D%7D%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
			Edit on Carbon UI Builder
		</a>
		<br><br>
		<ibm-label
			[disabled]="disabled"
			[helperText]="helperText"
			[invalid]="invalid"
			[invalidText]="invalidText"
			[warn]="warn"
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
			size: select("Size", ["sm", "md", "xl"], "md"),
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
		<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22%3A%22Text%20area%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22%3A%22text-area%22%2C%22label%22%3A%22Text%20area%20label%22%2C%22placeholder%22%3A%22Text%20area%20placeholder%22%2C%22helperText%22%3A%22Helper%20text%22%2C%22id%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22%3A%22text-area-2%22%7D%7D%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
			Edit on Carbon UI Builder
		</a>
		<br><br>
		<ibm-label
			[disabled]="disabled"
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
		<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22%3A%22Text%20input%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22%3A%22text-input%22%2C%22label%22%3A%22Text%20input%20label%22%2C%22placeholder%22%3A%22Text%20input%20placeholder%22%2C%22helperText%22%3A%22Helper%20text%22%2C%22inputType%22%3A%22text%22%2C%22id%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22%3A%22text-input-2%22%7D%7D%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
			Edit on Carbon UI Builder
		</a>
		<br><br>
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
