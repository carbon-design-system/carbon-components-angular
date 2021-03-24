import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean, number, select, text } from "@storybook/addon-knobs/angular";

import { NumberModule } from "../";
import { DocumentationModule } from "../documentation-component/documentation.module";

storiesOf("Components|Number", module).addDecorator(
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
				[step]="step"
				[precision]="precision"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[warn]="warn"
				[warnText]="warnText"
				[size]="size"
				[disabled]="disabled">
			</ibm-number>
		`,
		props: {
			label: text("label", "Number Input Label"),
			size: select("Size", ["sm", "md", "xl"], "md"),
			helperText: text("helper text", "Optional helper text."),
			invalidText: text("Form validation content", "Invalid number"),
			warn: boolean("Show the warning state", false),
			warnText: text("Text for the warning", "This is a warning"),
			theme: select("theme", ["dark", "light"], "dark"),
			min: number("min", 0),
			max: number("max", 100),
			step: number("step", 1),
			precision: number("precision"),
			invalid: boolean("Show form validation", false),
			disabled: boolean("disabled", false)
		}
	}))
	.add("With ngModel", () => ({
		template: `
			<ibm-number
				[label]="label"
				[helperText]="[helperText]"
				[theme]="theme"
				[min]="min"
				[size]="size"
				[max]="max"
				[step]="step"
				[precision]="precision"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[disabled]="disabled"
				[(ngModel)]="value">
			</ibm-number>
			{{ value }}
		`,
		props: {
			value: 0,
			label: text("label", "Number Input Label"),
			size: select("Size", ["sm", "md", "xl"], "md"),
			helperText: text("helper text", "Optional helper text."),
			invalidText: text("Form validation content", "Invalid number"),
			theme: select("theme", ["dark", "light"], "dark"),
			min: number("min", 0),
			max: number("max", 100),
			step: number("step", 1),
			precision: number("precision"),
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
			<ibm-documentation src="documentation/classes/src_number_input.numbercomponent.html"></ibm-documentation>
		`
	}));
