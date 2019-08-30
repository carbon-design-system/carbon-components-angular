/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ContentChildren, Component, EventEmitter, forwardRef, Input, Output, QueryList, HostBinding } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { Radio } from "./radio.component";
/**
 * [See demo](../../?path=/story/radio--basic)
 *
 * class: RadioGroup
 *
 * selector: `ibm-radio-group`
 *
 * source: `src/forms/radio.component.ts`
 *
 *
 * Ex:
 * ```html
 * <ibm-radio-group [(ngModel)]="radio">
 * 	<ibm-radio *ngFor="let one of manyRadios" [value]="one">
 * 		Radio {{one}}
 * 	</ibm-radio>
 * </ibm-radio-group>
 *
 * Radio selected: {{radio}}
 * ```
 *
 * ```typescript
 * manyRadios = ["one", "two", "three", "four", "five", "six"];
 * ```
 *
 * Also see: [`Radio`](#ibm-radio)
 *
 * <example-url>../../iframe.html?id=radio--basic</example-url>
 */
export class RadioGroup {
    constructor() {
        this.orientation = "horizontal";
        this.labelPlacement = "right";
        /**
         * Emits event notifying other classes of a change using a `RadioChange` class.
         */
        this.change = new EventEmitter();
        /**
         * Set to true to disable the whole radio group
         */
        this.disabled = false;
        /**
         * Binds 'bx--form-item' value to the class for `RadioGroup`.
         */
        this.radioButtonGroupClass = true;
        /**
         * To track whether the `RadioGroup` has been initialized.
         */
        this.isInitialized = false;
        /**
         * Reflects whether or not the input is disabled and cannot be selected.
         */
        this._disabled = false;
        /**
         * Reflects whether or not the dropdown is loading.
         */
        this._skeleton = false;
        /**
         * The value of the selected option within the `RadioGroup`.
         */
        this._value = null;
        /**
         * The `Radio` within the `RadioGroup` that is selected.
         */
        this._selected = null;
        /**
         * The name attribute associated with the `RadioGroup`.
         */
        this._name = `radio-group-${RadioGroup.radioGroupCount++}`;
        /**
         * Needed to properly implement ControlValueAccessor.
         */
        this.onTouched = () => { };
        /**
         * Method set in registerOnChange to propagate changes back to the form.
         */
        this.propagateChange = (_) => { };
    }
    /**
     * Sets the passed in `Radio` item as the selected input within the `RadioGroup`.
     * @param {?} selected
     * @return {?}
     */
    set selected(selected) {
        this._selected = selected;
        this.value = selected ? selected.value : null;
        this.checkSelectedRadio();
    }
    /**
     * Returns the `Radio` that is selected within the `RadioGroup`.
     * @return {?}
     */
    get selected() {
        return this._selected;
    }
    /**
     * Sets the value/state of the selected `Radio` within the `RadioGroup` to the passed in value.
     * @param {?} newValue
     * @return {?}
     */
    set value(newValue) {
        if (this._value !== newValue) {
            this._value = newValue;
            this.updateSelectedRadioFromValue();
            this.checkSelectedRadio();
        }
    }
    /**
     * Returns the value/state of the selected `Radio` within the `RadioGroup`.
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * Replaces the name associated with the `RadioGroup` with the provided parameter.
     * @param {?} name
     * @return {?}
     */
    set name(name) {
        this._name = name;
        this.updateRadios();
    }
    /**
     * Returns the associated name of the `RadioGroup`.
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * Returns the skeleton value in the `RadioGroup` if there is one.
     * @return {?}
     */
    get skeleton() {
        return this._skeleton;
    }
    /**
     * Sets the skeleton value for all `Radio` to the skeleton value of `RadioGroup`.
     * @param {?} value
     * @return {?}
     */
    set skeleton(value) {
        this._skeleton = value;
        this.updateChildren();
    }
    /**
     * Updates the selected `Radio` to be checked (selected).
     * @return {?}
     */
    checkSelectedRadio() {
        if (this.selected && !this._selected.checked) {
            this.selected.checked = true;
        }
    }
    /**
     * Use the value of the `RadioGroup` to update the selected radio to the right state (selected state).
     * @return {?}
     */
    updateSelectedRadioFromValue() {
        /** @type {?} */
        let alreadySelected = this._selected != null && this._selected.value === this._value;
        if (this.radios && !alreadySelected) {
            this._selected = null;
            this.radios.forEach(radio => {
                if (radio.checked) {
                    this._selected = radio;
                }
            });
        }
    }
    /**
     * Creates a class of `RadioChange` to emit the change in the `RadioGroup`.
     * @param {?} event
     * @return {?}
     */
    emitChangeEvent(event) {
        this.change.emit(event);
        this.propagateChange(event.value);
        this.onTouched();
    }
    /**
     * @return {?}
     */
    updateRadioNames() {
        console.warn("updateRadioNames had been deprecated. Use updateRadios instead");
        this.updateRadios();
    }
    /**
     * Synchronizes radio properties.
     * @return {?}
     */
    updateRadios() {
        if (this.radios) {
            setTimeout(() => {
                this.radios.forEach(radio => radio.name = this.name);
                if (this.labelPlacement === "left") {
                    this.radios.forEach(radio => radio.labelPlacement = "left");
                }
            });
        }
    }
    /**
     * Updates the value of the `RadioGroup` using the provided parameter.
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.radios.changes.subscribe(() => {
            this.updateRadios();
            this.updateRadioChangeHandler();
        });
        this.updateChildren();
        this.updateRadioChangeHandler();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.updateRadios();
    }
    /**
     * Used to set method to propagate changes back to the form.
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * Registers a callback to be triggered when the control has been touched.
     * @param {?} fn Callback to be triggered when the checkbox is touched.
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @return {?}
     */
    updateChildren() {
        if (this.radios) {
            this.radios.forEach(child => child.skeleton = this.skeleton);
        }
    }
    /**
     * @return {?}
     */
    updateRadioChangeHandler() {
        this.radios.forEach(radio => {
            radio.registerRadioChangeHandler((event) => {
                // update selected and value from the event
                this._selected = event.source;
                this._value = event.value;
                // bubble the event
                this.emitChangeEvent(event);
            });
        });
    }
}
/**
 * Used for creating the `RadioGroup` 'name' property dynamically.
 */
