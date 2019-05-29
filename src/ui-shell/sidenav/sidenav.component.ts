import {
	Component,
	HostBinding,
	Input,
	ViewEncapsulation
} from "@angular/core";
import { I18n } from "../../i18n/i18n.module";

/**
 * Carbon uses feature-flags to toggle the new ui-shell feature.
 *
 * To turn on this feature flag, include the feature-flag variable into your SCSS file before importing carbon-components,
 * then set ui-shell to true.
 *
 * ```scss
 * $feature-flags: (
 * 	ui-shell: true
 * );
 * @import 'carbon-components/src/globals/scss/styles';
 * ```
 *
 * [See demo](../../?path=/story/ui-shell--side-navigation)
 *
 * <example-url>../../iframe.html?id=ui-shell--side-navigation</example-url>
 *
 * @export
 * @class SideNav
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
	@HostBinding("class.bx--side-nav--expanded") @Input() expanded = false;

	constructor(public i18n: I18n) { }

	toggle() {
		this.expanded = !this.expanded;
	}
}
