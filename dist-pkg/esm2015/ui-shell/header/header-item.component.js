/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Optional, EventEmitter, Output } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";
/**
 * Individual item in the header. May be used a direct child of `HeaderNavigation` or `HeaderMenu`
 */
export class HeaderItem {
    /**
     * @param {?} domSanitizer
     * @param {?} router
     */
    constructor(domSanitizer, router) {
        this.domSanitizer = domSanitizer;
        this.router = router;
        /**
         * Emits the navigation status promise when the link is activated
         */
        this.navigation = new EventEmitter();
        this._href = "javascript:void(0)";
    }
    /**
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
HeaderItem.decorators = [
    { type: Component, args: [{
                selector: "ibm-header-item",
                template: `
		<li style="height: 100%">
			<a
				class="bx--header__menu-item"
				role="menuitem"
				tabindex="0"
				[href]="href"
				(click)="navigate($event)">
				<ng-content></ng-content>
			</a>
		</li>
	`
            }] }
];
/** @nocollapse */
HeaderItem.ctorParameters = () => [
    { type: DomSanitizer },
    { type: Router, decorators: [{ type: Optional }] }
];
HeaderItem.propDecorators = {
    href: [{ type: Input }],
    route: [{ type: Input }],
    routeExtras: [{ type: Input }],
    navigation: [{ type: Output }]
};
function HeaderItem_tsickle_Closure_declarations() {
    /**
     * Array of commands to send to the router when the link is activated
     * See: https://angular.io/api/router/Router#navigate
     * @type {?}
     */
    HeaderItem.prototype.route;
    /**
     * Router options. Used in conjunction with `route`
     * See: https://angular.io/api/router/Router#navigate
     * @type {?}
     */
    HeaderItem.prototype.routeExtras;
    /**
     * Emits the navigation status promise when the link is activated
     * @type {?}
     */
    HeaderItem.prototype.navigation;
    /** @type {?} */
    HeaderItem.prototype._href;
    /** @type {?} */
    HeaderItem.prototype.domSanitizer;
    /** @type {?} */
    HeaderItem.prototype.router;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpLXNoZWxsL2hlYWRlci9oZWFkZXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsRUFDUixZQUFZLEVBQ1osTUFBTSxFQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFvQnpDLE1BQU07Ozs7O0lBNEJMLFlBQXNCLFlBQTBCLEVBQXdCLE1BQWM7UUFBaEUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBd0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTs7OzswQkFKL0QsSUFBSSxZQUFZLEVBQW9CO3FCQUV6QyxvQkFBb0I7S0FFcUQ7Ozs7O0lBM0IzRixJQUFhLElBQUksQ0FBQyxDQUFTO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFRCxJQUFJLElBQUk7UUFDUCx5QkFBTyxJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQVcsRUFBQztLQUN0RTs7Ozs7SUF1QkQsUUFBUSxDQUFDLEtBQUs7UUFDYixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUM5QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7O1lBQ3ZCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdCO0tBQ0Q7OztZQW5ERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7OztFQVdUO2FBQ0Q7Ozs7WUFwQlEsWUFBWTtZQUNaLE1BQU0sdUJBZ0RxQyxRQUFROzs7bUJBM0IxRCxLQUFLO29CQVlMLEtBQUs7MEJBTUwsS0FBSzt5QkFLTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0T3B0aW9uYWwsXG5cdEV2ZW50RW1pdHRlcixcblx0T3V0cHV0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG4vKipcbiAqIEluZGl2aWR1YWwgaXRlbSBpbiB0aGUgaGVhZGVyLiBNYXkgYmUgdXNlZCBhIGRpcmVjdCBjaGlsZCBvZiBgSGVhZGVyTmF2aWdhdGlvbmAgb3IgYEhlYWRlck1lbnVgXG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0taGVhZGVyLWl0ZW1cIixcblx0dGVtcGxhdGU6IGBcblx0XHQ8bGkgc3R5bGU9XCJoZWlnaHQ6IDEwMCVcIj5cblx0XHRcdDxhXG5cdFx0XHRcdGNsYXNzPVwiYngtLWhlYWRlcl9fbWVudS1pdGVtXCJcblx0XHRcdFx0cm9sZT1cIm1lbnVpdGVtXCJcblx0XHRcdFx0dGFiaW5kZXg9XCIwXCJcblx0XHRcdFx0W2hyZWZdPVwiaHJlZlwiXG5cdFx0XHRcdChjbGljayk9XCJuYXZpZ2F0ZSgkZXZlbnQpXCI+XG5cdFx0XHRcdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblx0XHRcdDwvYT5cblx0XHQ8L2xpPlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckl0ZW0ge1xuXHRASW5wdXQoKSBzZXQgaHJlZih2OiBzdHJpbmcpIHtcblx0XHR0aGlzLl9ocmVmID0gdjtcblx0fVxuXG5cdGdldCBocmVmKCkge1xuXHRcdHJldHVybiB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0VXJsKHRoaXMuX2hyZWYpIGFzIHN0cmluZztcblx0fVxuXG5cdC8qKlxuXHQgKiBBcnJheSBvZiBjb21tYW5kcyB0byBzZW5kIHRvIHRoZSByb3V0ZXIgd2hlbiB0aGUgbGluayBpcyBhY3RpdmF0ZWRcblx0ICogU2VlOiBodHRwczovL2FuZ3VsYXIuaW8vYXBpL3JvdXRlci9Sb3V0ZXIjbmF2aWdhdGVcblx0ICovXG5cdEBJbnB1dCgpIHJvdXRlOiBhbnlbXTtcblxuXHQvKipcblx0ICogUm91dGVyIG9wdGlvbnMuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgcm91dGVgXG5cdCAqIFNlZTogaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9yb3V0ZXIvUm91dGVyI25hdmlnYXRlXG5cdCAqL1xuXHRASW5wdXQoKSByb3V0ZUV4dHJhczogYW55O1xuXG5cdC8qKlxuXHQgKiBFbWl0cyB0aGUgbmF2aWdhdGlvbiBzdGF0dXMgcHJvbWlzZSB3aGVuIHRoZSBsaW5rIGlzIGFjdGl2YXRlZFxuXHQgKi9cblx0QE91dHB1dCgpIG5hdmlnYXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPFByb21pc2U8Ym9vbGVhbj4+KCk7XG5cblx0cHJvdGVjdGVkIF9ocmVmID0gXCJqYXZhc2NyaXB0OnZvaWQoMClcIjtcblxuXHRjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIEBPcHRpb25hbCgpIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcikgeyB9XG5cblx0bmF2aWdhdGUoZXZlbnQpIHtcblx0XHRpZiAodGhpcy5yb3V0ZXIgJiYgdGhpcy5yb3V0ZSkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGNvbnN0IHN0YXR1cyA9IHRoaXMucm91dGVyLm5hdmlnYXRlKHRoaXMucm91dGUsIHRoaXMucm91dGVFeHRyYXMpO1xuXHRcdFx0dGhpcy5uYXZpZ2F0aW9uLmVtaXQoc3RhdHVzKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==