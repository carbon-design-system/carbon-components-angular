import { Component, OnInit } from "@angular/core";


@Component({
	selector: "top-nav-demo",
	templateUrl: "./top-nav-demo.component.html",
	// styleUrls: ["./core-demo.component.css"]
})

export class TopNavDemo {
	constructor () {
	}
	topNavBadge = "Beta";
	topNavBrand = "Neutrino";

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
