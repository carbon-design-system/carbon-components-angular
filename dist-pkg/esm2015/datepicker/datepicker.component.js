/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewEncapsulation, ElementRef, HostListener } from "@angular/core";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";
import flatpickr from "flatpickr";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { carbonFlatpickrMonthSelectPlugin } from "./carbon-flatpickr-month-select";
/**
 * [See demo](../../?path=/story/date-picker--single)
 *
 * <example-url>../../iframe.html?id=date-picker--single</example-url>
 */
export class DatePicker {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        /**
         * Select calendar range mode
         */
        this.range = false;
        /**
         * Format of date
         *
         * For reference: https://flatpickr.js.org/formatting/
         */
        this.dateFormat = "m/d/Y";
        this.placeholder = "mm/dd/yyyy";
        this.pattern = "^\\d{1,2}/\\d{1,2}/\\d{4}$";
        this.id = `datepicker-${DatePicker.datePickerCount++}`;
        this.theme = "dark";
        this.disabled = false;
        this.invalid = false;
        this.skeleton = false;
        this.plugins = [];
        this.valueChange = new EventEmitter();
        this._value = [];
        this._flatpickrOptions = {
            allowInput: true
        };
        this.flatpickrBaseOptions = {
            mode: "single",
            dateFormat: "m/d/Y",
            plugins: this.plugins,
            onOpen: () => { this.updateClassNames(); },
            value: this.value
        };
        this.flatpickrInstance = null;
        this.onTouched = () => { };
        this.propagateChange = (_) => { };
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (!v) {
            v = [];
        }
        this._value = v;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set flatpickrOptions(options) {
        this._flatpickrOptions = Object.assign({}, this._flatpickrOptions, options);
    }
    /**
     * @return {?}
     */
    get flatpickrOptions() {
        /** @type {?} */
        const plugins = [...this.plugins, carbonFlatpickrMonthSelectPlugin];
        if (this.range) {
            plugins.push(rangePlugin({ input: `#${this.id}-rangeInput`, position: "left" }));
        }
        return Object.assign({}, this._flatpickrOptions, this.flatpickrBaseOptions, {
            mode: this.range ? "range" : "single",
            plugins,
            dateFormat: this.dateFormat
        });
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set flatpickrOptionsRange(options) {
        console.warn("flatpickrOptionsRange is deprecated, use flatpickrOptions and set the range to true instead");
        this.range = true;
        this.flatpickrOptions = options;
    }
    /**
     * @return {?}
     */
    get flatpickrOptionsRange() {
        console.warn("flatpickrOptionsRange is deprecated, use flatpickrOptions and set the range to true instead");
        return this.flatpickrOptions;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isFlatpickrLoaded()) {
            /** @type {?} */
            let dates = this.flatpickrInstance.selectedDates;
            if (changes["value"] && this.didDateValueChange(changes["value"].currentValue, changes["value"].previousValue)) {
                dates = changes["value"].currentValue;
            }
            // only reset the flatpickr instance on Input changes
            this.flatpickrInstance = flatpickr(`#${this.id}`, this.flatpickrOptions);
            this.setDateValues(dates);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (!this.isFlatpickrLoaded()) {
            this.flatpickrInstance = flatpickr(`#${this.id}`, this.flatpickrOptions);
            // if (and only if) the initialization succeeded, we can set the date values
            if (this.isFlatpickrLoaded()) {
                if (this.value.length > 0) {
                    this.setDateValues(this.value);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    onFocus() {
        this.onTouched();
    }
    /**
     * Writes a value from the model to the component. Expects the value to be `null` or `(Date | string)[]`
     * @param {?} value value received from the model
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this.setDateValues(this.value);
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
     * Cleans up our flatpickr instance
     * @return {?}
     */
    ngOnDestroy() {
        if (!this.isFlatpickrLoaded()) {
            return;
        }
        this.flatpickrInstance.destroy();
    }
    /**
     * Handles the `valueChange` event from the primary/single input
     * @param {?} event
     * @return {?}
     */
    onValueChange(event) {
        if (this.isFlatpickrLoaded()) {
            /** @type {?} */
            const date = this.flatpickrInstance.parseDate(event, this.dateFormat);
            if (this.range) {
                this.setDateValues([date, this.flatpickrInstance.selectedDates[1]]);
            }
            else {
                this.setDateValues([date]);
            }
            this.doSelect(this.flatpickrInstance.selectedDates);
        }
    }
    /**
     * Handles the `valueChange` event from the range input
     * @param {?} event
     * @return {?}
     */
    onRangeValueChange(event) {
        if (this.isFlatpickrLoaded()) {
            /** @type {?} */
            const date = this.flatpickrInstance.parseDate(event, this.dateFormat);
            this.setDateValues([this.flatpickrInstance.selectedDates[0], date]);
            this.doSelect(this.flatpickrInstance.selectedDates);
        }
    }
    /**
     * Carbon uses a number of specific classnames for parts of the flatpickr - this idempotent method applies them if needed.
     * @return {?}
     */
    updateClassNames() {
        if (!this.elementRef) {
            return;
        }
        /** @type {?} */
        const calendarContainer = document.querySelectorAll(".flatpickr-calendar");
        /** @type {?} */
        const monthContainer = document.querySelectorAll(".flatpickr-month");
        /** @type {?} */
        const weekdaysContainer = document.querySelectorAll(".flatpickr-weekdays");
        /** @type {?} */
        const weekdayContainer = document.querySelectorAll(".flatpickr-weekday");
        /** @type {?} */
        const daysContainer = document.querySelectorAll(".flatpickr-days");
        /** @type {?} */
        const dayContainer = document.querySelectorAll(".flatpickr-day");
        /** @type {?} */
        const addClassIfNotExists = (classname, elementList) => {
            Array.from(elementList).forEach(element => {
                if (!element.classList.contains(classname)) {
                    element.classList.add(classname);
                }
            });
        };
        // add classes (but only if they don't exist, small perf win)
        addClassIfNotExists("bx--date-picker__calendar", calendarContainer);
        addClassIfNotExists("bx--date-picker__month", monthContainer);
        addClassIfNotExists("bx--date-picker__weekdays", weekdaysContainer);
        addClassIfNotExists("bx--date-picker__days", daysContainer);
        // add weekday classes and format the text
        Array.from(weekdayContainer).forEach(element => {
            element.innerHTML = element.innerHTML.replace(/\s+/g, "");
            element.classList.add("bx--date-picker__weekday");
        });
        // add day classes and special case the "today" element based on `this.value`
        Array.from(dayContainer).forEach(element => {
            element.classList.add("bx--date-picker__day");
            if (!this.value) {
                return;
            }
            if (element.classList.contains("today") && this.value.length > 0) {
                element.classList.add("no-border");
            }
            else if (element.classList.contains("today") && this.value.length === 0) {
                element.classList.remove("no-border");
            }
        });
    }
    /**
     * Applies the given date value array to both the flatpickr instance and the `input`(s)
     * @param {?} dates the date values to apply
     * @return {?}
     */
    setDateValues(dates) {
        if (this.isFlatpickrLoaded()) {
            /** @type {?} */
            const singleInput = this.elementRef.nativeElement.querySelector(`#${this.id}`);
            /** @type {?} */
            const rangeInput = this.elementRef.nativeElement.querySelector(`#${this.id}-rangeInput`);
            // set the date on the instance
            this.flatpickrInstance.setDate(dates);
            /** @type {?} */
            let singleDate = "";
            // if date is a string, parse and format
            if (typeof dates[0] === "string") {
                singleDate = this.flatpickrInstance.parseDate(dates[0], this.dateFormat);
                singleDate = this.flatpickrInstance.formatDate(singleDate, this.dateFormat);
                // if date is not a string we can assume it's a Date and we should format
            }
            else if (!!dates[0]) {
                singleDate = this.flatpickrInstance.formatDate(dates[0], this.dateFormat);
            }
            // apply the value
            singleInput.value = singleDate;
            if (rangeInput) {
                /** @type {?} */
                let rangeDate = "";
                // if date is a string, parse and format
                if (typeof dates[1] === "string") {
                    rangeDate = this.flatpickrInstance.parseDate(dates[1].toString(), this.dateFormat);
                    rangeDate = this.flatpickrInstance.formatDate(rangeDate, this.dateFormat);
                    // if date is not a string we can assume it's a Date and we should format
                }
                else if (!!dates[1]) {
                    rangeDate = this.flatpickrInstance.formatDate(dates[1], this.dateFormat);
                }
                // apply the value
                rangeInput.value = rangeDate;
            }
        }
    }
    /**
     * @param {?} selectedValue
     * @return {?}
     */
    doSelect(selectedValue) {
        this.valueChange.emit(selectedValue);
        this.propagateChange(selectedValue);
    }
    /**
     * @param {?} currentValue
     * @param {?} previousValue
     * @return {?}
     */
    didDateValueChange(currentValue, previousValue) {
        return currentValue[0] !== previousValue[0] || currentValue[1] !== previousValue[1];
    }
    /**
     * More advanced checking of the loaded state of flatpickr
     * @return {?}
     */
    isFlatpickrLoaded() {
        // cast the instance to a boolean, and some method that has to exist for the library to be loaded in this case `setDate`
        return !!this.flatpickrInstance && !!this.flatpickrInstance.setDate;
    }
}
DatePicker.datePickerCount = 0;
DatePicker.decorators = [
    { type: Component, args: [{
                selector: "ibm-date-picker",
                template: `
	<div class="bx--form-item">
		<div class="bx--form-item">
			<div
				class="bx--date-picker"
				[ngClass]="{
					'bx--date-picker--range' : range,
					'bx--date-picker--single' : !range,
					'bx--date-picker--light' : theme === 'light',
					'bx--skeleton' : skeleton
				}">
				<div class="bx--date-picker-container">
					<ibm-date-picker-input
						[label]="label"
						[placeholder]="placeholder"
						[pattern]="pattern"
						[id]="id"
						[type]="(range ? 'range' : 'single')"
						[hasIcon]="(range ? false : true)"
						[disabled]="disabled"
						[invalid]="invalid"
						[invalidText]="invalidText"
						[skeleton]="skeleton"
						(valueChange)="onValueChange($event)">
					</ibm-date-picker-input>
				</div>

				<div *ngIf="range" class="bx--date-picker-container">
					<ibm-date-picker-input
						[label]="rangeLabel"
						[placeholder]="placeholder"
						[pattern]="pattern"
						[id]="id + '-rangeInput'"
						[type]="(range ? 'range' : 'single')"
						[hasIcon]="(range ? true : null)"
						[disabled]="disabled"
						[invalid]="invalid"
						[invalidText]="invalidText"
						[skeleton]="skeleton"
						(valueChange)="onRangeValueChange($event)">
					</ibm-date-picker-input>
				</div>
			</div>
		</div>
	</div>
	`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: DatePicker,
                        multi: true
                    }
                ],
                encapsulation: ViewEncapsulation.None,
                styles: [`.dayContainer {
			justify-content: initial;
		}`]
            }] }
];
/** @nocollapse */
DatePicker.ctorParameters = () => [
    { type: ElementRef }
];
DatePicker.propDecorators = {
    range: [{ type: Input }],
    dateFormat: [{ type: Input }],
    label: [{ type: Input }],
    rangeLabel: [{ type: Input }],
    placeholder: [{ type: Input }],
    pattern: [{ type: Input }],
    id: [{ type: Input }],
    value: [{ type: Input }],
    theme: [{ type: Input }],
    disabled: [{ type: Input }],
    invalid: [{ type: Input }],
    invalidText: [{ type: Input }],
    skeleton: [{ type: Input }],
    plugins: [{ type: Input }],
    flatpickrOptions: [{ type: Input }],
    valueChange: [{ type: Output }],
    onFocus: [{ type: HostListener, args: ["focusin",] }]
};
function DatePicker_tsickle_Closure_declarations() {
    /** @type {?} */
    DatePicker.datePickerCount;
    /**
     * Select calendar range mode
     * @type {?}
     */
    DatePicker.prototype.range;
    /**
     * Format of date
     *
     * For reference: https://flatpickr.js.org/formatting/
     * @type {?}
     */
    DatePicker.prototype.dateFormat;
    /** @type {?} */
    DatePicker.prototype.label;
    /** @type {?} */
    DatePicker.prototype.rangeLabel;
    /** @type {?} */
    DatePicker.prototype.placeholder;
    /** @type {?} */
    DatePicker.prototype.pattern;
    /** @type {?} */
    DatePicker.prototype.id;
    /** @type {?} */
    DatePicker.prototype.theme;
    /** @type {?} */
    DatePicker.prototype.disabled;
    /** @type {?} */
    DatePicker.prototype.invalid;
    /** @type {?} */
    DatePicker.prototype.invalidText;
    /** @type {?} */
    DatePicker.prototype.skeleton;
    /** @type {?} */
    DatePicker.prototype.plugins;
    /** @type {?} */
    DatePicker.prototype.valueChange;
    /** @type {?} */
    DatePicker.prototype._value;
    /** @type {?} */
    DatePicker.prototype._flatpickrOptions;
    /** @type {?} */
    DatePicker.prototype.flatpickrBaseOptions;
    /** @type {?} */
    DatePicker.prototype.flatpickrInstance;
    /** @type {?} */
    DatePicker.prototype.onTouched;
    /** @type {?} */
    DatePicker.prototype.propagateChange;
    /** @type {?} */
    DatePicker.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixpQkFBaUIsRUFDakIsVUFBVSxFQUVWLFlBQVksRUFLWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLFdBQVcsTUFBTSxvQ0FBb0MsQ0FBQztBQUM3RCxPQUFPLFNBQVMsTUFBTSxXQUFXLENBQUM7QUFDbEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7OztBQXFFbkYsTUFBTTs7OztJQTRGTCxZQUFzQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZOzs7O3FCQXRGM0IsS0FBSzs7Ozs7OzBCQU9BLE9BQU87MkJBTU4sWUFBWTt1QkFFaEIsNEJBQTRCO2tCQUVqQyxjQUFjLFVBQVUsQ0FBQyxlQUFlLEVBQUUsRUFBRTtxQkFhdkIsTUFBTTt3QkFFckIsS0FBSzt1QkFFTixLQUFLO3dCQUlKLEtBQUs7dUJBRU4sRUFBRTsyQkE0QnNCLElBQUksWUFBWSxFQUFFO3NCQUUxQyxFQUFFO2lDQUVTO1lBQzdCLFVBQVUsRUFBRSxJQUFJO1NBQ2hCO29DQUVnQztZQUNoQyxJQUFJLEVBQUUsUUFBUTtZQUNkLFVBQVUsRUFBRSxPQUFPO1lBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsRUFBRTtZQUMxQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDakI7aUNBRTZCLElBQUk7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QVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNkNUO2dCQU1ELFNBQVMsRUFBRTtvQkFDVjt3QkFDQyxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVTt3QkFDdkIsS0FBSyxFQUFFLElBQUk7cUJBQ1g7aUJBQ0Q7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7eUJBWHBDOztJQUVFO2FBVUg7Ozs7WUEvRUEsVUFBVTs7O29CQXNGVCxLQUFLO3lCQU9MLEtBQUs7b0JBRUwsS0FBSzt5QkFFTCxLQUFLOzBCQUVMLEtBQUs7c0JBRUwsS0FBSztpQkFFTCxLQUFLO29CQUVMLEtBQUs7b0JBV0wsS0FBSzt1QkFFTCxLQUFLO3NCQUVMLEtBQUs7MEJBRUwsS0FBSzt1QkFFTCxLQUFLO3NCQUVMLEtBQUs7K0JBRUwsS0FBSzswQkEwQkwsTUFBTTtzQkFnRE4sWUFBWSxTQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Vmlld0VuY2Fwc3VsYXRpb24sXG5cdEVsZW1lbnRSZWYsXG5cdE9uRGVzdHJveSxcblx0SG9zdExpc3RlbmVyLFxuXHRUZW1wbGF0ZVJlZixcblx0T25DaGFuZ2VzLFxuXHRTaW1wbGVDaGFuZ2VzLFxuXHRBZnRlclZpZXdDaGVja2VkXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgcmFuZ2VQbHVnaW4gZnJvbSBcImZsYXRwaWNrci9kaXN0L3BsdWdpbnMvcmFuZ2VQbHVnaW5cIjtcbmltcG9ydCBmbGF0cGlja3IgZnJvbSBcImZsYXRwaWNrclwiO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IGNhcmJvbkZsYXRwaWNrck1vbnRoU2VsZWN0UGx1Z2luIH0gZnJvbSBcIi4vY2FyYm9uLWZsYXRwaWNrci1tb250aC1zZWxlY3RcIjtcblxuLyoqXG4gKiBbU2VlIGRlbW9dKC4uLy4uLz9wYXRoPS9zdG9yeS9kYXRlLXBpY2tlci0tc2luZ2xlKVxuICpcbiAqIDxleGFtcGxlLXVybD4uLi8uLi9pZnJhbWUuaHRtbD9pZD1kYXRlLXBpY2tlci0tc2luZ2xlPC9leGFtcGxlLXVybD5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1kYXRlLXBpY2tlclwiLFxuXHR0ZW1wbGF0ZTogYFxuXHQ8ZGl2IGNsYXNzPVwiYngtLWZvcm0taXRlbVwiPlxuXHRcdDxkaXYgY2xhc3M9XCJieC0tZm9ybS1pdGVtXCI+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzPVwiYngtLWRhdGUtcGlja2VyXCJcblx0XHRcdFx0W25nQ2xhc3NdPVwie1xuXHRcdFx0XHRcdCdieC0tZGF0ZS1waWNrZXItLXJhbmdlJyA6IHJhbmdlLFxuXHRcdFx0XHRcdCdieC0tZGF0ZS1waWNrZXItLXNpbmdsZScgOiAhcmFuZ2UsXG5cdFx0XHRcdFx0J2J4LS1kYXRlLXBpY2tlci0tbGlnaHQnIDogdGhlbWUgPT09ICdsaWdodCcsXG5cdFx0XHRcdFx0J2J4LS1za2VsZXRvbicgOiBza2VsZXRvblxuXHRcdFx0XHR9XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJieC0tZGF0ZS1waWNrZXItY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGlibS1kYXRlLXBpY2tlci1pbnB1dFxuXHRcdFx0XHRcdFx0W2xhYmVsXT1cImxhYmVsXCJcblx0XHRcdFx0XHRcdFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG5cdFx0XHRcdFx0XHRbcGF0dGVybl09XCJwYXR0ZXJuXCJcblx0XHRcdFx0XHRcdFtpZF09XCJpZFwiXG5cdFx0XHRcdFx0XHRbdHlwZV09XCIocmFuZ2UgPyAncmFuZ2UnIDogJ3NpbmdsZScpXCJcblx0XHRcdFx0XHRcdFtoYXNJY29uXT1cIihyYW5nZSA/IGZhbHNlIDogdHJ1ZSlcIlxuXHRcdFx0XHRcdFx0W2Rpc2FibGVkXT1cImRpc2FibGVkXCJcblx0XHRcdFx0XHRcdFtpbnZhbGlkXT1cImludmFsaWRcIlxuXHRcdFx0XHRcdFx0W2ludmFsaWRUZXh0XT1cImludmFsaWRUZXh0XCJcblx0XHRcdFx0XHRcdFtza2VsZXRvbl09XCJza2VsZXRvblwiXG5cdFx0XHRcdFx0XHQodmFsdWVDaGFuZ2UpPVwib25WYWx1ZUNoYW5nZSgkZXZlbnQpXCI+XG5cdFx0XHRcdFx0PC9pYm0tZGF0ZS1waWNrZXItaW5wdXQ+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgKm5nSWY9XCJyYW5nZVwiIGNsYXNzPVwiYngtLWRhdGUtcGlja2VyLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxpYm0tZGF0ZS1waWNrZXItaW5wdXRcblx0XHRcdFx0XHRcdFtsYWJlbF09XCJyYW5nZUxhYmVsXCJcblx0XHRcdFx0XHRcdFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG5cdFx0XHRcdFx0XHRbcGF0dGVybl09XCJwYXR0ZXJuXCJcblx0XHRcdFx0XHRcdFtpZF09XCJpZCArICctcmFuZ2VJbnB1dCdcIlxuXHRcdFx0XHRcdFx0W3R5cGVdPVwiKHJhbmdlID8gJ3JhbmdlJyA6ICdzaW5nbGUnKVwiXG5cdFx0XHRcdFx0XHRbaGFzSWNvbl09XCIocmFuZ2UgPyB0cnVlIDogbnVsbClcIlxuXHRcdFx0XHRcdFx0W2Rpc2FibGVkXT1cImRpc2FibGVkXCJcblx0XHRcdFx0XHRcdFtpbnZhbGlkXT1cImludmFsaWRcIlxuXHRcdFx0XHRcdFx0W2ludmFsaWRUZXh0XT1cImludmFsaWRUZXh0XCJcblx0XHRcdFx0XHRcdFtza2VsZXRvbl09XCJza2VsZXRvblwiXG5cdFx0XHRcdFx0XHQodmFsdWVDaGFuZ2UpPVwib25SYW5nZVZhbHVlQ2hhbmdlKCRldmVudClcIj5cblx0XHRcdFx0XHQ8L2libS1kYXRlLXBpY2tlci1pbnB1dD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG5cdGAsXG5cdHN0eWxlczogW1xuXHRcdGAuZGF5Q29udGFpbmVyIHtcblx0XHRcdGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcblx0XHR9YFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHRcdHVzZUV4aXN0aW5nOiBEYXRlUGlja2VyLFxuXHRcdFx0bXVsdGk6IHRydWVcblx0XHR9XG5cdF0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlciBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdDaGVja2VkIHtcblx0cHJpdmF0ZSBzdGF0aWMgZGF0ZVBpY2tlckNvdW50ID0gMDtcblxuXHQvKipcblx0ICogU2VsZWN0IGNhbGVuZGFyIHJhbmdlIG1vZGVcblx0ICovXG5cdEBJbnB1dCgpIHJhbmdlID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIEZvcm1hdCBvZiBkYXRlXG5cdCAqXG5cdCAqIEZvciByZWZlcmVuY2U6IGh0dHBzOi8vZmxhdHBpY2tyLmpzLm9yZy9mb3JtYXR0aW5nL1xuXHQgKi9cblx0QElucHV0KCkgZGF0ZUZvcm1hdCA9IFwibS9kL1lcIjtcblxuXHRASW5wdXQoKSBsYWJlbDogc3RyaW5nICB8IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QElucHV0KCkgcmFuZ2VMYWJlbDogc3RyaW5nO1xuXG5cdEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gXCJtbS9kZC95eXl5XCI7XG5cblx0QElucHV0KCkgcGF0dGVybiA9IFwiXlxcXFxkezEsMn0vXFxcXGR7MSwyfS9cXFxcZHs0fSRcIjtcblxuXHRASW5wdXQoKSBpZCA9IGBkYXRlcGlja2VyLSR7RGF0ZVBpY2tlci5kYXRlUGlja2VyQ291bnQrK31gO1xuXG5cdEBJbnB1dCgpIHNldCB2YWx1ZSh2OiAoRGF0ZSB8IHN0cmluZylbXSkge1xuXHRcdGlmICghdikge1xuXHRcdFx0diA9IFtdO1xuXHRcdH1cblx0XHR0aGlzLl92YWx1ZSA9IHY7XG5cdH1cblxuXHRnZXQgdmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3ZhbHVlO1xuXHR9XG5cblx0QElucHV0KCkgdGhlbWU6IFwibGlnaHRcIiB8IFwiZGFya1wiID0gXCJkYXJrXCI7XG5cblx0QElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcblxuXHRASW5wdXQoKSBpbnZhbGlkID0gZmFsc2U7XG5cblx0QElucHV0KCkgaW52YWxpZFRleHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QElucHV0KCkgc2tlbGV0b24gPSBmYWxzZTtcblxuXHRASW5wdXQoKSBwbHVnaW5zID0gW107XG5cblx0QElucHV0KClcblx0c2V0IGZsYXRwaWNrck9wdGlvbnMob3B0aW9ucykge1xuXHRcdHRoaXMuX2ZsYXRwaWNrck9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9mbGF0cGlja3JPcHRpb25zLCBvcHRpb25zKTtcblx0fVxuXHRnZXQgZmxhdHBpY2tyT3B0aW9ucygpIHtcblx0XHRjb25zdCBwbHVnaW5zID0gWy4uLnRoaXMucGx1Z2lucywgY2FyYm9uRmxhdHBpY2tyTW9udGhTZWxlY3RQbHVnaW5dO1xuXHRcdGlmICh0aGlzLnJhbmdlKSB7XG5cdFx0XHRwbHVnaW5zLnB1c2gocmFuZ2VQbHVnaW4oeyBpbnB1dDogYCMke3RoaXMuaWR9LXJhbmdlSW5wdXRgLCBwb3NpdGlvbjogXCJsZWZ0XCJ9KSk7XG5cdFx0fVxuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9mbGF0cGlja3JPcHRpb25zLCB0aGlzLmZsYXRwaWNrckJhc2VPcHRpb25zLCB7XG5cdFx0XHRtb2RlOiB0aGlzLnJhbmdlID8gXCJyYW5nZVwiIDogXCJzaW5nbGVcIixcblx0XHRcdHBsdWdpbnMsXG5cdFx0XHRkYXRlRm9ybWF0OiB0aGlzLmRhdGVGb3JtYXRcblx0XHR9KTtcblx0fVxuXG5cdHNldCBmbGF0cGlja3JPcHRpb25zUmFuZ2UgKG9wdGlvbnMpIHtcblx0XHRjb25zb2xlLndhcm4oXCJmbGF0cGlja3JPcHRpb25zUmFuZ2UgaXMgZGVwcmVjYXRlZCwgdXNlIGZsYXRwaWNrck9wdGlvbnMgYW5kIHNldCB0aGUgcmFuZ2UgdG8gdHJ1ZSBpbnN0ZWFkXCIpO1xuXHRcdHRoaXMucmFuZ2UgPSB0cnVlO1xuXHRcdHRoaXMuZmxhdHBpY2tyT3B0aW9ucyA9IG9wdGlvbnM7XG5cdH1cblx0Z2V0IGZsYXRwaWNrck9wdGlvbnNSYW5nZSAoKSB7XG5cdFx0Y29uc29sZS53YXJuKFwiZmxhdHBpY2tyT3B0aW9uc1JhbmdlIGlzIGRlcHJlY2F0ZWQsIHVzZSBmbGF0cGlja3JPcHRpb25zIGFuZCBzZXQgdGhlIHJhbmdlIHRvIHRydWUgaW5zdGVhZFwiKTtcblx0XHRyZXR1cm4gdGhpcy5mbGF0cGlja3JPcHRpb25zO1xuXHR9XG5cblx0QE91dHB1dCgpIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwcm90ZWN0ZWQgX3ZhbHVlID0gW107XG5cblx0cHJvdGVjdGVkIF9mbGF0cGlja3JPcHRpb25zID0ge1xuXHRcdGFsbG93SW5wdXQ6IHRydWVcblx0fTtcblxuXHRwcm90ZWN0ZWQgZmxhdHBpY2tyQmFzZU9wdGlvbnMgPSB7XG5cdFx0bW9kZTogXCJzaW5nbGVcIixcblx0XHRkYXRlRm9ybWF0OiBcIm0vZC9ZXCIsXG5cdFx0cGx1Z2luczogdGhpcy5wbHVnaW5zLFxuXHRcdG9uT3BlbjogKCkgPT4geyB0aGlzLnVwZGF0ZUNsYXNzTmFtZXMoKTsgfSxcblx0XHR2YWx1ZTogdGhpcy52YWx1ZVxuXHR9O1xuXG5cdHByb3RlY3RlZCBmbGF0cGlja3JJbnN0YW5jZSA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRpZiAodGhpcy5pc0ZsYXRwaWNrckxvYWRlZCgpKSB7XG5cdFx0XHRsZXQgZGF0ZXMgPSB0aGlzLmZsYXRwaWNrckluc3RhbmNlLnNlbGVjdGVkRGF0ZXM7XG5cdFx0XHRpZiAoY2hhbmdlcy52YWx1ZSAmJiB0aGlzLmRpZERhdGVWYWx1ZUNoYW5nZShjaGFuZ2VzLnZhbHVlLmN1cnJlbnRWYWx1ZSwgY2hhbmdlcy52YWx1ZS5wcmV2aW91c1ZhbHVlKSkge1xuXHRcdFx0XHRkYXRlcyA9IGNoYW5nZXMudmFsdWUuY3VycmVudFZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gb25seSByZXNldCB0aGUgZmxhdHBpY2tyIGluc3RhbmNlIG9uIElucHV0IGNoYW5nZXNcblx0XHRcdHRoaXMuZmxhdHBpY2tySW5zdGFuY2UgPSBmbGF0cGlja3IoYCMke3RoaXMuaWR9YCwgdGhpcy5mbGF0cGlja3JPcHRpb25zKTtcblx0XHRcdHRoaXMuc2V0RGF0ZVZhbHVlcyhkYXRlcyk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gYmVjYXVzZSB0aGUgYWN0dWFsIHZpZXcgbWF5IGJlIGRlbGF5ZWQgaW4gbG9hZGluZyAodGhpbmsgcHJvamVjdGlvbiBpbnRvIGEgdGFiIHBhbmUpXG5cdC8vIGFuZCBiZWNhdXNlIHdlIHJlbHkgb24gYSBsaWJyYXJ5IHRoYXQgb3BlcmF0ZXMgb3V0c2lkZSB0aGUgQW5ndWxhciB2aWV3IG9mIHRoZSB3b3JsZFxuXHQvLyB3ZSBuZWVkIHRvIGtlZXAgdHJ5aW5nIHRvIGxvYWQgdGhlIGxpYnJhcnksIHVudGlsIHRoZSByZWxldmFudCBET00gaXMgYWN0dWFsbHkgbGl2ZVxuXHRuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG5cdFx0aWYgKCF0aGlzLmlzRmxhdHBpY2tyTG9hZGVkKCkpIHtcblx0XHRcdHRoaXMuZmxhdHBpY2tySW5zdGFuY2UgPSBmbGF0cGlja3IoYCMke3RoaXMuaWR9YCwgdGhpcy5mbGF0cGlja3JPcHRpb25zKTtcblxuXHRcdFx0Ly8gaWYgKGFuZCBvbmx5IGlmKSB0aGUgaW5pdGlhbGl6YXRpb24gc3VjY2VlZGVkLCB3ZSBjYW4gc2V0IHRoZSBkYXRlIHZhbHVlc1xuXHRcdFx0aWYgKHRoaXMuaXNGbGF0cGlja3JMb2FkZWQoKSkge1xuXHRcdFx0XHRpZiAodGhpcy52YWx1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXREYXRlVmFsdWVzKHRoaXMudmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcihcImZvY3VzaW5cIilcblx0b25Gb2N1cygpIHtcblx0XHR0aGlzLm9uVG91Y2hlZCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdyaXRlcyBhIHZhbHVlIGZyb20gdGhlIG1vZGVsIHRvIHRoZSBjb21wb25lbnQuIEV4cGVjdHMgdGhlIHZhbHVlIHRvIGJlIGBudWxsYCBvciBgKERhdGUgfCBzdHJpbmcpW11gXG5cdCAqIEBwYXJhbSB2YWx1ZSB2YWx1ZSByZWNlaXZlZCBmcm9tIHRoZSBtb2RlbFxuXHQgKi9cblx0d3JpdGVWYWx1ZSh2YWx1ZTogKERhdGUgfCBzdHJpbmcpW10pIHtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5zZXREYXRlVmFsdWVzKHRoaXMudmFsdWUpO1xuXHR9XG5cblx0cmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG5cdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcblx0fVxuXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcblx0XHR0aGlzLm9uVG91Y2hlZCA9IGZuO1xuXHR9XG5cblx0b25Ub3VjaGVkOiAoKSA9PiBhbnkgPSAoKSA9PiB7fTtcblxuXHRwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcblxuXHQvKipcblx0ICogQ2xlYW5zIHVwIG91ciBmbGF0cGlja3IgaW5zdGFuY2Vcblx0ICovXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdGlmICghdGhpcy5pc0ZsYXRwaWNrckxvYWRlZCgpKSB7IHJldHVybjsgfVxuXHRcdHRoaXMuZmxhdHBpY2tySW5zdGFuY2UuZGVzdHJveSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgdGhlIGB2YWx1ZUNoYW5nZWAgZXZlbnQgZnJvbSB0aGUgcHJpbWFyeS9zaW5nbGUgaW5wdXRcblx0ICovXG5cdG9uVmFsdWVDaGFuZ2UoZXZlbnQ6IHN0cmluZykge1xuXHRcdGlmICh0aGlzLmlzRmxhdHBpY2tyTG9hZGVkKCkpIHtcblx0XHRcdGNvbnN0IGRhdGUgPSB0aGlzLmZsYXRwaWNrckluc3RhbmNlLnBhcnNlRGF0ZShldmVudCwgdGhpcy5kYXRlRm9ybWF0KTtcblx0XHRcdGlmICh0aGlzLnJhbmdlKSB7XG5cdFx0XHRcdHRoaXMuc2V0RGF0ZVZhbHVlcyhbZGF0ZSwgdGhpcy5mbGF0cGlja3JJbnN0YW5jZS5zZWxlY3RlZERhdGVzWzFdXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNldERhdGVWYWx1ZXMoW2RhdGVdKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZG9TZWxlY3QodGhpcy5mbGF0cGlja3JJbnN0YW5jZS5zZWxlY3RlZERhdGVzKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyB0aGUgYHZhbHVlQ2hhbmdlYCBldmVudCBmcm9tIHRoZSByYW5nZSBpbnB1dFxuXHQgKi9cblx0b25SYW5nZVZhbHVlQ2hhbmdlKGV2ZW50OiBzdHJpbmcpIHtcblx0XHRpZiAodGhpcy5pc0ZsYXRwaWNrckxvYWRlZCgpKSB7XG5cdFx0XHRjb25zdCBkYXRlID0gdGhpcy5mbGF0cGlja3JJbnN0YW5jZS5wYXJzZURhdGUoZXZlbnQsIHRoaXMuZGF0ZUZvcm1hdCk7XG5cdFx0XHR0aGlzLnNldERhdGVWYWx1ZXMoW3RoaXMuZmxhdHBpY2tySW5zdGFuY2Uuc2VsZWN0ZWREYXRlc1swXSwgZGF0ZV0pO1xuXHRcdFx0dGhpcy5kb1NlbGVjdCh0aGlzLmZsYXRwaWNrckluc3RhbmNlLnNlbGVjdGVkRGF0ZXMpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBDYXJib24gdXNlcyBhIG51bWJlciBvZiBzcGVjaWZpYyBjbGFzc25hbWVzIGZvciBwYXJ0cyBvZiB0aGUgZmxhdHBpY2tyIC0gdGhpcyBpZGVtcG90ZW50IG1ldGhvZCBhcHBsaWVzIHRoZW0gaWYgbmVlZGVkLlxuXHQgKi9cblx0cHJvdGVjdGVkIHVwZGF0ZUNsYXNzTmFtZXMoKSB7XG5cdFx0aWYgKCF0aGlzLmVsZW1lbnRSZWYpIHsgcmV0dXJuOyB9XG5cblx0XHQvLyBnZXQgYWxsIHRoZSBwb3NzaWJsZSBmbGF0cGlja3JzIGluIHRoZSBkb2N1bWVudCAtIHdlIG5lZWQgdG8gYWRkIGNsYXNzZXMgdG8gKHBvdGVudGlhbGx5KSBhbGwgb2YgdGhlbVxuXHRcdGNvbnN0IGNhbGVuZGFyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mbGF0cGlja3ItY2FsZW5kYXJcIik7XG5cdFx0Y29uc3QgbW9udGhDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZsYXRwaWNrci1tb250aFwiKTtcblx0XHRjb25zdCB3ZWVrZGF5c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmxhdHBpY2tyLXdlZWtkYXlzXCIpO1xuXHRcdGNvbnN0IHdlZWtkYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZsYXRwaWNrci13ZWVrZGF5XCIpO1xuXHRcdGNvbnN0IGRheXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZsYXRwaWNrci1kYXlzXCIpO1xuXHRcdGNvbnN0IGRheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmxhdHBpY2tyLWRheVwiKTtcblxuXHRcdC8vIGFkZCBjbGFzc2VzIHRvIGxpc3RzIG9mIGVsZW1lbnRzXG5cdFx0Y29uc3QgYWRkQ2xhc3NJZk5vdEV4aXN0cyA9IChjbGFzc25hbWU6IHN0cmluZywgZWxlbWVudExpc3Q6IE5vZGVMaXN0T2Y8RWxlbWVudD4pID0+IHtcblx0XHRcdEFycmF5LmZyb20oZWxlbWVudExpc3QpLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0XHRcdGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NuYW1lKSkge1xuXHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc25hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0Ly8gYWRkIGNsYXNzZXMgKGJ1dCBvbmx5IGlmIHRoZXkgZG9uJ3QgZXhpc3QsIHNtYWxsIHBlcmYgd2luKVxuXHRcdGFkZENsYXNzSWZOb3RFeGlzdHMoXCJieC0tZGF0ZS1waWNrZXJfX2NhbGVuZGFyXCIsIGNhbGVuZGFyQ29udGFpbmVyKTtcblx0XHRhZGRDbGFzc0lmTm90RXhpc3RzKFwiYngtLWRhdGUtcGlja2VyX19tb250aFwiLCBtb250aENvbnRhaW5lcik7XG5cdFx0YWRkQ2xhc3NJZk5vdEV4aXN0cyhcImJ4LS1kYXRlLXBpY2tlcl9fd2Vla2RheXNcIiwgd2Vla2RheXNDb250YWluZXIpO1xuXHRcdGFkZENsYXNzSWZOb3RFeGlzdHMoXCJieC0tZGF0ZS1waWNrZXJfX2RheXNcIiwgZGF5c0NvbnRhaW5lcik7XG5cblx0XHQvLyBhZGQgd2Vla2RheSBjbGFzc2VzIGFuZCBmb3JtYXQgdGhlIHRleHRcblx0XHRBcnJheS5mcm9tKHdlZWtkYXlDb250YWluZXIpLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0XHRlbGVtZW50LmlubmVySFRNTCA9IGVsZW1lbnQuaW5uZXJIVE1MLnJlcGxhY2UoL1xccysvZywgXCJcIik7XG5cdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJieC0tZGF0ZS1waWNrZXJfX3dlZWtkYXlcIik7XG5cdFx0fSk7XG5cblx0XHQvLyBhZGQgZGF5IGNsYXNzZXMgYW5kIHNwZWNpYWwgY2FzZSB0aGUgXCJ0b2RheVwiIGVsZW1lbnQgYmFzZWQgb24gYHRoaXMudmFsdWVgXG5cdFx0QXJyYXkuZnJvbShkYXlDb250YWluZXIpLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJieC0tZGF0ZS1waWNrZXJfX2RheVwiKTtcblx0XHRcdGlmICghdGhpcy52YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b2RheVwiKSAmJiB0aGlzLnZhbHVlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibm8tYm9yZGVyXCIpO1xuXHRcdFx0fSBlbHNlIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInRvZGF5XCIpICYmIHRoaXMudmFsdWUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWJvcmRlclwiKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBcHBsaWVzIHRoZSBnaXZlbiBkYXRlIHZhbHVlIGFycmF5IHRvIGJvdGggdGhlIGZsYXRwaWNrciBpbnN0YW5jZSBhbmQgdGhlIGBpbnB1dGAocylcblx0ICogQHBhcmFtIGRhdGVzIHRoZSBkYXRlIHZhbHVlcyB0byBhcHBseVxuXHQgKi9cblx0cHJvdGVjdGVkIHNldERhdGVWYWx1ZXMoZGF0ZXM6IChEYXRlIHwgc3RyaW5nKVtdKSB7XG5cdFx0aWYgKHRoaXMuaXNGbGF0cGlja3JMb2FkZWQoKSkge1xuXHRcdFx0Y29uc3Qgc2luZ2xlSW5wdXQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmlkfWApO1xuXHRcdFx0Y29uc3QgcmFuZ2VJbnB1dCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuaWR9LXJhbmdlSW5wdXRgKTtcblxuXHRcdFx0Ly8gc2V0IHRoZSBkYXRlIG9uIHRoZSBpbnN0YW5jZVxuXHRcdFx0dGhpcy5mbGF0cGlja3JJbnN0YW5jZS5zZXREYXRlKGRhdGVzKTtcblxuXHRcdFx0Ly8gd2UgY2FuIGVpdGhlciBzZXQgYSBkYXRlIHZhbHVlIG9yIGFuIGVtcHR5IHN0cmluZywgc28gd2Ugc3RhcnQgd2l0aCBhbiBlbXB0eSBzdHJpbmdcblx0XHRcdGxldCBzaW5nbGVEYXRlID0gXCJcIjtcblx0XHRcdC8vIGlmIGRhdGUgaXMgYSBzdHJpbmcsIHBhcnNlIGFuZCBmb3JtYXRcblx0XHRcdGlmICh0eXBlb2YgZGF0ZXNbMF0gPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0c2luZ2xlRGF0ZSA9IHRoaXMuZmxhdHBpY2tySW5zdGFuY2UucGFyc2VEYXRlKGRhdGVzWzBdLCB0aGlzLmRhdGVGb3JtYXQpO1xuXHRcdFx0XHRzaW5nbGVEYXRlID0gdGhpcy5mbGF0cGlja3JJbnN0YW5jZS5mb3JtYXREYXRlKHNpbmdsZURhdGUsIHRoaXMuZGF0ZUZvcm1hdCk7XG5cdFx0XHQvLyBpZiBkYXRlIGlzIG5vdCBhIHN0cmluZyB3ZSBjYW4gYXNzdW1lIGl0J3MgYSBEYXRlIGFuZCB3ZSBzaG91bGQgZm9ybWF0XG5cdFx0XHR9IGVsc2UgaWYgKCEhZGF0ZXNbMF0pIHtcblx0XHRcdFx0c2luZ2xlRGF0ZSA9IHRoaXMuZmxhdHBpY2tySW5zdGFuY2UuZm9ybWF0RGF0ZShkYXRlc1swXSwgdGhpcy5kYXRlRm9ybWF0KTtcblx0XHRcdH1cblx0XHRcdC8vIGFwcGx5IHRoZSB2YWx1ZVxuXHRcdFx0c2luZ2xlSW5wdXQudmFsdWUgPSBzaW5nbGVEYXRlO1xuXG5cdFx0XHRpZiAocmFuZ2VJbnB1dCkge1xuXHRcdFx0XHQvLyB3ZSBjYW4gZWl0aGVyIHNldCBhIGRhdGUgdmFsdWUgb3IgYW4gZW1wdHkgc3RyaW5nLCBzbyB3ZSBzdGFydCB3aXRoIGFuIGVtcHR5IHN0cmluZ1xuXHRcdFx0XHRsZXQgcmFuZ2VEYXRlID0gXCJcIjtcblx0XHRcdFx0Ly8gaWYgZGF0ZSBpcyBhIHN0cmluZywgcGFyc2UgYW5kIGZvcm1hdFxuXHRcdFx0XHRpZiAodHlwZW9mIGRhdGVzWzFdID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdFx0cmFuZ2VEYXRlID0gdGhpcy5mbGF0cGlja3JJbnN0YW5jZS5wYXJzZURhdGUoZGF0ZXNbMV0udG9TdHJpbmcoKSwgdGhpcy5kYXRlRm9ybWF0KTtcblx0XHRcdFx0XHRyYW5nZURhdGUgPSB0aGlzLmZsYXRwaWNrckluc3RhbmNlLmZvcm1hdERhdGUocmFuZ2VEYXRlLCB0aGlzLmRhdGVGb3JtYXQpO1xuXHRcdFx0XHQvLyBpZiBkYXRlIGlzIG5vdCBhIHN0cmluZyB3ZSBjYW4gYXNzdW1lIGl0J3MgYSBEYXRlIGFuZCB3ZSBzaG91bGQgZm9ybWF0XG5cdFx0XHRcdH0gZWxzZSBpZiAoISFkYXRlc1sxXSkge1xuXHRcdFx0XHRcdHJhbmdlRGF0ZSA9IHRoaXMuZmxhdHBpY2tySW5zdGFuY2UuZm9ybWF0RGF0ZShkYXRlc1sxXSwgdGhpcy5kYXRlRm9ybWF0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBhcHBseSB0aGUgdmFsdWVcblx0XHRcdFx0cmFuZ2VJbnB1dC52YWx1ZSA9IHJhbmdlRGF0ZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgZG9TZWxlY3Qoc2VsZWN0ZWRWYWx1ZTogKERhdGUgfCBzdHJpbmcpW10pIHtcblx0XHR0aGlzLnZhbHVlQ2hhbmdlLmVtaXQoc2VsZWN0ZWRWYWx1ZSk7XG5cdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2Uoc2VsZWN0ZWRWYWx1ZSk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZGlkRGF0ZVZhbHVlQ2hhbmdlKGN1cnJlbnRWYWx1ZSwgcHJldmlvdXNWYWx1ZSkge1xuXHRcdHJldHVybiBjdXJyZW50VmFsdWVbMF0gIT09IHByZXZpb3VzVmFsdWVbMF0gfHwgY3VycmVudFZhbHVlWzFdICE9PSBwcmV2aW91c1ZhbHVlWzFdO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1vcmUgYWR2YW5jZWQgY2hlY2tpbmcgb2YgdGhlIGxvYWRlZCBzdGF0ZSBvZiBmbGF0cGlja3Jcblx0ICovXG5cdHByb3RlY3RlZCBpc0ZsYXRwaWNrckxvYWRlZCgpIHtcblx0XHQvLyBjYXN0IHRoZSBpbnN0YW5jZSB0byBhIGJvb2xlYW4sIGFuZCBzb21lIG1ldGhvZCB0aGF0IGhhcyB0byBleGlzdCBmb3IgdGhlIGxpYnJhcnkgdG8gYmUgbG9hZGVkIGluIHRoaXMgY2FzZSBgc2V0RGF0ZWBcblx0XHRyZXR1cm4gISF0aGlzLmZsYXRwaWNrckluc3RhbmNlICYmICEhdGhpcy5mbGF0cGlja3JJbnN0YW5jZS5zZXREYXRlO1xuXHR9XG59XG4iXX0=