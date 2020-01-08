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
	selector: "ibm-header-navigation",
	template: `
		<nav class="bx--header__nav" [attr.aria-label]="ariaLabel">
			<ul class="bx--header__menu-bar" role="menubar">
				<ng-content></ng-content>
				<ng-container *ngFor="let navigationItem of navigationItems">
					<ibm-header-item
						*ngIf="navigationItem.type === 'item'"
						[breakpoint]="navigationItem.breakpoint"
						[href]="navigationItem.href"
						[route]="navigationItem.route"
						[routeExtras]="navigationItem.routeExtras"
						[content]="navigationItem.content">
					</ibm-header-item>
					<ibm-header-menu
						*ngIf="navigationItem.type === 'menu'"
						[breakpoint]="navigationItem.breakpoint"
						[href]="navigationItem.href"
						[title]="navigationItem.title"
						[trigger]="navigationItem.trigger ? navigationItem.trigger : 'click'"
						[headerItems]="navigationItem.headerItems">
					</ibm-header-menu>
				</ng-container>
			</ul>
		</nav>
	`
})
export class HeaderNavigation {
	@HostBinding("style.height.%") height = 100;

	@Input() ariaLabel: string;

	@Input() navigationItems: NavigationItem[];
}
