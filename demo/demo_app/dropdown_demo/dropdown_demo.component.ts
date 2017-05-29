import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
	selector: "dropdown-demo",
	template: `
		<h1>Dropdown Demo</h1>

		<h3>Default dropdown</h3>
		<div style="width: 400px">
			<cdl-dropdown
				placeholder="Select an option"
				size="sm">
				<cdl-dropdown-list [items]="demoItems1"></cdl-dropdown-list>
			</cdl-dropdown>
			<br><br>
			<cdl-dropdown placeholder="Select an option">
				<cdl-dropdown-list [items]="demoItems1"></cdl-dropdown-list>
			</cdl-dropdown>
			<br><br>
			<cdl-dropdown
				placeholder="Select an option"
				size="lg">
				<cdl-dropdown-list [items]="demoItems1"></cdl-dropdown-list>
			</cdl-dropdown>
		</div>

		<h3>Multi-select default dropdown</h3>
		<div style="width: 400px">
			<cdl-dropdown
				placeholder="Select an option"
				size="sm"
				type="multi">
				<cdl-dropdown-list [items]="demoItems1"></cdl-dropdown-list>
			</cdl-dropdown>
			<br><br>
			<cdl-dropdown
				placeholder="Select an option"
				type="multi">
				<cdl-dropdown-list [items]="demoItems1"></cdl-dropdown-list>
			</cdl-dropdown>
			<br><br>
			<cdl-dropdown
				placeholder="Select an option"
				size="lg"
				type="multi">
				<cdl-dropdown-list [items]="demoItems1"></cdl-dropdown-list>
			</cdl-dropdown>
		</div>

		<h3>Filter dropdown</h3>
		<div style="width: 400px">
			<cdl-dropdown
				placeholder="Select an option"
				size="sm">
				<cdl-dropdown-filter [items]="demoItems1"></cdl-dropdown-filter>
			</cdl-dropdown>
			<br><br>
			<cdl-dropdown placeholder="Select an option">
				<cdl-dropdown-filter [items]="demoItems1"></cdl-dropdown-filter>
			</cdl-dropdown>
			<br><br>
			<cdl-dropdown
				placeholder="Select an option"
				size="lg">
				<cdl-dropdown-filter [items]="demoItems1"></cdl-dropdown-filter>
			</cdl-dropdown>
		</div>

		<h3>Multi-select filter dropdown</h3>
		<div style="width: 400px">
			<cdl-dropdown
				placeholder="Select an option"
				size="sm"
				type="multi">
				<cdl-dropdown-filter [items]="demoItems1"></cdl-dropdown-filter>
			</cdl-dropdown>
			<br><br>
			<cdl-dropdown
				placeholder="Select an option"
				type="multi">
				<cdl-dropdown-filter [items]="demoItems1"></cdl-dropdown-filter>
			</cdl-dropdown>
			<br><br>
			<cdl-dropdown
				placeholder="Select an option"
				size="lg"
				type="multi">
				<cdl-dropdown-filter [items]="demoItems1"></cdl-dropdown-filter>
			</cdl-dropdown>
		</div>

		<h3>Dropdown with tree</h3>
		<div style="width: 400px">
			<cdl-dropdown
				placeholder="Select an option"
				size="sm">
				<cdl-dropdown-tree
					[items]="demoItems3"
					[label]="'Dropdown with Tree view'">
				</cdl-dropdown-tree>
			</cdl-dropdown>
			<br><br>
			<cdl-dropdown placeholder="Select an option">
				<cdl-dropdown-tree
					[items]="demoItems3"
					[label]="'Dropdown with Tree view'">
				</cdl-dropdown-tree>
			</cdl-dropdown>
			<br><br>
			<cdl-dropdown
				placeholder="Select an option"
				size="lg">
				<cdl-dropdown-tree
					[items]="demoItems3"
					[label]="'Dropdown with Tree view'">
				</cdl-dropdown-tree>
			</cdl-dropdown>
		</div>

		<h3>Dropdown with sub menu</h3>
		<div style="width: 250px">
			<cdl-dropdown
				placeholder="Select an option"
				size="sm">
				<cdl-dropdown-sub-menu [items]="demoItems4"></cdl-dropdown-sub-menu>
			</cdl-dropdown>
			<br><br>
			<cdl-dropdown
				placeholder="Select an option"
				[displayValue]="subdisplay2"
				(select)="subdisplay2 = getDisplay($event.item)">
				<cdl-dropdown-sub-menu [items]="demoItems4"></cdl-dropdown-sub-menu>
			</cdl-dropdown>
			<br><br>
			<cdl-dropdown
				placeholder="Select an option"
				size="lg">
				<cdl-dropdown-sub-menu [items]="demoItems4"></cdl-dropdown-sub-menu>
			</cdl-dropdown>
		</div>

		<h3>Disabled dropdown</h3>
		<cdl-dropdown
			placeholder="Dropdown 7"
			[disabled]="true"
			(select)="onSelect($event)">
			<cdl-dropdown-list
				[items]="demoItems1">
			</cdl-dropdown-list>
		</cdl-dropdown>

		<h3>Default dropdown with appendToBody true</h3>
		<div class="dropdown-appendbody-container" style="height: 150px;
		border: solid 1px red; overflow: scroll; width: 100%; position: relative;">
			<div style="width: 300px; display: inline-block">
				<b>AppendToBody: false</b>
				<cdl-dropdown
					placeholder="Select an option"
					[(ngModel)]="dropdown3"
					type="multi">
					<cdl-dropdown-list [items]="demoItems5"></cdl-dropdown-list>
				</cdl-dropdown>
				{{ dropdown3 | json }}
			</div>

			<div style="width: 300px; display: inline-block">
				<b>AppendToBody: true</b>
				<cdl-dropdown
					scrollableContainer=".dropdown-appendbody-container"
					[appendToBody]="true"
					placeholder="Select an option"
					type="multi"
					[(ngModel)]="dropdown3">
					<cdl-dropdown-list [items]="demoItems5"></cdl-dropdown-list>
				</cdl-dropdown>
				{{ dropdown3 | json }}
				<button class="btn" (click)="reset(dropdown3)">reset selected</button>
			</div>

			<div style="width: 100%; height: 300px"></div>
		</div>

		<h3>Default dropdown (ngmodel)</h3>
		<div style="width: 400px">
			<cdl-dropdown
				placeholder="Select an option"
				[(ngModel)]="dropdown1">
				<cdl-dropdown-list [items]="demoItems5"></cdl-dropdown-list>
			</cdl-dropdown>
			{{ dropdown1 | json }}
		</div>
		<button (click)="reset2()" class="btn">reset</button>

		<h3>Dropdown with multi-select (ngmodel)</h3>
		<div style="width: 400px">
			<cdl-dropdown
				placeholder="Select an option"
				[(ngModel)]="dropdown2"
				(onClose)="onClose()"
				type="multi">
				<cdl-dropdown-list [items]="demoItems2"></cdl-dropdown-list>
			</cdl-dropdown>
			{{ dropdown2 | json }}
		</div>

		<h3>Dropdown with multi-select</h3>
		<cdl-dropdown
			placeholder="Select an option"
			(select)="multidisplay1 = getMultiDisplay($event.item)"
			type="multi">
			<cdl-dropdown-list
				[items]="demoItems1">
			</cdl-dropdown-list>
		</cdl-dropdown>

		<h3>Reactive form dropdown</h3>
		<cdl-dropdown
			placeholder="Select an option"
			[formControl]="test">
			<cdl-dropdown-list [items]="testData"></cdl-dropdown-list>
		</cdl-dropdown>
		{{ test.value | json }}
		<br>
		{{ test.status | json }}
		<br>
		<br>
		<cdl-dropdown
			placeholder="Select an option"
			[formControl]="test2"
			type="multi">
			<cdl-dropdown-list [items]="testData2"></cdl-dropdown-list>
		</cdl-dropdown>
		{{ test2.value | json }}
		<br>
		form
		<br>
		<form [formGroup]="testForm" novalidate (ngSubmit)="testSubmit(testForm)">
			<div formArrayName="tests">
				<div *ngFor="let testDrop of testForm.controls.tests.controls; let i = index">
					<div [formGroupName]="i">
						<cdl-dropdown
							formControlName="drop"
							type="multi"
							placeholder="Select an option">
							<cdl-dropdown-list [items]="formitems"></cdl-dropdown-list>
						</cdl-dropdown>
						{{ testDrop.value | json }}
					</div>
				</div>
			</div>
			<button type="button" class="btn btn-secondary" (click)="addTestOption()">add</button>
			<button type="submit" class="btn">submit</button>
		</form>

		<h3>Default dropdown with custom template</h3>
		<ng-template #listTpl let-item="item">
			<cdl-glyphicon
				*ngIf="item.selected"
				icon="Checkbox Selected"
				size="md">
			</cdl-glyphicon>
			<cdl-glyphicon
				*ngIf="!item.selected"
				icon="Checkbox Empty"
				size="md">
			</cdl-glyphicon>
			{{ item.content }}
		</ng-template>
		<div style="width: 400px">
			<cdl-dropdown
				placeholder="Select an option"
				type="multi">
				<cdl-dropdown-list
					[items]="demoItems1"
					[listTpl]="listTpl">
				</cdl-dropdown-list>
			</cdl-dropdown>
		</div>

		<h3>Dropdown item containers</h3>
		<div class="dropdown-wrapper">
			<div class="dropdown-menu open" style="position: relative;">
				<cdl-dropdown-list [items]="demoItems1"></cdl-dropdown-list>
			</div>
		</div>
		<br><br>
		<div class="dropdown-wrapper">
			<div class="dropdown-menu open" style="position: relative;">
				<cdl-dropdown-filter [items]="demoItems1"></cdl-dropdown-filter>
			</div>
		</div>
		<br><br>
		<div class="dropdown-wrapper">
			<div class="dropdown-menu open" style="position: relative;">
				<cdl-dropdown-filter [items]="demoItems1" type="multi"></cdl-dropdown-filter>
			</div>
		</div>
		<br><br>
		<div class="dropdown-wrapper">
			<div class="dropdown-menu open" style="position: relative;">
				<cdl-dropdown-tree [items]="demoItems3"></cdl-dropdown-tree>
			</div>
		</div>
		<br><br>
		<div class="dropdown-wrapper" style="width: 250px;">
			<div class="dropdown-menu open" style="position: relative;">
				<cdl-dropdown-sub-menu [items]="demoItems4"></cdl-dropdown-sub-menu>
			</div>
		</div>
	`,
})
export class DropdownDemo {
	demoItems1 = [
		{
			content: "a item one",
			selected: false
		},
		{
			content: "b item two",
			selected: false,
			disabled: true
		},
		{
			content: "c item three",
			selected: false
		},
		{
			content: "d item four",
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
			content: "item one",
			selected: false
		},
		{
			content: "item two",
			selected: false,
			items: [
				{
					content: "sub item two 1",
					selected: false
				},
				{
					content: "sub item two 2",
					selected: false,
					items: [
						{
							content: "sub item two 1b",
							selected: false
						},
						{
							content: "sub item two 2b",
							selected: false,
						}
					]
				},
			]
		},
		{
			content: "item three",
			selected: false,
		},
		{
			content: "item four",
			selected: false
		}
	];

	demoItems4 = Array.from(this.demoItems3, this.clone);
	demoItems5 = Array.from(this.demoItems1, this.clone);
	dropdown1 = null;
	dropdown2 = [];
	dropdown3 = [];

	testData = Array.from(this.demoItems1, this.clone);
	testData2 = Array.from(this.demoItems1, this.clone);
	test = new FormControl(null, Validators.required);
	test2 = new FormControl(null, Validators.required);

	testForm: FormGroup;

	formitems = [{content: "item one", selected: false}, {content: "item two", selected: false}];

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
			content: "item one",
			selected: true
		}];
	}

	reset2() {
		this.dropdown1 = {
			content: "item one",
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
		console.log("this shouldnt fire");
		ev.item.selected = !ev.item.selected;
	}

}
