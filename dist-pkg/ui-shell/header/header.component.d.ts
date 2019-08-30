import { I18n } from "../../i18n/i18n.module";
/**
 * A fixed header and navigation.
 * Header may contain a Hamburger menu to toggle the side navigation, navigation actions,
 * and global actions (generally in the form of `Panel`s).
 *
 * [See demo](../../?path=/story/ui-shell--header)
 *
 * <example-url>../../iframe.html?id=ui-shell--header</example-url>
 */
export declare class Header {
    i18n: I18n;
    /**
     * ID in the main body content to jump to. Used by keyboard and screen reader users to skip the header content.
     */
    skipTo: string;
    /**
     * Label that shows to the right of the `brand` text. Generally a product name.
     */
    name: string;
    /**
     * Top level branding. Defaults to "IBM"
     */
    brand: string;
    constructor(i18n: I18n);
}
