import { Component, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

/**
 * `SideNavItem` can either be a child of `SideNav` or `SideNavMenu`
 */
@Component({
	selector: "ibm-sidenav-item",
	template: `
		<li [ngClass]="{
			'bx--side-nav__item': !isSubMenu,
			'bx--side-nav__menu-item': isSubMenu
		}"
		[attr.role]="(isSubMenu ? 'none' : null)">
			<a
				class="bx--side-nav__link"
				[href]="href"
				[attr.role]="(isSubMenu ? 'menuitem' : null)"
				[attr.aria-current]="(active ? 'page' : null)">
				<div *ngIf="!isSubMenu" class="bx--side-nav__icon">
					<ng-content select="[icon]"></ng-content>
				</div>
				<span class="bx--side-nav__link-text">
					<ng-content></ng-content>
				</span>
			</a>
		</li>
	`
})
export class SideNavItem {
	/**
	 * Link for the item. NOTE: *do not* pass unsafe or untrusted values, this has the potential to open you up to XSS attacks
	 */
	@Input() set href(v: string) {
		this._href = v;
	}

	get href() {
		return this.domSanitizer.bypassSecurityTrustUrl(this._href) as string;
	}

	/**
	 * Toggles the active (current page) state for the link.
	 */
	@Input() active = false;
	isSubMenu = false;

	protected _href = "javascript:void(0)";

	constructor(protected domSanitizer: DomSanitizer) {}
}
