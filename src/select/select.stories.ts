import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import {
	withKnobs,
	select,
	boolean,
	text
} from "@storybook/addon-knobs/angular";

import { SelectModule } from "../";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { Component, OnInit } from "@angular/core";
import {
	FormGroup,
	FormBuilder,
	FormControl,
	ReactiveFormsModule
} from "@angular/forms";

@Component({
	selector: "app-reactive-form",
	template: `
		<form [formGroup]="formGroup">
			<ibm-select formControlName="selecterino">
				<option value="default" disabled selected hidden>Choose an option</option>
				<option value="option1">Option 1</option>
				<option value="option2">Option 2</option>
				<option value="option3">Option 3</option>
			</ibm-select>
		</form>
		<div style="display: flex; flex-direction: column;">
			selectedValue: {{ formGroup.get("selecterino").value }}
			<div>
				<button (click)="clearSelection()">Clear selection</button>
				<button (click)="selectRandom()">Select random</button>
			</div>
		</div>
	`
})
class ReactiveFormsSelect implements OnInit {
	public formGroup: FormGroup;

	constructor(protected formBuilder: FormBuilder) { }

	clearSelection() {
		this.formGroup.get("selecterino").setValue("default");
	}

	selectRandom() {
		this.formGroup.get("selecterino").setValue([
			"default",
			"option1",
			"option2",
			"option3"
		][Math.floor(Math.random() * 4)]);
	}

	ngOnInit() {
		this.formGroup = this.formBuilder.group({
			selecterino: new FormControl()
		});

		this.formGroup.get("selecterino").setValue("option2");
	}
}

storiesOf("Components|Select", module).addDecorator(
	moduleMetadata({
		declarations: [ReactiveFormsSelect],
		imports: [
			SelectModule,
			DocumentationModule,
			ReactiveFormsModule
		]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-select
				[disabled]="disabled"
				[size]="size"
				[invalid]="invalid"
				[invalidText]="invalidText"
				[warn]="warn"
				[warnText]="warnText"
				[label]="label"
				[helperText]="helperText"
				[theme]="theme"
				[display]="display">
				<option value="" disabled selected hidden>Choose an option</option>
				<option value="solong">A much longer option that is worth having around to check how text flows</option>
				<optgroup label="Category 1">
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
				</optgroup>
				<optgroup label="Category 2">
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
				</optgroup>
			</ibm-select>
	`,
		props: {
			disabled: boolean("Disabled", false),
			size: select("Size", ["sm", "md", "xl"], "md"),
			invalid: boolean("Show form validation", false),
			invalidText: text("Form validation content", "Please select an option."),
			warn: boolean("Show the warning state", false),
			warnText: text("Text for the warning", "This is a warning"),
			label: text("Label text", "Select Label"),
			helperText: text("Helper text", ""),
			theme: select("Theme", ["dark", "light"], "dark"),
			display: select("Display", ["default", "inline"], "default")
		}
	}))
	.add("With ngModel", () => ({
		template: `
			<div style="width: 165px">
				<ibm-select
					[(ngModel)]="model"
					[size]="size"
					ariaLabel='ngModel select'>
					<option value="default" disabled selected hidden>Choose an option</option>
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</ibm-select>
				<br>
				<div>
					<span>Selected: {{ model }}</span>
					<button (click)="selectRandom()">Select random</button>
				</div>
			</div>
		`,
		props: {
			size: select("Size", ["sm", "md", "xl"], "md"),
			model: "option2",
			selectRandom: function() {
				this.model = [
					"default",
					"option1",
					"option2",
					"option3"
				][Math.floor(Math.random() * 4)];
			}
		}
	}))
	.add("With reactive forms", () => ({
		template: `<app-reactive-form></app-reactive-form>`
	}))
	.add("Changing selected through option selected property", () => ({
		template: `
			<ibm-select label="Type">
				<option
					value="on-hand"
					[selected]="selected === 'on-hand'">
					On hand
				</option>
				<option
					value="in-transit-inbound"
					[selected]="selected === 'in-transit-inbound'">
					Inbound in-transit
				</option>
				<option
					value="in-transit-outbound"
					[selected]="selected === 'in-transit-outbound'">
					Outbound in-transit
				</option>
			</ibm-select>
			<button (click)="selectRandom()">Select random</button>
		`,
		props: {
			selected: "in-transit-inbound",
			selectRandom: function() {
				this.selected = [
					"on-hand",
					"in-transit-inbound",
					"in-transit-outbound"
				][Math.floor(Math.random() * 3)];
			}
		}
	}))
	.add("Changing selected through value property", () => ({
		template: `
			<ibm-select label="Type" [value]="selected">
				<option value="on-hand">On hand</option>
				<option value="in-transit-inbound">Inbound in-transit</option>
				<option value="in-transit-outbound">Outbound in-transit</option>
			</ibm-select>
			<button (click)="selectRandom()">Select random</button>
		`,
		props: {
			selected: "in-transit-outbound",
			selectRandom: function() {
				this.selected = [
					"on-hand",
					"in-transit-inbound",
					"in-transit-outbound"
				][Math.floor(Math.random() * 3)];
			}
		}
	}))
	.add("Skeleton", () => ({
		template: `
		<div style="width: 300px">
			<ibm-select
				skeleton="true"
				[label]="label">
			</ibm-select>
		</div>
		`,
		props: {
			label: text("Label text", "Select Label")
		}
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_select.select.html"></ibm-documentation>
		`
	}));
