import { ChangeDetectorRef, ElementRef, OnInit, Renderer2 } from "@angular/core";
import { Checkbox } from "../checkbox/checkbox.component";
import { RadioGroup } from "./radio-group.component";
/**
 * class: Radio (extends Checkbox)
 *
 * selector: `n-radio`
 *
 * source: `src/forms/radio.component.ts`
 *
 * ```html
 * <ibm-radio [(ngModel)]="radioState">Radio</ibm-radio>
 * ```
 *
 * Also see: [`RadioGroup`](#ibm-radio-group)
 *
 * @export
 * @class Radio
 * @extends {Checkbox}
 * @implements {OnInit}
 */
export declare class Radio extends Checkbox implements OnInit {
    changeDetectorRef: ChangeDetectorRef;
    private elementRef;
    private renderer;
    /**
     * Used to dynamically create unique ids for the `Radio`.
     * @static
     * @memberof Radio
     */
    static radioCount: number;
    /**
     * Returns the value/state of the `Radio`.
     * @readonly
     * @type {any}
     * @returns {any}
     * @memberof Radio
     */
    /**
    * Replaces `@Input value` with the provided parameter supplied from the parent.
    * @param {any} value
    * @memberof Radio
    */
    value: any;
    /**
     * Binds 'radio' value to the role attribute for `Radio`.
     * @memberof Radio
     */
    role: string;
    /**
     * The id for the `Radio`.
     * @type {string}
     * @memberof Radio
     */
    id: string;
    /**
     * The radio group that this `Radio` belongs to (if any).
     * @type {RadioGroup}
     * @memberof Radio
     */
    radioGroup: RadioGroup;
    /**
     * set to true if the `Radio` needs a tabIndex of 0.
     * @type {RadioGroup}
     * @memberof Radio
     */
    needsToBeFocusable: boolean;
    /**
     * The value of the `Radio`.
     * @type {any}
     * @memberof Radio
     */
    _value: any;
    /**
     * Creates an instance of Radio.
     * @param {RadioGroup} radioGroup
     * @param {ChangeDetectorRef} changeDetectorRef
     * @param {ElementRef} elementRef
     * @param {Renderer2} renderer
     * @memberof Radio
     */
    constructor(radioGroup: RadioGroup, changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2);
    /**
     * If the component has an encompassing `RadioGroup` it synchronizes the name with that
     * of the group.
     * @memberof Radio
     */
    ngOnInit(): void;
    /**
     * Handles the event of a mouse click on the `Radio`.
     * @param {Event} event
     * @memberof Radio
     */
    onClick(event: Event): void;
    /**
     * Synchronizes with the `RadioGroup` in the event of a changed `Radio`.
     * Emits the changes of both the `RadioGroup` and `Radio`.
     * @param {Event} event
     * @memberof Radio
     */
    onChange(event: Event): void;
    /**
     * Calls the `markForCheck()` function within the `changeDetectorRef` class
     * to make sure that Angular's change detection is triggered for the input.
     * @memberof Radio
     */
    markForCheck(): void;
}
