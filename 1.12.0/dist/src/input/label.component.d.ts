import { AfterContentInit, ElementRef } from "@angular/core";
/**
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
 * @export
 * @class LabelComponent
 * @implements {AfterContentInit}
 */
export declare class LabelComponent implements AfterContentInit {
    private elementRef;
    /**
     * Used to build the id of the input item associated with the `LabelComponent`.
     * @static
     * @memberof LabelComponent
     */
    static labelCounter: number;
    /**
     * The id of the input item associated with the `LabelComponent`. This value is also used to associate the `LabelComponent` with
     * its input counterpart through the 'for' attribute.
     * @memberof LabelComponent
     */
    labelInputID: string;
    /**
     * State of the `LabelComponent` will determine the styles applied.
     * @type {("success" | "warning" | "error" | "")}
     * @memberof LabelComponent
     */
    labelState: "success" | "warning" | "error" | "";
    labelComponentClass: boolean;
    /**
     * Creates an instance of LabelComponent.
     * @param {ElementRef} elementRef
     * @memberof LabelComponent
     */
    constructor(elementRef: ElementRef);
    /**
     * Sets the id on the input item associated with the `LabelComponent`.
     * @memberof LabelComponent
     */
    ngAfterContentInit(): void;
}
