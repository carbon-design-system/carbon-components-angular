import { Checkbox } from "../checkbox/checkbox.component";
import { ChangeDetectorRef } from "@angular/core";
/**
 * Deprecated in favour of `ToggleState` (to be removed in v3.0).
 * Defines the set of states for a switch component.
 * @deprecated
 */
export declare enum SwitchState {
    Init = 0,
    Indeterminate = 1,
    Checked = 2,
    Unchecked = 3
}
/**
 * Deprecated in favour of `ToggleChange` (to be removed in v3.0).
 * Used to emit changes performed on switch components.
 * @deprecated
 */
export declare class SwitchChange {
    /**
     * Contains the `Switch` that has been changed.
     * @type {Switch}
     * @memberof SwitchChange
     */
    source: Switch;
    /**
     * The state of the `Switch` encompassed in the `SwitchChange` class.
     * @type {boolean}
     * @memberof SwitchChange
     */
    checked: boolean;
}
/**
 * Deprecated in favour of `Toggle` (to be removed in v3.0).
 * ```html
 * <ibm-switch [(ngModel)]="switchState">Switch</ibm-switch>
 * ```
 * @deprecated
 */
export declare class Switch extends Checkbox {
    protected changeDetectorRef: ChangeDetectorRef;
    /**
     * Variable used for creating unique ids for switch components.
     */
    static switchCount: number;
    /**
     * Size of the switch component.
     */
    size: "sm" | "md";
    /**
     * The unique id allocated to the `Switch`.
     */
    id: string;
    /**
     * Creates an instance of Switch.
     */
    constructor(changeDetectorRef: ChangeDetectorRef);
}
