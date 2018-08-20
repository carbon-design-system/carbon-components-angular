import { Dialog } from "./../dialog.component";
/**
 * Extend the neutrino `Dialog` component to create a popover styled element for exposing content.
 * @export
 * @class Popover
 * @extends {Dialog}
 */
export declare class Popover extends Dialog {
    /**
     * Binds display property to the `Popover` style attribute.
     * @memberof Popover
     */
    style: string;
    /**
     * Set to `true` if `Popover` has a template for the body content.
     * @type {boolean}
     * @memberof Popover
     */
    hasContentTemplate: boolean;
    /**
     * Set to `true` if `Popover` has a template for a footer.
     * @type boolean
     * @memberof Popover
     */
    hasFooterTemplate: boolean;
    /**
     * Checks whether the `Popover` has templates for content and footer.
     * @memberof Popover
     */
    onDialogInit(): void;
}
