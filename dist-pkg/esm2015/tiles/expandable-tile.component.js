/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ElementRef } from "@angular/core";
import { I18n } from "./../i18n/i18n.module";
import { merge } from "./../utils/object";
/**
 * @record
 */
export function ExpandableTileTranslations() { }
function ExpandableTileTranslations_tsickle_Closure_declarations() {
    /** @type {?} */
    ExpandableTileTranslations.prototype.EXPAND;
    /** @type {?} */
    ExpandableTileTranslations.prototype.COLLAPSE;
}
export class ExpandableTile {
    /**
     * @param {?} i18n
     * @param {?} elementRef
     */
    constructor(i18n, elementRef) {
        this.i18n = i18n;
        this.elementRef = elementRef;
        this.expanded = false;
        this.tileMaxHeight = 0;
        this.element = this.elementRef.nativeElement;
        this.expand = this.i18n.getOverridable("TILES.EXPAND");
        this.collapse = this.i18n.getOverridable("TILES.COLLAPSE");
    }
    /**
     * Expects an object that contains some or all of:
     * ```
     * {
     * 		"EXPAND": "Expand",
     * 		"COLLAPSE": "Collapse",
     * }
     * ```
     * @param {?} value
     * @return {?}
     */
    set translations(value) {
        /** @type {?} */
        const valueWithDefaults = merge(this.i18n.getMultiple("TILES"), value);
        this.expand.override(valueWithDefaults.EXPAND);
        this.collapse.override(valueWithDefaults.COLLAPSE);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateMaxHeight();
    }
    /**
     * @return {?}
     */
    get expandedHeight() {
        return this.tileMaxHeight + parseInt(getComputedStyle(this.element.querySelector(".bx--tile")).paddingBottom, 10);
    }
    /**
     * @return {?}
     */
    updateMaxHeight() {
        if (this.expanded) {
            this.tileMaxHeight = this.element.querySelector(".bx--tile-content").getBoundingClientRect().height;
        }
        else {
            this.tileMaxHeight = this.element.querySelector(".bx--tile-content__above-the-fold").getBoundingClientRect().height;
        }
    }
    /**
     * @return {?}
     */
    onClick() {
        this.expanded = !this.expanded;
        this.updateMaxHeight();
    }
}
ExpandableTile.decorators = [
    { type: Component, args: [{
                selector: "ibm-expandable-tile",
                template: `
		<div
			class="bx--tile bx--tile--expandable"
			[ngClass]="{'bx--tile--is-expanded' : expanded}"
			[ngStyle]="{'max-height': expandedHeight + 'px'}"
			role="button"
			tabindex="0"
			(click)="onClick()">
			<button [attr.aria-label]="(expanded ? collapse : expand).subject | async" class="bx--tile__chevron">
				<svg *ngIf="!expanded" width="12" height="7" viewBox="0 0 12 7" role="img">
					<title>{{expand.subject | async}}</title>
					<path fill-rule="nonzero" d="M6.002 5.55L11.27 0l.726.685L6.003 7 0 .685.726 0z"/>
				</svg>
				<svg *ngIf="expanded" width="12" height="7" viewBox="0 0 12 7" role="img">
					<title>{{collapse.subject | async}}</title>
					<path fill-rule="nonzero" d="M6.002 5.55L11.27 0l.726.685L6.003 7 0 .685.726 0z"/>
				</svg>
			</button>
			<div class="bx--tile-content">
				<ng-content select=".bx--tile-content__above-the-fold"></ng-content>
				<ng-content select=".bx--tile-content__below-the-fold"></ng-content>
			</div>
		</div>
	`
            }] }
];
/** @nocollapse */
ExpandableTile.ctorParameters = () => [
    { type: I18n },
    { type: ElementRef }
];
ExpandableTile.propDecorators = {
    expanded: [{ type: Input }],
    translations: [{ type: Input }]
};
function ExpandableTile_tsickle_Closure_declarations() {
    /** @type {?} */
    ExpandableTile.prototype.expanded;
    /** @type {?} */
    ExpandableTile.prototype.tileMaxHeight;
    /** @type {?} */
    ExpandableTile.prototype.element;
    /** @type {?} */
    ExpandableTile.prototype.expand;
    /** @type {?} */
    ExpandableTile.prototype.collapse;
    /** @type {?} */
    ExpandableTile.prototype.i18n;
    /** @type {?} */
    ExpandableTile.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kYWJsZS10aWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJ0aWxlcy9leHBhbmRhYmxlLXRpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ04sU0FBUyxFQUNULEtBQUssRUFDTCxVQUFVLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7QUFrQzFDLE1BQU07Ozs7O0lBd0JMLFlBQXNCLElBQVUsRUFBWSxVQUFzQjtRQUE1QyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVksZUFBVSxHQUFWLFVBQVUsQ0FBWTt3QkF2QjlDLEtBQUs7NkJBaUJULENBQUM7dUJBQ1AsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO3NCQUU5QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUM7d0JBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDO0tBRWlCOzs7Ozs7Ozs7Ozs7SUFidEUsSUFDSSxZQUFZLENBQUMsS0FBaUM7O1FBQ2pELE1BQU0saUJBQWlCLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ25EOzs7O0lBVUQsa0JBQWtCO1FBQ2pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN2Qjs7OztJQUVELElBQUksY0FBYztRQUNqQixPQUFPLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ2xIOzs7O0lBRUQsZUFBZTtRQUNkLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxNQUFNLENBQUM7U0FDcEc7YUFBTTtZQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLE1BQU0sQ0FBQztTQUNwSDtLQUNEOzs7O0lBRUQsT0FBTztRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN2Qjs7O1lBeEVELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdUJUO2FBQ0Q7Ozs7WUFsQ1EsSUFBSTtZQUhaLFVBQVU7Ozt1QkF1Q1QsS0FBSzsyQkFVTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0RWxlbWVudFJlZixcblx0QWZ0ZXJDb250ZW50SW5pdFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSTE4biwgT3ZlcnJpZGFibGUgfSBmcm9tIFwiLi8uLi9pMThuL2kxOG4ubW9kdWxlXCI7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gXCIuLy4uL3V0aWxzL29iamVjdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4cGFuZGFibGVUaWxlVHJhbnNsYXRpb25zIHtcblx0RVhQQU5EOiBzdHJpbmc7XG5cdENPTExBUFNFOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tZXhwYW5kYWJsZS10aWxlXCIsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3M9XCJieC0tdGlsZSBieC0tdGlsZS0tZXhwYW5kYWJsZVwiXG5cdFx0XHRbbmdDbGFzc109XCJ7J2J4LS10aWxlLS1pcy1leHBhbmRlZCcgOiBleHBhbmRlZH1cIlxuXHRcdFx0W25nU3R5bGVdPVwieydtYXgtaGVpZ2h0JzogZXhwYW5kZWRIZWlnaHQgKyAncHgnfVwiXG5cdFx0XHRyb2xlPVwiYnV0dG9uXCJcblx0XHRcdHRhYmluZGV4PVwiMFwiXG5cdFx0XHQoY2xpY2spPVwib25DbGljaygpXCI+XG5cdFx0XHQ8YnV0dG9uIFthdHRyLmFyaWEtbGFiZWxdPVwiKGV4cGFuZGVkID8gY29sbGFwc2UgOiBleHBhbmQpLnN1YmplY3QgfCBhc3luY1wiIGNsYXNzPVwiYngtLXRpbGVfX2NoZXZyb25cIj5cblx0XHRcdFx0PHN2ZyAqbmdJZj1cIiFleHBhbmRlZFwiIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCI3XCIgdmlld0JveD1cIjAgMCAxMiA3XCIgcm9sZT1cImltZ1wiPlxuXHRcdFx0XHRcdDx0aXRsZT57e2V4cGFuZC5zdWJqZWN0IHwgYXN5bmN9fTwvdGl0bGU+XG5cdFx0XHRcdFx0PHBhdGggZmlsbC1ydWxlPVwibm9uemVyb1wiIGQ9XCJNNi4wMDIgNS41NUwxMS4yNyAwbC43MjYuNjg1TDYuMDAzIDcgMCAuNjg1LjcyNiAwelwiLz5cblx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdDxzdmcgKm5nSWY9XCJleHBhbmRlZFwiIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCI3XCIgdmlld0JveD1cIjAgMCAxMiA3XCIgcm9sZT1cImltZ1wiPlxuXHRcdFx0XHRcdDx0aXRsZT57e2NvbGxhcHNlLnN1YmplY3QgfCBhc3luY319PC90aXRsZT5cblx0XHRcdFx0XHQ8cGF0aCBmaWxsLXJ1bGU9XCJub256ZXJvXCIgZD1cIk02LjAwMiA1LjU1TDExLjI3IDBsLjcyNi42ODVMNi4wMDMgNyAwIC42ODUuNzI2IDB6XCIvPlxuXHRcdFx0XHQ8L3N2Zz5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PGRpdiBjbGFzcz1cImJ4LS10aWxlLWNvbnRlbnRcIj5cblx0XHRcdFx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiLmJ4LS10aWxlLWNvbnRlbnRfX2Fib3ZlLXRoZS1mb2xkXCI+PC9uZy1jb250ZW50PlxuXHRcdFx0XHQ8bmctY29udGVudCBzZWxlY3Q9XCIuYngtLXRpbGUtY29udGVudF9fYmVsb3ctdGhlLWZvbGRcIj48L25nLWNvbnRlbnQ+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBFeHBhbmRhYmxlVGlsZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXHRASW5wdXQoKSBleHBhbmRlZCA9IGZhbHNlO1xuXHQvKipcblx0ICogRXhwZWN0cyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBzb21lIG9yIGFsbCBvZjpcblx0ICogYGBgXG5cdCAqIHtcblx0ICpcdFx0XCJFWFBBTkRcIjogXCJFeHBhbmRcIixcblx0ICpcdFx0XCJDT0xMQVBTRVwiOiBcIkNvbGxhcHNlXCIsXG5cdCAqIH1cblx0ICogYGBgXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRzZXQgdHJhbnNsYXRpb25zKHZhbHVlOiBFeHBhbmRhYmxlVGlsZVRyYW5zbGF0aW9ucykge1xuXHRcdGNvbnN0IHZhbHVlV2l0aERlZmF1bHRzID0gbWVyZ2UodGhpcy5pMThuLmdldE11bHRpcGxlKFwiVElMRVNcIiksIHZhbHVlKTtcblx0XHR0aGlzLmV4cGFuZC5vdmVycmlkZSh2YWx1ZVdpdGhEZWZhdWx0cy5FWFBBTkQpO1xuXHRcdHRoaXMuY29sbGFwc2Uub3ZlcnJpZGUodmFsdWVXaXRoRGVmYXVsdHMuQ09MTEFQU0UpO1xuXHR9XG5cblx0dGlsZU1heEhlaWdodCA9IDA7XG5cdGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuXHRleHBhbmQgPSB0aGlzLmkxOG4uZ2V0T3ZlcnJpZGFibGUoXCJUSUxFUy5FWFBBTkRcIik7XG5cdGNvbGxhcHNlID0gdGhpcy5pMThuLmdldE92ZXJyaWRhYmxlKFwiVElMRVMuQ09MTEFQU0VcIik7XG5cblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIGkxOG46IEkxOG4sIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG5cdG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblx0XHR0aGlzLnVwZGF0ZU1heEhlaWdodCgpO1xuXHR9XG5cblx0Z2V0IGV4cGFuZGVkSGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLnRpbGVNYXhIZWlnaHQgKyBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ4LS10aWxlXCIpKS5wYWRkaW5nQm90dG9tLCAxMCk7XG5cdH1cblxuXHR1cGRhdGVNYXhIZWlnaHQoKSB7XG5cdFx0aWYgKHRoaXMuZXhwYW5kZWQpIHtcblx0XHRcdHRoaXMudGlsZU1heEhlaWdodCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ4LS10aWxlLWNvbnRlbnRcIikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnRpbGVNYXhIZWlnaHQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5ieC0tdGlsZS1jb250ZW50X19hYm92ZS10aGUtZm9sZFwiKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cdFx0fVxuXHR9XG5cblx0b25DbGljaygpIHtcblx0XHR0aGlzLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWQ7XG5cdFx0dGhpcy51cGRhdGVNYXhIZWlnaHQoKTtcblx0fVxufVxuIl19