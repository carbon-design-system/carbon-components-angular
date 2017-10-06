import { Component, OnInit } from "@angular/core";

@Component({
	selector: "list-view-demo",
	template: `
	<h1>List view demo</h1>

	<ng-template #listTpl let-item="item">
		<n-checkbox inline="true"
		[(ngModel)]="item.selected"
		[disabled]="item.disabled"
		aria-hidden="true"></n-checkbox>
		<span>
			{{item.content}}
		</span>
		<button class="btn--icon-link" type="button" aria-expanded="false" aria-haspopup="true">
			<n-icon icon="info" size="sm"></n-icon>
		</button>
	</ng-template>

	<h3>Default list view</h3>
	<n-list-view [items]="demoItems" (selected)="onSelect($event)"></n-list-view>

	<h3>List view with custom template (Added Icon)</h3>
	<n-list-view [items]="demoItems1" (selected)="onSelect($event)" [listTpl]="listTpl" [checkMark]="true"></n-list-view>
	`
})

export class ListViewDemo {
	private demoItems = [
		{
			content: "item one",
			selected: false,
			checkbox: "true"
		},
		{
			content: "item two",
			selected: false,
			disabled: true,
			checkbox: "false"
		},
		{
			content: "item three",
			selected: false,
			checkbox: "false"
		},
		{
			content: "item four",
			selected: false,
			checkbox: "true"
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
