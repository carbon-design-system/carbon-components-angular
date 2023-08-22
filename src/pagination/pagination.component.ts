import { PaginationModel } from "./pagination-model.class";
import {
	Component,
	Input,
	Output,
	EventEmitter
} from "@angular/core";

import { I18n, Overridable } from "carbon-components-angular/i18n";
import { ExperimentalService } from "carbon-components-angular/experimental";
import { merge } from "carbon-components-angular/utils";

export interface PaginationTranslations {
	ITEMS_PER_PAGE: string;
	OPEN_LIST_OF_OPTIONS: string;
	BACKWARD: string;
	FORWARD: string;
	TOTAL_ITEMS_UNKNOWN: string;
	TOTAL_ITEMS: string;
	TOTAL_ITEM: string;
	OF_LAST_PAGES: string;
	OF_LAST_PAGE: string;
}

/**
 * Use pagination when you have multiple pages of data to handle.
 *
 * [See demo](../../?path=/story/components-pagination--basic)
 *
 * ```html
 *	<cds-pagination [model]="model" (selectPage)="selectPage($event)"></cds-pagination>
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
 */
@Component({
	selector: "cds-pagination, ibm-pagination",
	template: `
	<div
		class="cds--pagination"
		[ngClass]="{
			'cds--skeleton': skeleton
		}">
		<!-- left skeleton div -->
		<div *ngIf="skeleton" class="cds--pagination__left">
			<p class="cds--skeleton__text" style="width: 70px"></p>
			<p class="cds--skeleton__text" style="width: 35px"></p>
			<p class="cds--skeleton__text" style="width: 105px"></p>
		</div>

		<div *ngIf="!skeleton" class="cds--pagination__left">
			<ng-container *ngIf="showPageInput">
				<label class="cds--pagination__text" [for]="itemsPerPageSelectId">
					{{itemsPerPageText.subject | async}}
				</label>
				<div
					class="cds--select cds--select--inline cds--select__item-count"
					[class.cds--select--disabled]="pageInputDisabled">
					<select
						[id]="itemsPerPageSelectId"
						[(ngModel)]="itemsPerPage"
						[disabled]="pageInputDisabled"
						class="cds--select-input">
						<option
							class="cds--select-option"
							*ngFor="let option of itemsPerPageOptions"
							[value]="option">
								{{ option }}
						</option>
					</select>
					<svg
						cdsIcon="chevron--down"
						size="16"
						style="display: inherit"
						class="cds--select__arrow"
						aria-hidden="true"
						[attr.ariaLabel]="optionsListText.subject | async">
					</svg>
				</div>
			</ng-container>
			<span *ngIf="!pagesUnknown && totalDataLength <= 1" class="cds--pagination__text cds--pagination__items-count" [ngStyle]="{'margin-left': showPageInput ? null : 0}">
				{{totalItemText.subject | i18nReplace:{start: startItemIndex, end: endItemIndex, total: totalDataLength } | async}}
			</span>
			<span *ngIf="!pagesUnknown && totalDataLength > 1" class="cds--pagination__text cds--pagination__items-count" [ngStyle]="{'margin-left': showPageInput ? null : 0}">
				{{totalItemsText.subject | i18nReplace:{start: startItemIndex, end: endItemIndex, total: totalDataLength } | async}}
			</span>
			<span *ngIf="pagesUnknown" class="cds--pagination__text cds--pagination__items-count" [ngStyle]="{'margin-left': showPageInput ? null : 0}">
				{{totalItemsUnknownText.subject | i18nReplace:{start: startItemIndex, end: endItemIndex } | async}}
			</span>
		</div>

		<!-- right skeleton div -->
		<div *ngIf="skeleton" class="cds--pagination__right">
			<p class="cds--skeleton__text" style="width: 70px"></p>
		</div>

		<div *ngIf="!skeleton" class="cds--pagination__right">
			<span *ngIf="pagesUnknown" class="cds--pagination__text cds--pagination__page-text">
				<ng-container *ngIf="!showPageInput">{{currentPage}}</ng-container>
				{{pageText.subject | async}}
			</span>
			<ng-container *ngIf="showPageInput">
				<div
					class="cds--select cds--select--inline cds--select__page-number"
					[class.cds--select--disabled]="pageInputDisabled">
					<label [for]="currentPageSelectId" class="cds--label cds--visually-hidden">{{pageText.subject | async}}</label>
					<input
						*ngIf="pageOptions.length > pageSelectThreshold"
						style="padding-right: 1rem; margin-right: 1rem;"
						[id]="currentPageSelectId"
						type="number"
						min="1"
						[max]="pageOptions.length"
						class="cds--select-input"
						[(ngModel)]="currentPage">
					<select
						*ngIf="pageOptions.length <= pageSelectThreshold"
						[id]="currentPageSelectId"
						class="cds--select-input"
						[disabled]="pageInputDisabled"
						[(ngModel)]="currentPage">
						<option *ngFor="let page of pageOptions; let i = index;" class="cds--select-option" [value]="i + 1">{{i + 1}}</option>
					</select>
					<svg
						*ngIf="pageOptions.length <= 1000"
						cdsIcon="chevron--down"
						size="16"
						style="display: inherit;"
						class="cds--select__arrow"
						[attr.ariaLabel]="optionsListText.subject | async">
					</svg>
				</div>
			</ng-container>

			<span *ngIf="!pagesUnknown && lastPage <= 1" class="cds--pagination__text">
				<ng-container *ngIf="!showPageInput">{{currentPage}}</ng-container>
				{{ofLastPageText.subject | i18nReplace: {last: lastPage} | async}}
			</span>
			<span *ngIf="!pagesUnknown && lastPage > 1" class="cds--pagination__text">
				<ng-container *ngIf="!showPageInput">{{currentPage}}</ng-container>
				{{ofLastPagesText.subject | i18nReplace: {last: lastPage} | async}}
			</span>
			<div class="cds--pagination__control-buttons">
				<button
					cdsButton="ghost"
					iconOnly="true"
					class="cds--pagination__button cds--pagination__button--backward"
					[ngClass]="{
						'cds--pagination__button--no-index': currentPage <= 1 || disabled
					}"
					tabindex="0"
					[attr.aria-label]="backwardText.subject | async"
					(click)="selectPage.emit(previousPage)"
					[disabled]="(currentPage <= 1 || disabled ? true : null)">
					<svg cdsIcon="caret--left" size="16" class="cds--btn__icon"></svg>
				</button>

				<button
					cdsButton="ghost"
					iconOnly="true"
					class="
						cds--pagination__button
						cds--pagination__button--forward"
					[ngClass]="{
						'cds--pagination__button--no-index': currentPage >= lastPage || disabled
					}"
					tabindex="0"
					[attr.aria-label]="forwardText.subject | async"
					(click)="selectPage.emit(nextPage)"
					[disabled]="(currentPage >= lastPage || disabled ? true : null)">
					<svg cdsIcon="caret--right" size="16" class="cds--btn__icon"></svg>
				</button>
			</div>
		</div>
	</div>
	`
})
export class Pagination {
	static paginationCounter = 0;

