import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs/angular";

import { RadioModule } from "../";
import { DocumentationModule } from "../documentation-component/documentation.module";
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
		<button (click)="disableGroup()">Set group disabled</button>
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

	disableGroup() {
		this.formGroup.get("radioGroup").disable();
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
		<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22%3A%22Radio%20group%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22disabled%22%3Afalse%2C%22type%22%3A%22radio-group%22%2C%22legend%22%3A%22Radio%20group%22%2C%22defaultSelected%22%3A%22%22%2C%22labelPosition%22%3A%22right%22%2C%22orientation%22%3A%22horizontal%22%2C%22items%22%3A%5B%7B%22type%22%3A%22radio%22%2C%22labelText%22%3A%22Option%201%22%2C%22disabled%22%3Afalse%2C%22defaultChecked%22%3Afalse%2C%22id%22%3A%223%22%2C%22codeContext%22%3A%7B%22name%22%3A%22radio-3%22%7D%7D%2C%7B%22type%22%3A%22radio%22%2C%22labelText%22%3A%22Option%202%22%2C%22disabled%22%3Afalse%2C%22defaultChecked%22%3Afalse%2C%22id%22%3A%224%22%2C%22codeContext%22%3A%7B%22name%22%3A%22radio-4%22%7D%7D%2C%7B%22type%22%3A%22radio%22%2C%22labelText%22%3A%22Option%203%22%2C%22disabled%22%3Afalse%2C%22defaultChecked%22%3Afalse%2C%22id%22%3A%225%22%2C%22codeContext%22%3A%7B%22name%22%3A%22radio-5%22%7D%7D%5D%2C%22id%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22%3A%22radio-group-2%22%7D%7D%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
			Edit on Carbon UI Builder
		</a>
		<br><br>
		<fieldset class="bx--fieldset">
			<legend class="bx--label">{{label}}</legend>
			<ibm-radio-group
				[disabled]="disabled"
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
		<button (click)="disabled = !disabled">Toggle group disabled</button>
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
		<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22%3A%22Radio%20group%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22disabled%22%3Afalse%2C%22type%22%3A%22radio-group%22%2C%22legend%22%3A%22Radio%20group%22%2C%22defaultSelected%22%3A%22%22%2C%22labelPosition%22%3A%22right%22%2C%22orientation%22%3A%22horizontal%22%2C%22items%22%3A%5B%7B%22type%22%3A%22radio%22%2C%22labelText%22%3A%22Option%201%22%2C%22disabled%22%3Afalse%2C%22defaultChecked%22%3Afalse%2C%22id%22%3A%223%22%2C%22codeContext%22%3A%7B%22name%22%3A%22radio-3%22%7D%7D%2C%7B%22type%22%3A%22radio%22%2C%22labelText%22%3A%22Option%202%22%2C%22disabled%22%3Afalse%2C%22defaultChecked%22%3Afalse%2C%22id%22%3A%224%22%2C%22codeContext%22%3A%7B%22name%22%3A%22radio-4%22%7D%7D%2C%7B%22type%22%3A%22radio%22%2C%22labelText%22%3A%22Option%203%22%2C%22disabled%22%3Afalse%2C%22defaultChecked%22%3Afalse%2C%22id%22%3A%225%22%2C%22codeContext%22%3A%7B%22name%22%3A%22radio-5%22%7D%7D%5D%2C%22id%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22%3A%22radio-group-2%22%7D%7D%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
			Edit on Carbon UI Builder
		</a>
		<br><br>
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
		template: `
			<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22%3A%22Radio%20group%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22disabled%22%3Afalse%2C%22type%22%3A%22radio-group%22%2C%22legend%22%3A%22Radio%20group%22%2C%22defaultSelected%22%3A%22%22%2C%22labelPosition%22%3A%22right%22%2C%22orientation%22%3A%22horizontal%22%2C%22items%22%3A%5B%7B%22type%22%3A%22radio%22%2C%22labelText%22%3A%22Option%201%22%2C%22disabled%22%3Afalse%2C%22defaultChecked%22%3Afalse%2C%22id%22%3A%223%22%2C%22codeContext%22%3A%7B%22name%22%3A%22radio-3%22%7D%7D%2C%7B%22type%22%3A%22radio%22%2C%22labelText%22%3A%22Option%202%22%2C%22disabled%22%3Afalse%2C%22defaultChecked%22%3Afalse%2C%22id%22%3A%224%22%2C%22codeContext%22%3A%7B%22name%22%3A%22radio-4%22%7D%7D%2C%7B%22type%22%3A%22radio%22%2C%22labelText%22%3A%22Option%203%22%2C%22disabled%22%3Afalse%2C%22defaultChecked%22%3Afalse%2C%22id%22%3A%225%22%2C%22codeContext%22%3A%7B%22name%22%3A%22radio-5%22%7D%7D%5D%2C%22id%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22%3A%22radio-group-2%22%7D%7D%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
				Edit on Carbon UI Builder
			</a>
			<br><br>
			<!--
				app-* components are for demo purposes only.
				You can create your own implementation by using the component source as an example.
			-->
			<app-reactive-forms></app-reactive-forms>
		`
	}))
	.add("Skeleton", () => ({
		template: `
		<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22%3A%22Radio%20group%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22disabled%22%3Afalse%2C%22type%22%3A%22radio-group%22%2C%22legend%22%3A%22Radio%20group%22%2C%22defaultSelected%22%3A%22%22%2C%22labelPosition%22%3A%22right%22%2C%22orientation%22%3A%22horizontal%22%2C%22items%22%3A%5B%7B%22type%22%3A%22radio%22%2C%22labelText%22%3A%22Option%201%22%2C%22disabled%22%3Afalse%2C%22defaultChecked%22%3Afalse%2C%22id%22%3A%223%22%2C%22codeContext%22%3A%7B%22name%22%3A%22radio-3%22%7D%7D%2C%7B%22type%22%3A%22radio%22%2C%22labelText%22%3A%22Option%202%22%2C%22disabled%22%3Afalse%2C%22defaultChecked%22%3Afalse%2C%22id%22%3A%224%22%2C%22codeContext%22%3A%7B%22name%22%3A%22radio-4%22%7D%7D%2C%7B%22type%22%3A%22radio%22%2C%22labelText%22%3A%22Option%203%22%2C%22disabled%22%3Afalse%2C%22defaultChecked%22%3Afalse%2C%22id%22%3A%225%22%2C%22codeContext%22%3A%7B%22name%22%3A%22radio-5%22%7D%7D%5D%2C%22id%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22%3A%22radio-group-2%22%7D%7D%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
			Edit on Carbon UI Builder
		</a>
		<br><br>
		<ibm-radio-group skeleton="true">
			<ibm-radio></ibm-radio>
		</ibm-radio-group>
		`
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_radio.radio.html"></ibm-documentation>
		`
	}))
	.add("Radio Group Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_radio.radiogroup.html"></ibm-documentation>
		`
	}));
