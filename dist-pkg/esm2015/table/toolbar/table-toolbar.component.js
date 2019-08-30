/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { TableModel } from "../table-model.class";
import { Component, Input } from "@angular/core";
import { I18n } from "../../i18n/i18n.module";
/**
 * The table toolbar is reserved for global table actions such as table settings, complex filter, export, or editing table data.
 *
 * ## Basic usage
 *
 * ```html
 * <ibm-table-toolbar [model]="model">
 * 		<ibm-table-toolbar-actions>
 * 			<button ibmButton="primary">
 * 				Delete
 * 				<ibm-icon-delete16 class="bx--btn__icon"></ibm-icon-delete16>
 * 			</button>
 * 			<button ibmButton="primary">
 * 				Save
 * 				<ibm-icon-save16 class="bx--btn__icon"></ibm-icon-save16>
 * 			</button>
 * 			<button ibmButton="primary">
 * 				Download
 * 				<ibm-icon-download16 class="bx--btn__icon"></ibm-icon-download16>
 * 			</button>
 * 		</ibm-table-toolbar-actions>
 * 			<ibm-table-toolbar-content>
 * 			<ibm-table-toolbar-search [expandable]="true"></ibm-table-toolbar-search>
 * 			<button ibmButton="toolbar-action">
 * 				<ibm-icon-settings16 class="bx--toolbar-action__icon"></ibm-icon-settings16>
 * 			</button>
 * 			<button ibmButton="primary" size="sm">
 * 				Primary Button
 * 				<ibm-icon-add20 class="bx--btn__icon"></ibm-icon-add20>
 * 			</button>
 * 		</ibm-table-toolbar-content>
 * 	</ibm-table-toolbar>
 * ```
 *
 */
