import { ElementRef } from "@angular/core";
import { Dialog } from "./../dialog.component";
/**
 * Extend the `Dialog` component to create a tooltip for exposing content.
 */
export declare class Tooltip extends Dialog {
    protected elementRef: ElementRef;
    style: string;
    /**
     * Value is set to `true` if the `Tooltip` is to display a `TemplateRef` instead of a string.
     */
    hasContentTemplate: boolean;
    /**
     * Sets the role of the tooltip. If there's no focusable content we leave it as a `tooltip`,
     * if there _is_ focusable content we switch to the interactive `dialog` role.
     */
    role: string;
    constructor(elementRef: ElementRef);
    /**
     * Check whether there is a template for the `Tooltip` content.
     */
    onDialogInit(): void;
    afterDialogViewInit(): void;
}
