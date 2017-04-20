import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
	selector: "dropdown-demo",
	template: `
		<h1>Dropdown Demo</h1>

		<h3>Default dropdown</h3>
		<div style="width: 400px">
			<cdl-dropdown
				[displayValue]="defaultdisplay1 || 'Select an option'"
				(select)="defaultdisplay1 = getDisplay($event.item)"
				size="sm">
				<cdl-dropdown-list [items]="demoItems1"></cdl-dropdown-list>
			</cdl-dropdown>
			<br><br>
			<cdl-dropdown
				[displayValue]="defaultdisplay2 || 'Select an option'"
				(select)="defaultdisplay2 = getDisplay($event.item)">
				<cdl-dropdown-list [items]="demoItems1"></cdl-dropdown-list>
			</cdl-dropdown>
			<br><br>
			<cdl-dropdown
				[displayValue]="defaultdisplay3 || 'Select an option'"
				(select)="defaultdisplay3 = getDisplay($event.item)"
				size="lg">
				<cdl-dropdown-list [items]="demoItems1"></cdl-dropdown-list>
			</cdl-dropdown>
		</div>

		<h3>Dropdown with tree</h3>
		<div style="width: 400px">
			<cdl-dropdown
				[displayValue]="treedisplay1 || 'Select an option'"
				(select)="treedisplay1 = getDisplay($event.item)"
				size="sm">
				<cdl-dropdown-tree
					[items]="demoItems4"
					[selectedIcon]="false"
					[label]="'Dropdown with Tree view'">
				</cdl-dropdown-tree>
			</cdl-dropdown>
			<br><br>
			<cdl-dropdown
				[displayValue]="treedisplay2 || 'Select an option'"
				(select)="treedisplay2 = getDisplay($event.item)">
				<cdl-dropdown-tree
					[items]="demoItems4"
					[selectedIcon]="false"
					[label]="'Dropdown with Tree view'">
				</cdl-dropdown-tree>
			</cdl-dropdown>
			<br><br>
			<cdl-dropdown
				[displayValue]="treedisplay3 || 'Select an option'"
				(select)="treedisplay3 = getDisplay($event.item)"
				size="lg">
				<cdl-dropdown-tree
					[items]="demoItems4"
					[selectedIcon]="false"
					[label]="'Dropdown with Tree view'">
				</cdl-dropdown-tree>
			</cdl-dropdown>
		</div>

		<h3>Dropdown with sub menu</h3>
		<div style="width: 250px">
			<cdl-dropdown
				[displayValue]="subdisplay1 || 'Select an option'"
				(select)="subdisplay1 = getDisplay($event.item)"
				size="sm">
				<cdl-dropdown-sub-menu
					[items]="demoItems5"
					[selectedIcon]="false">
				</cdl-dropdown-sub-menu>
			</cdl-dropdown>
			<br><br>
			<cdl-dropdown
				[displayValue]="subdisplay2 || 'Select an option'"
				(select)="subdisplay2 = getDisplay($event.item)">
				<cdl-dropdown-sub-menu
					[items]="demoItems5"
					[selectedIcon]="false">
				</cdl-dropdown-sub-menu>
			</cdl-dropdown>
			<br><br>
			<cdl-dropdown
				[displayValue]="subdisplay3 || 'Select an option'"
				(select)="subdisplay3 = getDisplay($event.item)"
				size="lg">
				<cdl-dropdown-sub-menu
					[items]="demoItems5"
					[selectedIcon]="false">
				</cdl-dropdown-sub-menu>
			</cdl-dropdown>
		</div>

		<h3>Disabled dropdown</h3>
		<cdl-dropdown
			displayValue="Dropdown 7"
			[disabled]="true"
			(select)="onSelect($event)">
			<cdl-dropdown-list
				[items]="demoItems1">
			</cdl-dropdown-list>
		</cdl-dropdown>

		<h3>Default dropdown with appendToBody true</h3>
		<div style="height: 100px; border: solid 1px red; overflow: hidden; width: 100%">
			<div style="width: 300px; display: inline-block">
				<b>AppendToBody: false</b>
				<cdl-dropdown
					[displayValue]="getDisplay(dropdown1) || 'Select an option'"
					[(ngModel)]="dropdown1">
					<cdl-dropdown-list [items]="demoItems8"></cdl-dropdown-list>
				</cdl-dropdown>
				{{ dropdown1 | json }}
			</div>

			<div style="width: 300px; display: inline-block">
				<b>AppendToBody: true</b>
				<cdl-dropdown
					[appendToBody]="true"
					[displayValue]="getDisplay(dropdown1) || 'Select an option'"
					type="multi"
					[(ngModel)]="dropdown1">
					<cdl-dropdown-list [items]="demoItems8"></cdl-dropdown-list>
				</cdl-dropdown>
				{{ dropdown1 | json }}
			</div>
		</div>

		<h3>Default dropdown (ngmodel)</h3>
		<div style="width: 400px">
			<cdl-dropdown
				[displayValue]="getDisplay(dropdown1) || 'Select an option'"
				[(ngModel)]="dropdown1">
				<cdl-dropdown-list [items]="demoItems8"></cdl-dropdown-list>
			</cdl-dropdown>
			{{ dropdown1 | json }}
		</div>

		<h3>Dropdown with multi-select (ngmodel)</h3>
		<div style="width: 400px">
			<cdl-dropdown
				[displayValue]="getMultiDisplay(dropdown2)"
				[(ngModel)]="dropdown2"
				(onClose)="onClose()"
				type="multi">
				<cdl-dropdown-list [items]="demoItems2"></cdl-dropdown-list>
			</cdl-dropdown>
			{{ dropdown2 | json }}
		</div>

		<h3>Dropdown with multi-select</h3>
		<cdl-dropdown
			[displayValue]="multidisplay1 || 'Select an option'"
			(select)="multidisplay1 = getMultiDisplay($event.item)"
			type="multi">
			<cdl-dropdown-list
				[items]="demoItems1">
			</cdl-dropdown-list>
		</cdl-dropdown>

		<h3>Reactive form dropdown</h3>
		<cdl-dropdown
			[displayValue]="'Select an option'"
			[formControl]="test">
			<cdl-dropdown-list [items]="testData"></cdl-dropdown-list>
		</cdl-dropdown>
		{{ test.value | json }}
		<br>
		{{ test.status | json }}
		<br>
		<br>
		<cdl-dropdown
			[displayValue]="'Select an option'"
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
							[displayValue]="getMultiDisplay(testDrop.value.drop) || 'Select an option'">
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
				[displayValue]="customdisplay1 || 'Select an option'"
				(select)="customdisplay1 = getDisplay($event.item)"
				type="multi">
				<cdl-dropdown-list
					[items]="demoItems1"
					[listTpl]="listTpl">
				</cdl-dropdown-list>
			</cdl-dropdown>
		</div>
	`,
})
export class DropdownDemo {
	demoItems1 = [
		{
			content: "item one",
			selected: false
		},
		{
			content: "item two",
			selected: false,
		},
		{
			content: "item three",
			selected: false
		},
		{
			content: "item four",
			selected: false
		}
	];

	demoItems2 = Array.from(this.demoItems1, this.clone);
	demoItems3 = Array.from(this.demoItems1, this.clone);
	demoItems4 = [
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

	demoItems5 = Array.from(this.demoItems4, this.clone);
	demoItems6 = Array.from(this.demoItems1, this.clone);
	demoItems7 = Array.from(this.demoItems1, this.clone);
	demoItems8 = Array.from(this.demoItems1, this.clone);
	dropdown1 = {};
	dropdown2 = [];

	testData = Array.from(this.demoItems1, this.clone);
	testData2 = Array.from(this.demoItems1, this.clone);
	test = new FormControl(null, Validators.required);
	test2 = new FormControl(null, Validators.required);

	testForm: FormGroup;

	formitems = [{content: "item one", selected: false}, {content: "item two", selected: false}];

	constructor(private fb: FormBuilder) {
		let init = this.demoItems8[0];
		init.selected = true;
		this.dropdown1 = init;
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

	private clone (el) {
		return JSON.parse(JSON.stringify(el));
	}

	onClose() {
		// handle on dropdown close event
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
