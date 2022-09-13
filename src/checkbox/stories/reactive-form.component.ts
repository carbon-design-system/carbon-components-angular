import { Component, OnInit } from "@angular/core";
import {
	FormBuilder,
	FormControl,
	FormGroup
} from "@angular/forms";

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
export class ReactiveFormsStory implements OnInit {
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
		checkbox?.disabled ? checkbox.enable() : checkbox?.disable();
	}
}
