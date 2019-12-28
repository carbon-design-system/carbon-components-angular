import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean, number, select, text } from "@storybook/addon-knobs/angular";

import { NumberModule, DocumentationModule } from "../";
import { I18nModule } from "../i18n/i18n.module";

storiesOf("Components|Number", module).addDecorator(
	moduleMetadata({
		imports: [NumberModule, DocumentationModule, I18nModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-number
				[label]="label"
				[helperText]="[helperText]"
				[iconDescription]="iconDescription"
				[incrementLabel]="incrementLabel"
				[decrementLabel]="decrementLabel"
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
			helperText: text("helper text", "Optional helper text."),
			iconDescription: text("icon description", "Choose a number"),
			decrementLabel: text("decrement label", "Decrement number"),
			incrementLabel: text("increment label", "Increment number"),
			invalidText: text("Form validation content", "Invalid number"),
			theme: select("theme", ["dark", "light"], "dark"),
			min: number("min", 0),
			max: number("max", 100),
			invalid: boolean("Show form validation", false),
			disabled: boolean("disabled", false)
		}
	}))
	.add("With ngModel", () => ({
		template: `
			<ibm-number
				[label]="label"
				[helperText]="[helperText]"
				[iconDescription]="iconDescription"
				[incrementLabel]="incrementLabel"
				[decrementLabel]="decrementLabel"
				[theme]="theme"
				[min]="min"
				[max]="max"
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
			helperText: text("helper text", "Optional helper text."),
			iconDescription: text("icon description", "Choose a number"),
			decrementLabel: text("decrement label", "Decrement number"),
			incrementLabel: text("increment label", "Increment number"),
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
