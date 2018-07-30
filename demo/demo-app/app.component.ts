import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Router, NavigationEnd, NavigationStart } from "@angular/router";
import { IconService } from "./../../src";
import "rxjs/add/operator/filter";

const en = require("./../../src/i18n/en.json");

@Component({
	selector: "app-root",
	template: `
	<header class="p-demo-header text--center">
		<h1>Carbon Components Angular</h1>
		<h2>An <em>Angular</em> implementation of the Carbon Design System</h2>
		<a class="btn--icon-white" href="https://github.com/ibm/carbon-components-angular">
			<ibm-icon icon="build" color="white" size="sm"></ibm-icon>
			Project
		</a>
		<a class="btn--icon-white" href="https://github.ibm.com/peretz/neutrino/wiki/Style-guide">
			<ibm-icon icon="form_opt_in" color="white" size="sm"></ibm-icon>
			Code style guide
		</a>
		<a class="btn--icon-white" href="https://pages.github.com/carbon/carbon-components-angular/documentation/">
			<ibm-icon icon="document" color="white" size="sm"></ibm-icon>
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
			<ibm-list-group [items]="filteredItems" [listTpl]="item" (selected)="onSelect($event)">
				<ng-template #item let-item="item">
					<a routerLink="{{item.link}}">{{item.content}}</a>
				</ng-template>
			</ibm-list-group>
		</nav>
	</aside>
	<div class="p-demo-container">
		<div class="main-banner-placeholder"></div>
		<router-outlet></router-outlet>
	</div>
	</main>
	<ibm-modal-placeholder></ibm-modal-placeholder>
	<ibm-dialog-placeholder></ibm-dialog-placeholder>
	<!-- <ibm-placeholder></ibm-placeholder> -->
	<ibm-sprite sprite="alerts_status"></ibm-sprite>
	<ibm-sprite sprite="animations"></ibm-sprite>
	<ibm-sprite sprite="arrows_chevrons"></ibm-sprite>
	<ibm-sprite sprite="brands"></ibm-sprite>
	<ibm-sprite sprite="calculator"></ibm-sprite>
	<ibm-sprite sprite="core_set"></ibm-sprite>
	<ibm-sprite sprite="cursors"></ibm-sprite>
	<ibm-sprite sprite="disabled"></ibm-sprite>
	<ibm-sprite sprite="ecommerce"></ibm-sprite>
	<ibm-sprite sprite="emoticons"></ibm-sprite>
	<ibm-sprite sprite="formatting"></ibm-sprite>
	<ibm-sprite sprite="gestures"></ibm-sprite>
	<ibm-sprite sprite="ibm_logo"></ibm-sprite>
	<ibm-sprite sprite="market_segments_activities"></ibm-sprite>
	<ibm-sprite sprite="market_segments_browser_os_mobile"></ibm-sprite>
	<ibm-sprite sprite="market_segments_demographics"></ibm-sprite>
	<ibm-sprite sprite="market_segments_occasions_seasons"></ibm-sprite>
	<ibm-sprite sprite="market_segments_occupations"></ibm-sprite>
	<ibm-sprite sprite="market_segments_segments"></ibm-sprite>
	<ibm-sprite sprite="market_segments_store_users"></ibm-sprite>
	<ibm-sprite sprite="mobile_controls"></ibm-sprite>
	<ibm-sprite sprite="playback_controls"></ibm-sprite>
	<ibm-sprite sprite="tables"></ibm-sprite>
	<ibm-sprite sprite="top_nav_bar"></ibm-sprite>
	<ibm-sprite sprite="watson_shell"></ibm-sprite>
	<ibm-sprite sprite="window_controls"></ibm-sprite>
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
			content: "Calendar",
			link: "/calendar",
			selected: false
		},
		{
			content: "Combo box",
			link: "/combobox",
			selected: false
		}
	].sort((a, b) => {
		if (a.content > b.content) {
			return 1;
		} else if (a.content < b.content) {
			return -1;
		}
		return 0;
	});
	public filteredItems = this.navItems;
	private previousItem = null;
	constructor (private router: Router, private translate: TranslateService) {
		this.translate.setDefaultLang("en");
		this.translate.use("en");
		this.translate.setTranslation("en", en);

		IconService.setBaseURL("http://s3-api.us-geo.objectstorage.softlayer.net/icons/");
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
		this.router.navigate([item.link]); // do we need to remove this since we have routerLink already?
											// also, replace selected with routerLinkActive?
											// https://angular.io/docs/ts/latest/api/router/index/RouterLinkActive-directive.html
	}
}
