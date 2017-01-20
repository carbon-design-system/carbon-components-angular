import { Component, OnInit } from "@angular/core";

@Component({
	selector: "list-view-demo",
	templateUrl: "./list-view-demo.component.html"
})
export class ListViewDemo {
	private demoItems = [
		{
			content: "item one"
		},
		{
			content: "item two",
			selected: false,
			disabled: true
		},
		{
			content: "item three"
		},
		{
			content: "item four"
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
