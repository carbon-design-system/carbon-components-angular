import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
	selector: "dropdown-demo",
	template: `
		<h1>Dropdown Demo</h1>

		<h3>Default dropdown</h3>
		<div style="width: 400px">
			<cdl-dropdown
				[displayValue]="display1"
				(select)="onSelectAndDisplay1($event)"
				size="sm">
				<cdl-dropdown-list [items]="demoItems1"></cdl-dropdown-list>
			</cdl-dropdown>
			<br><br>
			<cdl-dropdown
				[displayValue]="display1"
				(select)="onSelectAndDisplay1($event)">
				<cdl-dropdown-list [items]="demoItems1"></cdl-dropdown-list>
			</cdl-dropdown>
			<br><br>
			<cdl-dropdown
				[displayValue]="display1"
				(select)="onSelectAndDisplay1($event)"
				size="lg">
				<cdl-dropdown-list [items]="demoItems1"></cdl-dropdown-list>
			</cdl-dropdown>
		</div>

		<h3>Dropdown with tree</h3>
		<div style="width: 400px">
			<cdl-dropdown
				(select)="onSelectAndDisplay4($event)"
				[displayValue]="display4"
				size="sm">
				<cdl-dropdown-tree
					[items]="demoItems4"
					[selectedIcon]="false"
					[label]="'Dropdown with Tree view'">
				</cdl-dropdown-tree>
			</cdl-dropdown>
			<br><br>
			<cdl-dropdown
				(select)="onSelectAndDisplay4($event)"
				[displayValue]="display4">
				<cdl-dropdown-tree
					[items]="demoItems4"
					[selectedIcon]="false"
					[label]="'Dropdown with Tree view'">
				</cdl-dropdown-tree>
			</cdl-dropdown>
			<br><br>
			<cdl-dropdown
				(select)="onSelectAndDisplay4($event)"
				[displayValue]="display4"
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
				[displayValue]="display5"
				(select)="onSelectAndDisplay5($event)"
				size="sm">
				<cdl-dropdown-sub-menu
					[items]="demoItems5"
					[selectedIcon]="false">
				</cdl-dropdown-sub-menu>
			</cdl-dropdown>
			<br><br>
			<cdl-dropdown
				[displayValue]="display5"
				(select)="onSelectAndDisplay5($event)">
				<cdl-dropdown-sub-menu
					[items]="demoItems5"
					[selectedIcon]="false">
				</cdl-dropdown-sub-menu>
			</cdl-dropdown>
			<br><br>
			<cdl-dropdown
				[displayValue]="display5"
				(select)="onSelectAndDisplay5($event)"
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
				[items]="demoItems7">
			</cdl-dropdown-list>
		</cdl-dropdown>

		<h3>Default dropdown with appendToBody true</h3>
		<div style="height: 100px; border: solid 1px red; overflow: hidden; width: 100%">
			<div style="width: 300px; display: inline-block">
				<b>AppendToBody: false</b>
				<cdl-dropdown
					[displayValue]="getDisplay(dropdown1)"
					[(ngModel)]="dropdown1">
					<cdl-dropdown-list [items]="demoItems8"></cdl-dropdown-list>
				</cdl-dropdown>
				{{ dropdown1 | json }}
			</div>

			<div style="width: 300px; display: inline-block">
				<b>AppendToBody: true</b>
				<cdl-dropdown
					[appendToBody]="true"
					[displayValue]="getDisplay(dropdown1)"
					[(ngModel)]="dropdown1">
					<cdl-dropdown-list [items]="demoItems8"></cdl-dropdown-list>
				</cdl-dropdown>
				{{ dropdown1 | json }}
			</div>
		</div>

		<h3>Default dropdown (ngmodel)</h3>
		<div style="width: 400px">
			<cdl-dropdown
				[displayValue]="getDisplay(dropdown1)"
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
				type="multi">
				<cdl-dropdown-list [items]="demoItems2"></cdl-dropdown-list>
			</cdl-dropdown>
			{{ dropdown2 | json }}
		</div>

		<h3>Dropdown with multi-select</h3>
		<cdl-dropdown
			[displayValue]="display6"
			(select)="onSelectAndDisplay6($event)"
			type="multi">
			<cdl-dropdown-list
				[items]="demoItems6">
			</cdl-dropdown-list>
		</cdl-dropdown>

		<h3>Reactive form dropdown</h3>
		<cdl-dropdown
			[displayValue]="'Select an option'"
			[formControl]="test">
			<cdl-dropdown-list [items]="testData"></cdl-dropdown-list>
		</cdl-dropdown>
		{{ test.value | json }}
		{{ test.status | json }}

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
				[displayValue]="display3"
				(select)="onSelectAndDisplay3($event)"
				type="multi">
				<cdl-dropdown-list
					[items]="demoItems3"
					[listTpl]="listTpl">
				</cdl-dropdown-list>
			</cdl-dropdown>
		</div>
	`,
})
export class DropdownDemo {
	title = "Tabs Component Demo";
	itemsSelected = 0;
	itemsSelected2= 0;
	display1 = "Select an option";
	display2 = "Select an option";
	display3 = "No Items selected";
	display4 = "Select";
	display5 = "Select";
	display6 = "No Items selected";

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
	test = new FormControl(null, Validators.required);

	constructor() {
		let init = this.demoItems8[0];
		init.selected = true;
		this.dropdown1 = init;
		let init2 = this.demoItems2[2];
		init2.selected = true;
		this.dropdown2 = [init2];
	}
	private clone (el) {
		return JSON.parse(JSON.stringify(el));
	}

	getDisplay(model) {
		if (model && model.selected) {
			return model.content;
		}
		return "Select an option";
	}

	getMultiDisplay(model) {
		if (model) {
			return `${model.length} selected`;
		}
		return "Select an option";
	}
	onSelect(ev) {
		ev.item.selected = !ev.item.selected;
	}

	onSelectAndDisplay1(ev) {
		if (ev.item.selected) {
			this.display1 = ev.item.content;
		} else {
			this.display1 = "Select an option";
		}
	}
	onSelectAndDisplay2(ev) {
		if (ev.item.selected) {
			this.display2 = ev.item.content;
		} else {
			this.display2 = "Select an option";
		}
	}

	onSelectAndDisplay3(ev) {
		this.itemsSelected = ev.item.selected ? this.itemsSelected + 1 : this.itemsSelected - 1;

		if (this.itemsSelected === 0) {
			this.display3 = "No items selected";
		} else if (this.itemsSelected === 1) {
			this.display3 = "1 item selected";
		} else {
			this.display3 = `${this.itemsSelected} items selected`;
		}
	}

	onSelectAndDisplay4(ev) {
		if (!ev.item.items) {
			if (ev.item.selected) {
				this.display4 = ev.item.content;
			} else {
				this.display4 = "Select";
			}
		}
	}

	onSelectAndDisplay5(ev) {
		if (!ev.item.items) {
			if (ev.item.selected) {
				this.display5 = ev.item.content;
			} else {
				this.display5 = "Select";
			}
		}
	}

	onSelectAndDisplay6(ev) {
		this.itemsSelected2 = ev.item.selected ? this.itemsSelected2 + 1 : this.itemsSelected2 - 1;
		if (this.itemsSelected2 === 0) {
			this.display6 = "No items selected";
		} else if (this.itemsSelected2 === 1) {
			this.display6 = "1 item selected";
		} else {
			this.display6 = `${this.itemsSelected2} items selected`;
		}
	}
}
