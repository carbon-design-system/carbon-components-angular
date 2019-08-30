/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, HostBinding, Input } from "@angular/core";
/**
 * A convinence directive for applying styling to a link.
 *
 * [See demo](../../?path=/story/link--basic)
 *
 * Example:
 *
 * ```hmtl
 * <a href="#" ibmLink>A link</a>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/link/code) for more detail.
 *
 * <example-url>../../iframe.html?id=link--basic</example-url>
 */
export class Link {
    constructor() {
        this.baseClass = true;
    }
    /**
     * Set to true to disable link.
     * @param {?} disabled
     * @return {?}
     */
    set disabled(disabled) {
        this._disabled = disabled;
        this.tabindex = this.disabled ? -1 : null;
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
}
Link.decorators = [
    { type: Directive, args: [{
                selector: "[ibmLink]"
            },] }
];
Link.propDecorators = {
    baseClass: [{ type: HostBinding, args: ["class.bx--link",] }],
    tabindex: [{ type: HostBinding, args: ["attr.tabindex",] }],
    disabled: [{ type: Input }, { type: HostBinding, args: ["attr.aria-disabled",] }, { type: HostBinding, args: ["class.bx--link--disabled",] }]
};
function Link_tsickle_Closure_declarations() {
    /** @type {?} */
    Link.prototype.baseClass;
    /**
     * Automatically set to `-1` when link is disabled.
     * @type {?}
     */
    Link.prototype.tabindex;
    /** @type {?} */
    Link.prototype._disabled;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGluay9saW5rLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBc0J2QixNQUFNOzt5QkFDc0MsSUFBSTs7Ozs7OztJQVUvQyxJQUdJLFFBQVEsQ0FBQyxRQUFpQjtRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDMUM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdEI7OztZQTFCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFdBQVc7YUFDckI7Ozt3QkFJQyxXQUFXLFNBQUMsZ0JBQWdCO3VCQUs1QixXQUFXLFNBQUMsZUFBZTt1QkFLM0IsS0FBSyxZQUNMLFdBQVcsU0FBQyxvQkFBb0IsY0FDaEMsV0FBVyxTQUFDLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdERpcmVjdGl2ZSxcblx0SG9zdEJpbmRpbmcsXG5cdElucHV0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbi8qKlxuICogQSBjb252aW5lbmNlIGRpcmVjdGl2ZSBmb3IgYXBwbHlpbmcgc3R5bGluZyB0byBhIGxpbmsuXG4gKlxuICogW1NlZSBkZW1vXSguLi8uLi8/cGF0aD0vc3RvcnkvbGluay0tYmFzaWMpXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBobXRsXG4gKiA8YSBocmVmPVwiI1wiIGlibUxpbms+QSBsaW5rPC9hPlxuICogYGBgXG4gKlxuICogU2VlIHRoZSBbdmFuaWxsYSBjYXJib24gZG9jc10oaHR0cDovL3d3dy5jYXJib25kZXNpZ25zeXN0ZW0uY29tL2NvbXBvbmVudHMvbGluay9jb2RlKSBmb3IgbW9yZSBkZXRhaWwuXG4gKlxuICogPGV4YW1wbGUtdXJsPi4uLy4uL2lmcmFtZS5odG1sP2lkPWxpbmstLWJhc2ljPC9leGFtcGxlLXVybD5cbiAqL1xuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiBcIltpYm1MaW5rXVwiXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBMaW5rIHtcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLWxpbmtcIikgYmFzZUNsYXNzID0gdHJ1ZTtcblxuXHQvKipcblx0ICogQXV0b21hdGljYWxseSBzZXQgdG8gYC0xYCB3aGVuIGxpbmsgaXMgZGlzYWJsZWQuXG5cdCAqL1xuXHRASG9zdEJpbmRpbmcoXCJhdHRyLnRhYmluZGV4XCIpIHRhYmluZGV4O1xuXG5cdC8qKlxuXHQgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIGxpbmsuXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRASG9zdEJpbmRpbmcoXCJhdHRyLmFyaWEtZGlzYWJsZWRcIilcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLWxpbmstLWRpc2FibGVkXCIpXG5cdHNldCBkaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbikge1xuXHRcdHRoaXMuX2Rpc2FibGVkID0gZGlzYWJsZWQ7XG5cdFx0dGhpcy50YWJpbmRleCA9IHRoaXMuZGlzYWJsZWQgPyAtMSA6IG51bGw7XG5cdH1cblxuXHRnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuXHR9XG5cblx0cHJpdmF0ZSBfZGlzYWJsZWQ7XG59XG4iXX0=