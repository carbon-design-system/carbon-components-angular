import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";

import { NFormsModule } from "../";

storiesOf("Forms", module).addDecorator(
		moduleMetadata({
			imports: [NFormsModule]
		})
	)
	.addDecorator(withKnobs)
	.add("Checkbox", () => ({
		template: `
		<ibm-checkbox
			[checked]="checked"
			[disabled]="disabled"
			[indeterminate]="indeterminate"
			(change)="onChange($event)"
			(indeterminateChange)="onIndeterminateChange($event)">
			Checkbox
		</ibm-checkbox>
	`,
		props: {
			checked: boolean("checked", false),
			disabled: boolean("disabled", false),
			indeterminate: boolean("indeterminate", false),
			onChange: action("Change fired!"),
			onIndeterminateChange: action("Indeterminate change fired!")
		}
	}))
	.add("Radio", () => ({
		template: `
		<ibm-radio-group>
			<ibm-radio>one</ibm-radio>
			<ibm-radio>two</ibm-radio>
		</ibm-radio-group>
	`
	}))
	.add("Label", () => ({
		template: `
		<ibm-label>
			Some Title
			<input type="text" class="bx--text-input" placeholder="Optional placeholder text">
		</ibm-label>
	`,
		styleUrls: ["./../../node_modules/carbon-components/scss/components/text-input/_text-input.scss"]
	}))
	.add("Switch", () => ({
		template: `<ibm-switch></ibm-switch>`
	}));
