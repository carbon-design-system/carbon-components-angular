/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ContentChildren, QueryList, Output, EventEmitter } from "@angular/core";
import { ListRow } from "./list-row.component";
import { ListHeader } from "./list-header.component";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
/**
 * Structured Lists represent related tabular data. For larger datasets consider a full `Table`.
 *
 * [See demo](../../?path=/story/structured-list--basic)
 *
 * See [structured-list/usage](https://www.carbondesignsystem.com/components/structured-list/usage) for usage guidance.
 *
 * A basic structued list looks something like:
 * ```html
 * 	<ibm-structured-list>
 * 		<ibm-list-header>
 * 			<ibm-list-column nowrap="true">Column 1</ibm-list-column>
 * 			<ibm-list-column nowrap="true">Column 2</ibm-list-column>
 * 			<ibm-list-column>Column 3</ibm-list-column>
 * 		</ibm-list-header>
 * 		<ibm-list-row>
 * 			<ibm-list-column>Row 1</ibm-list-column>
 * 			<ibm-list-column nowrap="true">Row One</ibm-list-column>
 * 			<ibm-list-column>
 * 				Lorem ipsum dolor sit amet,
 * 				consectetur adipiscing elit. Nunc dui magna,
 * 				finibus id tortor sed, aliquet bibendum augue.
 * 				Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
 * 				Pellentesque vulputate nisl a porttitor interdum.
 * 			</ibm-list-column>
 * 		</ibm-list-row>
 * 		<ibm-list-row>
 * 			<ibm-list-column>Row 2</ibm-list-column>
 * 			<ibm-list-column nowrap="true">Row Two</ibm-list-column>
 * 			<ibm-list-column>
 * 				Lorem ipsum dolor sit amet,
 * 				consectetur adipiscing elit. Nunc dui magna,
 * 				finibus id tortor sed, aliquet bibendum augue.
 * 				Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor.
 * 				Pellentesque vulputate nisl a porttitor interdum.
 * 			</ibm-list-column>
 * 		</ibm-list-row>
 * 	</ibm-structured-list>
 * ```
 *
 * <example-url>../../iframe.html?id=structured-list--basic</example-url>
 */
