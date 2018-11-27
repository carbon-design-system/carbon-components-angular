import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean, number, select } from "@storybook/addon-knobs/angular";

import { NumberModule } from "../";

storiesOf("Number", module).addDecorator(
	moduleMetadata({
		imports: [NumberModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<div style="width: 250px;">
				<ibm-number
					label="Number Input label"
					[theme]="theme"
					[min]="min"
					[max]="max"
					[disabled]="disabled"></ibm-number>
			</div>
		`,
		props: {
			theme: select("theme", ["dark", "light"], "dark"),
			min: number("min", 0),
			max: number("max", 100),
			disabled: boolean("disabled", false)
		}
	}))
	.add("With no label", () => ({
		template: `
			<div style="width: 250px;">
				<ibm-number
					[theme]="theme"
					[min]="min"
					[max]="max"
					[disabled]="disabled"></ibm-number>
			</div>
		`,
		props: {
			theme: select("theme", ["dark", "light"], "dark"),
			min: number("min", 0),
			max: number("max", 100),
			disabled: boolean("disabled", false)
		}
	}))
	.add("With helper text", () => ({
		template: `
			<div style="width: 250px;">
				<ibm-number
					label="Number Input label"
					helperText="Optional helper text here"
					[theme]="theme"
					[min]="min"
					[max]="max"
					[disabled]="disabled"></ibm-number>
			</div>
		`,
		props: {
			theme: select("theme", ["dark", "light"], "dark"),
			min: number("min", 0),
			max: number("max", 100),
			disabled: boolean("disabled", false)
		}
	}));
