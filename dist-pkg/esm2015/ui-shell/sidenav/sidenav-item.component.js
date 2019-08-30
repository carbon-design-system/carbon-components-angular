/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Optional, Output, EventEmitter } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";
/**
 * `SideNavItem` can either be a child of `SideNav` or `SideNavMenu`
 */
export class SideNavItem {
    /**
     * @param {?} domSanitizer
     * @param {?} router
     */
    constructor(domSanitizer, router) {
        this.domSanitizer = domSanitizer;
        this.router = router;
        /**
         * Toggles the active (current page) state for the link.
         */
        this.active = false;
        /**
         * Emits the navigation status promise when the link is activated
         */
        this.navigation = new EventEmitter();
        this.isSubMenu = false;
        this._href = "javascript:void(0)";
    }
    /**
     * Link for the item. NOTE: *do not* pass unsafe or untrusted values, this has the potential to open you up to XSS attacks
     * @param {?} v
     * @return {?}
     */
    set href(v) {
        this._href = v;
    }
    /**
     * @return {?}
     */
    get href() {
        return /** @type {?} */ (this.domSanitizer.bypassSecurityTrustUrl(this._href));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    navigate(event) {
        if (this.router && this.route) {
            event.preventDefault();
            /** @type {?} */
            const status = this.router.navigate(this.route, this.routeExtras);
            this.navigation.emit(status);
        }
    }
}
SideNavItem.decorators = [
    { type: Component, args: [{
                selector: "ibm-sidenav-item",
                template: `
		<li [ngClass]="{
			'bx--side-nav__item': !isSubMenu,
			'bx--side-nav__menu-item': isSubMenu
		}"
		[attr.role]="(isSubMenu ? 'none' : null)">
			<a
				class="bx--side-nav__link"
				[href]="href"
				[attr.role]="(isSubMenu ? 'menuitem' : null)"
				[attr.aria-current]="(active ? 'page' : null)"
				(click)="navigate($event)">
				<div *ngIf="!isSubMenu" class="bx--side-nav__icon">
					<ng-content select="[icon]"></ng-content>
				</div>
				<span class="bx--side-nav__link-text">
					<ng-content></ng-content>
				</span>
			</a>
		</li>
	`
            }] }
];
/** @nocollapse */
SideNavItem.ctorParameters = () => [
    { type: DomSanitizer },
    { type: Router, decorators: [{ type: Optional }] }
];
SideNavItem.propDecorators = {
    href: [{ type: Input }],
    active: [{ type: Input }],
    route: [{ type: Input }],
    routeExtras: [{ type: Input }],
    navigation: [{ type: Output }]
};
function SideNavItem_tsickle_Closure_declarations() {
    /**
     * Toggles the active (current page) state for the link.
     * @type {?}
     */
    SideNavItem.prototype.active;
    /**
     * Array of commands to send to the router when the link is activated
     * See: https://angular.io/api/router/Router#navigate
     * @type {?}
     */
    SideNavItem.prototype.route;
    /**
     * Router options. Used in conjunction with `route`
     * See: https://angular.io/api/router/Router#navigate
     * @type {?}
     */
    SideNavItem.prototype.routeExtras;
    /**
     * Emits the navigation status promise when the link is activated
     * @type {?}
     */
    SideNavItem.prototype.navigation;
    /** @type {?} */
    SideNavItem.prototype.isSubMenu;
    /** @type {?} */
    SideNavItem.prototype._href;
    /** @type {?} */
    SideNavItem.prototype.domSanitizer;
    /** @type {?} */
    SideNavItem.prototype.router;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS1zaGVsbC9zaWRlbmF2L3NpZGVuYXYtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBQ04sWUFBWSxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUE2QnpDLE1BQU07Ozs7O0lBc0NMLFlBQXNCLFlBQTBCLEVBQXdCLE1BQWM7UUFBaEUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBd0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTs7OztzQkF2QnBFLEtBQUs7Ozs7MEJBaUJBLElBQUksWUFBWSxFQUFvQjt5QkFFL0MsS0FBSztxQkFFQyxvQkFBb0I7S0FFb0Q7Ozs7OztJQWxDMUYsSUFBYSxJQUFJLENBQUMsQ0FBUztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztLQUNmOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ1AseUJBQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFXLEVBQUM7S0FDdEU7Ozs7O0lBOEJELFFBQVEsQ0FBQyxLQUFLO1FBQ2IsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDOUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDOztZQUN2QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM3QjtLQUNEOzs7WUF0RUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQlQ7YUFDRDs7OztZQTdCUSxZQUFZO1lBQ1osTUFBTSx1QkFtRXFDLFFBQVE7OzttQkFsQzFELEtBQUs7cUJBV0wsS0FBSztvQkFNTCxLQUFLOzBCQU1MLEtBQUs7eUJBS0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdE9wdGlvbmFsLFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuLyoqXG4gKiBgU2lkZU5hdkl0ZW1gIGNhbiBlaXRoZXIgYmUgYSBjaGlsZCBvZiBgU2lkZU5hdmAgb3IgYFNpZGVOYXZNZW51YFxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLXNpZGVuYXYtaXRlbVwiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxsaSBbbmdDbGFzc109XCJ7XG5cdFx0XHQnYngtLXNpZGUtbmF2X19pdGVtJzogIWlzU3ViTWVudSxcblx0XHRcdCdieC0tc2lkZS1uYXZfX21lbnUtaXRlbSc6IGlzU3ViTWVudVxuXHRcdH1cIlxuXHRcdFthdHRyLnJvbGVdPVwiKGlzU3ViTWVudSA/ICdub25lJyA6IG51bGwpXCI+XG5cdFx0XHQ8YVxuXHRcdFx0XHRjbGFzcz1cImJ4LS1zaWRlLW5hdl9fbGlua1wiXG5cdFx0XHRcdFtocmVmXT1cImhyZWZcIlxuXHRcdFx0XHRbYXR0ci5yb2xlXT1cIihpc1N1Yk1lbnUgPyAnbWVudWl0ZW0nIDogbnVsbClcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLWN1cnJlbnRdPVwiKGFjdGl2ZSA/ICdwYWdlJyA6IG51bGwpXCJcblx0XHRcdFx0KGNsaWNrKT1cIm5hdmlnYXRlKCRldmVudClcIj5cblx0XHRcdFx0PGRpdiAqbmdJZj1cIiFpc1N1Yk1lbnVcIiBjbGFzcz1cImJ4LS1zaWRlLW5hdl9faWNvblwiPlxuXHRcdFx0XHRcdDxuZy1jb250ZW50IHNlbGVjdD1cIltpY29uXVwiPjwvbmctY29udGVudD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiYngtLXNpZGUtbmF2X19saW5rLXRleHRcIj5cblx0XHRcdFx0XHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvYT5cblx0XHQ8L2xpPlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVOYXZJdGVtIHtcblx0LyoqXG5cdCAqIExpbmsgZm9yIHRoZSBpdGVtLiBOT1RFOiAqZG8gbm90KiBwYXNzIHVuc2FmZSBvciB1bnRydXN0ZWQgdmFsdWVzLCB0aGlzIGhhcyB0aGUgcG90ZW50aWFsIHRvIG9wZW4geW91IHVwIHRvIFhTUyBhdHRhY2tzXG5cdCAqL1xuXHRASW5wdXQoKSBzZXQgaHJlZih2OiBzdHJpbmcpIHtcblx0XHR0aGlzLl9ocmVmID0gdjtcblx0fVxuXG5cdGdldCBocmVmKCkge1xuXHRcdHJldHVybiB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0VXJsKHRoaXMuX2hyZWYpIGFzIHN0cmluZztcblx0fVxuXG5cdC8qKlxuXHQgKiBUb2dnbGVzIHRoZSBhY3RpdmUgKGN1cnJlbnQgcGFnZSkgc3RhdGUgZm9yIHRoZSBsaW5rLlxuXHQgKi9cblx0QElucHV0KCkgYWN0aXZlID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIEFycmF5IG9mIGNvbW1hbmRzIHRvIHNlbmQgdG8gdGhlIHJvdXRlciB3aGVuIHRoZSBsaW5rIGlzIGFjdGl2YXRlZFxuXHQgKiBTZWU6IGh0dHBzOi8vYW5ndWxhci5pby9hcGkvcm91dGVyL1JvdXRlciNuYXZpZ2F0ZVxuXHQgKi9cblx0QElucHV0KCkgcm91dGU6IGFueVtdO1xuXG5cdC8qKlxuXHQgKiBSb3V0ZXIgb3B0aW9ucy4gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGByb3V0ZWBcblx0ICogU2VlOiBodHRwczovL2FuZ3VsYXIuaW8vYXBpL3JvdXRlci9Sb3V0ZXIjbmF2aWdhdGVcblx0ICovXG5cdEBJbnB1dCgpIHJvdXRlRXh0cmFzOiBhbnk7XG5cblx0LyoqXG5cdCAqIEVtaXRzIHRoZSBuYXZpZ2F0aW9uIHN0YXR1cyBwcm9taXNlIHdoZW4gdGhlIGxpbmsgaXMgYWN0aXZhdGVkXG5cdCAqL1xuXHRAT3V0cHV0KCkgbmF2aWdhdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8UHJvbWlzZTxib29sZWFuPj4oKTtcblxuXHRpc1N1Yk1lbnUgPSBmYWxzZTtcblxuXHRwcm90ZWN0ZWQgX2hyZWYgPSBcImphdmFzY3JpcHQ6dm9pZCgwKVwiO1xuXG5cdGNvbnN0cnVjdG9yKHByb3RlY3RlZCBkb21TYW5pdGl6ZXI6IERvbVNhbml0aXplciwgQE9wdGlvbmFsKCkgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyKSB7fVxuXG5cdG5hdmlnYXRlKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMucm91dGVyICYmIHRoaXMucm91dGUpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRjb25zdCBzdGF0dXMgPSB0aGlzLnJvdXRlci5uYXZpZ2F0ZSh0aGlzLnJvdXRlLCB0aGlzLnJvdXRlRXh0cmFzKTtcblx0XHRcdHRoaXMubmF2aWdhdGlvbi5lbWl0KHN0YXR1cyk7XG5cdFx0fVxuXHR9XG59XG4iXX0=