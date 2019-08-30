/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding, Input, ViewEncapsulation } from "@angular/core";
import { I18n } from "../../i18n/i18n.module";
/**
 * `Sidenav` is a fixed left navigation that may contain `SideNavItem`s or `SideNavMenu`s
 *
 * [See demo](../../?path=/story/ui-shell--side-navigation)
 *
 * <example-url>../../iframe.html?id=ui-shell--side-navigation</example-url>
 */
export class SideNav {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        this.role = "complementary";
        this.hostClass = true;
        /**
         * Controls the expanded (`true`) or collapsed (`false`) state when on a small screen.
         */
        this.expanded = true;
        /**
         * Controls the hidden (`true`) or visible (`false`) state
         */
        this.hidden = false;
        this.ux = true;
        this.allowExpansion = false;
    }
    /**
     * @return {?}
     */
    toggle() {
        this.expanded = !this.expanded;
    }
}
SideNav.decorators = [
    { type: Component, args: [{
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
            }] }
];
/** @nocollapse */
SideNav.ctorParameters = () => [
    { type: I18n }
];
SideNav.propDecorators = {
    role: [{ type: HostBinding, args: ["attr.role",] }],
    hostClass: [{ type: HostBinding, args: ["class.bx--side-nav",] }],
    expanded: [{ type: HostBinding, args: ["class.bx--side-nav--expanded",] }, { type: Input }],
    hidden: [{ type: HostBinding, args: ["class.bx--side-nav--hidden",] }, { type: Input }],
    ux: [{ type: HostBinding, args: ["class.bx--side-nav--ux",] }],
    allowExpansion: [{ type: Input }]
};
function SideNav_tsickle_Closure_declarations() {
    /** @type {?} */
    SideNav.prototype.role;
    /** @type {?} */
    SideNav.prototype.hostClass;
    /**
     * Controls the expanded (`true`) or collapsed (`false`) state when on a small screen.
     * @type {?}
     */
    SideNav.prototype.expanded;
    /**
     * Controls the hidden (`true`) or visible (`false`) state
     * @type {?}
     */
    SideNav.prototype.hidden;
    /** @type {?} */
    SideNav.prototype.ux;
    /** @type {?} */
    SideNav.prototype.allowExpansion;
    /** @type {?} */
    SideNav.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWktc2hlbGwvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxFQUNMLGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7O0FBOEQ5QyxNQUFNOzs7O0lBY0wsWUFBbUIsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07b0JBYkksZUFBZTt5QkFDRCxJQUFJOzs7O3dCQUljLElBQUk7Ozs7c0JBSVIsS0FBSztrQkFDdEIsSUFBSTs4QkFDdEIsS0FBSztLQUVHOzs7O0lBRWxDLE1BQU07UUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUMvQjs7O1lBdkVELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnRFQ7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDckM7Ozs7WUE3RFEsSUFBSTs7O21CQStEWCxXQUFXLFNBQUMsV0FBVzt3QkFDdkIsV0FBVyxTQUFDLG9CQUFvQjt1QkFJaEMsV0FBVyxTQUFDLDhCQUE4QixjQUFHLEtBQUs7cUJBSWxELFdBQVcsU0FBQyw0QkFBNEIsY0FBRyxLQUFLO2lCQUNoRCxXQUFXLFNBQUMsd0JBQXdCOzZCQUNwQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRIb3N0QmluZGluZyxcblx0SW5wdXQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJMThuIH0gZnJvbSBcIi4uLy4uL2kxOG4vaTE4bi5tb2R1bGVcIjtcblxuLyoqXG4gKiBgU2lkZW5hdmAgaXMgYSBmaXhlZCBsZWZ0IG5hdmlnYXRpb24gdGhhdCBtYXkgY29udGFpbiBgU2lkZU5hdkl0ZW1gcyBvciBgU2lkZU5hdk1lbnVgc1xuICpcbiAqIFtTZWUgZGVtb10oLi4vLi4vP3BhdGg9L3N0b3J5L3VpLXNoZWxsLS1zaWRlLW5hdmlnYXRpb24pXG4gKlxuICogPGV4YW1wbGUtdXJsPi4uLy4uL2lmcmFtZS5odG1sP2lkPXVpLXNoZWxsLS1zaWRlLW5hdmlnYXRpb248L2V4YW1wbGUtdXJsPlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLXNpZGVuYXZcIixcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmF2XG5cdFx0XHRjbGFzcz1cImJ4LS1zaWRlLW5hdl9fbmF2aWdhdGlvblwiXG5cdFx0XHRyb2xlPVwibmF2aWdhdGlvblwiXG5cdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cImkxOG4uZ2V0KCdVSV9TSEVMTC5TSURFX05BVi5MQUJFTCcpXCI+XG5cdFx0XHQ8bmctY29udGVudCBzZWxlY3Q9XCJpYm0tc2lkZW5hdi1oZWFkZXJcIj48L25nLWNvbnRlbnQ+XG5cdFx0XHQ8dWwgY2xhc3M9XCJieC0tc2lkZS1uYXZfX2l0ZW1zXCI+XG5cdFx0XHRcdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblx0XHRcdDwvdWw+XG5cdFx0XHQ8Zm9vdGVyIGNsYXNzPVwiYngtLXNpZGUtbmF2X19mb290ZXJcIj5cblx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdCpuZ0lmPVwiYWxsb3dFeHBhbnNpb25cIlxuXHRcdFx0XHRcdGNsYXNzPVwiYngtLXNpZGUtbmF2X190b2dnbGVcIlxuXHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFt0aXRsZV09XCIoZXhwYW5kZWQgPyBpMThuLmdldCgnVUlfU0hFTEwuU0lERV9OQVYuVE9HR0xFX0NMT1NFJykgOiBpMThuLmdldCgnVUlfU0hFTEwuU0lERV9OQVYuVE9HR0xFX09QRU4nKSkgfCBhc3luY1wiXG5cdFx0XHRcdFx0KGNsaWNrKT1cInRvZ2dsZSgpXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ4LS1zaWRlLW5hdl9faWNvblwiPlxuXHRcdFx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdFx0XHQqbmdJZj1cImV4cGFuZGVkXCJcblx0XHRcdFx0XHRcdFx0Zm9jdXNhYmxlPVwiZmFsc2VcIlxuXHRcdFx0XHRcdFx0XHRwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiXG5cdFx0XHRcdFx0XHRcdHN0eWxlPVwid2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcIlxuXHRcdFx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0XHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRcdFx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdFx0XHRcdFx0dmlld0JveD1cIjAgMCAzMiAzMlwiXG5cdFx0XHRcdFx0XHRcdGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwiTTI0IDkuNEwyMi42IDggMTYgMTQuNiA5LjQgOCA4IDkuNGw2LjYgNi42TDggMjIuNiA5LjQgMjRsNi42LTYuNiA2LjYgNi42IDEuNC0xLjQtNi42LTYuNkwyNCA5LjR6XCI+PC9wYXRoPlxuXHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdCpuZ0lmPVwiIWV4cGFuZGVkXCJcblx0XHRcdFx0XHRcdFx0Zm9jdXNhYmxlPVwiZmFsc2VcIlxuXHRcdFx0XHRcdFx0XHRwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiXG5cdFx0XHRcdFx0XHRcdHN0eWxlPVwid2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcIlxuXHRcdFx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0XHRcdFx0d2lkdGg9XCIyMFwiXG5cdFx0XHRcdFx0XHRcdGhlaWdodD1cIjIwXCJcblx0XHRcdFx0XHRcdFx0dmlld0JveD1cIjAgMCAzMiAzMlwiXG5cdFx0XHRcdFx0XHRcdGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVwiTTIyIDE2TDEyIDI2bC0xLjQtMS40IDguNi04LjYtOC42LTguNkwxMiA2elwiPjwvcGF0aD5cblx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiYngtLWFzc2lzdGl2ZS10ZXh0XCI+XG5cdFx0XHRcdFx0XHR7eyhleHBhbmRlZCA/IGkxOG4uZ2V0KCdVSV9TSEVMTC5TSURFX05BVi5UT0dHTEVfQ0xPU0UnKSA6IGkxOG4uZ2V0KCdVSV9TSEVMTC5TSURFX05BVi5UT0dHTEVfT1BFTicpKSB8IGFzeW5jfX1cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9mb290ZXI+XG5cdFx0PC9uYXY+XG5cdGAsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU2lkZU5hdiB7XG5cdEBIb3N0QmluZGluZyhcImF0dHIucm9sZVwiKSByb2xlID0gXCJjb21wbGVtZW50YXJ5XCI7XG5cdEBIb3N0QmluZGluZyhcImNsYXNzLmJ4LS1zaWRlLW5hdlwiKSBob3N0Q2xhc3MgPSB0cnVlO1xuXHQvKipcblx0ICogQ29udHJvbHMgdGhlIGV4cGFuZGVkIChgdHJ1ZWApIG9yIGNvbGxhcHNlZCAoYGZhbHNlYCkgc3RhdGUgd2hlbiBvbiBhIHNtYWxsIHNjcmVlbi5cblx0ICovXG5cdEBIb3N0QmluZGluZyhcImNsYXNzLmJ4LS1zaWRlLW5hdi0tZXhwYW5kZWRcIikgQElucHV0KCkgZXhwYW5kZWQgPSB0cnVlO1xuXHQvKipcblx0ICogQ29udHJvbHMgdGhlIGhpZGRlbiAoYHRydWVgKSBvciB2aXNpYmxlIChgZmFsc2VgKSBzdGF0ZVxuXHQgKi9cblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLXNpZGUtbmF2LS1oaWRkZW5cIikgQElucHV0KCkgaGlkZGVuID0gZmFsc2U7XG5cdEBIb3N0QmluZGluZyhcImNsYXNzLmJ4LS1zaWRlLW5hdi0tdXhcIikgdXggPSB0cnVlO1xuXHRASW5wdXQoKSBhbGxvd0V4cGFuc2lvbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBpMThuOiBJMThuKSB7IH1cblxuXHR0b2dnbGUoKSB7XG5cdFx0dGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xuXHR9XG59XG4iXX0=