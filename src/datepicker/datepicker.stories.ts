/* tslint:disable variable-name */

import { moduleMetadata, Meta } from "@storybook/angular";
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
		readonly: false,
		language: "en",
		theme: "dark",
		size: "md"
	},
	argTypes: {
		theme: {
			options: ["light", "dark"],
			control: "radio"
		},
		size: {
			options: ["sm", "md", "lg"],
			control: "radio"
		},
		valueChange: {
			action: "Date changed!"
		}
	},
	component: DatePicker
} as Meta;

const Template = (args) => ({
	props: args,
	template: `
		<cds-date-picker-input
			[theme]="theme"
			[label]="label"
			[placeholder]="placeholder"
			[disabled]="disabled"
			[readonly]="readonly"
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

const SingleTemplate = (args) => ({
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
			[readonly]="readonly"
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
			[readonly]="readonly"
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
	dateFormat: "m/d/y",
	language: "en"
};
Single.argTypes = {
	language: {
		options: ["en", "de", "fi", "ja", "zh", "es", "fr", "it", "ko", "pt"],
		control: "select"
	}
};

const RangeTemplate = (args) => ({
	props: args,
	template: `
		<p>With initial value</p>
		<cds-date-picker
			[label]="label"
			[rangeLabel]="label"
			[size]="size"
			range="true"
			id="initial-value-range-datepicker"
			[placeholder]="placeholder"
			[language]="language"
			[theme]="theme"
			[disabled]="disabled"
			[readonly]="readonly"
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
			[readonly]="readonly"
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
	value: ["01/02/24", "08/02/24"],
	language: "en"
};
Range.argTypes = {
	language: {
		options: ["en", "de", "fi", "ja", "zh", "es", "fr", "it", "ko", "pt"],
		control: "select"
	}
};

const SkeletonTemplate = (args) => ({
	props: args,
	template: `
	<cds-date-picker
		range="true"
		skeleton="true">
	</cds-date-picker>
	`
});
export const Skeleton = SkeletonTemplate.bind({});
