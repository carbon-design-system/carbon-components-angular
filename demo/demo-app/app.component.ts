import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Router, NavigationEnd, NavigationStart } from "@angular/router";
import { HcModeChecker } from "./../../src";
import "rxjs/add/operator/filter";
import * as en from "./../../src/i18n/en.json";

@Component({
	selector: "app-root",
	template: `
	<header class="p-demo-header text--center">
		<h1>Neutrino</h1>
		<h2>A componentized <em>Angular</em> implementation of the Watson Customer Engagement design guide.</h2>
		<a class="btn--icon-white" href="https://github.ibm.com/peretz/neutrino">
			<n-icon icon="preview" color="white" size="sm"></n-icon>
			Project
		</a>
		<a class="btn--icon-white" href="https://github.ibm.com/peretz/neutrino/wiki/Style-guide">
			<n-icon icon="design" color="white" size="sm"></n-icon>
			Code style guide
		</a>
		<a class="btn--icon-white" href="https://pages.github.ibm.com/peretz/neutrino/documentation/">
			<n-icon icon="document" color="white" size="sm"></n-icon>
			Documentation
		</a>
	</header>
	<main class="p-container">
	<aside class="p-demo-sidebar" role="complementary">
		<nav class="p-demo-sidenav">
			<label class="search_group">
				<svg class="search_icon" aria-hidden="true">
					<use href="#search_16"></use>
				</svg>
				<input
					#demo_search
					type="search"
					(keyup)="search($event)"
					class="input-field"
					placeholder="Filter"
					aria-label="filter components">
				<button
					class="close"
					type="reset"
					aria-label="Reset search"
					(click)="demo_search.value = ''; search($event);">
					<svg class="close_icon">
						<use href="#x_16"></use>
					</svg>
				</button>
			</label>
			<n-list-group [items]="filteredItems" [listTpl]="item" (select)="onSelect($event)">
				<ng-template #item let-item="item">
					<a routerLink="{{item.link}}">{{item.content}}</a>
				</ng-template>
			</n-list-group>
		</nav>
	</aside>
	<div class="p-demo-container">
		<router-outlet></router-outlet>
	</div>
	</main>
	<n-modal-placeholder></n-modal-placeholder>
	<n-sprite sprite="activities"></n-sprite>
	<n-sprite sprite="alerts_status"></n-sprite>
	<n-sprite sprite="arrows_chevrons"></n-sprite>
	<n-sprite sprite="brands"></n-sprite>
	<n-sprite sprite="browser_os_mobile"></n-sprite>
	<n-sprite sprite="calculator"></n-sprite>
	<n-sprite sprite="core_set"></n-sprite>
	<n-sprite sprite="demographics"></n-sprite>
	<n-sprite sprite="disabled"></n-sprite>
	<n-sprite sprite="ecommerce"></n-sprite>
	<n-sprite sprite="emoticons"></n-sprite>
	<n-sprite sprite="formatting"></n-sprite>
	<n-sprite sprite="gestures"></n-sprite>
	<n-sprite sprite="ibm logo"></n-sprite>
	<n-sprite sprite="mobile_controls"></n-sprite>
	<n-sprite sprite="playback_controls"></n-sprite>
	<n-sprite sprite="occasions_seasons"></n-sprite>
	<n-sprite sprite="occupations"></n-sprite>
	<n-sprite sprite="segments"></n-sprite>
	<n-sprite sprite="store_users"></n-sprite>
	<n-sprite sprite="tables"></n-sprite>
	<n-sprite sprite="top_nav_bar"></n-sprite>
	<n-sprite sprite="window_controls"></n-sprite>
	`,
	styleUrls: ["./demo.scss"],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
	public navItems = [
		{
			content: "Forms",
			link: "/forms",
			selected: false
		},
		{
			content: "Iconography",
			link: "/icon",
			selected: false
		},
		{
			content: "Popover",
			link: "/popover",
			selected: false
		},
		{
			content: "Tooltip",
			link: "/tooltip",
			selected: false
		},
		{
			content: "Tabs",
			link: "/tabs",
			selected: false
		},
		{
			content: "List group",
			link: "/list-group",
			selected: false
		},
		{
			content: "Table",
			link: "/table",
			selected: false
		},
		{
			content: "Tree view",
			link: "/tree-view",
			selected: false
		},
		{
			content: "Drop-down",
			link: "/dropdown",
			selected: false
		},
		{
			content: "Button menu",
			link: "/button-menu",
			selected: false
		},
		{
			content: "Top-nav",
			link: "/top-nav",
			selected: false
		},
		{
			content: "Side-nav",
			link: "/side-nav",
			selected: false
		},
		{
			content: "Modal",
			link: "/modal",
			selected: false
		},
		{
			content: "Banners",
			link: "/banner",
			selected: false
		},
		{
			content: "Combo box",
			link: "/combobox",
			selected: false
		},
		{
			content: "Chart",
			link: "/chart",
			selected: false
		}
	].sort((a, b) => a.content.charCodeAt(0) - b.content.charCodeAt(0));
	public filteredItems = this.navItems;
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
		this._router.navigate([item.link]); // do we need to remove this since we have routerLink already?
											// also, replace selected with routerLinkActive?
											// https://angular.io/docs/ts/latest/api/router/index/RouterLinkActive-directive.html
	}
}
