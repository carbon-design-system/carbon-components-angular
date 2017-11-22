import { Component, OnInit, ApplicationRef } from "@angular/core";

@Component({
	selector: "app-forms-demo",
	template: `
	<h1>Forms demo</h1>

	<h2>Check box</h2>
	<p class="checkbox-group-label">Check box group label</p>
	<n-checkbox [(ngModel)]="firstCheckboxState">Check box ({{firstCheckboxState}})</n-checkbox>
	<n-checkbox disabled="true">Check box disabled</n-checkbox>

	<n-checkbox
		[(ngModel)]="secondCheckboxState"
		[indeterminate]="someSelected"
		(change)="onTristateChange()">Tri-state check box (State: {{secondCheckboxState}}, Indeterminate: {{someSelected}})
	</n-checkbox>

	<n-checkbox *ngFor="let one of manyCheckboxes"
		[(ngModel)]="one.checked"
		(change)="multiCheckboxChanged()"
		nested="true">Check ({{one.checked}})
	</n-checkbox>

	<n-checkbox
		[(ngModel)]="thirdCheckboxState">Check box (State: {{thirdCheckboxState}})
	</n-checkbox>


	<h2>Select all small inline checkboxes</h2>
	<div class="select-clear-example">
		<p class="checkbox-group-label">Schedule on these days</p>
		<button *ngIf="!allSelected()" class="btn--link" (click)="selectAll(week)">Select all</button>
		<button *ngIf="allSelected()" class="btn--link" (click)="clearAll(week)">Clear all</button>
		<n-checkbox *ngFor="let day of week"
			size="sm"
			inline="true"
			[(ngModel)]="day.checked">{{day.day}}
		</n-checkbox>
	</div>

	<h2>Switch</h2>

	<n-switch [(ngModel)]="firstSwitchState">Switch ({{firstSwitchState}})</n-switch>
	<n-switch size="sm" disabled="true">Switch disabled</n-switch>

	<h2>Radio</h2>
	<h3>Default</h3>
	<n-radio-group [(ngModel)]="radio">
		<n-radio *ngFor="let radio of manyRadios"
			[value]="radio.num"
			[disabled]="radio.disabled">Radio {{radio.num}}
		</n-radio>
	</n-radio-group>

	<h3>Small</h3>
	<n-radio-group size="sm" [(ngModel)]="radio">
		<n-radio *ngFor="let radio of manyRadios"
			[value]="radio.num"
			[disabled]="radio.disabled">Radio {{radio.num}}
		</n-radio>
	</n-radio-group>

	Radio selected: {{radio}}


	<h2>Forms (Label)</h2>

	<n-label>
		Field small
		<input type="text" [(ngModel)]="textInput1" class="input-text--sm">
	</n-label>
	<p>Text: {{textInput1}}</p>

	<n-label>
		Field
		<input type="text" [(ngModel)]="textInput2">
	</n-label>
	<p>Text: {{textInput2}}</p>

	<n-label>
		Field large
		<input type="text" [(ngModel)]="textInput3" class="input-text--lg">
	</n-label>
	<p>Text: {{textInput3}}</p>

	<n-label>
		<label class="disabled">Field disabled</label>
		<input type="text" class="input-field" disabled>
	</n-label>

	<n-label>
		Text area
		<textarea></textarea>
	</n-label>
	<p>Text: {{textareaText1}}</p>

	<n-label>
		<label class="disabled">Disabled text area</label>
		<textarea disabled></textarea>
	</n-label>

	<n-label class="ng-invalid ng-touched" labelState="success">
		Field with success
		<input type="text" class="input-text valid--success">
	</n-label>

	<n-label class="ng-invalid ng-touched" labelState="warning">
		Field with warning
		<input type="text" class="input-text valid--warning">
	</n-label>

	<n-label class="ng-invalid ng-touched" labelState="error">
		Field with error
		<input type="text" class="input-text valid--error">
	</n-label>
	`,
	styleUrls: ["./forms-demo.component.scss"]
})
export class FormsDemo {
	firstCheckboxState = true;
	secondCheckboxState = false;
	someSelected = false;
	firstSwitchState = false;
	firstRadioState = false;

	manyCheckboxes = [{checked: false}, {checked: false}, {checked: false}, {checked: false}];
	manyRadios = [
		{ num: "one" },
		{ num: "two", disabled: true },
		{ num: "three" },
		{ num: "four" }
	];
	week = [
		{checked: false, day: "Sunday"},
		{checked: false, day: "Monday"},
		{checked: false, day: "Tuesday"},
		{checked: false, day: "Wednseday"},
		{checked: false, day: "Thursday"},
		{checked: false, day: "Friday"},
		{checked: false, day: "Saturday"}];

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

	selectAll(list: any[]) {
		list.forEach(item => item.checked = true);
	}

	clearAll(list: any[]) {
		list.forEach(item => item.checked = false);
	}

	allSelected() {
		return this.week.every(item => item.checked);
	}
}
