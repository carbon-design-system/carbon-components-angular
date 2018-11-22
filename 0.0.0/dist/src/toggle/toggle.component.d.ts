import { Checkbox } from "../checkbox/checkbox.component";
import { ChangeDetectorRef, EventEmitter } from "@angular/core";
/**
 * Defines the set of states for a toggle component.
 * @export
 * @enum {number}
 */
export declare enum ToggleState {
    Init = 0,
    Indeterminate = 1,
    Checked = 2,
    Unchecked = 3
}
/**
 * Used to emit changes performed on toggle components.
 * @export
 * @class ToggleChange
 */
export declare class ToggleChange {
    /**
     * Contains the `Toggle` that has been changed.
     * @type {Toggle}
     * @memberof ToggleChange
     */
    source: Toggle;
    /**
     * The state of the `Toggle` encompassed in the `ToggleChange` class.
     * @type {boolean}
     * @memberof ToggleChange
     */
    checked: boolean;
}
/**
 * ```html
 * <ibm-toggle [(ngModel)]="toggleState">Toggle</ibm-toggle>
 * ```
 * @export
 * @class Toggle
 * @extends {Checkbox}
 * @implements {OnInit}
 */
export declare class Toggle extends Checkbox {
    protected changeDetectorRef: ChangeDetectorRef;
    /**
     * Variable used for creating unique ids for toggle components.
     * @type {number}
     * @static
     * @memberof Toggle
     */
    static toggleCount: number;
    /**
     * Size of the toggle component.
     * @type {("sm" | "md" | "default")}
     * @memberof Toggle
     */
    size: "sm" | "md";
    /**
     * The unique id allocated to the `Toggle`.
     * @type {string}
     * @memberof Toggle
     */
    id: string;
    /**
     * Emits event notifying other classes when a change in state occurs on a toggle after a
     * click.
     */
    change: EventEmitter<ToggleChange>;
    /**
     * Creates an instance of Toggle.
     * @param {ChangeDetectorRef} changeDetectorRef
     * @memberof Toggle
     */
    constructor(changeDetectorRef: ChangeDetectorRef);
    /**
     * Creates instance of `ToggleChange` used to propagate the change event.
     * @memberof To
     */
    emitChangeEvent(): void;
}
