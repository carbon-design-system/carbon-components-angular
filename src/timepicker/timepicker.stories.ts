import { TimePickerSelectModule } from "../timepicker-select/timepicker-select.module";
import { TimePickerModule } from "./timepicker.module";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/angular";
import { ExperimentalComponenent } from "../../.storybook/experimental.component";
import { ExperimentalModule } from "..";

storiesOf("Time Picker", module)
	.addDecorator(
		moduleMetadata({
			declarations: [ExperimentalComponenent],
			imports: [
				TimePickerModule,
				ExperimentalModule,
				TimePickerSelectModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Simple", () => ({
		template: `
		<app-experimental-component></app-experimental-component>
		<ibm-timepicker [value]="value" [disabled]="disableTime" label="Select a time">
			<ibm-timepicker-select [disabled]="disabledSelect" display="inline">
				<option value="" disabled selected hidden>AM</option>
				<option value="AM">AM</option>
				<option value="PM">PM</option>
			</ibm-timepicker-select>
			<ibm-timepicker-select [disabled]="disabledSelect" display="inline">
				<option value="" disabled selected hidden>Time Zone 1</option>
				<option value="Time Zone 1">Time Zone 1</option>
				<option value="Time Zone 2">Time Zone 2</option>
			</ibm-timepicker-select>
		</ibm-timepicker>

		`,
		props: {
			value: text("Time in 12hr format", "12:12"),
			disableTime: boolean("disabled time", false),
			disabledSelect: boolean("disabled selects", false)
		}
	}));
