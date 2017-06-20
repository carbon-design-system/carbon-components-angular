import { Component, OnInit} from "@angular/core";


@Component({
	selector: "top-nav-demo",
	// disable warning for max-line-length in template because of the svgs
	// tslint:disable:max-line-length
	template: `
	<h1>Top nav demo</h1>

	<h3>Default top nav</h3>
	<cdl-top-nav [fixed]="false">
		<div title>
			<a class="top-nav-heading top-nav-heading-no-hamburger top-nav-link-item fl" href="#">
				<h1 class="top-nav-brand">
					IBM <strong>{{topNavBrand}}</strong>
				</h1>
			</a>
			<!--<span class="top-nav-link-item top-nav-product-title" href="#">
				{{topNavTitle}}
			</span>-->
		</div>
	</cdl-top-nav>

	<h3>Top nav with hamburger and nav links</h3>
	<cdl-top-nav [fixed]="false">
		<cdl-hamburger hamburger></cdl-hamburger>
		<div title>
			<a class="top-nav-heading top-nav-link-item fl" href="#">
				<h1 class="top-nav-brand">
					IBM <strong>{{topNavBrand}}</strong>
				</h1>
				<span class="top-nav-badge">Beta</span>
			</a>
			<!--<span class="top-nav-link-item top-nav-product-title" href="#">
				{{topNavTitle}}
			</span>-->
		</div>
		<ul class="top-nav-links fr" menu>
			<li>
				<input *ngIf="showSearchInput1" type="text" class="top-nav-search-input">
				<label class="top-nav-link-item" (click)="showSearchInput1 = toggleSearch(showSearchInput1)">
					<cdl-icon class="menu-icon menu-icon-only" icon="search" size="16"></cdl-icon>
				</label>
			</li>
			<li>
				<a class="top-nav-link-item"
					(click)="showNotifications1 = !showNotifications1"
					[ngClass]="{'top-nav-link-item-selected': showNotifications1}">
					<div class="menu-icon menu-icon-only">
						<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							width="16" height="16" viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">
						<path class="st0" d="M10,20c1.1,0,2-0.9,2-2H8C8,19.1,8.9,20,10,20z"/>
						<path class="st0" d="M17.5,14c-0.8,0-1.5-0.7-1.5-1.5V8c0-3-2.2-5.4-5-5.9V1c0-0.5-0.5-1-1-1S9,0.5,9,1v1.1C6.2,2.6,4,5,4,8v4.5
							C4,13.3,3.3,14,2.5,14C1.7,14,1,14.7,1,15.5S1.7,17,2.5,17H10h7.5c0.8,0,1.5-0.7,1.5-1.5S18.3,14,17.5,14z M17.5,15.9H10H2.5
							c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4c1.4,0,2.6-1.2,2.6-2.6V8c0-2.7,2.2-4.9,4.9-4.9c2.7,0,4.9,2.2,4.9,4.9v4.5
							c0,1.4,1.2,2.6,2.6,2.6c0.2,0,0.4,0.2,0.4,0.4C17.9,15.7,17.7,15.9,17.5,15.9z"/>
						</svg>
					</div>
				</a>
				<div *ngIf="showNotifications1" class="top-nav-dropdown">
					There will be a drop down here of sorts.
				</div>
			</li>
			<li>
				<div *ngIf="!showSearchInput1" class="top-nav-divider"></div>
			</li>
			<li>
				<a class="top-nav-link-item"
					(click)="showUser1 = !showUser1"
					[ngClass]="{'top-nav-link-item-selected': showUser1}">
					<div class="menu-icon"
						[ngClass]="{'menu-icon-only': showSearchInput1}">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20"><path d="M10 2.9c-2.5 0-4.5 2-4.5 4.5S7.5 12 10 12s4.5-2 4.5-4.5-2-4.6-4.5-4.6zm0 7.9c-1.8 0-3.3-1.5-3.3-3.3S8.2 4.1 10 4.1s3.3 1.5 3.3 3.3-1.5 3.4-3.3 3.4z"/><path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm6 16.4v-1.5c0-1-.9-1.9-2-1.9H6c-1.1 0-2 .9-2 1.9v1.5c-1.7-1.6-2.8-3.9-2.8-6.4 0-4.9 3.9-8.8 8.8-8.8s8.8 3.9 8.8 8.8c0 2.5-1.1 4.8-2.8 6.4z"/></svg>
					</div>
					<span *ngIf="!showSearchInput1">Sam Uncley</span>
				</a>
				<div *ngIf="showUser1" class="top-nav-dropdown">
					There will be a drop down here of sorts.
				</div>
			</li>
			<li>
				<a class="top-nav-link-item"
					(click)="showHelp1 = !showHelp1"
					[ngClass]="{'top-nav-link-item-selected': showHelp1}">
					<div class="menu-icon"
						[ngClass]="{'menu-icon-only': showSearchInput1}">
						<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20"><path class="st0" d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm0 18.8c-4.9 0-8.8-3.9-8.8-8.8S5.1 1.2 10 1.2s8.8 3.9 8.8 8.8-3.9 8.8-8.8 8.8z"/><path class="st0" d="M10 3.9c-1.1 0-2 .3-2.7.9-.6.6-1 1.5-1.2 2.6v.1l1.7.2v-.1c.1-.8.4-1.4.8-1.8.4-.3.9-.5 1.4-.5.6 0 1.1.2 1.5.6.4.4.6.9.6 1.4 0 .3-.1.6-.2.8-.1.3-.5.6-.9 1-.5.4-.8.8-1 1-.3.3-.5.7-.6 1-.2.4-.2.8-.2 1.3v.5h1.6v-.1c0-.6 0-.8.1-1.1.1-.2.2-.5.3-.7.1-.2.4-.5.9-.9.7-.6 1.2-1.2 1.4-1.6.2-.4.4-.9.4-1.5 0-.9-.4-1.7-1.1-2.4-.7-.4-1.6-.7-2.8-.7zM9.1 14.4h1.7v1.7H9.1z"/></svg>
					</div>
					<span *ngIf="!showSearchInput1">Help</span>
				</a>
				<div *ngIf="showHelp1" class="top-nav-dropdown">
					There will be a drop down here of sorts.
				</div>
			</li>
		</ul>
	</cdl-top-nav>

	<h3>Top nav without hamburger menu</h3>
	<cdl-top-nav [fixed]="false">
		<div class="top-nav-title-container" title>
			<a class="top-nav-heading top-nav-heading-no-hamburger top-nav-link-item fl" href="#">
				<h1 class="top-nav-brand">
					IBM <strong>{{topNavBrand}}</strong>
				</h1>
			</a>
		</div>
		<ul class="top-nav-links fl" links>
			<li>
				<a class="top-nav-link-item">Dashboard</a>
			</li>
			<li>
				<a class="top-nav-link-item">Reports</a>
			</li>
			<li>
				<a class="top-nav-link-item">Analyze</a>
			</li>
		</ul>
		<ul class="top-nav-links fr" menu>
			<li>
				<input *ngIf="showSearchInput2" type="text" class="top-nav-search-input">
				<label class="top-nav-link-item" (click)="showSearchInput2 = toggleSearch(showSearchInput2)">
					<cdl-icon class="menu-icon menu-icon-only" icon="search" size="16"></cdl-icon>
				</label>
			</li>
			<li>
				<a class="top-nav-link-item"
					(click)="showNotifications2 = !showNotifications2"
					[ngClass]="{'top-nav-link-item-selected': showNotifications2}">
					<div class="menu-icon menu-icon-only">
						<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							width="16" height="16" viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">
						<path class="st0" d="M10,20c1.1,0,2-0.9,2-2H8C8,19.1,8.9,20,10,20z"/>
						<path class="st0" d="M17.5,14c-0.8,0-1.5-0.7-1.5-1.5V8c0-3-2.2-5.4-5-5.9V1c0-0.5-0.5-1-1-1S9,0.5,9,1v1.1C6.2,2.6,4,5,4,8v4.5
							C4,13.3,3.3,14,2.5,14C1.7,14,1,14.7,1,15.5S1.7,17,2.5,17H10h7.5c0.8,0,1.5-0.7,1.5-1.5S18.3,14,17.5,14z M17.5,15.9H10H2.5
							c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4c1.4,0,2.6-1.2,2.6-2.6V8c0-2.7,2.2-4.9,4.9-4.9c2.7,0,4.9,2.2,4.9,4.9v4.5
							c0,1.4,1.2,2.6,2.6,2.6c0.2,0,0.4,0.2,0.4,0.4C17.9,15.7,17.7,15.9,17.5,15.9z"/>
						</svg>
					</div>
				</a>
				<div *ngIf="showNotifications2" class="top-nav-dropdown">
					There will be a drop down here of sorts.
				</div>
			</li>
			<li>
				<div *ngIf="!showSearchInput2" class="top-nav-divider" ></div>
			</li>
			<li>
				<a class="top-nav-link-item"
					(click)="showUser2 = !showUser2"
					[ngClass]="{'top-nav-link-item-selected': showUser2}">
					<div class="menu-icon"
						[ngClass]="{'menu-icon-only': showSearchInput2}">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20"><path d="M10 2.9c-2.5 0-4.5 2-4.5 4.5S7.5 12 10 12s4.5-2 4.5-4.5-2-4.6-4.5-4.6zm0 7.9c-1.8 0-3.3-1.5-3.3-3.3S8.2 4.1 10 4.1s3.3 1.5 3.3 3.3-1.5 3.4-3.3 3.4z"/><path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm6 16.4v-1.5c0-1-.9-1.9-2-1.9H6c-1.1 0-2 .9-2 1.9v1.5c-1.7-1.6-2.8-3.9-2.8-6.4 0-4.9 3.9-8.8 8.8-8.8s8.8 3.9 8.8 8.8c0 2.5-1.1 4.8-2.8 6.4z"/></svg>
					</div>
					<span *ngIf="!showSearchInput2">Sam Uncley</span>
				</a>
				<div *ngIf="showUser2" class="top-nav-dropdown">
					There will be a drop down here of sorts.
				</div>
			</li>
			<li>
				<a class="top-nav-link-item"
					(click)="showHelp2 = !showHelp2"
					[ngClass]="{'top-nav-link-item-selected': showHelp2}">
					<div class="menu-icon"
						[ngClass]="{'menu-icon-only': showSearchInput2}">
						<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20"><path class="st0" d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm0 18.8c-4.9 0-8.8-3.9-8.8-8.8S5.1 1.2 10 1.2s8.8 3.9 8.8 8.8-3.9 8.8-8.8 8.8z"/><path class="st0" d="M10 3.9c-1.1 0-2 .3-2.7.9-.6.6-1 1.5-1.2 2.6v.1l1.7.2v-.1c.1-.8.4-1.4.8-1.8.4-.3.9-.5 1.4-.5.6 0 1.1.2 1.5.6.4.4.6.9.6 1.4 0 .3-.1.6-.2.8-.1.3-.5.6-.9 1-.5.4-.8.8-1 1-.3.3-.5.7-.6 1-.2.4-.2.8-.2 1.3v.5h1.6v-.1c0-.6 0-.8.1-1.1.1-.2.2-.5.3-.7.1-.2.4-.5.9-.9.7-.6 1.2-1.2 1.4-1.6.2-.4.4-.9.4-1.5 0-.9-.4-1.7-1.1-2.4-.7-.4-1.6-.7-2.8-.7zM9.1 14.4h1.7v1.7H9.1z"/></svg>
					</div>
					<span *ngIf="!showSearchInput2">Help</span>
				</a>
				<div *ngIf="showHelp2" class="top-nav-dropdown">
					There will be a drop down here of sorts.
				</div>
			</li>
		</ul>
	</cdl-top-nav>
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
