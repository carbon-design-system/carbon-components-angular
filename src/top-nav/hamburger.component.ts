import { Component, Input, Output, EventEmitter } from "@angular/core";
/**
 * class: Hamburger (extends PopoverDirective)
 * selector: `n-hamburger`
 *
 *
 *
 *
 * ```html
 * <n-hamburger (onClick)="onClick($event)" hamburger></n-hamburger>
 * ```
 *
 *
 *
 * ```html
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
 *
 * ```typescript
 * toggleSearch(showSearchInput) {
 * 	showSearchInput = !showSearchInput;
 *
 *
 * 	if (showSearchInput) {
 * 		setTimeout( () => {
 * 			(document.querySelector(".top-nav-search-input") as HTMLElement).focus();
 * 		}, 1);
 * 	}
 *
 * 	return showSearchInput;
 * }
 * ```
 *
 * @export
 * @class Hamburger
 */
@Component({
	selector: "n-hamburger",
	template: `
	<button class="top-nav_toggler"
			[ngClass]="{'active': selected}"
			(click)="clickFn()"
			aria-label="toggle primary navigation menu"
			tabindex="0"
			type="button"
			role="button"
			title="Primary navigation menu">
		<svg class="icon--white" xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="1 3 18 18">
 		<path d="M1
 		3h18v3H1zM1 9h18v3H1zM1 15h18v3H1z"/></svg>
	</button>
  `
})
export class Hamburger {
	/**
	 * Controls the active/selected state for the `Hamburger` menu.
	 * @type {boolean}
	 * @memberof Hamburger
	 */
	@Input() selected = false;
	/**
	 * `EventEmitter` to notify parent components of menu click events.
	 * @type {EventEmitter<Object>}
	 * @memberof Hamburger
	 */
	@Output() onClick: EventEmitter<Object> = new EventEmitter<Object>();

	/**
	 * Emit the Hamburger click event upwards.
	 * @memberof Hamburger
	 */
	public clickFn() {
		let hamburgerClick = {};
			this.onClick.emit({
				hamburgerClick
			});
	}
}
