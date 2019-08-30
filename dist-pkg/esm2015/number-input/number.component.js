/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, HostBinding, EventEmitter, Output, TemplateRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
/**
 * Used to emit changes performed on number input components.
 */
export class NumberChange {
}
function NumberChange_tsickle_Closure_declarations() {
    /**
     * Contains the `Number` that has been changed.
     * @type {?}
     */
    NumberChange.prototype.source;
    /**
     * The value of the `Number` field encompassed in the `NumberChange` class.
     * @type {?}
     */
    NumberChange.prototype.value;
}
/**
 * [See demo](../../?path=/story/number--basic)
 *
 * <example-url>../../iframe.html?id=number--basic</example-url>
 */
export class Number {
    /**
     * Creates an instance of `Number`.
     */
    constructor() {
        this.containerClass = true;
        /**
         * `light` or `dark` number input theme.
         */
        this.theme = "dark";
        /**
         * Set to `true` for a disabled number input.
         */
        this.disabled = false;
        /**
         * Set to `true` for a loading number component.
         */
        this.skeleton = false;
        /**
         * Set to `true` for an invalid number component.
         */
        this.invalid = false;
        /**
         * The unique id for the number component.
         */
        this.id = `number-${Number.numberCount}`;
        /**
         * Sets the value attribute on the `input` element.
         */
        this.value = 0;
        /**
         * Sets the min attribute on the `input` element.
         */
        this.min = null;
        /**
         * Sets the max attribute on the `input` element.
         */
        this.max = null;
        /**
         * Emits event notifying other classes when a change in state occurs in the input.
         */
        this.change = new EventEmitter();
        /**
         * Called when number input is blurred. Needed to properly implement `ControlValueAccessor`.
         */
        this.onTouched = () => { };
        /**
         * Method set in `registerOnChange` to propagate changes back to the form.
         */
        this.propagateChange = (_) => { };
        Number.numberCount++;
    }
    /**
     * This is the initial value set to the component
     * @param {?} value The input value.
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * Sets a method in order to propagate changes back to the form.
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * Registers a callback to be triggered when the control has been touched.
     * @param {?} fn Callback to be triggered when the number input is touched.
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
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
     * Adds 1 to the current `value`.
     * @return {?}
     */
    onIncrement() {
        if (this.max === null || this.value < this.max) {
            this.value++;
            this.emitChangeEvent();
        }
    }
    /**
     * Subtracts 1 to the current `value`.
     * @return {?}
     */
    onDecrement() {
        if (this.min === null || this.value > this.min) {
            this.value--;
            this.emitChangeEvent();
        }
    }
    /**
     * Creates a class of `NumberChange` to emit the change in the `Number`.
     * @return {?}
     */
    emitChangeEvent() {
        /** @type {?} */
        let event = new NumberChange();
        event.source = this;
        event.value = this.value;
        this.change.emit(event);
        this.propagateChange(this.value);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onNumberInputChange(event) {
        this.value = event.target.value;
        this.emitChangeEvent();
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
 * Variable used for creating unique ids for number input components.
 */
Number.numberCount = 0;
Number.decorators = [
    { type: Component, args: [{
                selector: "ibm-number",
                template: `
		<label *ngIf="skeleton && label" class="bx--label bx--skeleton"></label>
		<label *ngIf="!skeleton && label" [for]="id" class="bx--label">
			<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
			<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
		</label>
		<div *ngIf="helperText" class="bx--form__helper-text">
			<ng-container *ngIf="!isTemplate(helperText)">{{helperText}}</ng-container>
			<ng-template *ngIf="isTemplate(helperText)" [ngTemplateOutlet]="helperText"></ng-template>
		</div>
		<div
			data-numberinput
			[attr.data-invalid]="(invalid ? true : null)"
			class="bx--number"
			[ngClass]="{
				'bx--number--light': theme === 'light',
				'bx--number--nolabel': !label,
				'bx--number--helpertext': helperText,
				'bx--skeleton' : skeleton
			}">
			<div class="bx--number__input-wrapper">
				<input
					type="number"
					[id]="id"
					[value]="value"
					[attr.min]="min"
					[attr.max]="max"
					[disabled]="disabled"
					[required]="required"
					(input)="onNumberInputChange($event)"/>
				<ibm-icon-warning-filled16
					*ngIf="!skeleton && invalid"
					class="bx--number__invalid"
					style="display: inherit;">
				</ibm-icon-warning-filled16>
				<div *ngIf="!skeleton" class="bx--number__controls">
					<button
						class="bx--number__control-btn up-icon"
						type="button"
						aria-live="polite"
						aria-atomic="true"
						(click)="onIncrement()">
						<ibm-icon-caret-up16></ibm-icon-caret-up16>
					</button>
					<button
						class="bx--number__control-btn down-icon"
						type="button"
						aria-live="polite"
						aria-atomic="true"
						(click)="onDecrement()">
						<ibm-icon-caret-down16></ibm-icon-caret-down16>
					</button>
				</div>
			</div>
			<div *ngIf="invalid" class="bx--form-requirement">
				<ng-container *ngIf="!isTemplate(invalidText)">{{invalidText}}</ng-container>
				<ng-template *ngIf="isTemplate(invalidText)" [ngTemplateOutlet]="invalidText"></ng-template>
			</div>
		</div>
	`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: Number,
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
Number.ctorParameters = () => [];
Number.propDecorators = {
    containerClass: [{ type: HostBinding, args: ["class.bx--form-item",] }],
    theme: [{ type: Input }],
    disabled: [{ type: Input }],
    skeleton: [{ type: Input }],
    invalid: [{ type: Input }],
    id: [{ type: Input }],
    required: [{ type: Input }],
    value: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    label: [{ type: Input }],
    helperText: [{ type: Input }],
    invalidText: [{ type: Input }],
    change: [{ type: Output }]
};
function Number_tsickle_Closure_declarations() {
    /**
     * Variable used for creating unique ids for number input components.
     * @type {?}
     */
    Number.numberCount;
    /** @type {?} */
    Number.prototype.containerClass;
    /**
     * `light` or `dark` number input theme.
     * @type {?}
     */
    Number.prototype.theme;
    /**
     * Set to `true` for a disabled number input.
     * @type {?}
     */
    Number.prototype.disabled;
    /**
     * Set to `true` for a loading number component.
     * @type {?}
     */
    Number.prototype.skeleton;
    /**
     * Set to `true` for an invalid number component.
     * @type {?}
     */
    Number.prototype.invalid;
    /**
     * The unique id for the number component.
     * @type {?}
     */
    Number.prototype.id;
    /**
     * Reflects the required attribute of the `input` element.
     * @type {?}
     */
    Number.prototype.required;
    /**
     * Sets the value attribute on the `input` element.
     * @type {?}
     */
    Number.prototype.value;
    /**
     * Sets the min attribute on the `input` element.
     * @type {?}
     */
    Number.prototype.min;
    /**
     * Sets the max attribute on the `input` element.
     * @type {?}
     */
    Number.prototype.max;
    /**
     * Sets the text inside the `label` tag.
     * @type {?}
     */
    Number.prototype.label;
    /**
     * Sets the optional helper text.
     * @type {?}
     */
    Number.prototype.helperText;
    /**
     * Sets the invalid text.
     * @type {?}
     */
    Number.prototype.invalidText;
    /**
     * Emits event notifying other classes when a change in state occurs in the input.
     * @type {?}
     */
    Number.prototype.change;
    /**
     * Called when number input is blurred. Needed to properly implement `ControlValueAccessor`.
     * @type {?}
     */
    Number.prototype.onTouched;
    /**
     * Method set in `registerOnChange` to propagate changes back to the form.
     * @type {?}
     */
    Number.prototype.propagateChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJudW1iZXItaW5wdXQvbnVtYmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFlBQVksRUFDWixNQUFNLEVBQ04sV0FBVyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUt6RSxNQUFNO0NBU0w7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZFRCxNQUFNOzs7O0lBZ0VMOzhCQTFEcUQsSUFBSTs7OztxQkFLdEIsTUFBTTs7Ozt3QkFJckIsS0FBSzs7Ozt3QkFJTCxLQUFLOzs7O3VCQUlOLEtBQUs7Ozs7a0JBSVYsVUFBVSxNQUFNLENBQUMsV0FBVyxFQUFFOzs7O3FCQVEzQixDQUFDOzs7O21CQUlILElBQUk7Ozs7bUJBSUosSUFBSTs7OztzQkFnQkEsSUFBSSxZQUFZLEVBQWdCOzs7O3lCQTBDNUIsR0FBRyxFQUFFLElBQUk7Ozs7K0JBS2QsQ0FBQyxDQUFNLEVBQUUsRUFBRSxJQUFJO1FBekNoQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDckI7Ozs7OztJQU1NLFVBQVUsQ0FBQyxLQUFVO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOzs7Ozs7O0lBTWIsZ0JBQWdCLENBQUMsRUFBTztRQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQzs7Ozs7OztJQU9wQixpQkFBaUIsQ0FBQyxFQUFPO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOzs7Ozs7O0lBTXJCLGdCQUFnQixDQUFDLFVBQW1CO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0tBQzNCOzs7OztJQWVELFdBQVc7UUFDVixJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUMvQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDdkI7S0FDRDs7Ozs7SUFLRCxXQUFXO1FBQ1YsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDL0MsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3ZCO0tBQ0Q7Ozs7O0lBS0QsZUFBZTs7UUFDZCxJQUFJLEtBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNqQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxLQUFLO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQ3ZCOzs7OztJQUVNLFVBQVUsQ0FBQyxLQUFLO1FBQ3RCLE9BQU8sS0FBSyxZQUFZLFdBQVcsQ0FBQzs7Ozs7O3FCQTdJaEIsQ0FBQzs7WUExRXRCLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTJEVDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Y7d0JBQ0MsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLE1BQU07d0JBQ25CLEtBQUssRUFBRSxJQUFJO3FCQUNYO2lCQUNEO2FBQ0Q7Ozs7OzZCQU9DLFdBQVcsU0FBQyxxQkFBcUI7b0JBS2pDLEtBQUs7dUJBSUwsS0FBSzt1QkFJTCxLQUFLO3NCQUlMLEtBQUs7aUJBSUwsS0FBSzt1QkFJTCxLQUFLO29CQUlMLEtBQUs7a0JBSUwsS0FBSztrQkFJTCxLQUFLO29CQUlMLEtBQUs7eUJBSUwsS0FBSzswQkFJTCxLQUFLO3FCQUlMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRIb3N0QmluZGluZyxcblx0RXZlbnRFbWl0dGVyLFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuLyoqXG4gKiBVc2VkIHRvIGVtaXQgY2hhbmdlcyBwZXJmb3JtZWQgb24gbnVtYmVyIGlucHV0IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBOdW1iZXJDaGFuZ2Uge1xuXHQvKipcblx0ICogQ29udGFpbnMgdGhlIGBOdW1iZXJgIHRoYXQgaGFzIGJlZW4gY2hhbmdlZC5cblx0ICovXG5cdHNvdXJjZTogTnVtYmVyO1xuXHQvKipcblx0ICogVGhlIHZhbHVlIG9mIHRoZSBgTnVtYmVyYCBmaWVsZCBlbmNvbXBhc3NlZCBpbiB0aGUgYE51bWJlckNoYW5nZWAgY2xhc3MuXG5cdCAqL1xuXHR2YWx1ZTogbnVtYmVyO1xufVxuXG4vKipcbiAqIFtTZWUgZGVtb10oLi4vLi4vP3BhdGg9L3N0b3J5L251bWJlci0tYmFzaWMpXG4gKlxuICogPGV4YW1wbGUtdXJsPi4uLy4uL2lmcmFtZS5odG1sP2lkPW51bWJlci0tYmFzaWM8L2V4YW1wbGUtdXJsPlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLW51bWJlclwiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxsYWJlbCAqbmdJZj1cInNrZWxldG9uICYmIGxhYmVsXCIgY2xhc3M9XCJieC0tbGFiZWwgYngtLXNrZWxldG9uXCI+PC9sYWJlbD5cblx0XHQ8bGFiZWwgKm5nSWY9XCIhc2tlbGV0b24gJiYgbGFiZWxcIiBbZm9yXT1cImlkXCIgY2xhc3M9XCJieC0tbGFiZWxcIj5cblx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNUZW1wbGF0ZShsYWJlbClcIj57e2xhYmVsfX08L25nLWNvbnRhaW5lcj5cblx0XHRcdDxuZy10ZW1wbGF0ZSAqbmdJZj1cImlzVGVtcGxhdGUobGFiZWwpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwibGFiZWxcIj48L25nLXRlbXBsYXRlPlxuXHRcdDwvbGFiZWw+XG5cdFx0PGRpdiAqbmdJZj1cImhlbHBlclRleHRcIiBjbGFzcz1cImJ4LS1mb3JtX19oZWxwZXItdGV4dFwiPlxuXHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc1RlbXBsYXRlKGhlbHBlclRleHQpXCI+e3toZWxwZXJUZXh0fX08L25nLWNvbnRhaW5lcj5cblx0XHRcdDxuZy10ZW1wbGF0ZSAqbmdJZj1cImlzVGVtcGxhdGUoaGVscGVyVGV4dClcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJoZWxwZXJUZXh0XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2XG5cdFx0XHRkYXRhLW51bWJlcmlucHV0XG5cdFx0XHRbYXR0ci5kYXRhLWludmFsaWRdPVwiKGludmFsaWQgPyB0cnVlIDogbnVsbClcIlxuXHRcdFx0Y2xhc3M9XCJieC0tbnVtYmVyXCJcblx0XHRcdFtuZ0NsYXNzXT1cIntcblx0XHRcdFx0J2J4LS1udW1iZXItLWxpZ2h0JzogdGhlbWUgPT09ICdsaWdodCcsXG5cdFx0XHRcdCdieC0tbnVtYmVyLS1ub2xhYmVsJzogIWxhYmVsLFxuXHRcdFx0XHQnYngtLW51bWJlci0taGVscGVydGV4dCc6IGhlbHBlclRleHQsXG5cdFx0XHRcdCdieC0tc2tlbGV0b24nIDogc2tlbGV0b25cblx0XHRcdH1cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJieC0tbnVtYmVyX19pbnB1dC13cmFwcGVyXCI+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdFtpZF09XCJpZFwiXG5cdFx0XHRcdFx0W3ZhbHVlXT1cInZhbHVlXCJcblx0XHRcdFx0XHRbYXR0ci5taW5dPVwibWluXCJcblx0XHRcdFx0XHRbYXR0ci5tYXhdPVwibWF4XCJcblx0XHRcdFx0XHRbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG5cdFx0XHRcdFx0KGlucHV0KT1cIm9uTnVtYmVySW5wdXRDaGFuZ2UoJGV2ZW50KVwiLz5cblx0XHRcdFx0PGlibS1pY29uLXdhcm5pbmctZmlsbGVkMTZcblx0XHRcdFx0XHQqbmdJZj1cIiFza2VsZXRvbiAmJiBpbnZhbGlkXCJcblx0XHRcdFx0XHRjbGFzcz1cImJ4LS1udW1iZXJfX2ludmFsaWRcIlxuXHRcdFx0XHRcdHN0eWxlPVwiZGlzcGxheTogaW5oZXJpdDtcIj5cblx0XHRcdFx0PC9pYm0taWNvbi13YXJuaW5nLWZpbGxlZDE2PlxuXHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiIXNrZWxldG9uXCIgY2xhc3M9XCJieC0tbnVtYmVyX19jb250cm9sc1wiPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzPVwiYngtLW51bWJlcl9fY29udHJvbC1idG4gdXAtaWNvblwiXG5cdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdGFyaWEtbGl2ZT1cInBvbGl0ZVwiXG5cdFx0XHRcdFx0XHRhcmlhLWF0b21pYz1cInRydWVcIlxuXHRcdFx0XHRcdFx0KGNsaWNrKT1cIm9uSW5jcmVtZW50KClcIj5cblx0XHRcdFx0XHRcdDxpYm0taWNvbi1jYXJldC11cDE2PjwvaWJtLWljb24tY2FyZXQtdXAxNj5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzcz1cImJ4LS1udW1iZXJfX2NvbnRyb2wtYnRuIGRvd24taWNvblwiXG5cdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdGFyaWEtbGl2ZT1cInBvbGl0ZVwiXG5cdFx0XHRcdFx0XHRhcmlhLWF0b21pYz1cInRydWVcIlxuXHRcdFx0XHRcdFx0KGNsaWNrKT1cIm9uRGVjcmVtZW50KClcIj5cblx0XHRcdFx0XHRcdDxpYm0taWNvbi1jYXJldC1kb3duMTY+PC9pYm0taWNvbi1jYXJldC1kb3duMTY+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiaW52YWxpZFwiIGNsYXNzPVwiYngtLWZvcm0tcmVxdWlyZW1lbnRcIj5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc1RlbXBsYXRlKGludmFsaWRUZXh0KVwiPnt7aW52YWxpZFRleHR9fTwvbmctY29udGFpbmVyPlxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgKm5nSWY9XCJpc1RlbXBsYXRlKGludmFsaWRUZXh0KVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImludmFsaWRUZXh0XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHRcdHVzZUV4aXN0aW5nOiBOdW1iZXIsXG5cdFx0XHRtdWx0aTogdHJ1ZVxuXHRcdH1cblx0XVxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXIgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cdC8qKlxuXHQgKiBWYXJpYWJsZSB1c2VkIGZvciBjcmVhdGluZyB1bmlxdWUgaWRzIGZvciBudW1iZXIgaW5wdXQgY29tcG9uZW50cy5cblx0ICovXG5cdHN0YXRpYyBudW1iZXJDb3VudCA9IDA7XG5cblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLWZvcm0taXRlbVwiKSBjb250YWluZXJDbGFzcyA9IHRydWU7XG5cblx0LyoqXG5cdCAqIGBsaWdodGAgb3IgYGRhcmtgIG51bWJlciBpbnB1dCB0aGVtZS5cblx0ICovXG5cdEBJbnB1dCgpIHRoZW1lOiBcImxpZ2h0XCIgfCBcImRhcmtcIiA9IFwiZGFya1wiO1xuXHQvKipcblx0ICogU2V0IHRvIGB0cnVlYCBmb3IgYSBkaXNhYmxlZCBudW1iZXIgaW5wdXQuXG5cdCAqL1xuXHRASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuXHQvKipcblx0ICogU2V0IHRvIGB0cnVlYCBmb3IgYSBsb2FkaW5nIG51bWJlciBjb21wb25lbnQuXG5cdCAqL1xuXHRASW5wdXQoKSBza2VsZXRvbiA9IGZhbHNlO1xuXHQvKipcblx0ICogU2V0IHRvIGB0cnVlYCBmb3IgYW4gaW52YWxpZCBudW1iZXIgY29tcG9uZW50LlxuXHQgKi9cblx0QElucHV0KCkgaW52YWxpZCA9IGZhbHNlO1xuXHQvKipcblx0ICogVGhlIHVuaXF1ZSBpZCBmb3IgdGhlIG51bWJlciBjb21wb25lbnQuXG5cdCAqL1xuXHRASW5wdXQoKSBpZCA9IGBudW1iZXItJHtOdW1iZXIubnVtYmVyQ291bnR9YDtcblx0LyoqXG5cdCAqIFJlZmxlY3RzIHRoZSByZXF1aXJlZCBhdHRyaWJ1dGUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cblx0ICovXG5cdEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuO1xuXHQvKipcblx0ICogU2V0cyB0aGUgdmFsdWUgYXR0cmlidXRlIG9uIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG5cdCAqL1xuXHRASW5wdXQoKSB2YWx1ZSA9IDA7XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBtaW4gYXR0cmlidXRlIG9uIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG5cdCAqL1xuXHRASW5wdXQoKSBtaW4gPSBudWxsO1xuXHQvKipcblx0ICogU2V0cyB0aGUgbWF4IGF0dHJpYnV0ZSBvbiB0aGUgYGlucHV0YCBlbGVtZW50LlxuXHQgKi9cblx0QElucHV0KCkgbWF4ID0gbnVsbDtcblx0LyoqXG5cdCAqIFNldHMgdGhlIHRleHQgaW5zaWRlIHRoZSBgbGFiZWxgIHRhZy5cblx0ICovXG5cdEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXHQvKipcblx0ICogU2V0cyB0aGUgb3B0aW9uYWwgaGVscGVyIHRleHQuXG5cdCAqL1xuXHRASW5wdXQoKSBoZWxwZXJUZXh0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuXHQvKipcblx0ICogU2V0cyB0aGUgaW52YWxpZCB0ZXh0LlxuXHQgKi9cblx0QElucHV0KCkgaW52YWxpZFRleHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cdC8qKlxuXHQgKiBFbWl0cyBldmVudCBub3RpZnlpbmcgb3RoZXIgY2xhc3NlcyB3aGVuIGEgY2hhbmdlIGluIHN0YXRlIG9jY3VycyBpbiB0aGUgaW5wdXQuXG5cdCAqL1xuXHRAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOdW1iZXJDaGFuZ2U+KCk7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYE51bWJlcmAuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHROdW1iZXIubnVtYmVyQ291bnQrKztcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGlzIGlzIHRoZSBpbml0aWFsIHZhbHVlIHNldCB0byB0aGUgY29tcG9uZW50XG5cdCAqIEBwYXJhbSB2YWx1ZSBUaGUgaW5wdXQgdmFsdWUuXG5cdCAqL1xuXHRwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldHMgYSBtZXRob2QgaW4gb3JkZXIgdG8gcHJvcGFnYXRlIGNoYW5nZXMgYmFjayB0byB0aGUgZm9ybS5cblx0ICovXG5cdHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcblx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBjb250cm9sIGhhcyBiZWVuIHRvdWNoZWQuXG5cdCAqIEBwYXJhbSBmbiBDYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgbnVtYmVyIGlucHV0IGlzIHRvdWNoZWQuXG5cdCAqL1xuXHRwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuXHRcdHRoaXMub25Ub3VjaGVkID0gZm47XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyB0aGUgZGlzYWJsZWQgc3RhdGUgdGhyb3VnaCB0aGUgbW9kZWxcblx0ICovXG5cdHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuXHRcdHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGxlZCB3aGVuIG51bWJlciBpbnB1dCBpcyBibHVycmVkLiBOZWVkZWQgdG8gcHJvcGVybHkgaW1wbGVtZW50IGBDb250cm9sVmFsdWVBY2Nlc3NvcmAuXG5cdCAqL1xuXHRvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHsgfTtcblxuXHQvKipcblx0ICogTWV0aG9kIHNldCBpbiBgcmVnaXN0ZXJPbkNoYW5nZWAgdG8gcHJvcGFnYXRlIGNoYW5nZXMgYmFjayB0byB0aGUgZm9ybS5cblx0ICovXG5cdHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcblxuXHQvKipcblx0ICogQWRkcyAxIHRvIHRoZSBjdXJyZW50IGB2YWx1ZWAuXG5cdCAqL1xuXHRvbkluY3JlbWVudCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5tYXggPT09IG51bGwgfHwgdGhpcy52YWx1ZSA8IHRoaXMubWF4KSB7XG5cdFx0XHR0aGlzLnZhbHVlKys7XG5cdFx0XHR0aGlzLmVtaXRDaGFuZ2VFdmVudCgpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTdWJ0cmFjdHMgMSB0byB0aGUgY3VycmVudCBgdmFsdWVgLlxuXHQgKi9cblx0b25EZWNyZW1lbnQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMubWluID09PSBudWxsIHx8IHRoaXMudmFsdWUgPiB0aGlzLm1pbikge1xuXHRcdFx0dGhpcy52YWx1ZS0tO1xuXHRcdFx0dGhpcy5lbWl0Q2hhbmdlRXZlbnQoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIGNsYXNzIG9mIGBOdW1iZXJDaGFuZ2VgIHRvIGVtaXQgdGhlIGNoYW5nZSBpbiB0aGUgYE51bWJlcmAuXG5cdCAqL1xuXHRlbWl0Q2hhbmdlRXZlbnQoKTogdm9pZCB7XG5cdFx0bGV0IGV2ZW50ID0gbmV3IE51bWJlckNoYW5nZSgpO1xuXHRcdGV2ZW50LnNvdXJjZSA9IHRoaXM7XG5cdFx0ZXZlbnQudmFsdWUgPSB0aGlzLnZhbHVlO1xuXHRcdHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQpO1xuXHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlKHRoaXMudmFsdWUpO1xuXHR9XG5cblx0b25OdW1iZXJJbnB1dENoYW5nZShldmVudCkge1xuXHRcdHRoaXMudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy5lbWl0Q2hhbmdlRXZlbnQoKTtcblx0fVxuXG5cdHB1YmxpYyBpc1RlbXBsYXRlKHZhbHVlKSB7XG5cdFx0cmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG5cdH1cbn1cbiJdfQ==