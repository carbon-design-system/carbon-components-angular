import { Component, OnInit } from "@angular/core";

@Component({
	selector: "tree-view-demo",
	template: `
	<h1>Tree View Demo</h1>
	<ng-template #listTpl let-item="item"><cdl-glyphicon icon="alert" size="md"></cdl-glyphicon> {{item.content}}</ng-template>

	<h3>Default tree view</h3>
	<cdl-tree-view [items]="demoItems" (select)="onSelect($event)" [label]="'Default Tree View'"></cdl-tree-view>

	<h3>Tree view with custom template (Added Icon) with no selected icon</h3>
	<cdl-tree-view [items]="demoItems1"
					(select)="onSelect($event)"
					[listTpl]="listTpl"
					[selectedIcon]="false"
					[label]="'Tree view with custom template (Added Icon) with no selected icon'" >
	</cdl-tree-view>
	`
})
export class TreeViewDemo {
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
