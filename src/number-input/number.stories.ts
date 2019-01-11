import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean, number, select, text } from "@storybook/addon-knobs/angular";

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
					[label]="label"
					[helperText]="[helperText]"
					[theme]="theme"
					[min]="min"
					[max]="max"
					[disabled]="disabled"></ibm-number>
			</div>
		`,
		props: {
			label: text("label", "Number Input Label"),
			helperText: text("helper text", "Optional helper text here"),
			theme: select("theme", ["dark", "light"], "dark"),
			min: number("min", 0),
			max: number("max", 100),
			disabled: boolean("disabled", false)
		}
	}))
	.add("Skeleton", () => ({
		template: `
			<div style="width: 75px;">
			<ibm-number [label]="label" skeleton="true"></ibm-number>
			</div>
		`,
		props: {
			label: text("label", "Number Input Label")
		}
	}));
