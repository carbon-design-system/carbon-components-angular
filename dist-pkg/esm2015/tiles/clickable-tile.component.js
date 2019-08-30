/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, Optional } from "@angular/core";
import { Router } from "@angular/router";
/**
 * Build application's clickable tiles using this component.
 *
 * ## Basic usage
 *
 * ```html
 * <ibm-clickable-tile>
 * 		tile content
 * </ibm-clickable-tile>
 * ```
 */
export class ClickableTile {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        /**
         * Sets the `href` attribute on the `ibm-clickable-tile` element.
         */
        this.href = "#";
        /**
         * Set to `true` to disable the clickable tile.
         */
        this.disabled = false;
        /**
         * Emits the navigation status promise when the link is activated
         */
        this.navigation = new EventEmitter();
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
ClickableTile.decorators = [
    { type: Component, args: [{
                selector: "ibm-clickable-tile",
                template: `
	<a
		ibmLink
		class="bx--tile bx--tile--clickable"
		tabindex="0"
		(click)="navigate($event)"
		[href]="href"
		[attr.target]="target"
		[attr.aria-disabled]="disabled">
		<ng-content></ng-content>
	</a>`
            }] }
];
/** @nocollapse */
ClickableTile.ctorParameters = () => [
    { type: Router, decorators: [{ type: Optional }] }
];
ClickableTile.propDecorators = {
    href: [{ type: Input }],
    target: [{ type: Input }],
    disabled: [{ type: Input }],
    route: [{ type: Input }],
    routeExtras: [{ type: Input }],
    navigation: [{ type: Output }]
};
function ClickableTile_tsickle_Closure_declarations() {
    /**
     * Sets the `href` attribute on the `ibm-clickable-tile` element.
     * @type {?}
     */
    ClickableTile.prototype.href;
    /**
     * Sets the `target` attribute on the `ibm-clickable-tile` element.
     * @type {?}
     */
    ClickableTile.prototype.target;
    /**
     * Set to `true` to disable the clickable tile.
     * @type {?}
     */
    ClickableTile.prototype.disabled;
    /**
     * Array of commands to send to the router when the link is activated
     * See: https://angular.io/api/router/Router#navigate
     * @type {?}
     */
    ClickableTile.prototype.route;
    /**
     * Router options. Used in conjunction with `route`
     * See: https://angular.io/api/router/Router#navigate
     * @type {?}
     */
    ClickableTile.prototype.routeExtras;
    /**
     * Emits the navigation status promise when the link is activated
     * @type {?}
     */
    ClickableTile.prototype.navigation;
    /** @type {?} */
    ClickableTile.prototype.router;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2thYmxlLXRpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbInRpbGVzL2NsaWNrYWJsZS10aWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixRQUFRLEVBQ1IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7QUEyQnpDLE1BQU07Ozs7SUFpQ0wsWUFBa0MsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7Ozs7b0JBN0JoQyxHQUFHOzs7O3dCQVVDLEtBQUs7Ozs7MEJBaUJGLElBQUksWUFBWSxFQUFvQjtLQUVQOzs7OztJQUVwRCxRQUFRLENBQUMsS0FBSztRQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzlCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7WUFDdkIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0I7S0FDRDs7O1lBdkRELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7TUFVTDthQUNMOzs7O1lBMUJRLE1BQU0sdUJBNERELFFBQVE7OzttQkE3QnBCLEtBQUs7cUJBS0wsS0FBSzt1QkFLTCxLQUFLO29CQU1MLEtBQUs7MEJBTUwsS0FBSzt5QkFLTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdE9wdGlvbmFsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbi8qKlxuICogQnVpbGQgYXBwbGljYXRpb24ncyBjbGlja2FibGUgdGlsZXMgdXNpbmcgdGhpcyBjb21wb25lbnQuXG4gKlxuICogIyMgQmFzaWMgdXNhZ2VcbiAqXG4gKiBgYGBodG1sXG4gKiA8aWJtLWNsaWNrYWJsZS10aWxlPlxuICogXHRcdHRpbGUgY29udGVudFxuICogPC9pYm0tY2xpY2thYmxlLXRpbGU+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1jbGlja2FibGUtdGlsZVwiLFxuXHR0ZW1wbGF0ZTogYFxuXHQ8YVxuXHRcdGlibUxpbmtcblx0XHRjbGFzcz1cImJ4LS10aWxlIGJ4LS10aWxlLS1jbGlja2FibGVcIlxuXHRcdHRhYmluZGV4PVwiMFwiXG5cdFx0KGNsaWNrKT1cIm5hdmlnYXRlKCRldmVudClcIlxuXHRcdFtocmVmXT1cImhyZWZcIlxuXHRcdFthdHRyLnRhcmdldF09XCJ0YXJnZXRcIlxuXHRcdFthdHRyLmFyaWEtZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cblx0XHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cdDwvYT5gXG59KVxuZXhwb3J0IGNsYXNzIENsaWNrYWJsZVRpbGUge1xuXHQvKipcblx0ICogU2V0cyB0aGUgYGhyZWZgIGF0dHJpYnV0ZSBvbiB0aGUgYGlibS1jbGlja2FibGUtdGlsZWAgZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgpIGhyZWYgPSBcIiNcIjtcblxuXHQvKipcblx0ICogU2V0cyB0aGUgYHRhcmdldGAgYXR0cmlidXRlIG9uIHRoZSBgaWJtLWNsaWNrYWJsZS10aWxlYCBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCkgdGFyZ2V0OiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIFNldCB0byBgdHJ1ZWAgdG8gZGlzYWJsZSB0aGUgY2xpY2thYmxlIHRpbGUuXG5cdCAqL1xuXHRASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBBcnJheSBvZiBjb21tYW5kcyB0byBzZW5kIHRvIHRoZSByb3V0ZXIgd2hlbiB0aGUgbGluayBpcyBhY3RpdmF0ZWRcblx0ICogU2VlOiBodHRwczovL2FuZ3VsYXIuaW8vYXBpL3JvdXRlci9Sb3V0ZXIjbmF2aWdhdGVcblx0ICovXG5cdEBJbnB1dCgpIHJvdXRlOiBhbnlbXTtcblxuXHQvKipcblx0ICogUm91dGVyIG9wdGlvbnMuIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgcm91dGVgXG5cdCAqIFNlZTogaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9yb3V0ZXIvUm91dGVyI25hdmlnYXRlXG5cdCAqL1xuXHRASW5wdXQoKSByb3V0ZUV4dHJhczogYW55O1xuXG5cdC8qKlxuXHQgKiBFbWl0cyB0aGUgbmF2aWdhdGlvbiBzdGF0dXMgcHJvbWlzZSB3aGVuIHRoZSBsaW5rIGlzIGFjdGl2YXRlZFxuXHQgKi9cblx0QE91dHB1dCgpIG5hdmlnYXRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPFByb21pc2U8Ym9vbGVhbj4+KCk7XG5cblx0Y29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyKSB7fVxuXG5cdG5hdmlnYXRlKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMucm91dGVyICYmIHRoaXMucm91dGUpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRjb25zdCBzdGF0dXMgPSB0aGlzLnJvdXRlci5uYXZpZ2F0ZSh0aGlzLnJvdXRlLCB0aGlzLnJvdXRlRXh0cmFzKTtcblx0XHRcdHRoaXMubmF2aWdhdGlvbi5lbWl0KHN0YXR1cyk7XG5cdFx0fVxuXHR9XG59XG4iXX0=