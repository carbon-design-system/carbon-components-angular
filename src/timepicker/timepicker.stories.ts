import { action } from "@storybook/addon-actions";
import { TimePickerSelectModule } from "../timepicker-select/timepicker-select.module";
import { TimePickerModule } from "./timepicker.module";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import {
	withKnobs,
	boolean,
	text,
	select
} from "@storybook/addon-knobs/angular";
import { ExperimentalModule, DocumentationModule } from "../";

storiesOf("Time Picker", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				TimePickerModule,
				ExperimentalModule,
				TimePickerSelectModule,
				DocumentationModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Simple", () => ({
		template: `
		<ibm-timepicker [theme]="theme" (valueChange)="timePickerChange($event)" [value]="value" [disabled]="disableTime" label="Select a time">
			<ibm-timepicker-select [theme]="theme" (valueChange)="timePickerSelectChange($event)" [disabled]="disabledSelect" display="inline">
				<option selected value="AM">AM</option>
				<option value="PM">PM</option>
			</ibm-timepicker-select>
			<ibm-timepicker-select [theme]="theme" (valueChange)="timePickerSelectChange($event)" [disabled]="disabledSelect" display="inline">
				<option selected value="Time Zone 1">Time Zone 1</option>
				<option value="Time Zone 2">Time Zone 2</option>
			</ibm-timepicker-select>
		</ibm-timepicker>

		`,
		props: {
			timePickerChange : action("Time picker change fired"),
			timePickerSelectChange: action("Time picker select change fired"),
			value: text("Time in 12hr format", "12:12"),
			disableTime: boolean("disabled time", false),
			disabledSelect: boolean("disabled selects", false),
			theme: select("Theme", ["dark", "light"], "dark")
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/TimePicker.html"></ibm-documentation>
		`
	}));
