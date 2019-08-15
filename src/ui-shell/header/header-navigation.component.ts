import { Component, HostBinding, Input } from "@angular/core";

/**
 * Container for header navigation items
 */
@Component({
	selector: "ibm-header-navigation",
	template: `
		<nav class="bx--header__nav" [attr.aria-label]="ariaLabel">
			<ul class="bx--header__menu-bar" role="menubar">
				<ng-content></ng-content>
			</ul>
		</nav>
	`
})
export class HeaderNavigation {
	@HostBinding("style.height.%") height = 100;

	@Input() ariaLabel: string;
}
