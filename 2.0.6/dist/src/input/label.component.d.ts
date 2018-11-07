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
 * @class Label
 * @implements {AfterContentInit}
 */
export declare class Label implements AfterContentInit {
    protected elementRef: ElementRef;
    /**
     * Used to build the id of the input item associated with the `Label`.
     * @static
     * @memberof Label
     */
    static labelCounter: number;
    /**
     * The id of the input item associated with the `Label`. This value is also used to associate the `Label` with
     * its input counterpart through the 'for' attribute.
     * @memberof Label
     */
    labelInputID: string;
    /**
     * State of the `Label` will determine the styles applied.
     * @type {("success" | "warning" | "error" | "")}
     * @memberof Label
     */
    labelState: "success" | "warning" | "error" | "";
    labelClass: boolean;
    /**
     * Creates an instance of Label.
     * @param {ElementRef} elementRef
     * @memberof Label
     */
    constructor(elementRef: ElementRef);
    /**
     * Sets the id on the input item associated with the `Label`.
     * @memberof Label
     */
    ngAfterContentInit(): void;
}
