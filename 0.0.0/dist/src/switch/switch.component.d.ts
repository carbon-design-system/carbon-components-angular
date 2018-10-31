import { CheckboxComponent } from "../checkbox/checkbox.component";
import { ChangeDetectorRef } from "@angular/core";
/**
 * Defines the set of states for a switch component.
 * @export
 * @enum {number}
 */
export declare enum SwitchState {
    Init = 0,
    Indeterminate = 1,
    Checked = 2,
    Unchecked = 3
}
/**
 * Used to emit changes performed on switch components.
 * @export
 * @class SwitchChange
 */
export declare class SwitchChange {
    /**
     * Contains the `SwitchComponent` that has been changed.
     * @type {SwitchComponent}
     * @memberof SwitchChange
     */
    source: SwitchComponent;
    /**
     * The state of the `SwitchComponent` encompassed in the `SwitchChange` class.
     * @type {boolean}
     * @memberof SwitchChange
     */
    checked: boolean;
}
/**
 * ```html
 * <ibm-switch [(ngModel)]="switchState">Switch</ibm-switch>
 * ```
 * @export
 * @class SwitchComponent
 * @extends {CheckboxComponent}
 * @implements {OnInit}
 */
export declare class SwitchComponent extends CheckboxComponent {
    protected changeDetectorRef: ChangeDetectorRef;
    /**
     * Variable used for creating unique ids for switch components.
     * @type {number}
     * @static
     * @memberof SwitchComponent
     */
    static switchCount: number;
    /**
     * Size of the switch component.
     * (size `"default"` is being deprecated as of neutrino v1.2.0, please use `"md"` instead)
     * @type {("sm" | "md" | "default")}
     * @memberof SwitchComponent
     */
    size: "sm" | "md" | "default";
    /**
     * The unique id allocated to the `SwitchComponent`.
     * @type {string}
     * @memberof SwitchComponent
     */
    id: string;
    /**
     * Creates an instance of SwitchComponent.
     * @param {ChangeDetectorRef} changeDetectorRef
     * @memberof SwitchComponent
     */
    constructor(changeDetectorRef: ChangeDetectorRef);
}
