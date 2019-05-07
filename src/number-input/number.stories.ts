import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean, number, select, text } from "@storybook/addon-knobs/angular";

import { NumberModule } from "../";
import { DocumentationModule } from "./../documentation-component/documentation.module";

storiesOf("Number", module).addDecorator(
	moduleMetadata({
		imports: [NumberModule, DocumentationModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-number
				[label]="label"
				[helperText]="[helperText]"
				[theme]="theme"
				[min]="min"
				[max]="max"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[disabled]="disabled">
			</ibm-number>
		`,
		props: {
			label: text("label", "Number Input Label"),
			helperText: text("helper text", "Optional helper text here"),
			invalidText: text("Form validation content", "Invalid number"),
			theme: select("theme", ["dark", "light"], "dark"),
			min: number("min", 0),
			max: number("max", 100),
			invalid: boolean("Show form validation", false),
			disabled: boolean("disabled", false)
		}
	}))
	.add("Skeleton", () => ({
		template: `
			<ibm-number [label]="label" skeleton="true"></ibm-number>
		`,
		props: {
			label: text("label", "Number Input Label")
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/Number.html"></ibm-documentation>
		`
	}));
