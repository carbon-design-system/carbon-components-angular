import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import {
	withKnobs,
	text,
	boolean,
	select,
	number
} from "@storybook/addon-knobs/angular";

import { InputModule } from ".";
import { IconModule } from "../icon/icon.module";
import { DocumentationModule } from "../documentation-component/documentation.module";

storiesOf("Components|Input", module).addDecorator(
	moduleMetadata({
		imports: [InputModule, IconModule, DocumentationModule]
	})
)
	.addDecorator(withKnobs)
	.add("Label", () => ({
		template: `
		<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22&#13;
		%3A%22Text%20input%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22&#13;
		%3A%22text-input%22%2C%22label%22%3A%22Text%20input%20label%22%2C%22&#13;
		placeholder%22%3A%22Text%20input%20placeholder%22%2C%22helperText%22&#13;
		%3A%22Helper%20text%22%2C%22inputType%22%3A%22text%22%2C%22id%22%3A%222&#13;
		%22%2C%22codeContext%22%3A%7B%22name%22%3A%22text-input-2%22%7D%7D%5D%2C&#13;
		%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
			Edit on Carbon UI Builder
		</a>
		<br><br>
		<ibm-label
			[size]="size"
			[disabled]="disabled"
			[readonly]="readonly"
			[inline]="inline"
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
				[readonly]="readonly"
				[theme]="theme"
				[placeholder]="placeholder"
				[autocomplete]="autocomplete">
		</ibm-label>
	`,
		props: {
			theme: select("Theme", ["dark", "light"], "dark"),
			size: select("Size", ["sm", "md", "xl"], "md"),
			disabled: boolean("Disabled", false),
			readonly: boolean("Read-only", false),
			inline: boolean("Inline", false),
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
	.add("Label with template", () => ({
		template: `
		<ng-template #helperTextTemplate let-type="type">
			<div style="display: flex; align-items: center">
				<svg ibmIcon="bee" size="16" class="bx--btn__icon" fill="#0043ce"></svg>
				<span style="margin-left: 0.25rem;">My helper text</span>
			</div>
		</ng-template>
		<ng-template #invalidTextTemplate>
			<div style="display: flex; align-items: center">
				<svg ibmIcon="bee" size="16" class="bx--btn__icon" fill="#da1e28"></svg>
				<span style="margin-left: 0.25rem;">My invalid text</span>
			</div>
		</ng-template>
		<ng-template #warningTextTemplate>
			<div style="display: flex; align-items: center">
				<svg ibmIcon="bee" size="16" class="bx--btn__icon" fill="#f1c21b"></svg>
				<span style="margin-left: 0.25rem;">My warning text</span>
			</div>
		</ng-template>
		<ibm-label
			[size]="size"
			[disabled]="disabled"
			[readonly]="readonly"
			[inline]="inline"
			[helperText]="helperTextTemplate"
			[invalid]="invalid"
			[invalidText]="invalidTextTemplate"
			[warn]="warn"
			[warnText]="warningTextTemplate">
			{{label}}
			<input
				ibmText
				[size]="size"
				[invalid]="invalid"
				[warn]="warn"
				[disabled]="disabled"
				[readonly]="readonly"
				[theme]="theme"
				[placeholder]="placeholder"
				[autocomplete]="autocomplete">
		</ibm-label>
	`,
		props: {
			theme: select("Theme", ["dark", "light"], "dark"),
			size: select("Size", ["sm", "md", "xl"], "md"),
			disabled: boolean("Disabled", false),
			readonly: boolean("Read-only", false),
			inline: boolean("Inline", false),
			invalid: boolean("Show form validation", false),
			warn: boolean("Show the warning state", false),
			label: text("Label", "Text Input label"),
			placeholder: text("Placeholder text", "Placeholder text"),
			autocomplete: text("autocomplete", "on")
		}
	}))
	.add("TextArea", () => ({
		template: `
		<ibm-label
			[size]="size"
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
			// readonly: boolean("Read-only", false),   // not supported for TextArea
			// inline: boolean("Inline", false),   // not supported for TextArea
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
