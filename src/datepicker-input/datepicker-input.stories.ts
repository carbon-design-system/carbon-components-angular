import { DatePickerInputModule } from "./datepicker-input.module";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs/angular";

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
		<ibm-date-picker-input label="Date Picker Label"></ibm-date-picker-input>
		`
	}));
