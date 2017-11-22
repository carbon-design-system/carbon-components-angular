import {
	AfterViewInit,
	Component,
	Input,
	Inject,
	ElementRef
} from "@angular/core";

import { DOCUMENT } from "@angular/platform-browser";


/**
 * class: TopNav
 *
 * selector: `n-top-nav`
 *
 * ```html
 * <n-top-nav [brand]="topNavBrand" [badge]="topNavBadge" [sticky]="true"></n-top-nav>
 * ```
 *
 * Top-nav takes 3 optional projections for hamburger, links and menu:
 *
 * ```html
 * <n-top-nav [brand]="topNavBrand" [badge]="topNavBadge" [sticky]="false">
 * 	<n-hamburger hamburger></n-hamburger>
 * 	<n-list-group links [items]="demoItems"></n-list-group>
 * </n-top-nav>
 * ```
 *
 * `items` expects an array of objects where the objects follow the format:
 * ```javascript
 * {
 * 	content: "string",
 * 	disabled: false //optional
 * }
 * ```
 *
 * See list-group component.
 *
 * Complete Example (TopNav with Hamburger):
 *
 * * ```html
 * <n-top-nav [fixed]="false">
 * 	<n-hamburger hamburger></n-hamburger>
 * 	<div title>
 * 		<a class="top-nav-heading top-nav-link-item fl" href="#">
 * 			<h1 class="top-nav-brand">
 * 				IBM <strong>{{topNavBrand}}</strong>
 * 			</h1>
 * 			<span class="top-nav-badge">Beta</span>
 * 		</a>
 * 	</div>
 * 	<ul class="top-nav-links fr" menu>
 * 		<li>
 * 			<input *ngIf="showSearchInput1" type="text" class="top-nav-search-input">
 * 			<label class="top-nav-link-item"
 * 				(click)="showSearchInput1 = toggleSearch(showSearchInput1)"
 * 				tabindex="0">
 * 				<n-icon class="menu-icon menu-icon-only" icon="search" size="sm"></n-icon>
 * 			</label>
 * 		</li>
 * 		<li>
 * 			<a class="top-nav-link-item"
 * 				tabindex="0"
 * 				(click)="showNotifications1 = !showNotifications1"
 * 				[ngClass]="{'top-nav-link-item-selected': showNotifications1}"
 * 				[attr.aria-expanded]="!!showNotifications1">
 * 				<n-icon class="menu-icon menu-icon-only" icon="alert" size="sm"></n-icon>
 * 			</a>
 * 			<div [ngClass]="{'hidden': !showNotifications1}" class="top-nav-dropdown">
 * 				There will be a drop down here of sorts.
 * 			</div>
 * 		</li>
 * 		<li>
 * 			<div *ngIf="!showSearchInput1" class="top-nav-divider"></div>
 * 		</li>
 * 		<li>
 * 			<a class="top-nav-link-item"
 * 				tabindex="0"
 * 				(click)="showUser1 = !showUser1"
 * 				[ngClass]="{'top-nav-link-item-selected': showUser1}"
 * 				[attr.aria-expanded]="!!showUser1">
 * 				<n-icon class="menu-icon" [ngClass]="{'menu-icon-only': showSearchInput1}" icon="profile" size="sm"></n-icon>
 * 				<span *ngIf="!showSearchInput1">Sam Uncley</span>
 * 			</a>
 * 			<div [ngClass]="{'hidden': !showUser1}" class="top-nav-dropdown">
 * 				There will be a drop down here of sorts.
 * 			</div>
 * 		</li>
 * 		<li>
 * 			<a class="top-nav-link-item"
 * 				tabindex="0"
 * 				(click)="showHelp1 = !showHelp1"
 * 				[ngClass]="{'top-nav-link-item-selected': showHelp1}"
 * 				[attr.aria-expanded]="!!showHelp1">
 * 				<n-icon class="menu-icon" [ngClass]="{'menu-icon-only': showSearchInput1}" icon="help" size="sm"></n-icon>
 * 				<span *ngIf="!showSearchInput1">Help</span>
 * 			</a>
 * 			<div [ngClass]="{'hidden': !showHelp1}" class="top-nav-dropdown">
 * 				There will be a drop down here of sorts.
 * 			</div>
 * 		</li>
 * 	</ul>
 * </n-top-nav>
 * ```
 *
 * @export
 * @class TopNav
 * @implements {AfterViewInit}
 */
