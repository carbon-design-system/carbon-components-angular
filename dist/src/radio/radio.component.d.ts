import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, OnInit, QueryList, Renderer2 } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
import { CheckboxComponent } from "../checkbox/checkbox.component";
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
 * selector: `n-radio-group`
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
 * Also see: [`RadioComponent`](#n-radio)
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
    _radios: QueryList<RadioComponent>;
    /**
     * Determines the render size of the `RadioComponent` inputs within the group.
     * (size `"default"` is being deprecated as of neutrino v1.2.0, please use `"md"` instead)
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
/**
 * class: RadioComponent (extends CheckboxComponent)
 *
 * selector: `n-radio`
 *
 * source: `src/forms/radio.component.ts`
 *
 * ```html
 * <ibm-radio [(ngModel)]="radioState">Radio</ibm-radio>
 * ```
 *
 * Also see: [`RadioGroup`](#n-radio-group)
 *
 * @export
 * @class RadioComponent
 * @extends {CheckboxComponent}
 * @implements {OnInit}
 */
export declare class RadioComponent extends CheckboxComponent implements OnInit {
    protected changeDetectorRef: ChangeDetectorRef;
    private elementRef;
    private renderer;
    /**
     * Used to dynamically create unique ids for the `RadioComponent`.
     * @static
     * @memberof RadioComponent
     */
    static radioCount: number;
    /**
     * Binds 'radio' value to the role attribute for `RadioComponent`.
     * @memberof RadioComponent
     */
    role: string;
    /**
     * The id for the `RadioComponent`.
     * @type {string}
     * @memberof RadioComponent
     */
    id: string;
    /**
     * The radio group that this `RadioComponent` belongs to (if any).
     * @type {RadioGroup}
     * @memberof RadioComponent
     */
    radioGroup: RadioGroup;
    /**
     * The value of the `RadioComponent`.
     * @type {any}
     * @memberof RadioComponent
     */
    _value: any;
    /**
     * Creates an instance of RadioComponent.
     * @param {RadioGroup} radioGroup
     * @param {ChangeDetectorRef} changeDetectorRef
     * @param {ElementRef} elementRef
     * @param {Renderer2} renderer
     * @memberof RadioComponent
     */
    constructor(radioGroup: RadioGroup, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2);
    /**
     * If the component has an encompassing `RadioGroup` it synchronizes the name with that
     * of the group.
     * @memberof RadioComponent
     */
    ngOnInit(): void;
    /**
     * Handles the event of a mouse click on the `RadioComponent`.
     * @param {Event} event
     * @memberof RadioComponent
     */
    onClick(event: Event): void;
    /**
     * Synchronizes with the `RadioGroup` in the event of a changed `RadioComponent`.
     * Emits the changes of both the `RadioGroup` and `RadioComponent`.
     * @param {Event} event
     * @memberof RadioComponent
     */
    onChange(event: Event): void;
    /**
     * Calls the `markForCheck()` function within the `changeDetectorRef` class
     * to make sure that Angular's change detection is triggered for the input.
     * @memberof RadioComponent
     */
    markForCheck(): void;
    /**
     * Returns the value/state of the `RadioComponent`.
     * @readonly
     * @type {any}
     * @returns {any}
     * @memberof RadioComponent
     */
    /**
    * Replaces `@Input value` with the provided parameter supplied from the parent.
    * @param {any} value
    * @memberof RadioComponent
    */
    value: any;
}
