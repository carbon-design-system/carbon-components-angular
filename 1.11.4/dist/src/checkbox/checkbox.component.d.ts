import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
/**
 * Defines the set of states for a checkbox component.
 * @export
 * @enum {number}
 */
export declare enum CheckboxState {
    Init = 0,
    Indeterminate = 1,
    Checked = 2,
    Unchecked = 3
}
/**
 * Used to emit changes performed on checkbox components.
 * @export
 * @class CheckboxChange
 */
export declare class CheckboxChange {
    /**
     * Contains the `CheckboxComponent` that has been changed.
     * @type {CheckboxComponent}
     * @memberof CheckboxChange
     */
    source: CheckboxComponent;
    /**
     * The state of the `CheckboxComponent` encompassed in the `CheckboxChange` class.
     * @type {boolean}
     * @memberof CheckboxChange
     */
    checked: boolean;
}
/**
 * @export
 * @class CheckboxComponent
 * @implements {ControlValueAccessor}
 * @implements {AfterViewInit}
 */
export declare class CheckboxComponent implements ControlValueAccessor, AfterViewInit {
    protected changeDetectorRef: ChangeDetectorRef;
    /**
     * Variable used for creating unique ids for checkbox components.
     * @type {number}
     * @static
     * @memberof CheckboxComponent
     */
    static checkboxCount: number;
    class: string;
    /**
     * Size of the checkbox.
     * (size `"default"` is being deprecated as of neutrino v1.2.0, please use `"md"` instead)
     * @type {("sm" | "md" | "default")}
     * @memberof CheckboxComponent
     */
    size: "sm" | "md" | "default";
    /**
     * Set to `true` for checkbox to be rendered with inline styles.
     * @type {boolean}
     * @memberof CheckboxComponent
     */
    inline: boolean;
    /**
     * Set to `true` for checkbox to be rendered with nested styles.
     * @type {boolean}
     * @memberof CheckboxComponent
     */
    nested: boolean;
    /**
     * Set to `true` for a disabled checkbox.
     * @type {boolean}
     * @memberof CheckboxComponent
     */
    disabled: boolean;
    /**
     * Sets the name attribute on the `input` element.
     * @type {string}
     * @memberof CheckboxComponent
     */
    name: string;
    /**
     * The unique id for the checkbox component.
     * @type {string}
     * @memberof CheckboxComponent
     */
    id: string;
    /**
     * Reflects the required attribute of the `input` element.
     * @type {boolean}
     * @memberof CheckboxComponent
     */
    required: boolean;
    /**
     * Sets the value attribute on the `input` element.
     * @type {string}
     * @memberof CheckboxComponent
     */
    value: string;
    /**
     * Used to set the `aria-label` attribute on the input element.
     * @memberof CheckboxComponent
     */
    ariaLabel: string;
    /**
     * Used to set the `aria-labelledby` attribute on the input element.
     * @type {string}
     * @memberof CheckboxComponent
     */
    ariaLabelledby: string;
    /**
     * Reflects whether the checkbox state is indeterminate.
     * @readonly
     * @memberof CheckboxComponent
     */
    /**
    * Set the checkbox's indeterminate state to match the parameter and transition the view to reflect the change.
    * @param indeterminate
    * @memberof CheckboxComponent
    */
    indeterminate: boolean;
    /**
     * Returns value `true` if state is selected for the checkbox.
     * @readonly
     * @memberof CheckboxComponent
     */
    /**
    * Updating the state of a checkbox to match the state of the parameter passed in.
    * @param checked
    * @memberof CheckboxComponent
    */
    checked: boolean;
    /**
     * Emits event notifying other classes when a change in state occurs on a checkbox after a
     * click.
     * @memberof CheckboxComponent
     */
    change: EventEmitter<CheckboxChange>;
    /**
     * Emits event notifying other classes when a change in state occurs specifically
     * on an indeterminate checkbox.
     * @memberof CheckboxComponent
     */
    indeterminateChange: EventEmitter<boolean>;
    /**
     * Set to `true` if the input checkbox is selected (or checked).
     * @memberof CheckboxComponent
     */
    _checked: boolean;
    /**
     * Set to `true` if the input checkbox is in state indeterminate.
     * @memberof CheckboxComponent
     */
    _indeterminate: boolean;
    currentCheckboxState: CheckboxState;
    /**
     * Maintains a reference to the view DOM element of the `CheckboxComponent`.
     * @type {ElementRef}
     * @memberof CheckboxComponent
     */
    inputCheckbox: ElementRef;
    /**
     * Creates an instance of `CheckboxComponent`.
     * @param {ChangeDetectorRef} changeDetectorRef
     * @memberof CheckboxComponent
     */
    constructor(changeDetectorRef: ChangeDetectorRef);
    /**
     * Creates a class name based on `@Input() size`, `@Input() inline`, and `@Input() nested`.
     * @return {string}
     */
    getVariantClass(): string;
    /**
     * Toggle the selected state of the checkbox.
     * @memberof CheckboxComponent
     */
    toggle(): void;
    writeValue(value: any): void;
    /**
     * Sets a method in order to propagate changes back to the form.
     * @param {any} fn
     * @memberof CheckboxComponent
     */
    registerOnChange(fn: any): void;
    /**
     * Registers a callback to be triggered when the control has been touched.
     * @param fn Callback to be triggered when the checkbox is touched.
     */
    registerOnTouched(fn: any): void;
    /**
     * Executes on the event of a change within `CheckboxComponent` to block propagation.
     * @param {any} event
     * @memberof CheckboxComponent
     */
    onChange(event: any): void;
    /**
     * Handles click events on the `CheckboxComponent` and emits changes to other classes.
     * @param {any} event
     * @memberof CheckboxComponent
     */
    onClick(event: any): void;
    /**
     * Called when checkbox is blurred. Needed to properly implement `ControlValueAccessor`.
     * @memberof CheckboxComponent
     */
    onTouched: () => any;
    /**
     * Handles changes between checkbox states.
     * @param {CheckboxState} newState
     * @returns {null}
     * @memberof CheckboxComponent
     */
    transitionCheckboxState(newState: CheckboxState): void;
    /**
     * Creates instance of `CheckboxChange` used to propagate the change event.
     * @memberof CheckboxComponent
     */
    emitChangeEvent(): void;
    /**
     * Updates the checkbox if it is in the indeterminate state.
     * @memberof CheckboxComponent
     */
    ngAfterViewInit(): void;
    /**
     * Method set in `registerOnChange` to propagate changes back to the form.
     * @memberof CheckboxComponent
     */
    propagateChange: (_: any) => void;
}
