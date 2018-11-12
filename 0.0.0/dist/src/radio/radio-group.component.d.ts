import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, OnInit, QueryList, Renderer2 } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
import { Radio } from "./radio.component";
/**
 * Used to emit changes performed on a `Radio`.
 * @export
 * @class RadioChange
 */
export declare class RadioChange {
    /**
     * Contains the `Radio` that has been changed.
     * @type {(Radio | null)}
     * @memberof RadioChange
     */
    source: Radio | null;
    /**
     * The value of the `Radio` encompassed in the `RadioChange` class.
     * @type {any}
     * @memberof RadioChange
     */
    value: any;
}
/**
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
 *		Radio {{one}}
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
 */
export declare class RadioGroup implements OnInit, AfterContentInit, ControlValueAccessor {
    protected changeDetectorRef: ChangeDetectorRef;
    protected elementRef: ElementRef;
    protected renderer: Renderer2;
    /**
     * Used for creating the `RadioGroup` 'name' property dynamically.
     */
    static radioGroupCount: number;
    /**
     * Emits event notifying other classes of a change using a `RadioChange` class.
     * @type {EventEmitter<RadioChange>}
     */
    change: EventEmitter<RadioChange>;
    /**
     * The `Radio` input items in the `RadioGroup`.
     */
    radios: QueryList<Radio>;
    /**
     * Determines the render size of the `Radio` inputs within the group.
     */
    size: "sm" | "md";
    /**
     * Returns the `Radio` that is selected within the `RadioGroup`.
     * @readonly
     */
    /**
    * Sets the passed in `Radio` item as the selected input within the `RadioGroup`.
    */
    selected: Radio | null;
    /**
     * Returns the value/state of the selected `Radio` within the `RadioGroup`.
     */
    /**
    * Sets the value/state of the selected `Radio` within the `RadioGroup` to the passed in value.
    */
    value: any;
    /**
     * Returns the associated name of the `RadioGroup`.
     */
    /**
    * Replaces the name associated with the `RadioGroup` with the provided parameter.
    */
    name: string;
    /**
     * Returns the disabled value in the `RadioGroup` if there is one.
     */
    /**
    * Updates the disabled value using the provided parameter and marks the radios to be checked for
    * changes.
    */
    disabled: boolean;
    /**
     * Binds 'radiogroup' value to the role attribute for `RadioGroup`.
     */
    role: string;
    /**
     * Binds 'bx--radio-button-group' value to the class for `RadioGroup`.
     */
    radioButtonGroupClass: boolean;
    /**
     * To track whether the `RadioGroup` has been initialized.
     */
    protected isInitialized: boolean;
    /**
     * Reflects whether or not the input is disabled and cannot be selected.
     */
    protected _disabled: boolean;
    /**
     * The value of the selected option within the `RadioGroup`.
     */
    protected _value: any;
    /**
     * The `Radio` within the `RadioGroup` that is selected.
     */
    protected _selected: Radio;
    /**
     * The name attribute associated with the `RadioGroup`.
     */
    protected _name: string;
    /**
     * Creates an instance of RadioGroup.
     */
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2);
    /**
     * Updates the selected `Radio` to be checked (selected).
     */
    checkSelectedRadio(): void;
    /**
     * Use the value of the `RadioGroup` to update the selected radio to the right state (selected state).
     */
    updateSelectedRadioFromValue(): void;
    /**
     * Creates a class of `RadioChange` to emit the change in the `RadioGroup`.
     */
    emitChangeEvent(): void;
    /**
     * Calls the `markForCheck()` function within the `changeDetectorRef` class
     * to trigger Angular's change detection on each radio item.
     */
    markRadiosForCheck(): void;
    /**
     * Synchronizes the names of the radio items with the name of the `RadioGroup`.
     */
    updateRadioNames(): void;
    /**
     * Updates the value of the `RadioGroup` using the provided parameter.
     */
    writeValue(value: any): void;
    /**
     * Callback triggered when a `Radio` within the `RadioGroup` is changed.
     */
    touch(): void;
    /**
     * Builds variant class on the radio items within the `RadioGroup`.
     */
    ngOnInit(): void;
    /**
     * Marks this component as initialized to avoid the initial value getting set by `NgModel` on `RadioGroup`.
     * This avoids `NgModel` setting the initial value before the OnInit of the `RadioGroup`.
     */
    ngAfterContentInit(): void;
    updateFocusableRadio(): void;
    /**
     * Used to set method to propagate changes back to the form.
     */
    registerOnChange(fn: any): void;
    /**
     * Registers a callback to be triggered when the control has been touched.
     * @param fn Callback to be triggered when the checkbox is touched.
     */
    registerOnTouched(fn: any): void;
    /**
     * Needed to properly implement ControlValueAccessor.
     */
    onTouched: () => any;
    /**
     * Method set in registerOnChange to propagate changes back to the form.
     */
    propagateChange: (_: any) => void;
}
