/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild } from "@angular/core";
import { I18n } from "./../i18n/i18n.module";
export class SelectionTile {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        /**
         * The unique id for the input.
         */
        this.id = `tile-${SelectionTile.tileCount}`;
        /**
         * Internal event used to notify the containing `TileGroup` of changes.
         */
        this.change = new EventEmitter();
        SelectionTile.tileCount++;
    }
    /**
     * Updating the state of the input to match the state of the parameter passed in.
     * Set to `true` if this tile should be selected.
     * @param {?} value
     * @return {?}
     */
    set selected(value) {
        if (!this.input) {
            return;
        }
        this.input.nativeElement.checked = value ? true : null;
    }
    /**
     * @return {?}
     */
    get selected() {
        if (!this.input) {
            return;
        }
        return this.input.nativeElement.checked;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        this.change.emit(event);
    }
}
SelectionTile.tileCount = 0;
SelectionTile.decorators = [
    { type: Component, args: [{
                selector: "ibm-selection-tile",
                template: `
		<label
			class="bx--tile bx--tile--selectable"
			tabindex="0"
			[for]="id"
			[ngClass]="{'bx--tile--is-selected' : selected}"
			[attr.aria-label]="i18n.get('TILES.TILE') | async">
			<input
				#input
				tabindex="-1"
				class="bx--tile-input"
				[id]="id"
				[type]="(multiple ? 'checkbox': 'radio')"
				[value]="value"
				[name]="name"
				(change)="onChange($event)"/>
			<div class="bx--tile__checkmark">
				<svg width="16" height="16" viewBox="0 0 16 16">
					<path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.646-10.854L6.75 10.043 4.354 7.646l-.708.708 3.104 3.103 5.604-5.603-.708-.708z"
						fill-rule="evenodd"/>
				</svg>
			</div>
			<div class="bx--tile-content">
				<ng-content></ng-content>
			</div>
		</label>
	`
            }] }
];
/** @nocollapse */
SelectionTile.ctorParameters = () => [
    { type: I18n }
];
SelectionTile.propDecorators = {
    id: [{ type: Input }],
    selected: [{ type: Input }],
    value: [{ type: Input }],
    change: [{ type: Output }],
    input: [{ type: ViewChild, args: ["input",] }]
};
function SelectionTile_tsickle_Closure_declarations() {
    /** @type {?} */
    SelectionTile.tileCount;
    /**
     * The unique id for the input.
     * @type {?}
     */
    SelectionTile.prototype.id;
    /**
     * The value for the tile. Returned via `ngModel` or `selected` event on the containing `TileGroup`.
     * @type {?}
     */
    SelectionTile.prototype.value;
    /**
     * Internal event used to notify the containing `TileGroup` of changes.
     * @type {?}
     */
    SelectionTile.prototype.change;
    /**
     * Set by the containing `TileGroup`. Used for the `name` property on the input.
     * @type {?}
     */
    SelectionTile.prototype.name;
    /**
     * Defines whether or not the `SelectionTile` supports selecting multiple tiles as opposed to single
     * tile selection.
     * @type {?}
     */
    SelectionTile.prototype.multiple;
    /** @type {?} */
    SelectionTile.prototype.input;
    /** @type {?} */
    SelectionTile.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLXRpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbInRpbGVzL3NlbGVjdGlvbi10aWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixTQUFTLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBZ0M3QyxNQUFNOzs7O0lBd0NMLFlBQW1CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNOzs7O2tCQW5DZixRQUFRLGFBQWEsQ0FBQyxTQUFTLEVBQUU7Ozs7c0JBcUJQLElBQUksWUFBWSxFQUFFO1FBZXpELGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztLQUMxQjs7Ozs7OztJQWhDRCxJQUFhLFFBQVEsQ0FBQyxLQUFjO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0tBQ3ZEOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDNUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7S0FDeEM7Ozs7O0lBMEJELFFBQVEsQ0FBQyxLQUFLO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEI7OzBCQTdDa0IsQ0FBQzs7WUEvQnBCLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMEJUO2FBQ0Q7Ozs7WUEvQlEsSUFBSTs7O2lCQXFDWCxLQUFLO3VCQUtMLEtBQUs7b0JBWUwsS0FBSztxQkFJTCxNQUFNO29CQVlOLFNBQVMsU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdFZpZXdDaGlsZFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEkxOG4gfSBmcm9tIFwiLi8uLi9pMThuL2kxOG4ubW9kdWxlXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tc2VsZWN0aW9uLXRpbGVcIixcblx0dGVtcGxhdGU6IGBcblx0XHQ8bGFiZWxcblx0XHRcdGNsYXNzPVwiYngtLXRpbGUgYngtLXRpbGUtLXNlbGVjdGFibGVcIlxuXHRcdFx0dGFiaW5kZXg9XCIwXCJcblx0XHRcdFtmb3JdPVwiaWRcIlxuXHRcdFx0W25nQ2xhc3NdPVwieydieC0tdGlsZS0taXMtc2VsZWN0ZWQnIDogc2VsZWN0ZWR9XCJcblx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwiaTE4bi5nZXQoJ1RJTEVTLlRJTEUnKSB8IGFzeW5jXCI+XG5cdFx0XHQ8aW5wdXRcblx0XHRcdFx0I2lucHV0XG5cdFx0XHRcdHRhYmluZGV4PVwiLTFcIlxuXHRcdFx0XHRjbGFzcz1cImJ4LS10aWxlLWlucHV0XCJcblx0XHRcdFx0W2lkXT1cImlkXCJcblx0XHRcdFx0W3R5cGVdPVwiKG11bHRpcGxlID8gJ2NoZWNrYm94JzogJ3JhZGlvJylcIlxuXHRcdFx0XHRbdmFsdWVdPVwidmFsdWVcIlxuXHRcdFx0XHRbbmFtZV09XCJuYW1lXCJcblx0XHRcdFx0KGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIvPlxuXHRcdFx0PGRpdiBjbGFzcz1cImJ4LS10aWxlX19jaGVja21hcmtcIj5cblx0XHRcdFx0PHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk04IDE2QTggOCAwIDEgMSA4IDBhOCA4IDAgMCAxIDAgMTZ6bTMuNjQ2LTEwLjg1NEw2Ljc1IDEwLjA0MyA0LjM1NCA3LjY0NmwtLjcwOC43MDggMy4xMDQgMy4xMDMgNS42MDQtNS42MDMtLjcwOC0uNzA4elwiXG5cdFx0XHRcdFx0XHRmaWxsLXJ1bGU9XCJldmVub2RkXCIvPlxuXHRcdFx0XHQ8L3N2Zz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImJ4LS10aWxlLWNvbnRlbnRcIj5cblx0XHRcdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9sYWJlbD5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25UaWxlIHtcblx0c3RhdGljIHRpbGVDb3VudCA9IDA7XG5cdC8qKlxuXHQgKiBUaGUgdW5pcXVlIGlkIGZvciB0aGUgaW5wdXQuXG5cdCAqL1xuXHRASW5wdXQoKSBpZCA9IGB0aWxlLSR7U2VsZWN0aW9uVGlsZS50aWxlQ291bnR9YDtcblx0LyoqXG5cdCAqIFVwZGF0aW5nIHRoZSBzdGF0ZSBvZiB0aGUgaW5wdXQgdG8gbWF0Y2ggdGhlIHN0YXRlIG9mIHRoZSBwYXJhbWV0ZXIgcGFzc2VkIGluLlxuXHQgKiBTZXQgdG8gYHRydWVgIGlmIHRoaXMgdGlsZSBzaG91bGQgYmUgc2VsZWN0ZWQuXG5cdCAqL1xuXHRASW5wdXQoKSBzZXQgc2VsZWN0ZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHRpZiAoIXRoaXMuaW5wdXQpIHsgcmV0dXJuOyB9XG5cdFx0dGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmNoZWNrZWQgPSB2YWx1ZSA/IHRydWUgOiBudWxsO1xuXHR9XG5cblx0Z2V0IHNlbGVjdGVkKCkge1xuXHRcdGlmICghdGhpcy5pbnB1dCkgeyByZXR1cm47IH1cblx0XHRyZXR1cm4gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmNoZWNrZWQ7XG5cdH1cblx0LyoqXG5cdCAqIFRoZSB2YWx1ZSBmb3IgdGhlIHRpbGUuIFJldHVybmVkIHZpYSBgbmdNb2RlbGAgb3IgYHNlbGVjdGVkYCBldmVudCBvbiB0aGUgY29udGFpbmluZyBgVGlsZUdyb3VwYC5cblx0ICovXG5cdEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG5cdC8qKlxuXHQgKiBJbnRlcm5hbCBldmVudCB1c2VkIHRvIG5vdGlmeSB0aGUgY29udGFpbmluZyBgVGlsZUdyb3VwYCBvZiBjaGFuZ2VzLlxuXHQgKi9cblx0QE91dHB1dCgpIGNoYW5nZTogRXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvKipcblx0ICogU2V0IGJ5IHRoZSBjb250YWluaW5nIGBUaWxlR3JvdXBgLiBVc2VkIGZvciB0aGUgYG5hbWVgIHByb3BlcnR5IG9uIHRoZSBpbnB1dC5cblx0ICovXG5cdG5hbWU6IHN0cmluZztcblx0LyoqXG5cdCAqIERlZmluZXMgd2hldGhlciBvciBub3QgdGhlIGBTZWxlY3Rpb25UaWxlYCBzdXBwb3J0cyBzZWxlY3RpbmcgbXVsdGlwbGUgdGlsZXMgYXMgb3Bwb3NlZCB0byBzaW5nbGVcblx0ICogdGlsZSBzZWxlY3Rpb24uXG5cdCAqL1xuXHRtdWx0aXBsZTogYm9vbGVhbjtcblxuXHRAVmlld0NoaWxkKFwiaW5wdXRcIikgaW5wdXQ7XG5cblx0Y29uc3RydWN0b3IocHVibGljIGkxOG46IEkxOG4pIHtcblx0XHRTZWxlY3Rpb25UaWxlLnRpbGVDb3VudCsrO1xuXHR9XG5cblx0b25DaGFuZ2UoZXZlbnQpIHtcblx0XHR0aGlzLmNoYW5nZS5lbWl0KGV2ZW50KTtcblx0fVxufVxuXG5cbiJdfQ==