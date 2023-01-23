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
			<a href="https://builder.carbondesignsystem.com/from-json/%7B%22&#13;
			title%22%3A%22Number%20input%22%2C%22data%22%3A%7B%22items%22%3A&#13;
			%5B%7B%22type%22%3A%22number-input%22%2C%22size%22%3A%22md%22%2C%22label&#13;
			%22%3A%22Number%20input%20label%22%2C%22min%22%3A0%2C%22max%22%3A100%2C&#13;
			%22step%22%3A10%2C%22helperText%22%3A%22Helper%20text%22%2C%22id%22%3A%222&#13;
			%22%2C%22codeContext%22%3A%7B%22name%22%3A%22number-input-2%22%7D%7D%5D&#13;
			%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
				Edit on Carbon UI Builder
			</a>
			<br><br>
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
			invalid: boolean("Show form validation (invalid)", false),
			disabled: boolean("disabled", false)
		}
	}))
	.add("With ngModel", () => ({
		template: `
			<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title&#13;
			%22%3A%22Number%20input%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22&#13;
			type%22%3A%22number-input%22%2C%22size%22%3A%22md%22%2C%22label%22&#13;
			%3A%22Number%20input%20label%22%2C%22min%22%3A0%2C%22max%22%3A100%&#13;
			2C%22step%22%3A10%2C%22helperText%22%3A%22Helper%20text%22%2C%22id&#13;
			%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22%3A%22number-input-2&#13;
			%22%7D%7D%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
				Edit on Carbon UI Builder
			</a>
			<br><br>
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
			<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22&#13;
			%3A%22Number%20input%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22&#13;
			%3A%22number-input%22%2C%22size%22%3A%22md%22%2C%22label%22%3A%22Number%&#13;
			20input%20label%22%2C%22min%22%3A0%2C%22max%22%3A100%2C%22step%22%3A10%2C&#13;
			%22helperText%22%3A%22Helper%20text%22%2C%22id%22%3A%222%22%2C%22&#13;
			codeContext%22%3A%7B%22name%22%3A%22number-input-2%22%7D%7D%5D%&#13;
			2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
				Edit on Carbon UI Builder
			</a>
			<br><br>
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
