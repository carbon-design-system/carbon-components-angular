import {
	Component,
	HostBinding,
	Input,
	ViewEncapsulation
} from "@angular/core";
import { I18n } from "carbon-components-angular/i18n";
import { NavigationItem } from "../header/header-navigation-items.interface";

/**
 * `Sidenav` is a fixed left navigation that may contain `SideNavItem`s or `SideNavMenu`s
 *
 * [See demo](../../?path=/story/components-ui-shell--side-navigation)
 */
@Component({
	selector: "cds-sidenav, ibm-sidenav",
	template: `
		<nav class="cds--side-nav__items" [attr.aria-label]="ariaLabel">
			<ng-content select="cds-sidenav-header"></ng-content>
			<div role="list">
				<div class="cds--side-nav__header-navigation cds--side-nav__header-divider">
					<ng-container *ngFor="let navigationItem of navigationItems">
						<cds-sidenav-item
							*ngIf="navigationItem.type === 'item'"
							[href]="navigationItem.href"
							[route]="navigationItem.route"
							[routeExtras]="navigationItem.routeExtras"
							[title]="navigationItem.title">
							{{ navigationItem.content }}
						</cds-sidenav-item>
						<cds-sidenav-menu
							*ngIf="navigationItem.type === 'menu'"
							[title]="navigationItem.title"
							[menuItems]="navigationItem.menuItems">
						</cds-sidenav-menu>
					</ng-container>
				</div>
				<ng-content></ng-content>
			</div>
			<footer class="cds--side-nav__footer">
				<button
					*ngIf="allowExpansion"
					class="cds--side-nav__toggle"
					type="button"
					[title]="(expanded ? i18n.get('UI_SHELL.SIDE_NAV.TOGGLE_CLOSE') : i18n.get('UI_SHELL.SIDE_NAV.TOGGLE_OPEN')) | async"
					(click)="toggle()">
					<div class="cds--side-nav__icon">
						<svg
							*ngIf="expanded"
							focusable="false"
							preserveAspectRatio="xMidYMid meet"
							style="will-change: transform;"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 32 32"
							aria-hidden="true">
							<path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4l6.6 6.6L8 22.6 9.4 24l6.6-6.6 6.6 6.6 1.4-1.4-6.6-6.6L24 9.4z"></path>
						</svg>
						<svg
							*ngIf="!expanded"
							focusable="false"
							preserveAspectRatio="xMidYMid meet"
							style="will-change: transform;"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 32 32"
							aria-hidden="true">
							<path d="M22 16L12 26l-1.4-1.4 8.6-8.6-8.6-8.6L12 6z"></path>
						</svg>
					</div>
					<span class="cds--assistive-text">
						{{(expanded ? i18n.get('UI_SHELL.SIDE_NAV.TOGGLE_CLOSE') : i18n.get('UI_SHELL.SIDE_NAV.TOGGLE_OPEN')) | async}}
					</span>
				</button>
			</footer>
		</nav>
	`,
	encapsulation: ViewEncapsulation.None
})
export class SideNav {
	@HostBinding("class.cds--side-nav") hostClass = true;
	@Input() ariaLabel = "Side navigation";
	/**
	 * Controls the expanded (`true`) or collapsed (`false`) state when on a small screen.
	 */
	@HostBinding("class.cds--side-nav--expanded") @Input() expanded = true;
	/**
	 * Controls the hidden (`true`) or visible (`false`) state
	 */
	@HostBinding("class.cds--side-nav--hidden") @Input() hidden = false;
	@HostBinding("class.cds--side-nav--rail") @Input() rail = false;
	@HostBinding("class.cds--side-nav__navigation") ux = true;
	@Input() allowExpansion = false;

	/**
	 * NavigationItems from the header navigation component which are displayed on the sidenav when the window
	 * innerWidth is small enough. Sidenav items and menus are created using the model used to create header
	 * navigation items.
	 */
	@Input() navigationItems: NavigationItem[];

	constructor(public i18n: I18n) { }

	toggle() {
		this.expanded = !this.expanded;
	}
}
