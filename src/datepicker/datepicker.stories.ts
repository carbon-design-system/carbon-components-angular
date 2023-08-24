/* tslint:disable variable-name */

import { moduleMetadata, Meta, Story  } from "@storybook/angular";
import { DatePickerModule, DatePicker } from "./";

export default {
	title: "Components/Date Picker",
	decorators: [
		moduleMetadata({
			imports: [DatePickerModule]
		})
	],
	args: {
		label: "Label text",
		placeholder: "mm/dd/yyyy",
		invalidText: "Invalid date format",
		invalid: false,
		warnText: "This is a warning",
		warn: false,
		disabled: false,
		language: "en"
	},
	argTypes: {
		theme: {
			options: ["light", "dark"],
			defaultValue: "dark",
			control: "radio"
		},
		size: {
			options: ["sm", "md", "lg"],
			defaultValue: "md",
			control: "radio"
		},
		valueChange: {
			action: "Date changed!"
		}
	},
	component: DatePicker
} as Meta;

const Template: Story<DatePicker> = (args) => ({
	props: args,
	template: `
		<cds-date-picker-input
			[theme]="theme"
			[label]="label"
			[placeholder]="placeholder"
			[disabled]="disabled"
			[size]="size"
			[invalid]="invalid"
			[invalidText]="invalidText"
			[warn]="warn"
			[warnText]="warnText"
			(valueChange)="valueChange($event)">
		</cds-date-picker-input>
	`
});
export const Basic = Template.bind({});

const SingleTemplate: Story<DatePicker> = (args) => ({
	props: args,
	template: `
		<p>With initial value</p>
		<cds-date-picker
			[label]="label"
			id="initial-value-datepicker"
			[placeholder]="placeholder"
			[language]="language"
			[size]="size"
			[theme]="theme"
			[value]="value"
			[disabled]="disabled"
			[invalid]="invalid"
			[invalidText]="invalidText"
			[warn]="warn"
			[warnText]="warnText"
			[dateFormat]="dateFormat"
			(valueChange)="valueChange($event)">
		</cds-date-picker>
		<p style="margin-top: 20px;">Without initial value</p>
		<cds-date-picker
			[label]="label"
			[placeholder]="placeholder"
			[language]="language"
			[size]="size"
			[theme]="theme"
			[disabled]="disabled"
			[invalid]="invalid"
			[invalidText]="invalidText"
			[warn]="warn"
			[warnText]="warnText"
			[dateFormat]="dateFormat"
			(valueChange)="valueChange($event)">
		</cds-date-picker>
	`
});
export const Single = SingleTemplate.bind({});
Single.args = {
	dateFormat: "m/d/y"
};
Single.argTypes = {
	language: {
		options: ["en", "de", "fi", "ja", "zh", "es", "fr", "it", "ko", "pt"],
		defaultValue: "en",
		control: "select"
	}
};

const RangeTemplate: Story<DatePicker> = (args) => ({
	props: args,
	template: `
		<p>With initial value</p>
		<cds-date-picker
			[label]="label"
			[rangeLabel]="label"
			[size]="size"
			range="true"
			id="initial-value-datepicker"
			[placeholder]="placeholder"
			[language]="language"
			[theme]="theme"
			[disabled]="disabled"
			[invalid]="invalid"
			[invalidText]="invalidText"
			[warn]="warn"
			[warnText]="warnText"
			[rangeInvalid]="invalid"
			[rangeInvalidText]="invalidText"
			[dateFormat]="dateFormat"
			[value]="value"
			(valueChange)="valueChange($event)"
			[helperText]="helperText">
		</cds-date-picker>
		<p style="margin-top: 20px;">Without initial value</p>
		<cds-date-picker
			[label]="label"
			[rangeLabel]="label"
			[size]="size"
			range="true"
			[language]="language"
			[placeholder]="placeholder"
			[theme]="theme"
			[disabled]="disabled"
			[invalid]="invalid"
			[invalidText]="invalidText"
			[warn]="warn"
			[warnText]="warnText"
			[rangeWarn]="warn"
			[rangeWarnText]="warnText"
			[dateFormat]="dateFormat"
			(valueChange)="valueChange($event)"
			[helperText]="helperText">
		</cds-date-picker>
	`
});
export const Range = RangeTemplate.bind({});
Range.args = {
	dateFormat: "d/m/Y",
	value: [new Date("01 Feb 24"), new Date("29 Feb 24")],
	language: "en"
};
Range.argTypes = {
	language: {
		options: ["en", "de", "fi", "ja", "zh", "es", "fr", "it", "ko", "pt"],
		control: "select"
	}
};

const SkeletonTemplate: Story<DatePicker> = (args) => ({
	props: args,
	template: `
	<cds-date-picker
		range="true"
		skeleton="true">
	</cds-date-picker>
	`
});
export const Skeleton = SkeletonTemplate.bind({});
