import { Component, OnInit } from "@angular/core";

@Component({
	selector: "list-view-demo",
	templateUrl: "./list-view-demo.component.html"
})
export class ListViewDemo {
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

	onSelect(ev) {
		ev.item.selected = !ev.item.selected;
	}
}
