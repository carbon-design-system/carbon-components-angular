/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostBinding } from "@angular/core";
import { Select } from "../select/select.component";
/**
 * [See demo](../../?path=/story/time-picker-select--simple)
 *
 * <example-url>../../iframe.html?id=time-picker-select--simple</example-url>
 */
export class TimePickerSelect extends Select {
    constructor() {
        super(...arguments);
        this.timeSelect = true;
        this.timePickerSelect = true;
        this.id = `timepicker-select-${TimePickerSelect.selectCount++}`;
        /**
         * Set to true for a loading select.
         */
        this.skeleton = false;
        /**
         * `light` or `dark` select theme
         */
        this.theme = "dark";
        this.timePickerSelectSkeleton = this.skeleton;
        this.valueChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get timePickerSelectLight() {
        return this.theme === "light";
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        this.valueChange.emit(event.target.value);
    }
}
TimePickerSelect.decorators = [
    { type: Component, args: [{
                selector: "ibm-timepicker-select",
                template: `
			<label *ngIf="!skeleton && label" [attr.for]="id" class="bx--label bx--visually-hidden">{{label}}</label>
			<select
				#select
				[attr.id]="id"
				[disabled]="disabled"
				(change)="onChange($event)"
				class="bx--select-input">
				<ng-content></ng-content>
			</select>
			<ibm-icon-chevron-down16 *ngIf="!skeleton" class="bx--select__arrow"></ibm-icon-chevron-down16>
	`
            }] }
];
TimePickerSelect.propDecorators = {
    timeSelect: [{ type: HostBinding, args: ["class.bx--select",] }],
    timePickerSelect: [{ type: HostBinding, args: ["class.bx--time-picker__select",] }],
    id: [{ type: Input }],
    skeleton: [{ type: Input }],
    theme: [{ type: Input }],
    label: [{ type: Input }],
    timePickerSelectSkeleton: [{ type: HostBinding, args: ["class.bx--skeleton",] }],
    timePickerSelectLight: [{ type: HostBinding, args: ["class.bx--select--light",] }],
    valueChange: [{ type: Output }]
};
function TimePickerSelect_tsickle_Closure_declarations() {
    /** @type {?} */
    TimePickerSelect.prototype.timeSelect;
    /** @type {?} */
    TimePickerSelect.prototype.timePickerSelect;
    /** @type {?} */
    TimePickerSelect.prototype.id;
    /**
     * Set to true for a loading select.
     * @type {?}
     */
    TimePickerSelect.prototype.skeleton;
    /**
     * `light` or `dark` select theme
     * @type {?}
     */
    TimePickerSelect.prototype.theme;
    /** @type {?} */
    TimePickerSelect.prototype.label;
    /** @type {?} */
    TimePickerSelect.prototype.timePickerSelectSkeleton;
    /** @type {?} */
    TimePickerSelect.prototype.valueChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbInRpbWVwaWNrZXItc2VsZWN0L3RpbWVwaWNrZXItc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixXQUFXLEVBRVgsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7QUFzQnBELE1BQU0sdUJBQXdCLFNBQVEsTUFBTTs7OzBCQUNHLElBQUk7Z0NBQ2UsSUFBSTtrQkFFdkQscUJBQXFCLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxFQUFFOzs7O3dCQUsvQyxLQUFLOzs7O3FCQUtVLE1BQU07d0NBSXFCLElBQUksQ0FBQyxRQUFROzJCQU03QixJQUFJLFlBQVksRUFBRTs7Ozs7SUFKaEUsSUFBNEMscUJBQXFCO1FBQ2hFLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUM7S0FDOUI7Ozs7O0lBSUQsUUFBUSxDQUFDLEtBQUs7UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFDOzs7WUEzQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7RUFXVDthQUNEOzs7eUJBRUMsV0FBVyxTQUFDLGtCQUFrQjsrQkFDOUIsV0FBVyxTQUFDLCtCQUErQjtpQkFFM0MsS0FBSzt1QkFLTCxLQUFLO29CQUtMLEtBQUs7b0JBRUwsS0FBSzt1Q0FFTCxXQUFXLFNBQUMsb0JBQW9CO29DQUVoQyxXQUFXLFNBQUMseUJBQXlCOzBCQUlyQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdEhvc3RCaW5kaW5nLFxuXHRUZW1wbGF0ZVJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSBcIi4uL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50XCI7XG5cbi8qKlxuICogW1NlZSBkZW1vXSguLi8uLi8/cGF0aD0vc3RvcnkvdGltZS1waWNrZXItc2VsZWN0LS1zaW1wbGUpXG4gKlxuICogPGV4YW1wbGUtdXJsPi4uLy4uL2lmcmFtZS5odG1sP2lkPXRpbWUtcGlja2VyLXNlbGVjdC0tc2ltcGxlPC9leGFtcGxlLXVybD5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS10aW1lcGlja2VyLXNlbGVjdFwiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdFx0PGxhYmVsICpuZ0lmPVwiIXNrZWxldG9uICYmIGxhYmVsXCIgW2F0dHIuZm9yXT1cImlkXCIgY2xhc3M9XCJieC0tbGFiZWwgYngtLXZpc3VhbGx5LWhpZGRlblwiPnt7bGFiZWx9fTwvbGFiZWw+XG5cdFx0XHQ8c2VsZWN0XG5cdFx0XHRcdCNzZWxlY3Rcblx0XHRcdFx0W2F0dHIuaWRdPVwiaWRcIlxuXHRcdFx0XHRbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHQoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIlxuXHRcdFx0XHRjbGFzcz1cImJ4LS1zZWxlY3QtaW5wdXRcIj5cblx0XHRcdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHQ8aWJtLWljb24tY2hldnJvbi1kb3duMTYgKm5nSWY9XCIhc2tlbGV0b25cIiBjbGFzcz1cImJ4LS1zZWxlY3RfX2Fycm93XCI+PC9pYm0taWNvbi1jaGV2cm9uLWRvd24xNj5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBUaW1lUGlja2VyU2VsZWN0IGV4dGVuZHMgU2VsZWN0IHtcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLXNlbGVjdFwiKSB0aW1lU2VsZWN0ID0gdHJ1ZTtcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLXRpbWUtcGlja2VyX19zZWxlY3RcIikgdGltZVBpY2tlclNlbGVjdCA9IHRydWU7XG5cblx0QElucHV0KCkgaWQgPSBgdGltZXBpY2tlci1zZWxlY3QtJHtUaW1lUGlja2VyU2VsZWN0LnNlbGVjdENvdW50Kyt9YDtcblxuXHQvKipcblx0ICogU2V0IHRvIHRydWUgZm9yIGEgbG9hZGluZyBzZWxlY3QuXG5cdCAqL1xuXHRASW5wdXQoKSBza2VsZXRvbiA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBgbGlnaHRgIG9yIGBkYXJrYCBzZWxlY3QgdGhlbWVcblx0ICovXG5cdEBJbnB1dCgpIHRoZW1lOiBcImxpZ2h0XCIgfCBcImRhcmtcIiA9IFwiZGFya1wiO1xuXG5cdEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG5cblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLXNrZWxldG9uXCIpIHRpbWVQaWNrZXJTZWxlY3RTa2VsZXRvbiA9IHRoaXMuc2tlbGV0b247XG5cblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLXNlbGVjdC0tbGlnaHRcIikgZ2V0IHRpbWVQaWNrZXJTZWxlY3RMaWdodCgpIHtcblx0XHRyZXR1cm4gdGhpcy50aGVtZSA9PT0gXCJsaWdodFwiO1xuXHR9XG5cblx0QE91dHB1dCgpIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRvbkNoYW5nZShldmVudCkge1xuXHRcdHRoaXMudmFsdWVDaGFuZ2UuZW1pdChldmVudC50YXJnZXQudmFsdWUpO1xuXHR9XG59XG4iXX0=