/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { PaginationModel } from "./pagination.module";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { I18n } from "./../i18n/i18n.module";
import { ExperimentalService } from "./../experimental.module";
import { merge } from "./../utils/object";
/**
 * @record
 */
export function PaginationTranslations() { }
function PaginationTranslations_tsickle_Closure_declarations() {
    /** @type {?} */
    PaginationTranslations.prototype.ITEMS_PER_PAGE;
    /** @type {?} */
    PaginationTranslations.prototype.OPEN_LIST_OF_OPTIONS;
    /** @type {?} */
    PaginationTranslations.prototype.BACKWARD;
    /** @type {?} */
    PaginationTranslations.prototype.FORWARD;
    /** @type {?} */
    PaginationTranslations.prototype.TOTAL_ITEMS;
    /** @type {?} */
    PaginationTranslations.prototype.TOTAL_PAGES;
    /** @type {?} */
    PaginationTranslations.prototype.OF_LAST_PAGES;
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
export class Pagination {
    /**
     * @param {?} i18n
     * @param {?} experimental
     */
    constructor(i18n, experimental) {
        this.i18n = i18n;
        this.experimental = experimental;
        /**
         * Set to `true` for a loading pagination component.
         */
        this.skeleton = false;
        /**
         * Set to `true` to disable the backward/forward buttons.
         */
        this.disabled = false;
        /**
         * Set to `true` to disable the select box that changes the page.
         */
        this.pageInputDisabled = false;
        /**
         * Set to `true` if the total number of items is unknown.
         */
        this.pagesUnknown = false;
        this.pageSelectThreshold = 1000;
        /**
         * Options for items per page select
         *
         * A default array of options will be defined: [10, 20, 30, 40, 50]
         */
        this.itemsPerPageOptions = [10, 20, 30, 40, 50];
        /**
         * Emits the new page number.
         *
         * You should tie into this and update `model.currentPage` once the fresh
         * data is finally loaded.
         */
        this.selectPage = new EventEmitter();
        this.itemsPerPageSelectId = `pagination-select-items-per-page-${Pagination.paginationCounter}`;
        this.currentPageSelectId = `pagination-select-current-page-${Pagination.paginationCounter}`;
        this.itemsPerPageText = this.i18n.getOverridable("PAGINATION.ITEMS_PER_PAGE");
        this.optionsListText = this.i18n.getOverridable("PAGINATION.OPEN_LIST_OF_OPTIONS");
        this.backwardText = this.i18n.getOverridable("PAGINATION.BACKWARD");
        this.forwardText = this.i18n.getOverridable("PAGINATION.FORWARD");
        this.totalItemsText = this.i18n.getOverridable("PAGINATION.TOTAL_ITEMS");
        this.totalItemsUnknownText = this.i18n.getOverridable("PAGINATION.TOTAL_ITEMS_UNKNOWN");
        this.totalPagesText = this.i18n.getOverridable("PAGINATION.TOTAL_PAGES");
        this.pageText = this.i18n.getOverridable("PAGINATION.PAGE");
        this.ofLastPagesText = this.i18n.getOverridable("PAGINATION.OF_LAST_PAGES");
        this._pageOptions = [];
        Pagination.paginationCounter++;
    }
    /**
     * Expects an object that contains some or all of:
     * ```
     * {
     * 		"ITEMS_PER_PAGE": "Items per page:",
     * 		"OPEN_LIST_OF_OPTIONS": "Open list of options",
     * 		"BACKWARD": "Backward",
     * 		"FORWARD": "Forward",
     * 		"TOTAL_ITEMS": "{{start}}-{{end}} of {{total}} items",
     * 		"TOTAL_PAGES": "{{current}} of {{last}} pages",
     * 		"OF_LAST_PAGES": "of {{last}} pages"
     * }
     * ```
     * @param {?} value
     * @return {?}
     */
    set translations(value) {
        /** @type {?} */
        const valueWithDefaults = merge(this.i18n.getMultiple("PAGINATION"), value);
        this.itemsPerPageText.override(valueWithDefaults.ITEMS_PER_PAGE);
        this.optionsListText.override(valueWithDefaults.OPEN_LIST_OF_OPTIONS);
        this.backwardText.override(valueWithDefaults.BACKWARD);
        this.forwardText.override(valueWithDefaults.FORWARD);
        this.totalItemsText.override(valueWithDefaults.TOTAL_ITEMS);
        this.totalItemsUnknownText.override(valueWithDefaults.TOTAL_ITEMS_UNKNOWN);
        this.totalPagesText.override(valueWithDefaults.TOTAL_PAGES);
        this.pageText.override(valueWithDefaults.PAGE);
        this.ofLastPagesText.override(valueWithDefaults.OF_LAST_PAGES);
    }
    /**
     * @return {?}
     */
    get itemsPerPage() {
        return this.model.pageLength;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set itemsPerPage(value) {
        this.model.pageLength = Number(value);
        this.currentPage = 1; // reset page
    }
    /**
     * @return {?}
     */
    get currentPage() {
        return this.model.currentPage;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set currentPage(value) {
        value = Number(value);
        // emits the value to allow the user to update current page
        // in the model once the page is loaded
        this.selectPage.emit(value);
    }
    /**
     * The last page number to display in the pagination view.
     * @return {?}
     */
    get lastPage() {
        /** @type {?} */
        const last = Math.ceil(this.model.totalDataLength / this.model.pageLength);
        return last > 0 ? last : 1;
    }
    /**
     * @return {?}
     */
    get startItemIndex() {
        return this.endItemIndex > 0 ? (this.currentPage - 1) * this.model.pageLength + 1 : 0;
    }
    /**
     * @return {?}
     */
    get endItemIndex() {
        /** @type {?} */
        const projectedEndItemIndex = this.currentPage * this.model.pageLength;
        return projectedEndItemIndex < this.model.totalDataLength ? projectedEndItemIndex : this.model.totalDataLength;
    }
    /**
     * The previous page number to navigate to, from the current page.
     * @return {?}
     */
    get previousPage() {
        return this.currentPage <= 1 ? 1 : this.currentPage - 1;
    }
    /**
     * The next page number to navigate to, from the current page.
     * @return {?}
     */
    get nextPage() {
        /** @type {?} */
        const lastPage = this.lastPage;
        return this.currentPage >= lastPage ? lastPage : this.currentPage + 1;
    }
    /**
     * @return {?}
     */
    get isExperimental() {
        return this.experimental.isExperimental;
    }
    /**
     * @return {?}
     */
    get pageOptions() {
        if (this._pageOptions.length !== this.model.totalDataLength) {
            this._pageOptions = Array(Math.ceil(this.model.totalDataLength / this.itemsPerPage));
        }
        return this._pageOptions;
    }
}
Pagination.paginationCounter = 0;
Pagination.decorators = [
    { type: Component, args: [{
                selector: "ibm-pagination",
                template: `
	<div
		class="bx--pagination"
		[ngClass]="{
			'bx--skeleton': skeleton
		}">
		<!-- left skeleton div -->
		<div *ngIf="skeleton" class="bx--pagination__left">
			<p class="bx--skeleton__text" style="width: 70px"></p>
			<p class="bx--skeleton__text" style="width: 35px"></p>
			<p class="bx--skeleton__text" style="width: 105px"></p>
		</div>

		<div *ngIf="!skeleton" class="bx--pagination__left">
			<label class="bx--pagination__text" [for]="itemsPerPageSelectId">
				{{itemsPerPageText.subject | async}}
			</label>
			<div class="bx--form-item">
				<div class="bx--select bx--select--inline"
					[ngClass]="{
						'bx--select__item-count': isExperimental
					}">
					<select
						[id]="itemsPerPageSelectId"
						[(ngModel)]="itemsPerPage"
						class="bx--select-input">
						<option
							class="bx--select-option"
							*ngFor="let option of itemsPerPageOptions"
							[value]="option">
								{{ option }}
						</option>
					</select>
					<ibm-icon-chevron-down16
						style="display: inherit;"
						innerClass="bx--select__arrow"
						[ariaLabel]="optionsListText.subject | async">
					</ibm-icon-chevron-down16>
				</div>
			</div>

			<span *ngIf="!pagesUnknown" class="bx--pagination__text">
				<span *ngIf="!isExperimental">|&nbsp;</span>
				{{totalItemsText.subject | i18nReplace:{start: startItemIndex, end: endItemIndex, total: model.totalDataLength } | async}}
			</span>
			<span *ngIf="pagesUnknown" class="bx--pagination__text">
				<span *ngIf="!isExperimental">|&nbsp;</span>
				{{totalItemsUnknownText.subject | i18nReplace:{start: startItemIndex, end: endItemIndex } | async}}
			</span>
		</div>

		<!-- right skeleton div -->
		<div *ngIf="skeleton" class="bx--pagination__right">
			<p class="bx--skeleton__text" style="width: 70px"></p>
		</div>

		<div *ngIf="!skeleton" class="bx--pagination__right"
			[ngClass]="{
				'bx--pagination--inline': !isExperimental
			}">

			<div *ngIf="!pageInputDisabled" class="bx--form-item">
				<div class="bx--select bx--select--inline"
				[ngClass]="{
					'bx--select__page-number' : isExperimental
				}">
					<label [for]="currentPageSelectId" class="bx--label bx--visually-hidden">{{itemsPerPageText.subject | async}}</label>
					<input
						*ngIf="pageOptions.length > pageSelectThreshold"
						style="padding-right: 1rem; margin-right: 1rem;"
						[id]="currentPageSelectId"
						type="number"
						min="1"
						[max]="pageOptions.length"
						class="bx--select-input"
						[(ngModel)]="currentPage">
					<select
						*ngIf="pageOptions.length <= pageSelectThreshold"
						[id]="currentPageSelectId"
						class="bx--select-input"
						[(ngModel)]="currentPage">
						<option *ngFor="let page of pageOptions; let i = index;" class="bx--select-option" [value]="i + 1">{{i + 1}}</option>
					</select>
					<ibm-icon-chevron-down16
						*ngIf="pageOptions.length <= 1000"
						style="display: inherit;"
						innerClass="bx--select__arrow"
						[ariaLabel]="optionsListText.subject | async">
					</ibm-icon-chevron-down16>
				</div>
			</div>

			<span *ngIf="!pageInputDisabled && !pagesUnknown" class="bx--pagination__text">
				{{ofLastPagesText.subject | i18nReplace: {last: lastPage} | async}}
			</span>
			<span *ngIf="!pageInputDisabled && pagesUnknown" class="bx--pagination__text">
				{{pageText.subject | async}} {{currentPage}}
			</span>
			<button
				class="bx--pagination__button bx--pagination__button--backward"
				[ngClass]="{
					'bx--pagination__button--no-index': currentPage <= 1 || disabled
				}"
				tabindex="0"
				[attr.aria-label]="backwardText.subject | async"
				(click)="selectPage.emit(previousPage)"
				[disabled]="(currentPage <= 1 || disabled ? true : null)">
				<ibm-icon-caret-left16></ibm-icon-caret-left16>
			</button>

			<button
				class="bx--pagination__button bx--pagination__button--forward"
				[ngClass]="{
					'bx--pagination__button--no-index': currentPage >= lastPage || disabled
				}"
				tabindex="0"
				[attr.aria-label]="forwardText.subject | async"
				(click)="selectPage.emit(nextPage)"
				[disabled]="(currentPage >= lastPage || disabled ? true : null)">
				<ibm-icon-caret-right16></ibm-icon-caret-right16>
			</button>
		</div>
	</div>
	`
            }] }
];
/** @nocollapse */
Pagination.ctorParameters = () => [
    { type: I18n },
    { type: ExperimentalService }
];
Pagination.propDecorators = {
    skeleton: [{ type: Input }],
    model: [{ type: Input }],
    disabled: [{ type: Input }],
    pageInputDisabled: [{ type: Input }],
    pagesUnknown: [{ type: Input }],
    pageSelectThreshold: [{ type: Input }],
    translations: [{ type: Input }],
    itemsPerPageOptions: [{ type: Input }],
    selectPage: [{ type: Output }]
};
function Pagination_tsickle_Closure_declarations() {
    /** @type {?} */
    Pagination.paginationCounter;
    /**
     * Set to `true` for a loading pagination component.
     * @type {?}
     */
    Pagination.prototype.skeleton;
    /**
     * `PaginationModel` with the information about pages you're controlling.
     * @type {?}
     */
    Pagination.prototype.model;
    /**
     * Set to `true` to disable the backward/forward buttons.
     * @type {?}
     */
    Pagination.prototype.disabled;
    /**
     * Set to `true` to disable the select box that changes the page.
     * @type {?}
     */
    Pagination.prototype.pageInputDisabled;
    /**
     * Set to `true` if the total number of items is unknown.
     * @type {?}
     */
    Pagination.prototype.pagesUnknown;
    /** @type {?} */
    Pagination.prototype.pageSelectThreshold;
    /**
     * Options for items per page select
     *
     * A default array of options will be defined: [10, 20, 30, 40, 50]
     * @type {?}
     */
    Pagination.prototype.itemsPerPageOptions;
    /**
     * Emits the new page number.
     *
     * You should tie into this and update `model.currentPage` once the fresh
     * data is finally loaded.
     * @type {?}
     */
    Pagination.prototype.selectPage;
    /** @type {?} */
    Pagination.prototype.itemsPerPageSelectId;
    /** @type {?} */
    Pagination.prototype.currentPageSelectId;
    /** @type {?} */
    Pagination.prototype.itemsPerPageText;
    /** @type {?} */
    Pagination.prototype.optionsListText;
    /** @type {?} */
    Pagination.prototype.backwardText;
    /** @type {?} */
    Pagination.prototype.forwardText;
    /** @type {?} */
    Pagination.prototype.totalItemsText;
    /** @type {?} */
    Pagination.prototype.totalItemsUnknownText;
    /** @type {?} */
    Pagination.prototype.totalPagesText;
    /** @type {?} */
    Pagination.prototype.pageText;
    /** @type {?} */
    Pagination.prototype.ofLastPagesText;
    /** @type {?} */
    Pagination.prototype._pageOptions;
    /** @type {?} */
    Pagination.prototype.i18n;
    /** @type {?} */
    Pagination.prototype.experimental;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJib24tY29tcG9uZW50cy1hbmd1bGFyLyIsInNvdXJjZXMiOlsicGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFDTixTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUsxQyxNQUFNOzs7OztJQWdKTCxZQUFzQixJQUFVLEVBQVksWUFBaUM7UUFBdkQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFZLGlCQUFZLEdBQVosWUFBWSxDQUFxQjs7Ozt3QkExSXpELEtBQUs7Ozs7d0JBUUwsS0FBSzs7OztpQ0FJSSxLQUFLOzs7OzRCQUlWLEtBQUs7bUNBQ0UsSUFBSTs7Ozs7O21DQW1DTSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Ozs7Ozs7MEJBUXRDLElBQUksWUFBWSxFQUFVO29DQStEMUIsb0NBQW9DLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRTttQ0FDbkUsa0NBQWtDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRTtnQ0FFbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsMkJBQTJCLENBQUM7K0JBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGlDQUFpQyxDQUFDOzRCQUM5RCxJQUFJ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aEk1QixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEySFQ7YUFDRDs7OztZQXBLUSxJQUFJO1lBQ0osbUJBQW1COzs7dUJBMEsxQixLQUFLO29CQUlMLEtBQUs7dUJBSUwsS0FBSztnQ0FJTCxLQUFLOzJCQUlMLEtBQUs7a0NBQ0wsS0FBSzsyQkFnQkwsS0FBSztrQ0FtQkwsS0FBSzt5QkFRTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnaW5hdGlvbk1vZGVsIH0gZnJvbSBcIi4vcGFnaW5hdGlvbi5tb2R1bGVcIjtcbmltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0RXZlbnRFbWl0dGVyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEkxOG4sIE92ZXJyaWRhYmxlIH0gZnJvbSBcIi4vLi4vaTE4bi9pMThuLm1vZHVsZVwiO1xuaW1wb3J0IHsgRXhwZXJpbWVudGFsU2VydmljZSB9IGZyb20gXCIuLy4uL2V4cGVyaW1lbnRhbC5tb2R1bGVcIjtcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSBcIi4vLi4vdXRpbHMvb2JqZWN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnaW5hdGlvblRyYW5zbGF0aW9ucyB7XG5cdElURU1TX1BFUl9QQUdFOiBzdHJpbmc7XG5cdE9QRU5fTElTVF9PRl9PUFRJT05TOiBzdHJpbmc7XG5cdEJBQ0tXQVJEOiBzdHJpbmc7XG5cdEZPUldBUkQ6IHN0cmluZztcblx0VE9UQUxfSVRFTVM6IHN0cmluZztcblx0VE9UQUxfUEFHRVM6IHN0cmluZztcblx0T0ZfTEFTVF9QQUdFUzogc3RyaW5nO1xufVxuXG4vKipcbiAqIFVzZSBwYWdpbmF0aW9uIHdoZW4geW91IGhhdmUgbXVsdGlwbGUgcGFnZXMgb2YgZGF0YSB0byBoYW5kbGUuXG4gKlxuICogW1NlZSBkZW1vXSguLi8uLi8/cGF0aD0vc3RvcnkvcGFnaW5hdGlvbi0tYmFzaWMpXG4gKlxuICogYGBgaHRtbFxuICogPGlibS1wYWdpbmF0aW9uIFttb2RlbF09XCJtb2RlbFwiIChzZWxlY3RQYWdlKT1cInNlbGVjdFBhZ2UoJGV2ZW50KVwiPjwvaWJtLXBhZ2luYXRpb24+XG4gKiBgYGBcbiAqXG4gKiBJbiB5b3VyIGBzZWxlY3RQYWdlKClgIG1ldGhvZCBzZXQgdGhlIGBtb2RlbC5jdXJyZW50UGFnZWAgdG8gc2VsZWN0ZWQgcGFnZSwgX2FmdGVyX1xuICogeW91IGxvYWQgdGhlIHBhZ2UuXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogc2VsZWN0UGFnZShwYWdlKSB7XG4gKiBcdC8vIC4uLiB5b3VyIGNvZGUgdG8gbG9hZCB0aGUgcGFnZSBnb2VzIGhlcmVcbiAqXG4gKiBcdHRoaXMubW9kZWwuY3VycmVudFBhZ2UgPSBwYWdlO1xuICpcbiAqIFx0Ly8gLi4uIGFueXRoaW5nIHlvdSB3YW50IHRvIGRvIGFmdGVyIHBhZ2Ugc2VsZWN0aW9uIGNoYW5nZXMgZ29lcyBoZXJlXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiA8ZXhhbXBsZS11cmw+Li4vLi4vaWZyYW1lLmh0bWw/aWQ9cGFnaW5hdGlvbi0tYmFzaWM8L2V4YW1wbGUtdXJsPlxuICovXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiaWJtLXBhZ2luYXRpb25cIixcblx0dGVtcGxhdGU6IGBcblx0PGRpdlxuXHRcdGNsYXNzPVwiYngtLXBhZ2luYXRpb25cIlxuXHRcdFtuZ0NsYXNzXT1cIntcblx0XHRcdCdieC0tc2tlbGV0b24nOiBza2VsZXRvblxuXHRcdH1cIj5cblx0XHQ8IS0tIGxlZnQgc2tlbGV0b24gZGl2IC0tPlxuXHRcdDxkaXYgKm5nSWY9XCJza2VsZXRvblwiIGNsYXNzPVwiYngtLXBhZ2luYXRpb25fX2xlZnRcIj5cblx0XHRcdDxwIGNsYXNzPVwiYngtLXNrZWxldG9uX190ZXh0XCIgc3R5bGU9XCJ3aWR0aDogNzBweFwiPjwvcD5cblx0XHRcdDxwIGNsYXNzPVwiYngtLXNrZWxldG9uX190ZXh0XCIgc3R5bGU9XCJ3aWR0aDogMzVweFwiPjwvcD5cblx0XHRcdDxwIGNsYXNzPVwiYngtLXNrZWxldG9uX190ZXh0XCIgc3R5bGU9XCJ3aWR0aDogMTA1cHhcIj48L3A+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2ICpuZ0lmPVwiIXNrZWxldG9uXCIgY2xhc3M9XCJieC0tcGFnaW5hdGlvbl9fbGVmdFwiPlxuXHRcdFx0PGxhYmVsIGNsYXNzPVwiYngtLXBhZ2luYXRpb25fX3RleHRcIiBbZm9yXT1cIml0ZW1zUGVyUGFnZVNlbGVjdElkXCI+XG5cdFx0XHRcdHt7aXRlbXNQZXJQYWdlVGV4dC5zdWJqZWN0IHwgYXN5bmN9fVxuXHRcdFx0PC9sYWJlbD5cblx0XHRcdDxkaXYgY2xhc3M9XCJieC0tZm9ybS1pdGVtXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJieC0tc2VsZWN0IGJ4LS1zZWxlY3QtLWlubGluZVwiXG5cdFx0XHRcdFx0W25nQ2xhc3NdPVwie1xuXHRcdFx0XHRcdFx0J2J4LS1zZWxlY3RfX2l0ZW0tY291bnQnOiBpc0V4cGVyaW1lbnRhbFxuXHRcdFx0XHRcdH1cIj5cblx0XHRcdFx0XHQ8c2VsZWN0XG5cdFx0XHRcdFx0XHRbaWRdPVwiaXRlbXNQZXJQYWdlU2VsZWN0SWRcIlxuXHRcdFx0XHRcdFx0WyhuZ01vZGVsKV09XCJpdGVtc1BlclBhZ2VcIlxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJieC0tc2VsZWN0LWlucHV0XCI+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiYngtLXNlbGVjdC1vcHRpb25cIlxuXHRcdFx0XHRcdFx0XHQqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGl0ZW1zUGVyUGFnZU9wdGlvbnNcIlxuXHRcdFx0XHRcdFx0XHRbdmFsdWVdPVwib3B0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3sgb3B0aW9uIH19XG5cdFx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHQ8aWJtLWljb24tY2hldnJvbi1kb3duMTZcblx0XHRcdFx0XHRcdHN0eWxlPVwiZGlzcGxheTogaW5oZXJpdDtcIlxuXHRcdFx0XHRcdFx0aW5uZXJDbGFzcz1cImJ4LS1zZWxlY3RfX2Fycm93XCJcblx0XHRcdFx0XHRcdFthcmlhTGFiZWxdPVwib3B0aW9uc0xpc3RUZXh0LnN1YmplY3QgfCBhc3luY1wiPlxuXHRcdFx0XHRcdDwvaWJtLWljb24tY2hldnJvbi1kb3duMTY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxzcGFuICpuZ0lmPVwiIXBhZ2VzVW5rbm93blwiIGNsYXNzPVwiYngtLXBhZ2luYXRpb25fX3RleHRcIj5cblx0XHRcdFx0PHNwYW4gKm5nSWY9XCIhaXNFeHBlcmltZW50YWxcIj58Jm5ic3A7PC9zcGFuPlxuXHRcdFx0XHR7e3RvdGFsSXRlbXNUZXh0LnN1YmplY3QgfCBpMThuUmVwbGFjZTp7c3RhcnQ6IHN0YXJ0SXRlbUluZGV4LCBlbmQ6IGVuZEl0ZW1JbmRleCwgdG90YWw6IG1vZGVsLnRvdGFsRGF0YUxlbmd0aCB9IHwgYXN5bmN9fVxuXHRcdFx0PC9zcGFuPlxuXHRcdFx0PHNwYW4gKm5nSWY9XCJwYWdlc1Vua25vd25cIiBjbGFzcz1cImJ4LS1wYWdpbmF0aW9uX190ZXh0XCI+XG5cdFx0XHRcdDxzcGFuICpuZ0lmPVwiIWlzRXhwZXJpbWVudGFsXCI+fCZuYnNwOzwvc3Bhbj5cblx0XHRcdFx0e3t0b3RhbEl0ZW1zVW5rbm93blRleHQuc3ViamVjdCB8IGkxOG5SZXBsYWNlOntzdGFydDogc3RhcnRJdGVtSW5kZXgsIGVuZDogZW5kSXRlbUluZGV4IH0gfCBhc3luY319XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9kaXY+XG5cblx0XHQ8IS0tIHJpZ2h0IHNrZWxldG9uIGRpdiAtLT5cblx0XHQ8ZGl2ICpuZ0lmPVwic2tlbGV0b25cIiBjbGFzcz1cImJ4LS1wYWdpbmF0aW9uX19yaWdodFwiPlxuXHRcdFx0PHAgY2xhc3M9XCJieC0tc2tlbGV0b25fX3RleHRcIiBzdHlsZT1cIndpZHRoOiA3MHB4XCI+PC9wPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiAqbmdJZj1cIiFza2VsZXRvblwiIGNsYXNzPVwiYngtLXBhZ2luYXRpb25fX3JpZ2h0XCJcblx0XHRcdFtuZ0NsYXNzXT1cIntcblx0XHRcdFx0J2J4LS1wYWdpbmF0aW9uLS1pbmxpbmUnOiAhaXNFeHBlcmltZW50YWxcblx0XHRcdH1cIj5cblxuXHRcdFx0PGRpdiAqbmdJZj1cIiFwYWdlSW5wdXREaXNhYmxlZFwiIGNsYXNzPVwiYngtLWZvcm0taXRlbVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYngtLXNlbGVjdCBieC0tc2VsZWN0LS1pbmxpbmVcIlxuXHRcdFx0XHRbbmdDbGFzc109XCJ7XG5cdFx0XHRcdFx0J2J4LS1zZWxlY3RfX3BhZ2UtbnVtYmVyJyA6IGlzRXhwZXJpbWVudGFsXG5cdFx0XHRcdH1cIj5cblx0XHRcdFx0XHQ8bGFiZWwgW2Zvcl09XCJjdXJyZW50UGFnZVNlbGVjdElkXCIgY2xhc3M9XCJieC0tbGFiZWwgYngtLXZpc3VhbGx5LWhpZGRlblwiPnt7aXRlbXNQZXJQYWdlVGV4dC5zdWJqZWN0IHwgYXN5bmN9fTwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHQqbmdJZj1cInBhZ2VPcHRpb25zLmxlbmd0aCA+IHBhZ2VTZWxlY3RUaHJlc2hvbGRcIlxuXHRcdFx0XHRcdFx0c3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiAxcmVtOyBtYXJnaW4tcmlnaHQ6IDFyZW07XCJcblx0XHRcdFx0XHRcdFtpZF09XCJjdXJyZW50UGFnZVNlbGVjdElkXCJcblx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdFx0bWluPVwiMVwiXG5cdFx0XHRcdFx0XHRbbWF4XT1cInBhZ2VPcHRpb25zLmxlbmd0aFwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cImJ4LS1zZWxlY3QtaW5wdXRcIlxuXHRcdFx0XHRcdFx0WyhuZ01vZGVsKV09XCJjdXJyZW50UGFnZVwiPlxuXHRcdFx0XHRcdDxzZWxlY3Rcblx0XHRcdFx0XHRcdCpuZ0lmPVwicGFnZU9wdGlvbnMubGVuZ3RoIDw9IHBhZ2VTZWxlY3RUaHJlc2hvbGRcIlxuXHRcdFx0XHRcdFx0W2lkXT1cImN1cnJlbnRQYWdlU2VsZWN0SWRcIlxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJieC0tc2VsZWN0LWlucHV0XCJcblx0XHRcdFx0XHRcdFsobmdNb2RlbCldPVwiY3VycmVudFBhZ2VcIj5cblx0XHRcdFx0XHRcdDxvcHRpb24gKm5nRm9yPVwibGV0IHBhZ2Ugb2YgcGFnZU9wdGlvbnM7IGxldCBpID0gaW5kZXg7XCIgY2xhc3M9XCJieC0tc2VsZWN0LW9wdGlvblwiIFt2YWx1ZV09XCJpICsgMVwiPnt7aSArIDF9fTwvb3B0aW9uPlxuXHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdDxpYm0taWNvbi1jaGV2cm9uLWRvd24xNlxuXHRcdFx0XHRcdFx0Km5nSWY9XCJwYWdlT3B0aW9ucy5sZW5ndGggPD0gMTAwMFwiXG5cdFx0XHRcdFx0XHRzdHlsZT1cImRpc3BsYXk6IGluaGVyaXQ7XCJcblx0XHRcdFx0XHRcdGlubmVyQ2xhc3M9XCJieC0tc2VsZWN0X19hcnJvd1wiXG5cdFx0XHRcdFx0XHRbYXJpYUxhYmVsXT1cIm9wdGlvbnNMaXN0VGV4dC5zdWJqZWN0IHwgYXN5bmNcIj5cblx0XHRcdFx0XHQ8L2libS1pY29uLWNoZXZyb24tZG93bjE2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8c3BhbiAqbmdJZj1cIiFwYWdlSW5wdXREaXNhYmxlZCAmJiAhcGFnZXNVbmtub3duXCIgY2xhc3M9XCJieC0tcGFnaW5hdGlvbl9fdGV4dFwiPlxuXHRcdFx0XHR7e29mTGFzdFBhZ2VzVGV4dC5zdWJqZWN0IHwgaTE4blJlcGxhY2U6IHtsYXN0OiBsYXN0UGFnZX0gfCBhc3luY319XG5cdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8c3BhbiAqbmdJZj1cIiFwYWdlSW5wdXREaXNhYmxlZCAmJiBwYWdlc1Vua25vd25cIiBjbGFzcz1cImJ4LS1wYWdpbmF0aW9uX190ZXh0XCI+XG5cdFx0XHRcdHt7cGFnZVRleHQuc3ViamVjdCB8IGFzeW5jfX0ge3tjdXJyZW50UGFnZX19XG5cdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdGNsYXNzPVwiYngtLXBhZ2luYXRpb25fX2J1dHRvbiBieC0tcGFnaW5hdGlvbl9fYnV0dG9uLS1iYWNrd2FyZFwiXG5cdFx0XHRcdFtuZ0NsYXNzXT1cIntcblx0XHRcdFx0XHQnYngtLXBhZ2luYXRpb25fX2J1dHRvbi0tbm8taW5kZXgnOiBjdXJyZW50UGFnZSA8PSAxIHx8IGRpc2FibGVkXG5cdFx0XHRcdH1cIlxuXHRcdFx0XHR0YWJpbmRleD1cIjBcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cImJhY2t3YXJkVGV4dC5zdWJqZWN0IHwgYXN5bmNcIlxuXHRcdFx0XHQoY2xpY2spPVwic2VsZWN0UGFnZS5lbWl0KHByZXZpb3VzUGFnZSlcIlxuXHRcdFx0XHRbZGlzYWJsZWRdPVwiKGN1cnJlbnRQYWdlIDw9IDEgfHwgZGlzYWJsZWQgPyB0cnVlIDogbnVsbClcIj5cblx0XHRcdFx0PGlibS1pY29uLWNhcmV0LWxlZnQxNj48L2libS1pY29uLWNhcmV0LWxlZnQxNj5cblx0XHRcdDwvYnV0dG9uPlxuXG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdGNsYXNzPVwiYngtLXBhZ2luYXRpb25fX2J1dHRvbiBieC0tcGFnaW5hdGlvbl9fYnV0dG9uLS1mb3J3YXJkXCJcblx0XHRcdFx0W25nQ2xhc3NdPVwie1xuXHRcdFx0XHRcdCdieC0tcGFnaW5hdGlvbl9fYnV0dG9uLS1uby1pbmRleCc6IGN1cnJlbnRQYWdlID49IGxhc3RQYWdlIHx8IGRpc2FibGVkXG5cdFx0XHRcdH1cIlxuXHRcdFx0XHR0YWJpbmRleD1cIjBcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cImZvcndhcmRUZXh0LnN1YmplY3QgfCBhc3luY1wiXG5cdFx0XHRcdChjbGljayk9XCJzZWxlY3RQYWdlLmVtaXQobmV4dFBhZ2UpXCJcblx0XHRcdFx0W2Rpc2FibGVkXT1cIihjdXJyZW50UGFnZSA+PSBsYXN0UGFnZSB8fCBkaXNhYmxlZCA/IHRydWUgOiBudWxsKVwiPlxuXHRcdFx0XHQ8aWJtLWljb24tY2FyZXQtcmlnaHQxNj48L2libS1pY29uLWNhcmV0LXJpZ2h0MTY+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbiB7XG5cdHN0YXRpYyBwYWdpbmF0aW9uQ291bnRlciA9IDA7XG5cblx0LyoqXG5cdCAqIFNldCB0byBgdHJ1ZWAgZm9yIGEgbG9hZGluZyBwYWdpbmF0aW9uIGNvbXBvbmVudC5cblx0ICovXG5cdEBJbnB1dCgpIHNrZWxldG9uID0gZmFsc2U7XG5cdC8qKlxuXHQgKiBgUGFnaW5hdGlvbk1vZGVsYCB3aXRoIHRoZSBpbmZvcm1hdGlvbiBhYm91dCBwYWdlcyB5b3UncmUgY29udHJvbGxpbmcuXG5cdCAqL1xuXHRASW5wdXQoKSBtb2RlbDogUGFnaW5hdGlvbk1vZGVsO1xuXHQvKipcbiBcdCAqIFNldCB0byBgdHJ1ZWAgdG8gZGlzYWJsZSB0aGUgYmFja3dhcmQvZm9yd2FyZCBidXR0b25zLlxuXHQgKi9cblx0QElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcblx0LyoqXG5cdCAqIFNldCB0byBgdHJ1ZWAgdG8gZGlzYWJsZSB0aGUgc2VsZWN0IGJveCB0aGF0IGNoYW5nZXMgdGhlIHBhZ2UuXG5cdCAqL1xuXHRASW5wdXQoKSBwYWdlSW5wdXREaXNhYmxlZCA9IGZhbHNlO1xuXHQvKipcblx0ICogU2V0IHRvIGB0cnVlYCBpZiB0aGUgdG90YWwgbnVtYmVyIG9mIGl0ZW1zIGlzIHVua25vd24uXG5cdCAqL1xuXHRASW5wdXQoKSBwYWdlc1Vua25vd24gPSBmYWxzZTtcblx0QElucHV0KCkgcGFnZVNlbGVjdFRocmVzaG9sZCA9IDEwMDA7XG5cblx0LyoqXG5cdCAqIEV4cGVjdHMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgc29tZSBvciBhbGwgb2Y6XG5cdCAqIGBgYFxuXHQgKiB7XG5cdCAqXHRcdFwiSVRFTVNfUEVSX1BBR0VcIjogXCJJdGVtcyBwZXIgcGFnZTpcIixcblx0ICpcdFx0XCJPUEVOX0xJU1RfT0ZfT1BUSU9OU1wiOiBcIk9wZW4gbGlzdCBvZiBvcHRpb25zXCIsXG5cdCAqXHRcdFwiQkFDS1dBUkRcIjogXCJCYWNrd2FyZFwiLFxuXHQgKlx0XHRcIkZPUldBUkRcIjogXCJGb3J3YXJkXCIsXG5cdCAqXHRcdFwiVE9UQUxfSVRFTVNcIjogXCJ7e3N0YXJ0fX0te3tlbmR9fSBvZiB7e3RvdGFsfX0gaXRlbXNcIixcblx0ICpcdFx0XCJUT1RBTF9QQUdFU1wiOiBcInt7Y3VycmVudH19IG9mIHt7bGFzdH19IHBhZ2VzXCIsXG5cdCAqXHRcdFwiT0ZfTEFTVF9QQUdFU1wiOiBcIm9mIHt7bGFzdH19IHBhZ2VzXCJcblx0ICogfVxuXHQgKiBgYGBcblx0ICovXG5cdEBJbnB1dCgpXG5cdHNldCB0cmFuc2xhdGlvbnMgKHZhbHVlOiBQYWdpbmF0aW9uVHJhbnNsYXRpb25zKSB7XG5cdFx0Y29uc3QgdmFsdWVXaXRoRGVmYXVsdHMgPSBtZXJnZSh0aGlzLmkxOG4uZ2V0TXVsdGlwbGUoXCJQQUdJTkFUSU9OXCIpLCB2YWx1ZSk7XG5cdFx0dGhpcy5pdGVtc1BlclBhZ2VUZXh0Lm92ZXJyaWRlKHZhbHVlV2l0aERlZmF1bHRzLklURU1TX1BFUl9QQUdFKTtcblx0XHR0aGlzLm9wdGlvbnNMaXN0VGV4dC5vdmVycmlkZSh2YWx1ZVdpdGhEZWZhdWx0cy5PUEVOX0xJU1RfT0ZfT1BUSU9OUyk7XG5cdFx0dGhpcy5iYWNrd2FyZFRleHQub3ZlcnJpZGUodmFsdWVXaXRoRGVmYXVsdHMuQkFDS1dBUkQpO1xuXHRcdHRoaXMuZm9yd2FyZFRleHQub3ZlcnJpZGUodmFsdWVXaXRoRGVmYXVsdHMuRk9SV0FSRCk7XG5cdFx0dGhpcy50b3RhbEl0ZW1zVGV4dC5vdmVycmlkZSh2YWx1ZVdpdGhEZWZhdWx0cy5UT1RBTF9JVEVNUyk7XG5cdFx0dGhpcy50b3RhbEl0ZW1zVW5rbm93blRleHQub3ZlcnJpZGUodmFsdWVXaXRoRGVmYXVsdHMuVE9UQUxfSVRFTVNfVU5LTk9XTik7XG5cdFx0dGhpcy50b3RhbFBhZ2VzVGV4dC5vdmVycmlkZSh2YWx1ZVdpdGhEZWZhdWx0cy5UT1RBTF9QQUdFUyk7XG5cdFx0dGhpcy5wYWdlVGV4dC5vdmVycmlkZSh2YWx1ZVdpdGhEZWZhdWx0cy5QQUdFKTtcblx0XHR0aGlzLm9mTGFzdFBhZ2VzVGV4dC5vdmVycmlkZSh2YWx1ZVdpdGhEZWZhdWx0cy5PRl9MQVNUX1BBR0VTKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPcHRpb25zIGZvciBpdGVtcyBwZXIgcGFnZSBzZWxlY3Rcblx0ICpcblx0ICogQSBkZWZhdWx0IGFycmF5IG9mIG9wdGlvbnMgd2lsbCBiZSBkZWZpbmVkOiBbMTAsIDIwLCAzMCwgNDAsIDUwXVxuXHQgKi9cblx0QElucHV0KCkgaXRlbXNQZXJQYWdlT3B0aW9uczogbnVtYmVyW10gPSBbMTAsIDIwLCAzMCwgNDAsIDUwXTtcblxuXHQvKipcblx0ICogRW1pdHMgdGhlIG5ldyBwYWdlIG51bWJlci5cblx0ICpcblx0ICogWW91IHNob3VsZCB0aWUgaW50byB0aGlzIGFuZCB1cGRhdGUgYG1vZGVsLmN1cnJlbnRQYWdlYCBvbmNlIHRoZSBmcmVzaFxuXHQgKiBkYXRhIGlzIGZpbmFsbHkgbG9hZGVkLlxuXHQgKi9cblx0QE91dHB1dCgpIHNlbGVjdFBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRnZXQgaXRlbXNQZXJQYWdlKCkge1xuXHRcdHJldHVybiB0aGlzLm1vZGVsLnBhZ2VMZW5ndGg7XG5cdH1cblx0c2V0IGl0ZW1zUGVyUGFnZSh2YWx1ZSkge1xuXHRcdHRoaXMubW9kZWwucGFnZUxlbmd0aCA9IE51bWJlcih2YWx1ZSk7XG5cdFx0dGhpcy5jdXJyZW50UGFnZSA9IDE7IC8vIHJlc2V0IHBhZ2Vcblx0fVxuXG5cdGdldCBjdXJyZW50UGFnZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5tb2RlbC5jdXJyZW50UGFnZTtcblx0fVxuXHRzZXQgY3VycmVudFBhZ2UodmFsdWUpIHtcblx0XHR2YWx1ZSA9IE51bWJlcih2YWx1ZSk7XG5cdFx0Ly8gZW1pdHMgdGhlIHZhbHVlIHRvIGFsbG93IHRoZSB1c2VyIHRvIHVwZGF0ZSBjdXJyZW50IHBhZ2Vcblx0XHQvLyBpbiB0aGUgbW9kZWwgb25jZSB0aGUgcGFnZSBpcyBsb2FkZWRcblx0XHR0aGlzLnNlbGVjdFBhZ2UuZW1pdCh2YWx1ZSk7XG5cdH1cblx0LyoqXG5cdCAqIFRoZSBsYXN0IHBhZ2UgbnVtYmVyIHRvIGRpc3BsYXkgaW4gdGhlIHBhZ2luYXRpb24gdmlldy5cblx0ICovXG5cdGdldCBsYXN0UGFnZSgpOiBudW1iZXIge1xuXHRcdGNvbnN0IGxhc3QgPSBNYXRoLmNlaWwodGhpcy5tb2RlbC50b3RhbERhdGFMZW5ndGggLyB0aGlzLm1vZGVsLnBhZ2VMZW5ndGgpO1xuXHRcdHJldHVybiBsYXN0ID4gMCA/IGxhc3QgOiAxO1xuXHR9XG5cblx0Z2V0IHN0YXJ0SXRlbUluZGV4KCkge1xuXHRcdHJldHVybiB0aGlzLmVuZEl0ZW1JbmRleCA+IDAgPyAodGhpcy5jdXJyZW50UGFnZSAtIDEpICogdGhpcy5tb2RlbC5wYWdlTGVuZ3RoICsgMSA6IDA7XG5cdH1cblxuXHRnZXQgZW5kSXRlbUluZGV4KCkge1xuXHRcdGNvbnN0IHByb2plY3RlZEVuZEl0ZW1JbmRleCA9IHRoaXMuY3VycmVudFBhZ2UgKiB0aGlzLm1vZGVsLnBhZ2VMZW5ndGg7XG5cblx0XHRyZXR1cm4gcHJvamVjdGVkRW5kSXRlbUluZGV4IDwgdGhpcy5tb2RlbC50b3RhbERhdGFMZW5ndGggPyBwcm9qZWN0ZWRFbmRJdGVtSW5kZXggOiB0aGlzLm1vZGVsLnRvdGFsRGF0YUxlbmd0aDtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgcHJldmlvdXMgcGFnZSBudW1iZXIgdG8gbmF2aWdhdGUgdG8sIGZyb20gdGhlIGN1cnJlbnQgcGFnZS5cblx0ICovXG5cdGdldCBwcmV2aW91c1BhZ2UoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50UGFnZSA8PSAxID8gMSA6IHRoaXMuY3VycmVudFBhZ2UgLSAxO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBuZXh0IHBhZ2UgbnVtYmVyIHRvIG5hdmlnYXRlIHRvLCBmcm9tIHRoZSBjdXJyZW50IHBhZ2UuXG5cdCAqL1xuXHRnZXQgbmV4dFBhZ2UoKTogbnVtYmVyIHtcblx0XHRjb25zdCBsYXN0UGFnZSA9IHRoaXMubGFzdFBhZ2U7XG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudFBhZ2UgPj0gbGFzdFBhZ2UgPyBsYXN0UGFnZSA6IHRoaXMuY3VycmVudFBhZ2UgKyAxO1xuXHR9XG5cblx0Z2V0IGlzRXhwZXJpbWVudGFsKCkge1xuXHRcdHJldHVybiB0aGlzLmV4cGVyaW1lbnRhbC5pc0V4cGVyaW1lbnRhbDtcblx0fVxuXG5cdGdldCBwYWdlT3B0aW9ucygpIHtcblx0XHRpZiAodGhpcy5fcGFnZU9wdGlvbnMubGVuZ3RoICE9PSB0aGlzLm1vZGVsLnRvdGFsRGF0YUxlbmd0aCkge1xuXHRcdFx0dGhpcy5fcGFnZU9wdGlvbnMgPSBBcnJheShNYXRoLmNlaWwodGhpcy5tb2RlbC50b3RhbERhdGFMZW5ndGggLyB0aGlzLml0ZW1zUGVyUGFnZSkpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fcGFnZU9wdGlvbnM7XG5cdH1cblxuXHRpdGVtc1BlclBhZ2VTZWxlY3RJZCA9IGBwYWdpbmF0aW9uLXNlbGVjdC1pdGVtcy1wZXItcGFnZS0ke1BhZ2luYXRpb24ucGFnaW5hdGlvbkNvdW50ZXJ9YDtcblx0Y3VycmVudFBhZ2VTZWxlY3RJZCA9IGBwYWdpbmF0aW9uLXNlbGVjdC1jdXJyZW50LXBhZ2UtJHtQYWdpbmF0aW9uLnBhZ2luYXRpb25Db3VudGVyfWA7XG5cblx0aXRlbXNQZXJQYWdlVGV4dCA9IHRoaXMuaTE4bi5nZXRPdmVycmlkYWJsZShcIlBBR0lOQVRJT04uSVRFTVNfUEVSX1BBR0VcIik7XG5cdG9wdGlvbnNMaXN0VGV4dCA9IHRoaXMuaTE4bi5nZXRPdmVycmlkYWJsZShcIlBBR0lOQVRJT04uT1BFTl9MSVNUX09GX09QVElPTlNcIik7XG5cdGJhY2t3YXJkVGV4dCA9IHRoaXMuaTE4bi5nZXRPdmVycmlkYWJsZShcIlBBR0lOQVRJT04uQkFDS1dBUkRcIik7XG5cdGZvcndhcmRUZXh0ID0gdGhpcy5pMThuLmdldE92ZXJyaWRhYmxlKFwiUEFHSU5BVElPTi5GT1JXQVJEXCIpO1xuXHR0b3RhbEl0ZW1zVGV4dCA9IHRoaXMuaTE4bi5nZXRPdmVycmlkYWJsZShcIlBBR0lOQVRJT04uVE9UQUxfSVRFTVNcIik7XG5cdHRvdGFsSXRlbXNVbmtub3duVGV4dCA9IHRoaXMuaTE4bi5nZXRPdmVycmlkYWJsZShcIlBBR0lOQVRJT04uVE9UQUxfSVRFTVNfVU5LTk9XTlwiKTtcblx0dG90YWxQYWdlc1RleHQgPSB0aGlzLmkxOG4uZ2V0T3ZlcnJpZGFibGUoXCJQQUdJTkFUSU9OLlRPVEFMX1BBR0VTXCIpO1xuXHRwYWdlVGV4dCA9IHRoaXMuaTE4bi5nZXRPdmVycmlkYWJsZShcIlBBR0lOQVRJT04uUEFHRVwiKTtcblx0b2ZMYXN0UGFnZXNUZXh0ID0gdGhpcy5pMThuLmdldE92ZXJyaWRhYmxlKFwiUEFHSU5BVElPTi5PRl9MQVNUX1BBR0VTXCIpO1xuXG5cdHByb3RlY3RlZCBfcGFnZU9wdGlvbnMgPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaTE4bjogSTE4biwgcHJvdGVjdGVkIGV4cGVyaW1lbnRhbDogRXhwZXJpbWVudGFsU2VydmljZSkge1xuXHRcdFBhZ2luYXRpb24ucGFnaW5hdGlvbkNvdW50ZXIrKztcblx0fVxufVxuIl19