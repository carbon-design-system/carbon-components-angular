/* tslint:disable variable-name */

import { FormsModule } from "@angular/forms";
import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { TimePickerSelectModule, TimePickerSelect } from "./";

export default {
	title: "Components/Timepicker Select",
	decorators: [
		moduleMetadata({
			imports: [
				TimePickerSelectModule,
				FormsModule
			]
		})
	],
	component: TimePickerSelect
} as Meta;

const Template: Story<TimePickerSelect> = (args) => ({
	props: args,
	template: `
		<div class="cds--form-item">
			<div class="cds--time-picker">
				<cds-timepicker-select>
					<option selected value="AM">AM</option>
					<option value="PM">PM</option>
				</cds-timepicker-select>
				<cds-timepicker-select>
					<option selected value="Time Zone 1">Time Zone 1</option>
					<option value="Time Zone 2">Time Zone 2</option>
				</cds-timepicker-select>
			</div>
		</div>
	`
});
export const Basic = Template.bind({});
