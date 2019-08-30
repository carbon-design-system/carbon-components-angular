/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { I18n } from "../../i18n/i18n.module";
/**
 * @deprecated Until futher notice. Will be removed in a future version.
 */
export class SideNavHeader {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        this.switcherId = "sidenav-switcher";
    }
}
SideNavHeader.decorators = [
    { type: Component, args: [{
                selector: "ibm-sidenav-header",
                template: `
		<header class="bx--side-nav__header">
			<div class="bx--side-nav__icon">
				<ng-content select="[icon]"></ng-content>
			</div>
			<div class="bx--side-nav__details">
				<h2 class="bx--side-nav__title" [title]="title">{{title}}</h2>
				<div class="bx--side-nav__switcher">
					<label class="bx--assistive-text" [for]="switcherId">
						{{i18n.get('UI_SHELL.SIDE_NAV.SWITCHER') | async}}
					</label>
					<select [id]="switcherId" class="bx--side-nav__select">
						<option class="bx--side-nav__option" disabled="" value="" selected="" hidden="">
							{{i18n.get('UI_SHELL.SIDE_NAV.SWITCHER') | async}}
						</option>
						<option
							*ngFor="let option of options"
							class="bx--side-nav__option"
							[value]="(option.value ? option.value : option.content)">
							{{option.content}}
						</option>
					</select>
					<div class="bx--side-nav__switcher-chevron">
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
				</div>
			</div>
		</header>
	`
            }] }
];
/** @nocollapse */
SideNavHeader.ctorParameters = () => [
    { type: I18n }
];
SideNavHeader.propDecorators = {
    title: [{ type: Input }],
    options: [{ type: Input }]
};
function SideNavHeader_tsickle_Closure_declarations() {
    /** @type {?} */
    SideNavHeader.prototype.title;
    /** @type {?} */
    SideNavHeader.prototype.options;
    /** @type {?} */
    SideNavHeader.prototype.switcherId;
    /** @type {?} */
    SideNavHeader.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpLXNoZWxsL3NpZGVuYXYvc2lkZW5hdi1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUErQzlDLE1BQU07Ozs7SUFLTCxZQUFtQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTswQkFGVCxrQkFBa0I7S0FFSjs7O1lBL0NsQyxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXNDVDthQUNEOzs7O1lBOUNRLElBQUk7OztvQkFnRFgsS0FBSztzQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gXCIuLi8uLi9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGVcIjtcbmltcG9ydCB7IEkxOG4gfSBmcm9tIFwiLi4vLi4vaTE4bi9pMThuLm1vZHVsZVwiO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVudGlsIGZ1dGhlciBub3RpY2UuIFdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uLlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLXNpZGVuYXYtaGVhZGVyXCIsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGhlYWRlciBjbGFzcz1cImJ4LS1zaWRlLW5hdl9faGVhZGVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYngtLXNpZGUtbmF2X19pY29uXCI+XG5cdFx0XHRcdDxuZy1jb250ZW50IHNlbGVjdD1cIltpY29uXVwiPjwvbmctY29udGVudD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImJ4LS1zaWRlLW5hdl9fZGV0YWlsc1wiPlxuXHRcdFx0XHQ8aDIgY2xhc3M9XCJieC0tc2lkZS1uYXZfX3RpdGxlXCIgW3RpdGxlXT1cInRpdGxlXCI+e3t0aXRsZX19PC9oMj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImJ4LS1zaWRlLW5hdl9fc3dpdGNoZXJcIj5cblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJieC0tYXNzaXN0aXZlLXRleHRcIiBbZm9yXT1cInN3aXRjaGVySWRcIj5cblx0XHRcdFx0XHRcdHt7aTE4bi5nZXQoJ1VJX1NIRUxMLlNJREVfTkFWLlNXSVRDSEVSJykgfCBhc3luY319XG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8c2VsZWN0IFtpZF09XCJzd2l0Y2hlcklkXCIgY2xhc3M9XCJieC0tc2lkZS1uYXZfX3NlbGVjdFwiPlxuXHRcdFx0XHRcdFx0PG9wdGlvbiBjbGFzcz1cImJ4LS1zaWRlLW5hdl9fb3B0aW9uXCIgZGlzYWJsZWQ9XCJcIiB2YWx1ZT1cIlwiIHNlbGVjdGVkPVwiXCIgaGlkZGVuPVwiXCI+XG5cdFx0XHRcdFx0XHRcdHt7aTE4bi5nZXQoJ1VJX1NIRUxMLlNJREVfTkFWLlNXSVRDSEVSJykgfCBhc3luY319XG5cdFx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0XHRcdDxvcHRpb25cblx0XHRcdFx0XHRcdFx0Km5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJieC0tc2lkZS1uYXZfX29wdGlvblwiXG5cdFx0XHRcdFx0XHRcdFt2YWx1ZV09XCIob3B0aW9uLnZhbHVlID8gb3B0aW9uLnZhbHVlIDogb3B0aW9uLmNvbnRlbnQpXCI+XG5cdFx0XHRcdFx0XHRcdHt7b3B0aW9uLmNvbnRlbnR9fVxuXHRcdFx0XHRcdFx0PC9vcHRpb24+XG5cdFx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ4LS1zaWRlLW5hdl9fc3dpdGNoZXItY2hldnJvblwiPlxuXHRcdFx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdFx0XHRmb2N1c2FibGU9XCJmYWxzZVwiXG5cdFx0XHRcdFx0XHRcdHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCJcblx0XHRcdFx0XHRcdFx0c3R5bGU9XCJ3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1wiXG5cdFx0XHRcdFx0XHRcdHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuXHRcdFx0XHRcdFx0XHR3aWR0aD1cIjIwXCJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDMyIDMyXCJcblx0XHRcdFx0XHRcdFx0YXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNMTYgMjJMNiAxMmwxLjQtMS40IDguNiA4LjYgOC42LTguNkwyNiAxMnpcIj48L3BhdGg+XG5cdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2hlYWRlcj5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlTmF2SGVhZGVyIHtcblx0QElucHV0KCkgdGl0bGU6IHN0cmluZztcblx0QElucHV0KCkgb3B0aW9uczogTGlzdEl0ZW1bXTtcblx0cHVibGljIHN3aXRjaGVySWQgPSBcInNpZGVuYXYtc3dpdGNoZXJcIjtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgaTE4bjogSTE4bikgeyB9XG59XG4iXX0=