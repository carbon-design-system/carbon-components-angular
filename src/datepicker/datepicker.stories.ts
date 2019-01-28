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
	.add("Single", () => ({
		template: `
		<ibm-date-picker
			label="Date Picker Label"
			(selectDates)="selectDates($event)">
		</ibm-date-picker>
		`,
		props: {
			selectDates: action("Date change fired!")
		}
	}))
	.add("Range", () => ({
		template: `
		<ibm-date-picker
		label="Date Picker Label"
		label2="Date Picker Label2"
		range="true"
		(selectDates)="selectDates($event)">
		</ibm-date-picker>
		`,
		props: {
			selectDates: action("Date change fired!")
		}
	}));


