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
			content: "item two"
		},
		{
			content: "item three"
		},
		{
			content: "item four"
		}
	];

}
