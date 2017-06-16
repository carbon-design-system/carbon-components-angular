import { Component, OnInit, ApplicationRef } from "@angular/core";

@Component({
	selector: "forms-demo",
	template: `
	<h2>Check box</h2>
	<cdl-checkbox [(ngModel)]="firstCheckboxState">Check box ({{firstCheckboxState}})</cdl-checkbox>
	<cdl-checkbox disabled="true">Check box disabled</cdl-checkbox>

	<cdl-checkbox
		[(ngModel)]="secondCheckboxState"
		[indeterminate]="someSelected"
		(change)="onTristateChange()">Tri-state check box (State: {{secondCheckboxState}}, Indeterminate: {{someSelected}})
	</cdl-checkbox>

	<cdl-checkbox *ngFor="let one of manyCheckboxes"
		[(ngModel)]="one.checked"
		(change) = "multiCheckboxChanged()"
		class="indent">Check ({{one.checked}})
	</cdl-checkbox>

	<cdl-checkbox
		[(ngModel)]="thirdCheckboxState">Check box (State: {{thirdCheckboxState}})
	</cdl-checkbox>


	<h2>Switch</h2>

	<cdl-switch [(ngModel)]="firstSwitchState">Switch ({{firstSwitchState}})</cdl-switch>
	<cdl-switch disabled="true">Switch disabled</cdl-switch>


	<h2>Forms (Label)</h2>

	<cdl-label>
		<label for="textInput1">Field small</label>
		<input type="text" [(ngModel)]="textInput1" class="input-field size-sm" id="textInput1">
	</cdl-label>
	<p>Text: {{textInput1}}</p>

	<cdl-label>
		<label for="textInput2">Field</label>
		<input type="text" [(ngModel)]="textInput2" class="input-field" id="textInput2">
	</cdl-label>
	<p>Text: {{textInput2}}</p>

	<cdl-label>
		<label for="textInput3">Field large</label>
		<input type="text" [(ngModel)]="textInput3" class="input-field size-lg" id="textInput3">
	</cdl-label>
	<p>Text: {{textInput3}}</p>

	<cdl-label>
		<label for="textInput4" class="disabled">Field disabled</label>
		<input type="text" class="input-field" id="textInput4" disabled>
	</cdl-label>

	<cdl-label>
		<label for="textareaText1">Text area</label>
		<textarea [(ngModel)]="textareaText1" class="input-field" id="textareaText1"></textarea>
	</cdl-label>
	<p>Text: {{textareaText1}}</p>


	<cdl-label class="ng-invalid ng-touched" labelState="success">
		<label for="textInput5">Field with success</label>
		<input type="text" class="input-field input-field-success" id="textInput5">
	</cdl-label>

	<cdl-label class="ng-invalid ng-touched" labelState="warning">
		<label for="textInput6">Field with warning</label>
		<input type="text" class="input-field input-field-warning" id="textInput6">
	</cdl-label>

	<cdl-label class="ng-invalid ng-touched" labelState="error">
		<label for="textInput7">Field with error</label>
		<input type="text" class="input-field input-field-error" id="textInput7">
	</cdl-label>
	`,
	styleUrls: ["./forms-demo.component.scss"]
})
export class FormsDemo {
	firstCheckboxState = true;
	secondCheckboxState = false;
	someSelected = false;
	firstSwitchState = false;

	manyCheckboxes = [{checked: false}, {checked: false}, {checked: false}, {checked: false}];

	constructor(private applicationRef: ApplicationRef) {}

	onTristateChange(event) {
		this.applicationRef.tick();  // give app time to process the click if needed
		if (this.someSelected) {
			this.secondCheckboxState = false; // clear all boxes
		}
		this.someSelected = false;
		for (let i = 0; i < this.manyCheckboxes.length; i++) {
			let one = this.manyCheckboxes[i];
			one.checked = this.secondCheckboxState;
		}
	}

	multiCheckboxChanged() {
		let startValue = this.manyCheckboxes[0].checked;

		for (let i = 1; i < this.manyCheckboxes.length; i++) {
			let one = this.manyCheckboxes[i];

			if (one.checked !== startValue) {
				// set indeterminate
				this.secondCheckboxState = false;
				this.someSelected = true;
				return;
			}
		}

		this.someSelected = false;
		this.secondCheckboxState = startValue;
	}
}
