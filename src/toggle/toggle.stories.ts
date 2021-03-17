import { storiesOf, moduleMetadata } from "@storybook/angular";
import {
	withKnobs,
	boolean,
	select,
	text
} from "@storybook/addon-knobs/angular";

import {
	FormBuilder,
	FormControl,
	FormGroup,
	ReactiveFormsModule
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";

import { ToggleModule } from "../";
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
				[onText]="onText"
				[offText]="offText"
				[disabled]="disabled"
				[checked]="checked"
				[size]="size">
			</ibm-toggle>
			<ibm-toggle
				[label]="label"
				[onText]="altOnText"
				[offText]="altOffText"
				[disabled]="disabled"
				[checked]="checked"
				[size]="size">
			</ibm-toggle>
		`,
		props: {
			disabled: boolean("Disabled", false),
			checked: boolean("Checked", false),
			size: select("Size", ["md", "sm"], "md"),
			label: text("Label text", ""),
			onText: text("On text", "On"),
			offText: text("Off text", "Off"),
			altOffText: text("Alternative off text", "Dark"),
			altOnText: text("Alternative on text", "Light")
		}
	}))
	.add("With reactive forms", () => ({
		template: `
			<app-reactive-forms></app-reactive-forms>
		`
	}))
	.add("Skeleton", () => ({
		template: `
			<ibm-toggle skeleton="true"></ibm-toggle>
			&nbsp;
			<ibm-toggle skeleton="true" size="sm"></ibm-toggle>
		`
	}))
	.add("Documentation", () => ({
		template: `
			<ibm-documentation src="documentation/classes/src_toggle.toggle.html"></ibm-documentation>
		`
	}));
