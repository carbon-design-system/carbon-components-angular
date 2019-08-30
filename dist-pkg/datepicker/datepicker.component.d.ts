import { EventEmitter, ElementRef, OnDestroy, TemplateRef, OnChanges, SimpleChanges, AfterViewChecked } from "@angular/core";
/**
 * [See demo](../../?path=/story/date-picker--single)
 *
 * <example-url>../../iframe.html?id=date-picker--single</example-url>
 */
export declare class DatePicker implements OnDestroy, OnChanges, AfterViewChecked {
    protected elementRef: ElementRef;
    private static datePickerCount;
    /**
     * Select calendar range mode
     */
    range: boolean;
    /**
     * Format of date
     *
     * For reference: https://flatpickr.js.org/formatting/
     */
    dateFormat: string;
    label: string | TemplateRef<any>;
    rangeLabel: string;
    placeholder: string;
    pattern: string;
    id: string;
    value: (Date | string)[];
    theme: "light" | "dark";
    disabled: boolean;
    invalid: boolean;
    invalidText: string | TemplateRef<any>;
    skeleton: boolean;
    plugins: any[];
    flatpickrOptions: any;
    flatpickrOptionsRange: any;
    valueChange: EventEmitter<any>;
    protected _value: any[];
    protected _flatpickrOptions: {
        allowInput: boolean;
    };
    protected flatpickrBaseOptions: {
        mode: string;
        dateFormat: string;
        plugins: any[];
        onOpen: () => void;
        value: (string | Date)[];
    };
    protected flatpickrInstance: any;
    constructor(elementRef: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewChecked(): void;
    onFocus(): void;
    /**
     * Writes a value from the model to the component. Expects the value to be `null` or `(Date | string)[]`
     * @param value value received from the model
     */
    writeValue(value: (Date | string)[]): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onTouched: () => any;
    propagateChange: (_: any) => void;
    /**
     * Cleans up our flatpickr instance
     */
    ngOnDestroy(): void;
    /**
     * Handles the `valueChange` event from the primary/single input
     */
    onValueChange(event: string): void;
    /**
     * Handles the `valueChange` event from the range input
     */
    onRangeValueChange(event: string): void;
    /**
     * Carbon uses a number of specific classnames for parts of the flatpickr - this idempotent method applies them if needed.
     */
    protected updateClassNames(): void;
    /**
     * Applies the given date value array to both the flatpickr instance and the `input`(s)
     * @param dates the date values to apply
     */
    protected setDateValues(dates: (Date | string)[]): void;
    protected doSelect(selectedValue: (Date | string)[]): void;
    protected didDateValueChange(currentValue: any, previousValue: any): boolean;
    /**
     * More advanced checking of the loaded state of flatpickr
     */
    protected isFlatpickrLoaded(): boolean;
}
