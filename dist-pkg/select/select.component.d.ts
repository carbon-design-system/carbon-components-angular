import { ElementRef, EventEmitter, TemplateRef } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
/**
 * `ibm-select` provides a styled `select` component.
 *
 * [See demo](../../?path=/story/select--basic)
 *
 * Example:
 *
 * ```
 * <ibm-select [(ngModel)]="model">
 * 	<option value="default" disabled selected hidden>Choose an option</option>
 * 	<option value="option1">Option 1</option>
 *	<option value="option2">Option 2</option>
 * 	<option value="option3">Option 3</option>
 * </ibm-select>
 *	```
 *
 * <example-url>../../iframe.html?id=select--basic</example-url>
 */
export declare class Select implements ControlValueAccessor {
    /**
     * Tracks the total number of selects instantiated. Used to generate unique IDs
     */
    static selectCount: number;
    /**
     * `inline` or `default` select displays
     */
    display: "inline" | "default";
    /**
     * Label for the select. Appears above the input.
     */
    label: string | TemplateRef<any>;
    /**
     * Optional helper text that appears under the label.
     */
    helperText: string | TemplateRef<any>;
    /**
     * Sets the invalid text.
     */
    invalidText: string | TemplateRef<any>;
    /**
     * Sets the unique ID. Defaults to `select-${total count of selects instantiated}`
     */
    id: string;
    /**
     * Set to true to disable component.
     */
    disabled: boolean;
    /**
     * Set to true for a loading select.
     */
    skeleton: boolean;
    /**
     * Set to `true` for an invalid select component.
     */
    invalid: boolean;
    /**
     * `light` or `dark` select theme
     */
    theme: "light" | "dark";
    /**
     * emits the selected options `value`
     */
    selected: EventEmitter<{}>;
    select: ElementRef;
    value: any;
    /**
     * Receives a value from the model.
     */
    writeValue(obj: any): void;
    /**
     * Registers a listener that notifies the model when the control updates
     */
    registerOnChange(fn: any): void;
    /**
     * Registers a listener that notifies the model when the control is blurred
     */
    registerOnTouched(fn: any): void;
    /**
     * Sets the disabled state through the model
     */
    setDisabledState(isDisabled: boolean): void;
    /**
     * Handles the change event from the `select`.
     * Sends events to the change handler and emits a `selected` event.
     */
    onChange(event: any): void;
    /**
     * Listens for the host blurring, and notifies the model
     */
    blur(): void;
    isTemplate(value: any): boolean;
    /**
     * placeholder declarations. Replaced by the functions provided to `registerOnChange` and `registerOnTouched`
     */
    protected onChangeHandler: (_: any) => void;
    protected onTouchedHandler: () => void;
}
