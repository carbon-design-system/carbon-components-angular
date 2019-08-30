import { EventEmitter } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";
/**
 * Individual item in the header. May be used a direct child of `HeaderNavigation` or `HeaderMenu`
 */
export declare class HeaderItem {
    protected domSanitizer: DomSanitizer;
    protected router: Router;
    href: string;
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
    protected _href: string;
    constructor(domSanitizer: DomSanitizer, router: Router);
    navigate(event: any): void;
}
