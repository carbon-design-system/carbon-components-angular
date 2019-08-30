/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, ViewChild, ElementRef, HostListener, EventEmitter, TemplateRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
/**
 * `ibm-select` provides a styled `select` component.
 *
 * [See demo](../../?path=/story/select--basic)
 *
 * Example:
 *
 * ```
 * <ibm-select [(ngModel)]="model">
 * 	<option value="default" disabled selected hidden>Choose an option</option>
 * 	<option value="option1">Option 1</option>
 * 	<option value="option2">Option 2</option>
 * 	<option value="option3">Option 3</option>
 * </ibm-select>
 * 	```
 *
 * <example-url>../../iframe.html?id=select--basic</example-url>
 */
export class Select {
    constructor() {
        /**
         * `inline` or `default` select displays
         */
        this.display = "default";
        /**
         * Sets the unique ID. Defaults to `select-${total count of selects instantiated}`
         */
        this.id = `select-${Select.selectCount++}`;
        /**
         * Set to true to disable component.
         */
        this.disabled = false;
        /**
         * Set to true for a loading select.
         */
        this.skeleton = false;
        /**
         * Set to `true` for an invalid select component.
         */
        this.invalid = false;
        /**
         * `light` or `dark` select theme
         */
        this.theme = "dark";
        /**
         * emits the selected options `value`
         */
        this.selected = new EventEmitter();
        /**
         * placeholder declarations. Replaced by the functions provided to `registerOnChange` and `registerOnTouched`
         */
        this.onChangeHandler = (_) => { };
        this.onTouchedHandler = () => { };
    }
    /**
     * @return {?}
     */
    get value() {
        return this.select.nativeElement.value;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        this.select.nativeElement.value = v;
    }
    /**
     * Receives a value from the model.
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        this.value = obj;
    }
    /**
     * Registers a listener that notifies the model when the control updates
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeHandler = fn;
    }
    /**
     * Registers a listener that notifies the model when the control is blurred
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedHandler = fn;
    }
    /**
     * Sets the disabled state through the model
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * Handles the change event from the `select`.
     * Sends events to the change handler and emits a `selected` event.
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        this.onChangeHandler(event.target.value);
        this.selected.emit(event.target.value);
    }
    /**
     * Listens for the host blurring, and notifies the model
     * @return {?}
     */
    blur() {
        this.onTouchedHandler();
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
 * Tracks the total number of selects instantiated. Used to generate unique IDs
 */
Select.selectCount = 0;
Select.decorators = [
    { type: Component, args: [{
                selector: "ibm-select",
                template: `
		<div class="bx--form-item">
			<div
				[ngClass]="{
					'bx--select--inline': display === 'inline',
					'bx--select--light': theme === 'light',
					'bx--skeleton': skeleton
				}"
				class="bx--select"
				style="width: 100%">
				<label *ngIf="skeleton && label" [for]="id" class="bx--label bx--skeleton"></label>
				<label *ngIf="!skeleton && label" [for]="id" class="bx--label">
					<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
					<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
				</label>
				<div *ngIf="helperText" class="bx--form__helper-text">
					<ng-container *ngIf="!isTemplate(helperText)">{{helperText}}</ng-container>
					<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
				</div>
				<div class="bx--select-input__wrapper" [attr.data-invalid]="(invalid ? true : null)">
					<select
						#select
						[attr.id]="id"
						[disabled]="disabled"
						(change)="onChange($event)"
						class="bx--select-input">
						<ng-content></ng-content>
					</select>
					<ibm-icon-warning-filled16
						*ngIf="!skeleton && invalid"
						class="bx--select__invalid-icon"
						style="display: inherit;">
					</ibm-icon-warning-filled16>
					<ibm-icon-chevron-down16 *ngIf="!skeleton" class="bx--select__arrow" style="display: inherit;"></ibm-icon-chevron-down16>
				</div>
				<div *ngIf="invalid" class="bx--form-requirement">
					<ng-container *ngIf="!isTemplate(invalidText)">{{invalidText}}</ng-container>
					<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
				</div>
			</div>
		</div>
	`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: Select,
                        multi: true
                    }
                ],
                styles: [`
		[data-invalid] ~ .bx--select__arrow {
			bottom: 2.25rem;
		}
	`]
            }] }
];
Select.propDecorators = {
    display: [{ type: Input }],
    label: [{ type: Input }],
    helperText: [{ type: Input }],
    invalidText: [{ type: Input }],
    id: [{ type: Input }],
    disabled: [{ type: Input }],
    skeleton: [{ type: Input }],
    invalid: [{ type: Input }],
    theme: [{ type: Input }],
    selected: [{ type: Output }],
    select: [{ type: ViewChild, args: ["select",] }],
    blur: [{ type: HostListener, args: ["blur",] }]
};
function Select_tsickle_Closure_declarations() {
    /**
     * Tracks the total number of selects instantiated. Used to generate unique IDs
     * @type {?}
     */
    Select.selectCount;
    /**
     * `inline` or `default` select displays
     * @type {?}
     */
    Select.prototype.display;
    /**
     * Label for the select. Appears above the input.
     * @type {?}
     */
    Select.prototype.label;
    /**
     * Optional helper text that appears under the label.
     * @type {?}
     */
    Select.prototype.helperText;
    /**
     * Sets the invalid text.
     * @type {?}
     */
    Select.prototype.invalidText;
    /**
     * Sets the unique ID. Defaults to `select-${total count of selects instantiated}`
     * @type {?}
     */
    Select.prototype.id;
    /**
     * Set to true to disable component.
     * @type {?}
     */
    Select.prototype.disabled;
    /**
     * Set to true for a loading select.
     * @type {?}
     */
    Select.prototype.skeleton;
    /**
     * Set to `true` for an invalid select component.
     * @type {?}
     */
    Select.prototype.invalid;
    /**
     * `light` or `dark` select theme
     * @type {?}
     */
    Select.prototype.theme;
    /**
     * emits the selected options `value`
     * @type {?}
     */
    Select.prototype.selected;
    /** @type {?} */
    Select.prototype.select;
    /**
     * placeholder declarations. Replaced by the functions provided to `registerOnChange` and `registerOnTouched`
     * @type {?}
     */
    Select.prototype.onChangeHandler;
    /** @type {?} */
    Select.prototype.onTouchedHandler;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJzZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixXQUFXLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkV6RSxNQUFNOzs7Ozt1QkFTb0MsU0FBUzs7OztrQkFnQnBDLFVBQVUsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFOzs7O3dCQUkxQixLQUFLOzs7O3dCQUlMLEtBQUs7Ozs7dUJBSU4sS0FBSzs7OztxQkFLVyxNQUFNOzs7O3dCQUlwQixJQUFJLFlBQVksRUFBRTs7OzsrQkFnRVgsQ0FBQyxDQUFNLEVBQUUsRUFBRSxJQUFJO2dDQUNkLEdBQUcsRUFBRSxJQUFJOzs7OztJQTdEdEMsSUFBSSxLQUFLO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7S0FDdkM7Ozs7O0lBRUQsSUFBSSxLQUFLLENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7S0FDcEM7Ozs7OztJQUtELFVBQVUsQ0FBQyxHQUFRO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0tBQ2pCOzs7Ozs7SUFLRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0tBQzFCOzs7Ozs7SUFLRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7S0FDM0I7Ozs7OztJQUtELGdCQUFnQixDQUFDLFVBQW1CO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0tBQzNCOzs7Ozs7O0lBTUQsUUFBUSxDQUFDLEtBQUs7UUFDYixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN2Qzs7Ozs7SUFNRCxJQUFJO1FBQ0gsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDeEI7Ozs7O0lBRU0sVUFBVSxDQUFDLEtBQUs7UUFDdEIsT0FBTyxLQUFLLFlBQVksV0FBVyxDQUFDOzs7Ozs7cUJBcEdoQixDQUFDOztZQTdEdEIsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeUNUO2dCQU1ELFNBQVMsRUFBRTtvQkFDVjt3QkFDQyxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsTUFBTTt3QkFDbkIsS0FBSyxFQUFFLElBQUk7cUJBQ1g7aUJBQ0Q7eUJBWFE7Ozs7RUFJUjthQVFEOzs7c0JBVUMsS0FBSztvQkFJTCxLQUFLO3lCQUlMLEtBQUs7MEJBSUwsS0FBSztpQkFJTCxLQUFLO3VCQUlMLEtBQUs7dUJBSUwsS0FBSztzQkFJTCxLQUFLO29CQUtMLEtBQUs7dUJBSUwsTUFBTTtxQkFFTixTQUFTLFNBQUMsUUFBUTttQkFrRGxCLFlBQVksU0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRWaWV3Q2hpbGQsXG5cdEVsZW1lbnRSZWYsXG5cdEhvc3RMaXN0ZW5lcixcblx0RXZlbnRFbWl0dGVyLFxuXHRUZW1wbGF0ZVJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbi8qKlxuICogYGlibS1zZWxlY3RgIHByb3ZpZGVzIGEgc3R5bGVkIGBzZWxlY3RgIGNvbXBvbmVudC5cbiAqXG4gKiBbU2VlIGRlbW9dKC4uLy4uLz9wYXRoPS9zdG9yeS9zZWxlY3QtLWJhc2ljKVxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBgXG4gKiA8aWJtLXNlbGVjdCBbKG5nTW9kZWwpXT1cIm1vZGVsXCI+XG4gKiBcdDxvcHRpb24gdmFsdWU9XCJkZWZhdWx0XCIgZGlzYWJsZWQgc2VsZWN0ZWQgaGlkZGVuPkNob29zZSBhbiBvcHRpb248L29wdGlvbj5cbiAqIFx0PG9wdGlvbiB2YWx1ZT1cIm9wdGlvbjFcIj5PcHRpb24gMTwvb3B0aW9uPlxuICpcdDxvcHRpb24gdmFsdWU9XCJvcHRpb24yXCI+T3B0aW9uIDI8L29wdGlvbj5cbiAqIFx0PG9wdGlvbiB2YWx1ZT1cIm9wdGlvbjNcIj5PcHRpb24gMzwvb3B0aW9uPlxuICogPC9pYm0tc2VsZWN0PlxuICpcdGBgYFxuICpcbiAqIDxleGFtcGxlLXVybD4uLi8uLi9pZnJhbWUuaHRtbD9pZD1zZWxlY3QtLWJhc2ljPC9leGFtcGxlLXVybD5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1zZWxlY3RcIixcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGNsYXNzPVwiYngtLWZvcm0taXRlbVwiPlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRbbmdDbGFzc109XCJ7XG5cdFx0XHRcdFx0J2J4LS1zZWxlY3QtLWlubGluZSc6IGRpc3BsYXkgPT09ICdpbmxpbmUnLFxuXHRcdFx0XHRcdCdieC0tc2VsZWN0LS1saWdodCc6IHRoZW1lID09PSAnbGlnaHQnLFxuXHRcdFx0XHRcdCdieC0tc2tlbGV0b24nOiBza2VsZXRvblxuXHRcdFx0XHR9XCJcblx0XHRcdFx0Y2xhc3M9XCJieC0tc2VsZWN0XCJcblx0XHRcdFx0c3R5bGU9XCJ3aWR0aDogMTAwJVwiPlxuXHRcdFx0XHQ8bGFiZWwgKm5nSWY9XCJza2VsZXRvbiAmJiBsYWJlbFwiIFtmb3JdPVwiaWRcIiBjbGFzcz1cImJ4LS1sYWJlbCBieC0tc2tlbGV0b25cIj48L2xhYmVsPlxuXHRcdFx0XHQ8bGFiZWwgKm5nSWY9XCIhc2tlbGV0b24gJiYgbGFiZWxcIiBbZm9yXT1cImlkXCIgY2xhc3M9XCJieC0tbGFiZWxcIj5cblx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzVGVtcGxhdGUobGFiZWwpXCI+e3tsYWJlbH19PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlICpuZ0lmPVwiaXNUZW1wbGF0ZShsYWJlbClcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJsYWJlbFwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdDxkaXYgKm5nSWY9XCJoZWxwZXJUZXh0XCIgY2xhc3M9XCJieC0tZm9ybV9faGVscGVyLXRleHRcIj5cblx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzVGVtcGxhdGUoaGVscGVyVGV4dClcIj57e2hlbHBlclRleHR9fTwvbmctY29udGFpbmVyPlxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSAqbmdJZj1cImlzVGVtcGxhdGUoaGVscGVyVGV4dClcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJoZWxwZXJUZXh0XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJieC0tc2VsZWN0LWlucHV0X193cmFwcGVyXCIgW2F0dHIuZGF0YS1pbnZhbGlkXT1cIihpbnZhbGlkID8gdHJ1ZSA6IG51bGwpXCI+XG5cdFx0XHRcdFx0PHNlbGVjdFxuXHRcdFx0XHRcdFx0I3NlbGVjdFxuXHRcdFx0XHRcdFx0W2F0dHIuaWRdPVwiaWRcIlxuXHRcdFx0XHRcdFx0W2Rpc2FibGVkXT1cImRpc2FibGVkXCJcblx0XHRcdFx0XHRcdChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cImJ4LS1zZWxlY3QtaW5wdXRcIj5cblx0XHRcdFx0XHRcdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHQ8aWJtLWljb24td2FybmluZy1maWxsZWQxNlxuXHRcdFx0XHRcdFx0Km5nSWY9XCIhc2tlbGV0b24gJiYgaW52YWxpZFwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cImJ4LS1zZWxlY3RfX2ludmFsaWQtaWNvblwiXG5cdFx0XHRcdFx0XHRzdHlsZT1cImRpc3BsYXk6IGluaGVyaXQ7XCI+XG5cdFx0XHRcdFx0PC9pYm0taWNvbi13YXJuaW5nLWZpbGxlZDE2PlxuXHRcdFx0XHRcdDxpYm0taWNvbi1jaGV2cm9uLWRvd24xNiAqbmdJZj1cIiFza2VsZXRvblwiIGNsYXNzPVwiYngtLXNlbGVjdF9fYXJyb3dcIiBzdHlsZT1cImRpc3BsYXk6IGluaGVyaXQ7XCI+PC9pYm0taWNvbi1jaGV2cm9uLWRvd24xNj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgKm5nSWY9XCJpbnZhbGlkXCIgY2xhc3M9XCJieC0tZm9ybS1yZXF1aXJlbWVudFwiPlxuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNUZW1wbGF0ZShpbnZhbGlkVGV4dClcIj57e2ludmFsaWRUZXh0fX08L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgKm5nSWY9XCJpc1RlbXBsYXRlKGludmFsaWRUZXh0KVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImludmFsaWRUZXh0XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YCxcblx0c3R5bGVzOiBbYFxuXHRcdFtkYXRhLWludmFsaWRdIH4gLmJ4LS1zZWxlY3RfX2Fycm93IHtcblx0XHRcdGJvdHRvbTogMi4yNXJlbTtcblx0XHR9XG5cdGBdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHRcdHVzZUV4aXN0aW5nOiBTZWxlY3QsXG5cdFx0XHRtdWx0aTogdHJ1ZVxuXHRcdH1cblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3QgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cdC8qKlxuXHQgKiBUcmFja3MgdGhlIHRvdGFsIG51bWJlciBvZiBzZWxlY3RzIGluc3RhbnRpYXRlZC4gVXNlZCB0byBnZW5lcmF0ZSB1bmlxdWUgSURzXG5cdCAqL1xuXHRzdGF0aWMgc2VsZWN0Q291bnQgPSAwO1xuXG5cdC8qKlxuXHQgKiBgaW5saW5lYCBvciBgZGVmYXVsdGAgc2VsZWN0IGRpc3BsYXlzXG5cdCAqL1xuXHRASW5wdXQoKSBkaXNwbGF5OiBcImlubGluZVwiIHwgXCJkZWZhdWx0XCIgPSBcImRlZmF1bHRcIjtcblx0LyoqXG5cdCAqIExhYmVsIGZvciB0aGUgc2VsZWN0LiBBcHBlYXJzIGFib3ZlIHRoZSBpbnB1dC5cblx0ICovXG5cdEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXHQvKipcblx0ICogT3B0aW9uYWwgaGVscGVyIHRleHQgdGhhdCBhcHBlYXJzIHVuZGVyIHRoZSBsYWJlbC5cblx0ICovXG5cdEBJbnB1dCgpIGhlbHBlclRleHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBpbnZhbGlkIHRleHQuXG5cdCAqL1xuXHRASW5wdXQoKSBpbnZhbGlkVGV4dDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pjtcblx0LyoqXG5cdCAqIFNldHMgdGhlIHVuaXF1ZSBJRC4gRGVmYXVsdHMgdG8gYHNlbGVjdC0ke3RvdGFsIGNvdW50IG9mIHNlbGVjdHMgaW5zdGFudGlhdGVkfWBcblx0ICovXG5cdEBJbnB1dCgpIGlkID0gYHNlbGVjdC0ke1NlbGVjdC5zZWxlY3RDb3VudCsrfWA7XG5cdC8qKlxuXHQgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIGNvbXBvbmVudC5cblx0ICovXG5cdEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG5cdC8qKlxuXHQgKiBTZXQgdG8gdHJ1ZSBmb3IgYSBsb2FkaW5nIHNlbGVjdC5cblx0ICovXG5cdEBJbnB1dCgpIHNrZWxldG9uID0gZmFsc2U7XG5cdC8qKlxuXHQgKiBTZXQgdG8gYHRydWVgIGZvciBhbiBpbnZhbGlkIHNlbGVjdCBjb21wb25lbnQuXG5cdCAqL1xuXHRASW5wdXQoKSBpbnZhbGlkID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIGBsaWdodGAgb3IgYGRhcmtgIHNlbGVjdCB0aGVtZVxuXHQgKi9cblx0QElucHV0KCkgdGhlbWU6IFwibGlnaHRcIiB8IFwiZGFya1wiID0gXCJkYXJrXCI7XG5cdC8qKlxuXHQgKiBlbWl0cyB0aGUgc2VsZWN0ZWQgb3B0aW9ucyBgdmFsdWVgXG5cdCAqL1xuXHRAT3V0cHV0KCkgc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QFZpZXdDaGlsZChcInNlbGVjdFwiKSBzZWxlY3Q6IEVsZW1lbnRSZWY7XG5cblx0Z2V0IHZhbHVlKCkge1xuXHRcdHJldHVybiB0aGlzLnNlbGVjdC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuXHR9XG5cblx0c2V0IHZhbHVlKHYpIHtcblx0XHR0aGlzLnNlbGVjdC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdjtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWNlaXZlcyBhIHZhbHVlIGZyb20gdGhlIG1vZGVsLlxuXHQgKi9cblx0d3JpdGVWYWx1ZShvYmo6IGFueSkge1xuXHRcdHRoaXMudmFsdWUgPSBvYmo7XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGEgbGlzdGVuZXIgdGhhdCBub3RpZmllcyB0aGUgbW9kZWwgd2hlbiB0aGUgY29udHJvbCB1cGRhdGVzXG5cdCAqL1xuXHRyZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcblx0XHR0aGlzLm9uQ2hhbmdlSGFuZGxlciA9IGZuO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBhIGxpc3RlbmVyIHRoYXQgbm90aWZpZXMgdGhlIG1vZGVsIHdoZW4gdGhlIGNvbnRyb2wgaXMgYmx1cnJlZFxuXHQgKi9cblx0cmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuXHRcdHRoaXMub25Ub3VjaGVkSGFuZGxlciA9IGZuO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldHMgdGhlIGRpc2FibGVkIHN0YXRlIHRocm91Z2ggdGhlIG1vZGVsXG5cdCAqL1xuXHRzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcblx0XHR0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIHRoZSBjaGFuZ2UgZXZlbnQgZnJvbSB0aGUgYHNlbGVjdGAuXG5cdCAqIFNlbmRzIGV2ZW50cyB0byB0aGUgY2hhbmdlIGhhbmRsZXIgYW5kIGVtaXRzIGEgYHNlbGVjdGVkYCBldmVudC5cblx0ICovXG5cdG9uQ2hhbmdlKGV2ZW50KSB7XG5cdFx0dGhpcy5vbkNoYW5nZUhhbmRsZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0XHR0aGlzLnNlbGVjdGVkLmVtaXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBMaXN0ZW5zIGZvciB0aGUgaG9zdCBibHVycmluZywgYW5kIG5vdGlmaWVzIHRoZSBtb2RlbFxuXHQgKi9cblx0QEhvc3RMaXN0ZW5lcihcImJsdXJcIilcblx0Ymx1cigpIHtcblx0XHR0aGlzLm9uVG91Y2hlZEhhbmRsZXIoKTtcblx0fVxuXG5cdHB1YmxpYyBpc1RlbXBsYXRlKHZhbHVlKSB7XG5cdFx0cmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG5cdH1cblxuXHQvKipcblx0ICogcGxhY2Vob2xkZXIgZGVjbGFyYXRpb25zLiBSZXBsYWNlZCBieSB0aGUgZnVuY3Rpb25zIHByb3ZpZGVkIHRvIGByZWdpc3Rlck9uQ2hhbmdlYCBhbmQgYHJlZ2lzdGVyT25Ub3VjaGVkYFxuXHQgKi9cblx0cHJvdGVjdGVkIG9uQ2hhbmdlSGFuZGxlciA9IChfOiBhbnkpID0+IHsgfTtcblx0cHJvdGVjdGVkIG9uVG91Y2hlZEhhbmRsZXIgPSAoKSA9PiB7IH07XG59XG4iXX0=