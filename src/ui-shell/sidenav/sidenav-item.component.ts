import {
	Component,
	Input,
	Optional,
	Output,
	EventEmitter,
	OnChanges
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";

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
		[attr.role]="(isSubMenu ? 'listitem' : null)">
			<a
				class="bx--side-nav__link"
				[href]="href"
				[ngClass]="{
					'.bx--side-nav__link--current': active
				}"
				[attr.role]="(isSubMenu ? 'menuitem' : null)"
				[attr.aria-current]="(active ? 'page' : null)"
				[attr.title]="title ? title : null"
				(click)="navigate($event)">
				<div *ngIf="!isSubMenu" class="bx--side-nav__icon">
					<ng-content select="svg, [icon]"></ng-content>
				</div>
				<span class="bx--side-nav__link-text">
					<ng-content></ng-content>
				</span>
			</a>
		</li>
	`
})
export class SideNavItem implements OnChanges {
	/**
	 * Link for the item. NOTE: *do not* pass unsafe or untrusted values, this has the potential to open you up to XSS attacks
	 */
	@Input() set href(v: string) {
		// Needed when component is created dynamically with a model.
		if (v === undefined) {
			return;
		}
		this._href = v;
	}

	get href() {
		return this.domSanitizer.bypassSecurityTrustUrl(this._href) as string;
	}

	/**
	 * Toggles the active (current page) state for the link.
	 */
	@Input() active = false;

	/**
	 * Array of commands to send to the router when the link is activated
	 * See: https://angular.io/api/router/Router#navigate
	 */
	@Input() route: any[];

	@Input() isSubMenu = false;

	/**
	 * Router options. Used in conjunction with `route`
	 * See: https://angular.io/api/router/Router#navigate
	 */
	@Input() routeExtras: any;

	/**
	 * Title attribute of the anchor element.
	 */
	@Input() title: string;

	/**
	 * Emits the navigation status promise when the link is activated
	 */
	@Output() navigation = new EventEmitter<Promise<boolean>>();

	/**
	 * Emits when `active` input is changed. This is mainly used to indicate to any parent menu items that a
	 * child sidenav item is active or not active.
	 */
	@Output() selected = new EventEmitter<boolean>();

	protected _href = "#";

	constructor(protected domSanitizer: DomSanitizer, @Optional() protected router: Router) {}

	ngOnChanges(changes) {
		if (changes.active) {
			this.selected.emit(this.active);
		}
	}

	navigate(event) {
		if (this.router && this.route) {
			event.preventDefault();
			const status = this.router.navigate(this.route, this.routeExtras);
			this.navigation.emit(status);
		} else if (this._href === "#") {
			event.preventDefault();
		}
	}
}
