/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostBinding } from "@angular/core";
/**
 * Applies either ordered or unordered styling to the list container it is applied to.
 *
 * [See demo](../../?path=/story/list--basic)
 *
 * For `ul`s it will apply unordered list styles, and for `ol`s it will apply ordered list styles.
 *
 * If a `ul` or `ol` is nested within a `li` the directive will apply nested list styling.
 *
 * <example-url>../../iframe.html?id=list--basic</example-url>
 */
export class List {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    get ordered() {
        if (this.nested) {
            return false;
        }
        return this.elementRef.nativeElement.tagName === "OL";
    }
    /**
     * @return {?}
     */
    get unordered() {
        if (this.nested) {
            return false;
        }
        return this.elementRef.nativeElement.tagName === "UL";
    }
    /**
     * @return {?}
     */
    get nested() {
        return this.elementRef.nativeElement.parentElement.tagName === "LI";
    }
}
List.decorators = [
    { type: Directive, args: [{
                selector: "[ibmList]"
            },] }
];
/** @nocollapse */
List.ctorParameters = () => [
    { type: ElementRef }
];
List.propDecorators = {
    ordered: [{ type: HostBinding, args: ["class.bx--list--ordered",] }],
    unordered: [{ type: HostBinding, args: ["class.bx--list--unordered",] }],
    nested: [{ type: HostBinding, args: ["class.bx--list--nested",] }]
};
function List_tsickle_Closure_declarations() {
    /** @type {?} */
    List.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGlzdC9saXN0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7QUFnQm5FLE1BQU07Ozs7SUFlTCxZQUFzQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0tBQUk7Ozs7SUFkaEQsSUFBNEMsT0FBTztRQUNsRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFBRSxPQUFPLEtBQUssQ0FBQztTQUFFO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQztLQUN0RDs7OztJQUVELElBQThDLFNBQVM7UUFDdEQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQUUsT0FBTyxLQUFLLENBQUM7U0FBRTtRQUNsQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUM7S0FDdEQ7Ozs7SUFFRCxJQUEyQyxNQUFNO1FBQ2hELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUM7S0FDcEU7OztZQWhCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFdBQVc7YUFDckI7Ozs7WUFmbUIsVUFBVTs7O3NCQWlCNUIsV0FBVyxTQUFDLHlCQUF5Qjt3QkFLckMsV0FBVyxTQUFDLDJCQUEyQjtxQkFLdkMsV0FBVyxTQUFDLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG4vKipcbiAqIEFwcGxpZXMgZWl0aGVyIG9yZGVyZWQgb3IgdW5vcmRlcmVkIHN0eWxpbmcgdG8gdGhlIGxpc3QgY29udGFpbmVyIGl0IGlzIGFwcGxpZWQgdG8uXG4gKlxuICogW1NlZSBkZW1vXSguLi8uLi8/cGF0aD0vc3RvcnkvbGlzdC0tYmFzaWMpXG4gKlxuICogRm9yIGB1bGBzIGl0IHdpbGwgYXBwbHkgdW5vcmRlcmVkIGxpc3Qgc3R5bGVzLCBhbmQgZm9yIGBvbGBzIGl0IHdpbGwgYXBwbHkgb3JkZXJlZCBsaXN0IHN0eWxlcy5cbiAqXG4gKiBJZiBhIGB1bGAgb3IgYG9sYCBpcyBuZXN0ZWQgd2l0aGluIGEgYGxpYCB0aGUgZGlyZWN0aXZlIHdpbGwgYXBwbHkgbmVzdGVkIGxpc3Qgc3R5bGluZy5cbiAqXG4gKiA8ZXhhbXBsZS11cmw+Li4vLi4vaWZyYW1lLmh0bWw/aWQ9bGlzdC0tYmFzaWM8L2V4YW1wbGUtdXJsPlxuICovXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6IFwiW2libUxpc3RdXCJcbn0pXG5leHBvcnQgY2xhc3MgTGlzdCB7XG5cdEBIb3N0QmluZGluZyhcImNsYXNzLmJ4LS1saXN0LS1vcmRlcmVkXCIpIGdldCBvcmRlcmVkKCkge1xuXHRcdGlmICh0aGlzLm5lc3RlZCkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudGFnTmFtZSA9PT0gXCJPTFwiO1xuXHR9XG5cblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLWxpc3QtLXVub3JkZXJlZFwiKSBnZXQgdW5vcmRlcmVkKCkge1xuXHRcdGlmICh0aGlzLm5lc3RlZCkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudGFnTmFtZSA9PT0gXCJVTFwiO1xuXHR9XG5cblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLWxpc3QtLW5lc3RlZFwiKSBnZXQgbmVzdGVkKCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnRhZ05hbWUgPT09IFwiTElcIjtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxufVxuIl19