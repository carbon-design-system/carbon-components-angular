import { I18n } from "../../i18n/i18n.module";
/**
 * `Sidenav` is a fixed left navigation that may contain `SideNavItem`s or `SideNavMenu`s
 *
 * [See demo](../../?path=/story/ui-shell--side-navigation)
 *
 * <example-url>../../iframe.html?id=ui-shell--side-navigation</example-url>
 */
export declare class SideNav {
    i18n: I18n;
    role: string;
    hostClass: boolean;
    /**
     * Controls the expanded (`true`) or collapsed (`false`) state when on a small screen.
     */
    expanded: boolean;
    /**
     * Controls the hidden (`true`) or visible (`false`) state
     */
    hidden: boolean;
    ux: boolean;
    allowExpansion: boolean;
    constructor(i18n: I18n);
    toggle(): void;
}