RadioGroup.radioGroupCount = 0;
RadioGroup.decorators = [
    { type: Component, args: [{
                selector: "ibm-radio-group",
                template: `
		<div
			class="bx--radio-button-group"
			[ngClass]="{
				'bx--radio-button-group--vertical': orientation === 'vertical',
				'bx--radio-button-group--label-left': orientation === 'vertical' && labelPlacement === 'left'
			}"
			role="radiogroup">
			<ng-content></ng-content>
		</div>
	`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: RadioGroup,
                        multi: true
                    }
                ]
            }] }
];
RadioGroup.propDecorators = {
    orientation: [{ type: Input }],
    labelPlacement: [{ type: Input }],
    change: [{ type: Output }],
    radios: [{ type: ContentChildren, args: [forwardRef(() => Radio),] }],
    selected: [{ type: Input }],
    value: [{ type: Input }],
    name: [{ type: Input }],
    disabled: [{ type: Input }],
    skeleton: [{ type: Input }],
    radioButtonGroupClass: [{ type: HostBinding, args: ["class.bx--form-item",] }]
};
function RadioGroup_tsickle_Closure_declarations() {
    /**
     * Used for creating the `RadioGroup` 'name' property dynamically.
     * @type {?}
     */
    RadioGroup.radioGroupCount;
    /** @type {?} */
    RadioGroup.prototype.orientation;
    /** @type {?} */
    RadioGroup.prototype.labelPlacement;
    /**
     * Emits event notifying other classes of a change using a `RadioChange` class.
     * @type {?}
     */
    RadioGroup.prototype.change;
    /**
     * The `Radio` input items in the `RadioGroup`.
     * @type {?}
     */
    RadioGroup.prototype.radios;
    /**
     * Set to true to disable the whole radio group
     * @type {?}
     */
    RadioGroup.prototype.disabled;
    /**
     * Binds 'bx--form-item' value to the class for `RadioGroup`.
     * @type {?}
     */
    RadioGroup.prototype.radioButtonGroupClass;
    /**
     * To track whether the `RadioGroup` has been initialized.
     * @type {?}
     */
    RadioGroup.prototype.isInitialized;
    /**
     * Reflects whether or not the input is disabled and cannot be selected.
     * @type {?}
     */
    RadioGroup.prototype._disabled;
    /**
     * Reflects whether or not the dropdown is loading.
     * @type {?}
     */
    RadioGroup.prototype._skeleton;
    /**
     * The value of the selected option within the `RadioGroup`.
     * @type {?}
     */
    RadioGroup.prototype._value;
    /**
     * The `Radio` within the `RadioGroup` that is selected.
     * @type {?}
     */
    RadioGroup.prototype._selected;
    /**
     * The name attribute associated with the `RadioGroup`.
     * @type {?}
     */
    RadioGroup.prototype._name;
    /**
     * Needed to properly implement ControlValueAccessor.
     * @type {?}
     */
    RadioGroup.prototype.onTouched;
    /**
     * Method set in registerOnChange to propagate changes back to the form.
     * @type {?}
     */
    RadioGroup.prototype.propagateChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FyYm9uLWNvbXBvbmVudHMtYW5ndWxhci8iLCJzb3VyY2VzIjpbInJhZGlvL3JhZGlvLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVOLGVBQWUsRUFDZixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBRVgsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUQxQyxNQUFNOzsyQkFNNkMsWUFBWTs4QkFFakIsT0FBTzs7OztzQkFLTixJQUFJLFlBQVksRUFBZTs7Ozt3QkErRHpELEtBQUs7Ozs7cUNBcUJtQyxJQUFJOzs7OzZCQUt0QyxLQUFLOzs7O3lCQUlULEtBQUs7Ozs7eUJBSUwsS0FBSzs7OztzQkFJSCxJQUFJOzs7O3lCQUlDLElBQUk7Ozs7cUJBSWYsZUFBZSxVQUFVLENBQUMsZUFBZSxFQUFFLEVBQUU7Ozs7eUJBOEZ4QyxHQUFHLEVBQUUsSUFBRzs7OzsrQkFLYixDQUFDLENBQU0sRUFBRSxFQUFFLElBQUc7Ozs7Ozs7SUFyTWhDLElBQ0ksUUFBUSxDQUFDLFFBQXNCO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDOUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7S0FDMUI7Ozs7O0lBS0QsSUFBSSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFD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LFdBQVcsRUFBRSxVQUFVO3dCQUN2QixLQUFLLEVBQUUsSUFBSTtxQkFDWDtpQkFDRDthQUNEOzs7MEJBT0MsS0FBSzs2QkFFTCxLQUFLO3FCQUtMLE1BQU07cUJBTU4sZUFBZSxTQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7dUJBS3ZDLEtBQUs7b0JBaUJMLEtBQUs7bUJBb0JMLEtBQUs7dUJBZUwsS0FBSzt1QkFLTCxLQUFLO29DQWdCTCxXQUFXLFNBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QWZ0ZXJDb250ZW50SW5pdCxcblx0Q29udGVudENoaWxkcmVuLFxuXHRDb21wb25lbnQsXG5cdEV2ZW50RW1pdHRlcixcblx0Zm9yd2FyZFJlZixcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0UXVlcnlMaXN0LFxuXHRIb3N0QmluZGluZyxcblx0QWZ0ZXJWaWV3SW5pdFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBSYWRpbyB9IGZyb20gXCIuL3JhZGlvLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmFkaW9DaGFuZ2UgfSBmcm9tIFwiLi9yYWRpby1jaGFuZ2UuY2xhc3NcIjtcblxuLyoqXG4gKiBbU2VlIGRlbW9dKC4uLy4uLz9wYXRoPS9zdG9yeS9yYWRpby0tYmFzaWMpXG4gKlxuICogY2xhc3M6IFJhZGlvR3JvdXBcbiAqXG4gKiBzZWxlY3RvcjogYGlibS1yYWRpby1ncm91cGBcbiAqXG4gKiBzb3VyY2U6IGBzcmMvZm9ybXMvcmFkaW8uY29tcG9uZW50LnRzYFxuICpcbiAqXG4gKiBFeDpcbiAqIGBgYGh0bWxcbiAqIDxpYm0tcmFkaW8tZ3JvdXAgWyhuZ01vZGVsKV09XCJyYWRpb1wiPlxuICogXHQ8aWJtLXJhZGlvICpuZ0Zvcj1cImxldCBvbmUgb2YgbWFueVJhZGlvc1wiIFt2YWx1ZV09XCJvbmVcIj5cbiAqXHRcdFJhZGlvIHt7b25lfX1cbiAqIFx0PC9pYm0tcmFkaW8+XG4gKiA8L2libS1yYWRpby1ncm91cD5cbiAqXG4gKiBSYWRpbyBzZWxlY3RlZDoge3tyYWRpb319XG4gKiBgYGBcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBtYW55UmFkaW9zID0gW1wib25lXCIsIFwidHdvXCIsIFwidGhyZWVcIiwgXCJmb3VyXCIsIFwiZml2ZVwiLCBcInNpeFwiXTtcbiAqIGBgYFxuICpcbiAqIEFsc28gc2VlOiBbYFJhZGlvYF0oI2libS1yYWRpbylcbiAqXG4gKiA8ZXhhbXBsZS11cmw+Li4vLi4vaWZyYW1lLmh0bWw/aWQ9cmFkaW8tLWJhc2ljPC9leGFtcGxlLXVybD5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1yYWRpby1ncm91cFwiLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzPVwiYngtLXJhZGlvLWJ1dHRvbi1ncm91cFwiXG5cdFx0XHRbbmdDbGFzc109XCJ7XG5cdFx0XHRcdCdieC0tcmFkaW8tYnV0dG9uLWdyb3VwLS12ZXJ0aWNhbCc6IG9yaWVudGF0aW9uID09PSAndmVydGljYWwnLFxuXHRcdFx0XHQnYngtLXJhZGlvLWJ1dHRvbi1ncm91cC0tbGFiZWwtbGVmdCc6IG9yaWVudGF0aW9uID09PSAndmVydGljYWwnICYmIGxhYmVsUGxhY2VtZW50ID09PSAnbGVmdCdcblx0XHRcdH1cIlxuXHRcdFx0cm9sZT1cInJhZGlvZ3JvdXBcIj5cblx0XHRcdDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblx0XHQ8L2Rpdj5cblx0YCxcblx0cHJvdmlkZXJzOiBbXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG5cdFx0XHR1c2VFeGlzdGluZzogUmFkaW9Hcm91cCxcblx0XHRcdG11bHRpOiB0cnVlXG5cdFx0fVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvR3JvdXAgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cdC8qKlxuXHQgKiBVc2VkIGZvciBjcmVhdGluZyB0aGUgYFJhZGlvR3JvdXBgICduYW1lJyBwcm9wZXJ0eSBkeW5hbWljYWxseS5cblx0ICovXG5cdHN0YXRpYyByYWRpb0dyb3VwQ291bnQgPSAwO1xuXG5cdEBJbnB1dCgpIG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIiA9IFwiaG9yaXpvbnRhbFwiO1xuXG5cdEBJbnB1dCgpIGxhYmVsUGxhY2VtZW50OiBcInJpZ2h0XCIgfCBcImxlZnRcIiA9ICBcInJpZ2h0XCI7XG5cblx0LyoqXG5cdCAqIEVtaXRzIGV2ZW50IG5vdGlmeWluZyBvdGhlciBjbGFzc2VzIG9mIGEgY2hhbmdlIHVzaW5nIGEgYFJhZGlvQ2hhbmdlYCBjbGFzcy5cblx0ICovXG5cdEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxSYWRpb0NoYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyPFJhZGlvQ2hhbmdlPigpO1xuXG5cdC8qKlxuXHQgKiBUaGUgYFJhZGlvYCBpbnB1dCBpdGVtcyBpbiB0aGUgYFJhZGlvR3JvdXBgLlxuXHQgKi9cblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWZvcndhcmQtcmVmXG5cdEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBSYWRpbykpIHJhZGlvczogUXVlcnlMaXN0PFJhZGlvPjtcblxuXHQvKipcblx0ICogU2V0cyB0aGUgcGFzc2VkIGluIGBSYWRpb2AgaXRlbSBhcyB0aGUgc2VsZWN0ZWQgaW5wdXQgd2l0aGluIHRoZSBgUmFkaW9Hcm91cGAuXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQ6IFJhZGlvIHwgbnVsbCkge1xuXHRcdHRoaXMuX3NlbGVjdGVkID0gc2VsZWN0ZWQ7XG5cdFx0dGhpcy52YWx1ZSA9IHNlbGVjdGVkID8gc2VsZWN0ZWQudmFsdWUgOiBudWxsO1xuXHRcdHRoaXMuY2hlY2tTZWxlY3RlZFJhZGlvKCk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgYFJhZGlvYCB0aGF0IGlzIHNlbGVjdGVkIHdpdGhpbiB0aGUgYFJhZGlvR3JvdXBgLlxuXHQgKi9cblx0Z2V0IHNlbGVjdGVkKCkge1xuXHRcdHJldHVybiB0aGlzLl9zZWxlY3RlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXRzIHRoZSB2YWx1ZS9zdGF0ZSBvZiB0aGUgc2VsZWN0ZWQgYFJhZGlvYCB3aXRoaW4gdGhlIGBSYWRpb0dyb3VwYCB0byB0aGUgcGFzc2VkIGluIHZhbHVlLlxuXHQgKi9cblx0QElucHV0KClcblx0c2V0IHZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcblx0XHRpZiAodGhpcy5fdmFsdWUgIT09IG5ld1ZhbHVlKSB7XG5cdFx0XHR0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuXG5cdFx0XHR0aGlzLnVwZGF0ZVNlbGVjdGVkUmFkaW9Gcm9tVmFsdWUoKTtcblx0XHRcdHRoaXMuY2hlY2tTZWxlY3RlZFJhZGlvKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHZhbHVlL3N0YXRlIG9mIHRoZSBzZWxlY3RlZCBgUmFkaW9gIHdpdGhpbiB0aGUgYFJhZGlvR3JvdXBgLlxuXHQgKi9cblx0Z2V0IHZhbHVlKCkge1xuXHRcdHJldHVybiB0aGlzLl92YWx1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXBsYWNlcyB0aGUgbmFtZSBhc3NvY2lhdGVkIHdpdGggdGhlIGBSYWRpb0dyb3VwYCB3aXRoIHRoZSBwcm92aWRlZCBwYXJhbWV0ZXIuXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcblx0XHR0aGlzLl9uYW1lID0gbmFtZTtcblx0XHR0aGlzLnVwZGF0ZVJhZGlvcygpO1xuXHR9XG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBhc3NvY2lhdGVkIG5hbWUgb2YgdGhlIGBSYWRpb0dyb3VwYC5cblx0ICovXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiB0aGlzLl9uYW1lO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhlIHdob2xlIHJhZGlvIGdyb3VwXG5cdCAqL1xuXHRASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBza2VsZXRvbiB2YWx1ZSBpbiB0aGUgYFJhZGlvR3JvdXBgIGlmIHRoZXJlIGlzIG9uZS5cblx0ICovXG5cdEBJbnB1dCgpXG5cdGdldCBza2VsZXRvbigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLl9za2VsZXRvbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBza2VsZXRvbiB2YWx1ZSBmb3IgYWxsIGBSYWRpb2AgdG8gdGhlIHNrZWxldG9uIHZhbHVlIG9mIGBSYWRpb0dyb3VwYC5cblx0ICovXG5cdHNldCBza2VsZXRvbih2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5fc2tlbGV0b24gPSB2YWx1ZTtcblx0XHR0aGlzLnVwZGF0ZUNoaWxkcmVuKCk7XG5cdH1cblxuXHQvKipcblx0ICogQmluZHMgJ2J4LS1mb3JtLWl0ZW0nIHZhbHVlIHRvIHRoZSBjbGFzcyBmb3IgYFJhZGlvR3JvdXBgLlxuXHQgKi9cblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MuYngtLWZvcm0taXRlbVwiKSByYWRpb0J1dHRvbkdyb3VwQ2xhc3MgPSB0cnVlO1xuXG5cdC8qKlxuXHQgKiBUbyB0cmFjayB3aGV0aGVyIHRoZSBgUmFkaW9Hcm91cGAgaGFzIGJlZW4gaW5pdGlhbGl6ZWQuXG5cdCAqL1xuXHRwcm90ZWN0ZWQgaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuXHQvKipcblx0ICogUmVmbGVjdHMgd2hldGhlciBvciBub3QgdGhlIGlucHV0IGlzIGRpc2FibGVkIGFuZCBjYW5ub3QgYmUgc2VsZWN0ZWQuXG5cdCAqL1xuXHRwcm90ZWN0ZWQgX2Rpc2FibGVkID0gZmFsc2U7XG5cdC8qKlxuXHQgKiBSZWZsZWN0cyB3aGV0aGVyIG9yIG5vdCB0aGUgZHJvcGRvd24gaXMgbG9hZGluZy5cblx0ICovXG5cdHByb3RlY3RlZCBfc2tlbGV0b24gPSBmYWxzZTtcblx0LyoqXG5cdCAqIFRoZSB2YWx1ZSBvZiB0aGUgc2VsZWN0ZWQgb3B0aW9uIHdpdGhpbiB0aGUgYFJhZGlvR3JvdXBgLlxuXHQgKi9cblx0cHJvdGVjdGVkIF92YWx1ZTogYW55ID0gbnVsbDtcblx0LyoqXG5cdCAqIFRoZSBgUmFkaW9gIHdpdGhpbiB0aGUgYFJhZGlvR3JvdXBgIHRoYXQgaXMgc2VsZWN0ZWQuXG5cdCAqL1xuXHRwcm90ZWN0ZWQgX3NlbGVjdGVkOiBSYWRpbyA9IG51bGw7XG5cdC8qKlxuXHQgKiBUaGUgbmFtZSBhdHRyaWJ1dGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBgUmFkaW9Hcm91cGAuXG5cdCAqL1xuXHRwcm90ZWN0ZWQgX25hbWUgPSBgcmFkaW8tZ3JvdXAtJHtSYWRpb0dyb3VwLnJhZGlvR3JvdXBDb3VudCsrfWA7XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgdGhlIHNlbGVjdGVkIGBSYWRpb2AgdG8gYmUgY2hlY2tlZCAoc2VsZWN0ZWQpLlxuXHQgKi9cblx0Y2hlY2tTZWxlY3RlZFJhZGlvKCkge1xuXHRcdGlmICh0aGlzLnNlbGVjdGVkICYmICF0aGlzLl9zZWxlY3RlZC5jaGVja2VkKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkLmNoZWNrZWQgPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBVc2UgdGhlIHZhbHVlIG9mIHRoZSBgUmFkaW9Hcm91cGAgdG8gdXBkYXRlIHRoZSBzZWxlY3RlZCByYWRpbyB0byB0aGUgcmlnaHQgc3RhdGUgKHNlbGVjdGVkIHN0YXRlKS5cblx0ICovXG5cdHVwZGF0ZVNlbGVjdGVkUmFkaW9Gcm9tVmFsdWUoKSB7XG5cdFx0bGV0IGFscmVhZHlTZWxlY3RlZCA9IHRoaXMuX3NlbGVjdGVkICE9IG51bGwgJiYgdGhpcy5fc2VsZWN0ZWQudmFsdWUgPT09IHRoaXMuX3ZhbHVlO1xuXG5cdFx0aWYgKHRoaXMucmFkaW9zICYmICFhbHJlYWR5U2VsZWN0ZWQpIHtcblx0XHRcdHRoaXMuX3NlbGVjdGVkID0gbnVsbDtcblx0XHRcdHRoaXMucmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge1xuXHRcdFx0XHRpZiAocmFkaW8uY2hlY2tlZCkge1xuXHRcdFx0XHRcdHRoaXMuX3NlbGVjdGVkID0gcmFkaW87XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgY2xhc3Mgb2YgYFJhZGlvQ2hhbmdlYCB0byBlbWl0IHRoZSBjaGFuZ2UgaW4gdGhlIGBSYWRpb0dyb3VwYC5cblx0ICovXG5cdGVtaXRDaGFuZ2VFdmVudChldmVudDogUmFkaW9DaGFuZ2UpIHtcblx0XHR0aGlzLmNoYW5nZS5lbWl0KGV2ZW50KTtcblx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZShldmVudC52YWx1ZSk7XG5cdFx0dGhpcy5vblRvdWNoZWQoKTtcblx0fVxuXG5cdHVwZGF0ZVJhZGlvTmFtZXMoKSB7XG5cdFx0Y29uc29sZS53YXJuKFwidXBkYXRlUmFkaW9OYW1lcyBoYWQgYmVlbiBkZXByZWNhdGVkLiBVc2UgdXBkYXRlUmFkaW9zIGluc3RlYWRcIik7XG5cdFx0dGhpcy51cGRhdGVSYWRpb3MoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTeW5jaHJvbml6ZXMgcmFkaW8gcHJvcGVydGllcy5cblx0ICovXG5cdHVwZGF0ZVJhZGlvcygpIHtcblx0XHRpZiAodGhpcy5yYWRpb3MpIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnJhZGlvcy5mb3JFYWNoKHJhZGlvID0+IHJhZGlvLm5hbWUgPSB0aGlzLm5hbWUpO1xuXHRcdFx0XHRpZiAodGhpcy5sYWJlbFBsYWNlbWVudCA9PT0gXCJsZWZ0XCIpIHtcblx0XHRcdFx0XHR0aGlzLnJhZGlvcy5mb3JFYWNoKHJhZGlvID0+IHJhZGlvLmxhYmVsUGxhY2VtZW50ID0gXCJsZWZ0XCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlcyB0aGUgdmFsdWUgb2YgdGhlIGBSYWRpb0dyb3VwYCB1c2luZyB0aGUgcHJvdmlkZWQgcGFyYW1ldGVyLlxuXHQgKi9cblx0d3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHR9XG5cblx0bmdBZnRlckNvbnRlbnRJbml0KCkge1xuXHRcdHRoaXMucmFkaW9zLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdHRoaXMudXBkYXRlUmFkaW9zKCk7XG5cdFx0XHR0aGlzLnVwZGF0ZVJhZGlvQ2hhbmdlSGFuZGxlcigpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy51cGRhdGVDaGlsZHJlbigpO1xuXHRcdHRoaXMudXBkYXRlUmFkaW9DaGFuZ2VIYW5kbGVyKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0dGhpcy51cGRhdGVSYWRpb3MoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBVc2VkIHRvIHNldCBtZXRob2QgdG8gcHJvcGFnYXRlIGNoYW5nZXMgYmFjayB0byB0aGUgZm9ybS5cblx0ICovXG5cdHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcblx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBjb250cm9sIGhhcyBiZWVuIHRvdWNoZWQuXG5cdCAqIEBwYXJhbSBmbiBDYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgY2hlY2tib3ggaXMgdG91Y2hlZC5cblx0ICovXG5cdHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSBmbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBOZWVkZWQgdG8gcHJvcGVybHkgaW1wbGVtZW50IENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuXHQgKi9cblx0b25Ub3VjaGVkOiAoKSA9PiBhbnkgPSAoKSA9PiB7fTtcblxuXHQvKipcblx0ICogTWV0aG9kIHNldCBpbiByZWdpc3Rlck9uQ2hhbmdlIHRvIHByb3BhZ2F0ZSBjaGFuZ2VzIGJhY2sgdG8gdGhlIGZvcm0uXG5cdCAqL1xuXHRwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcblxuXHRwcm90ZWN0ZWQgdXBkYXRlQ2hpbGRyZW4oKSB7XG5cdFx0aWYgKHRoaXMucmFkaW9zKSB7XG5cdFx0XHR0aGlzLnJhZGlvcy5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnNrZWxldG9uID0gdGhpcy5za2VsZXRvbik7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIHVwZGF0ZVJhZGlvQ2hhbmdlSGFuZGxlcigpIHtcblx0XHR0aGlzLnJhZGlvcy5mb3JFYWNoKHJhZGlvID0+IHtcblx0XHRcdHJhZGlvLnJlZ2lzdGVyUmFkaW9DaGFuZ2VIYW5kbGVyKChldmVudDogUmFkaW9DaGFuZ2UpID0+IHtcblx0XHRcdFx0Ly8gdXBkYXRlIHNlbGVjdGVkIGFuZCB2YWx1ZSBmcm9tIHRoZSBldmVudFxuXHRcdFx0XHR0aGlzLl9zZWxlY3RlZCA9IGV2ZW50LnNvdXJjZTtcblx0XHRcdFx0dGhpcy5fdmFsdWUgPSBldmVudC52YWx1ZTtcblx0XHRcdFx0Ly8gYnViYmxlIHRoZSBldmVudFxuXHRcdFx0XHR0aGlzLmVtaXRDaGFuZ2VFdmVudChldmVudCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufVxuIl19