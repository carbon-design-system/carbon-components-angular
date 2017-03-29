import { Component, OnInit } from "@angular/core";

@Component({
	selector: "sub-menu-view-demo",
	template: `
	<h1>Sub Menu View Demo</h1>
	<ng-template #listTpl let-item="item"><cdl-glyphicon icon="Alert" size="md"></cdl-glyphicon> {{item.content}}</ng-template>

	<h3>Default sub menu view</h3>
	<cdl-sub-menu-view [items]="demoItems" (select)="onSelect($event)" [label]="'Submenu view'"></cdl-sub-menu-view>

	<h3>Sub menu view with custom template (Added Icon) and no check mark</h3>
	<cdl-sub-menu-view
		[items]="demoItems1"
		(select)="onSelect($event)"
		[listTpl]="listTpl"
		[selectedIcon]="false"
		[label]="'Submenu view'"
		></cdl-sub-menu-view>
	`
})
export class SubMenuViewDemo {
	private demoItems = [
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
							selected: false,
							disabled: true
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
		},
		{
			content: "item six",
			selected: false,
			subMenu: [
				{
					content: "sub item six 1",
					selected: false
				},
				{
					content: "sub item six 2",
					selected: false,
					subMenu: [
						{
							content: "sub item six 1b",
							selected: false
						},
						{
							content: "sub item six 2b",
							selected: false,
						}
					]
				},
			]
		}
	];

	private demoItems1 = Array.from(this.demoItems, this.clone);

	private clone (el) {
		return Object.assign({}, el);
	}

	onSelect(ev) {
		ev.item.selected = !ev.item.selected;
	}
}
