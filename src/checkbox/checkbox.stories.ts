import { storiesOf, moduleMetadata } from "@storybook/angular";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/angular";
import { Component, OnInit } from "@angular/core";
import {
	FormBuilder,
	FormControl,
	FormGroup,
	ReactiveFormsModule
} from "@angular/forms";

import { CheckboxModule } from "../";
import { DocumentationModule } from "../documentation-component/documentation.module";

@Component({
	selector: "app-reactive-forms",
	template: `
		<form [formGroup]="formGroup">
			<ibm-checkbox formControlName="checkbox">
				Checkbox in a reactive form
			</ibm-checkbox>
		</form>
		<br>
		<button (click)="toggleDisable()">Toggle disabled state</button>
	`
})
class ReactiveFormsStory implements OnInit {
	public formGroup: FormGroup;
	disabled = false;

	constructor(protected formBuilder: FormBuilder) { }

	ngOnInit() {
		this.formGroup = this.formBuilder.group({
			checkbox: new FormControl()
		});
	}

	toggleDisable() {
		const checkbox = this.formGroup.get("checkbox");
		checkbox.disabled ? checkbox.enable() : checkbox.disable();
	}
}

storiesOf("Components|Checkbox", module).addDecorator(
	moduleMetadata({
		declarations: [ReactiveFormsStory],
		imports: [
			CheckboxModule,
			ReactiveFormsModule,
			DocumentationModule
		]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
		<fieldset class="cds--fieldset">
			<legend class="cds--label">{{label}}</legend>
			<ibm-checkbox
				checked="true"
				[hideLabel]="hideLabel"
				(change)="onChange($event)">
				Checkbox
			</ibm-checkbox>
			<ibm-checkbox
				indeterminate="true"
				(change)="onChange($event)"
				[hideLabel]="hideLabel"
				(indeterminateChange)="onIndeterminateChange($event)">
				Indeterminate checkbox
			</ibm-checkbox>
			<ibm-checkbox
				disabled="true"
				(change)="onChange($event)"
				[hideLabel]="hideLabel"
				(indeterminateChange)="onIndeterminateChange($event)">
				Disabled checkbox
			</ibm-checkbox>
		</fieldset>
	`,
		props: {
			onChange: action("Change fired!"),
			onIndeterminateChange: action("Indeterminate change fired!"),
			label: text("Label text", "Checkbox"),
			hideLabel: boolean("Hide labels", false)
		}
	}))
	.add("Enforcing indeterminate to toggle to unchecked state", () => ({
		template: `
			<ibm-checkbox
				[indeterminate]="indeterminate"
				[checked]="checked"
				(indeterminateChange)="onIndeterminateChange($event)"
				(checkedChange)="onCheckedChange($event)">
				Indeterminate
			</ibm-checkbox>

			<button (click)="setIndeterminate()">Set indeterminate</button>
		`,
		props: {
			indeterminate: true,
			checked: true,
			setIndeterminate: function() {
				this.indeterminate = true;
				// sets `checked` to true so that when the checkbox is toggled,
				// it goes to an unchecked state.
				this.checked = true;
			},
			onIndeterminateChange: function(indeterminateState: boolean) {
				this.indeterminate = indeterminateState;
			},
			onCheckedChange: function(checked: boolean) {
				this.checked = checked;
			}
		}
	}))
	.add("Programmatically", () => ({
		template: `
			<ibm-checkbox
				[indeterminate]="indeterminate"
				[checked]="checked"
				(indeterminateChange)="onIndeterminateChange($event)"
				(checkedChange)="onCheckedChange($event)">
				Programmatic checkbox
			</ibm-checkbox>

			<button (click)="toggle()">Toggle</button>
			<button (click)="setIndeterminate()">Set indeterminate</button>
		`,
		props: {
			indeterminate: false,
			checked: false,
			toggle: function() {
				this.checked = !this.checked;
				this.indeterminate = false;
			},
			setIndeterminate: function() {
				this.indeterminate = true;
			},
			onIndeterminateChange: function(indeterminateState: boolean) {
				this.indeterminate = indeterminateState;
			},
			onCheckedChange: function(checked: boolean) {
				this.checked = checked;
			}
		}
	}))
	.add("With ngModel", () => ({
		template: `
			<ibm-checkbox
				[(ngModel)]="model">
				ngModel checkbox
			</ibm-checkbox>

			<div style="display:flex; flex-direction: column; width: 150px">
				<button (click)="toggleModel()">Set model</button>
				Checked: {{ model }}
			</div>
		`,
		props: {
			model: true,
			toggleModel: function() {
				this.model = !this.model;
			}
		}
	}))
	.add("With reactive forms", () => ({
		template: `
			<!--
				app-* components are for demo purposes only.
				You can create your own implementation by using the component source as an example.
			-->
			<app-reactive-forms></app-reactive-forms>
		`
	}))
	.add("Skeleton", () => ({
		template: `<ibm-checkbox skeleton="true"></ibm-checkbox>`
}))
.add("Documentation", () => ({
	template: `
		<ibm-documentation src="documentation/classes/src_checkbox.checkbox.html"></ibm-documentation>
	`
}));
