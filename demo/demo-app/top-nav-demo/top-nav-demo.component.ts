import { Component, OnInit} from "@angular/core";


@Component({
	selector: "top-nav-demo",
	// disable warning for max-line-length in template because of the svgs
	// tslint:disable:max-line-length
	template: `
	<h1>Top nav demo</h1>

	<h3>Default top nav</h3>
	<n-top-nav [fixed]="false">
		<a class="top-nav_brand" href="#" title>
			<h1>
				IBM <strong>{{topNavBrand}}</strong>
			</h1>
		</a>
	</n-top-nav>

	<h3>Top nav with hamburger and nav links</h3>
	<n-top-nav [fixed]="false">
		<n-hamburger hamburger></n-hamburger>
		<a class="top-nav_brand" href="#" title>
			<h1>
				IBM <strong>{{topNavBrand}}</strong>
			</h1>
		</a>
		<ul class="top-nav_menu-left" links>
			<li class="menu_item">
				<a class="menu_link"
					tabindex="0">Dashboard</a>
			</li>
			<li class="menu_item">
				<a class="menu_link"
					tabindex="0">Reports</a>
			</li>
			<li class="menu_item">
				<a class="menu_link"
					tabindex="0">Analyze</a>
			</li>
		</ul>
		<ul class="top-nav_menu-right" menu>
			<li class="menu_item-search">
				<input *ngIf="showSearchInput2" type="search" class="top-nav-search-input">
				<a class="menu_link"
					(click)="showSearchInput2 = toggleSearch(showSearchInput2)"
					tabindex="0">
					<n-icon class="icon--white-sm" icon="search" size="16"></n-icon>
				</a>
			</li>
			<li class="menu_item">
				<a class="menu_link"
					(click)="showNotifications2 = !showNotifications2"
					[ngClass]="{'active': showNotifications2}"
					[attr.aria-expanded]="!!showNotifications2"
					tabindex="0">
					<n-icon class="icon--white-sm" icon="alert" size="sm"></n-icon>
				</a>
				<div [ngStyle]="{'display': showNotifications2?'block':'none'}" class="top-nav_dropdown">
					There will be a drop down here of sorts.
				</div>
			</li>
			<li *ngIf="!showSearchInput2" class="menu_divider" role="separator"></li>
			<li class="menu_item">
				<a class="menu_link"
					(click)="showUser2 = !showUser2"
					[ngClass]="{'active': showUser2}"
					tabindex="0">
					<n-icon class="icon--white-sm" icon="profile" size="sm"></n-icon>
					<span *ngIf="!showSearchInput2" class="link_icon-text">Sam Uncley</span>
				</a>
				<div [ngStyle]="{'display': showUser2?'block':'none'}" class="top-nav_dropdown">
					There will be a drop down here of sorts.
				</div>
			</li>
			<li class="menu_item">
				<a class="menu_link"
					(click)="showHelp2 = !showHelp2"
					[ngClass]="{'active': showHelp2}"
					[attr.aria-expanded]="!!showHelp2"
					tabindex="0">
					<n-icon class="icon--white-sm" icon="help" size="sm"></n-icon>
					<span *ngIf="!showSearchInput2" class="link_icon-text">Help</span>
				</a>
				<div [ngStyle]="{'display': showHelp2?'block':'none'}" class="top-nav_dropdown">
					There will be a drop down here of sorts.
				</div>
			</li>
		</ul>
	</n-top-nav>

	<h3>Top nav without hamburger menu</h3>
	<n-top-nav [fixed]="false">
		<a class="top-nav_brand" href="#" title>
			<h1>
				IBM <strong>{{topNavBrand}}</strong>
			</h1>
		</a>
		<ul class="top-nav_menu-left" links>
			<li class="menu_item">
				<a class="menu_link"
					tabindex="0">Dashboard</a>
			</li>
			<li class="menu_item">
				<a class="menu_link"
					tabindex="0">Reports</a>
			</li>
			<li class="menu_item">
				<a class="menu_link"
					tabindex="0">Analyze</a>
			</li>
		</ul>
		<ul class="top-nav_menu-right" menu>
			<li class="menu_item-search">
				<input *ngIf="showSearchInput2" type="search" class="top-nav-search-input">
				<a class="menu_link"
					(click)="showSearchInput2 = toggleSearch(showSearchInput2)"
					tabindex="0">
					<n-icon class="icon--white-sm" icon="search" size="16"></n-icon>
				</a>
			</li>
			<li class="menu_item">
				<a class="menu_link"
					(click)="showNotifications2 = !showNotifications2"
					[ngClass]="{'active': showNotifications2}"
					[attr.aria-expanded]="!!showNotifications2"
					tabindex="0">
					<n-icon class="icon--white-sm" icon="alert" size="sm"></n-icon>
				</a>
				<div [ngStyle]="{'display': showNotifications2?'block':'none'}" class="top-nav_dropdown">
					There will be a drop down here of sorts.
				</div>
			</li>
			<li *ngIf="!showSearchInput2" class="menu_divider" role="separator"></li>
			<li class="menu_item">
				<a class="menu_link"
					(click)="showUser2 = !showUser2"
					[ngClass]="{'active': showUser2}"
					tabindex="0">
					<n-icon class="icon--white-sm" icon="profile" size="sm"></n-icon>
					<span *ngIf="!showSearchInput2" class="link_icon-text">Sam Uncley</span>
				</a>
				<div [ngStyle]="{'display': showUser2?'block':'none'}" class="top-nav_dropdown">
					There will be a drop down here of sorts.
				</div>
			</li>
			<li class="menu_item">
				<a class="menu_link"
					(click)="showHelp2 = !showHelp2"
					[ngClass]="{'active': showHelp2}"
					[attr.aria-expanded]="!!showHelp2"
					tabindex="0">
					<n-icon class="icon--white-sm" icon="help" size="sm"></n-icon>
					<span *ngIf="!showSearchInput2" class="link_icon-text">Help</span>
				</a>
				<div [ngStyle]="{'display': showHelp2?'block':'none'}" class="top-nav_dropdown">
					There will be a drop down here of sorts.
				</div>
			</li>
		</ul>
	</n-top-nav>
	`
	// re-enable max-line-length warnings
	// tslint:enable:max-line-length
})

export class TopNavDemo {
	private topNavTitle = "Title";
	private topNavBadge = "Beta";
	private topNavBrand = "Product name";

	constructor () {
	}

	onSelect(ev) {
		ev.item.selected = !ev.item.selected;
	}

	toggleSearch(showSearchInput) {
		showSearchInput = !showSearchInput;

		if (showSearchInput) {
			setTimeout( () => {
				(document.querySelector(".top-nav-search-input") as HTMLElement).focus();
			}, 1);
		}

		return showSearchInput;
	}
}
