import { EventEmitter, AfterViewInit, OnDestroy, ElementRef, TemplateRef } from "@angular/core";
import { Subscription } from "rxjs";
import { ControlValueAccessor } from "@angular/forms";
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
 *		<span minLabel>0GB</span>
 *		<span maxLabel>100GB</span>
 *		<input/>
 *	</ibm-slider>
 * <!-- with just an input -->
 * <ibm-slider>
 *		<input/>
 *	</ibm-slider>
 * <!-- with just one label -->
 * <ibm-slider>
 *		<span maxLabel>Maximum</span>
 *	</ibm-slider>
 * ```
 *
 * Slider supports `NgModel` by default, as well as two way binding to the `value` input.
 *
 * <example-url>../../iframe.html?id=slider--advanced</example-url>
 */
export declare class Slider implements AfterViewInit, OnDestroy, ControlValueAccessor {
    protected elementRef: ElementRef;
    /** Used to generate unique IDs */
    private static count;
    /** The lower bound of our range */
    min: any;
    /** The upper bound of our range */
    max: any;
    /** The interval for our range */
    step: number;
    /** Set the initial value. Available for two way binding */
    value: any;
    /** Base ID for the slider. The min and max labels get IDs `${this.id}-bottom-range` and `${this.id}-top-range` respectively */
    id: string;
    /** Value used to "multiply" the `step` when using arrow keys to select values */
    shiftMultiplier: number;
    /** Set to `true` for a loading slider */
    skeleton: boolean;
    /** Sets the text inside the `label` tag */
    label: string | TemplateRef<any>;
    /** Set to `true` for a slider without arrow key interactions. */
    disableArrowKeys: boolean;
    /** Disables the range visually and functionally */
    disabled: any;
    /** Emits every time a new value is selected */
    valueChange: EventEmitter<number>;
    hostClass: boolean;
    thumb: ElementRef;
    track: ElementRef;
    filledTrack: ElementRef;
    range: ElementRef;
    bottomRangeId: string;
    topRangeId: string;
    fractionComplete: number;
    protected isMouseDown: boolean;
    /** Array of event subscriptions so we can batch unsubscribe in `ngOnDestroy` */
    protected eventSubscriptions: Array<Subscription>;
    protected input: HTMLInputElement;
    protected _min: number;
    protected _max: number;
    protected _value: number;
    protected _disabled: boolean;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    /** Clean up our DOMEvent subscriptions */
    ngOnDestroy(): void;
    /** Send changes back to the model */
    propagateChange: (_: any) => void;
    /** Register a change propagation function for `ControlValueAccessor` */
    registerOnChange(fn: any): void;
    /** Callback to notify the model when our input has been touched */
    onTouched: () => any;
    /** Register a callback to notify when our input has been touched */
    registerOnTouched(fn: any): void;
    /** Receives a value from the model */
    writeValue(v: any): void;
    /**
     * Returns the amount of "completeness" of a value as a fraction of the total track width
     */
    getFractionComplete(value: number): number;
    /** Helper function to return the CSS transform `scaleX` function */
    scaleX(complete: any): string;
    /** Converts a given px value to a "real" value in our range */
    convertToValue(pxAmount: any): number;
    /** Converts a given "real" value to a px value we can update the view with */
    convertToPx(value: any): any;
    /**
     * Increments the value by the step value, or the step value multiplied by the `multiplier` argument.
     *
     * @argument multiplier Defaults to `1`, multiplied with the step value.
     */
    incrementValue(multiplier?: number): void;
    /**
     * Decrements the value by the step value, or the step value multiplied by the `multiplier` argument.
     *
     * @argument multiplier Defaults to `1`, multiplied with the step value.
     */
    decrementValue(multiplier?: number): void;
    /** Change handler for the optional input */
    onChange(event: any): void;
    /** Handles clicks on the range track, and setting the value to it's "real" equivalent */
    onClick(event: any): void;
    /** Focus handler for the optional input */
    onFocus({ target }: {
        target: any;
    }): void;
    /** Mouse move handler. Responsible for updating the value and visual selection based on mouse movement */
    onMouseMove(event: any): void;
    /** Enables the `onMouseMove` handler */
    onMouseDown(event: any): void;
    /** Disables the `onMouseMove` handler */
    onMouseUp(): void;
    /** Calls `incrementValue` for ArrowRight and ArrowUp, `decrementValue` for ArrowLeft and ArrowDown */
    onKeyDown(event: KeyboardEvent): void;
    isTemplate(value: any): boolean;
}
