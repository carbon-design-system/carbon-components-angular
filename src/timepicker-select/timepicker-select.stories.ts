import { TimePickerSelectModule } from "./timepicker-select.module";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { withKnobs } from "@storybook/addon-knobs/angular";
import { ExperimentalComponenent } from "../../.storybook/experimental.component";
import { ExperimentalModule } from "..";

storiesOf("Time Picker Select", module)
	.addDecorator(
		moduleMetadata({
			declarations: [ExperimentalComponenent],
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
					<option value="" disabled selected hidden>AM</option>
					<option value="AM">AM</option>
					<option value="PM">PM</option>
				</ibm-timepicker-select>
				<ibm-timepicker-select>
					<option value="" disabled selected hidden>Time Zone 1</option>
					<option value="Time Zone 1">Time Zone 1</option>
					<option value="Time Zone 2">Time Zone 2</option>
				</ibm-timepicker-select>
			</div>
		</div>
		`
	}));
