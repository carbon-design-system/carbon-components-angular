import { PaginationModel } from "./pagination.module";
import {
	Component,
	Input,
	Output,
	EventEmitter
} from "@angular/core";

import { I18n } from "./../i18n/i18n.module";
import { ExperimentalService } from "./../experimental.module";

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
 *
 * @export
 * @class Pagination
 */
@Component({
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
				{{itemsPerPageText | async}}
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
						[ariaLabel]="optionsListText | async">
					</ibm-icon-chevron-down16>
				</div>
			</div>

			<span *ngIf="!pagesUnknown" class="bx--pagination__text">
				<span *ngIf="!isExperimental">|&nbsp;</span>
				{{totalItemsText | i18nReplace:{start: startItemIndex, end: endItemIndex, total: model.totalDataLength } | async}}
			</span>
			<span *ngIf="pagesUnknown" class="bx--pagination__text">
				<span *ngIf="!isExperimental">|&nbsp;</span>
				{{totalItemsUnknownText | i18nReplace:{start: startItemIndex, end: endItemIndex } | async}}
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
					<label [for]="currentPageSelectId" class="bx--label bx--visually-hidden">{{itemsPerPageText | async}}</label>
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
						[ariaLabel]="optionsListText | async">
					</ibm-icon-chevron-down16>
				</div>
			</div>

			<span *ngIf="!pageInputDisabled && !pagesUnknown" class="bx--pagination__text">
				{{ofLastPagesText | i18nReplace: {last: lastPage} | async}}
			</span>
			<span *ngIf="!pageInputDisabled && pagesUnknown" class="bx--pagination__text">
				{{pageText | async}} {{currentPage}}
			</span>
			<button
				class="bx--pagination__button bx--pagination__button--backward"
				[ngClass]="{
					'bx--pagination__button--no-index': currentPage <= 1 || disabled
				}"
				tabindex="0"
				[attr.aria-label]="backwardText | async"
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
				[attr.aria-label]="forwardText | async"
				(click)="selectPage.emit(nextPage)"
				[disabled]="(currentPage >= lastPage || disabled ? true : null)">
				<ibm-icon-caret-right16></ibm-icon-caret-right16>
			</button>
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
	 *
	 * @type {Model}
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
	 *		"TOTAL_ITEMS": "{{start}}-{{end}} of {{total}} items",
	 *		"TOTAL_PAGES": "{{current}} of {{last}} pages",
	 *		"OF_LAST_PAGES": "of {{last}} pages"
	 * }
	 * ```
	 */
	@Input()
	set translations (value) {
		if (value.ITEMS_PER_PAGE) {
			this.itemsPerPageText.next(value.ITEMS_PER_PAGE);
		}
		if (value.OPEN_LIST_OF_OPTIONS) {
			this.optionsListText.next(value.OPEN_LIST_OF_OPTIONS);
		}
		if (value.BACKWARD) {
			this.backwardText.next(value.BACKWARD);
		}
		if (value.FORWARD) {
			this.forwardText.next(value.FORWARD);
		}
		if (value.TOTAL_ITEMS) {
			this.totalItemsText.next(value.TOTAL_ITEMS);
		}
		if (value.TOTAL_ITEMS_UNKNOWN) {
			this.totalItemsUnknownText.next(value.TOTAL_ITEMS_UNKNOWN);
		}
		if (value.TOTAL_PAGES) {
			this.totalPagesText.next(value.TOTAL_PAGES);
		}
		if (value.PAGE) {
			this.pageText.next(value.PAGE);
		}
		if (value.OF_LAST_PAGES) {
			this.ofLastPagesText.next(value.OF_LAST_PAGES);
		}
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
	/**
	 * The last page number to display in the pagination view.
	 */
	get lastPage(): number {
		const last = Math.ceil(this.model.totalDataLength / this.model.pageLength);
		return last > 0 ? last : 1;
	}

	get startItemIndex() {
		return this.endItemIndex > 0 ? (this.currentPage - 1) * this.model.pageLength + 1 : 0;
	}

	get endItemIndex() {
		const projectedEndItemIndex = this.currentPage * this.model.pageLength;

		return projectedEndItemIndex < this.model.totalDataLength ? projectedEndItemIndex : this.model.totalDataLength;
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

	get isExperimental() {
		return this.experimental.isExperimental;
	}

	get pageOptions() {
		if (this._pageOptions.length !== this.model.totalDataLength) {
			this._pageOptions = Array(Math.ceil(this.model.totalDataLength / this.itemsPerPage));
		}
		return this._pageOptions;
	}

	itemsPerPageSelectId = `pagination-select-items-per-page-${Pagination.paginationCounter}`;
	currentPageSelectId = `pagination-select-current-page-${Pagination.paginationCounter}`;

	itemsPerPageText = this.i18n.get("PAGINATION.ITEMS_PER_PAGE");
	optionsListText = this.i18n.get("PAGINATION.OPEN_LIST_OF_OPTIONS");
	backwardText = this.i18n.get("PAGINATION.BACKWARD");
	forwardText = this.i18n.get("PAGINATION.FORWARD");
	totalItemsText = this.i18n.get("PAGINATION.TOTAL_ITEMS");
	totalItemsUnknownText = this.i18n.get("PAGINATION.TOTAL_ITEMS_UNKNOWN");
	totalPagesText = this.i18n.get("PAGINATION.TOTAL_PAGES");
	pageText = this.i18n.get("PAGINATION.PAGE");
	ofLastPagesText = this.i18n.get("PAGINATION.OF_LAST_PAGES");

	protected _pageOptions = [];

	constructor(protected i18n: I18n, protected experimental: ExperimentalService) {
		Pagination.paginationCounter++;
	}
}
