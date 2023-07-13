/* tslint:disable variable-name */

import { FormsModule } from "@angular/forms";
import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { TimePickerModule, TimePicker } from "./";
import { TimePickerSelectModule } from "../timepicker-select";

export default {
	title: "Components/Timepicker",
	decorators: [
		moduleMetadata({
			imports: [
				TimePickerModule,
				TimePickerSelectModule,
				FormsModule
			]
		})
	],
	component: TimePicker
} as Meta;

const Template: Story<TimePicker> = (args) => ({
	props: args,
	template: `
		<cds-timepicker
			(valueChange)="timePickerChange($event)"
			[(ngModel)]="model"
			[disabled]="disableTime"
			[invalid]="invalid"
			[invalidText]="invalidText"
			label="Select a time">
			<cds-timepicker-select
				(valueChange)="timePickerSelectChange($event)"
				[disabled]="disabledSelect"
				[(ngModel)]="period"
				ariaLabel="Open list of options">
				<option selected value="AM">AM</option>
				<option value="PM">PM</option>
			</cds-timepicker-select>
			<cds-timepicker-select
				(valueChange)="timePickerSelectChange($event)"
				[disabled]="disabledSelect"
				[(ngModel)]="timeZone"
				ariaLabel="Open list of options">
				<option selected value="Time Zone 1">Time Zone 1</option>
				<option value="Time Zone 2">Time Zone 2</option>
			</cds-timepicker-select>
		</cds-timepicker>
		<br>
		<p> Input: {{model}} </p>
		<p> Period: {{period}} </p>
		<p> Time Zone: {{timeZone}} </p>
	`
});
export const Basic = Template.bind({});
Basic.args = {
	model: "12:12",
	period: "AM",
	timeZone: "Time Zone 1",
	disableTime: false,
	disabledSelect: false,
	invalid: false,
	invalidText: "A valid value is required!"
};

Basic.argTypes = {
	timePickerChange: {
		action: "Time picker value changed!"
	},
	timePickerSelectChange: {
		action: "Time picker select change fired!"
	},
	theme: {
		options: ["light", "dark"],
		defaultValue: "dark",
		control: "radio"
	}
};
