import { Component, OnInit} from "@angular/core";


@Component({
	selector: "top-nav-demo",
	templateUrl: "./top-nav-demo.component.html",
	styleUrls: ["./top-nav-demo.component.scss"]
})

export class TopNavDemo {
	private topNavBadge = "Beta";
	private topNavBrand = "Neutrino";
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

	constructor () {
	}

	onSelect(ev) {
		ev.item.selected = !ev.item.selected;
	}

}
