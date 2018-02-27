import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
	selector: "app-dropdown-demo",
	template: `
		<h1>Drop-down list</h1>

		<h2>Default</h2>
		<div style="width: 400px">
			<n-dropdown
				placeholder="Select an option"
				size="sm">
				<n-dropdown-list [items]="demoItems1"></n-dropdown-list>
			</n-dropdown>
			<br>
			<n-dropdown placeholder="Select an option">
				<n-dropdown-list [items]="demoItems1"></n-dropdown-list>
			</n-dropdown>
			<br>
			<n-dropdown
				placeholder="Select an option"
				size="lg">
				<n-dropdown-list [items]="demoItems1"></n-dropdown-list>
			</n-dropdown>
		</div>

		<h3>Disabled</h3>
		<div style="width: 400px">
			<n-dropdown
				placeholder="Drop-down 7"
				[disabled]="true"
				(selected)="onSelect($event)">
				<n-dropdown-list
					[items]="demoItems1">
				</n-dropdown-list>
			</n-dropdown>
		</div>

		<h2>Multi-select</h2>
		<div style="width: 400px">
			<n-dropdown
				placeholder="Select an option"
				size="sm"
				type="multi">
				<n-dropdown-list [items]="demoItems1"></n-dropdown-list>
			</n-dropdown>
			<br>
			<n-dropdown
				placeholder="Select an option"
				type="multi">
				<n-dropdown-list [items]="demoItems1"></n-dropdown-list>
			</n-dropdown>
			<br>
			<n-dropdown
				placeholder="Select an option"
				size="lg"
				type="multi">
				<n-dropdown-list [items]="demoItems1"></n-dropdown-list>
			</n-dropdown>
		</div>

		<h2>Searchable</h2>
		<h3>Single select</h3>
		<div style="width: 400px">
			<n-dropdown placeholder="Select an option">
				<n-dropdown-filter [items]="demoItems1"></n-dropdown-filter>
			</n-dropdown>
		</div>
		<h3>Multi-select</h3>
		<div style="width: 400px">
			<n-dropdown
				placeholder="Select an option"
				type="multi"
				(selected)="onSelect($event)">
				<n-dropdown-filter [items]="demoItems1"></n-dropdown-filter>
			</n-dropdown>
		</div>

		<h2>Hierarchy</h2>
		<h3>Tree</h3>
		<div style="width: 400px">
			<n-dropdown placeholder="Select an option">
				<n-dropdown-tree
					[items]="demoItems3"
					[label]="'Drop-down with Tree view'">
				</n-dropdown-tree>
			</n-dropdown>
		</div>
		<h3>Sub menu</h3>
		<div style="width: 250px">
			<n-dropdown
				placeholder="Select an option"
				[displayValue]="subdisplay2"
				(selected)="subdisplay2 = getDisplay($event.item)">
				<n-dropdown-sub-menu [items]="demoItems4"></n-dropdown-sub-menu>
			</n-dropdown>
		</div>

		<h2><code>appendToBody</code> enabled</h2>
		<div class="dropdown-appendbody-container" style="height: 150px;
		border: solid 1px red; overflow: scroll; width: 100%; position: relative;">
			<div style="width: 300px;">
				<n-dropdown
					scrollableContainer=".dropdown-appendbody-container"
					[appendToBody]="true"
					placeholder="Select an option"
					type="multi"
					[(ngModel)]="dropdown3">
					<n-dropdown-list [items]="demoItems5"></n-dropdown-list>
				</n-dropdown>
				<p>Selected: {{ dropdown3 | json }}</p>
				<button class="btn--primary" (click)="reset(dropdown3)">Reset selected</button>
			</div>
		</div>

		<h2>ngModel</h2>
		<h3>Single select</h3>
		<div style="width: 400px">
			<n-dropdown
				placeholder="Select an option"
				[(ngModel)]="dropdown1">
				<n-dropdown-list [items]="demoItems5"></n-dropdown-list>
			</n-dropdown>
			<p>Selected: {{ dropdown1 | json }}</p>
		</div>
		<button (click)="reset2()" class="btn--primary">Reset</button>
		<h3>Multi-select</h3>
		<div style="width: 400px">
			<n-dropdown
				placeholder="Select an option"
				[(ngModel)]="dropdown2"
				(onClose)="onClose()"
				type="multi">
				<n-dropdown-list [items]="demoItems2"></n-dropdown-list>
			</n-dropdown>
			<p>Selected: {{ dropdown2 | json }}</p>
		</div>

		<h2>Events</h2>
		<h3>Multi-select selected</h3>
		<n-dropdown
			placeholder="Select an option"
			(selected)="multidisplay1 = getMultiDisplay($event.item)"
			type="multi">
			<n-dropdown-list
				[items]="demoItems1">
			</n-dropdown-list>
		</n-dropdown>
		<h3>Reactive form</h3>
		<n-dropdown
			placeholder="Select an option"
			[formControl]="test">
			<n-dropdown-list [items]="testData"></n-dropdown-list>
		</n-dropdown>
		<p>Value: {{ test.value | json }}</p>
		<p>Status: {{ test.status | json }}</p>
		<n-dropdown
			placeholder="Select an option"
			[formControl]="test2"
			type="multi">
			<n-dropdown-list [items]="testData2"></n-dropdown-list>
		</n-dropdown>
		<p>Value: {{ test2.value | json }}</p>
		<form [formGroup]="testForm" novalidate (ngSubmit)="testSubmit(testForm)">
			<div formArrayName="tests">
				<div *ngFor="let testDrop of testForm.controls.tests.controls; let i = index">
					<div [formGroupName]="i">
						<n-dropdown
							formControlName="drop"
							type="multi"
							placeholder="Select an option">
							<n-dropdown-list [items]="formitems"></n-dropdown-list>
						</n-dropdown>
						<p>Value: {{ testDrop.value | json }}</p>
					</div>
				</div>
			</div>
			<button type="button" class="btn--secondary" (click)="addTestOption()">add</button>
			<button type="submit" class="btn--primary">submit</button>
		</form>

		<h2>Custom template</h2>
		<ng-template #listTpl let-item="item">
			<n-icon
				*ngIf="item.selected"
				icon="Checkbox Selected"
				size="md">
			</n-icon>
			<n-icon
				*ngIf="!item.selected"
				icon="Checkbox Empty"
				size="md">
			</n-icon>
			{{ item.content }}
		</ng-template>
		<div style="width: 400px">
			<n-dropdown
				placeholder="Select an option"
				type="multi">
				<n-dropdown-list
					[items]="demoItems1"
					[listTpl]="listTpl">
				</n-dropdown-list>
			</n-dropdown>
		</div>

		<h2>Internal components</h2>
		<h3>Drop-down list</h3>
		<div class="dropdown_wrapper">
			<div class="dropdown_menu" style="position: relative; display: block;" role="listbox">
				<n-dropdown-list [items]="demoItems1"></n-dropdown-list>
			</div>
		</div>
		<br>
		<h3>Drop-down filter</h3>
		<div class="dropdown_wrapper">
			<div class="dropdown_menu" style="position: relative; display: block;" role="listbox">
				<n-dropdown-filter [items]="demoItems1"></n-dropdown-filter>
			</div>
		</div>
		<br>
		<h3>Drop-down multi filter</h3>
		<div class="dropdown_wrapper">
			<div class="dropdown_menu" style="position: relative; display: block;" role="listbox">
				<n-dropdown-filter [items]="demoItems1" type="multi"></n-dropdown-filter>
			</div>
		</div>
		<br>
		<h3>Drop-down tree</h3>
		<div class="dropdown_wrapper">
			<div class="dropdown_menu" style="position: relative; display: block;" role="listbox">
				<n-dropdown-tree [items]="demoItems3"></n-dropdown-tree>
			</div>
		</div>
		<br>
		<h3>Drop-down sub menu</h3>
		<div class="dropdown_wrapper" style="width: 250px;">
			<div class="dropdown_menu" style="position: relative; display: block;" role="listbox">
				<n-dropdown-sub-menu [items]="demoItems4"></n-dropdown-sub-menu>
			</div>
		</div>
	`,
})
export class DropdownDemo {
	demoItems1 = [
		{
			content: "An item",
			selected: false
		},
		{
			content: "Byte",
			selected: false,
		},
		{
			content: "Computer",
			selected: false
		},
		{
			content: "Design",
			selected: false
		}
	];

