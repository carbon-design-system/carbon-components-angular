import { TimePickerSelectModule } from "./timepicker-select.module";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs/angular";
import { ExperimentalModule } from "..";

storiesOf("Time Picker Select", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				TimePickerSelectModule,
				ExperimentalModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Simple", () => ({
		template: `
		<app-experimental-component></app-experimental-component>
		<div class="bx--form-item">
			<div class="bx--time-picker">
				<ibm-timepicker-select>
					<option selected value="AM">AM</option>
					<option value="PM">PM</option>
				</ibm-timepicker-select>
				<ibm-timepicker-select>
					<option selected value="Time Zone 1">Time Zone 1</option>
					<option value="Time Zone 2">Time Zone 2</option>
				</ibm-timepicker-select>
			</div>
		</div>
		`
	}));
