import { PaginationModel } from "./pagination.module";
import { EventEmitter } from "@angular/core";
import { I18n, Overridable } from "./../i18n/i18n.module";
import { ExperimentalService } from "./../experimental.module";
export interface PaginationTranslations {
    ITEMS_PER_PAGE: string;
    OPEN_LIST_OF_OPTIONS: string;
    BACKWARD: string;
    FORWARD: string;
    TOTAL_ITEMS: string;
    TOTAL_PAGES: string;
    OF_LAST_PAGES: string;
}
/**
 * Use pagination when you have multiple pages of data to handle.
 *
 * [See demo](../../?path=/story/pagination--basic)
 *
 * ```html
 * <ibm-pagination [model]="model" (selectPage)="selectPage($event)"></ibm-pagination>
 * ```
 *
 * In your `selectPage()` method set the `model.currentPage` to selected page, _after_
 * you load the page.
 *
 * ```typescript
 * selectPage(page) {
 * 	// ... your code to load the page goes here
 *
 * 	this.model.currentPage = page;
 *
 * 	// ... anything you want to do after page selection changes goes here
 * }
 * ```
 *
 * <example-url>../../iframe.html?id=pagination--basic</example-url>
 */
export declare class Pagination {
    protected i18n: I18n;
    protected experimental: ExperimentalService;
    static paginationCounter: number;
    /**
     * Set to `true` for a loading pagination component.
     */
    skeleton: boolean;
    /**
     * `PaginationModel` with the information about pages you're controlling.
     */
    model: PaginationModel;
    /**
     * Set to `true` to disable the backward/forward buttons.
     */
    disabled: boolean;
    /**
     * Set to `true` to disable the select box that changes the page.
     */
    pageInputDisabled: boolean;
    /**
     * Set to `true` if the total number of items is unknown.
     */
    pagesUnknown: boolean;
    pageSelectThreshold: number;
    /**
     * Expects an object that contains some or all of:
     * ```
     * {
     *		"ITEMS_PER_PAGE": "Items per page:",
     *		"OPEN_LIST_OF_OPTIONS": "Open list of options",
     *		"BACKWARD": "Backward",
     *		"FORWARD": "Forward",
     *		"TOTAL_ITEMS": "{{start}}-{{end}} of {{total}} items",
     *		"TOTAL_PAGES": "{{current}} of {{last}} pages",
     *		"OF_LAST_PAGES": "of {{last}} pages"
     * }
     * ```
     */
    translations: PaginationTranslations;
    /**
     * Options for items per page select
     *
     * A default array of options will be defined: [10, 20, 30, 40, 50]
     */
    itemsPerPageOptions: number[];
    /**
     * Emits the new page number.
     *
     * You should tie into this and update `model.currentPage` once the fresh
     * data is finally loaded.
     */
    selectPage: EventEmitter<number>;
    itemsPerPage: number;
    currentPage: number;
    /**
     * The last page number to display in the pagination view.
     */
    readonly lastPage: number;
    readonly startItemIndex: number;
    readonly endItemIndex: number;
    /**
     * The previous page number to navigate to, from the current page.
     */
    readonly previousPage: number;
    /**
     * The next page number to navigate to, from the current page.
     */
    readonly nextPage: number;
    readonly isExperimental: boolean;
    readonly pageOptions: any[];
    itemsPerPageSelectId: string;
    currentPageSelectId: string;
    itemsPerPageText: Overridable;
    optionsListText: Overridable;
    backwardText: Overridable;
    forwardText: Overridable;
    totalItemsText: Overridable;
    totalItemsUnknownText: Overridable;
    totalPagesText: Overridable;
    pageText: Overridable;
    ofLastPagesText: Overridable;
    protected _pageOptions: any[];
    constructor(i18n: I18n, experimental: ExperimentalService);
}
