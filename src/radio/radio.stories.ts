import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs/angular";

import { RadioModule, DocumentationModule } from "../";

import { Component, OnInit, AfterViewInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
	selector: "app-reactive-forms",
	template: `
		<form [formGroup]="formGroup">
			<ibm-radio-group
				aria-label="radiogroup"
				formControlName="radioGroup">
				<ibm-radio
					value="radio">
					zero
				</ibm-radio>
				<ibm-radio *ngFor="let radio of manyRadios"
					[value]="radio.num"
					[disabled]="radio.disabled">
					{{radio.num}}
				</ibm-radio>
			</ibm-radio-group>
		</form>
		<button (click)="changeSelected()">Set selected to three</button>
	`
})
class ReactiveFormsStory implements AfterViewInit, OnInit {
	public formGroup: FormGroup;

	manyRadios = [
		{ num: "one" },
		{ num: "two" },
		{ num: "three" },
		{ num: "four", disabled: true }
	];

	constructor(protected formBuilder: FormBuilder) {}

	changeSelected() {
		this.formGroup.get("radioGroup").setValue("three");
	}

	ngOnInit() {
		this.formGroup = this.formBuilder.group({
			radioGroup: new FormControl()
		});
	}

	ngAfterViewInit() {
		this.formGroup.get("radioGroup").setValue("one");
	}
}

storiesOf("Components|Radio", module).addDecorator(
	moduleMetadata({
		declarations: [ReactiveFormsStory],
		imports: [RadioModule, DocumentationModule, ReactiveFormsModule]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<fieldset class="bx--fieldset">
			<legend class="bx--label">{{label}}</legend>
			<ibm-radio-group
				aria-label="radiogroup"
				[(ngModel)]="radio"
				(change)="onChange($event)">
				<ibm-radio
					value="radio"
					[checked]="true">
					zero
				</ibm-radio>
				<ibm-radio *ngFor="let radio of manyRadios"
					[value]="radio.num"
					[disabled]="radio.disabled">
					{{radio.num}}
				</ibm-radio>
			</ibm-radio-group>
		</fieldset>
		`,
		props: {
			onChange: action("Radio change"),
			label: text("Label text", "Radio Button heading"),
			manyRadios: [
				{ num: "one" },
				{ num: "two" },
				{ num: "three" },
				{ num: "four", disabled: true }
			]
		}
	}))
	.add("Vertical", () => ({
		template: `
		<fieldset class="bx--fieldset">
			<legend class="bx--label">Radio button label</legend>

			<ibm-radio-group
				aria-label="radiogroup"
				orientation="vertical"
				[labelPlacement]="labelPlacement"
				[(ngModel)]="radio"
				(change)="onChange($event)">
				<ibm-radio
					value="radio"
					[checked]="true">
					zero
				</ibm-radio>
				<ibm-radio *ngFor="let radio of manyRadios"
					[value]="radio.num"
					[disabled]="radio.disabled">
					{{radio.num}}
				</ibm-radio>
			</ibm-radio-group>
		</fieldset>
		`,
		props: {
			onChange: action("Radio change"),
			labelPlacement: select("Label placement", ["right", "left"], "right"),
			manyRadios: [
				{ num: "one" },
				{ num: "two" },
				{ num: "three" },
				{ num: "four", disabled: true }
			]
		}
	}))
	.add("With reactive forms", () => ({
		template: `<app-reactive-forms></app-reactive-forms>`
	}))
	.add("Skeleton", () => ({
		template: `
		<ibm-radio-group skeleton="true">
			<ibm-radio></ibm-radio>
		</ibm-radio-group>
		`
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/components/RadioGroup.html"></ibm-documentation>
		`
	}));
