import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, object } from "@storybook/addon-knobs/angular";

import { DatePickerModule } from "../";

storiesOf("DatePicker", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				DatePickerModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Simple", () => ({
		template: `
		<ibm-date-picker view="simple">
		</ibm-date-picker>
		`
	}))
	.add("Single", () => ({
		template: `
		<ibm-date-picker view="single">
		</ibm-date-picker>
		`
	}))
	.add("Range", () => ({
		template: `
		<ibm-date-picker view="range">
		</ibm-date-picker>
		`
	}));
