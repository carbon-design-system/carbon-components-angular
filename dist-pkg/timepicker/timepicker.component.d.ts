import { EventEmitter, TemplateRef } from "@angular/core";
/**
 * [See demo](../../?path=/story/time-picker--simple)
 *
 * <example-url>../../iframe.html?id=time-picker--simple</example-url>
 */
export declare class TimePicker {
    /**
     * Tracks the total number of selects instantiated. Used to generate unique IDs
     */
    static timePickerCount: number;
    timePicker: boolean;
    label: string | TemplateRef<any>;
    placeholder: string;
    pattern: string;
    id: string;
    disabled: boolean;
    value: string;
    /**
     * Set to true for a loading select.
     */
    skeleton: boolean;
    /**
     * `light` or `dark` select theme
     */
    theme: "light" | "dark";
    valueChange: EventEmitter<string>;
    onChange(event: any): void;
    isTemplate(value: any): boolean;
}