export class StructuredList {
    constructor() {
        /**
         * Set to `true` to enable radio like selection of the rows.
         */
        this.selection = false;
        /**
         * Set to `true` to apply a border and white background.
         */
        this.border = false;
        /**
         * Set to `true` to apply a condensed style to the headers and rows.
         */
        this.condensed = false;
        /**
         * Set to `true` to apply `white-space: nowrap` on _all_ conent.
         */
        this.nowrap = false;
        /**
         * Used when `selection = true` as the row radio group `name`
         */
        this.name = `structured-list-${StructuredList.listCount++}`;
        /**
         * Emits an event when the row selection changes.
         *
         * Emits an object that looks like:
         * ```javascript
         * {
         * 	value: "something",
         * 	selected: true,
         * 	name: "structured-list-1"
         * }
         * ```
         */
        this.selected = new EventEmitter();
        this._skeleton = false;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    /**
     * Sets the skeleton value for all `ListHeader` to the skeleton value of `StructuredList`.
     * @param {?} value
     * @return {?}
     */
    set skeleton(value) {
        this._skeleton = value;
        this.updateChildren();
    }
    /**
     * Returns the skeleton value in the `StructuredList` if there is one.
     * @return {?}
     */
    get skeleton() {
        return this._skeleton;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        /** @type {?} */
        const setSelection = (rowOrHeader) => {
            rowOrHeader.selection = this.selection;
        };
        this.headers.forEach(setSelection);
        this.rows.forEach(row => {
            setSelection(row);
            row.name = this.name;
            row.change.subscribe(() => {
                this.selected.emit({
                    value: row.value,
                    selected: row.selected,
                    name: this.name
                });
                this.onChange(row.value);
            });
        });
        this.updateChildren();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (!this.rows) {
            return;
        }
        this.rows.forEach(row => {
            if (row.value === value) {
                row.selected = true;
            }
            else {
                row.selected = false;
            }
        });
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @return {?}
     */
    updateChildren() {
        if (this.headers) {
            this.headers.toArray().forEach(child => child.skeleton = this.skeleton);
        }
    }
}
/**
 * A counter to provide unique default values.
 */
StructuredList.listCount = 0;
StructuredList.decorators = [
    { type: Component, args: [{
                selector: "ibm-structured-list",
                template: `
		<section
			class="bx--structured-list"
			[ngClass]="{
				'bx--structured-list--border': border,
				'bx--structured-list--selection': selection,
				'bx--structured-list--condensed': condensed,
				'bx--structured-list-content--nowrap': nowrap,
				'bx--skeleton': skeleton
			}">
			<ng-content select="ibm-list-header"></ng-content>
			<div class="bx--structured-list-tbody">
				<ng-content></ng-content>
			</div>
		</section>
	`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: StructuredList,
                        multi: true
                    }
                ]
            }] }
];
StructuredList.propDecorators = {
    selection: [{ type: Input }],
    border: [{ type: Input }],
    condensed: [{ type: Input }],
    nowrap: [{ type: Input }],
    name: [{ type: Input }],
    skeleton: [{ type: Input }],
    selected: [{ type: Output }],
    rows: [{ type: ContentChildren, args: [ListRow,] }],
    headers: [{ type: ContentChildren, args: [ListHeader,] }]
};
function StructuredList_tsickle_Closure_declarations() {
    /**
     * A counter to provide unique default values.
     * @type {?}
     */
    StructuredList.listCount;
    /**
     * Set to `true` to enable radio like selection of the rows.
     * @type {?}
     */
    StructuredList.prototype.selection;
    /**
     * Set to `true` to apply a border and white background.
     * @type {?}
     */
    StructuredList.prototype.border;
    /**
     * Set to `true` to apply a condensed style to the headers and rows.
     * @type {?}
     */
    StructuredList.prototype.condensed;
    /**
     * Set to `true` to apply `white-space: nowrap` on _all_ conent.
     * @type {?}
     */
    StructuredList.prototype.nowrap;
    /**
     * Used when `selection = true` as the row radio group `name`
     * @type {?}
     */
    StructuredList.prototype.name;
    /**
     * Emits an event when the row selection changes.
     *
     * Emits an object that looks like:
     * ```javascript
     * {
     * 	value: "something",
     * 	selected: true,
     * 	name: "structured-list-1"
     * }
     * ```
     * @type {?}
     */
    StructuredList.prototype.selected;
    /** @type {?} */
    StructuredList.prototype.rows;
    /** @type {?} */
    StructuredList.prototype.headers;
    /** @type {?} */
    StructuredList.prototype._skeleton;
    /** @type {?} */
    StructuredList.prototype.onChange;
    /** @type {?} */
    StructuredList.prototype.onTouched;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlZC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmVkLWxpc3Qvc3RydWN0dXJlZC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUNmLFNBQVMsRUFFVCxNQUFNLEVBQ04sWUFBWSxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0V6RSxNQUFNOzs7Ozt5QkFRZ0IsS0FBSzs7OztzQkFJUixLQUFLOzs7O3lCQUlGLEtBQUs7Ozs7c0JBSVIsS0FBSzs7OztvQkFJUCxtQkFBbUIsY0FBYyxDQUFDLFNBQVMsRUFBRSxFQUFFOzs7Ozs7Ozs7Ozs7O3dCQThCc0IsSUFBSSxZQUFZLEVBQUU7eUJBS2pGLEtBQUs7d0JBRWhCLENBQUMsQ0FBTSxFQUFFLEVBQUUsSUFBSTt5QkFFZCxHQUFHLEVBQUUsSUFBSTs7Ozs7OztJQWxDckIsSUFDSSxRQUFRLENBQUMsS0FBVTtRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDdEI7Ozs7O0lBS0QsSUFBSSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3RCOzs7O0lBeUJELGtCQUFrQjs7UUFDakIsTUFBTSxZQUFZLEdBQUcsQ0FBQyxXQUFpQyxFQUFFLEVBQUU7WUFDMUQsV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZDLENBQUM7UUFFRixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEIsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3JCLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ2xCLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSztvQkFDaEIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO29CQUN0QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7aUJBQ2YsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pCLENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN0Qjs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBVTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUFFLE9BQU87U0FBRTtRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixJQUFJLEdBQUcsQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFFO2dCQUN4QixHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUNwQjtpQkFBTTtnQkFDTixHQUFHLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzthQUNyQjtTQUNELENBQUMsQ0FBQztLQUNIOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDbkI7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7OztJQUVTLGNBQWM7UUFDdkIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEU7S0FDRDs7Ozs7MkJBekdrQixDQUFDOztZQTlCcEIsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0VBZVQ7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWO3dCQUNDLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxjQUFjO3dCQUMzQixLQUFLLEVBQUUsSUFBSTtxQkFDWDtpQkFDRDthQUNEOzs7d0JBU0MsS0FBSztxQkFJTCxLQUFLO3dCQUlMLEtBQUs7cUJBSUwsS0FBSzttQkFJTCxLQUFLO3VCQUtMLEtBQUs7dUJBeUJMLE1BQU07bUJBRU4sZUFBZSxTQUFDLE9BQU87c0JBQ3ZCLGVBQWUsU0FBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0Q29udGVudENoaWxkcmVuLFxuXHRRdWVyeUxpc3QsXG5cdEFmdGVyQ29udGVudEluaXQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBMaXN0Um93IH0gZnJvbSBcIi4vbGlzdC1yb3cuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMaXN0SGVhZGVyIH0gZnJvbSBcIi4vbGlzdC1oZWFkZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuLyoqXG4gKiBTdHJ1Y3R1cmVkIExpc3RzIHJlcHJlc2VudCByZWxhdGVkIHRhYnVsYXIgZGF0YS4gRm9yIGxhcmdlciBkYXRhc2V0cyBjb25zaWRlciBhIGZ1bGwgYFRhYmxlYC5cbiAqXG4gKiBbU2VlIGRlbW9dKC4uLy4uLz9wYXRoPS9zdG9yeS9zdHJ1Y3R1cmVkLWxpc3QtLWJhc2ljKVxuICpcbiAqIFNlZSBbc3RydWN0dXJlZC1saXN0L3VzYWdlXShodHRwczovL3d3dy5jYXJib25kZXNpZ25zeXN0ZW0uY29tL2NvbXBvbmVudHMvc3RydWN0dXJlZC1saXN0L3VzYWdlKSBmb3IgdXNhZ2UgZ3VpZGFuY2UuXG4gKlxuICogQSBiYXNpYyBzdHJ1Y3R1ZWQgbGlzdCBsb29rcyBzb21ldGhpbmcgbGlrZTpcbiAqIGBgYGh0bWxcbiAqXHQ8aWJtLXN0cnVjdHVyZWQtbGlzdD5cbiAqXHRcdDxpYm0tbGlzdC1oZWFkZXI+XG4gKlx0XHRcdDxpYm0tbGlzdC1jb2x1bW4gbm93cmFwPVwidHJ1ZVwiPkNvbHVtbiAxPC9pYm0tbGlzdC1jb2x1bW4+XG4gKlx0XHRcdDxpYm0tbGlzdC1jb2x1bW4gbm93cmFwPVwidHJ1ZVwiPkNvbHVtbiAyPC9pYm0tbGlzdC1jb2x1bW4+XG4gKlx0XHRcdDxpYm0tbGlzdC1jb2x1bW4+Q29sdW1uIDM8L2libS1saXN0LWNvbHVtbj5cbiAqXHRcdDwvaWJtLWxpc3QtaGVhZGVyPlxuICpcdFx0PGlibS1saXN0LXJvdz5cbiAqXHRcdFx0PGlibS1saXN0LWNvbHVtbj5Sb3cgMTwvaWJtLWxpc3QtY29sdW1uPlxuICpcdFx0XHQ8aWJtLWxpc3QtY29sdW1uIG5vd3JhcD1cInRydWVcIj5Sb3cgT25lPC9pYm0tbGlzdC1jb2x1bW4+XG4gKlx0XHRcdDxpYm0tbGlzdC1jb2x1bW4+XG4gKlx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsXG4gKlx0XHRcdFx0Y29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOdW5jIGR1aSBtYWduYSxcbiAqXHRcdFx0XHRmaW5pYnVzIGlkIHRvcnRvciBzZWQsIGFsaXF1ZXQgYmliZW5kdW0gYXVndWUuXG4gKlx0XHRcdFx0QWVuZWFuIHBvc3VlcmUgc2VtIHZlbCBldWlzbW9kIGRpZ25pc3NpbS4gTnVsbGEgdXQgY3Vyc3VzIGRvbG9yLlxuICpcdFx0XHRcdFBlbGxlbnRlc3F1ZSB2dWxwdXRhdGUgbmlzbCBhIHBvcnR0aXRvciBpbnRlcmR1bS5cbiAqXHRcdFx0PC9pYm0tbGlzdC1jb2x1bW4+XG4gKlx0XHQ8L2libS1saXN0LXJvdz5cbiAqXHRcdDxpYm0tbGlzdC1yb3c+XG4gKlx0XHRcdDxpYm0tbGlzdC1jb2x1bW4+Um93IDI8L2libS1saXN0LWNvbHVtbj5cbiAqXHRcdFx0PGlibS1saXN0LWNvbHVtbiBub3dyYXA9XCJ0cnVlXCI+Um93IFR3bzwvaWJtLWxpc3QtY29sdW1uPlxuICpcdFx0XHQ8aWJtLWxpc3QtY29sdW1uPlxuICpcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LFxuICpcdFx0XHRcdGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTnVuYyBkdWkgbWFnbmEsXG4gKlx0XHRcdFx0ZmluaWJ1cyBpZCB0b3J0b3Igc2VkLCBhbGlxdWV0IGJpYmVuZHVtIGF1Z3VlLlxuICpcdFx0XHRcdEFlbmVhbiBwb3N1ZXJlIHNlbSB2ZWwgZXVpc21vZCBkaWduaXNzaW0uIE51bGxhIHV0IGN1cnN1cyBkb2xvci5cbiAqXHRcdFx0XHRQZWxsZW50ZXNxdWUgdnVscHV0YXRlIG5pc2wgYSBwb3J0dGl0b3IgaW50ZXJkdW0uXG4gKlx0XHRcdDwvaWJtLWxpc3QtY29sdW1uPlxuICpcdFx0PC9pYm0tbGlzdC1yb3c+XG4gKlx0PC9pYm0tc3RydWN0dXJlZC1saXN0PlxuICogYGBgXG4gKlxuICogPGV4YW1wbGUtdXJsPi4uLy4uL2lmcmFtZS5odG1sP2lkPXN0cnVjdHVyZWQtbGlzdC0tYmFzaWM8L2V4YW1wbGUtdXJsPlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLXN0cnVjdHVyZWQtbGlzdFwiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxzZWN0aW9uXG5cdFx0XHRjbGFzcz1cImJ4LS1zdHJ1Y3R1cmVkLWxpc3RcIlxuXHRcdFx0W25nQ2xhc3NdPVwie1xuXHRcdFx0XHQnYngtLXN0cnVjdHVyZWQtbGlzdC0tYm9yZGVyJzogYm9yZGVyLFxuXHRcdFx0XHQnYngtLXN0cnVjdHVyZWQtbGlzdC0tc2VsZWN0aW9uJzogc2VsZWN0aW9uLFxuXHRcdFx0XHQnYngtLXN0cnVjdHVyZWQtbGlzdC0tY29uZGVuc2VkJzogY29uZGVuc2VkLFxuXHRcdFx0XHQnYngtLXN0cnVjdHVyZWQtbGlzdC1jb250ZW50LS1ub3dyYXAnOiBub3dyYXAsXG5cdFx0XHRcdCdieC0tc2tlbGV0b24nOiBza2VsZXRvblxuXHRcdFx0fVwiPlxuXHRcdFx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiaWJtLWxpc3QtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxuXHRcdFx0PGRpdiBjbGFzcz1cImJ4LS1zdHJ1Y3R1cmVkLWxpc3QtdGJvZHlcIj5cblx0XHRcdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9zZWN0aW9uPlxuXHRgLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHRcdHVzZUV4aXN0aW5nOiBTdHJ1Y3R1cmVkTGlzdCxcblx0XHRcdG11bHRpOiB0cnVlXG5cdFx0fVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZWRMaXN0IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXHQvKipcblx0ICogQSBjb3VudGVyIHRvIHByb3ZpZGUgdW5pcXVlIGRlZmF1bHQgdmFsdWVzLlxuXHQgKi9cblx0c3RhdGljIGxpc3RDb3VudCA9IDA7XG5cdC8qKlxuXHQgKiBTZXQgdG8gYHRydWVgIHRvIGVuYWJsZSByYWRpbyBsaWtlIHNlbGVjdGlvbiBvZiB0aGUgcm93cy5cblx0ICovXG5cdEBJbnB1dCgpIHNlbGVjdGlvbiA9IGZhbHNlO1xuXHQvKipcblx0ICogU2V0IHRvIGB0cnVlYCB0byBhcHBseSBhIGJvcmRlciBhbmQgd2hpdGUgYmFja2dyb3VuZC5cblx0ICovXG5cdEBJbnB1dCgpIGJvcmRlciA9IGZhbHNlO1xuXHQvKipcblx0ICogU2V0IHRvIGB0cnVlYCB0byBhcHBseSBhIGNvbmRlbnNlZCBzdHlsZSB0byB0aGUgaGVhZGVycyBhbmQgcm93cy5cblx0ICovXG5cdEBJbnB1dCgpIGNvbmRlbnNlZCA9IGZhbHNlO1xuXHQvKipcblx0ICogU2V0IHRvIGB0cnVlYCB0byBhcHBseSBgd2hpdGUtc3BhY2U6IG5vd3JhcGAgb24gX2FsbF8gY29uZW50LlxuXHQgKi9cblx0QElucHV0KCkgbm93cmFwID0gZmFsc2U7XG5cdC8qKlxuXHQgKiBVc2VkIHdoZW4gYHNlbGVjdGlvbiA9IHRydWVgIGFzIHRoZSByb3cgcmFkaW8gZ3JvdXAgYG5hbWVgXG5cdCAqL1xuXHRASW5wdXQoKSBuYW1lID0gYHN0cnVjdHVyZWQtbGlzdC0ke1N0cnVjdHVyZWRMaXN0Lmxpc3RDb3VudCsrfWA7XG5cblx0LyoqXG5cdCAqIFNldHMgdGhlIHNrZWxldG9uIHZhbHVlIGZvciBhbGwgYExpc3RIZWFkZXJgIHRvIHRoZSBza2VsZXRvbiB2YWx1ZSBvZiBgU3RydWN0dXJlZExpc3RgLlxuXHQgKi9cblx0QElucHV0KClcblx0c2V0IHNrZWxldG9uKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLl9za2VsZXRvbiA9IHZhbHVlO1xuXHRcdHRoaXMudXBkYXRlQ2hpbGRyZW4oKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBza2VsZXRvbiB2YWx1ZSBpbiB0aGUgYFN0cnVjdHVyZWRMaXN0YCBpZiB0aGVyZSBpcyBvbmUuXG5cdCAqL1xuXHRnZXQgc2tlbGV0b24oKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5fc2tlbGV0b247XG5cdH1cblxuXHQvKipcblx0ICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgcm93IHNlbGVjdGlvbiBjaGFuZ2VzLlxuXHQgKlxuXHQgKiBFbWl0cyBhbiBvYmplY3QgdGhhdCBsb29rcyBsaWtlOlxuXHQgKiBgYGBqYXZhc2NyaXB0XG5cdCAqIHtcblx0ICogXHR2YWx1ZTogXCJzb21ldGhpbmdcIixcblx0ICogXHRzZWxlY3RlZDogdHJ1ZSxcblx0ICogXHRuYW1lOiBcInN0cnVjdHVyZWQtbGlzdC0xXCJcblx0ICogfVxuXHQgKiBgYGBcblx0ICovXG5cdEBPdXRwdXQoKSBzZWxlY3RlZDogRXZlbnRFbWl0dGVyPHt2YWx1ZTogc3RyaW5nLCBzZWxlY3RlZDogYm9vbGVhbiwgbmFtZTogc3RyaW5nfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QENvbnRlbnRDaGlsZHJlbihMaXN0Um93KSByb3dzOiBRdWVyeUxpc3Q8TGlzdFJvdz47XG5cdEBDb250ZW50Q2hpbGRyZW4oTGlzdEhlYWRlcikgaGVhZGVyczogUXVlcnlMaXN0PExpc3RIZWFkZXI+O1xuXG5cdHByb3RlY3RlZCBfc2tlbGV0b24gPSBmYWxzZTtcblxuXHRvbkNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcblxuXHRvblRvdWNoZWQgPSAoKSA9PiB7IH07XG5cblx0bmdBZnRlckNvbnRlbnRJbml0KCkge1xuXHRcdGNvbnN0IHNldFNlbGVjdGlvbiA9IChyb3dPckhlYWRlcjogTGlzdFJvdyB8IExpc3RIZWFkZXIpID0+IHtcblx0XHRcdHJvd09ySGVhZGVyLnNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0aW9uO1xuXHRcdH07XG5cblx0XHR0aGlzLmhlYWRlcnMuZm9yRWFjaChzZXRTZWxlY3Rpb24pO1xuXHRcdHRoaXMucm93cy5mb3JFYWNoKHJvdyA9PiB7XG5cdFx0XHRzZXRTZWxlY3Rpb24ocm93KTtcblx0XHRcdHJvdy5uYW1lID0gdGhpcy5uYW1lO1xuXHRcdFx0cm93LmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkLmVtaXQoe1xuXHRcdFx0XHRcdHZhbHVlOiByb3cudmFsdWUsXG5cdFx0XHRcdFx0c2VsZWN0ZWQ6IHJvdy5zZWxlY3RlZCxcblx0XHRcdFx0XHRuYW1lOiB0aGlzLm5hbWVcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMub25DaGFuZ2Uocm93LnZhbHVlKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHRoaXMudXBkYXRlQ2hpbGRyZW4oKTtcblx0fVxuXG5cdHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuXHRcdGlmICghdGhpcy5yb3dzKSB7IHJldHVybjsgfVxuXHRcdHRoaXMucm93cy5mb3JFYWNoKHJvdyA9PiB7XG5cdFx0XHRpZiAocm93LnZhbHVlID09PSB2YWx1ZSkge1xuXHRcdFx0XHRyb3cuc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cm93LnNlbGVjdGVkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRyZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcblx0XHR0aGlzLm9uQ2hhbmdlID0gZm47XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSBmbjtcblx0fVxuXG5cdHByb3RlY3RlZCB1cGRhdGVDaGlsZHJlbigpIHtcblx0XHRpZiAodGhpcy5oZWFkZXJzKSB7XG5cdFx0XHR0aGlzLmhlYWRlcnMudG9BcnJheSgpLmZvckVhY2goY2hpbGQgPT4gY2hpbGQuc2tlbGV0b24gPSB0aGlzLnNrZWxldG9uKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==