	demoItems2 = Array.from(this.demoItems1, this.clone)
		.concat(Array.from(this.demoItems1, this.clone))
		.concat(Array.from(this.demoItems1, this.clone))
		.concat(Array.from(this.demoItems1, this.clone))
		.concat(Array.from(this.demoItems1, this.clone));
	demoItems3 = [
		{
			content: "Item one",
			selected: false
		},
		{
			content: "Item two",
			selected: false,
			items: [
				{
					content: "Sub item two 1",
					selected: false
				},
				{
					content: "Sub item two 2",
					selected: false,
					items: [
						{
							content: "Sub item two 1b",
							selected: false
						},
						{
							content: "Sub item two 2b",
							selected: false,
						}
					]
				},
			]
		},
		{
			content: "Item three",
			selected: false,
		},
		{
			content: "Item four",
			selected: false
		}
	];

	demoItems4 = [
		{
			content: "Item one",
			selected: false
		},
		{
			content: "Item two",
			selected: false,
			items: [
				{
					content: "Sub item two 1",
					selected: false
				},
				{
					content: "Sub item two 2",
					selected: false,
				}
			]
		},
		{
			content: "Item three",
			selected: false,
		},
		{
			content: "Item four",
			selected: false
		}
	];
	demoItems5 = Array.from(this.demoItems1, this.clone);
	dropdown1 = null;
	dropdown2 = [];
	dropdown3 = [];

	testData = Array.from(this.demoItems1, this.clone);
	testData2 = Array.from(this.demoItems1, this.clone);
	test = new FormControl(null, Validators.required);
	test2 = new FormControl(null, Validators.required);

	testForm: FormGroup;

	formitems = [{content: "Item one", selected: false}, {content: "Item two", selected: false}];

	constructor(private fb: FormBuilder) {
		let init2 = this.demoItems2[2];
		init2.selected = true;
		this.dropdown2 = [init2];

		// reactive forms
		this.testForm = this.fb.group({
			tests: this.fb.array([
				new FormGroup({
					drop: new FormControl(),
				}),
				new FormGroup({
					drop: new FormControl(),
				})
			])
		});

		this.testForm.valueChanges.forEach(value => console.log(value));
	}

	reset(model) {
		console.log(model);
		this.dropdown3 = [{
			content: "Item one",
			selected: true
		}];
	}

	reset2() {
		this.dropdown1 = {
			content: "Item one",
			selected: true
		};
	}

	onClose() {
		// handle on dropdown close event
		console.log("modal closed!");
	}

	addTestOption() {
		let array = this.testForm.get("tests") as FormArray;
		array.push(new FormGroup({drop: new FormControl()}));
	}

	testSubmit() {
		console.log(this.testForm);
	}

	getDisplay(model) {
		if (model && model.selected) {
			return model.content;
		}
	}

	getMultiDisplay(model) {
		if (model) {
			return `${model.length} selected`;
		}
	}

	onSelect(ev) {
		console.log("test", ev);
	}


	private clone (el) {
		return JSON.parse(JSON.stringify(el));
	}
}
