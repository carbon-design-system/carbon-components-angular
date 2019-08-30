/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding, Input } from "@angular/core";
/**
 * `ListColumn` represents a single column in a `StructuredList`.
 *
 * `ListColumn`s can be used in a `ListHeader` to specify the column headers, or in `ListRow`s to specify the column data.
 *
 * Example:
 * ```html
 * <ibm-list-column nowrap="true">Column 1</ibm-list-column>
 * ```
 */
export class ListColumn {
    constructor() {
        this.skeleton = false;
        this.isHeaderColumn = true;
        this.isBodyColumn = true;
        /**
         * Applies `white-space: nowrap` to the content of this `ListColumn`
         */
        this.nowrap = false;
    }
}
ListColumn.decorators = [
    { type: Component, args: [{
                selector: "ibm-list-column",
                template: `
		<span *ngIf="skeleton"></span>
		<ng-content></ng-content>
	`
            }] }
];
ListColumn.propDecorators = {
    skeleton: [{ type: Input }],
    isHeaderColumn: [{ type: HostBinding, args: ["class.bx--structured-list-th",] }],
    isBodyColumn: [{ type: HostBinding, args: ["class.bx--structured-list-td",] }],
    nowrap: [{ type: HostBinding, args: ["class.bx--structured-list-content--nowrap",] }, { type: Input }]
};
function ListColumn_tsickle_Closure_declarations() {
    /** @type {?} */
    ListColumn.prototype.skeleton;
    /** @type {?} */
    ListColumn.prototype.isHeaderColumn;
    /** @type {?} */
    ListColumn.prototype.isBodyColumn;
    /**
     * Applies `white-space: nowrap` to the content of this `ListColumn`
     * @type {?}
     */
    ListColumn.prototype.nowrap;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1jb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZWQtbGlzdC9saXN0LWNvbHVtbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7QUFtQjlELE1BQU07O3dCQUNlLEtBQUs7OEJBRXFDLElBQUk7NEJBQ04sSUFBSTs7OztzQkFJWSxLQUFLOzs7O1lBZmpGLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7OztFQUdUO2FBQ0Q7Ozt1QkFFQyxLQUFLOzZCQUVMLFdBQVcsU0FBQyw4QkFBOEI7MkJBQzFDLFdBQVcsU0FBQyw4QkFBOEI7cUJBSTFDLFdBQVcsU0FBQywyQ0FBMkMsY0FBRyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG4vKipcbiAqIGBMaXN0Q29sdW1uYCByZXByZXNlbnRzIGEgc2luZ2xlIGNvbHVtbiBpbiBhIGBTdHJ1Y3R1cmVkTGlzdGAuXG4gKlxuICogYExpc3RDb2x1bW5gcyBjYW4gYmUgdXNlZCBpbiBhIGBMaXN0SGVhZGVyYCB0byBzcGVjaWZ5IHRoZSBjb2x1bW4gaGVhZGVycywgb3IgaW4gYExpc3RSb3dgcyB0byBzcGVjaWZ5IHRoZSBjb2x1bW4gZGF0YS5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgaHRtbFxuICogPGlibS1saXN0LWNvbHVtbiBub3dyYXA9XCJ0cnVlXCI+Q29sdW1uIDE8L2libS1saXN0LWNvbHVtbj5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLWxpc3QtY29sdW1uXCIsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PHNwYW4gKm5nSWY9XCJza2VsZXRvblwiPjwvc3Bhbj5cblx0XHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbHVtbiB7XG5cdEBJbnB1dCgpIHNrZWxldG9uID0gZmFsc2U7XG5cblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLXN0cnVjdHVyZWQtbGlzdC10aFwiKSBpc0hlYWRlckNvbHVtbiA9IHRydWU7XG5cdEBIb3N0QmluZGluZyhcImNsYXNzLmJ4LS1zdHJ1Y3R1cmVkLWxpc3QtdGRcIikgaXNCb2R5Q29sdW1uID0gdHJ1ZTtcblx0LyoqXG5cdCAqIEFwcGxpZXMgYHdoaXRlLXNwYWNlOiBub3dyYXBgIHRvIHRoZSBjb250ZW50IG9mIHRoaXMgYExpc3RDb2x1bW5gXG5cdCAqL1xuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy5ieC0tc3RydWN0dXJlZC1saXN0LWNvbnRlbnQtLW5vd3JhcFwiKSBASW5wdXQoKSBub3dyYXAgPSBmYWxzZTtcbn1cbiJdfQ==