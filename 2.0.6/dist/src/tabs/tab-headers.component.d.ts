import { QueryList, AfterViewInit, AfterContentInit } from "@angular/core";
import { Tab } from "./tab.component";
/**
 * The `TabHeaders` neutrino component contains the `Tab` items and controls scroll functionality
 * if content has overflow.
 * @export
 * @class TabHeaders
 * @implements {AfterViewInit}
 */
export declare class TabHeaders implements AfterViewInit, AfterContentInit {
    /**
     * List of `Tab` components.
     * @type {QueryList<Tab>}
     * @memberof TabHeaders
     */
    tabInput: QueryList<Tab>;
    /**
     * Set to 'true' to have `Tab` items cached and not reloaded on tab switching.
     * Duplicate from `n-tabs` to support standalone headers
     * @memberof Tabs
     */
    cacheActive: boolean;
    /**
     * Gets the Unordered List element that holds the `Tab` headings from the view DOM.
     * @memberof TabHeaders
     */
    headerContainer: any;
    /**
     * ContentChild of all the n-tabs
     */
    tabQuery: QueryList<Tab>;
    /**
     * set to tabQuery if tabInput is empty
     */
    tabs: QueryList<Tab>;
    /**
     * The index of the first visible tab.
     * @memberof TabHeaders
     */
    firstVisibleTab: number;
    /**
     * The DOM element containing the `Tab` headings displayed.
     * @memberof TabHeaders
     */
    allTabHeaders: any;
    /**
     * Controls the manual focusing done by tabbing through headings.
     * @memberof TabHeaders
     */
    currentSelectedTab: number;
    tabListVisible: boolean;
    /**
     * Controls the keydown events used for tabbing through the headings.
     * @param {any} event
     * @memberof TabHeaders
     */
    keyboardInput(event: any): void;
    ngAfterContentInit(): void;
    /**
     * Performs check to see if there is overflow and needs scrolling.
     * @memberof TabHeaders
     */
    ngAfterViewInit(): void;
    /**
     * Controls manually focusing tabs.
     * @param {HTMLElement} ref
     * @param {number} index
     * @memberof TabHeaders
     */
    onTabFocus(ref: HTMLElement, index: number): void;
    getSelectedTab(): any;
    showTabList(): void;
    /**
     * Selects `Tab` 'tab' and moves it into view on the view DOM if it is not already.
     * @param ref
     * @param tab
     * @param tabIndex
     * @memberof TabHeaders
     */
    selectTab(ref: HTMLElement, tab: Tab, tabIndex: number): void;
    /**
     * Determines which `Tab` is initially selected.
     * @protected
     * @memberof Tabs
     */
    protected setFirstTab(): void;
}
