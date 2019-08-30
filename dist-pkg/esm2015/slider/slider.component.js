/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding, Input, Output, EventEmitter, ViewChild, ElementRef, TemplateRef } from "@angular/core";
import { fromEvent } from "rxjs";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
/**
 * Used to select from ranges of values. [See here](https://www.carbondesignsystem.com/components/slider/usage) for usage information.
 *
 * [See demo](../../?path=/story/slider--advanced)
 *
 * The simplest possible slider usage looks something like:
 * ```html
 * <ibm-slider></ibm-slider>
 * ```
 *
 * That will render a slider without labels or alternative value input. Labels can be provided by
 * elements with `[minLabel]` and `[maxLabel]` attributes, and an `input` (may use the `ibmInput` directive) can be supplied
 * for use as an alternative value field.
 *
 * ex:
 * ```html
 * <!-- full example -->
 * <ibm-slider>
 * 		<span minLabel>0GB</span>
 * 		<span maxLabel>100GB</span>
 * 		<input/>
 * 	</ibm-slider>
 * <!-- with just an input -->
 * <ibm-slider>
 * 		<input/>
 * 	</ibm-slider>
 * <!-- with just one label -->
 * <ibm-slider>
 * 		<span maxLabel>Maximum</span>
 * 	</ibm-slider>
 * ```
 *
 * Slider supports `NgModel` by default, as well as two way binding to the `value` input.
 *
 * <example-url>../../iframe.html?id=slider--advanced</example-url>
 */
export class Slider {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        /**
         * The interval for our range
         */
        this.step = 1;
        /**
         * Base ID for the slider. The min and max labels get IDs `${this.id}-bottom-range` and `${this.id}-top-range` respectively
         */
        this.id = `slider-${Slider.count++}`;
        /**
         * Value used to "multiply" the `step` when using arrow keys to select values
         */
        this.shiftMultiplier = 4;
        /**
         * Set to `true` for a loading slider
         */
        this.skeleton = false;
        /**
         * Set to `true` for a slider without arrow key interactions.
         */
        this.disableArrowKeys = false;
        /**
         * Emits every time a new value is selected
         */
        this.valueChange = new EventEmitter();
        this.hostClass = true;
        this.bottomRangeId = `${this.id}-bottom-range`;
        this.topRangeId = `${this.id}-top-range`;
        this.fractionComplete = 0;
        this.isMouseDown = false;
        /**
         * Array of event subscriptions so we can batch unsubscribe in `ngOnDestroy`
         */
        this.eventSubscriptions = [];
        this._min = 0;
        this._max = 100;
        this._value = this.min;
        this._disabled = false;
        /**
         * Send changes back to the model
         */
        this.propagateChange = (_) => { };
        /**
         * Callback to notify the model when our input has been touched
         */
        this.onTouched = () => { };
    }
    /**
     * The lower bound of our range
     * @param {?} v
     * @return {?}
     */
    set min(v) {
        if (!v) {
            return;
        }
        this._min = v;
        // force the component to update
        this.value = this.value;
    }
    /**
     * @return {?}
     */
    get min() {
        return this._min;
    }
    /**
     * The upper bound of our range
     * @param {?} v
     * @return {?}
     */
    set max(v) {
        if (!v) {
            return;
        }
        this._max = v;
        // force the component to update
        this.value = this.value;
    }
    /**
     * @return {?}
     */
    get max() {
        return this._max;
    }
    /**
     * Set the initial value. Available for two way binding
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (!v) {
            v = this.min;
        }
        if (v > this.max) {
            v = this.max;
        }
        if (v < this.min) {
            v = this.min;
        }
        this._value = v;
        if (this.thumb) {
            this.thumb.nativeElement.style.left = `${this.getFractionComplete(v) * 100}%`;
        }
        if (this.filledTrack) {
            this.filledTrack.nativeElement.style.transform = `translate(0%, -50%) ${this.scaleX(this.getFractionComplete(v))}`;
        }
        if (this.input) {
            this.input.value = v.toString();
        }
        this.propagateChange(v);
        this.valueChange.emit(v);
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * Disables the range visually and functionally
     * @param {?} v
     * @return {?}
     */
    set disabled(v) {
        this._disabled = v;
        /** @type {?} */
        const input = this.elementRef.nativeElement.querySelector("input:not([type=range])");
        if (input) {
            input.disabled = v;
        }
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // bind mousemove and mouseup to the document so we don't have issues tracking the mouse
        this.eventSubscriptions.push(fromEvent(document, "mousemove").subscribe(this.onMouseMove.bind(this)));
        this.eventSubscriptions.push(fromEvent(document, "mouseup").subscribe(this.onMouseUp.bind(this)));
        // apply any values we got from before the view initialized
        this.value = this.value;
        // TODO: ontouchstart/ontouchmove/ontouchend
        // set up the optional input
        this.input = this.elementRef.nativeElement.querySelector("input:not([type=range])");
        if (this.input) {
            this.input.type = "number";
            this.input.classList.add("bx--slider-text-input");
            this.input.classList.add("bx--text-input");
            this.input.setAttribute("aria-labelledby", `${this.bottomRangeId} ${this.topRangeId}`);
            this.input.value = this.value.toString();
            // bind events on our optional input
            this.eventSubscriptions.push(fromEvent(this.input, "change").subscribe(this.onChange.bind(this)));
            this.eventSubscriptions.push(fromEvent(this.input, "focus").subscribe(this.onFocus.bind(this)));
        }
    }
    /**
     * Clean up our DOMEvent subscriptions
     * @return {?}
     */
    ngOnDestroy() {
        this.eventSubscriptions.forEach(subscription => {
            subscription.unsubscribe();
        });
    }
    /**
     * Register a change propagation function for `ControlValueAccessor`
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * Register a callback to notify when our input has been touched
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Receives a value from the model
     * @param {?} v
     * @return {?}
     */
    writeValue(v) {
        this.value = v;
    }
    /**
     * Returns the amount of "completeness" of a value as a fraction of the total track width
     * @param {?} value
     * @return {?}
     */
    getFractionComplete(value) {
        if (!this.track) {
            return 0;
        }
        /** @type {?} */
        const trackWidth = this.track.nativeElement.getBoundingClientRect().width;
        return this.convertToPx(value) / trackWidth;
    }
    /**
     * Helper function to return the CSS transform `scaleX` function
     * @param {?} complete
     * @return {?}
     */
    scaleX(complete) {
        return `scaleX(${complete})`;
    }
    /**
     * Converts a given px value to a "real" value in our range
     * @param {?} pxAmount
     * @return {?}
     */
    convertToValue(pxAmount) {
        /** @type {?} */
        const range = this.max - this.min;
        /** @type {?} */
        const trackWidth = this.track.nativeElement.getBoundingClientRect().width;
        /** @type {?} */
        const unrounded = pxAmount / trackWidth;
        /** @type {?} */
        const rounded = Math.round((range * unrounded) / this.step) * this.step;
        return rounded + this.min;
    }
    /**
     * Converts a given "real" value to a px value we can update the view with
     * @param {?} value
     * @return {?}
     */
    convertToPx(value) {
        if (!this.track) {
            return 0;
        }
        /** @type {?} */
        const trackWidth = this.track.nativeElement.getBoundingClientRect().width;
        if (value >= this.max) {
            return trackWidth;
        }
        if (value <= this.min) {
            return 0;
        }
        // account for value shifting by subtracting min from value and max
        return Math.round(trackWidth * ((value - this.min) / (this.max - this.min)));
    }
    /**
     * Increments the value by the step value, or the step value multiplied by the `multiplier` argument.
     *
     * @argument multiplier Defaults to `1`, multiplied with the step value.
     * @param {?=} multiplier
     * @return {?}
     */
    incrementValue(multiplier = 1) {
        this.value = this.value + (this.step * multiplier);
    }
    /**
     * Decrements the value by the step value, or the step value multiplied by the `multiplier` argument.
     *
     * @argument multiplier Defaults to `1`, multiplied with the step value.
     * @param {?=} multiplier
     * @return {?}
     */
    decrementValue(multiplier = 1) {
        this.value = this.value - (this.step * multiplier);
    }
    /**
     * Change handler for the optional input
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        this.value = event.target.value;
    }
    /**
     * Handles clicks on the range track, and setting the value to it's "real" equivalent
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        if (this.disabled) {
            return;
        }
        /** @type {?} */
        const trackLeft = this.track.nativeElement.getBoundingClientRect().left;
        this.value = this.convertToValue(event.clientX - trackLeft);
    }
    /**
     * Focus handler for the optional input
     * @param {?} __0
     * @return {?}
     */
    onFocus({ target }) {
        target.select();
    }
    /**
     * Mouse move handler. Responsible for updating the value and visual selection based on mouse movement
     * @param {?} event
     * @return {?}
     */
    onMouseMove(event) {
        if (this.disabled || !this.isMouseDown) {
            return;
        }
        /** @type {?} */
        const track = this.track.nativeElement.getBoundingClientRect();
        if (event.clientX - track.left <= track.width
            && event.clientX - track.left >= 0) {
            this.value = this.convertToValue(event.clientX - track.left);
        }
        // if the mouse is beyond the max, set the value to `max`
        if (event.clientX - track.left > track.width) {
            this.value = this.max;
        }
        // if the mouse is below the min, set the value to `min`
        if (event.clientX - track.left < 0) {
            this.value = this.min;
        }
    }
    /**
     * Enables the `onMouseMove` handler
     * @param {?} event
     * @return {?}
     */
    onMouseDown(event) {
        event.preventDefault();
        if (this.disabled) {
            return;
        }
        this.thumb.nativeElement.focus();
        this.isMouseDown = true;
    }
    /**
     * Disables the `onMouseMove` handler
     * @return {?}
     */
    onMouseUp() {
        this.isMouseDown = false;
    }
    /**
     * Calls `incrementValue` for ArrowRight and ArrowUp, `decrementValue` for ArrowLeft and ArrowDown
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        if (this.disableArrowKeys) {
            return;
        }
        event.preventDefault();
        /** @type {?} */
        const multiplier = event.shiftKey ? this.shiftMultiplier : 1;
        if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
            this.decrementValue(multiplier);
        }
        if (event.key === "ArrowRight" || event.key === "ArrowUp") {
            this.incrementValue(multiplier);
        }
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
 * Used to generate unique IDs
 */
