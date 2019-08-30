/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding, ContentChildren, QueryList, Input } from "@angular/core";
import { ListColumn } from "./list-column.component";
/**
 * `ListHeader` provides a container for the `ListColumn`s that make up the header of a structured list.
 *
 * Example:
 * ```html
 * 	<ibm-list-header>
 * 		<ibm-list-column nowrap="true">Column 1</ibm-list-column>
 * 		<ibm-list-column nowrap="true">Column 2</ibm-list-column>
 * 		<ibm-list-column>Column 3</ibm-list-column>
 * 	</ibm-list-header>
 * ```
 */
export class ListHeader {
    constructor() {
        this.wrapper = true;
        /**
         * Set by the containing `StructuredList`. Adds a dummy header for the selection column when set to true.
         */
        this.selection = false;
        this._skeleton = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set skeleton(value) {
        this._skeleton = value;
        this.updateChildren();
    }
    /**
     * @return {?}
     */
    get skeleton() {
        return this._skeleton;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.columns.forEach(column => {
            column.isBodyColumn = false;
            column.isHeaderColumn = true;
        });
        this.updateChildren();
    }
    /**
     * @return {?}
     */
    updateChildren() {
        if (this.columns) {
            this.columns.toArray().forEach(child => child.skeleton = this.skeleton);
        }
    }
}
ListHeader.decorators = [
    { type: Component, args: [{
                selector: "ibm-list-header",
                template: `
		<div class="bx--structured-list-row bx--structured-list-row--header-row">
			<ng-content></ng-content>
			<div *ngIf="selection" class="bx--structured-list-th"></div>
		</div>
	`
            }] }
];
ListHeader.propDecorators = {
    wrapper: [{ type: HostBinding, args: ["class.bx--structured-list-thead",] }],
    skeleton: [{ type: Input }],
    columns: [{ type: ContentChildren, args: [ListColumn,] }]
};
function ListHeader_tsickle_Closure_declarations() {
    /** @type {?} */
    ListHeader.prototype.wrapper;
    /** @type {?} */
    ListHeader.prototype.columns;
    /**
     * Set by the containing `StructuredList`. Adds a dummy header for the selection column when set to true.
     * @type {?}
     */
    ListHeader.prototype.selection;
    /** @type {?} */
    ListHeader.prototype._skeleton;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZWQtbGlzdC9saXN0LWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLGVBQWUsRUFDZixTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQXVCckQsTUFBTTs7dUJBQ3FELElBQUk7Ozs7eUJBaUJsRCxLQUFLO3lCQUVLLEtBQUs7Ozs7OztJQWpCM0IsSUFDSSxRQUFRLENBQUMsS0FBVTtRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdEI7Ozs7SUFXRCxrQkFBa0I7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDN0IsTUFBTSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDNUIsTUFBTSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7U0FDN0IsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3RCOzs7O0lBRVMsY0FBYztRQUN2QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN4RTtLQUNEOzs7WUEzQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7RUFLVDthQUNEOzs7c0JBRUMsV0FBVyxTQUFDLGlDQUFpQzt1QkFFN0MsS0FBSztzQkFVTCxlQUFlLFNBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SG9zdEJpbmRpbmcsXG5cdENvbnRlbnRDaGlsZHJlbixcblx0UXVlcnlMaXN0LFxuXHRBZnRlckNvbnRlbnRJbml0LFxuXHRJbnB1dFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTGlzdENvbHVtbiB9IGZyb20gXCIuL2xpc3QtY29sdW1uLmNvbXBvbmVudFwiO1xuXG4vKipcbiAqIGBMaXN0SGVhZGVyYCBwcm92aWRlcyBhIGNvbnRhaW5lciBmb3IgdGhlIGBMaXN0Q29sdW1uYHMgdGhhdCBtYWtlIHVwIHRoZSBoZWFkZXIgb2YgYSBzdHJ1Y3R1cmVkIGxpc3QuXG4gKlxuICogRXhhbXBsZTpcbiAqIGBgYGh0bWxcbiAqIFx0PGlibS1saXN0LWhlYWRlcj5cbiAqXHRcdDxpYm0tbGlzdC1jb2x1bW4gbm93cmFwPVwidHJ1ZVwiPkNvbHVtbiAxPC9pYm0tbGlzdC1jb2x1bW4+XG4gKlx0XHQ8aWJtLWxpc3QtY29sdW1uIG5vd3JhcD1cInRydWVcIj5Db2x1bW4gMjwvaWJtLWxpc3QtY29sdW1uPlxuICpcdFx0PGlibS1saXN0LWNvbHVtbj5Db2x1bW4gMzwvaWJtLWxpc3QtY29sdW1uPlxuICpcdDwvaWJtLWxpc3QtaGVhZGVyPlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tbGlzdC1oZWFkZXJcIixcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGNsYXNzPVwiYngtLXN0cnVjdHVyZWQtbGlzdC1yb3cgYngtLXN0cnVjdHVyZWQtbGlzdC1yb3ctLWhlYWRlci1yb3dcIj5cblx0XHRcdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblx0XHRcdDxkaXYgKm5nSWY9XCJzZWxlY3Rpb25cIiBjbGFzcz1cImJ4LS1zdHJ1Y3R1cmVkLWxpc3QtdGhcIj48L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0SGVhZGVyIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cdEBIb3N0QmluZGluZyhcImNsYXNzLmJ4LS1zdHJ1Y3R1cmVkLWxpc3QtdGhlYWRcIikgd3JhcHBlciA9IHRydWU7XG5cblx0QElucHV0KClcblx0c2V0IHNrZWxldG9uKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLl9za2VsZXRvbiA9IHZhbHVlO1xuXHRcdHRoaXMudXBkYXRlQ2hpbGRyZW4oKTtcblx0fVxuXG5cdGdldCBza2VsZXRvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLl9za2VsZXRvbjtcblx0fVxuXG5cdEBDb250ZW50Q2hpbGRyZW4oTGlzdENvbHVtbikgY29sdW1uczogUXVlcnlMaXN0PExpc3RDb2x1bW4+O1xuXG5cdC8qKlxuXHQgKiBTZXQgYnkgdGhlIGNvbnRhaW5pbmcgYFN0cnVjdHVyZWRMaXN0YC4gQWRkcyBhIGR1bW15IGhlYWRlciBmb3IgdGhlIHNlbGVjdGlvbiBjb2x1bW4gd2hlbiBzZXQgdG8gdHJ1ZS5cblx0ICovXG5cdHNlbGVjdGlvbiA9IGZhbHNlO1xuXG5cdHByb3RlY3RlZCBfc2tlbGV0b24gPSBmYWxzZTtcblxuXHRuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cdFx0dGhpcy5jb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcblx0XHRcdGNvbHVtbi5pc0JvZHlDb2x1bW4gPSBmYWxzZTtcblx0XHRcdGNvbHVtbi5pc0hlYWRlckNvbHVtbiA9IHRydWU7XG5cdFx0fSk7XG5cdFx0dGhpcy51cGRhdGVDaGlsZHJlbigpO1xuXHR9XG5cblx0cHJvdGVjdGVkIHVwZGF0ZUNoaWxkcmVuKCkge1xuXHRcdGlmICh0aGlzLmNvbHVtbnMpIHtcblx0XHRcdHRoaXMuY29sdW1ucy50b0FycmF5KCkuZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5za2VsZXRvbiA9IHRoaXMuc2tlbGV0b24pO1xuXHRcdH1cblx0fVxufVxuIl19