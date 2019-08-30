import { QueryList, AfterContentInit } from "@angular/core";
import { Tab } from "./tab.component";
/**
 * Build out your application's tabs using this component.
 * This is the parent of the `Tab` and `TabHeader` components.
 *
 * [See demo](../../?path=/story/tabs--basic)
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
 * <example-url>../../iframe.html?id=tabs--basic</example-url>
 */
export declare class Tabs implements AfterContentInit {
    /**
     * Takes either the string value 'top' or 'bottom' to place TabHeader
     * relative to the `TabPanel`s.
     */
    position: "top" | "bottom";
    /**
     * Set to 'true' to have `Tab` items cached and not reloaded on tab switching.
     */
    cacheActive: boolean;
    /**
     * Set to 'true' to have tabs automatically activated and have their content displayed when they receive focus.
     */
    followFocus: boolean;
    /**
     * Set to `true` to put tabs in a loading state.
     */
    skeleton: boolean;
    /**
     * Set to `true` to have the tabIndex of the all tabpanels be -1.
     */
    isNavigation: boolean;
    /**
     * Sets the aria label on the `TabHeader`s nav element.
     */
    ariaLabel: string;
    /**
     * Sets the aria labelledby on the `TabHeader`s nav element.
     */
    ariaLabelledby: string;
    /**
     * Maintains a `QueryList` of the `Tab` elements and updates if `Tab`s are added or removed.
     */
    tabs: QueryList<Tab>;
    /**
     * Content child of the projected header component
     */
    tabHeaders: any;
    /**
     * After content is initialized update `Tab`s to cache (if turned on) and set the initial
     * selected Tab item.
     */
    ngAfterContentInit(): void;
    /**
     * true if the n-tab's are passed directly to the component as children
     */
    hasTabHeaders(): boolean;
}
