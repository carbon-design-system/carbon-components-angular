/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, Input, QueryList } from "@angular/core";
import { SideNavItem } from "./sidenav-item.component";
/**
 * `SideNavMenu` provides a method to group `SideNavItem`s under a common heading.
 */
export class SideNavMenu {
    constructor() {
        /**
         * Controls the visibility of the child `SideNavItem`s
         */
        this.expanded = false;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.sidenavItems.forEach(item => {
            item.isSubMenu = true;
        });
    }
    /**
     * @return {?}
     */
    toggle() {
        this.expanded = !this.expanded;
    }
}
SideNavMenu.decorators = [
    { type: Component, args: [{
                selector: "ibm-sidenav-menu",
                template: `
		<li class="bx--side-nav__item bx--side-nav__item--icon">
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
            }] }
];
SideNavMenu.propDecorators = {
    title: [{ type: Input }],
    expanded: [{ type: Input }],
    sidenavItems: [{ type: ContentChildren, args: [SideNavItem,] }]
};
function SideNavMenu_tsickle_Closure_declarations() {
    /**
     * Heading for the gorup
     * @type {?}
     */
    SideNavMenu.prototype.title;
    /**
     * Controls the visibility of the child `SideNavItem`s
     * @type {?}
     */
    SideNavMenu.prototype.expanded;
    /** @type {?} */
    SideNavMenu.prototype.sidenavItems;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS1zaGVsbC9zaWRlbmF2L3NpZGVuYXYtbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTixTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBdUN2RCxNQUFNOzs7Ozt3QkFRZSxLQUFLOzs7OztJQUl6QixrQkFBa0I7UUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdEIsQ0FBQyxDQUFDO0tBQ0g7Ozs7SUFFRCxNQUFNO1FBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDL0I7OztZQXRERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE4QlQ7YUFDRDs7O29CQUtDLEtBQUs7dUJBSUwsS0FBSzsyQkFFTCxlQUFlLFNBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyQ29udGVudEluaXQsXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkcmVuLFxuXHRJbnB1dCxcblx0UXVlcnlMaXN0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTaWRlTmF2SXRlbSB9IGZyb20gXCIuL3NpZGVuYXYtaXRlbS5jb21wb25lbnRcIjtcblxuLyoqXG4gKiBgU2lkZU5hdk1lbnVgIHByb3ZpZGVzIGEgbWV0aG9kIHRvIGdyb3VwIGBTaWRlTmF2SXRlbWBzIHVuZGVyIGEgY29tbW9uIGhlYWRpbmcuXG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tc2lkZW5hdi1tZW51XCIsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGxpIGNsYXNzPVwiYngtLXNpZGUtbmF2X19pdGVtIGJ4LS1zaWRlLW5hdl9faXRlbS0taWNvblwiPlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHQoY2xpY2spPVwidG9nZ2xlKClcIlxuXHRcdFx0XHRjbGFzcz1cImJ4LS1zaWRlLW5hdl9fc3VibWVudVwiXG5cdFx0XHRcdGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcblx0XHRcdFx0W2F0dHIuYXJpYS1leHBhbmRlZF09XCJleHBhbmRlZFwiXG5cdFx0XHRcdHR5cGU9XCJidXR0b25cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImJ4LS1zaWRlLW5hdl9faWNvblwiPlxuXHRcdFx0XHRcdDxuZy1jb250ZW50IHNlbGVjdD1cIltpY29uXVwiPjwvbmctY29udGVudD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiYngtLXNpZGUtbmF2X19zdWJtZW51LXRpdGxlXCI+e3t0aXRsZX19PC9zcGFuPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYngtLXNpZGUtbmF2X19pY29uIGJ4LS1zaWRlLW5hdl9faWNvbi0tc21hbGwgYngtLXNpZGUtbmF2X19zdWJtZW51LWNoZXZyb25cIj5cblx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRmb2N1c2FibGU9XCJmYWxzZVwiXG5cdFx0XHRcdFx0XHRwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiXG5cdFx0XHRcdFx0XHRzdHlsZT1cIndpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XCJcblx0XHRcdFx0XHRcdHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuXHRcdFx0XHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRcdFx0XHRoZWlnaHQ9XCIyMFwiXG5cdFx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDMyIDMyXCJcblx0XHRcdFx0XHRcdGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0PHBhdGggZD1cIk0xNiAyMkw2IDEybDEuNC0xLjQgOC42IDguNiA4LjYtOC42TDI2IDEyelwiPjwvcGF0aD5cblx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDx1bCBjbGFzcz1cImJ4LS1zaWRlLW5hdl9fbWVudVwiIHJvbGU9XCJtZW51XCI+XG5cdFx0XHRcdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblx0XHRcdDwvdWw+XG5cdFx0PC9saT5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlTmF2TWVudSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXHQvKipcblx0ICogSGVhZGluZyBmb3IgdGhlIGdvcnVwXG5cdCAqL1xuXHRASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXHQvKipcblx0ICogQ29udHJvbHMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGNoaWxkIGBTaWRlTmF2SXRlbWBzXG5cdCAqL1xuXHRASW5wdXQoKSBleHBhbmRlZCA9IGZhbHNlO1xuXG5cdEBDb250ZW50Q2hpbGRyZW4oU2lkZU5hdkl0ZW0pIHNpZGVuYXZJdGVtczogUXVlcnlMaXN0PFNpZGVOYXZJdGVtPjtcblxuXHRuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cdFx0dGhpcy5zaWRlbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdGl0ZW0uaXNTdWJNZW51ID0gdHJ1ZTtcblx0XHR9KTtcblx0fVxuXG5cdHRvZ2dsZSgpIHtcblx0XHR0aGlzLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWQ7XG5cdH1cbn1cbiJdfQ==