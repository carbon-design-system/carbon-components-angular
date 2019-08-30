import { EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
/**
 * Build application's clickable tiles using this component.
 *
 * ## Basic usage
 *
 * ```html
 * <ibm-clickable-tile>
 * 		tile content
 * </ibm-clickable-tile>
 * ```
 */
export declare class ClickableTile {
    protected router: Router;
    /**
     * Sets the `href` attribute on the `ibm-clickable-tile` element.
     */
    href: string;
    /**
     * Sets the `target` attribute on the `ibm-clickable-tile` element.
     */
    target: string;
    /**
     * Set to `true` to disable the clickable tile.
     */
    disabled: boolean;
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
    constructor(router: Router);
    navigate(event: any): void;
}
