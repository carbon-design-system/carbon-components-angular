import { Component, OnInit} from "@angular/core";


@Component({
	selector: "top-nav-demo",
	templateUrl: "./top-nav-demo.component.html"
})

export class TopNavDemo {
	private topNavBadge = "Beta";
	private topNavBrand = "Neutrino";

	constructor () {
	}

	onSelect(ev) {
		ev.item.selected = !ev.item.selected;
	}

}
