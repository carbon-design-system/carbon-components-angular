import {
	AfterContentInit,
	Component,
	ContentChildren,
	Input,
	QueryList
} from "@angular/core";
import { SideNavItem } from "./sidenav-item.component";

@Component({
	selector: "ibm-sidenav-menu",
	template: `
		<li class="bx--side-nav__item">
			<button
				(click)="toggle()"
				class="bx--side-nav__submenu"
				aria-haspopup="true"
				[attr.aria-expanded]="expanded"
				type="button">
				<div class="bx--side-nav__icon">
					<ng-content select="[icon]"></ng-content>
				</div>
				<span class="bx--side-nav__submenu-title">{{title}}</span>
				<div class="bx--side-nav__icon bx--side-nav__icon--small bx--side-nav__submenu-chevron">
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
			<ul class="bx--side-nav__menu" role="menu">
				<ng-content></ng-content>
			</ul>
		</li>
	`
})
export class SideNavMenu implements AfterContentInit {
	@Input() title;

	@ContentChildren(SideNavItem) sidenavItems: QueryList<SideNavItem>;

	@Input() expanded = false;

	ngAfterContentInit() {
		this.sidenavItems.forEach(item => {
			item.isSubMenu = true;
		});
	}

	toggle() {
		this.expanded = !this.expanded;
	}
}
