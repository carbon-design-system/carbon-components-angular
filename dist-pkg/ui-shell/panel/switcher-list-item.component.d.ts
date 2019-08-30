import { DomSanitizer } from "@angular/platform-browser";
/**
 * Represents an item in a switcher list.
 *
 * **Note:** `ibm-product-x` selectors and components are deprecated and will be removed in the next major version
 */
export declare class SwitcherListItem {
    protected domSanitizer: DomSanitizer;
    /**
     * Enables the "active" state for an item. Commonly used to indicate the current page or selection.
     */
    active: boolean;
    /**
     * Optional link for the underlying anchor.
     */
    href: string;
    protected _href: string;
    constructor(domSanitizer: DomSanitizer);
}
