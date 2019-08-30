/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
/**
 * Represents an item in a switcher list.
 *
 * **Note:** `ibm-product-x` selectors and components are deprecated and will be removed in the next major version
 */
export class SwitcherListItem {
    /**
     * @param {?} domSanitizer
     */
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
        /**
         * Enables the "active" state for an item. Commonly used to indicate the current page or selection.
         */
        this.active = false;
        this._href = "javascript:void(0)";
    }
    /**
     * Optional link for the underlying anchor.
     * @param {?} value
     * @return {?}
     */
    set href(value) {
        this._href = value;
    }
    /**
     * @return {?}
     */
    get href() {
        return /** @type {?} */ (this.domSanitizer.bypassSecurityTrustUrl(this._href));
    }
}
SwitcherListItem.decorators = [
    { type: Component, args: [{
                selector: "ibm-switcher-list-item, ibm-product-switcher-list-item, ibm-product-switcher-item",
                template: `
		<a
			class="bx--switcher__item-link"
			[ngClass]="{
				'bx--switcher__item-link--selected': active
			}"
			[href]="href">
			<ng-content></ng-content>
		</a>
	`
            }] }
];
/** @nocollapse */
SwitcherListItem.ctorParameters = () => [
    { type: DomSanitizer }
];
SwitcherListItem.propDecorators = {
    active: [{ type: Input }],
    href: [{ type: Input }]
};
function SwitcherListItem_tsickle_Closure_declarations() {
    /**
     * Enables the "active" state for an item. Commonly used to indicate the current page or selection.
     * @type {?}
     */
    SwitcherListItem.prototype.active;
    /** @type {?} */
    SwitcherListItem.prototype._href;
    /** @type {?} */
    SwitcherListItem.prototype.domSanitizer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoZXItbGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ1aS1zaGVsbC9wYW5lbC9zd2l0Y2hlci1saXN0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFXLE1BQU0sMkJBQTJCLENBQUM7Ozs7OztBQW9CbEUsTUFBTTs7OztJQW1CTCxZQUFzQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYzs7OztzQkFmOUIsS0FBSztxQkFhTCxvQkFBb0I7S0FFZTs7Ozs7O0lBVnJELElBQWEsSUFBSSxDQUFDLEtBQWE7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDbkI7Ozs7SUFFRCxJQUFJLElBQUk7UUFDUCx5QkFBTyxJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQVcsRUFBQztLQUN0RTs7O1lBNUJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsbUZBQW1GO2dCQUM3RixRQUFRLEVBQUU7Ozs7Ozs7OztFQVNUO2FBQ0Q7Ozs7WUFuQlEsWUFBWTs7O3FCQXdCbkIsS0FBSzttQkFLTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVVcmwgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gaXRlbSBpbiBhIHN3aXRjaGVyIGxpc3QuXG4gKlxuICogKipOb3RlOioqIGBpYm0tcHJvZHVjdC14YCBzZWxlY3RvcnMgYW5kIGNvbXBvbmVudHMgYXJlIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uXG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tc3dpdGNoZXItbGlzdC1pdGVtLCBpYm0tcHJvZHVjdC1zd2l0Y2hlci1saXN0LWl0ZW0sIGlibS1wcm9kdWN0LXN3aXRjaGVyLWl0ZW1cIixcblx0dGVtcGxhdGU6IGBcblx0XHQ8YVxuXHRcdFx0Y2xhc3M9XCJieC0tc3dpdGNoZXJfX2l0ZW0tbGlua1wiXG5cdFx0XHRbbmdDbGFzc109XCJ7XG5cdFx0XHRcdCdieC0tc3dpdGNoZXJfX2l0ZW0tbGluay0tc2VsZWN0ZWQnOiBhY3RpdmVcblx0XHRcdH1cIlxuXHRcdFx0W2hyZWZdPVwiaHJlZlwiPlxuXHRcdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHRcdDwvYT5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBTd2l0Y2hlckxpc3RJdGVtIHtcblx0LyoqXG5cdCAqIEVuYWJsZXMgdGhlIFwiYWN0aXZlXCIgc3RhdGUgZm9yIGFuIGl0ZW0uIENvbW1vbmx5IHVzZWQgdG8gaW5kaWNhdGUgdGhlIGN1cnJlbnQgcGFnZSBvciBzZWxlY3Rpb24uXG5cdCAqL1xuXHRASW5wdXQoKSBhY3RpdmUgPSBmYWxzZTtcblxuXHQvKipcblx0ICogT3B0aW9uYWwgbGluayBmb3IgdGhlIHVuZGVybHlpbmcgYW5jaG9yLlxuXHQgKi9cblx0QElucHV0KCkgc2V0IGhyZWYodmFsdWU6IHN0cmluZykge1xuXHRcdHRoaXMuX2hyZWYgPSB2YWx1ZTtcblx0fVxuXG5cdGdldCBocmVmKCkge1xuXHRcdHJldHVybiB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0VXJsKHRoaXMuX2hyZWYpIGFzIHN0cmluZztcblx0fVxuXG5cdHByb3RlY3RlZCBfaHJlZiA9IFwiamF2YXNjcmlwdDp2b2lkKDApXCI7XG5cblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIGRvbVNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7IH1cbn1cbiJdfQ==