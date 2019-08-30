import { EventEmitter } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";
/**
 * `SideNavItem` can either be a child of `SideNav` or `SideNavMenu`
 */
export declare class SideNavItem {
    protected domSanitizer: DomSanitizer;
    protected router: Router;
    /**
     * Link for the item. NOTE: *do not* pass unsafe or untrusted values, this has the potential to open you up to XSS attacks
     */
    href: string;
    /**
     * Toggles the active (current page) state for the link.
     */
    active: boolean;
    /**
     * Array of commands to send to the router when the link is activated
     * See: https://angular.io/api/router/Router#navigate
     */
    route: any[];
    /**
     * Router options. Used in conjunction with `route`
     * See: https://angular.io/api/router/Router#navigate
     */
    routeExtras: any;
    /**
     * Emits the navigation status promise when the link is activated
     */
    navigation: EventEmitter<Promise<boolean>>;
    isSubMenu: boolean;
    protected _href: string;
    constructor(domSanitizer: DomSanitizer, router: Router);
    navigate(event: any): void;
}
