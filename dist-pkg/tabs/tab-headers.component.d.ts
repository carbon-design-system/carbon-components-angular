import { QueryList, AfterContentInit, ElementRef } from "@angular/core";
import { Tab } from "./tab.component";
/**
 * The `TabHeaders` component contains the `Tab` items and controls scroll functionality
 * if content has overflow.
 */
export declare class TabHeaders implements AfterContentInit {
    /**
     * List of `Tab` components.
     */
    tabInput: QueryList<Tab>;
    /**
     * Set to 'true' to have `Tab` items cached and not reloaded on tab switching.
     * Duplicate from `n-tabs` to support standalone headers
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
     * Sets the aria label on the nav element.
     */
    ariaLabel: string;
    /**
     * Sets the aria labelledby on the nav element.
     */
    ariaLabelledby: string;
    contentBefore: any;
    contentAfter: any;
    /**
     * Gets the Unordered List element that holds the `Tab` headings from the view DOM.
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
     */
    firstVisibleTab: number;
    /**
     * The DOM element containing the `Tab` headings displayed.
     */
    allTabHeaders: QueryList<ElementRef>;
    /**
     * Controls the manual focusing done by tabbing through headings.
     */
    currentSelectedTab: number;
    tabListVisible: boolean;
    /**
     * Controls the keydown events used for tabbing through the headings.
     */
    keyboardInput(event: any): void;
    focusOut(event: any): void;
    ngAfterContentInit(): void;
    /**
     * Controls manually focusing tabs.
     */
    onTabFocus(ref: HTMLElement, index: number): void;
    getSelectedTab(): any;
    showTabList(): void;
    /**
     * Selects `Tab` 'tab' and moves it into view on the view DOM if it is not already.
     */
    selectTab(ref: HTMLElement, tab: Tab, tabIndex: number): void;
    /**
     * Determines which `Tab` is initially selected.
     */
    protected setFirstTab(): void;
}
