/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, HostBinding, Input } from "@angular/core";
/**
 * A directive for applying styling to a textarea element.
 *
 * Example:
 *
 * ```html
 * <textarea ibmTextArea></textarea>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/text-input/code) for more detail.
 */
export class TextArea {
    constructor() {
        /**
         * `light` or `dark` input theme
         */
        this.theme = "dark";
        this.baseClass = true;
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
TextArea.decorators = [
    { type: Directive, args: [{
                selector: "[ibmTextArea]"
            },] }
];
TextArea.propDecorators = {
    theme: [{ type: Input }],
    baseClass: [{ type: HostBinding, args: ["class.bx--text-area",] }],
    invalid: [{ type: HostBinding, args: ["class.bx--text-area--invalid",] }, { type: Input }],
    skeleton: [{ type: HostBinding, args: ["class.bx--skeleton",] }, { type: Input }],
    isLightTheme: [{ type: HostBinding, args: ["class.bx--text-area--light",] }]
};
function TextArea_tsickle_Closure_declarations() {
    /**
     * `light` or `dark` input theme
     * @type {?}
     */
    TextArea.prototype.theme;
    /** @type {?} */
    TextArea.prototype.baseClass;
    /** @type {?} */
    TextArea.prototype.invalid;
    /** @type {?} */
    TextArea.prototype.skeleton;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1hcmVhLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJpbnB1dC90ZXh0LWFyZWEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQWdCOUQsTUFBTTs7Ozs7cUJBSThCLE1BQU07eUJBRU8sSUFBSTt1QkFDWSxLQUFLO3dCQUNkLEtBQUs7Ozs7O0lBQzVELElBQStDLFlBQVk7UUFDMUQsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLE9BQU8sQ0FBQztLQUM5Qjs7O1lBZEQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxlQUFlO2FBQ3pCOzs7b0JBS0MsS0FBSzt3QkFFTCxXQUFXLFNBQUMscUJBQXFCO3NCQUNqQyxXQUFXLFNBQUMsOEJBQThCLGNBQUcsS0FBSzt1QkFDbEQsV0FBVyxTQUFDLG9CQUFvQixjQUFHLEtBQUs7MkJBQ3hDLFdBQVcsU0FBQyw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgZm9yIGFwcGx5aW5nIHN0eWxpbmcgdG8gYSB0ZXh0YXJlYSBlbGVtZW50LlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBgaHRtbFxuICogPHRleHRhcmVhIGlibVRleHRBcmVhPjwvdGV4dGFyZWE+XG4gKiBgYGBcbiAqXG4gKiBTZWUgdGhlIFt2YW5pbGxhIGNhcmJvbiBkb2NzXShodHRwOi8vd3d3LmNhcmJvbmRlc2lnbnN5c3RlbS5jb20vY29tcG9uZW50cy90ZXh0LWlucHV0L2NvZGUpIGZvciBtb3JlIGRldGFpbC5cbiAqL1xuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiBcIltpYm1UZXh0QXJlYV1cIlxufSlcbmV4cG9ydCBjbGFzcyBUZXh0QXJlYSB7XG5cdC8qKlxuXHQgKiBgbGlnaHRgIG9yIGBkYXJrYCBpbnB1dCB0aGVtZVxuXHQgKi9cblx0QElucHV0KCkgdGhlbWU6IFwibGlnaHRcIiB8IFwiZGFya1wiID0gXCJkYXJrXCI7XG5cblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLXRleHQtYXJlYVwiKSBiYXNlQ2xhc3MgPSB0cnVlO1xuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy5ieC0tdGV4dC1hcmVhLS1pbnZhbGlkXCIpIEBJbnB1dCgpIGludmFsaWQgPSBmYWxzZTtcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLXNrZWxldG9uXCIpIEBJbnB1dCgpIHNrZWxldG9uID0gZmFsc2U7XG5cdEBIb3N0QmluZGluZyhcImNsYXNzLmJ4LS10ZXh0LWFyZWEtLWxpZ2h0XCIpIGdldCBpc0xpZ2h0VGhlbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMudGhlbWUgPT09IFwibGlnaHRcIjtcblx0fVxufVxuIl19