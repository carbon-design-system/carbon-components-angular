/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef, TemplateRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
export class DatePickerInput {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        /**
         * Select a calendar type for the `model`.
         * Internal purposes only.
         */
        this.type = "simple";
        this.id = `datepicker-${DatePickerInput.datePickerCount++}`;
        this.hasIcon = false;
        this.placeholder = "mm/dd/yyyy";
        this.pattern = "^\\d{1,2}/\\d{1,2}/\\d{4}$";
        this.valueChange = new EventEmitter();
        this.theme = "dark";
        this.disabled = false;
        this.invalid = false;
        this.skeleton = false;
        this.value = "";
        this.onTouched = () => { };
        this.propagateChange = (_) => { };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        this.value = event.target.value;
        this.valueChange.emit(this.value);
        this.propagateChange(this.value);
        this.onTouched();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isTemplate(value) {
        return value instanceof TemplateRef;
    }
}
DatePickerInput.datePickerCount = 0;
DatePickerInput.decorators = [
    { type: Component, args: [{
                selector: "ibm-date-picker-input",
                template: `
	<div class="bx--form-item">
		<div class="bx--date-picker"
			[ngClass]="{
				'bx--date-picker--single' : type === 'single',
				'bx--date-picker--range' : type === 'range',
				'bx--date-picker--light' : theme === 'light',
				'bx--skeleton' : skeleton
			}">
			<div class="bx--date-picker-container">
				<label *ngIf="label" [for]="id" class="bx--label">
					<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
					<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
				</label>
				<div class="bx--date-picker-input__wrapper">
					<input
						*ngIf="!skeleton"
						autocomplete="off"
						type="text"
						class="bx--date-picker__input"
						[value]="value"
						[pattern]="pattern"
						[placeholder]="placeholder"
						[id]= "id"
						[disabled]="disabled"
						(change)="onChange($event)"/>
						<ibm-icon-calendar16
							class="bx--date-picker__icon">
						</ibm-icon-calendar16>
				</div>
				<div *ngIf="invalid" class="bx--form-requirement">
					<ng-container *ngIf="!isTemplate(invalidText)">{{invalidText}}</ng-container>
					<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
				</div>
			</div>
		</div>
	</div>
	`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: DatePickerInput,
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
DatePickerInput.ctorParameters = () => [
    { type: ElementRef }
];
DatePickerInput.propDecorators = {
    type: [{ type: Input }],
    id: [{ type: Input }],
    hasIcon: [{ type: Input }],
    label: [{ type: Input }],
    placeholder: [{ type: Input }],
    pattern: [{ type: Input }],
    valueChange: [{ type: Output }],
    theme: [{ type: Input }],
    disabled: [{ type: Input }],
    invalid: [{ type: Input }],
    invalidText: [{ type: Input }],
    skeleton: [{ type: Input }],
    value: [{ type: Input }]
};
function DatePickerInput_tsickle_Closure_declarations() {
    /** @type {?} */
    DatePickerInput.datePickerCount;
    /**
     * Select a calendar type for the `model`.
     * Internal purposes only.
     * @type {?}
     */
    DatePickerInput.prototype.type;
    /** @type {?} */
    DatePickerInput.prototype.id;
    /** @type {?} */
    DatePickerInput.prototype.hasIcon;
    /** @type {?} */
    DatePickerInput.prototype.label;
    /** @type {?} */
    DatePickerInput.prototype.placeholder;
    /** @type {?} */
    DatePickerInput.prototype.pattern;
    /** @type {?} */
    DatePickerInput.prototype.valueChange;
    /** @type {?} */
    DatePickerInput.prototype.theme;
    /** @type {?} */
    DatePickerInput.prototype.disabled;
    /** @type {?} */
    DatePickerInput.prototype.invalid;
    /** @type {?} */
    DatePickerInput.prototype.invalidText;
    /** @type {?} */
    DatePickerInput.prototype.skeleton;
    /** @type {?} */
    DatePickerInput.prototype.value;
    /** @type {?} */
    DatePickerInput.prototype.onTouched;
    /** @type {?} */
    DatePickerInput.prototype.propagateChange;
    /** @type {?} */
    DatePickerInput.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0ZXBpY2tlci1pbnB1dC9kYXRlcGlja2VyLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBa0RuRCxNQUFNOzs7O0lBaUNMLFlBQXNCLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7Ozs7O29CQTFCRyxRQUFRO2tCQUV6QyxjQUFjLGVBQWUsQ0FBQyxlQUFlLEVBQUUsRUFBRTt1QkFFNUMsS0FBSzsyQkFJRCxZQUFZO3VCQUVoQiw0QkFBNEI7MkJBRUQsSUFBSSxZQUFZLEVBQUU7cUJBRTdCLE1BQU07d0JBRXJCLEtBQUs7dUJBRU4sS0FBSzt3QkFJSixLQUFLO3FCQUVSLEVBQUU7eUJBdUJJLEdBQUcsRUFBRSxJQUFHOytCQUViLENBQUMsQ0FBTSxFQUFFLEVBQUUsSUFBRztLQXZCZ0I7Ozs7O0lBRWhELFFBQVEsQ0FBQyxLQUFLO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQ2pCOzs7OztJQUVNLFVBQVUsQ0FBQyxLQUFVO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOzs7Ozs7SUFHYixnQkFBZ0IsQ0FBQyxFQUFPO1FBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDOzs7Ozs7SUFHcEIsaUJBQWlCLENBQUMsRUFBTztRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzs7Ozs7O0lBT2QsVUFBVSxDQUFDLEtBQUs7UUFDdEIsT0FBTyxLQUFLLFlBQVksV0FBVyxDQUFDOzs7a0NBMURKLENBQUM7O1lBakRsQyxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBcUNUO2dCQUNELFNBQVMsRUFBRTtvQkFDVjt3QkFDQyxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsZUFBZTt3QkFDNUIsS0FBSyxFQUFFLElBQUk7cUJBQ1g7aUJBQ0Q7YUFDRDs7OztZQXBEQSxVQUFVOzs7bUJBNERULEtBQUs7aUJBRUwsS0FBSztzQkFFTCxLQUFLO29CQUVMLEtBQUs7MEJBRUwsS0FBSztzQkFFTCxLQUFLOzBCQUVMLE1BQU07b0JBRU4sS0FBSzt1QkFFTCxLQUFLO3NCQUVMLEtBQUs7MEJBRUwsS0FBSzt1QkFFTCxLQUFLO29CQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0RWxlbWVudFJlZixcblx0VGVtcGxhdGVSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJpYm0tZGF0ZS1waWNrZXItaW5wdXRcIixcblx0dGVtcGxhdGU6IGBcblx0PGRpdiBjbGFzcz1cImJ4LS1mb3JtLWl0ZW1cIj5cblx0XHQ8ZGl2IGNsYXNzPVwiYngtLWRhdGUtcGlja2VyXCJcblx0XHRcdFtuZ0NsYXNzXT1cIntcblx0XHRcdFx0J2J4LS1kYXRlLXBpY2tlci0tc2luZ2xlJyA6IHR5cGUgPT09ICdzaW5nbGUnLFxuXHRcdFx0XHQnYngtLWRhdGUtcGlja2VyLS1yYW5nZScgOiB0eXBlID09PSAncmFuZ2UnLFxuXHRcdFx0XHQnYngtLWRhdGUtcGlja2VyLS1saWdodCcgOiB0aGVtZSA9PT0gJ2xpZ2h0Jyxcblx0XHRcdFx0J2J4LS1za2VsZXRvbicgOiBza2VsZXRvblxuXHRcdFx0fVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImJ4LS1kYXRlLXBpY2tlci1jb250YWluZXJcIj5cblx0XHRcdFx0PGxhYmVsICpuZ0lmPVwibGFiZWxcIiBbZm9yXT1cImlkXCIgY2xhc3M9XCJieC0tbGFiZWxcIj5cblx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzVGVtcGxhdGUobGFiZWwpXCI+e3tsYWJlbH19PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlICpuZ0lmPVwiaXNUZW1wbGF0ZShsYWJlbClcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJsYWJlbFwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJieC0tZGF0ZS1waWNrZXItaW5wdXRfX3dyYXBwZXJcIj5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdCpuZ0lmPVwiIXNrZWxldG9uXCJcblx0XHRcdFx0XHRcdGF1dG9jb21wbGV0ZT1cIm9mZlwiXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cImJ4LS1kYXRlLXBpY2tlcl9faW5wdXRcIlxuXHRcdFx0XHRcdFx0W3ZhbHVlXT1cInZhbHVlXCJcblx0XHRcdFx0XHRcdFtwYXR0ZXJuXT1cInBhdHRlcm5cIlxuXHRcdFx0XHRcdFx0W3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcblx0XHRcdFx0XHRcdFtpZF09IFwiaWRcIlxuXHRcdFx0XHRcdFx0W2Rpc2FibGVkXT1cImRpc2FibGVkXCJcblx0XHRcdFx0XHRcdChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiLz5cblx0XHRcdFx0XHRcdDxpYm0taWNvbi1jYWxlbmRhcjE2XG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiYngtLWRhdGUtcGlja2VyX19pY29uXCI+XG5cdFx0XHRcdFx0XHQ8L2libS1pY29uLWNhbGVuZGFyMTY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaW52YWxpZFwiIGNsYXNzPVwiYngtLWZvcm0tcmVxdWlyZW1lbnRcIj5cblx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzVGVtcGxhdGUoaW52YWxpZFRleHQpXCI+e3tpbnZhbGlkVGV4dH19PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlICpuZ0lmPVwiaXNUZW1wbGF0ZShpbnZhbGlkVGV4dClcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJpbnZhbGlkVGV4dFwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXHRgLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHRcdHVzZUV4aXN0aW5nOiBEYXRlUGlja2VySW5wdXQsXG5cdFx0XHRtdWx0aTogdHJ1ZVxuXHRcdH1cblx0XVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VySW5wdXQge1xuXHRwcml2YXRlIHN0YXRpYyBkYXRlUGlja2VyQ291bnQgPSAwO1xuXG5cdC8qKlxuXHQgKiBTZWxlY3QgYSBjYWxlbmRhciB0eXBlIGZvciB0aGUgYG1vZGVsYC5cblx0ICogSW50ZXJuYWwgcHVycG9zZXMgb25seS5cblx0ICovXG5cdEBJbnB1dCgpIHR5cGU6IFwic2ltcGxlXCIgfCBcInNpbmdsZVwiIHwgXCJyYW5nZVwiID0gXCJzaW1wbGVcIjtcblxuXHRASW5wdXQoKSBpZCA9IGBkYXRlcGlja2VyLSR7RGF0ZVBpY2tlcklucHV0LmRhdGVQaWNrZXJDb3VudCsrfWA7XG5cblx0QElucHV0KCkgaGFzSWNvbiA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gXCJtbS9kZC95eXl5XCI7XG5cblx0QElucHV0KCkgcGF0dGVybiA9IFwiXlxcXFxkezEsMn0vXFxcXGR7MSwyfS9cXFxcZHs0fSRcIjtcblxuXHRAT3V0cHV0KCkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBJbnB1dCgpIHRoZW1lOiBcImxpZ2h0XCIgfCBcImRhcmtcIiA9IFwiZGFya1wiO1xuXG5cdEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG5cblx0QElucHV0KCkgaW52YWxpZCA9IGZhbHNlO1xuXG5cdEBJbnB1dCgpIGludmFsaWRUZXh0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdEBJbnB1dCgpIHNrZWxldG9uID0gZmFsc2U7XG5cblx0QElucHV0KCkgdmFsdWUgPSBcIlwiO1xuXG5cdGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG5cdG9uQ2hhbmdlKGV2ZW50KSB7XG5cdFx0dGhpcy52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHR0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG5cdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy52YWx1ZSk7XG5cdFx0dGhpcy5vblRvdWNoZWQoKTtcblx0fVxuXG5cdHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHRwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG5cdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcblx0fVxuXG5cdHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSBmbjtcblx0fVxuXG5cdG9uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4ge307XG5cblx0cHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG5cblx0cHVibGljIGlzVGVtcGxhdGUodmFsdWUpIHtcblx0XHRyZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcblx0fVxufVxuIl19