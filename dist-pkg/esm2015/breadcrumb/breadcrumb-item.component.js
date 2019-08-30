/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding, Input } from "@angular/core";
export class BreadcrumbItemComponent {
    constructor() {
        this.skeleton = false;
        this.ariaCurrent = "page";
        this.current = false;
        this.itemClass = true;
    }
}
BreadcrumbItemComponent.decorators = [
    { type: Component, args: [{
                selector: "ibm-breadcrumb-item",
                template: `
	<a
		class="bx--link"
		href="{{skeleton ? '/#' : href}}"
		[attr.aria-current]="(current ? ariaCurrent : null)"
		*ngIf="skeleton || href; else content">
		<ng-container *ngTemplateOutlet="content"></ng-container>
	</a>
	<ng-template #content>
		<ng-content></ng-content>
	</ng-template>`
            }] }
];
BreadcrumbItemComponent.propDecorators = {
    href: [{ type: Input }],
    skeleton: [{ type: Input }],
    ariaCurrent: [{ type: Input }],
    current: [{ type: HostBinding, args: ["class.bx--breadcrumb-item--current",] }, { type: Input }],
    itemClass: [{ type: HostBinding, args: ["class.bx--breadcrumb-item",] }]
};
function BreadcrumbItemComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    BreadcrumbItemComponent.prototype.href;
    /** @type {?} */
    BreadcrumbItemComponent.prototype.skeleton;
    /** @type {?} */
    BreadcrumbItemComponent.prototype.ariaCurrent;
    /** @type {?} */
    BreadcrumbItemComponent.prototype.current;
    /** @type {?} */
    BreadcrumbItemComponent.prototype.itemClass;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJicmVhZGNydW1iL2JyZWFkY3J1bWItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLGVBQWUsQ0FBQztBQWdCdkIsTUFBTTs7d0JBR2UsS0FBSzsyQkFFRixNQUFNO3VCQUV5QyxLQUFLO3lCQUVyQixJQUFJOzs7O1lBdkIxRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOzs7Ozs7Ozs7O2dCQVVLO2FBQ2Y7OzttQkFFQyxLQUFLO3VCQUVMLEtBQUs7MEJBRUwsS0FBSztzQkFFTCxXQUFXLFNBQUMsb0NBQW9DLGNBQUcsS0FBSzt3QkFFeEQsV0FBVyxTQUFDLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SG9zdEJpbmRpbmcsXG5cdElucHV0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tYnJlYWRjcnVtYi1pdGVtXCIsXG5cdHRlbXBsYXRlOiBgXG5cdDxhXG5cdFx0Y2xhc3M9XCJieC0tbGlua1wiXG5cdFx0aHJlZj1cInt7c2tlbGV0b24gPyAnLyMnIDogaHJlZn19XCJcblx0XHRbYXR0ci5hcmlhLWN1cnJlbnRdPVwiKGN1cnJlbnQgPyBhcmlhQ3VycmVudCA6IG51bGwpXCJcblx0XHQqbmdJZj1cInNrZWxldG9uIHx8IGhyZWY7IGVsc2UgY29udGVudFwiPlxuXHRcdDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50XCI+PC9uZy1jb250YWluZXI+XG5cdDwvYT5cblx0PG5nLXRlbXBsYXRlICNjb250ZW50PlxuXHRcdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblx0PC9uZy10ZW1wbGF0ZT5gXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJJdGVtQ29tcG9uZW50IHtcblx0QElucHV0KCkgaHJlZjogc3RyaW5nO1xuXG5cdEBJbnB1dCgpIHNrZWxldG9uID0gZmFsc2U7XG5cblx0QElucHV0KCkgYXJpYUN1cnJlbnQgPSBcInBhZ2VcIjtcblxuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy5ieC0tYnJlYWRjcnVtYi1pdGVtLS1jdXJyZW50XCIpIEBJbnB1dCgpIGN1cnJlbnQgPSBmYWxzZTtcblxuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy5ieC0tYnJlYWRjcnVtYi1pdGVtXCIpIGl0ZW1DbGFzcyA9IHRydWU7XG59XG4iXX0=