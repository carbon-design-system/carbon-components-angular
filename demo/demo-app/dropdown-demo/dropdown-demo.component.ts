import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
	selector: "app-dropdown-demo",
	template: `
		<h1 class="p-demo-heading">Drop-down list</h1>

		<h2 class="p-demo-section">Default</h2>
		<div style="width: 400px">
			<ibm-dropdown
				placeholder="Select an option"
				size="sm">
				<ibm-dropdown-list [items]="demoItems1"></ibm-dropdown-list>
			</ibm-dropdown>
			<br>
			<ibm-dropdown placeholder="Select an option">
				<ibm-dropdown-list [items]="demoItems1"></ibm-dropdown-list>
			</ibm-dropdown>
			<br>
			<ibm-dropdown
				placeholder="Select an option"
				size="lg">
				<ibm-dropdown-list [items]="demoItems1"></ibm-dropdown-list>
			</ibm-dropdown>
		</div>

		<h3 class="p-demo-variation">Disabled</h3>
		<div style="width: 400px">
			<ibm-dropdown
				placeholder="Drop-down 7"
				[disabled]="true"
				(selected)="onSelect($event)">
				<ibm-dropdown-list
					[items]="demoItems1">
				</ibm-dropdown-list>
			</ibm-dropdown>
		</div>

		<h2 class="p-demo-section">Multi-select</h2>
		<div style="width: 400px">
			<ibm-dropdown
				placeholder="Select an option"
				size="sm"
				type="multi">
				<ibm-dropdown-list [items]="demoItems1"></ibm-dropdown-list>
			</ibm-dropdown>
			<br>
			<ibm-dropdown
				placeholder="Select an option"
				type="multi">
				<ibm-dropdown-list [items]="demoItems1"></ibm-dropdown-list>
			</ibm-dropdown>
			<br>
			<ibm-dropdown
				placeholder="Select an option"
				size="lg"
				type="multi">
				<ibm-dropdown-list [items]="demoItems1"></ibm-dropdown-list>
			</ibm-dropdown>
		</div>

		<h2 class="p-demo-section">Searchable</h2>
		<h3 class="p-demo-variation">Single select</h3>
		<div style="width: 400px">
			<ibm-dropdown placeholder="Select an option">
				<ibm-dropdown-filter [items]="demoItems1"></ibm-dropdown-filter>
			</ibm-dropdown>
		</div>
		<h3 class="p-demo-variation">Multi-select</h3>
		<div style="width: 400px">
			<ibm-dropdown
				placeholder="Select an option"
				type="multi"
				(selected)="onSelect($event)">
				<ibm-dropdown-filter [items]="demoItems1"></ibm-dropdown-filter>
			</ibm-dropdown>
		</div>

		<h2 class="p-demo-section"><code>appendToBody</code> enabled</h2>
		<div class="dropdown-appendbody-container" style="height: 150px;
		border: solid 1px red; overflow: scroll; width: 100%; position: relative;">
			<div style="width: 300px;">
				<ibm-dropdown
					scrollableContainer=".dropdown-appendbody-container"
					[appendToBody]="true"
					placeholder="Select an option"
					type="multi"
					[(ngModel)]="dropdown3">
					<ibm-dropdown-list [items]="demoItems5"></ibm-dropdown-list>
				</ibm-dropdown>
				<p>Selected: {{ dropdown3 | json }}</p>
				<button class="btn--primary" (click)="reset(dropdown3)">Reset selected</button>
			</div>
		</div>

		<h2 class="p-demo-section">ngModel</h2>
		<h3 class="p-demo-variation">Single select</h3>
		<div style="width: 400px">
			<ibm-dropdown
				placeholder="Select an option"
				[(ngModel)]="dropdown1">
				<ibm-dropdown-list [items]="demoItems5"></ibm-dropdown-list>
			</ibm-dropdown>
			<p>Selected: {{ dropdown1 | json }}</p>
		</div>
		<button (click)="reset2()" class="btn--primary">Reset</button>
		<h3 class="p-demo-variation">Multi-select</h3>
		<div style="width: 400px">
			<ibm-dropdown
				placeholder="Select an option"
				[(ngModel)]="dropdown2"
				(onClose)="onClose()"
				type="multi">
				<ibm-dropdown-list [items]="demoItems2"></ibm-dropdown-list>
			</ibm-dropdown>
			<p>Selected: {{ dropdown2 | json }}</p>
		</div>

		<h2 class="p-demo-section">Events</h2>
		<h3 class="p-demo-variation">Multi-select selected</h3>
		<ibm-dropdown
			placeholder="Select an option"
			(selected)="multidisplay1 = getMultiDisplay($event.item)"
			type="multi">
			<ibm-dropdown-list
				[items]="demoItems1">
			</ibm-dropdown-list>
		</ibm-dropdown>
		<h3 class="p-demo-variation">Reactive form</h3>
		<ibm-dropdown
			placeholder="Select an option"
			[formControl]="test">
			<ibm-dropdown-list [items]="testData"></ibm-dropdown-list>
		</ibm-dropdown>
		<p>Value: {{ test.value | json }}</p>
		<p>Status: {{ test.status | json }}</p>
		<ibm-dropdown
			placeholder="Select an option"
			[formControl]="test2"
			type="multi">
			<ibm-dropdown-list [items]="testData2"></ibm-dropdown-list>
		</ibm-dropdown>
		<p>Value: {{ test2.value | json }}</p>
		<form [formGroup]="testForm" novalidate (ngSubmit)="testSubmit(testForm)">
			<div formArrayName="tests">
				<div *ngFor="let testDrop of testForm.controls.tests.controls; let i = index">
					<div [formGroupName]="i">
						<ibm-dropdown
							formControlName="drop"
							type="multi"
							placeholder="Select an option">
							<ibm-dropdown-list [items]="formitems"></ibm-dropdown-list>
						</ibm-dropdown>
						<p>Value: {{ testDrop.value | json }}</p>
					</div>
				</div>
			</div>
			<button type="button" class="btn--secondary" (click)="addTestOption()">add</button>
			<button type="submit" class="btn--primary">submit</button>
		</form>

		<h2 class="p-demo-section">Custom template</h2>
		<ng-template #listTpl let-item="item">
			<ibm-icon
				*ngIf="item.selected"
				icon="Checkbox Selected"
				size="md">
			</ibm-icon>
			<ibm-icon
				*ngIf="!item.selected"
				icon="Checkbox Empty"
				size="md">
			</ibm-icon>
			{{ item.content }}
		</ng-template>
		<div style="width: 400px">
			<ibm-dropdown
				placeholder="Select an option"
				type="multi">
				<ibm-dropdown-list
					[items]="demoItems1"
					[listTpl]="listTpl">
				</ibm-dropdown-list>
			</ibm-dropdown>
		</div>

		<h2 class="p-demo-section">Internal components</h2>
		<h3 class="p-demo-variation">Drop-down list</h3>
		<div class="dropdown_wrapper">
			<div class="dropdown_menu" style="position: relative; display: block;" role="listbox">
				<ibm-dropdown-list [items]="demoItems1"></ibm-dropdown-list>
			</div>
		</div>
		<br>
		<h3 class="p-demo-variation">Drop-down filter</h3>
		<div class="dropdown_wrapper">
			<div class="dropdown_menu" style="position: relative; display: block;" role="listbox">
				<ibm-dropdown-filter [items]="demoItems1"></ibm-dropdown-filter>
			</div>
		</div>
		<br>
		<h3 class="p-demo-variation">Drop-down multi filter</h3>
		<div class="dropdown_wrapper">
			<div class="dropdown_menu" style="position: relative; display: block;" role="listbox">
				<ibm-dropdown-filter [items]="demoItems1" type="multi"></ibm-dropdown-filter>
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
		},
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
		},
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
		},
		{
			content: "Item five",
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
				},
				{
					content: "Sub item two 3",
					selected: false,
				},
				{
					content: "Sub item two 4",
					selected: false,
				},
				{
					content: "Sub item two 4",
					selected: false,
				},
				{
					content: "Sub item two 5",
					selected: false,
				},
				{
					content: "Sub item two 6",
					selected: false,
				},
				{
					content: "Sub item two 7",
					selected: false,
				},
				{
					content: "Sub item two 8",
					selected: false,
				},
				{
					content: "Sub item two 9",
					selected: false,
				},
				{
					content: "Sub item two 10",
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
		},
		{
			content: "Item five",
			selected: false,
		},
		{
			content: "Item six",
			selected: false,
		},
		{
			content: "Item seven",
			selected: false,
		},
		{
			content: "Item eight",
			selected: false,
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