@Component({
	selector: "n-top-nav",
	template: `
	<header
		[ngClass]="{
			'position-fixed--top': fixed
		}"
		role="banner">
		<nav class="top-nav" role="menu">
			<a href="#main-content" class="sr-only">{{ 'TOPNAV.SKIP_TO_MAIN' | translate }}</a>
			<ng-content select="[hamburger]"></ng-content>
			<ng-content select="[title]"></ng-content>
			<ng-content select="[links]"></ng-content>
			<ng-content select="[menu]"></ng-content>
			<span class="top-nav_ibm" aria-hidden="true">
				<svg xmlns="http://www.w3.org/2000/svg" width="38" height="16" viewBox="0 0 38 15"><path class="st0" d="M0
				0h7v1H0zM0 2h7v1H0zM0 12h7v1H0zM0 14h7v1H0zM2 10h3v1H2zM2 8h3v1H2zM2 6h3v1H2zM2 4h3v1H2zM10 4h3v1h-3zM23 8h3v1h-3zM23
				10h3v1h-3zM21 12h5v1h-5zM33 12h5v1h-5zM33 14h5v1h-5zM21 14h5v1h-5zM33 8h3v1h-3zM33 10h3v1h-3zM10 10h3v1h-3zM26.3 0H21v1h5.7zM27.1
				2H21v1h6.5zM27.9 4H23v1h5.3zM28.7 6H23v1h6.1zM32.4 8h-5.8l.4 1h5zM27.4 10h4.2l-.4 1h-3.4zM28.2 12h2.6l-.4 1h-1.8zM29 14h1l-.4
				1h-.2zM32.6 0H38v1h-5.8zM31.8 2H38v1h-6.6zM31 4h5v1h-5.4zM30.2 6H36v1h-6.2zM15.5 15H8v-1h10.6c-.5.4-1.8 1-3.1 1zM19.9
				12H8v1h11.5c.2-.2.4-.7.4-1zM19.7 10h-3.3v1h3.5c.1-.3 0-.7-.2-1zM18.1 8H10v1h9.2c0-.2-.8-.9-1.1-1zM19.2 6H10v1h8.1c.3-.2.9-.6
				1.1-1zM19.9 4h-3.5v1h3.3c.1-.2.2-.6.2-1zM19.4 2H8v1h11.8c0-.3-.3-.8-.4-1zM8 0v1h10.5c-.3-.2-1.5-1-3.1-1H8z"/>
				</svg>
			</span>
		</nav>
	</header>`
})
export class TopNav implements AfterViewInit {
	/**
	 * The nav bar label/badge.
	 * @type {string}
	 * @memberof TopNav
	 */
	@Input() badge: string;
	/**
	 * Product name to be displayed in nav bar.
	 * @type {string}
	 * @memberof TopNav
	 */
	@Input() brand: string;
	/**
	 * Set to `true` for a sticky (fixed absolute position) nav bar.
	 * @type {boolean}
	 * @memberof TopNav
	 */
	@Input() fixed = false;

	/**
	 * Creates an instance of `TopNav`.
	 * @param {HTMLElement} document
	 * @param {ElementRef} elementRef
	 * @memberof TopNav
	 */
	constructor(@Inject(DOCUMENT) public document: HTMLElement, private elementRef: ElementRef) {}

	/**
	 * Updates the properties of the icons and list items that populate the nav component.
	 * @memberof TopNav
	 */
	ngAfterViewInit() {
		// add aria-hidden to icon elements
		let icons = this.elementRef.nativeElement.querySelectorAll("n-icon, .menu-icon, .icon");
		icons.forEach(icon => icon.setAttribute("aria-hidden", "true"));

		let menuItems = this.elementRef.nativeElement.querySelectorAll(".top-nav-link-item");
		menuItems.forEach(item => {
			// add role menuitem to menu items
			item.setAttribute("role", "menuitem");

			// make space and enter work as click
			item.onkeyup = event => {
				if (event.key === " " || event.key === "Enter") {
					event.target.click();
				}
			};
		});

		let lis = this.elementRef.nativeElement.querySelectorAll("li");
		lis.forEach(li => {
			if (li.querySelector(".top-nav-dropdown")) {
				li.querySelector(".top-nav-link-item").setAttribute("aria-haspop", "true");
			}
		});
	}
}
