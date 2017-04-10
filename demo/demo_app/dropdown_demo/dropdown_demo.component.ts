import { Component, OnInit } from "@angular/core";

@Component({
	selector: "dropdown-demo",
	template: `
		<h1>Dropdown Demo</h1>

		<h3>Default Drop down</h3>
		<div style="width: 400px">
			<cdl-dropdown 
				[displayValue]="display1"
				(select)="onSelectAndDisplay1($event)">
				<cdl-dropdown-list [items]="demoItems1"></cdl-dropdown-list>
			</cdl-dropdown>
		</div>

		<h3>Default Drop down (ngmodel)</h3>
		<div style="width: 400px">
			<cdl-dropdown 
				[displayValue]="dropdown1?dropdown1.content:'Select an option'" 
				[(ngModel)]="dropdown1">
				<cdl-dropdown-list [items]="demoItems8"></cdl-dropdown-list>
			</cdl-dropdown>
			{{dropdown1 | json}}
		</div>

		<h3>Default Drop down with custom template</h3>
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
			{{item.content}}
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

		<h3>Drop down with tree view</h3>
		<div style="width: 400px">
			<cdl-dropdown
				(select)="onSelectAndDisplay4($event)"
				[displayValue]="display4">
				<cdl-dropdown-tree
					[items]="demoItems4"
					[selectedIcon]="false"
					[label]="'Dropdown with Tree view'">
				</cdl-dropdown-tree>
			</cdl-dropdown>
		</div>

		<h3>Drop down with sub menu view</h3>
		<div style="width: 250px">
			<cdl-dropdown 
				dropdownType="sub-menu-view" 
				[displayValue]="display5"
				(select)="onSelectAndDisplay5($event)">
				<cdl-dropdown-sub-menu
					[items]="demoItems5"
					[selectedIcon]="false">
				</cdl-dropdown-sub-menu>
			</cdl-dropdown>
		</div>

		<h3>Drop down with multi select</h3>
		<cdl-dropdown 
			[displayValue]="display6"
			(select)="onSelectAndDisplay6($event)"
			type="multi">
			<cdl-dropdown-list
				[items]="demoItems6">
			</cdl-dropdown-list>
		</cdl-dropdown>

		<h3>Disabled Drop down</h3>
		<cdl-dropdown 
			displayValue="Dropdown 7"
			[disabled]="true"
			(select)="onSelect($event)">
			<cdl-dropdown-list
				[items]="demoItems7">
			</cdl-dropdown-list>
		</cdl-dropdown>
	`,
	styles: [
		":host /deep/ .disabled:hover {border: none;}",
		":host /deep/ .disabled:focus {border: none;}"
	]
})
export class DropdownDemo {
	title = "Tabs Component Demo";
	private itemsSelected = 0;
	private itemsSelected2= 0;
	private display1 = "Select an option";
	private display2 = "Select an option";
	private display3 = "No Items selected";
	private display4 = "Select";
	private display5 = "Select";
	private display6 = "No Items selected";

	private demoItems1 = [
		{
			content: "item one",
			selected: false
		},
		{
			content: "item two",
			selected: false,
			disabled: true
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

	private demoItems2 = Array.from(this.demoItems1, this.clone);
	private demoItems3 = Array.from(this.demoItems1, this.clone);
	private demoItems4 = [
		{
			content: "item one",
			selected: false
		},
		{
			content: "item two",
			selected: false,
			subMenu: [
				{
					content: "sub item two 1",
					selected: false
				},
				{
					content: "sub item two 2",
					selected: false,
					subMenu: [
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
			disabled: true
		},
		{
			content: "item four",
			selected: false
		}
	];

	private demoItems5 = Array.from(this.demoItems4, this.clone);
	private demoItems6 = Array.from(this.demoItems1, this.clone);
	private demoItems7 = Array.from(this.demoItems1, this.clone);
	private demoItems8 = Array.from(this.demoItems1, this.clone);

	private clone (el) {
		return JSON.parse(JSON.stringify(el));
	}

	onSelect(ev) {
		ev.item.selected = !ev.item.selected;
	}

	onSelectAndDisplay1(ev) {
		console.log("onSelectAndDisplay1", ev);
		// ev.item.selected = !ev.item.selected;
		if (ev.item.selected) {
			this.display1 = ev.item.content;
		} else {
			this.display1 = "Select an option";
		}
	}
	onSelectAndDisplay2(ev) {
		// ev.item.selected = !ev.item.selected;
		if (ev.item.selected) {
			this.display2 = ev.item.content;
		} else {
			this.display2 = "Select an option";
		}
	}

	onSelectAndDisplay3(ev) {
		// ev.item.selected = !ev.item.selected;
		console.log("onSelectAndDisplay3", ev, ev.item.selected);
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
		if (!ev.item.subMenu) {
			// ev.item.selected = !ev.item.selected;
			if (ev.item.selected) {
				this.display4 = ev.item.content;
			} else {
				this.display4 = "Select";
			}
		}
	}

	onSelectAndDisplay5(ev) {
		if (!ev.item.subMenu) {
			// ev.item.selected = !ev.item.selected;
			if (ev.item.selected) {
				this.display5 = ev.item.content;
			} else {
				this.display5 = "Select";
			}
		}
	}

	onSelectAndDisplay6(ev) {
		// ev.item.selected = !ev.item.selected;
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
