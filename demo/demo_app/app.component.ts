import { Component, OnInit } from "@angular/core";
import { IconService } from "./../../src/glyphicon/glyphicon.module";
import { Router, NavigationEnd, NavigationStart } from "@angular/router";
import { HcModeChecker } from "./../../src/common/a11y.service";
import "rxjs/add/operator/filter";

@Component({
	selector: "app-root",
	template: `
	<h1>
		<a routerLink="/">Neutrino</a>
	</h1>
	<nav>
		<input type="search" (keyup)="search($event)" class="input-field" style="width: 100%; margin-left: 0;" placeholder="Filter">
		<cdl-list-view [items]="filteredItems" [listTpl]="item" (select)="onSelect($event)">
			<ng-template #item let-item="item">
				<a routerLink="{{item.link}}">{{item.content}}</a>
			</ng-template>
		</cdl-list-view>
	</nav>
	<div class="main">
		<router-outlet></router-outlet>
	</div>
	<cdl-modal-placeholder></cdl-modal-placeholder>
	`,
	styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
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
			content: "Forms Demo",
			link: "/forms",
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
			content: "Tooltip Demo",
			link: "/tooltip",
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
			content: "Tree View Demo",
			link: "/tree-view",
			selected: false
		},
		{
			content: "Sub Menu View Demo",
			link: "/sub-menu-view",
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
		},
		{
			content: "Modal Demo",
			link: "/modal",
			selected: false
		},
		{
			content: "Alert Demo",
			link: "/alert",
			selected: false
		},
		{
			content: "Calendar Demo",
			link: "/calendar",
			selected: false
		},
		{
			content: "Datepicker Demo",
			link: "/datepicker",
			selected: false
		},
		{
			content: "Charts Demo",
			link: "/charts",
			selected: false
		}
	];
	private filteredItems = this.navItems;
	private previousItem = null;
	constructor (private router: Router) {
		IconService.setIconUrl("http://csx00509.canlab.ibm.com/icons/");
	}

	ngOnInit() {
		this.router.events.filter(x => x instanceof NavigationEnd).subscribe(x => {
			if (x["url"] === "/" && this.previousItem) {
				this.previousItem.selected = false;
			}
		});

		this.router.events.filter(x => x instanceof NavigationStart).subscribe(x => {
			if (this.previousItem) {
				this.previousItem.selected = false;
			}
			let item = this.navItems.find(y => y.link === x["url"]);
			if (item) {
				item.selected = true;
			}
			this.previousItem = item;
		});

		HcModeChecker();
	}

	search(ev) {
		let term = ev.target.value;
		this.filteredItems = this.navItems.filter(item => {
			return new RegExp(term, "gi").test(item.content);
		});
	}

	onSelect({item}) {
		if (this.previousItem) {
			this.previousItem.selected = false;
		}
		this.previousItem = item;
		item.selected = true;
		this.router.navigate([item.link]);
	}
}
