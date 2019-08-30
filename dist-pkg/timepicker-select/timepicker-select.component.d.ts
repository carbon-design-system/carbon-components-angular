import { EventEmitter } from "@angular/core";
import { Select } from "../select/select.component";
/**
 * [See demo](../../?path=/story/time-picker-select--simple)
 *
 * <example-url>../../iframe.html?id=time-picker-select--simple</example-url>
 */
export declare class TimePickerSelect extends Select {
    timeSelect: boolean;
    timePickerSelect: boolean;
    id: string;
    /**
     * Set to true for a loading select.
     */
    skeleton: boolean;
    /**
     * `light` or `dark` select theme
     */
    theme: "light" | "dark";
    label: string;
    timePickerSelectSkeleton: boolean;
    readonly timePickerSelectLight: boolean;
    valueChange: EventEmitter<string>;
    onChange(event: any): void;
}
