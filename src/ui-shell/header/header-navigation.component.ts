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
				<ng-content></ng-content>
				<ng-container *ngFor="let navigationItem of navigationItems">
					<cds-header-item
						*ngIf="navigationItem.type === 'item'"
						[href]="navigationItem.href"
						[route]="navigationItem.route"
						[routeExtras]="navigationItem.routeExtras"
						[isCurrentPage]="!!navigationItem.isCurrentPage">
						{{ navigationItem.content }}
					</cds-header-item>
					<cds-header-menu
						*ngIf="navigationItem.type === 'menu'"
						[href]="navigationItem.href"
						[title]="navigationItem.title"
						[trigger]="navigationItem.trigger ? navigationItem.trigger : 'click'"
						[headerItems]="navigationItem.menuItems">
					</cds-header-menu>
				</ng-container>
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