export class TableToolbar {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        this.actionBarLabel = this.i18n.getOverridable("TABLE_TOOLBAR.ACTION_BAR");
        this._cancelText = this.i18n.getOverridable("TABLE_TOOLBAR.CANCEL");
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ariaLabel(value) {
        this.actionBarLabel.override(value.ACTION_BAR);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set cancelText(value) {
        this._cancelText.override(value.CANCEL);
    }
    /**
     * @return {?}
     */
    get cancelText() {
        return { CANCEL: /** @type {?} */ (this._cancelText.value) };
    }
    /**
     * @return {?}
     */
    get count() {
        return this.model.totalDataLength > 0 ? this.model.rowsSelected.reduce((previous, current) => previous + (current ? 1 : 0), 0) : 0;
    }
    /**
     * @return {?}
     */
    get selected() {
        return this.model.totalDataLength > 0 ? this.model.rowsSelected.some(item => item) : false;
    }
    /**
     * @return {?}
     */
    onCancel() {
        for (let i = 0; i < this.model.rowsSelected.length; i++) {
            this.model.selectRow(i, false);
        }
    }
}
TableToolbar.decorators = [
    { type: Component, args: [{
                selector: "ibm-table-toolbar",
                template: `
	<section class="bx--table-toolbar">
		<div
			class="bx--batch-actions"
			[ngClass]="{
				'bx--batch-actions--active': selected
			}"
			[attr.aria-label]="actionBarLabel.subject | async">
			<div class="bx--action-list">
				<ng-content select="ibm-table-toolbar-actions"></ng-content>
				<button ibmButton="primary" class="bx--batch-summary__cancel" (click)="onCancel()">{{_cancelText.subject | async}}</button>
			</div>
			<div class="bx--batch-summary">
				<p class="bx--batch-summary__para">
					<span>{{count}}</span> items selected
				</p>
			</div>
		</div>
		<ng-content></ng-content>
	</section>
	`
            }] }
];
/** @nocollapse */
TableToolbar.ctorParameters = () => [
    { type: I18n }
];
TableToolbar.propDecorators = {
    model: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    cancelText: [{ type: Input }]
};
function TableToolbar_tsickle_Closure_declarations() {
    /** @type {?} */
    TableToolbar.prototype.model;
    /** @type {?} */
    TableToolbar.prototype.actionBarLabel;
    /** @type {?} */
    TableToolbar.prototype._cancelText;
    /** @type {?} */
    TableToolbar.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsidGFibGUvdG9vbGJhci90YWJsZS10b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxJQUFJLEVBQWUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkQzRCxNQUFNOzs7O0lBZUwsWUFBc0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07OEJBSGYsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsMEJBQTBCLENBQUM7MkJBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDO0tBRTFCOzs7OztJQVpwQyxJQUFhLFNBQVMsQ0FBRSxLQUE2QjtRQUNwRCxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDL0M7Ozs7O0lBQ0QsSUFBYSxVQUFVLENBQUMsS0FBeUI7UUFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3hDOzs7O0lBQ0QsSUFBSSxVQUFVO1FBQ2IsT0FBTyxFQUFFLE1BQU0sb0JBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFlLENBQUEsRUFBRSxDQUFDO0tBQ3BEOzs7O0lBTUQsSUFBSSxLQUFLO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLFFBQVEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ25JOzs7O0lBQ0QsSUFBSSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FDM0Y7Ozs7SUFFRCxRQUFRO1FBQ1AsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4RCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDL0I7S0FDRDs7O1lBcERELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0JUO2FBQ0Q7Ozs7WUE1RFEsSUFBSTs7O29CQThEWCxLQUFLO3dCQUVMLEtBQUs7eUJBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhYmxlTW9kZWwgfSBmcm9tIFwiLi4vdGFibGUtbW9kZWwuY2xhc3NcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSTE4biwgT3ZlcnJpZGFibGUgfSBmcm9tIFwiLi4vLi4vaTE4bi9pMThuLm1vZHVsZVwiO1xuXG4vKipcbiAqIFRoZSB0YWJsZSB0b29sYmFyIGlzIHJlc2VydmVkIGZvciBnbG9iYWwgdGFibGUgYWN0aW9ucyBzdWNoIGFzIHRhYmxlIHNldHRpbmdzLCBjb21wbGV4IGZpbHRlciwgZXhwb3J0LCBvciBlZGl0aW5nIHRhYmxlIGRhdGEuXG4gKlxuICogIyMgQmFzaWMgdXNhZ2VcbiAqXG4gKiBgYGBodG1sXG4gKiA8aWJtLXRhYmxlLXRvb2xiYXIgW21vZGVsXT1cIm1vZGVsXCI+XG4gKlx0XHQ8aWJtLXRhYmxlLXRvb2xiYXItYWN0aW9ucz5cbiAqXHRcdFx0PGJ1dHRvbiBpYm1CdXR0b249XCJwcmltYXJ5XCI+XG4gKlx0XHRcdFx0RGVsZXRlXG4gKlx0XHRcdFx0PGlibS1pY29uLWRlbGV0ZTE2IGNsYXNzPVwiYngtLWJ0bl9faWNvblwiPjwvaWJtLWljb24tZGVsZXRlMTY+XG4gKlx0XHRcdDwvYnV0dG9uPlxuICpcdFx0XHQ8YnV0dG9uIGlibUJ1dHRvbj1cInByaW1hcnlcIj5cbiAqXHRcdFx0XHRTYXZlXG4gKlx0XHRcdFx0PGlibS1pY29uLXNhdmUxNiBjbGFzcz1cImJ4LS1idG5fX2ljb25cIj48L2libS1pY29uLXNhdmUxNj5cbiAqXHRcdFx0PC9idXR0b24+XG4gKlx0XHRcdDxidXR0b24gaWJtQnV0dG9uPVwicHJpbWFyeVwiPlxuICpcdFx0XHRcdERvd25sb2FkXG4gKlx0XHRcdFx0PGlibS1pY29uLWRvd25sb2FkMTYgY2xhc3M9XCJieC0tYnRuX19pY29uXCI+PC9pYm0taWNvbi1kb3dubG9hZDE2PlxuICpcdFx0XHQ8L2J1dHRvbj5cbiAqXHRcdDwvaWJtLXRhYmxlLXRvb2xiYXItYWN0aW9ucz5cbiAqXHRcdFx0PGlibS10YWJsZS10b29sYmFyLWNvbnRlbnQ+XG4gKlx0XHRcdDxpYm0tdGFibGUtdG9vbGJhci1zZWFyY2ggW2V4cGFuZGFibGVdPVwidHJ1ZVwiPjwvaWJtLXRhYmxlLXRvb2xiYXItc2VhcmNoPlxuICpcdFx0XHQ8YnV0dG9uIGlibUJ1dHRvbj1cInRvb2xiYXItYWN0aW9uXCI+XG4gKlx0XHRcdFx0PGlibS1pY29uLXNldHRpbmdzMTYgY2xhc3M9XCJieC0tdG9vbGJhci1hY3Rpb25fX2ljb25cIj48L2libS1pY29uLXNldHRpbmdzMTY+XG4gKlx0XHRcdDwvYnV0dG9uPlxuICpcdFx0XHQ8YnV0dG9uIGlibUJ1dHRvbj1cInByaW1hcnlcIiBzaXplPVwic21cIj5cbiAqXHRcdFx0XHRQcmltYXJ5IEJ1dHRvblxuICpcdFx0XHRcdDxpYm0taWNvbi1hZGQyMCBjbGFzcz1cImJ4LS1idG5fX2ljb25cIj48L2libS1pY29uLWFkZDIwPlxuICpcdFx0XHQ8L2J1dHRvbj5cbiAqXHRcdDwvaWJtLXRhYmxlLXRvb2xiYXItY29udGVudD5cbiAqXHQ8L2libS10YWJsZS10b29sYmFyPlxuICogYGBgXG4gKlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLXRhYmxlLXRvb2xiYXJcIixcblx0dGVtcGxhdGU6IGBcblx0PHNlY3Rpb24gY2xhc3M9XCJieC0tdGFibGUtdG9vbGJhclwiPlxuXHRcdDxkaXZcblx0XHRcdGNsYXNzPVwiYngtLWJhdGNoLWFjdGlvbnNcIlxuXHRcdFx0W25nQ2xhc3NdPVwie1xuXHRcdFx0XHQnYngtLWJhdGNoLWFjdGlvbnMtLWFjdGl2ZSc6IHNlbGVjdGVkXG5cdFx0XHR9XCJcblx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwiYWN0aW9uQmFyTGFiZWwuc3ViamVjdCB8IGFzeW5jXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYngtLWFjdGlvbi1saXN0XCI+XG5cdFx0XHRcdDxuZy1jb250ZW50IHNlbGVjdD1cImlibS10YWJsZS10b29sYmFyLWFjdGlvbnNcIj48L25nLWNvbnRlbnQ+XG5cdFx0XHRcdDxidXR0b24gaWJtQnV0dG9uPVwicHJpbWFyeVwiIGNsYXNzPVwiYngtLWJhdGNoLXN1bW1hcnlfX2NhbmNlbFwiIChjbGljayk9XCJvbkNhbmNlbCgpXCI+e3tfY2FuY2VsVGV4dC5zdWJqZWN0IHwgYXN5bmN9fTwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYngtLWJhdGNoLXN1bW1hcnlcIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJieC0tYmF0Y2gtc3VtbWFyeV9fcGFyYVwiPlxuXHRcdFx0XHRcdDxzcGFuPnt7Y291bnR9fTwvc3Bhbj4gaXRlbXMgc2VsZWN0ZWRcblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHQ8L3NlY3Rpb24+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVUb29sYmFyIHtcblx0QElucHV0KCkgbW9kZWw6IFRhYmxlTW9kZWw7XG5cblx0QElucHV0KCkgc2V0IGFyaWFMYWJlbCAodmFsdWU6IHsgQUNUSU9OX0JBUjogc3RyaW5nIH0pIHtcblx0XHR0aGlzLmFjdGlvbkJhckxhYmVsLm92ZXJyaWRlKHZhbHVlLkFDVElPTl9CQVIpO1xuXHR9XG5cdEBJbnB1dCgpIHNldCBjYW5jZWxUZXh0KHZhbHVlOiB7IENBTkNFTDogc3RyaW5nIH0pIHtcblx0XHR0aGlzLl9jYW5jZWxUZXh0Lm92ZXJyaWRlKHZhbHVlLkNBTkNFTCk7XG5cdH1cblx0Z2V0IGNhbmNlbFRleHQoKTogeyBDQU5DRUw6IHN0cmluZyB9IHtcblx0XHRyZXR1cm4geyBDQU5DRUw6IHRoaXMuX2NhbmNlbFRleHQudmFsdWUgYXMgc3RyaW5nIH07XG5cdH1cblx0YWN0aW9uQmFyTGFiZWwgPSB0aGlzLmkxOG4uZ2V0T3ZlcnJpZGFibGUoXCJUQUJMRV9UT09MQkFSLkFDVElPTl9CQVJcIik7XG5cdF9jYW5jZWxUZXh0ID0gdGhpcy5pMThuLmdldE92ZXJyaWRhYmxlKFwiVEFCTEVfVE9PTEJBUi5DQU5DRUxcIik7XG5cblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIGkxOG46IEkxOG4pIHt9XG5cblx0Z2V0IGNvdW50KCkge1xuXHRcdHJldHVybiB0aGlzLm1vZGVsLnRvdGFsRGF0YUxlbmd0aCA+IDAgPyB0aGlzLm1vZGVsLnJvd3NTZWxlY3RlZC5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PiBwcmV2aW91cyArIChjdXJyZW50ID8gMSA6IDApLCAwKSA6IDA7XG5cdH1cblx0Z2V0IHNlbGVjdGVkKCkge1xuXHRcdHJldHVybiB0aGlzLm1vZGVsLnRvdGFsRGF0YUxlbmd0aCA+IDAgPyB0aGlzLm1vZGVsLnJvd3NTZWxlY3RlZC5zb21lKGl0ZW0gPT4gaXRlbSkgOiBmYWxzZTtcblx0fVxuXG5cdG9uQ2FuY2VsKCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tb2RlbC5yb3dzU2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMubW9kZWwuc2VsZWN0Um93KGksIGZhbHNlKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==