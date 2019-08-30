/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ElementRef, HostBinding, TemplateRef, ViewChild } from "@angular/core";
/**
 * [See demo](../../?path=/story/input--label)
 *
 * ```html
 * <ibm-label labelState="success">
 * 	<label label>Field with success</label>
 * 	<input type="text" class="input-field">
 * </ibm-label>
 *
 * <ibm-label labelState="warning">
 * 	<label label>Field with warning</label>
 * 	<input type="text" class="input-field">
 * </ibm-label>
 *
 * <ibm-label labelState="error">
 * 	<label label>Field with error</label>
 * 	<input type="text" class="input-field">
 * </ibm-label>
 * ```
 *
 * <example-url>../../iframe.html?id=input--label</example-url>
 */
export class Label {
    /**
     * Creates an instance of Label.
     */
    constructor() {
        /**
         * The id of the input item associated with the `Label`. This value is also used to associate the `Label` with
         * its input counterpart through the 'for' attribute.
         */
        this.labelInputID = "ibm-label-" + Label.labelCounter;
        /**
         * State of the `Label` will determine the styles applied.
         */
        this.labelState = "";
        /**
         * Set to `true` for a loading label.
         */
        this.skeleton = false;
        /**
         * Set to `true` for an invalid label component.
         */
        this.invalid = false;
        this.labelClass = true;
        Label.labelCounter++;
    }
    /**
     * Sets the id on the input item associated with the `Label`.
     * @return {?}
     */
    ngAfterContentInit() {
        this.wrapper.nativeElement.querySelector("input,textarea,div").setAttribute("id", this.labelInputID);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isTemplate(value) {
        return value instanceof TemplateRef;
    }
}
/**
 * Used to build the id of the input item associated with the `Label`.
 */
Label.labelCounter = 0;
Label.decorators = [
    { type: Component, args: [{
                selector: "ibm-label",
                template: `
		<label
			[for]="labelInputID"
			class="bx--label"
			[ngClass]="{
				'bx--skeleton': skeleton
			}">
			<ng-content></ng-content>
		</label>
		<div *ngIf="!skeleton" class="bx--form__helper-text">{{helperText}}</div>
		<div class="bx--text-input__field-wrapper" [attr.data-invalid]="(invalid ? true : null)" #wrapper>
			<ibm-icon-warning-filled16
				*ngIf="invalid"
				class="bx--text-input__invalid-icon bx--text-area__invalid-icon">
			</ibm-icon-warning-filled16>
			<ng-content select="input,textarea,div"></ng-content>
		</div>
		<div *ngIf="invalid" class="bx--form-requirement">
			<ng-container *ngIf="!isTemplate(invalidText)">{{invalidText}}</ng-container>
			<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
		</div>
	`
            }] }
];
/** @nocollapse */
Label.ctorParameters = () => [];
Label.propDecorators = {
    labelState: [{ type: Input }],
    skeleton: [{ type: Input }],
    helperText: [{ type: Input }],
    invalidText: [{ type: Input }],
    invalid: [{ type: Input }],
    wrapper: [{ type: ViewChild, args: ["wrapper",] }],
    labelClass: [{ type: HostBinding, args: ["class.bx--form-item",] }]
};
function Label_tsickle_Closure_declarations() {
    /**
     * Used to build the id of the input item associated with the `Label`.
     * @type {?}
     */
    Label.labelCounter;
    /**
     * The id of the input item associated with the `Label`. This value is also used to associate the `Label` with
     * its input counterpart through the 'for' attribute.
     * @type {?}
     */
    Label.prototype.labelInputID;
    /**
     * State of the `Label` will determine the styles applied.
     * @type {?}
     */
    Label.prototype.labelState;
    /**
     * Set to `true` for a loading label.
     * @type {?}
     */
    Label.prototype.skeleton;
    /**
     * Optional helper text that appears under the label.
     * @type {?}
     */
    Label.prototype.helperText;
    /**
     * Sets the invalid text.
     * @type {?}
     */
    Label.prototype.invalidText;
    /**
     * Set to `true` for an invalid label component.
     * @type {?}
     */
    Label.prototype.invalid;
    /** @type {?} */
    Label.prototype.wrapper;
    /** @type {?} */
    Label.prototype.labelClass;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbImlucHV0L2xhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBRUwsVUFBVSxFQUNWLFdBQVcsRUFDWCxXQUFXLEVBQ1gsU0FBUyxFQUNULE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlEdkIsTUFBTTs7OztJQXVDTDs7Ozs7NEJBOUJlLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWTs7OzswQkFLWSxFQUFFOzs7O3dCQUkxQyxLQUFLOzs7O3VCQVlOLEtBQUs7MEJBSXlCLElBQUk7UUFNcEQsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3JCOzs7OztJQUtELGtCQUFrQjtRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUNyRzs7Ozs7SUFFTSxVQUFVLENBQUMsS0FBSztRQUN0QixPQUFPLEtBQUssWUFBWSxXQUFXLENBQUM7Ozs7OztxQkEvQ2YsQ0FBQzs7WUE3QnZCLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFxQlQ7YUFDRDs7Ozs7eUJBZUMsS0FBSzt1QkFJTCxLQUFLO3lCQUlMLEtBQUs7MEJBSUwsS0FBSztzQkFJTCxLQUFLO3NCQUVMLFNBQVMsU0FBQyxTQUFTO3lCQUVuQixXQUFXLFNBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0QWZ0ZXJDb250ZW50SW5pdCxcblx0RWxlbWVudFJlZixcblx0SG9zdEJpbmRpbmcsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3Q2hpbGRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuLyoqXG4gKiBbU2VlIGRlbW9dKC4uLy4uLz9wYXRoPS9zdG9yeS9pbnB1dC0tbGFiZWwpXG4gKlxuICogYGBgaHRtbFxuICogPGlibS1sYWJlbCBsYWJlbFN0YXRlPVwic3VjY2Vzc1wiPlxuICogXHQ8bGFiZWwgbGFiZWw+RmllbGQgd2l0aCBzdWNjZXNzPC9sYWJlbD5cbiAqIFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICogPC9pYm0tbGFiZWw+XG4gKlxuICogPGlibS1sYWJlbCBsYWJlbFN0YXRlPVwid2FybmluZ1wiPlxuICogXHQ8bGFiZWwgbGFiZWw+RmllbGQgd2l0aCB3YXJuaW5nPC9sYWJlbD5cbiAqIFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICogPC9pYm0tbGFiZWw+XG4gKlxuICogPGlibS1sYWJlbCBsYWJlbFN0YXRlPVwiZXJyb3JcIj5cbiAqIFx0PGxhYmVsIGxhYmVsPkZpZWxkIHdpdGggZXJyb3I8L2xhYmVsPlxuICogXHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0LWZpZWxkXCI+XG4gKiA8L2libS1sYWJlbD5cbiAqIGBgYFxuICpcbiAqIDxleGFtcGxlLXVybD4uLi8uLi9pZnJhbWUuaHRtbD9pZD1pbnB1dC0tbGFiZWw8L2V4YW1wbGUtdXJsPlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLWxhYmVsXCIsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGxhYmVsXG5cdFx0XHRbZm9yXT1cImxhYmVsSW5wdXRJRFwiXG5cdFx0XHRjbGFzcz1cImJ4LS1sYWJlbFwiXG5cdFx0XHRbbmdDbGFzc109XCJ7XG5cdFx0XHRcdCdieC0tc2tlbGV0b24nOiBza2VsZXRvblxuXHRcdFx0fVwiPlxuXHRcdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHRcdDwvbGFiZWw+XG5cdFx0PGRpdiAqbmdJZj1cIiFza2VsZXRvblwiIGNsYXNzPVwiYngtLWZvcm1fX2hlbHBlci10ZXh0XCI+e3toZWxwZXJUZXh0fX08L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiYngtLXRleHQtaW5wdXRfX2ZpZWxkLXdyYXBwZXJcIiBbYXR0ci5kYXRhLWludmFsaWRdPVwiKGludmFsaWQgPyB0cnVlIDogbnVsbClcIiAjd3JhcHBlcj5cblx0XHRcdDxpYm0taWNvbi13YXJuaW5nLWZpbGxlZDE2XG5cdFx0XHRcdCpuZ0lmPVwiaW52YWxpZFwiXG5cdFx0XHRcdGNsYXNzPVwiYngtLXRleHQtaW5wdXRfX2ludmFsaWQtaWNvbiBieC0tdGV4dC1hcmVhX19pbnZhbGlkLWljb25cIj5cblx0XHRcdDwvaWJtLWljb24td2FybmluZy1maWxsZWQxNj5cblx0XHRcdDxuZy1jb250ZW50IHNlbGVjdD1cImlucHV0LHRleHRhcmVhLGRpdlwiPjwvbmctY29udGVudD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2ICpuZ0lmPVwiaW52YWxpZFwiIGNsYXNzPVwiYngtLWZvcm0tcmVxdWlyZW1lbnRcIj5cblx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNUZW1wbGF0ZShpbnZhbGlkVGV4dClcIj57e2ludmFsaWRUZXh0fX08L25nLWNvbnRhaW5lcj5cblx0XHRcdDxuZy10ZW1wbGF0ZSAqbmdJZj1cImlzVGVtcGxhdGUoaW52YWxpZFRleHQpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiaW52YWxpZFRleHRcIj48L25nLXRlbXBsYXRlPlxuXHRcdDwvZGl2PlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIExhYmVsIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cdC8qKlxuXHQgKiBVc2VkIHRvIGJ1aWxkIHRoZSBpZCBvZiB0aGUgaW5wdXQgaXRlbSBhc3NvY2lhdGVkIHdpdGggdGhlIGBMYWJlbGAuXG5cdCAqL1xuXHRzdGF0aWMgbGFiZWxDb3VudGVyID0gMDtcblx0LyoqXG5cdCAqIFRoZSBpZCBvZiB0aGUgaW5wdXQgaXRlbSBhc3NvY2lhdGVkIHdpdGggdGhlIGBMYWJlbGAuIFRoaXMgdmFsdWUgaXMgYWxzbyB1c2VkIHRvIGFzc29jaWF0ZSB0aGUgYExhYmVsYCB3aXRoXG5cdCAqIGl0cyBpbnB1dCBjb3VudGVycGFydCB0aHJvdWdoIHRoZSAnZm9yJyBhdHRyaWJ1dGUuXG5cdCAqL1xuXHRsYWJlbElucHV0SUQgPSBcImlibS1sYWJlbC1cIiArIExhYmVsLmxhYmVsQ291bnRlcjtcblxuXHQvKipcblx0ICogU3RhdGUgb2YgdGhlIGBMYWJlbGAgd2lsbCBkZXRlcm1pbmUgdGhlIHN0eWxlcyBhcHBsaWVkLlxuXHQgKi9cblx0QElucHV0KCkgbGFiZWxTdGF0ZTogXCJzdWNjZXNzXCIgfCBcIndhcm5pbmdcIiB8IFwiZXJyb3JcIiB8IFwiXCIgPSBcIlwiO1xuXHQvKipcblx0ICogU2V0IHRvIGB0cnVlYCBmb3IgYSBsb2FkaW5nIGxhYmVsLlxuXHQgKi9cblx0QElucHV0KCkgc2tlbGV0b24gPSBmYWxzZTtcblx0LyoqXG5cdCAqIE9wdGlvbmFsIGhlbHBlciB0ZXh0IHRoYXQgYXBwZWFycyB1bmRlciB0aGUgbGFiZWwuXG5cdCAqL1xuXHRASW5wdXQoKSBoZWxwZXJUZXh0OiBzdHJpbmc7XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBpbnZhbGlkIHRleHQuXG5cdCAqL1xuXHRASW5wdXQoKSBpbnZhbGlkVGV4dDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pjtcblx0LyoqXG5cdCAqIFNldCB0byBgdHJ1ZWAgZm9yIGFuIGludmFsaWQgbGFiZWwgY29tcG9uZW50LlxuXHQgKi9cblx0QElucHV0KCkgaW52YWxpZCA9IGZhbHNlO1xuXG5cdEBWaWV3Q2hpbGQoXCJ3cmFwcGVyXCIpIHdyYXBwZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuXG5cdEBIb3N0QmluZGluZyhcImNsYXNzLmJ4LS1mb3JtLWl0ZW1cIikgbGFiZWxDbGFzcyA9IHRydWU7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTGFiZWwuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRMYWJlbC5sYWJlbENvdW50ZXIrKztcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBpZCBvbiB0aGUgaW5wdXQgaXRlbSBhc3NvY2lhdGVkIHdpdGggdGhlIGBMYWJlbGAuXG5cdCAqL1xuXHRuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cdFx0dGhpcy53cmFwcGVyLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0LHRleHRhcmVhLGRpdlwiKS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0aGlzLmxhYmVsSW5wdXRJRCk7XG5cdH1cblxuXHRwdWJsaWMgaXNUZW1wbGF0ZSh2YWx1ZSkge1xuXHRcdHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuXHR9XG59XG4iXX0=