Slider.count = 0;
Slider.decorators = [
    { type: Component, args: [{
                selector: "ibm-slider",
                template: `
		<ng-container *ngIf="!skeleton; else skeletonTemplate">
			<label *ngIf="label" for="slider" class="bx--label">
				<ng-container *ngIf="!isTemplate(label)">{{label}}</ng-container>
				<ng-template *ngIf="isTemplate(label)" [ngTemplateOutlet]="label"></ng-template>
			</label>
			<div class="bx--slider-container">
				<label [id]="bottomRangeId" class="bx--slider__range-label">
					<ng-content select="[minLabel]"></ng-content>
				</label>
				<div
					class="bx--slider"
					[ngClass]="{'bx--slider--disabled': disabled}">
					<div
						#thumb
						class="bx--slider__thumb"
						tabindex="0"
						(mousedown)="onMouseDown($event)"
						(keydown)="onKeyDown($event)">
					</div>
					<div
						#track
						class="bx--slider__track"
						(click)="onClick($event)">
					</div>
					<div
						#filledTrack
						class="bx--slider__filled-track">
					</div>
					<input
						#range
						aria-label="slider"
						class="bx--slider__input"
						type="range"
						[step]="step"
						[min]="min"
						[max]="max"
						[value]="value.toString()">
				</div>
				<label [id]="topRangeId" class="bx--slider__range-label">
					<ng-content select="[maxLabel]"></ng-content>
				</label>
				<ng-content select="input"></ng-content>
			</div>
		</ng-container>

		<ng-template #skeletonTemplate>
			<label *ngIf="label" class="bx--label bx--skeleton"></label>
			<div class="bx--slider-container bx--skeleton">
				<span class="bx--slider__range-label"></span>
				<div class="bx--slider">
					<div class="bx--slider__thumb"></div>
					<div class="bx--slider__track"></div>
					<div class="bx--slider__filled-track"></div>
				</div>
				<span class="bx--slider__range-label"></span>
			</div>
		</ng-template>
	`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: Slider,
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
Slider.ctorParameters = () => [
    { type: ElementRef }
];
Slider.propDecorators = {
    min: [{ type: Input }],
    max: [{ type: Input }],
    step: [{ type: Input }],
    value: [{ type: Input }],
    id: [{ type: Input }],
    shiftMultiplier: [{ type: Input }],
    skeleton: [{ type: Input }],
    label: [{ type: Input }],
    disableArrowKeys: [{ type: Input }],
    disabled: [{ type: Input }],
    valueChange: [{ type: Output }],
    hostClass: [{ type: HostBinding, args: ["class.bx--form-item",] }],
    thumb: [{ type: ViewChild, args: ["thumb",] }],
    track: [{ type: ViewChild, args: ["track",] }],
    filledTrack: [{ type: ViewChild, args: ["filledTrack",] }],
    range: [{ type: ViewChild, args: ["range",] }]
};
function Slider_tsickle_Closure_declarations() {
    /**
     * Used to generate unique IDs
     * @type {?}
     */
    Slider.count;
    /**
     * The interval for our range
     * @type {?}
     */
    Slider.prototype.step;
    /**
     * Base ID for the slider. The min and max labels get IDs `${this.id}-bottom-range` and `${this.id}-top-range` respectively
     * @type {?}
     */
    Slider.prototype.id;
    /**
     * Value used to "multiply" the `step` when using arrow keys to select values
     * @type {?}
     */
    Slider.prototype.shiftMultiplier;
    /**
     * Set to `true` for a loading slider
     * @type {?}
     */
    Slider.prototype.skeleton;
    /**
     * Sets the text inside the `label` tag
     * @type {?}
     */
    Slider.prototype.label;
    /**
     * Set to `true` for a slider without arrow key interactions.
     * @type {?}
     */
    Slider.prototype.disableArrowKeys;
    /**
     * Emits every time a new value is selected
     * @type {?}
     */
    Slider.prototype.valueChange;
    /** @type {?} */
    Slider.prototype.hostClass;
    /** @type {?} */
    Slider.prototype.thumb;
    /** @type {?} */
    Slider.prototype.track;
    /** @type {?} */
    Slider.prototype.filledTrack;
    /** @type {?} */
    Slider.prototype.range;
    /** @type {?} */
    Slider.prototype.bottomRangeId;
    /** @type {?} */
    Slider.prototype.topRangeId;
    /** @type {?} */
    Slider.prototype.fractionComplete;
    /** @type {?} */
    Slider.prototype.isMouseDown;
    /**
     * Array of event subscriptions so we can batch unsubscribe in `ngOnDestroy`
     * @type {?}
     */
    Slider.prototype.eventSubscriptions;
    /** @type {?} */
    Slider.prototype.input;
    /** @type {?} */
    Slider.prototype._min;
    /** @type {?} */
    Slider.prototype._max;
    /** @type {?} */
    Slider.prototype._value;
    /** @type {?} */
    Slider.prototype._disabled;
    /**
     * Send changes back to the model
     * @type {?}
     */
    Slider.prototype.propagateChange;
    /**
     * Callback to notify the model when our input has been touched
     * @type {?}
     */
    Slider.prototype.onTouched;
    /** @type {?} */
    Slider.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NhcmJvbi1jb21wb25lbnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJzbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBR1osU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkd6RSxNQUFNOzs7O0lBeUdMLFlBQXNCLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7Ozs7b0JBaEY1QixDQUFDOzs7O2tCQXFDSCxVQUFVLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRTs7OzsrQkFFYixDQUFDOzs7O3dCQUVSLEtBQUs7Ozs7Z0NBSUcsS0FBSzs7OzsyQkFlYSxJQUFJLFlBQVksRUFBRTt5QkFDaEIsSUFBSTs2QkFNN0IsR0FBRyxJQUFJLENBQUMsRUFBRSxlQUFlOzBCQUM1QixHQUFHLElBQUksQ0FBQyxFQUFFLFlBQVk7Z0NBQ2hCLENBQUM7MkJBRUgsS0FBSzs7OztrQ0FFdUIsRUFBRTtvQkFFckMsQ0FBQztvQkFDRCxHQUFHO3NCQUNELElBQUksQ0FBQyxHQUFHO3lCQUNMLEtBQUs7Ozs7K0JBb0NULENBQUMsQ0FBTSxFQUFFLEVBQUUsSUFBSTs7Ozt5QkFRVixHQUFHLEVBQUUsSUFBSTtLQTFDZ0I7Ozs7OztJQXJHaEQsSUFBYSxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQ25CLElBQUksQ0FBQyxJQUFJ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LEtBQUs7b0JBRUwsS0FBSztpQkFtQ0wsS0FBSzs4QkFFTCxLQUFLO3VCQUVMLEtBQUs7b0JBRUwsS0FBSzsrQkFFTCxLQUFLO3VCQUVMLEtBQUs7MEJBYUwsTUFBTTt3QkFDTixXQUFXLFNBQUMscUJBQXFCO29CQUNqQyxTQUFTLFNBQUMsT0FBTztvQkFDakIsU0FBUyxTQUFDLE9BQU87MEJBQ2pCLFNBQVMsU0FBQyxhQUFhO29CQUN2QixTQUFTLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SG9zdEJpbmRpbmcsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0QWZ0ZXJWaWV3SW5pdCxcblx0T25EZXN0cm95LFxuXHRWaWV3Q2hpbGQsXG5cdEVsZW1lbnRSZWYsXG5cdFRlbXBsYXRlUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuLyoqXG4gKiBVc2VkIHRvIHNlbGVjdCBmcm9tIHJhbmdlcyBvZiB2YWx1ZXMuIFtTZWUgaGVyZV0oaHR0cHM6Ly93d3cuY2FyYm9uZGVzaWduc3lzdGVtLmNvbS9jb21wb25lbnRzL3NsaWRlci91c2FnZSkgZm9yIHVzYWdlIGluZm9ybWF0aW9uLlxuICpcbiAqIFtTZWUgZGVtb10oLi4vLi4vP3BhdGg9L3N0b3J5L3NsaWRlci0tYWR2YW5jZWQpXG4gKlxuICogVGhlIHNpbXBsZXN0IHBvc3NpYmxlIHNsaWRlciB1c2FnZSBsb29rcyBzb21ldGhpbmcgbGlrZTpcbiAqIGBgYGh0bWxcbiAqIDxpYm0tc2xpZGVyPjwvaWJtLXNsaWRlcj5cbiAqIGBgYFxuICpcbiAqIFRoYXQgd2lsbCByZW5kZXIgYSBzbGlkZXIgd2l0aG91dCBsYWJlbHMgb3IgYWx0ZXJuYXRpdmUgdmFsdWUgaW5wdXQuIExhYmVscyBjYW4gYmUgcHJvdmlkZWQgYnlcbiAqIGVsZW1lbnRzIHdpdGggYFttaW5MYWJlbF1gIGFuZCBgW21heExhYmVsXWAgYXR0cmlidXRlcywgYW5kIGFuIGBpbnB1dGAgKG1heSB1c2UgdGhlIGBpYm1JbnB1dGAgZGlyZWN0aXZlKSBjYW4gYmUgc3VwcGxpZWRcbiAqIGZvciB1c2UgYXMgYW4gYWx0ZXJuYXRpdmUgdmFsdWUgZmllbGQuXG4gKlxuICogZXg6XG4gKiBgYGBodG1sXG4gKiA8IS0tIGZ1bGwgZXhhbXBsZSAtLT5cbiAqIDxpYm0tc2xpZGVyPlxuICpcdFx0PHNwYW4gbWluTGFiZWw+MEdCPC9zcGFuPlxuICpcdFx0PHNwYW4gbWF4TGFiZWw+MTAwR0I8L3NwYW4+XG4gKlx0XHQ8aW5wdXQvPlxuICpcdDwvaWJtLXNsaWRlcj5cbiAqIDwhLS0gd2l0aCBqdXN0IGFuIGlucHV0IC0tPlxuICogPGlibS1zbGlkZXI+XG4gKlx0XHQ8aW5wdXQvPlxuICpcdDwvaWJtLXNsaWRlcj5cbiAqIDwhLS0gd2l0aCBqdXN0IG9uZSBsYWJlbCAtLT5cbiAqIDxpYm0tc2xpZGVyPlxuICpcdFx0PHNwYW4gbWF4TGFiZWw+TWF4aW11bTwvc3Bhbj5cbiAqXHQ8L2libS1zbGlkZXI+XG4gKiBgYGBcbiAqXG4gKiBTbGlkZXIgc3VwcG9ydHMgYE5nTW9kZWxgIGJ5IGRlZmF1bHQsIGFzIHdlbGwgYXMgdHdvIHdheSBiaW5kaW5nIHRvIHRoZSBgdmFsdWVgIGlucHV0LlxuICpcbiAqIDxleGFtcGxlLXVybD4uLi8uLi9pZnJhbWUuaHRtbD9pZD1zbGlkZXItLWFkdmFuY2VkPC9leGFtcGxlLXVybD5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImlibS1zbGlkZXJcIixcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiIXNrZWxldG9uOyBlbHNlIHNrZWxldG9uVGVtcGxhdGVcIj5cblx0XHRcdDxsYWJlbCAqbmdJZj1cImxhYmVsXCIgZm9yPVwic2xpZGVyXCIgY2xhc3M9XCJieC0tbGFiZWxcIj5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc1RlbXBsYXRlKGxhYmVsKVwiPnt7bGFiZWx9fTwvbmctY29udGFpbmVyPlxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgKm5nSWY9XCJpc1RlbXBsYXRlKGxhYmVsKVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImxhYmVsXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdDwvbGFiZWw+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYngtLXNsaWRlci1jb250YWluZXJcIj5cblx0XHRcdFx0PGxhYmVsIFtpZF09XCJib3R0b21SYW5nZUlkXCIgY2xhc3M9XCJieC0tc2xpZGVyX19yYW5nZS1sYWJlbFwiPlxuXHRcdFx0XHRcdDxuZy1jb250ZW50IHNlbGVjdD1cIlttaW5MYWJlbF1cIj48L25nLWNvbnRlbnQ+XG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzcz1cImJ4LS1zbGlkZXJcIlxuXHRcdFx0XHRcdFtuZ0NsYXNzXT1cInsnYngtLXNsaWRlci0tZGlzYWJsZWQnOiBkaXNhYmxlZH1cIj5cblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHQjdGh1bWJcblx0XHRcdFx0XHRcdGNsYXNzPVwiYngtLXNsaWRlcl9fdGh1bWJcIlxuXHRcdFx0XHRcdFx0dGFiaW5kZXg9XCIwXCJcblx0XHRcdFx0XHRcdChtb3VzZWRvd24pPVwib25Nb3VzZURvd24oJGV2ZW50KVwiXG5cdFx0XHRcdFx0XHQoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdCN0cmFja1xuXHRcdFx0XHRcdFx0Y2xhc3M9XCJieC0tc2xpZGVyX190cmFja1wiXG5cdFx0XHRcdFx0XHQoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCI+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0I2ZpbGxlZFRyYWNrXG5cdFx0XHRcdFx0XHRjbGFzcz1cImJ4LS1zbGlkZXJfX2ZpbGxlZC10cmFja1wiPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0I3JhbmdlXG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsPVwic2xpZGVyXCJcblx0XHRcdFx0XHRcdGNsYXNzPVwiYngtLXNsaWRlcl9faW5wdXRcIlxuXHRcdFx0XHRcdFx0dHlwZT1cInJhbmdlXCJcblx0XHRcdFx0XHRcdFtzdGVwXT1cInN0ZXBcIlxuXHRcdFx0XHRcdFx0W21pbl09XCJtaW5cIlxuXHRcdFx0XHRcdFx0W21heF09XCJtYXhcIlxuXHRcdFx0XHRcdFx0W3ZhbHVlXT1cInZhbHVlLnRvU3RyaW5nKClcIj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxsYWJlbCBbaWRdPVwidG9wUmFuZ2VJZFwiIGNsYXNzPVwiYngtLXNsaWRlcl9fcmFuZ2UtbGFiZWxcIj5cblx0XHRcdFx0XHQ8bmctY29udGVudCBzZWxlY3Q9XCJbbWF4TGFiZWxdXCI+PC9uZy1jb250ZW50PlxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHQ8bmctY29udGVudCBzZWxlY3Q9XCJpbnB1dFwiPjwvbmctY29udGVudD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0PG5nLXRlbXBsYXRlICNza2VsZXRvblRlbXBsYXRlPlxuXHRcdFx0PGxhYmVsICpuZ0lmPVwibGFiZWxcIiBjbGFzcz1cImJ4LS1sYWJlbCBieC0tc2tlbGV0b25cIj48L2xhYmVsPlxuXHRcdFx0PGRpdiBjbGFzcz1cImJ4LS1zbGlkZXItY29udGFpbmVyIGJ4LS1za2VsZXRvblwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImJ4LS1zbGlkZXJfX3JhbmdlLWxhYmVsXCI+PC9zcGFuPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYngtLXNsaWRlclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJieC0tc2xpZGVyX190aHVtYlwiPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJieC0tc2xpZGVyX190cmFja1wiPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJieC0tc2xpZGVyX19maWxsZWQtdHJhY2tcIj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiYngtLXNsaWRlcl9fcmFuZ2UtbGFiZWxcIj48L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHRcdHVzZUV4aXN0aW5nOiBTbGlkZXIsXG5cdFx0XHRtdWx0aTogdHJ1ZVxuXHRcdH1cblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXIgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblx0LyoqIFVzZWQgdG8gZ2VuZXJhdGUgdW5pcXVlIElEcyAqL1xuXHRwcml2YXRlIHN0YXRpYyBjb3VudCA9IDA7XG5cdC8qKiBUaGUgbG93ZXIgYm91bmQgb2Ygb3VyIHJhbmdlICovXG5cdEBJbnB1dCgpIHNldCBtaW4odikge1xuXHRcdGlmICghdikgeyByZXR1cm47IH1cblx0XHR0aGlzLl9taW4gPSB2O1xuXHRcdC8vIGZvcmNlIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlXG5cdFx0dGhpcy52YWx1ZSA9IHRoaXMudmFsdWU7XG5cdH1cblx0Z2V0IG1pbigpIHtcblx0XHRyZXR1cm4gdGhpcy5fbWluO1xuXHR9XG5cdC8qKiBUaGUgdXBwZXIgYm91bmQgb2Ygb3VyIHJhbmdlICovXG5cdEBJbnB1dCgpIHNldCBtYXgodikge1xuXHRcdGlmICghdikgeyByZXR1cm47IH1cblx0XHR0aGlzLl9tYXggPSB2O1xuXHRcdC8vIGZvcmNlIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlXG5cdFx0dGhpcy52YWx1ZSA9IHRoaXMudmFsdWU7XG5cdH1cblxuXHRnZXQgbWF4KCkge1xuXHRcdHJldHVybiB0aGlzLl9tYXg7XG5cdH1cblx0LyoqIFRoZSBpbnRlcnZhbCBmb3Igb3VyIHJhbmdlICovXG5cdEBJbnB1dCgpIHN0ZXAgPSAxO1xuXHQvKiogU2V0IHRoZSBpbml0aWFsIHZhbHVlLiBBdmFpbGFibGUgZm9yIHR3byB3YXkgYmluZGluZyAqL1xuXHRASW5wdXQoKSBzZXQgdmFsdWUodikge1xuXHRcdGlmICghdikge1xuXHRcdFx0diA9IHRoaXMubWluO1xuXHRcdH1cblxuXHRcdGlmICh2ID4gdGhpcy5tYXgpIHtcblx0XHRcdHYgPSB0aGlzLm1heDtcblx0XHR9XG5cblx0XHRpZiAodiA8IHRoaXMubWluKSB7XG5cdFx0XHR2ID0gdGhpcy5taW47XG5cdFx0fVxuXG5cdFx0dGhpcy5fdmFsdWUgPSB2O1xuXG5cdFx0aWYgKHRoaXMudGh1bWIpIHtcblx0XHRcdHRoaXMudGh1bWIubmF0aXZlRWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5nZXRGcmFjdGlvbkNvbXBsZXRlKHYpICogMTAwfSVgO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmZpbGxlZFRyYWNrKSB7XG5cdFx0XHR0aGlzLmZpbGxlZFRyYWNrLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgwJSwgLTUwJSkgJHt0aGlzLnNjYWxlWCh0aGlzLmdldEZyYWN0aW9uQ29tcGxldGUodikpfWA7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaW5wdXQpIHtcblx0XHRcdHRoaXMuaW5wdXQudmFsdWUgPSB2LnRvU3RyaW5nKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5wcm9wYWdhdGVDaGFuZ2Uodik7XG5cdFx0dGhpcy52YWx1ZUNoYW5nZS5lbWl0KHYpO1xuXHR9XG5cblx0Z2V0IHZhbHVlKCkge1xuXHRcdHJldHVybiB0aGlzLl92YWx1ZTtcblx0fVxuXHQvKiogQmFzZSBJRCBmb3IgdGhlIHNsaWRlci4gVGhlIG1pbiBhbmQgbWF4IGxhYmVscyBnZXQgSURzIGAke3RoaXMuaWR9LWJvdHRvbS1yYW5nZWAgYW5kIGAke3RoaXMuaWR9LXRvcC1yYW5nZWAgcmVzcGVjdGl2ZWx5ICovXG5cdEBJbnB1dCgpIGlkID0gYHNsaWRlci0ke1NsaWRlci5jb3VudCsrfWA7XG5cdC8qKiBWYWx1ZSB1c2VkIHRvIFwibXVsdGlwbHlcIiB0aGUgYHN0ZXBgIHdoZW4gdXNpbmcgYXJyb3cga2V5cyB0byBzZWxlY3QgdmFsdWVzICovXG5cdEBJbnB1dCgpIHNoaWZ0TXVsdGlwbGllciA9IDQ7XG5cdC8qKiBTZXQgdG8gYHRydWVgIGZvciBhIGxvYWRpbmcgc2xpZGVyICovXG5cdEBJbnB1dCgpIHNrZWxldG9uID0gZmFsc2U7XG5cdC8qKiBTZXRzIHRoZSB0ZXh0IGluc2lkZSB0aGUgYGxhYmVsYCB0YWcgKi9cblx0QElucHV0KCkgbGFiZWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG5cdC8qKiBTZXQgdG8gYHRydWVgIGZvciBhIHNsaWRlciB3aXRob3V0IGFycm93IGtleSBpbnRlcmFjdGlvbnMuICovXG5cdEBJbnB1dCgpIGRpc2FibGVBcnJvd0tleXMgPSBmYWxzZTtcblx0LyoqIERpc2FibGVzIHRoZSByYW5nZSB2aXN1YWxseSBhbmQgZnVuY3Rpb25hbGx5ICovXG5cdEBJbnB1dCgpIHNldCBkaXNhYmxlZCh2KSB7XG5cdFx0dGhpcy5fZGlzYWJsZWQgPSB2O1xuXHRcdC8vIGZvciBzb21lIHJlYXNvbiBgdGhpcy5pbnB1dGAgbmV2ZXIgZXhpc3RzIGhlcmUsIHNvIHdlIGhhdmUgdG8gcXVlcnkgZm9yIGl0IGhlcmUgdG9vXG5cdFx0Y29uc3QgaW5wdXQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQ6bm90KFt0eXBlPXJhbmdlXSlcIik7XG5cdFx0aWYgKGlucHV0KSB7XG5cdFx0XHRpbnB1dC5kaXNhYmxlZCA9IHY7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGRpc2FibGVkKCkge1xuXHRcdHJldHVybiB0aGlzLl9kaXNhYmxlZDtcblx0fVxuXHQvKiogRW1pdHMgZXZlcnkgdGltZSBhIG5ldyB2YWx1ZSBpcyBzZWxlY3RlZCAqL1xuXHRAT3V0cHV0KCkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy5ieC0tZm9ybS1pdGVtXCIpIGhvc3RDbGFzcyA9IHRydWU7XG5cdEBWaWV3Q2hpbGQoXCJ0aHVtYlwiKSB0aHVtYjogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZChcInRyYWNrXCIpIHRyYWNrOiBFbGVtZW50UmVmO1xuXHRAVmlld0NoaWxkKFwiZmlsbGVkVHJhY2tcIikgZmlsbGVkVHJhY2s6IEVsZW1lbnRSZWY7XG5cdEBWaWV3Q2hpbGQoXCJyYW5nZVwiKSByYW5nZTogRWxlbWVudFJlZjtcblxuXHRwdWJsaWMgYm90dG9tUmFuZ2VJZCA9IGAke3RoaXMuaWR9LWJvdHRvbS1yYW5nZWA7XG5cdHB1YmxpYyB0b3BSYW5nZUlkID0gYCR7dGhpcy5pZH0tdG9wLXJhbmdlYDtcblx0cHVibGljIGZyYWN0aW9uQ29tcGxldGUgPSAwO1xuXG5cdHByb3RlY3RlZCBpc01vdXNlRG93biA9IGZhbHNlO1xuXHQvKiogQXJyYXkgb2YgZXZlbnQgc3Vic2NyaXB0aW9ucyBzbyB3ZSBjYW4gYmF0Y2ggdW5zdWJzY3JpYmUgaW4gYG5nT25EZXN0cm95YCAqL1xuXHRwcm90ZWN0ZWQgZXZlbnRTdWJzY3JpcHRpb25zOiBBcnJheTxTdWJzY3JpcHRpb24+ID0gW107XG5cdHByb3RlY3RlZCBpbnB1dDogSFRNTElucHV0RWxlbWVudDtcblx0cHJvdGVjdGVkIF9taW4gPSAwO1xuXHRwcm90ZWN0ZWQgX21heCA9IDEwMDtcblx0cHJvdGVjdGVkIF92YWx1ZSA9IHRoaXMubWluO1xuXHRwcm90ZWN0ZWQgX2Rpc2FibGVkID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdC8vIGJpbmQgbW91c2Vtb3ZlIGFuZCBtb3VzZXVwIHRvIHRoZSBkb2N1bWVudCBzbyB3ZSBkb24ndCBoYXZlIGlzc3VlcyB0cmFja2luZyB0aGUgbW91c2Vcblx0XHR0aGlzLmV2ZW50U3Vic2NyaXB0aW9ucy5wdXNoKGZyb21FdmVudChkb2N1bWVudCwgXCJtb3VzZW1vdmVcIikuc3Vic2NyaWJlKHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSkpO1xuXHRcdHRoaXMuZXZlbnRTdWJzY3JpcHRpb25zLnB1c2goZnJvbUV2ZW50KGRvY3VtZW50LCBcIm1vdXNldXBcIikuc3Vic2NyaWJlKHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcykpKTtcblxuXHRcdC8vIGFwcGx5IGFueSB2YWx1ZXMgd2UgZ290IGZyb20gYmVmb3JlIHRoZSB2aWV3IGluaXRpYWxpemVkXG5cdFx0dGhpcy52YWx1ZSA9IHRoaXMudmFsdWU7XG5cblx0XHQvLyBUT0RPOiBvbnRvdWNoc3RhcnQvb250b3VjaG1vdmUvb250b3VjaGVuZFxuXG5cdFx0Ly8gc2V0IHVwIHRoZSBvcHRpb25hbCBpbnB1dFxuXHRcdHRoaXMuaW5wdXQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQ6bm90KFt0eXBlPXJhbmdlXSlcIik7XG5cdFx0aWYgKHRoaXMuaW5wdXQpIHtcblx0XHRcdHRoaXMuaW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XG5cdFx0XHR0aGlzLmlucHV0LmNsYXNzTGlzdC5hZGQoXCJieC0tc2xpZGVyLXRleHQtaW5wdXRcIik7XG5cdFx0XHR0aGlzLmlucHV0LmNsYXNzTGlzdC5hZGQoXCJieC0tdGV4dC1pbnB1dFwiKTtcblx0XHRcdHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIsIGAke3RoaXMuYm90dG9tUmFuZ2VJZH0gJHt0aGlzLnRvcFJhbmdlSWR9YCk7XG5cdFx0XHR0aGlzLmlucHV0LnZhbHVlID0gdGhpcy52YWx1ZS50b1N0cmluZygpO1xuXHRcdFx0Ly8gYmluZCBldmVudHMgb24gb3VyIG9wdGlvbmFsIGlucHV0XG5cdFx0XHR0aGlzLmV2ZW50U3Vic2NyaXB0aW9ucy5wdXNoKGZyb21FdmVudCh0aGlzLmlucHV0LCBcImNoYW5nZVwiKS5zdWJzY3JpYmUodGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpKSk7XG5cdFx0XHR0aGlzLmV2ZW50U3Vic2NyaXB0aW9ucy5wdXNoKGZyb21FdmVudCh0aGlzLmlucHV0LCBcImZvY3VzXCIpLnN1YnNjcmliZSh0aGlzLm9uRm9jdXMuYmluZCh0aGlzKSkpO1xuXHRcdH1cblx0fVxuXG5cdC8qKiBDbGVhbiB1cCBvdXIgRE9NRXZlbnQgc3Vic2NyaXB0aW9ucyAqL1xuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmV2ZW50U3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiB7XG5cdFx0XHRzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKiBTZW5kIGNoYW5nZXMgYmFjayB0byB0aGUgbW9kZWwgKi9cblx0cHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xuXG5cdC8qKiBSZWdpc3RlciBhIGNoYW5nZSBwcm9wYWdhdGlvbiBmdW5jdGlvbiBmb3IgYENvbnRyb2xWYWx1ZUFjY2Vzc29yYCAqL1xuXHRyZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcblx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuXHR9XG5cblx0LyoqIENhbGxiYWNrIHRvIG5vdGlmeSB0aGUgbW9kZWwgd2hlbiBvdXIgaW5wdXQgaGFzIGJlZW4gdG91Y2hlZCAqL1xuXHRvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHsgfTtcblxuXHQvKiogUmVnaXN0ZXIgYSBjYWxsYmFjayB0byBub3RpZnkgd2hlbiBvdXIgaW5wdXQgaGFzIGJlZW4gdG91Y2hlZCAqL1xuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSBmbjtcblx0fVxuXG5cdC8qKiBSZWNlaXZlcyBhIHZhbHVlIGZyb20gdGhlIG1vZGVsICovXG5cdHdyaXRlVmFsdWUodjogYW55KSB7XG5cdFx0dGhpcy52YWx1ZSA9IHY7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgYW1vdW50IG9mIFwiY29tcGxldGVuZXNzXCIgb2YgYSB2YWx1ZSBhcyBhIGZyYWN0aW9uIG9mIHRoZSB0b3RhbCB0cmFjayB3aWR0aFxuXHQgKi9cblx0Z2V0RnJhY3Rpb25Db21wbGV0ZSh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0aWYgKCF0aGlzLnRyYWNrKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRjb25zdCB0cmFja1dpZHRoID0gdGhpcy50cmFjay5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuXHRcdHJldHVybiB0aGlzLmNvbnZlcnRUb1B4KHZhbHVlKSAvIHRyYWNrV2lkdGg7XG5cdH1cblxuXHQvKiogSGVscGVyIGZ1bmN0aW9uIHRvIHJldHVybiB0aGUgQ1NTIHRyYW5zZm9ybSBgc2NhbGVYYCBmdW5jdGlvbiAqL1xuXHRzY2FsZVgoY29tcGxldGUpIHtcblx0XHRyZXR1cm4gYHNjYWxlWCgke2NvbXBsZXRlfSlgO1xuXHR9XG5cblx0LyoqIENvbnZlcnRzIGEgZ2l2ZW4gcHggdmFsdWUgdG8gYSBcInJlYWxcIiB2YWx1ZSBpbiBvdXIgcmFuZ2UgKi9cblx0Y29udmVydFRvVmFsdWUocHhBbW91bnQpIHtcblx0XHQvLyBiYXNpYyBjb25jZXB0IGJvcnJvd2VkIGZyb20gY2FyYm9uLWNvbXBvbmVudHNcblx0XHQvLyByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9JQk0vY2FyYm9uLWNvbXBvbmVudHMvYmxvYi80M2JmM2FiZGMyZjhiZGFhMzhhYTg0ZTBmNzMzYWRkZTFlMWU4ODk0L3NyYy9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuanMjTDE0Ny1MMTUxXG5cdFx0Y29uc3QgcmFuZ2UgPSB0aGlzLm1heCAtIHRoaXMubWluO1xuXHRcdGNvbnN0IHRyYWNrV2lkdGggPSB0aGlzLnRyYWNrLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG5cdFx0Y29uc3QgdW5yb3VuZGVkID0gcHhBbW91bnQgLyB0cmFja1dpZHRoO1xuXHRcdGNvbnN0IHJvdW5kZWQgPSBNYXRoLnJvdW5kKChyYW5nZSAqIHVucm91bmRlZCkgLyB0aGlzLnN0ZXApICogdGhpcy5zdGVwO1xuXHRcdHJldHVybiByb3VuZGVkICsgdGhpcy5taW47XG5cdH1cblxuXHQvKiogQ29udmVydHMgYSBnaXZlbiBcInJlYWxcIiB2YWx1ZSB0byBhIHB4IHZhbHVlIHdlIGNhbiB1cGRhdGUgdGhlIHZpZXcgd2l0aCAqL1xuXHRjb252ZXJ0VG9QeCh2YWx1ZSkge1xuXHRcdGlmICghdGhpcy50cmFjaykge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdHJhY2tXaWR0aCA9IHRoaXMudHJhY2submF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcblx0XHRpZiAodmFsdWUgPj0gdGhpcy5tYXgpIHtcblx0XHRcdHJldHVybiB0cmFja1dpZHRoO1xuXHRcdH1cblxuXHRcdGlmICh2YWx1ZSA8PSB0aGlzLm1pbikge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0Ly8gYWNjb3VudCBmb3IgdmFsdWUgc2hpZnRpbmcgYnkgc3VidHJhY3RpbmcgbWluIGZyb20gdmFsdWUgYW5kIG1heFxuXHRcdHJldHVybiBNYXRoLnJvdW5kKHRyYWNrV2lkdGggKiAoKHZhbHVlIC0gdGhpcy5taW4pIC8gKHRoaXMubWF4IC0gdGhpcy5taW4pKSk7XG5cdH1cblxuXHQvKipcblx0ICogSW5jcmVtZW50cyB0aGUgdmFsdWUgYnkgdGhlIHN0ZXAgdmFsdWUsIG9yIHRoZSBzdGVwIHZhbHVlIG11bHRpcGxpZWQgYnkgdGhlIGBtdWx0aXBsaWVyYCBhcmd1bWVudC5cblx0ICpcblx0ICogQGFyZ3VtZW50IG11bHRpcGxpZXIgRGVmYXVsdHMgdG8gYDFgLCBtdWx0aXBsaWVkIHdpdGggdGhlIHN0ZXAgdmFsdWUuXG5cdCAqL1xuXHRpbmNyZW1lbnRWYWx1ZShtdWx0aXBsaWVyID0gMSkge1xuXHRcdHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlICsgKHRoaXMuc3RlcCAqIG11bHRpcGxpZXIpO1xuXHR9XG5cblx0LyoqXG5cdCAqIERlY3JlbWVudHMgdGhlIHZhbHVlIGJ5IHRoZSBzdGVwIHZhbHVlLCBvciB0aGUgc3RlcCB2YWx1ZSBtdWx0aXBsaWVkIGJ5IHRoZSBgbXVsdGlwbGllcmAgYXJndW1lbnQuXG5cdCAqXG5cdCAqIEBhcmd1bWVudCBtdWx0aXBsaWVyIERlZmF1bHRzIHRvIGAxYCwgbXVsdGlwbGllZCB3aXRoIHRoZSBzdGVwIHZhbHVlLlxuXHQgKi9cblx0ZGVjcmVtZW50VmFsdWUobXVsdGlwbGllciA9IDEpIHtcblx0XHR0aGlzLnZhbHVlID0gdGhpcy52YWx1ZSAtICh0aGlzLnN0ZXAgKiBtdWx0aXBsaWVyKTtcblx0fVxuXG5cdC8qKiBDaGFuZ2UgaGFuZGxlciBmb3IgdGhlIG9wdGlvbmFsIGlucHV0ICovXG5cdG9uQ2hhbmdlKGV2ZW50KSB7XG5cdFx0dGhpcy52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0fVxuXG5cdC8qKiBIYW5kbGVzIGNsaWNrcyBvbiB0aGUgcmFuZ2UgdHJhY2ssIGFuZCBzZXR0aW5nIHRoZSB2YWx1ZSB0byBpdCdzIFwicmVhbFwiIGVxdWl2YWxlbnQgKi9cblx0b25DbGljayhldmVudCkge1xuXHRcdGlmICh0aGlzLmRpc2FibGVkKSB7IHJldHVybjsgfVxuXHRcdGNvbnN0IHRyYWNrTGVmdCA9IHRoaXMudHJhY2submF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuXHRcdHRoaXMudmFsdWUgPSB0aGlzLmNvbnZlcnRUb1ZhbHVlKGV2ZW50LmNsaWVudFggLSB0cmFja0xlZnQpO1xuXHR9XG5cblx0LyoqIEZvY3VzIGhhbmRsZXIgZm9yIHRoZSBvcHRpb25hbCBpbnB1dCAqL1xuXHRvbkZvY3VzKHt0YXJnZXR9KSB7XG5cdFx0dGFyZ2V0LnNlbGVjdCgpO1xuXHR9XG5cblx0LyoqIE1vdXNlIG1vdmUgaGFuZGxlci4gUmVzcG9uc2libGUgZm9yIHVwZGF0aW5nIHRoZSB2YWx1ZSBhbmQgdmlzdWFsIHNlbGVjdGlvbiBiYXNlZCBvbiBtb3VzZSBtb3ZlbWVudCAqL1xuXHRvbk1vdXNlTW92ZShldmVudCkge1xuXHRcdGlmICh0aGlzLmRpc2FibGVkIHx8ICF0aGlzLmlzTW91c2VEb3duKSB7IHJldHVybjsgfVxuXHRcdGNvbnN0IHRyYWNrID0gdGhpcy50cmFjay5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGlmIChcblx0XHRcdGV2ZW50LmNsaWVudFggLSB0cmFjay5sZWZ0IDw9IHRyYWNrLndpZHRoXG5cdFx0XHQmJiBldmVudC5jbGllbnRYIC0gdHJhY2subGVmdCA+PSAwXG5cdFx0KSB7XG5cdFx0XHR0aGlzLnZhbHVlID0gdGhpcy5jb252ZXJ0VG9WYWx1ZShldmVudC5jbGllbnRYIC0gdHJhY2subGVmdCk7XG5cdFx0fVxuXG5cdFx0Ly8gaWYgdGhlIG1vdXNlIGlzIGJleW9uZCB0aGUgbWF4LCBzZXQgdGhlIHZhbHVlIHRvIGBtYXhgXG5cdFx0aWYgKGV2ZW50LmNsaWVudFggLSB0cmFjay5sZWZ0ID4gdHJhY2sud2lkdGgpIHtcblx0XHRcdHRoaXMudmFsdWUgPSB0aGlzLm1heDtcblx0XHR9XG5cblx0XHQvLyBpZiB0aGUgbW91c2UgaXMgYmVsb3cgdGhlIG1pbiwgc2V0IHRoZSB2YWx1ZSB0byBgbWluYFxuXHRcdGlmIChldmVudC5jbGllbnRYIC0gdHJhY2subGVmdCA8IDApIHtcblx0XHRcdHRoaXMudmFsdWUgPSB0aGlzLm1pbjtcblx0XHR9XG5cdH1cblxuXHQvKiogRW5hYmxlcyB0aGUgYG9uTW91c2VNb3ZlYCBoYW5kbGVyICovXG5cdG9uTW91c2VEb3duKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRpZiAodGhpcy5kaXNhYmxlZCkgeyByZXR1cm47IH1cblx0XHR0aGlzLnRodW1iLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcblx0XHR0aGlzLmlzTW91c2VEb3duID0gdHJ1ZTtcblx0fVxuXG5cdC8qKiBEaXNhYmxlcyB0aGUgYG9uTW91c2VNb3ZlYCBoYW5kbGVyICovXG5cdG9uTW91c2VVcCgpIHtcblx0XHR0aGlzLmlzTW91c2VEb3duID0gZmFsc2U7XG5cdH1cblxuXHQvKiogQ2FsbHMgYGluY3JlbWVudFZhbHVlYCBmb3IgQXJyb3dSaWdodCBhbmQgQXJyb3dVcCwgYGRlY3JlbWVudFZhbHVlYCBmb3IgQXJyb3dMZWZ0IGFuZCBBcnJvd0Rvd24gKi9cblx0b25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuZGlzYWJsZUFycm93S2V5cykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IG11bHRpcGxpZXIgPSBldmVudC5zaGlmdEtleSA/IHRoaXMuc2hpZnRNdWx0aXBsaWVyIDogMTtcblx0XHRpZiAoZXZlbnQua2V5ID09PSBcIkFycm93TGVmdFwiIHx8IGV2ZW50LmtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xuXHRcdFx0dGhpcy5kZWNyZW1lbnRWYWx1ZShtdWx0aXBsaWVyKTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQua2V5ID09PSBcIkFycm93UmlnaHRcIiB8fCBldmVudC5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XG5cdFx0XHR0aGlzLmluY3JlbWVudFZhbHVlKG11bHRpcGxpZXIpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBpc1RlbXBsYXRlKHZhbHVlKSB7XG5cdFx0cmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG5cdH1cbn1cbiJdfQ==