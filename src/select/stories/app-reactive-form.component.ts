import { Component, OnInit } from "@angular/core";
import {
	FormGroup,
	FormBuilder,
	FormControl
} from "@angular/forms";

@Component({
	selector: "app-reactive-form",
	template: `
		<form [formGroup]="formGroup">
			<cds-select formControlName="selecterino">
				<option value="default" disabled selected hidden>Choose an option</option>
				<option value="option1">Option 1</option>
				<option value="option2">Option 2</option>
				<option value="option3">Option 3</option>
			</cds-select>
		</form>
		<div style="display: flex; flex-direction: column; gap: 2rem; margin-top: 2rem">
			selectedValue: {{ formGroup.get("selecterino").value }}
			<div>
				<button (click)="clearSelection()">Clear selection</button>
				<button (click)="selectRandom()">Select random</button>
			</div>
		</div>
	`
})
export class ReactiveFormsSelect implements OnInit {
	public formGroup: FormGroup;

	constructor(protected formBuilder: FormBuilder) { }

	clearSelection() {
		this.formGroup.get("selecterino")?.setValue("default");
	}

	selectRandom() {
		this.formGroup.get("selecterino")?.setValue([
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

		this.formGroup.get("selecterino")?.setValue("option2");
	}
}