	/**
	 * Set to `true` for a loading pagination component.
	 */
	@Input() skeleton = false;
	/**
	 * `PaginationModel` with the information about pages you're controlling.
	 */
	@Input() model: PaginationModel;
	/**
 	 * Set to `true` to disable the backward/forward buttons.
	 */
	@Input() disabled = false;
	/**
	 * Set to `true` to disable the select box that changes the page.
	 */
	@Input() pageInputDisabled = false;
	/**
	 * Controls wether or not to show the page selects
	 */
	@Input() showPageInput = true;
	/**
	 * Set to `true` if the total number of items is unknown.
	 */
	@Input() pagesUnknown = false;
	@Input() pageSelectThreshold = 1000;

	/**
	 * Expects an object that contains some or all of:
	 * ```
	 * {
	 *		"ITEMS_PER_PAGE": "Items per page:",
	 *		"OPEN_LIST_OF_OPTIONS": "Open list of options",
	 *		"BACKWARD": "Backward",
	 *		"FORWARD": "Forward",
	 *		"TOTAL_ITEMS_UNKNOWN": "{{start}}-{{end}} items",
	 *		"TOTAL_ITEMS": "{{start}}-{{end}} of {{total}} items",
	 *		"TOTAL_ITEM": "{{start}}-{{end}} of {{total}} item",
	 *		"OF_LAST_PAGES": "of {{last}} pages",
	 *		"OF_LAST_PAGE": "of {{last}} page"
	 * }
	 * ```
	 */
	@Input()
	set translations (value: PaginationTranslations) {
		const valueWithDefaults = merge(this.i18n.getMultiple("PAGINATION"), value);
		this.itemsPerPageText.override(valueWithDefaults.ITEMS_PER_PAGE);
		this.optionsListText.override(valueWithDefaults.OPEN_LIST_OF_OPTIONS);
		this.backwardText.override(valueWithDefaults.BACKWARD);
		this.forwardText.override(valueWithDefaults.FORWARD);
		this.totalItemsText.override(valueWithDefaults.TOTAL_ITEMS);
		this.totalItemText.override(valueWithDefaults.TOTAL_ITEM);
		this.totalItemsUnknownText.override(valueWithDefaults.TOTAL_ITEMS_UNKNOWN);
		this.pageText.override(valueWithDefaults.PAGE);
		this.ofLastPagesText.override(valueWithDefaults.OF_LAST_PAGES);
		this.ofLastPageText.override(valueWithDefaults.OF_LAST_PAGE);
	}

