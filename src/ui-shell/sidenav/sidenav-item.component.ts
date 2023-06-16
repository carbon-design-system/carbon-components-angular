import {
	Component,
	Input,
	Optional,
	Output,
	EventEmitter,
	OnChanges,
	HostBinding
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";

/**
 * `SideNavItem` can either be a child of `SideNav` or `SideNavMenu`
 */
@Component({
	selector: "cds-sidenav-item, ibm-sidenav-item",
	template: `
		<a
			class="cds--side-nav__link"
			[ngClass]="{
				'cds--side-nav__item--active': active
			}"
			[href]="href"
			[attr.aria-current]="(active ? 'page' : null)"
			[attr.title]="title ? title : null"
			(click)="navigate($event)">
			<div *ngIf="!isSubMenu" class="cds--side-nav__icon">
				<ng-content select="svg, [icon]"></ng-content>
			</div>
			<span class="cds--side-nav__link-text">
				<ng-content></ng-content>
			</span>
		</a>
	`,
	styles: [`
		:host {
			display: list-item;
		}
	`]
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

	@HostBinding("class.cds--side-nav__item") get sideNav() {
		return !this.isSubMenu;
	}

	@HostBinding("class.cds--side-nav__menu-item") get menuItem() {
		return this.isSubMenu;
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

	@HostBinding("attr.role") role = "listitem";

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
