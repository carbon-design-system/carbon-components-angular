import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, array, select, text, boolean } from "@storybook/addon-knobs/angular";
import { DatePickerModule, ExperimentalModule } from "../";
import { DatePickerInputModule } from "./../datepicker-input/datepicker-input.module";
import { ExperimentalComponenent } from "../../.storybook/experimental.component";

storiesOf("Date Picker", module)
	.addDecorator(
		moduleMetadata({
			declarations: [ExperimentalComponenent],
			imports: [
				DatePickerModule,
				DatePickerInputModule,
				ExperimentalModule
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Simple", () => ({
		template: `
		<app-experimental-component></app-experimental-component>
		<ibm-date-picker-input
			[theme]="theme"
			[label]="label"
			[placeholder]="placeholder"
			[disabled]="disabled"
			[invalid]="invalid"
			[invalidText]="invalidText">
		</ibm-date-picker-input>
		`,
		props: {
			theme: select("Theme", ["dark", "light"], "dark"),
			label: text("Label text", "Date Picker Label"),
			placeholder: text("Placeholder text", "mm/dd/yyyy"),
			invalidText: text("Form validation content", "Invalid date format"),
			invalid: boolean("Show form validation", false),
			disabled: boolean("Disabled", false)
		}
	}))
	.add("Single", () => ({
		template: `
		<app-experimental-component></app-experimental-component>
		<ibm-date-picker
			[label]="label"
			[placeholder]="placeholder"
			[theme]="theme"
			[disabled]="disabled"
			[invalid]="invalid"
			[invalidText]="invalidText"
			(valueChange)="valueChange($event)">
		</ibm-date-picker>
		`,
		props: {
			value: array("value", [(new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear()]),
			valueChange: action("Date change fired!"),
			theme: select("Theme", ["dark", "light"], "dark"),
			label: text("Label text", "Date Picker Label"),
			placeholder: text("Placeholder text", "mm/dd/yyyy"),
			invalidText: text("Form validation content", "Invalid date format"),
			invalid: boolean("Show form validation", false),
			disabled: boolean("Disabled", false)
		}
	}))
	.add("Range", () => ({
		template: `
		<app-experimental-component></app-experimental-component>
		<ibm-date-picker
			[label]="label"
			[rangeLabel]="label"
			range="true"
			[placeholder]="placeholder"
			[theme]="theme"
			[disabled]="disabled"
			[invalid]="invalid"
			[invalidText]="invalidText"
			(valueChange)="valueChange($event)">
		</ibm-date-picker>
		`,
		props: {
			value: array("value", [
				(new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear(),
				(new Date().getMonth() + 2) + "/" + new Date().getDate() + "/" + new Date().getFullYear()
			]),
			valueChange: action("Date change fired!"),
			theme: select("Theme", ["dark", "light"], "dark"),
			label: text("Label text", "Date Picker Label"),
			placeholder: text("Placeholder text", "mm/dd/yyyy"),
			invalidText: text("Form validation content", "Invalid date format"),
			invalid: boolean("Show form validation", false),
			disabled: boolean("Disabled", false)
		}
	}))
	.add("Skeleton", () => ({
		template: `
		<app-experimental-component></app-experimental-component>
		<ibm-date-picker
			range="true"
			skeleton="true">
		</ibm-date-picker>
		`
	}));
