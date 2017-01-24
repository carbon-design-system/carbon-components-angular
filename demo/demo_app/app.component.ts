import { Component, OnInit } from "@angular/core";
import { IconService } from "./../../src/glyphicon/glyphicon.module";
import { Router } from "@angular/router";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent {
	private navItems = [
		{
			content: "Table Demo",
			link: "/table",
			selected: false
		},
		{
			content: "CSS Demo",
			link: "/css",
			selected: false
		},
		{
			content: "Glyphicon Demo",
			link: "/glyphicon",
			selected: false
		},
		{
			content: "Popover Demo",
			link: "/popover",
			selected: false
		},
		{
			content: "Tabs Demo",
			link: "/tabs",
			selected: false
		},
		{
			content: "List View Demo",
			link: "/list-view",
			selected: false
		},
		{
			content: "Nested View Demo",
			link: "/nested-view",
			selected: false
		},
		{
			content: "Dropdown Demo",
			link: "/dropdown",
			selected: false
		},
		{
			content: "Top Nav Demo",
			link: "/top-nav",
			selected: false
		},
		{
			content: "Typeahead Demo",
			link: "/typeahead",
			selected: false
		},
		{
			content: "Side Nav Demo",
			link: "/side-nav",
			selected: false
		}
	];
	private filteredItems = this.navItems;
	constructor (private router: Router) {
		IconService.setIconUrl("http://csx00509.canlab.ibm.com/icons/");
	}

	search(ev) {
		let term = ev.target.value;
		this.filteredItems = this.navItems.filter(item => {
			return new RegExp(term, "gi").test(item.content);
		});
	}

	onSelect({item}) {
		console.log(item);
		this.router.navigate([item.link]);
	}
}
