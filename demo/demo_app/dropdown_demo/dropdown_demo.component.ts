import { Component, OnInit } from "@angular/core";

@Component({
	selector: "dropdown-demo",
	template: `
	<h1>Dropdown Demo</h1>

	<h3>Default Drop down</h3>
	<div style="width: 400px">
		<cdl-dropdown [displayValue]="display">
			<cdl-list-view [items]="demoItems" (select)="onSelectAndDisplay($event)" [checkMark]="false"></cdl-list-view>
		</cdl-dropdown>
	</div>

	<h3>Drop down with menu open on select</h3>
	<div style="width: 400px">
		<cdl-dropdown displayValue="Dropdown 2" [closeOnSelect]="false">
			<cdl-list-view [items]="demoItems1" (select)="onSelect($event)" [checkMark]="false"></cdl-list-view>
		</cdl-dropdown>
	</div>

	<h3>Default Drop down with custom template</h3>
	<ng-template #listTpl let-item="item">
		<cdl-glyphicon *ngIf="item.selected"  icon="Checkbox Selected" size="md"></cdl-glyphicon>
		<cdl-glyphicon *ngIf="!item.selected" icon="Checkbox Empty" size="md"></cdl-glyphicon>
		{{item.content}}
	</ng-template>
	<div style="width: 400px">
		<cdl-dropdown [displayValue]="displayCustom" [closeOnSelect]="false" type="multi">
			<cdl-list-view
				[items]="demoItemsCustom"
				(select)="onSelectAndDisplayCustom($event)"
				[listTpl]="listTpl"
				[checkMark]="false">
			</cdl-list-view>
		</cdl-dropdown>
	</div>

	<h3>Drop down with tree view</h3>
	<div style="width: 400px">
		<cdl-dropdown displayValue="Dropdown tree view">
			<cdl-tree-view
				[items]="nestedDemoItems"
				(select)="onNestedSelect($event)"
				[selectedIcon]="false"
				[label]="'Dropdown with Tree view'">
			</cdl-tree-view>
		</cdl-dropdown>
	</div>

	<h3>Drop down with sub menu view</h3>
	<div style="width: 250px">
		<cdl-dropdown displayValue="Dropdown sub menu">
			<cdl-sub-menu-view [items]="nestedDemoItems1" (select)="onNestedSelect($event)" [selectedIcon]="false"></cdl-sub-menu-view>
		</cdl-dropdown>
	</div>

	<h3>Drop down with multi select</h3>
	<cdl-dropdown displayValue="Dropdown 4" [closeOnSelect]="false" type="multi">
		<cdl-list-view [items]="demoItems2" (select)="onSelect($event)"  [checkMark]="false"></cdl-list-view>
	</cdl-dropdown>

	<h3>Disabled Drop down</h3>
	<cdl-dropdown displayValue="Dropdown 5" [disabled]="true">
		<cdl-list-view [items]="demoItems" (select)="onSelect($event)"  [checkMark]="false"></cdl-list-view>
	</cdl-dropdown>
	`
})
export class DropdownDemo {
	private display = "Dropdown 1";
	private displayCustom = "Dropdown 3";

	private demoItems = [
		{
			content: "item one",
			selected: false
		},
		{
			content: "item two",
			selected: false
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

	private demoItemsCustom = this.clone(this.demoItems);
	private demoItems1 = this.clone(this.demoItems);
	private demoItems2 = this.clone(this.demoItems);

	private nestedDemoItems = [
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
			selected: false
		},
		{
			content: "item four",
			selected: false
		}
	];

	private nestedDemoItems1 = this.clone(this.nestedDemoItems);

	private clone (el) {
		return JSON.parse(JSON.stringify(el));
	}

	onSelectAndDisplay(ev) {
		ev.item.selected = !ev.item.selected;
		if (ev.item.selected) {
			this.display = ev.item.content;
		} else {
			this.display = "Dropdown 1";
		}
	}

	onSelectAndDisplayCustom(ev) {
		ev.item.selected = !ev.item.selected;

		this.displayCustom = ""; // reset the display

		let demoItemsListLength = this.demoItemsCustom.length;
		for (let i = 0; i < demoItemsListLength; i++) {
			let item = this.demoItemsCustom[i];

			if (item.selected === true) {
				this.displayCustom += item.content + "; ";
			}
		}

		if (this.displayCustom.length === 0) {
			this.displayCustom = "Dropdown 3";
		}
	}

	onSelect(ev) {
		ev.item.selected = !ev.item.selected;
	}

	onNestedSelect(ev) {
		if (!ev.item.subMenu) {
			ev.item.selected = !ev.item.selected;
		}
	}
}
