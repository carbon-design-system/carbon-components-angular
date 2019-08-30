/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, HostBinding, Input } from "@angular/core";
/**
 * A directive for applying styling to an input element.
 *
 * Example:
 *
 * ```html
 * <input ibmText/>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/text-input/code) for more detail.
 */
export class TextInput {
    constructor() {
        /**
         * `light` or `dark` input theme
         */
        this.theme = "dark";
        this.inputClass = true;
        this.invalid = false;
        this.skeleton = false;
    }
    /**
     * @return {?}
     */
    get isLightTheme() {
        return this.theme === "light";
    }
}
TextInput.decorators = [
    { type: Directive, args: [{
                selector: "[ibmText]"
            },] }
];
TextInput.propDecorators = {
    theme: [{ type: Input }],
    inputClass: [{ type: HostBinding, args: ["class.bx--text-input",] }],
    invalid: [{ type: HostBinding, args: ["class.bx--text-input--invalid",] }, { type: Input }],
    skeleton: [{ type: HostBinding, args: ["class.bx--skeleton",] }, { type: Input }],
    isLightTheme: [{ type: HostBinding, args: ["class.bx--text-input--light",] }]
};
function TextInput_tsickle_Closure_declarations() {
    /**
     * `light` or `dark` input theme
     * @type {?}
     */
    TextInput.prototype.theme;
    /** @type {?} */
    TextInput.prototype.inputClass;
    /** @type {?} */
    TextInput.prototype.invalid;
    /** @type {?} */
    TextInput.prototype.skeleton;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbImlucHV0L2lucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7QUFnQjlELE1BQU07Ozs7O3FCQUk4QixNQUFNOzBCQUVTLElBQUk7dUJBQ1csS0FBSzt3QkFDZixLQUFLOzs7OztJQUM1RCxJQUFnRCxZQUFZO1FBQzNELE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUM7S0FDOUI7OztZQWRELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsV0FBVzthQUNyQjs7O29CQUtDLEtBQUs7eUJBRUwsV0FBVyxTQUFDLHNCQUFzQjtzQkFDbEMsV0FBVyxTQUFDLCtCQUErQixjQUFHLEtBQUs7dUJBQ25ELFdBQVcsU0FBQyxvQkFBb0IsY0FBRyxLQUFLOzJCQUN4QyxXQUFXLFNBQUMsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG4vKipcbiAqIEEgZGlyZWN0aXZlIGZvciBhcHBseWluZyBzdHlsaW5nIHRvIGFuIGlucHV0IGVsZW1lbnQuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBodG1sXG4gKiA8aW5wdXQgaWJtVGV4dC8+XG4gKiBgYGBcbiAqXG4gKiBTZWUgdGhlIFt2YW5pbGxhIGNhcmJvbiBkb2NzXShodHRwOi8vd3d3LmNhcmJvbmRlc2lnbnN5c3RlbS5jb20vY29tcG9uZW50cy90ZXh0LWlucHV0L2NvZGUpIGZvciBtb3JlIGRldGFpbC5cbiAqL1xuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiBcIltpYm1UZXh0XVwiXG59KVxuZXhwb3J0IGNsYXNzIFRleHRJbnB1dCB7XG5cdC8qKlxuXHQgKiBgbGlnaHRgIG9yIGBkYXJrYCBpbnB1dCB0aGVtZVxuXHQgKi9cblx0QElucHV0KCkgdGhlbWU6IFwibGlnaHRcIiB8IFwiZGFya1wiID0gXCJkYXJrXCI7XG5cblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLXRleHQtaW5wdXRcIikgaW5wdXRDbGFzcyA9IHRydWU7XG5cdEBIb3N0QmluZGluZyhcImNsYXNzLmJ4LS10ZXh0LWlucHV0LS1pbnZhbGlkXCIpIEBJbnB1dCgpIGludmFsaWQgPSBmYWxzZTtcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLXNrZWxldG9uXCIpIEBJbnB1dCgpIHNrZWxldG9uID0gZmFsc2U7XG5cdEBIb3N0QmluZGluZyhcImNsYXNzLmJ4LS10ZXh0LWlucHV0LS1saWdodFwiKSBnZXQgaXNMaWdodFRoZW1lKCkge1xuXHRcdHJldHVybiB0aGlzLnRoZW1lID09PSBcImxpZ2h0XCI7XG5cdH1cbn1cbiJdfQ==