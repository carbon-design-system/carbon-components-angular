import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, OnInit, QueryList, Renderer2 } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
import { RadioComponent } from "./radio.component";
/**
 * Used to emit changes performed on a `RadioComponent`.
 * @export
 * @class RadioChange
 */
export declare class RadioChange {
    /**
     * Contains the `RadioComponent` that has been changed.
     * @type {(RadioComponent | null)}
     * @memberof RadioChange
     */
    source: RadioComponent | null;
    /**
     * The value of the `RadioComponent` encompassed in the `RadioChange` class.
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
 * Also see: [`RadioComponent`](#ibm-radio)
 *
 *
 * @export
 * @class RadioGroup
 * @implements {OnInit}
 * @implements {AfterContentInit}
 * @implements {ControlValueAccessor}
 */
export declare class RadioGroup implements OnInit, AfterContentInit, ControlValueAccessor {
    private changeDetectorRef;
    private elementRef;
    private renderer;
    /**
     * Used for creating the `RadioGroup` 'name' property dynamically.
     * @type {number}
     * @static
     * @memberof RadioGroup
     */
    static radioGroupCount: number;
    /**
     * Emits event notifying other classes of a change using a `RadioChange` class.
     * @type {EventEmitter<RadioChange>}
     * @memberof RadioGroup
     */
    change: EventEmitter<RadioChange>;
    /**
     * The `RadioComponent` input items in the `RadioGroup`.
     * @type {QueryList<RadioComponent>}
     * @memberof RadioGroup
     */
    radios: QueryList<RadioComponent>;
    /**
     * Determines the render size of the `RadioComponent` inputs within the group.
     * (size `"default"` is being deprecated as of next major release, please use `"md"` instead)
     * @type {("sm" | "md" | "default")}
     * @memberof RadioGroup
     */
    size: "sm" | "md" | "default";
    /**
     * Returns the `RadioComponent` that is selected within the `RadioGroup`.
     * @readonly
     * @memberof RadioGroup
     */
    /**
    * Sets the passed in `RadioComponent` item as the selected input within the `RadioGroup`.
    * @param selected
    * @memberof RadioGroup
    */
    selected: RadioComponent | null;
    /**
     * Returns the value/state of the selected `RadioComponent` within the `RadioGroup`.
     * @readonly
     * @memberof RadioGroup
     */
    /**
    * Sets the value/state of the selected `RadioComponent` within the `RadioGroup` to the passed in value.
    * @param {newValue}
    * @memberof RadioGroup
    */
    value: any;
    /**
     * Returns the associated name of the `RadioGroup`.
     * @readonly
     * @memberof RadioGroup
     */
    /**
    * Replaces the name associated with the `RadioGroup` with the provided parameter.
    * @param name
    * @memberof RadioGroup
    */
    name: string;
    /**
     * Returns the disabled value in the `RadioGroup` if there is one.
     * @readonly
     * @memberof RadioGroup
     */
    /**
    * Updates the disabled value using the provided parameter and marks the radios to be checked for
    * changes.
    * @param value
    * @memberof RadioGroup
    */
    disabled: boolean;
    /**
     * Binds 'radiogroup' value to the role attribute for `RadioGroup`.
     * @memberof RadioGroup
     */
    role: string;
    /**
     * Binds 'bx--radio-button-group' value to the class for `RadioGroup`.
     * @memberof RadioGroup
     */
    radioButtonGroupClass: boolean;
    /**
     * To track whether the `RadioGroup` has been initialized.
     * @private
     * @memberof RadioGroup
     */
    private isInitialized;
    /**
     * Reflects whether or not the input is disabled and cannot be selected.
     * @type {boolean}
     * @private
     * @memberof RadioGroup
     */
    private _disabled;
    /**
     * The value of the selected option within the `RadioGroup`.
     * @private
     * @type {any}
     * @memberof RadioGroup
     */
    private _value;
    /**
     * The `RadioComponent` within the `RadioGroup` that is selected.
     * @private
     * @type {RadioComponent}
     * @memberof RadioGroup
     */
    private _selected;
    /**
     * The name attribute associated with the `RadioGroup`.
     * @type {string}
     * @private
     * @memberof RadioGroup
     */
    private _name;
    /**
     * Creates an instance of RadioGroup.
     * @param {ChangeDetectorRef} changeDetectorRef
     * @param {ElementRef} elementRef
     * @param {Renderer2} renderer
     * @memberof RadioGroup
     */
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2);
    /**
     * Updates the selected `RadioComponent` to be checked (selected).
     * @memberof RadioGroup
     */
    checkSelectedRadio(): void;
    /**
     * Use the value of the `RadioGroup` to update the selected radio to the right state (selected state).
     * @memberof RadioGroup
     */
    updateSelectedRadioFromValue(): void;
    /**
     * Creates a class of `RadioChange` to emit the change in the `RadioGroup`.
     * @memberof RadioGroup
     */
    emitChangeEvent(): void;
    /**
     * Calls the `markForCheck()` function within the `changeDetectorRef` class
     * to trigger Angular's change detection on each radio item.
     * @memberof RadioGroup
     */
    markRadiosForCheck(): void;
    /**
     * Synchronizes the names of the radio items with the name of the `RadioGroup`.
     * @memberof RadioGroup
     */
    updateRadioNames(): void;
    /**
     * Updates the value of the `RadioGroup` using the provided parameter.
     * @param {any} value
     * @memberof RadioGroup
     */
    writeValue(value: any): void;
    /**
     * Callback triggered when a `RadioComponent` within the `RadioGroup` is changed.
     * @memberof RadioGroup
     */
    touch(): void;
    /**
     * Builds variant class on the radio items within the `RadioGroup`.
     * @memberof RadioGroup
     */
    ngOnInit(): void;
    /**
     * Marks this component as initialized to avoid the initial value getting set by `NgModel` on `RadioGroup`.
     * This avoids `NgModel` setting the initial value before the OnInit of the `RadioGroup`.
     * @memberof RadioGroup
     */
    ngAfterContentInit(): void;
    updateFocusableRadio(): void;
    /**
     * Used to set method to propagate changes back to the form.
     * @param {*} fn
     * @memberof RadioGroup
     */
    registerOnChange(fn: any): void;
    /**
     * Registers a callback to be triggered when the control has been touched.
     * @param fn Callback to be triggered when the checkbox is touched.
     */
    registerOnTouched(fn: any): void;
    /**
     * Needed to properly implement ControlValueAccessor.
     * @memberof RadioGroup
     */
    onTouched: () => any;
    /**
     * Method set in registerOnChange to propagate changes back to the form.
     * @memberof RadioGroup
     */
    propagateChange: (_: any) => void;
}
