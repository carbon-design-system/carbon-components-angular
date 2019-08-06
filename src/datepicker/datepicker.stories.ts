import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import {
	withKnobs,
	array,
	select,
	text,
	boolean
} from "@storybook/addon-knobs/angular";
import {
	FormBuilder,
	FormGroup,
	Validators,
	FormsModule,
	ReactiveFormsModule
} from "@angular/forms";
import {
	Component,
	Input,
	Output,
	EventEmitter
} from "@angular/core";
import { DatePickerModule, DocumentationModule } from "../";
import { ButtonModule } from "../forms/forms.module";

@Component({
	selector: "app-date-picker",
	template: `
		<form [formGroup]="formGroup">
			<ibm-date-picker
				formControlName="single"
				label="Date Picker Label"
				invalidText="Invalid date format"
				[invalid]="invalidSingle"
				(valueChange)="valueChange.emit($event)">
			</ibm-date-picker>
			<code>{{formGroup.controls["single"].value | json}}</code>
			<br><br>
			<ibm-date-picker
				range="true"
				formControlName="range"
				label="Date Picker Label"
				rangeLabel="Date Picker Label"
				invalidText="Invalid date format"
				[pattern]="pattern"
				[invalid]="invalidRange"
				(valueChange)="valueChange.emit($event)">
			</ibm-date-picker>
			<code>{{formGroup.controls["range"].value | json}}</code>
		</form>
	`
})
class DatePickerStory {
	@Output() valueChange = new EventEmitter();

	get invalidSingle() {
		return this.formGroup.controls["single"].invalid && this.formGroup.controls["single"].touched;
	}

	get invalidRange() {
		return this.formGroup.controls["range"].invalid && this.formGroup.controls["range"].touched;
	}

	formGroup: FormGroup;

	constructor(protected formBuilder: FormBuilder) {
		this.formGroup = this.formBuilder.group({
			single: [
				[new Date()],
				Validators.required
			],
			range: [
				[
					new Date(),
					new Date(
						new Date().getFullYear(),
						new Date().getMonth() + 1,
						new Date().getDate())
				],
				Validators.required
			]
		});
	}
}

storiesOf("Date Picker", module)
	.addDecorator(
		moduleMetadata({
			imports: [
				DatePickerModule,
				FormsModule,
				ReactiveFormsModule,
				DocumentationModule,
				ButtonModule
			],
			declarations: [
				DatePickerStory
			]
		})
	)
	.addDecorator(withKnobs)
	.add("Simple", () => ({
		template: `
		<ibm-date-picker-input
			[theme]="theme"
			[label]="label"
			[placeholder]="placeholder"
			[disabled]="disabled"
			[invalid]="invalid"
			[invalidText]="invalidText"
			(valueChange)="valueChange($event)">
		</ibm-date-picker-input>
		`,
		props: {
			theme: select("Theme", ["dark", "light"], "dark"),
			label: text("Label text", "Date Picker Label"),
			placeholder: text("Placeholder text", "mm/dd/yyyy"),
			invalidText: text("Form validation content", "Invalid date format"),
			invalid: boolean("Show form validation", false),
			disabled: boolean("Disabled", false),
			valueChange: action("Date change fired!")
		}
	}))
	.add("Single", () => ({
		template: `
			<p>With initial value</p>
			<ibm-date-picker
				[label]="label"
				[placeholder]="placeholder"
				[theme]="theme"
				[value]="value"
				[disabled]="disabled"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[dateFormat]="dateFormat"
				(valueChange)="valueChange($event)">
			</ibm-date-picker>
			<p style="margin-top: 20px;">Without initial value</p>
			<ibm-date-picker
				[label]="label"
				[placeholder]="placeholder"
				[theme]="theme"
				[disabled]="disabled"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[dateFormat]="dateFormat"
				(valueChange)="valueChange($event)">
			</ibm-date-picker>
		`,
		props: {
			valueChange: action("Date change fired!"),
			theme: select("Theme", ["dark", "light"], "dark"),
			label: text("Label text", "Date Picker Label"),
			placeholder: text("Placeholder text", "mm/dd/yyyy"),
			invalidText: text("Form validation content", "Invalid date format"),
			invalid: boolean("Show form validation", false),
			disabled: boolean("Disabled", false),
			dateFormat: text("Date format", "m/d/Y"),
			value: array("Value", ["10/19/2019"])
		}
	}))
	.add("Range", () => ({
		template: `
		<p>With initial value</p>
		<ibm-date-picker
			[label]="label"
			[rangeLabel]="label"
			range="true"
			[placeholder]="placeholder"
			[theme]="theme"
			[disabled]="disabled"
			[invalid]="invalid"
			[invalidText]="invalidText"
			[dateFormat]="dateFormat"
			[value]="value"
			(valueChange)="valueChange($event)">
		</ibm-date-picker>
		<p style="margin-top: 20px;">Without initial value</p>
		<ibm-date-picker
			[label]="label"
			[rangeLabel]="label"
			range="true"
			[placeholder]="placeholder"
			[theme]="theme"
			[disabled]="disabled"
			[invalid]="invalid"
			[invalidText]="invalidText"
			[dateFormat]="dateFormat"
			(valueChange)="valueChange($event)">
		</ibm-date-picker>
		`,
		props: {
			valueChange: action("Date change fired!"),
			theme: select("Theme", ["dark", "light"], "dark"),
			label: text("Label text", "Date Picker Label"),
			placeholder: text("Placeholder text", "mm/dd/yyyy"),
			invalidText: text("Form validation content", "Invalid date format"),
			invalid: boolean("Show form validation", false),
			disabled: boolean("Disabled", false),
			dateFormat: text("Date format", "m/d/Y"),
			value: array("Value", ["09/19/2019", "10/19/2019"])
		}
	}))
	.add("With reactive forms", () => ({
		template: `
		<app-date-picker
			(valueChange)="valueChange($event)">
		</app-date-picker>
		`,
		props: {
			valueChange: action("Date change fired!")
		}
	}))
	.add("With ngModel", () => ({
		template: `
			<div>
				<ibm-date-picker
					label="Date picker label"
					[(ngModel)]="single">
				</ibm-date-picker>
				<button
					ibmButton
					(click)="single = null"
					style="margin-top: 5px">
					Send null
				</button>
				<button
					ibmButton
					(click)="single = [date]"
					style="margin-left: 5px">
					Send date
				</button>
				<br>
				<code>{{ single | json }}</code>
			</div>
			<div style="margin-top: 15px;">
				<ibm-date-picker
					label="Date picker"
					rangeLabel="Range label"
					range="true"
					[(ngModel)]="range">
				</ibm-date-picker>
				<button
					ibmButton
					(click)="range = null"
					style="margin-top: 5px">
					Send null
				</button>
				<button
					ibmButton
					(click)="range = rangeDates"
					style="margin-left: 5px">
					Send date
				</button>
				<br>
				<code>{{ range | json }}</code>
			</div>
		`,
		props: {
			date: new Date(new Date().getFullYear(), 5, 15),
			rangeDates: [
				new Date(new Date().getFullYear(), 5, 15),
				new Date(new Date().getFullYear(), 8, 19)
			]
		}
	}))
	.add("Skeleton", () => ({
		template: `
		<ibm-date-picker
			range="true"
			skeleton="true">
		</ibm-date-picker>
		`
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/DatePicker.html"></ibm-documentation>
		`
	}));
