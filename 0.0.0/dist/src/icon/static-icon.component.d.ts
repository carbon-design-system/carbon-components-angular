import { ElementRef, AfterViewInit } from "@angular/core";
/**
 * `n-icon` pulls the icon from the loaded sprite, and renders it at the specified size.
 * Under the hood, `n-icon` generates code similar to the following:
 * ```
 * <svg class="icon" width="30" height="30"><use href="#alert_30"></use></svg>
 * ```
 */
export declare class StaticIcon implements AfterViewInit {
    protected elementRef: ElementRef;
    /** follows the naming convention found in the icon listing on the demo page */
    icon: string;
    /** accepts color strings */
    color: "blue" | "light" | "dark" | "white";
    /** accepts abbreviated size strings */
    size: "xs" | "sm" | "md" | "lg";
    /** classlist for the SVG */
    classList: String;
    /** map size strings to numeric values */
    protected sizeMap: {
        "xs": number;
        "sm": number;
        "md": number;
        "lg": number;
    };
    protected iconMap: {
        "addnew_circle_16": (classList: any) => string;
        "chevron_down_16": (classList: any) => string;
        "chevron_down_20": (classList: any) => string;
        "chevron_down_30": (classList: any) => string;
        "chevron_up_circle_16": (classList: any) => string;
        "chevron_up_circle_disabled_16": (classList: any) => string;
        "chevron_down_circle_16": (classList: any) => string;
        "chevron_down_circle_disabled_16": (classList: any) => string;
        "chevron_right_circle_16": (classList: any) => string;
        "chevron_right_circle_disabled_16": (classList: any) => string;
        "chevron_right_16": (classList: any) => string;
        "chevron_right_14": (classList: any) => string;
        "chevron_left_16": (classList: any) => string;
        "chevron_left_14": (classList: any) => string;
        "chevron_left_circle_16": (classList: any) => string;
        "chevron_left_circle_disabled_16": (classList: any) => string;
        "x_16": (classList: any) => string;
        "info_20": (classList: any) => string;
        "info_fill_20": (classList: any) => string;
        "warning_20": (classList: any) => string;
        "warning_16": (classList: any) => string;
        "warning_fill_20": (classList: any) => string;
        "danger_20": (classList: any) => string;
        "failure_fill_20": (classList: any) => string;
        "success_20": (classList: any) => string;
        "success_16": (classList: any) => string;
        "success_fill_20": (classList: any) => string;
        "error_16": (classList: any) => string;
        "search_16": (classList: any) => string;
        "loading_rows_30": (classList: any) => string;
        "help_16": (classList: any) => string;
        "carat_up_16": (classList: any) => string;
        "grip_vertical_16": (classList: any) => string;
    };
    /**
     * Initialize the component
     *
     * @param {ElementRef} elementRef
     */
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    /**
     * Create a class name based on @Input() `color` and `size`.
     * @return {string}
     */
    buildMatterClass(): string;
}
