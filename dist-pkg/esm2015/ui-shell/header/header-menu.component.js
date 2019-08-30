/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, HostListener, ElementRef } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
/**
 * Dropdown menu container for navigation items.
 */
export class HeaderMenu {
    /**
     * @param {?} domSanitizer
     * @param {?} elementRef
     */
    constructor(domSanitizer, elementRef) {
        this.domSanitizer = domSanitizer;
        this.elementRef = elementRef;
        this.trigger = "click";
        this.expanded = false;
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
     * @return {?}
     */
    onClick() {
        if (this.trigger === "click") {
            this.expanded = !this.expanded;
        }
    }
    /**
     * @return {?}
     */
    onMouseOver() {
        if (this.trigger === "mouseover") {
            this.expanded = true;
        }
    }
    /**
     * @return {?}
     */
    onMouseOut() {
        if (this.trigger === "mouseover") {
            this.expanded = false;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFocusOut(event) {
        if (!this.elementRef.nativeElement.contains(event.relatedTarget)) {
            this.expanded = false;
        }
    }
}
HeaderMenu.decorators = [
    { type: Component, args: [{
                selector: "ibm-header-menu",
                template: `
		<li
			class="bx--header__submenu"
			style="height: 100%">
			<a
				class="bx--header__menu-item bx--header__menu-title"
				[href]="href"
				role="menuitem"
				tabindex="0"
				aria-haspopup="true"
				[attr.aria-expanded]="expanded">
				{{title}}
				<svg class="bx--header__menu-arrow" width="12" height="7" aria-hidden="true">
					<path d="M6.002 5.55L11.27 0l.726.685L6.003 7 0 .685.726 0z" />
				</svg>
			</a>
			<ul class="bx--header__menu" role="menu" [attr.aria-label]="title">
				<ng-content></ng-content>
			</ul>
		</li>
	`
            }] }
];
/** @nocollapse */
HeaderMenu.ctorParameters = () => [
    { type: DomSanitizer },
    { type: ElementRef }
];
HeaderMenu.propDecorators = {
    title: [{ type: Input }],
    href: [{ type: Input }],
    trigger: [{ type: Input }],
    onClick: [{ type: HostListener, args: ["click",] }],
    onMouseOver: [{ type: HostListener, args: ["mouseover",] }],
    onMouseOut: [{ type: HostListener, args: ["mouseout",] }],
    onFocusOut: [{ type: HostListener, args: ["focusout", ["$event"],] }]
};
function HeaderMenu_tsickle_Closure_declarations() {
    /** @type {?} */
    HeaderMenu.prototype.title;
    /** @type {?} */
    HeaderMenu.prototype.trigger;
    /** @type {?} */
    HeaderMenu.prototype.expanded;
    /** @type {?} */
    HeaderMenu.prototype._href;
    /** @type {?} */
    HeaderMenu.prototype.domSanitizer;
    /** @type {?} */
    HeaderMenu.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbInVpLXNoZWxsL2hlYWRlci9oZWFkZXItbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsS0FBSyxFQUNMLFlBQVksRUFDWixVQUFVLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBNkJ6RCxNQUFNOzs7OztJQWVMLFlBQXNCLFlBQTBCLEVBQVksVUFBc0I7UUFBNUQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBWSxlQUFVLEdBQVYsVUFBVSxDQUFZO3VCQU54QyxPQUFPO3dCQUUvQixLQUFLO3FCQUVMLG9CQUFvQjtLQUVpRDs7Ozs7SUFidkYsSUFBYSxJQUFJLENBQUMsQ0FBUztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztLQUNmOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ1AseUJBQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFXLEVBQUM7S0FDdEU7Ozs7SUFVRCxPQUFPO1FBQ04sSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU8sRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUMvQjtLQUNEOzs7O0lBR0QsV0FBVztRQUNWLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLEVBQUU7WUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDckI7S0FDRDs7OztJQUdELFVBQVU7UUFDVCxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3RCO0tBQ0Q7Ozs7O0lBR0QsVUFBVSxDQUFDLEtBQUs7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUNqRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN0QjtLQUNEOzs7WUFuRUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQlQ7YUFDRDs7OztZQTVCUSxZQUFZO1lBRnBCLFVBQVU7OztvQkFnQ1QsS0FBSzttQkFDTCxLQUFLO3NCQU9MLEtBQUs7c0JBUUwsWUFBWSxTQUFDLE9BQU87MEJBT3BCLFlBQVksU0FBQyxXQUFXO3lCQU94QixZQUFZLFNBQUMsVUFBVTt5QkFPdkIsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdEhvc3RMaXN0ZW5lcixcblx0RWxlbWVudFJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcblxuLyoqXG4gKiBEcm9wZG93biBtZW51IGNvbnRhaW5lciBmb3IgbmF2aWdhdGlvbiBpdGVtcy5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1oZWFkZXItbWVudVwiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxsaVxuXHRcdFx0Y2xhc3M9XCJieC0taGVhZGVyX19zdWJtZW51XCJcblx0XHRcdHN0eWxlPVwiaGVpZ2h0OiAxMDAlXCI+XG5cdFx0XHQ8YVxuXHRcdFx0XHRjbGFzcz1cImJ4LS1oZWFkZXJfX21lbnUtaXRlbSBieC0taGVhZGVyX19tZW51LXRpdGxlXCJcblx0XHRcdFx0W2hyZWZdPVwiaHJlZlwiXG5cdFx0XHRcdHJvbGU9XCJtZW51aXRlbVwiXG5cdFx0XHRcdHRhYmluZGV4PVwiMFwiXG5cdFx0XHRcdGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcblx0XHRcdFx0W2F0dHIuYXJpYS1leHBhbmRlZF09XCJleHBhbmRlZFwiPlxuXHRcdFx0XHR7e3RpdGxlfX1cblx0XHRcdFx0PHN2ZyBjbGFzcz1cImJ4LS1oZWFkZXJfX21lbnUtYXJyb3dcIiB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiN1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHRcdDxwYXRoIGQ9XCJNNi4wMDIgNS41NUwxMS4yNyAwbC43MjYuNjg1TDYuMDAzIDcgMCAuNjg1LjcyNiAwelwiIC8+XG5cdFx0XHRcdDwvc3ZnPlxuXHRcdFx0PC9hPlxuXHRcdFx0PHVsIGNsYXNzPVwiYngtLWhlYWRlcl9fbWVudVwiIHJvbGU9XCJtZW51XCIgW2F0dHIuYXJpYS1sYWJlbF09XCJ0aXRsZVwiPlxuXHRcdFx0XHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cdFx0XHQ8L3VsPlxuXHRcdDwvbGk+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyTWVudSB7XG5cdEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHNldCBocmVmKHY6IHN0cmluZykge1xuXHRcdHRoaXMuX2hyZWYgPSB2O1xuXHR9XG5cblx0Z2V0IGhyZWYoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwodGhpcy5faHJlZikgYXMgc3RyaW5nO1xuXHR9XG5cdEBJbnB1dCgpIHRyaWdnZXI6IFwiY2xpY2tcIiB8IFwibW91c2VvdmVyXCIgPSBcImNsaWNrXCI7XG5cblx0cHVibGljIGV4cGFuZGVkID0gZmFsc2U7XG5cblx0cHJvdGVjdGVkIF9ocmVmID0gXCJqYXZhc2NyaXB0OnZvaWQoMClcIjtcblxuXHRjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cblxuXHRASG9zdExpc3RlbmVyKFwiY2xpY2tcIilcblx0b25DbGljaygpIHtcblx0XHRpZiAodGhpcy50cmlnZ2VyID09PSBcImNsaWNrXCIpIHtcblx0XHRcdHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcblx0XHR9XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKFwibW91c2VvdmVyXCIpXG5cdG9uTW91c2VPdmVyKCkge1xuXHRcdGlmICh0aGlzLnRyaWdnZXIgPT09IFwibW91c2VvdmVyXCIpIHtcblx0XHRcdHRoaXMuZXhwYW5kZWQgPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoXCJtb3VzZW91dFwiKVxuXHRvbk1vdXNlT3V0KCkge1xuXHRcdGlmICh0aGlzLnRyaWdnZXIgPT09IFwibW91c2VvdmVyXCIpIHtcblx0XHRcdHRoaXMuZXhwYW5kZWQgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgW1wiJGV2ZW50XCJdKVxuXHRvbkZvY3VzT3V0KGV2ZW50KSB7XG5cdFx0aWYgKCF0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSkge1xuXHRcdFx0dGhpcy5leHBhbmRlZCA9IGZhbHNlO1xuXHRcdH1cblx0fVxufVxuIl19