import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import {
	withKnobs,
	select,
	boolean,
	text
} from "@storybook/addon-knobs/angular";

import { SelectModule } from "../";
import { DocumentationModule } from "./../documentation-component/documentation.module";

storiesOf("Select", module).addDecorator(
	moduleMetadata({
		imports: [SelectModule, DocumentationModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-select
				[disabled]="disabled"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[helperText]="helperText"
				[theme]="theme"
				[display]="display">
				<option value="" disabled selected hidden>Choose an option</option>
				<option value="solong">A much longer option that is worth having around to check how text flows</option>
				<optgroup label="Category 1">
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
				</optgroup>
				<optgroup label="Category 2">
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
				</optgroup>
			</ibm-select>
	`,
		props: {
			disabled: boolean("Disabled", false),
			invalid: boolean("Show form validation", false),
			invalidText: text("Form validation content", "Please select an option."),
			helperText: text("Helper text", "Optional helper text."),
			theme: select("Theme", ["dark", "light"], "dark"),
			display: select("Display", ["default", "inline"], "default")
		}
	}))
	.add("With ngModel", () => ({
		template: `
			<div style="width: 165px">
				<ibm-select [(ngModel)]="model">
					<option value="default" disabled selected hidden>Choose an option</option>
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</ibm-select>
				<br>
				<span>Selected: {{ model }}</span>
			</div>
		`,
		props: {
			model: "default"
		}
	}))
	.add("Skeleton", () => ({
		template: `
		<div style="width: 300px">
			<ibm-select skeleton="true"></ibm-select>
		</div>
		`
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/Select.html"></ibm-documentation>
		`
	}));
