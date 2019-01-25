import { DatePickerInputModule } from "./datepicker-input.module";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, object } from "@storybook/addon-knobs/angular";



storiesOf("DatePickerInput", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				DatePickerInputModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Simple", () => ({
		template: `
		<ibm-date-picker-input >
		</ibm-date-picker-input>
		`
	}));


