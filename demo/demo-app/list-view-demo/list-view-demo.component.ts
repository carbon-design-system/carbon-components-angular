import { Component, OnInit } from "@angular/core";

@Component({
	selector: "list-view-demo",
	template: `
	<h1>List view demo</h1>

	<ng-template #listTpl let-item="item">
		{{item.content}}
		<button class="btn--unstyled" type="button" aria-expanded="false" aria-haspopup="true">
			<n-icon class="icon--sm" icon="alert" size="md"></n-icon>
		</button>
	</ng-template>

	<h3>Default list view</h3>
	<n-list-view [items]="demoItems" (selected)="onSelect($event)"></n-list-view>

	<h3>List view with custom template (Added Icon) and no check mark</h3>
	<n-list-view [items]="demoItems1" (selected)="onSelect($event)" [listTpl]="listTpl" [checkMark]="false"></n-list-view>
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