	/**
	 * Options for items per page select
	 *
	 * A default array of options will be defined: [10, 20, 30, 40, 50]
	 */
	@Input() itemsPerPageOptions: number[] = [10, 20, 30, 40, 50];

	/**
	 * Emits the new page number.
	 *
	 * You should tie into this and update `model.currentPage` once the fresh
	 * data is finally loaded.
	 */
	@Output() selectPage = new EventEmitter<number>();

	get itemsPerPage() {
		return this.model.pageLength;
	}
	set itemsPerPage(value) {
		this.model.pageLength = Number(value);
		this.currentPage = 1; // reset page
	}

	get currentPage() {
		return this.model.currentPage;
	}
	set currentPage(value) {
		value = Number(value);
		// emits the value to allow the user to update current page
		// in the model once the page is loaded
		this.selectPage.emit(value);
	}

	get totalDataLength() {
		return this.model.totalDataLength;
	}
	/**
	 * The last page number to display in the pagination view.
	 */
	get lastPage(): number {
		const last = Math.ceil(this.totalDataLength / this.itemsPerPage);
		return last > 0 ? last : 1;
	}

	get startItemIndex() {
		return this.endItemIndex > 0 ? (this.currentPage - 1) * this.itemsPerPage + 1 : 0;
	}

	get endItemIndex() {
		const projectedEndItemIndex = this.currentPage * this.itemsPerPage;

		return projectedEndItemIndex < this.totalDataLength ? projectedEndItemIndex : this.totalDataLength;
	}

	/**
	 * The previous page number to navigate to, from the current page.
	 */
	get previousPage(): number {
		return this.currentPage <= 1 ? 1 : this.currentPage - 1;
	}

	/**
	 * The next page number to navigate to, from the current page.
	 */
	get nextPage(): number {
		const lastPage = this.lastPage;
		return this.currentPage >= lastPage ? lastPage : this.currentPage + 1;
	}

	get pageOptions() {
		if (this.totalDataLength && this._pageOptions.length !== this.totalDataLength) {
			this._pageOptions = Array(Math.ceil(this.totalDataLength / this.itemsPerPage));
		}
		return this._pageOptions;
	}

	itemsPerPageSelectId = `pagination-select-items-per-page-${Pagination.paginationCounter}`;
	currentPageSelectId = `pagination-select-current-page-${Pagination.paginationCounter}`;

	itemsPerPageText = this.i18n.getOverridable("PAGINATION.ITEMS_PER_PAGE");
	optionsListText = this.i18n.getOverridable("PAGINATION.OPEN_LIST_OF_OPTIONS");
	backwardText = this.i18n.getOverridable("PAGINATION.BACKWARD");
	forwardText = this.i18n.getOverridable("PAGINATION.FORWARD");
	totalItemsText = this.i18n.getOverridable("PAGINATION.TOTAL_ITEMS");
	totalItemText = this.i18n.getOverridable("PAGINATION.TOTAL_ITEM");
	totalItemsUnknownText = this.i18n.getOverridable("PAGINATION.TOTAL_ITEMS_UNKNOWN");
	pageText = this.i18n.getOverridable("PAGINATION.PAGE");
	ofLastPagesText = this.i18n.getOverridable("PAGINATION.OF_LAST_PAGES");
	ofLastPageText = this.i18n.getOverridable("PAGINATION.OF_LAST_PAGE");

	protected _pageOptions = [];

	constructor(protected i18n: I18n, protected experimental: ExperimentalService) {
		Pagination.paginationCounter++;
	}
}
