import { storiesOf, moduleMetadata } from "@storybook/angular";
import {
	withKnobs,
	boolean,
	select,
	text
} from "@storybook/addon-knobs/angular";
import { action } from "@storybook/addon-actions";

import {
	FormBuilder,
	FormControl,
	FormGroup,
	ReactiveFormsModule
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";

import { ToggleModule } from "./";
import { DocumentationModule } from "../documentation-component/documentation.module";

@Component({
	selector: "app-reactive-forms",
	template: `
		<form [formGroup]="formGroup">
			<div style="width: 300px">
				<ibm-toggle
					label="Toggle in reactive form"
					onText="On"
					offText="Off"
					formControlName="toggle">
				</ibm-toggle>
			</div>
		</form>

		<br>

		<button (click)="toggleDisable()">Toggle disabled state</button>
	`
})
class ReactiveFormsStory implements OnInit {
	public formGroup: FormGroup;

	constructor(protected formBuilder: FormBuilder) { }

	ngOnInit() {
		this.formGroup = this.formBuilder.group({
			toggle: new FormControl()
		});
	}

	toggleDisable() {
		const toggle = this.formGroup.get("toggle");
		toggle.disabled ? toggle.enable() : toggle.disable();
	}
}

storiesOf("Components|Toggle", module).addDecorator(
	moduleMetadata({
		declarations: [ReactiveFormsStory],
		imports: [
			ToggleModule,
			DocumentationModule,
			ReactiveFormsModule
		]
	})
)
	.addDecorator(withKnobs)
	.add("Basic", () => ({
		template: `
			<ibm-toggle
				[label]="label"
				[hideLabel]="hideLabel"
				[onText]="onText"
				[offText]="offText"
				[disabled]="disabled"
				[checked]="checked"
				(checkedChange)="onChange($event)"
				[size]="size">
			</ibm-toggle>
		`,
		props: {
			disabled: boolean("Disabled", false),
			checked: boolean("Checked", false),
			hideLabel: boolean("Hide label", false),
			size: select("Size", ["md", "sm"], "md"),
			label: text("Label text", "Toggle element label"),
			onText: text("On text", "On"),
			offText: text("Off text", "Off"),
			onChange: action("On change fired!")
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
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_toggle.toggle.html"></ibm-documentation>
		`
	}));
