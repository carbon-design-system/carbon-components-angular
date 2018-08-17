import { Dialog } from "./../dialog.component";
/**
 * Extend the `Dialog` Component to create a popover styled element
 * that displays a menu or list.
 * @export
 * @class PopoverMenu
 * @extends {Dialog}
 */
export declare class PopoverMenu extends Dialog {
    /**
     * Binds display property to the `PopoverMenu` style attribute.
     * @memberof PopoverMenu
     */
    style: string;
    /**
     * Set to `true` if `PopoverMenu` has a template for the body content.
     * @type {boolean}
     * @memberof PopoverMenu
     */
    hasContentTemplate: boolean;
    /**
     * Set to `true` if `PopoverMenu` has a template for a footer.
     * @type {boolean}
     * @memberof PopoverMenu
     */
    hasFooterTemplate: boolean;
    /**
     * Checks for existing content and footer templates and
     * handles offset for the `PopoverMenu`.
     * @memberof PopoverMenu
     */
    onDialogInit(): void;
}
