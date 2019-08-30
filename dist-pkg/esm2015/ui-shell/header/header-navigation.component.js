/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding, Input } from "@angular/core";
/**
 * Container for header navigation items
 */
export class HeaderNavigation {
    constructor() {
        this.height = 100;
    }
}
HeaderNavigation.decorators = [
    { type: Component, args: [{
                selector: "ibm-header-navigation",
                template: `
		<nav class="bx--header__nav" [attr.aria-label]="ariaLabel">
			<ul class="bx--header__menu-bar" role="menubar">
				<ng-content></ng-content>
			</ul>
		</nav>
	`
            }] }
];
HeaderNavigation.propDecorators = {
    height: [{ type: HostBinding, args: ["style.height.%",] }],
    ariaLabel: [{ type: Input }]
};
function HeaderNavigation_tsickle_Closure_declarations() {
    /** @type {?} */
    HeaderNavigation.prototype.height;
    /** @type {?} */
    HeaderNavigation.prototype.ariaLabel;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpLXNoZWxsL2hlYWRlci9oZWFkZXItbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQWU5RCxNQUFNOztzQkFDbUMsR0FBRzs7OztZQVgzQyxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7RUFNVDthQUNEOzs7cUJBRUMsV0FBVyxTQUFDLGdCQUFnQjt3QkFFNUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuLyoqXG4gKiBDb250YWluZXIgZm9yIGhlYWRlciBuYXZpZ2F0aW9uIGl0ZW1zXG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0taGVhZGVyLW5hdmlnYXRpb25cIixcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmF2IGNsYXNzPVwiYngtLWhlYWRlcl9fbmF2XCIgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIj5cblx0XHRcdDx1bCBjbGFzcz1cImJ4LS1oZWFkZXJfX21lbnUtYmFyXCIgcm9sZT1cIm1lbnViYXJcIj5cblx0XHRcdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHRcdFx0PC91bD5cblx0XHQ8L25hdj5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJOYXZpZ2F0aW9uIHtcblx0QEhvc3RCaW5kaW5nKFwic3R5bGUuaGVpZ2h0LiVcIikgaGVpZ2h0ID0gMTAwO1xuXG5cdEBJbnB1dCgpIGFyaWFMYWJlbDogc3RyaW5nO1xufVxuIl19