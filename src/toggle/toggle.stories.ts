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
			<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22%3A%22Toggle%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22%3A%22toggle%22%2C%22header%22%3A%22Toggle%22%2C%22offText%22%3A%22Off%22%2C%22onText%22%3A%22On%22%2C%22disabled%22%3Afalse%2C%22checked%22%3Afalse%2C%22size%22%3A%22md%22%2C%22id%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22%3A%22toggle-2%22%7D%7D%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
				Edit on Carbon UI Builder
			</a>
			<br><br>
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
			<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22%3A%22Toggle%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22%3A%22toggle%22%2C%22header%22%3A%22Toggle%22%2C%22offText%22%3A%22Off%22%2C%22onText%22%3A%22On%22%2C%22disabled%22%3Afalse%2C%22checked%22%3Afalse%2C%22size%22%3A%22md%22%2C%22id%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22%3A%22toggle-2%22%7D%7D%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
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
			<a href="https://builder.carbondesignsystem.com/from-json/%7B%22title%22%3A%22Toggle%22%2C%22data%22%3A%7B%22items%22%3A%5B%7B%22type%22%3A%22toggle%22%2C%22header%22%3A%22Toggle%22%2C%22offText%22%3A%22Off%22%2C%22onText%22%3A%22On%22%2C%22disabled%22%3Afalse%2C%22checked%22%3Afalse%2C%22size%22%3A%22md%22%2C%22id%22%3A%222%22%2C%22codeContext%22%3A%7B%22name%22%3A%22toggle-2%22%7D%7D%5D%2C%22id%22%3A1%7D%2C%22allCssClasses%22%3A%5B%5D%7D" target="_blank">
				Edit on Carbon UI Builder
			</a>
			<br><br>
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
