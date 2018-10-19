import { ChangeDetectorRef, ElementRef, OnInit, Renderer2 } from "@angular/core";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { RadioGroup } from "./radio-group.component";
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
 * Also see: [`RadioGroup`](#ibm-radio-group)
 *
 * @export
 * @class RadioComponent
 * @extends {CheckboxComponent}
 * @implements {OnInit}
 */
export declare class RadioComponent extends CheckboxComponent implements OnInit {
    changeDetectorRef: ChangeDetectorRef;
    private elementRef;
    private renderer;
    /**
     * Used to dynamically create unique ids for the `RadioComponent`.
     * @static
     * @memberof RadioComponent
     */
    static radioCount: number;
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
     * set to true if the `RadioComponent` needs a tabIndex of 0.
     * @type {RadioGroup}
     * @memberof RadioComponent
     */
    needsToBeFocusable: boolean;
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
}
