/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, HostBinding } from "@angular/core";
/**
 * Component that represents a tag for labelling/categorizing using keywords
 *
 * [See demo](../../?path=/story/tag--basic)
 *
 * <example-url>../../iframe.html?id=tag--basic</example-url>
 */
export class Tag {
    constructor() {
        /**
         * type of the tag determines the styling
         *
         * Reference `TagType` for v9 applications, and `TagTypeExperimental` for v10/v9 experimental mode applications
         */
        this.type = "gray";
        this.class = "";
    }
    /**
     * @return {?}
     */
    get attrClass() {
        return `bx--tag bx--tag--${this.type} ${this.class}`;
    }
}
Tag.decorators = [
    { type: Component, args: [{
                selector: "ibm-tag",
                template: `<ng-content></ng-content>`
            }] }
];
Tag.propDecorators = {
    type: [{ type: Input }],
    class: [{ type: Input }],
    attrClass: [{ type: HostBinding, args: ["attr.class",] }]
};
function Tag_tsickle_Closure_declarations() {
    /**
     * type of the tag determines the styling
     *
     * Reference `TagType` for v9 applications, and `TagTypeExperimental` for v10/v9 experimental mode applications
     * @type {?}
     */
    Tag.prototype.type;
    /** @type {?} */
    Tag.prototype.class;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ0YWcvdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQWtCdkIsTUFBTTs7Ozs7OztvQkFNb0IsTUFBTTtxQkFFZCxFQUFFOzs7OztJQUVuQixJQUErQixTQUFTO1FBQ3ZDLE9BQU8sb0JBQW9CLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ3JEOzs7WUFoQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsMkJBQTJCO2FBQ3JDOzs7bUJBT0MsS0FBSztvQkFFTCxLQUFLO3dCQUVMLFdBQVcsU0FBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0SG9zdEJpbmRpbmdcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuLyoqXG4gKiBTdXBwb3J0ZWQgdGFnIHR5cGVzIGZvciBjYXJib24gdjEwXG4gKi9cbmV4cG9ydCB0eXBlIFRhZ1R5cGUgPSBcInJlZFwiIHwgXCJtYWdlbnRhXCIgfCBcInB1cnBsZVwiIHwgXCJibHVlXCIgfCBcImN5YW5cIiB8IFwidGVhbFwiIHwgXCJncmVlblwiIHwgXCJncmF5XCIgfCBcImNvb2wtZ3JheVwiIHwgXCJ3YXJtLWdyYXlcIjtcblxuLyoqXG4gKiBDb21wb25lbnQgdGhhdCByZXByZXNlbnRzIGEgdGFnIGZvciBsYWJlbGxpbmcvY2F0ZWdvcml6aW5nIHVzaW5nIGtleXdvcmRzXG4gKlxuICogW1NlZSBkZW1vXSguLi8uLi8/cGF0aD0vc3RvcnkvdGFnLS1iYXNpYylcbiAqXG4gKiA8ZXhhbXBsZS11cmw+Li4vLi4vaWZyYW1lLmh0bWw/aWQ9dGFnLS1iYXNpYzwvZXhhbXBsZS11cmw+XG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tdGFnXCIsXG5cdHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgVGFnIHtcblx0LyoqXG5cdCAqIHR5cGUgb2YgdGhlIHRhZyBkZXRlcm1pbmVzIHRoZSBzdHlsaW5nXG5cdCAqXG5cdCAqIFJlZmVyZW5jZSBgVGFnVHlwZWAgZm9yIHY5IGFwcGxpY2F0aW9ucywgYW5kIGBUYWdUeXBlRXhwZXJpbWVudGFsYCBmb3IgdjEwL3Y5IGV4cGVyaW1lbnRhbCBtb2RlIGFwcGxpY2F0aW9uc1xuXHQgKi9cblx0QElucHV0KCkgdHlwZTogVGFnVHlwZSA9IFwiZ3JheVwiO1xuXG5cdEBJbnB1dCgpIGNsYXNzID0gXCJcIjtcblxuXHRASG9zdEJpbmRpbmcoXCJhdHRyLmNsYXNzXCIpIGdldCBhdHRyQ2xhc3MoKSB7XG5cdFx0cmV0dXJuIGBieC0tdGFnIGJ4LS10YWctLSR7dGhpcy50eXBlfSAke3RoaXMuY2xhc3N9YDtcblx0fVxufVxuIl19