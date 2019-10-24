import {
	Component,
	HostBinding,
	Input,
	ViewEncapsulation
} from "@angular/core";
import { I18n } from "../../i18n/i18n.module";

/**
 * `Sidenav` is a fixed left navigation that may contain `SideNavItem`s or `SideNavMenu`s
 *
 * [See demo](../../?path=/story/ui-shell--side-navigation)
 *
 * <example-url>../../iframe.html?id=ui-shell--side-navigation</example-url>
 */
@Component({
	selector: "ibm-sidenav",
	template: `
		<nav
			class="bx--side-nav__navigation"
			role="navigation"
			[attr.aria-label]="i18n.get('UI_SHELL.SIDE_NAV.LABEL')">
			<ng-content select="ibm-sidenav-header"></ng-content>
			<ul class="bx--side-nav__items">
				<ng-content></ng-content>
			</ul>
			<footer class="bx--side-nav__footer">
				<button
					*ngIf="allowExpansion"
					class="bx--side-nav__toggle"
					type="button"
					[title]="(expanded ? i18n.get('UI_SHELL.SIDE_NAV.TOGGLE_CLOSE') : i18n.get('UI_SHELL.SIDE_NAV.TOGGLE_OPEN')) | async"
					(click)="toggle()">
					<div class="bx--side-nav__icon">
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
					<span class="bx--assistive-text">
						{{(expanded ? i18n.get('UI_SHELL.SIDE_NAV.TOGGLE_CLOSE') : i18n.get('UI_SHELL.SIDE_NAV.TOGGLE_OPEN')) | async}}
					</span>
				</button>
			</footer>
		</nav>
	`,
	encapsulation: ViewEncapsulation.None
})
export class SideNav {
	@HostBinding("attr.role") role = "complementary";
	@HostBinding("class.bx--side-nav") hostClass = true;
	/**
	 * Controls the expanded (`true`) or collapsed (`false`) state when on a small screen.
	 */
	@HostBinding("class.bx--side-nav--expanded") @Input() expanded = true;
	/**
	 * Controls the hidden (`true`) or visible (`false`) state
	 */
	@HostBinding("class.bx--side-nav--hidden") @Input() hidden = false;
	@HostBinding("class.bx--side-nav--rail") @Input() rail = false;
	@HostBinding("class.bx--side-nav--ux") ux = true;
	@Input() allowExpansion = true;

	constructor(public i18n: I18n) { }

	toggle() {
		this.expanded = !this.expanded;
	}
}
