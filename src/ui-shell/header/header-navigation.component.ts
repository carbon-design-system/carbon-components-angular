import {
	Component,
	HostBinding,
	Input
} from "@angular/core";
import { NavigationItem } from "./header-navigation-items.interface";
/**
 * Container for header navigation items
 */
@Component({
	selector: "cds-header-navigation, ibm-header-navigation",
	template: `
		<nav class="cds--header__nav" [attr.aria-label]="ariaLabel">
			<div class="cds--header__menu-bar" role="list">
				<ng-content />
				@for (navigationItem of navigationItems; track navigationItem) {
					@if (navigationItem.type === 'item') {
						<cds-header-item
							[href]="navigationItem.href"
							[route]="navigationItem.route"
							[routeExtras]="navigationItem.routeExtras"
							[isCurrentPage]="!!navigationItem.isCurrentPage">
							{{ navigationItem.content }}
						</cds-header-item>
					}
					@if (navigationItem.type === 'menu') {
						<cds-header-menu
							[href]="navigationItem.href"
							[title]="navigationItem.title"
							[trigger]="navigationItem.trigger ? navigationItem.trigger : 'click'"
							[headerItems]="navigationItem.menuItems">
						</cds-header-menu>
					}
				}
			</div>
		</nav>
	`
})
export class HeaderNavigation {
	@HostBinding("style.height.%") height = 100;

	@Input() ariaLabel: string;

	/**
	 * Creates the header navigation items and menu items through a list of navigation item objects.
	 * In order for the navigation items to move to the side navigation when window size is less than 1056px,
	 * navigation items need to be passed into both cds-header-navigation and cds-sidenav.
	 */
	@Input() navigationItems: NavigationItem[];
}
