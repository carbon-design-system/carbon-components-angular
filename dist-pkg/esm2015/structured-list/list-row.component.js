/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding, ContentChildren, QueryList, Input, HostListener, ViewChild, ElementRef, EventEmitter, Output } from "@angular/core";
import { ListColumn } from "./list-column.component";
/**
 * `ListRow` provides a container for the `ListColumn`s that make up the body of a structured list.
 *
 * Example:
 * ```html
 * 	<ibm-list-row>
 * 		<ibm-list-column>Row 1</ibm-list-column>
 * 		<ibm-list-column nowrap="true">Row One</ibm-list-column>
 * 		<ibm-list-column>
 * 			Lorem ipsum dolor sit amet,
 * 			consectetur adipiscing elit. Nunc dui magna,
 * 			finibus id tortor sed, aliquet bibendum augue.
 * 			Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
 * 			Pellentesque vulputate nisl a porttitor interdum.
 * 		</ibm-list-column>
 * 	</ibm-list-row>
 * ```
 */
export class ListRow {
    constructor() {
        this.selected = false;
        /**
         * Internal event used to notify the containing `StructuredList` of changes.
         */
        this.change = new EventEmitter();
        /**
         * Set by the containing `StructuredList`. Enables or disables row level selection features.
         */
        this.selection = false;
        /**
         * Set by the containing `StructuredList`. When `selection = true`, used for the `name` property on the radio input.
         */
        this.name = "list";
        this.wrapper = true;
        this.tabindex = this.selection ? "0" : null;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.columns.forEach(column => {
            column.isBodyColumn = true;
            column.isHeaderColumn = false;
        });
    }
    /**
     * @return {?}
     */
    onclick() {
        if (!this.selection) {
            return false;
        }
        this.input.nativeElement.click();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        this.change.emit(event);
    }
}
ListRow.decorators = [
    { type: Component, args: [{
                selector: "ibm-list-row",
                template: `
		<ng-content></ng-content>
		<ng-container *ngIf="selection">
			<input
				#input
				tabindex="-1"
				class="bx--structured-list-input"
				type="radio"
				[value]="value"
				[name]="name"
				[title]="label"
				(change)="onChange($event)"
				[checked]="selected"/>
			<div class="bx--structured-list-td">
				<ibm-icon-checkmark-filled16 class="bx--structured-list-svg"></ibm-icon-checkmark-filled16>
			</div>
		</ng-container>
	`
            }] }
];
ListRow.propDecorators = {
    selected: [{ type: Input }, { type: HostBinding, args: ["class.bx--structured-list-row--selected",] }],
    label: [{ type: Input }, { type: HostBinding, args: ["attr.aria-label",] }],
    value: [{ type: Input }],
    change: [{ type: Output }],
    wrapper: [{ type: HostBinding, args: ["class.bx--structured-list-row",] }],
    tabindex: [{ type: HostBinding, args: ["attr.tabindex",] }],
    columns: [{ type: ContentChildren, args: [ListColumn,] }],
    input: [{ type: ViewChild, args: ["input",] }],
    onclick: [{ type: HostListener, args: ["click",] }]
};
function ListRow_tsickle_Closure_declarations() {
    /** @type {?} */
    ListRow.prototype.selected;
    /**
     * Applies an accessible label to the row. Defaults to no label.
     * @type {?}
     */
    ListRow.prototype.label;
    /**
     * The value for the row. Returned via `ngModel` or `selected` event on the containing `StructuredList`.
     * @type {?}
     */
    ListRow.prototype.value;
    /**
     * Internal event used to notify the containing `StructuredList` of changes.
     * @type {?}
     */
    ListRow.prototype.change;
    /**
     * Set by the containing `StructuredList`. Enables or disables row level selection features.
     * @type {?}
     */
    ListRow.prototype.selection;
    /**
     * Set by the containing `StructuredList`. When `selection = true`, used for the `name` property on the radio input.
     * @type {?}
     */
    ListRow.prototype.name;
    /** @type {?} */
    ListRow.prototype.wrapper;
    /** @type {?} */
    ListRow.prototype.tabindex;
    /** @type {?} */
    ListRow.prototype.columns;
    /** @type {?} */
    ListRow.prototype.input;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZWQtbGlzdC9saXN0LXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLGVBQWUsRUFDZixTQUFTLEVBRVQsS0FBSyxFQUNMLFlBQVksRUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNyRCxNQUFNOzt3QkFDdUUsS0FBSzs7OztzQkFZekMsSUFBSSxZQUFZLEVBQUU7Ozs7eUJBSzlDLEtBQUs7Ozs7b0JBSVYsTUFBTTt1QkFFMkMsSUFBSTt3QkFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJOzs7OztJQU1wRSxrQkFBa0I7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDN0IsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDM0IsTUFBTSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7U0FDOUIsQ0FBQyxDQUFDO0tBQ0g7Ozs7SUFHRCxPQUFPO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFBRSxPQUFPLEtBQUssQ0FBQztTQUFFO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ2pDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFLO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEI7OztZQW5FRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpQlQ7YUFDRDs7O3VCQUVDLEtBQUssWUFBSSxXQUFXLFNBQUMseUNBQXlDO29CQUk5RCxLQUFLLFlBQUksV0FBVyxTQUFDLGlCQUFpQjtvQkFJdEMsS0FBSztxQkFJTCxNQUFNO3NCQVdOLFdBQVcsU0FBQywrQkFBK0I7dUJBQzNDLFdBQVcsU0FBQyxlQUFlO3NCQUUzQixlQUFlLFNBQUMsVUFBVTtvQkFFMUIsU0FBUyxTQUFDLE9BQU87c0JBU2pCLFlBQVksU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRIb3N0QmluZGluZyxcblx0Q29udGVudENoaWxkcmVuLFxuXHRRdWVyeUxpc3QsXG5cdEFmdGVyQ29udGVudEluaXQsXG5cdElucHV0LFxuXHRIb3N0TGlzdGVuZXIsXG5cdFZpZXdDaGlsZCxcblx0RWxlbWVudFJlZixcblx0RXZlbnRFbWl0dGVyLFxuXHRPdXRwdXRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IExpc3RDb2x1bW4gfSBmcm9tIFwiLi9saXN0LWNvbHVtbi5jb21wb25lbnRcIjtcblxuLyoqXG4gKiBgTGlzdFJvd2AgcHJvdmlkZXMgYSBjb250YWluZXIgZm9yIHRoZSBgTGlzdENvbHVtbmBzIHRoYXQgbWFrZSB1cCB0aGUgYm9keSBvZiBhIHN0cnVjdHVyZWQgbGlzdC5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgaHRtbFxuICogXHQ8aWJtLWxpc3Qtcm93PlxuICpcdFx0PGlibS1saXN0LWNvbHVtbj5Sb3cgMTwvaWJtLWxpc3QtY29sdW1uPlxuICpcdFx0PGlibS1saXN0LWNvbHVtbiBub3dyYXA9XCJ0cnVlXCI+Um93IE9uZTwvaWJtLWxpc3QtY29sdW1uPlxuICpcdFx0PGlibS1saXN0LWNvbHVtbj5cbiAqXHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsXG4gKlx0XHRcdGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTnVuYyBkdWkgbWFnbmEsXG4gKlx0XHRcdGZpbmlidXMgaWQgdG9ydG9yIHNlZCwgYWxpcXVldCBiaWJlbmR1bSBhdWd1ZS5cbiAqXHRcdFx0QWVuZWFuIHBvc3VlcmUgc2VtIHZlbCBldWlzbW9kIGRpZ25pc3NpbS4gTnVsbGEgdXQgY3Vyc3VzIGRvbG9yLlxuICpcdFx0XHRQZWxsZW50ZXNxdWUgdnVscHV0YXRlIG5pc2wgYSBwb3J0dGl0b3IgaW50ZXJkdW0uXG4gKlx0XHQ8L2libS1saXN0LWNvbHVtbj5cbiAqXHQ8L2libS1saXN0LXJvdz5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLWxpc3Qtcm93XCIsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJzZWxlY3Rpb25cIj5cblx0XHRcdDxpbnB1dFxuXHRcdFx0XHQjaW5wdXRcblx0XHRcdFx0dGFiaW5kZXg9XCItMVwiXG5cdFx0XHRcdGNsYXNzPVwiYngtLXN0cnVjdHVyZWQtbGlzdC1pbnB1dFwiXG5cdFx0XHRcdHR5cGU9XCJyYWRpb1wiXG5cdFx0XHRcdFt2YWx1ZV09XCJ2YWx1ZVwiXG5cdFx0XHRcdFtuYW1lXT1cIm5hbWVcIlxuXHRcdFx0XHRbdGl0bGVdPVwibGFiZWxcIlxuXHRcdFx0XHQoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIlxuXHRcdFx0XHRbY2hlY2tlZF09XCJzZWxlY3RlZFwiLz5cblx0XHRcdDxkaXYgY2xhc3M9XCJieC0tc3RydWN0dXJlZC1saXN0LXRkXCI+XG5cdFx0XHRcdDxpYm0taWNvbi1jaGVja21hcmstZmlsbGVkMTYgY2xhc3M9XCJieC0tc3RydWN0dXJlZC1saXN0LXN2Z1wiPjwvaWJtLWljb24tY2hlY2ttYXJrLWZpbGxlZDE2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9uZy1jb250YWluZXI+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFJvdyBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXHRASW5wdXQoKSBASG9zdEJpbmRpbmcoXCJjbGFzcy5ieC0tc3RydWN0dXJlZC1saXN0LXJvdy0tc2VsZWN0ZWRcIikgc2VsZWN0ZWQgPSBmYWxzZTtcblx0LyoqXG5cdCAqIEFwcGxpZXMgYW4gYWNjZXNzaWJsZSBsYWJlbCB0byB0aGUgcm93LiBEZWZhdWx0cyB0byBubyBsYWJlbC5cblx0ICovXG5cdEBJbnB1dCgpIEBIb3N0QmluZGluZyhcImF0dHIuYXJpYS1sYWJlbFwiKSBsYWJlbDtcblx0LyoqXG5cdCAqIFRoZSB2YWx1ZSBmb3IgdGhlIHJvdy4gUmV0dXJuZWQgdmlhIGBuZ01vZGVsYCBvciBgc2VsZWN0ZWRgIGV2ZW50IG9uIHRoZSBjb250YWluaW5nIGBTdHJ1Y3R1cmVkTGlzdGAuXG5cdCAqL1xuXHRASW5wdXQoKSB2YWx1ZTtcblx0LyoqXG5cdCAqIEludGVybmFsIGV2ZW50IHVzZWQgdG8gbm90aWZ5IHRoZSBjb250YWluaW5nIGBTdHJ1Y3R1cmVkTGlzdGAgb2YgY2hhbmdlcy5cblx0ICovXG5cdEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0LyoqXG5cdCAqIFNldCBieSB0aGUgY29udGFpbmluZyBgU3RydWN0dXJlZExpc3RgLiBFbmFibGVzIG9yIGRpc2FibGVzIHJvdyBsZXZlbCBzZWxlY3Rpb24gZmVhdHVyZXMuXG5cdCAqL1xuXHRzZWxlY3Rpb24gPSBmYWxzZTtcblx0LyoqXG5cdCAqIFNldCBieSB0aGUgY29udGFpbmluZyBgU3RydWN0dXJlZExpc3RgLiBXaGVuIGBzZWxlY3Rpb24gPSB0cnVlYCwgdXNlZCBmb3IgdGhlIGBuYW1lYCBwcm9wZXJ0eSBvbiB0aGUgcmFkaW8gaW5wdXQuXG5cdCAqL1xuXHRuYW1lID0gXCJsaXN0XCI7XG5cblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLXN0cnVjdHVyZWQtbGlzdC1yb3dcIikgd3JhcHBlciA9IHRydWU7XG5cdEBIb3N0QmluZGluZyhcImF0dHIudGFiaW5kZXhcIikgdGFiaW5kZXggPSB0aGlzLnNlbGVjdGlvbiA/IFwiMFwiIDogbnVsbDtcblxuXHRAQ29udGVudENoaWxkcmVuKExpc3RDb2x1bW4pIGNvbHVtbnM6IFF1ZXJ5TGlzdDxMaXN0Q29sdW1uPjtcblxuXHRAVmlld0NoaWxkKFwiaW5wdXRcIikgaW5wdXQ6IEVsZW1lbnRSZWY7XG5cblx0bmdBZnRlckNvbnRlbnRJbml0KCkge1xuXHRcdHRoaXMuY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG5cdFx0XHRjb2x1bW4uaXNCb2R5Q29sdW1uID0gdHJ1ZTtcblx0XHRcdGNvbHVtbi5pc0hlYWRlckNvbHVtbiA9IGZhbHNlO1xuXHRcdH0pO1xuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcihcImNsaWNrXCIpXG5cdG9uY2xpY2soKSB7XG5cdFx0aWYgKCF0aGlzLnNlbGVjdGlvbikgeyByZXR1cm4gZmFsc2U7IH1cblx0XHR0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcblx0fVxuXG5cdG9uQ2hhbmdlKGV2ZW50KSB7XG5cdFx0dGhpcy5jaGFuZ2UuZW1pdChldmVudCk7XG5cdH1cbn1cbiJdfQ==