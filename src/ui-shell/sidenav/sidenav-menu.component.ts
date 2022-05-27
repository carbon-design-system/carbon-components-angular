import {
	AfterContentInit,
	Component,
	ContentChildren,
	Input,
	QueryList,
	OnDestroy
} from "@angular/core";
import { SideNavItem } from "./sidenav-item.component";
import { Subscription } from "rxjs";
import { SideNavItemInterface } from "./sidenav-item.interface";


/**
 * `SideNavMenu` provides a method to group `SideNavItem`s under a common heading.
 */
@Component({
	selector: "ibm-sidenav-menu",
	template: `
		<li
			class="cds--side-nav__item cds--side-nav__item--icon"
			[ngClass]="{ 'cds--side-nav__item--active': hasActiveChild }">
			<button
				(click)="toggle()"
				class="cds--side-nav__submenu"
				aria-haspopup="true"
				[attr.aria-expanded]="expanded"
				type="button">
				<div class="cds--side-nav__icon">
					<ng-content select="[icon]"></ng-content>
				</div>
				<span class="cds--side-nav__submenu-title">{{title}}</span>
				<div class="cds--side-nav__icon cds--side-nav__icon--small cds--side-nav__submenu-chevron">
					<svg
						focusable="false"
						preserveAspectRatio="xMidYMid meet"
						style="will-change: transform;"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 32 32"
						aria-hidden="true">
						<path d="M16 22L6 12l1.4-1.4 8.6 8.6 8.6-8.6L26 12z"></path>
					</svg>
				</div>
			</button>
			<ul class="cds--side-nav__menu" role="menu">
				<ng-content></ng-content>
				<ng-container *ngFor="let menuItem of menuItems">
					<ibm-sidenav-item
						[href]="menuItem.href"
						[route]="menuItem.route"
						[routeExtras]="menuItem.routeExtras"
						[isSubMenu]="true">
						{{ menuItem.content }}
					</ibm-sidenav-item>
				</ng-container>
			</ul>
		</li>
	`
})
export class SideNavMenu implements AfterContentInit, OnDestroy {
	/**
	 * Heading for the gorup
	 */
	@Input() title: string;
	/**
	 * Controls the visibility of the child `SideNavItem`s
	 */
	@Input() expanded = false;
	/**
	 * Controls the active status indicator on the menu if there is an active
	 * child sidenav item.
	 */
	@Input() hasActiveChild = false;

	@Input() menuItems: SideNavItemInterface[];

	@ContentChildren(SideNavItem) sidenavItems: QueryList<SideNavItem>;

	protected activeItemsSubscription = new Subscription();

	ngAfterContentInit() {
		setTimeout(() => {
			this.sidenavItems.forEach(item => {
				item.isSubMenu = true;
				this.findActiveChildren();
				const activeItemSubscription = item.selected.subscribe(() => {
					this.findActiveChildren();
				});
				this.activeItemsSubscription.add(activeItemSubscription);
			});

			this.sidenavItems.changes.subscribe(() => {
				this.sidenavItems.forEach(item => {
					item.isSubMenu = true;
					this.findActiveChildren();
					const activeItemSubscription = item.selected.subscribe(() => {
						this.findActiveChildren();
					});
					this.activeItemsSubscription.add(activeItemSubscription);
				});
			});
		});
	}

	ngOnDestroy() {
		this.activeItemsSubscription.unsubscribe();
	}

	toggle() {
		this.expanded = !this.expanded;
	}

	protected findActiveChildren() {
		if (this.sidenavItems.some(item => item.active)) {
			this.hasActiveChild = true;
		} else {
			this.hasActiveChild = false;
		}
	}
}
