import { EventEmitter, ElementRef, TemplateRef } from "@angular/core";
export declare class DatePickerInput {
    protected elementRef: ElementRef;
    private static datePickerCount;
    /**
     * Select a calendar type for the `model`.
     * Internal purposes only.
     */
    type: "simple" | "single" | "range";
    id: string;
    hasIcon: boolean;
    label: string | TemplateRef<any>;
    placeholder: string;
    pattern: string;
    valueChange: EventEmitter<string>;
    theme: "light" | "dark";
    disabled: boolean;
    invalid: boolean;
    invalidText: string | TemplateRef<any>;
    skeleton: boolean;
    value: string;
    constructor(elementRef: ElementRef);
    onChange(event: any): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onTouched: () => any;
    propagateChange: (_: any) => void;
    isTemplate(value: any): boolean;
}
