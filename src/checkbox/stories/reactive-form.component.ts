import { Component, OnInit } from "@angular/core";
import {
	FormBuilder,
	FormGroup
} from "@angular/forms";

@Component({
	selector: "app-reactive-forms",
	template: `
		<form [formGroup]="formGroup">
			<cds-checkbox formControlName="disabledCheckbox">
				Disabled checkbox in a reactive form
			</cds-checkbox>
			<cds-checkbox formControlName="checkbox">
				Checkbox in a reactive form
			</cds-checkbox>
		</form>
		<br>
		<button (click)="toggleDisable()">Toggle disabled state</button>
	`
})
export class ReactiveFormsStory implements OnInit {
	public formGroup: FormGroup;

	constructor(protected formBuilder: FormBuilder) { }

	ngOnInit() {
		this.formGroup = this.formBuilder.group({
			disabledCheckbox: this.formBuilder.control({value: true, disabled: true}),
			checkbox: this.formBuilder.control(false)
		});
	}

	toggleDisable() {
		const checkbox = this.formGroup.get("checkbox");
		if (checkbox != null) {
			checkbox.disabled ? checkbox.enable() : checkbox.disable();
		}
	}
}
