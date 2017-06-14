import { Component, OnInit } from "@angular/core";

@Component({
	selector: "tree-view-demo",
	template: `
	<h1>Tree View Demo</h1>
	<ng-template #listTpl let-item="item">
		<cdl-icon icon="alert" size="md"></cdl-icon>
		<span style="margin-left: 5px;">{{item.content}}</span>
	</ng-template>

	<h3>Default tree view</h3>
	<cdl-tree-view
		[items]="demoItems"
		(select)="onSelect($event)"
		[label]="'Default Tree View'">
	</cdl-tree-view>

	<h3>Tree view with custom template (Added Icon) with no selected icon</h3>
	<cdl-tree-view
		[items]="demoItems1"
		(select)="onSelect($event)"
		[listTpl]="listTpl"
		[selectedIcon]="false"
		[label]="'Tree view with custom template (Added Icon) with no selected icon'">
	</cdl-tree-view>

	<h3>Searchable tree view</h3>
	<div id="demo">
		<input type="search" id="search" placeholder="Filter">
		<cdl-tree-view
			[items]="demoItems"
			(select)="onSelect($event)"
			[label]="'Default Tree View'">
		</cdl-tree-view>
	</div>
	`,
	styles: [
		`
			#search {
				background: #f5f5f5;
				height: 40px;
				width: 100%;
				border: none;
				padding-left: 40px; // 10px padding + 20px icon
			}
			#demo {
				width: 300px;
			}
		`
	]
})
export class TreeViewDemo {
	private demoItems = [
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
							selected: false,
							disabled: true
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
			disabled: true
		},
		{
			content: "Item four",
			selected: false
		},
		{
			content: "Item six",
			selected: false,
			items: [
				{
					content: "Sub item six 1",
					selected: false
				},
				{
					content: "Sub item six 2",
					selected: false,
					items: [
						{
							content: "Sub item six 1b",
							selected: false
						},
						{
							content: "Sub item six 2b",
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
