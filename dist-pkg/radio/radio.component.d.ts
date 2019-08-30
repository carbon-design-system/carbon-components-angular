import { EventEmitter } from "@angular/core";
import { RadioChange } from "./radio-change.class";
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
 */
export declare class Radio {
    /**
     * Used to dynamically create unique ids for the `Radio`.
     */
    static radioCount: number;
    checked: boolean;
    name: string;
    disabled: boolean;
    labelPlacement: "right" | "left";
    ariaLabelledby: string;
    /**
     * Sets the HTML required attribute
     */
    required: boolean;
    /**
     * The value of the `Radio`.
     */
    value: string;
    /**
     * Set to `true` for a loading table.
     */
    skeleton: boolean;
    /**
     * The id for the `Radio`.
     */
    id: string;
    /**
     * emits when the state of the radio changes
     */
    change: EventEmitter<RadioChange>;
    /**
     * Binds 'radio' value to the role attribute for `Radio`.
     */
    role: string;
    hostClass: boolean;
    readonly labelLeft: boolean;
    protected _labelledby: string;
    /**
     * Handler provided by the `RadioGroup` to bubble events up
     */
    radioChangeHandler: (event: RadioChange) => void;
    /**
     * Synchronizes with the `RadioGroup` in the event of a changed `Radio`.
     * Emits the changes of both the `RadioGroup` and `Radio`.
     */
    onChange(event: Event): void;
    /**
     * Method called by `RadioGroup` with a callback function to bubble `RadioChange` events
     * @param fn callback that expects a `RadioChange` as an argument
     */
    registerRadioChangeHandler(fn: (event: RadioChange) => void): void;
}
