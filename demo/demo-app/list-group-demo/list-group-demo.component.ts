import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-list-group-demo",
	template: `
	<h1>List group demo</h1>

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

	<h2>Default list group</h2>
	<n-list-group [items]="demoItems" (selected)="onSelect($event)"></n-list-group>

	<h3>Custom template (added Icon)</h3>
	<n-list-group [items]="demoItems1" (selected)="onSelect($event)" [listTpl]="listTpl" [checkMark]="true"></n-list-group>
	`
})

export class ListGroupDemo {
	public demoItems = [
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

	public demoItems1 = Array.from(this.demoItems, this.clone);

	onSelect(ev) {
		ev.item.selected = !ev.item.selected;
	}

	private clone (el) {
		return Object.assign({}, el);
	}
}
