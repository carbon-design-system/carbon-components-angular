import { Component, OnInit } from "@angular/core";

@Component({
	selector: "forms-demo",
	template: `
	<h2>Checkbox</h2>
	<cdl-checkbox [(ngModel)]="firstCheckboxState">Checkbox ({{firstCheckboxState}})</cdl-checkbox>
	<cdl-checkbox disabled="true">Checkbox disabled</cdl-checkbox>

	<cdl-checkbox
		[(ngModel)]="secondCheckboxState"
		[indeterminate]="someSelected"
		(change)="onTristateChange()">
		Tristate Checkbox (State: {{secondCheckboxState}} Indeterminate: {{someSelected}})
	</cdl-checkbox>

	<cdl-checkbox *ngFor="let one of manyCheckboxes"
		[(ngModel)]="one.checked"
		(change) = "multiCheckboxChanged()"
		class="indent">
		Check ({{one.checked}})
	</cdl-checkbox>

	<cdl-checkbox class="ng-invalid ng-touched">Checkbox</cdl-checkbox>


	<h2>Switch</h2>

	<cdl-switch [(ngModel)]="firstSwitchState">Switch ({{firstSwitchState}})</cdl-switch>
	<cdl-switch disabled="true">Switch disabled</cdl-switch>
	`,
	styleUrls: ["./forms-demo.component.scss"]
})
export class FormsDemo {
	firstCheckboxState = true;
	secondCheckboxState = false;
	someSelected = false;
	firstSwitchState = false;

	manyCheckboxes = [{checked: false}, {checked: false}, {checked: false}, {checked: false}];

	onTristateChange() {
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
