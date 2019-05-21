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

@Component({
	selector: "app-date-picker",
	template: `
		<form [formGroup]="rForm">
			<ibm-date-picker
				formControlName="single"
				label="Date Picker Label"
				invalidText="Invalid date format"
				[invalid]="invalidSingle"
				(valueChange)="valueChange.emit($event)">
			</ibm-date-picker>
			<code>{{rForm.controls["single"].value | json}}</code>
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
			<code>{{rForm.controls["range"].value | json}}</code>
		</form>
	`
})
class DatePickerStory {
	@Output() valueChange = new EventEmitter();

	get invalidSingle() {
		return this.rForm.controls["single"].invalid && this.rForm.controls["single"].touched;
	}

	get invalidRange() {
		return this.rForm.controls["range"].invalid && this.rForm.controls["range"].touched;
	}

	rForm: FormGroup;

	constructor(protected formBuilder: FormBuilder) {
		this.rForm = this.formBuilder.group({
			single: [
				[new Date()],
				Validators.required
			],
			range: [
				[
					new Date(),
					new Date().setMonth(new Date().getMonth() + 1)
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
				DocumentationModule
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
			valueChange: action("Date change fired!"),
			theme: select("Theme", ["dark", "light"], "dark"),
			label: text("Label text", "Date Picker Label"),
			placeholder: text("Placeholder text", "mm/dd/yyyy"),
			invalidText: text("Form validation content", "Invalid date format"),
			invalid: boolean("Show form validation", false),
			disabled: boolean("Disabled", false)
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
