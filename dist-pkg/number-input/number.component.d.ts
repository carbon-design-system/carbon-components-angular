import { EventEmitter, TemplateRef } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
/**
 * Used to emit changes performed on number input components.
 */
export declare class NumberChange {
    /**
     * Contains the `Number` that has been changed.
     */
    source: Number;
    /**
     * The value of the `Number` field encompassed in the `NumberChange` class.
     */
    value: number;
}
/**
 * [See demo](../../?path=/story/number--basic)
 *
 * <example-url>../../iframe.html?id=number--basic</example-url>
 */
export declare class Number implements ControlValueAccessor {
    /**
     * Variable used for creating unique ids for number input components.
     */
    static numberCount: number;
    containerClass: boolean;
    /**
     * `light` or `dark` number input theme.
     */
    theme: "light" | "dark";
    /**
     * Set to `true` for a disabled number input.
     */
    disabled: boolean;
    /**
     * Set to `true` for a loading number component.
     */
    skeleton: boolean;
    /**
     * Set to `true` for an invalid number component.
     */
    invalid: boolean;
    /**
     * The unique id for the number component.
     */
    id: string;
    /**
     * Reflects the required attribute of the `input` element.
     */
    required: boolean;
    /**
     * Sets the value attribute on the `input` element.
     */
    value: number;
    /**
     * Sets the min attribute on the `input` element.
     */
    min: any;
    /**
     * Sets the max attribute on the `input` element.
     */
    max: any;
    /**
     * Sets the text inside the `label` tag.
     */
    label: string | TemplateRef<any>;
    /**
     * Sets the optional helper text.
     */
    helperText: string | TemplateRef<any>;
    /**
     * Sets the invalid text.
     */
    invalidText: string | TemplateRef<any>;
    /**
     * Emits event notifying other classes when a change in state occurs in the input.
     */
    change: EventEmitter<NumberChange>;
    /**
     * Creates an instance of `Number`.
     */
    constructor();
    /**
     * This is the initial value set to the component
     * @param value The input value.
     */
    writeValue(value: any): void;
    /**
     * Sets a method in order to propagate changes back to the form.
     */
    registerOnChange(fn: any): void;
    /**
     * Registers a callback to be triggered when the control has been touched.
     * @param fn Callback to be triggered when the number input is touched.
     */
    registerOnTouched(fn: any): void;
    /**
     * Sets the disabled state through the model
     */
    setDisabledState(isDisabled: boolean): void;
    /**
     * Called when number input is blurred. Needed to properly implement `ControlValueAccessor`.
     */
    onTouched: () => any;
    /**
     * Method set in `registerOnChange` to propagate changes back to the form.
     */
    propagateChange: (_: any) => void;
    /**
     * Adds 1 to the current `value`.
     */
    onIncrement(): void;
    /**
     * Subtracts 1 to the current `value`.
     */
    onDecrement(): void;
    /**
     * Creates a class of `NumberChange` to emit the change in the `Number`.
     */
    emitChangeEvent(): void;
    onNumberInputChange(event: any): void;
    isTemplate(value: any): boolean;
}
