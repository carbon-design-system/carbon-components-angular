import { PaginationModel } from "./pagination.module";
import {
	Component,
	Input,
	Output,
	EventEmitter
} from "@angular/core";

import { range } from "../common/utils";
import { I18n } from "./../i18n/i18n.module";
import { BehaviorSubject } from "rxjs";
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
					<label
						[for]="itemsPerPageSelectId"
						class="bx--label bx--visually-hidden">
						{{itemsPerPageText | async}}
					</label>
					<select
						[id]="itemsPerPageSelectId"
						[(ngModel)]="itemsPerPage"
						class="bx--select-input"
						aria-describedby="false">
						<option class="bx--select-option" value="10">10</option>
						<option class="bx--select-option" value="20">20</option>
						<option class="bx--select-option" value="30">30</option>
						<option class="bx--select-option" value="40">40</option>
						<option class="bx--select-option" value="50">50</option>
					</select>
					<ibm-icon-chevron-down16
						style="display: inherit;"
						innerClass="bx--select__arrow"
						[ariaLabel]="optionsListText | async">
					</ibm-icon-chevron-down16>
				</div>
			</div>

			<span class="bx--pagination__text">
				<span *ngIf="!isExperimental">|&nbsp;</span>
				{{totalItemsText | i18nReplace:{start: startItemIndex, end: endItemIndex, total: model.totalDataLength } | async}}
			</span>
		</div>

		<!-- right skeleton div -->
		<div *ngIf="skeleton" class="bx--pagination__right bx--pagination--inline">
			<p class="bx--skeleton__text" style="width: 70px"></p>
		</div>

		<div *ngIf="!skeleton" class="bx--pagination__right"
			[ngClass]="{
				'bx--pagination--inline': !isExperimental
			}">

			<div class="bx--form-item">
				<div class="bx--select bx--select--inline"
				[ngClass]="{
					'bx--select__page-number' : isExperimental
				}">
					<label [for]="currentPageSelectId" class="bx--label bx--visually-hidden">{{itemsPerPageText | async}}</label>
					<select [id]="currentPageSelectId" class="bx--select-input" aria-describedby="false" [(ngModel)]="currentPage">
						<option *ngFor="let i of range(lastPage + 1, 1)" class="bx--select-option" [value]="i">{{i}}</option>
					</select>
					<ibm-icon-chevron-down16
						style="display: inherit;"
						innerClass="bx--select__arrow"
						[ariaLabel]="optionsListText | async">
					</ibm-icon-chevron-down16>
				</div>
			</div>

			<span class="bx--pagination__text">
				{{ofLastPagesText | i18nReplace: {last: lastPage} | async}}
			</span>
			<button
				class="bx--pagination__button bx--pagination__button--backward"
				[ngClass]="{
					'bx--pagination__button--no-index': currentPage <= 1
				}"
				tabindex="0"
				[attr.aria-label]="backwardText | async"
				(click)="selectPage.emit(previousPage)"
				[disabled]="(currentPage <= 1 ? true : null)">
				<ibm-icon-caret-left16></ibm-icon-caret-left16>
			</button>

			<button
				class="bx--pagination__button bx--pagination__button--forward"
				[ngClass]="{
					'bx--pagination__button--no-index': currentPage >= lastPage
				}"
				tabindex="0"
				[attr.aria-label]="forwardText | async"
				(click)="selectPage.emit(nextPage)"
				[disabled]="(currentPage >= lastPage ? true : null)">
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
			this.itemsPerPageText = new BehaviorSubject(value.ITEMS_PER_PAGE);
		}
		if (value.OPEN_LIST_OF_OPTIONS) {
			this.optionsListText = new BehaviorSubject(value.OPEN_LIST_OF_OPTIONS);
		}
		if (value.BACKWARD) {
			this.backwardText = new BehaviorSubject(value.BACKWARD);
		}
		if (value.FORWARD) {
			this.forwardText = new BehaviorSubject(value.FORWARD);
		}
		if (value.TOTAL_ITEMS) {
			this.totalItemsText = new BehaviorSubject(value.TOTAL_ITEMS);
		}
		if (value.TOTAL_PAGES) {
			this.totalPagesText = new BehaviorSubject(value.TOTAL_PAGES);
		}
		if (value.OF_LAST_PAGES) {
			this.ofLastPagesText = new BehaviorSubject(value.OF_LAST_PAGES);
		}
	}

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

	itemsPerPageSelectId = `pagination-select-items-per-page-${Pagination.paginationCounter}`;
	currentPageSelectId = `pagination-select-current-page-${Pagination.paginationCounter}`;

	itemsPerPageText = this.i18n.get("PAGINATION.ITEMS_PER_PAGE");
	optionsListText = this.i18n.get("PAGINATION.OPEN_LIST_OF_OPTIONS");
	backwardText = this.i18n.get("PAGINATION.BACKWARD");
	forwardText = this.i18n.get("PAGINATION.FORWARD");
	totalItemsText = this.i18n.get("PAGINATION.TOTAL_ITEMS");
	totalPagesText = this.i18n.get("PAGINATION.TOTAL_PAGES");
	ofLastPagesText = this.i18n.get("PAGINATION.OF_LAST_PAGES");

	constructor(protected i18n: I18n, protected experimental: ExperimentalService) {
		Pagination.paginationCounter++;
	}

	/**
	 * Generates a list of numbers. (Python function)
	 * Used to display the correct pagination controls.
	 * @returns {array}
	 */
	range(stop: number, start = 0, step = 1) {
		return range(stop, start, step);
	}
}
