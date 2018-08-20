import { QueryList, AfterContentInit } from "@angular/core";
import { Tab } from "./tab.component";
/**
 * Build out your application's tabs using this neutrino component.
 * This is the parent of the `Tab` and `TabHeader` components.
 *
 * `Tabs` expects a set of `n-tab` elements
 *
 * ```html
 * <ibm-tabs>
 * 	<ibm-tab heading='tab1'>
 * 		tab 1 content
 * 	</ibm-tab>
 * 	<ibm-tab heading='tab1'>
 * 		tab 2 content
 * 	</ibm-tab>
 * 	<!-- ... -->
 * 	<ibm-tab heading='tab1'>
 * 		tab n content
 * 	</ibm-tab>
 * </ibm-tabs>
 * ```
 *
 * @export
 * @class Tabs
 * @implements {AfterContentInit}
 */
export declare class Tabs implements AfterContentInit {
    /**
     * Takes either the string value 'top' or 'bottom' to place TabHeader
     * relative to the `TabPanel`s.
     * @type string
     * @memberof Tabs
     */
    position: "top" | "bottom";
    /**
     * Set to 'true' to have `Tab` items cached and not reloaded on tab switching.
     * @memberof Tabs
     */
    cacheActive: boolean;
    /**
     * Maintains a `QueryList` of the `Tab` elements and updates if `Tab`s are added or removed.
     * @type {QueryList<Tab>}
     * @memberof Tabs
     */
    tabs: QueryList<Tab>;
    /**
     * Content child of the projected header component
     */
    tabHeaders: any;
    /**
     * After content is initialized update `Tab`s to cache (if turned on) and set the inital
     * selected Tab item.
     * @memberof Tabs
     */
    ngAfterContentInit(): void;
    /**
     * true if the n-tab's are passed directly to the component as children
     */
    hasTabHeaders(): boolean;
}
