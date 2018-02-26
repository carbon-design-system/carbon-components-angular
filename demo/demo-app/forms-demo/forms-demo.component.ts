import { Component, OnInit, ApplicationRef } from "@angular/core";

@Component({
	selector: "app-forms-demo",
	template: `
	<h2 class="p-demo-heading h1">Forms</h2>

	<h3 class="p-demo-section h2">Check box</h3>
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

	<h3 class="p-demo-section h2">Select all small inline checkboxes</h3>
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

	<h3 class="p-demo-section h2">Switch</h3>
	<n-switch [(ngModel)]="firstSwitchState">Switch ({{firstSwitchState}})</n-switch>
	<n-switch size="sm" disabled="true">Switch disabled</n-switch>

	<h3 class="p-demo-section h2">Radio</h3>
	<p>Radio selected: {{radio}}</p>
	<h4 class="p-demo-variation h3">Default</h4>
	<n-radio-group [(ngModel)]="radio">
		<n-radio *ngFor="let radio of manyRadios"
			[value]="radio.num"
			[disabled]="radio.disabled">Radio {{radio.num}}
		</n-radio>
	</n-radio-group>
	<h4 class="p-demo-variation h3">Small</h4>
	<n-radio-group size="sm" [(ngModel)]="radio">
		<n-radio *ngFor="let radio of manyRadios"
			[value]="radio.num"
			[disabled]="radio.disabled">Radio {{radio.num}}
		</n-radio>
	</n-radio-group>

	<h3 class="p-demo-section h2">Labels and input fields</h3>

	<n-label>
		Input small
		<input type="text" [(ngModel)]="textInput1" class="input-text--sm">
	</n-label>
	<n-label>
		Input
		<input type="text" [(ngModel)]="textInput2">
	</n-label>
	<n-label>
		Input large
		<input type="text" [(ngModel)]="textInput3" class="input-text--lg">
	</n-label>
	<n-label>
		<label class="disabled">Disabled input</label>
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

	<h4 class="p-demo-variation h3">Field validation</h4>
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
