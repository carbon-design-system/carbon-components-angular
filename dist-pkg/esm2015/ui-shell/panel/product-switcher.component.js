/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding, Input } from "@angular/core";
/**
 * @deprecated `ibm-product-x` selectors and components are deprecated and will be removed in the next major version
 */
export class ProductSwitcher {
    constructor() {
        this.header = "";
        this.hostClass = true;
    }
}
ProductSwitcher.decorators = [
    { type: Component, args: [{
                selector: "ibm-product-switcher",
                template: `
		<div class="bx--product-switcher__search">
			<ng-content select="ibm-search"></ng-content>
		</div>
		<p class="bx--product-switcher__subheader">{{header}}</p>
		<ng-content></ng-content>
	`
            }] }
];
ProductSwitcher.propDecorators = {
    header: [{ type: Input }],
    hostClass: [{ type: HostBinding, args: ["class.bx--product-switcher",] }]
};
function ProductSwitcher_tsickle_Closure_declarations() {
    /** @type {?} */
    ProductSwitcher.prototype.header;
    /** @type {?} */
    ProductSwitcher.prototype.hostClass;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zd2l0Y2hlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsidWktc2hlbGwvcGFuZWwvcHJvZHVjdC1zd2l0Y2hlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQWU5RCxNQUFNOztzQkFDYSxFQUFFO3lCQUNtQyxJQUFJOzs7O1lBWjNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7Ozs7OztFQU1UO2FBQ0Q7OztxQkFFQyxLQUFLO3dCQUNMLFdBQVcsU0FBQyw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgYGlibS1wcm9kdWN0LXhgIHNlbGVjdG9ycyBhbmQgY29tcG9uZW50cyBhcmUgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb25cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1wcm9kdWN0LXN3aXRjaGVyXCIsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBjbGFzcz1cImJ4LS1wcm9kdWN0LXN3aXRjaGVyX19zZWFyY2hcIj5cblx0XHRcdDxuZy1jb250ZW50IHNlbGVjdD1cImlibS1zZWFyY2hcIj48L25nLWNvbnRlbnQ+XG5cdFx0PC9kaXY+XG5cdFx0PHAgY2xhc3M9XCJieC0tcHJvZHVjdC1zd2l0Y2hlcl9fc3ViaGVhZGVyXCI+e3toZWFkZXJ9fTwvcD5cblx0XHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFN3aXRjaGVyIHtcblx0QElucHV0KCkgaGVhZGVyID0gXCJcIjtcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLXByb2R1Y3Qtc3dpdGNoZXJcIikgaG9zdENsYXNzID0gdHJ1ZTtcbn1cbiJdfQ==