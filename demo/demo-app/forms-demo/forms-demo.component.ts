import { Component, OnInit, ApplicationRef } from "@angular/core";

@Component({
	selector: "app-forms-demo",
	template: `
	<h1 class="p-demo-heading">Forms</h1>

	<h2 class="p-demo-section">Check box</h2>
	<p class="checkbox-group-label">Check box group label</p>
	<ibm-checkbox [(ngModel)]="firstCheckboxState">Check box ({{firstCheckboxState}})</ibm-checkbox>
	<ibm-checkbox disabled="true">Check box disabled</ibm-checkbox>
	<ibm-checkbox
		[(ngModel)]="secondCheckboxState"
		[indeterminate]="someSelected"
		(change)="onTristateChange()">Tri-state check box (State: {{secondCheckboxState}}, Indeterminate: {{someSelected}})
	</ibm-checkbox>
	<ibm-checkbox *ngFor="let one of manyCheckboxes"
		[(ngModel)]="one.checked"
		(change)="multiCheckboxChanged()"
		nested="true">Check ({{one.checked}})
	</ibm-checkbox>
	<ibm-checkbox
		[(ngModel)]="thirdCheckboxState">Check box (State: {{thirdCheckboxState}})
	</ibm-checkbox>

	<h2 class="p-demo-section">Select all small inline checkboxes</h2>
	<div class="select-clear-example">
		<p class="checkbox-group-label">Schedule on these days</p>
		<button *ngIf="!allSelected()" class="btn--link" (click)="selectAll(week)">Select all</button>
		<button *ngIf="allSelected()" class="btn--link" (click)="clearAll(week)">Clear all</button>
		<ibm-checkbox *ngFor="let day of week"
			size="sm"
			inline="true"
			[(ngModel)]="day.checked">{{day.day}}
		</ibm-checkbox>
	</div>

	<h2 class="p-demo-section">Switch</h2>
	<ibm-switch [(ngModel)]="firstSwitchState">Switch ({{firstSwitchState}})</ibm-switch>
	<ibm-switch size="sm" disabled="true">Switch disabled</ibm-switch>

	<h2 class="p-demo-section">Radio</h2>
	<p>Radio selected: {{radio}}</p>
	<h3 class="p-demo-variation">Default</h3>
	<ibm-radio-group [(ngModel)]="radio">
		<ibm-radio *ngFor="let radio of manyRadios"
			[value]="radio.num"
			[disabled]="radio.disabled">Radio {{radio.num}}
		</ibm-radio>
	</ibm-radio-group>
	<h3 class="p-demo-variation">Small</h3>
	<ibm-radio-group size="sm" [(ngModel)]="radio">
		<ibm-radio *ngFor="let radio of manyRadios"
			[value]="radio.num"
			[disabled]="radio.disabled">Radio {{radio.num}}
		</ibm-radio>
	</ibm-radio-group>

	<h2 class="p-demo-section">Labels and input fields</h2>

	<ibm-label>
		Input small
		<input type="text" [(ngModel)]="textInput1" class="input-text--sm">
	</ibm-label>
	<ibm-label>
		Input
		<input type="text" [(ngModel)]="textInput2">
	</ibm-label>
	<ibm-label>
		Input large
		<input type="text" [(ngModel)]="textInput3" class="input-text--lg">
	</ibm-label>
	<ibm-label>
		<label class="disabled">Disabled input</label>
		<input type="text" class="input-field" disabled>
	</ibm-label>

	<ibm-label>
		Text area
		<textarea></textarea>
	</ibm-label>
	<p>Text: {{textareaText1}}</p>
	<ibm-label>
		<label class="disabled">Disabled text area</label>
		<textarea disabled></textarea>
	</ibm-label>

	<h3 class="p-demo-variation">Field validation</h3>
	<ibm-label class="ng-invalid ng-touched" labelState="success">
		Field with success
		<input type="text" class="input-text valid--success">
	</ibm-label>
	<ibm-label class="ng-invalid ng-touched" labelState="warning">
		Field with warning
		<input type="text" class="input-text valid--warning">
	</ibm-label>
	<ibm-label class="ng-invalid ng-touched" labelState="error">
		Field with error
		<input type="text" class="input-text valid--error">
	</ibm-label>
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
