import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
	selector: "dropdown-demo",
	template: `
		<h1>Drop-down list demo</h1>

		<h3>Default drop-down list</h3>
		<div style="width: 400px">
			<n-dropdown
				placeholder="Select an option"
				size="sm">
				<n-dropdown-list [items]="demoItems1"></n-dropdown-list>
			</n-dropdown>
			<br><br>
			<n-dropdown placeholder="Select an option">
				<n-dropdown-list [items]="demoItems1"></n-dropdown-list>
			</n-dropdown>
			<br><br>
			<n-dropdown
				placeholder="Select an option"
				size="lg">
				<n-dropdown-list [items]="demoItems1"></n-dropdown-list>
			</n-dropdown>
		</div>

		<h3>Multi-select default drop-down list</h3>
		<div style="width: 400px">
			<n-dropdown
				placeholder="Select an option"
				size="sm"
				type="multi">
				<n-dropdown-list [items]="demoItems1"></n-dropdown-list>
			</n-dropdown>
			<br><br>
			<n-dropdown
				placeholder="Select an option"
				type="multi">
				<n-dropdown-list [items]="demoItems1"></n-dropdown-list>
			</n-dropdown>
			<br><br>
			<n-dropdown
				placeholder="Select an option"
				size="lg"
				type="multi">
				<n-dropdown-list [items]="demoItems1"></n-dropdown-list>
			</n-dropdown>
		</div>

		<h3>Search drop-down list</h3>
		<div style="width: 400px">
			<n-dropdown
				placeholder="Select an option"
				size="sm">
				<n-dropdown-filter [items]="demoItems1"></n-dropdown-filter>
			</n-dropdown>
			<br><br>
			<n-dropdown placeholder="Select an option">
				<n-dropdown-filter [items]="demoItems1"></n-dropdown-filter>
			</n-dropdown>
			<br><br>
			<n-dropdown
				placeholder="Select an option"
				size="lg">
				<n-dropdown-filter [items]="demoItems1"></n-dropdown-filter>
			</n-dropdown>
		</div>

		<h3>Multi-select search drop-down list</h3>
		<div style="width: 400px">
			<n-dropdown
				placeholder="Select an option"
				size="sm"
				type="multi">
				<n-dropdown-filter [items]="demoItems1"></n-dropdown-filter>
			</n-dropdown>
			<br><br>
			<n-dropdown
				placeholder="Select an option"
				type="multi"
				(selected)="onSelect($event)">
				<n-dropdown-filter [items]="demoItems1"></n-dropdown-filter>
			</n-dropdown>
			<br><br>
			<n-dropdown
				placeholder="Select an option"
				size="lg"
				type="multi">
				<n-dropdown-filter [items]="demoItems1"></n-dropdown-filter>
			</n-dropdown>
		</div>

		<h3>Drop-down tree</h3>
		<div style="width: 400px">
			<n-dropdown
				placeholder="Select an option"
				size="sm">
				<n-dropdown-tree
					[items]="demoItems3"
					[label]="'Drop-down with Tree view'">
				</n-dropdown-tree>
			</n-dropdown>
			<br><br>
			<n-dropdown placeholder="Select an option">
				<n-dropdown-tree
					[items]="demoItems3"
					[label]="'Drop-down with Tree view'">
				</n-dropdown-tree>
			</n-dropdown>
			<br><br>
			<n-dropdown
				placeholder="Select an option"
				size="lg">
				<n-dropdown-tree
					[items]="demoItems3"
					[label]="'Drop-down with Tree view'">
				</n-dropdown-tree>
			</n-dropdown>
		</div>

		<h3>Drop-down sub menu</h3>
		<div style="width: 250px">
			<n-dropdown
				placeholder="Select an option"
				size="sm">
				<n-dropdown-sub-menu [items]="demoItems4"></n-dropdown-sub-menu>
			</n-dropdown>
			<br><br>
			<n-dropdown
				placeholder="Select an option"
				[displayValue]="subdisplay2"
				(selected)="subdisplay2 = getDisplay($event.item)">
				<n-dropdown-sub-menu [items]="demoItems4"></n-dropdown-sub-menu>
			</n-dropdown>
			<br><br>
			<n-dropdown
				placeholder="Select an option"
				size="lg">
				<n-dropdown-sub-menu [items]="demoItems4"></n-dropdown-sub-menu>
			</n-dropdown>
		</div>

		<h3>Disabled drop-down list</h3>
		<n-dropdown
			placeholder="Drop-down 7"
			[disabled]="true"
			(selected)="onSelect($event)">
			<n-dropdown-list
				[items]="demoItems1">
			</n-dropdown-list>
		</n-dropdown>

		<h3>Default drop-down list with appendToBody true</h3>
		<div class="dropdown-appendbody-container" style="height: 150px;
		border: solid 1px red; overflow: scroll; width: 100%; position: relative;">
			<div style="width: 300px; display: inline-block">
				<b>AppendToBody: false</b>
				<n-dropdown
					placeholder="Select an option"
					[(ngModel)]="dropdown3"
					type="multi">
					<n-dropdown-list [items]="demoItems5"></n-dropdown-list>
				</n-dropdown>
				{{ dropdown3 | json }}
			</div>

			<div style="width: 300px; display: inline-block">
				<b>appendToBody: true</b>
				<n-dropdown
					scrollableContainer=".dropdown-appendbody-container"
					[appendToBody]="true"
					placeholder="Select an option"
					type="multi"
					[(ngModel)]="dropdown3">
					<n-dropdown-list [items]="demoItems5"></n-dropdown-list>
				</n-dropdown>
				{{ dropdown3 | json }}
				<button class="btn--primary" (click)="reset(dropdown3)">Reset selected</button>
			</div>

			<div style="width: 100%; height: 300px"></div>
		</div>

		<h3>Default drop-down list (ngmodel)</h3>
		<div style="width: 400px">
			<n-dropdown
				placeholder="Select an option"
				[(ngModel)]="dropdown1">
				<n-dropdown-list [items]="demoItems5"></n-dropdown-list>
			</n-dropdown>
			{{ dropdown1 | json }}
		</div>
		<button (click)="reset2()" class="btn--primary">Reset</button>

		<h3>Drop-down list with multi-select (ngmodel)</h3>
		<div style="width: 400px">
			<n-dropdown
				placeholder="Select an option"
				[(ngModel)]="dropdown2"
				(onClose)="onClose()"
				type="multi">
				<n-dropdown-list [items]="demoItems2"></n-dropdown-list>
			</n-dropdown>
			{{ dropdown2 | json }}
		</div>

		<h3>Drop-down list with multi-select</h3>
		<n-dropdown
			placeholder="Select an option"
			(selected)="multidisplay1 = getMultiDisplay($event.item)"
			type="multi">
			<n-dropdown-list
				[items]="demoItems1">
			</n-dropdown-list>
		</n-dropdown>

		<h3>Reactive form drop-down list</h3>
		<n-dropdown
			placeholder="Select an option"
			[formControl]="test">
			<n-dropdown-list [items]="testData"></n-dropdown-list>
		</n-dropdown>
		{{ test.value | json }}
		<br>
		{{ test.status | json }}
		<br>
		<br>
		<n-dropdown
			placeholder="Select an option"
			[formControl]="test2"
			type="multi">
			<n-dropdown-list [items]="testData2"></n-dropdown-list>
		</n-dropdown>
		{{ test2.value | json }}
		<br>
		form
		<br>
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
						{{ testDrop.value | json }}
					</div>
				</div>
			</div>
			<button type="button" class="btn--secondary" (click)="addTestOption()">add</button>
			<button type="submit" class="btn--primary">submit</button>
		</form>

		<h3>Default drop-down list with custom template</h3>
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

		<h3>Drop-down list item containers</h3>
		<div class="dropdown-wrapper">
			<div class="dropdown-menu open" style="position: relative;">
				<n-dropdown-list [items]="demoItems1"></n-dropdown-list>
			</div>
		</div>
		<br><br>
		<div class="dropdown-wrapper">
			<div class="dropdown-menu open" style="position: relative;">
				<n-dropdown-filter [items]="demoItems1"></n-dropdown-filter>
			</div>
		</div>
		<br><br>
		<div class="dropdown-wrapper">
			<div class="dropdown-menu open" style="position: relative;">
				<n-dropdown-filter [items]="demoItems1" type="multi"></n-dropdown-filter>
			</div>
		</div>
		<br><br>
		<div class="dropdown-wrapper">
			<div class="dropdown-menu open" style="position: relative;">
				<n-dropdown-tree [items]="demoItems3"></n-dropdown-tree>
			</div>
		</div>
		<br><br>
		<div class="dropdown-wrapper" style="width: 250px;">
			<div class="dropdown-menu open" style="position: relative;">
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

	private clone (el) {
		return JSON.parse(JSON.stringify(el));
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

}
