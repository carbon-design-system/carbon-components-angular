import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Router, NavigationEnd, NavigationStart } from "@angular/router";
import { HcModeChecker } from "./../../src";
import "rxjs/add/operator/filter";
import * as en from  "./../../src/i18n/en.json";

@Component({
	selector: "app-root",
	template: `
	<header>
		<h1 style="display: inline-block;">
			<a routerLink="/">Neutrino</a>
		</h1>
		<a href="https://github.ibm.com/peretz-next/neutrino">Project</a>
	</header>
	<nav>
		<input
			type="search"
			(keyup)="search($event)"
			class="input-field"
			style="width: 100%; margin-left: 0;"
			placeholder="Filter"
			aria-label="filter components">
		<n-list-view [items]="filteredItems" [listTpl]="item" (select)="onSelect($event)">
			<ng-template #item let-item="item">
				<a routerLink="{{item.link}}">{{item.content}}</a>
			</ng-template>
		</n-list-view>
	</nav>
	<main class="main">
		<router-outlet></router-outlet>
	</main>
	<n-modal-placeholder></n-modal-placeholder>
	<n-sprite sprite="core"></n-sprite>
	<n-sprite sprite="alerts_status"></n-sprite>
	<n-sprite sprite="arrows_chevrons"></n-sprite>
	<n-sprite sprite="brands"></n-sprite>
	<n-sprite sprite="calculator"></n-sprite>
	<n-sprite sprite="emoticons"></n-sprite>
	<n-sprite sprite="formatting"></n-sprite>
	<n-sprite sprite="mobile_controls"></n-sprite>
	<n-sprite sprite="playback_controls"></n-sprite>
	<n-sprite sprite="window_controls"></n-sprite>
	<n-sprite sprite="should_fail"></n-sprite>
	`,
	styleUrls: ["./app.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
	private navItems = [
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
			content: "Iconography Demo",
			link: "/icon",
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
			content: "Drop-down Demo",
			link: "/dropdown",
			selected: false
		},
		{
			content: "Top Nav Demo",
			link: "/top-nav",
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
			content: "Combobox Demo",
			link: "/combobox",
			selected: false
		}
	].sort((a, b) => a.content.charCodeAt(0) - b.content.charCodeAt(0));
	private filteredItems = this.navItems;
	private previousItem = null;
	constructor (private _router: Router, private _translate: TranslateService) {
		this._translate.setDefaultLang("en");
		this._translate.use("en");
		this._translate.setTranslation("en", en);
	}

	ngOnInit() {
		this._router.events.filter(x => x instanceof NavigationEnd).subscribe(x => {
			if (x["url"] === "/" && this.previousItem) {
				this.previousItem.selected = false;
			}
		});

		this._router.events.filter(x => x instanceof NavigationStart).subscribe(x => {
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
		this._router.navigate([item.link]);  // do we need to remove this since we have routerLink already?
											 // also, replace selected with routerLinkActive?
											 // https://angular.io/docs/ts/latest/api/router/index/RouterLinkActive-directive.html
	}
}
