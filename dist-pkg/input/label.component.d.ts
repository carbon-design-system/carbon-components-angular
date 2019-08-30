import { AfterContentInit, ElementRef, TemplateRef } from "@angular/core";
/**
 * [See demo](../../?path=/story/input--label)
 *
 * ```html
 * <ibm-label labelState="success">
 * 	<label label>Field with success</label>
 * 	<input type="text" class="input-field">
 * </ibm-label>
 *
 * <ibm-label labelState="warning">
 * 	<label label>Field with warning</label>
 * 	<input type="text" class="input-field">
 * </ibm-label>
 *
 * <ibm-label labelState="error">
 * 	<label label>Field with error</label>
 * 	<input type="text" class="input-field">
 * </ibm-label>
 * ```
 *
 * <example-url>../../iframe.html?id=input--label</example-url>
 */
export declare class Label implements AfterContentInit {
    /**
     * Used to build the id of the input item associated with the `Label`.
     */
    static labelCounter: number;
    /**
     * The id of the input item associated with the `Label`. This value is also used to associate the `Label` with
     * its input counterpart through the 'for' attribute.
     */
    labelInputID: string;
    /**
     * State of the `Label` will determine the styles applied.
     */
    labelState: "success" | "warning" | "error" | "";
    /**
     * Set to `true` for a loading label.
     */
    skeleton: boolean;
    /**
     * Optional helper text that appears under the label.
     */
    helperText: string;
    /**
     * Sets the invalid text.
     */
    invalidText: string | TemplateRef<any>;
    /**
     * Set to `true` for an invalid label component.
     */
    invalid: boolean;
    wrapper: ElementRef<HTMLDivElement>;
    labelClass: boolean;
    /**
     * Creates an instance of Label.
     */
    constructor();
    /**
     * Sets the id on the input item associated with the `Label`.
     */
    ngAfterContentInit(): void;
    isTemplate(value: any): boolean;
}
