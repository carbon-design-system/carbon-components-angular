import { Component, OnInit } from "@angular/core";

@Component({
	selector: "list-view-demo",
	template: `
	<h1>List View Demo</h1>

	<ng-template #listTpl let-item="item"><cdl-glyphicon icon="Alert" size="md"></cdl-glyphicon> {{item.content}}</ng-template>

	<h3>Default list view</h3>
	<cdl-list-view [items]="demoItems" (select)="onSelect($event)"></cdl-list-view>

	<h3>List view with custom template (Added Icon) and no check mark</h3>
	<cdl-list-view [items]="demoItems1" (select)="onSelect($event)" [listTpl]="listTpl" [checkMark]="false"></cdl-list-view>
	`
})
export class ListViewDemo {
	private demoItems = [
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


	private demoItems1 = Array.from(this.demoItems, this.clone);

	private clone (el) {
		return Object.assign({}, el);
	}

	onSelect(ev) {
		ev.item.selected = !ev.item.selected;
	}
}
