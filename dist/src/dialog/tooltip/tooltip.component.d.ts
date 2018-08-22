import { Dialog } from "./../dialog.component";
/**
 * Extend the `Dialog` component to create a tooltip for exposing content.
 * @export
 * @class Tooltip
 * @extends {Dialog}
 */
export declare class Tooltip extends Dialog {
    style: string;
    /**
     * Value is set to `true` if the `Tooltip` is to display a `TemplateRef` instead of a string.
     * @type {boolean}
     * @memberof Tooltip
     */
    hasContentTemplate: boolean;
    /**
     * Check whether there is a template for the `Tooltip` content.
     * @memberof Tooltip
     */
    onDialogInit(): void;
    /**
     * Set the class of the `Tooltip`.
     * @returns null
     * @memberof Tooltip
     */
    getClass(): string;
}
