import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs/angular";

import { SelectModule } from "../";

storiesOf("Select", module).addDecorator(
	moduleMetadata({
		imports: [SelectModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<ibm-select>
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
	`
	}))
	.add("With ngModel", () => ({
		template: `
			<ibm-select [(ngModel)]="model">
				<option value="default" disabled selected hidden>Choose an option</option>
				<option value="option1">Option 1</option>
				<option value="option2">Option 2</option>
				<option value="option3">Option 3</option>
			</ibm-select>
			<br>
			<span>Selected: {{ model }}</span>
		`,
		props: {
			model: "default"
		}
	}));
