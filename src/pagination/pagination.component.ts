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

/**
 * Use pagination when you have multiple pages of data to handle.
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
 * 	// ... your code to laod the page goes here
 *
 * 	this.model.currentPage = page;
 *
 * 	// ... anything you want to do after page selection changes goes here
 * }
 * ```
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
			'bx--skeleton' : skeleton
		}">

		<div *ngIf="skeleton" class="bx--pagination__left">
			<p class="bx--skeleton__text" style="width: 70px"></p>
			<p class="bx--skeleton__text" style="width: 35px"></p>
			<p class="bx--skeleton__text" style="width: 105px"></p>
		</div>

		<div *ngIf="!skeleton" class="bx--pagination__left">
			<span class="bx--pagination__text">{{itemsPerPageText | async}}</span>
			<div class="bx--form-item">
				<div class="bx--select bx--select--inline">
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
					<svg
						class="bx--select__arrow"
						fill-rule="evenodd"
						height="5"
						role="img"
						viewBox="0 0 10 5"
						width="10"
						[attr.aria-label]="optionsListText | async"
						[attr.alt]="optionsListText | async">
						<title>{{optionsListText | async}}</title>
						<path d="M0 0l5 4.998L10 0z"></path>
					</svg>
				</div>
			</div>
			<span class="bx--pagination__text">
				<span>|&nbsp;</span>
				{{totalItemsText | i18nReplace:{start: startItemIndex, end: endItemIndex, total: model.totalDataLength } | async}}
			</span>
		</div>

		<div *ngIf="skeleton" class="bx--pagination__right bx--pagination--inline">
			<p class="bx--skeleton__text" style="width: 70px"></p>
		</div>

		<div *ngIf="!skeleton" class="bx--pagination__right bx--pagination--inline">
			<span class="bx--pagination__text">{{totalPagesText | i18nReplace:{current: currentPage, last: lastPage} | async}}</span>
			<button
				class="bx--pagination__button bx--pagination__button--backward"
				(click)="selectPage.emit(previousPage)"
				[disabled]="(currentPage <= 1 ? true : null)">
				<svg
					class="bx--pagination__button-icon"
					fill-rule="evenodd"
					height="12"
					role="img"
					viewBox="0 0 7 12"
					width="7"
					[attr.aria-label]="backwardText | async"
					[attr.alt]="backwardText | async">
					<title>{{backwardText |async }}</title>
					<path d="M1.45 6.002L7 11.27l-.685.726L0 6.003 6.315 0 7 .726z"></path>
				</svg>
			</button>
			<div class="bx--form-item">
				<div class="bx--select bx--select--inline">
				<label [for]="currentPageSelectId" class="bx--label bx--visually-hidden">{{itemsPerPageText | async}}</label>
				<select [id]="currentPageSelectId" class="bx--select-input" aria-describedby="false" [(ngModel)]="currentPage">
					<option *ngFor="let i of range(lastPage + 1, 1)" class="bx--select-option" [value]="i">{{i}}</option>
				</select>
				<svg
					class="bx--select__arrow"
					fill-rule="evenodd"
					height="5"
					role="img"
					viewBox="0 0 10 5"
					width="10"
					[attr.aria-label]="optionsListText | async"
					[attr.alt]="optionsListText | async">
					<title>{{optionsListText | async}}</title>
					<path d="M0 0l5 4.998L10 0z"></path>
				</svg>
			</div>
		</div>
		<button
			class="bx--pagination__button bx--pagination__button--forward"
			(click)="selectPage.emit(nextPage)"
			[disabled]="(currentPage >= lastPage ? true : null)">
			<svg
				class="bx--pagination__button-icon"
				fill-rule="evenodd"
				height="12"
				role="img"
				viewBox="0 0 7 12"
				width="7"
				[attr.aria-label]="forwardText | async"
				[attr.alt]="forwardText | async">
				<title>{{forwardText | async}}</title>
				<path d="M5.569 5.994L0 .726.687 0l6.336 5.994-6.335 6.002L0 11.27z"></path>
			</svg>
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
	 * @memberof Pagination
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
	 *		"TOTAL_PAGES": "{{current}} of {{last}} pages"
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
	}

	/**
	 * Emits the new page number.
	 *
	 * You should tie into this and update `model.currentPage` once the fresh
	 * data is finally loaded.
	 *
	 * @memberof Pagination
	 */
	@Output() selectPage = new EventEmitter<number>();

	get itemsPerPage() {
		return this.model.pageLength;
	}
	set itemsPerPage(value) {
		this.model.pageLength = value;
		this.currentPage = 1; // reset page
	}

	get currentPage() {
		return this.model.currentPage;
	}
	set currentPage(value) {
		// emits the value to allow the user to update current page
		// in the model once the page is loaded
		this.selectPage.emit(value);
	}
	/**
	 * The last page number to display in the pagination view.
	 *
	 * @returns {number}
	 * @memberof Pagination
	 */
	get lastPage(): number {
		return Math.ceil(this.model.totalDataLength / this.model.pageLength);
	}

	get startItemIndex() {
		return (this.currentPage - 1) * this.model.pageLength + 1;
	}

	get endItemIndex() {
		const projectedEndItemIndex = this.currentPage * this.model.pageLength;

		return projectedEndItemIndex < this.model.totalDataLength ? projectedEndItemIndex : this.model.totalDataLength;
	}

	/**
	 * The previous page number to navigate to, from the current page.
	 *
	 * @returns {number}
	 * @memberof Pagination
	 */
	get previousPage(): number {
		return this.currentPage <= 1 ? 1 : this.currentPage - 1;
	}

	/**
	 * The next page number to navigate to, from the current page.
	 *
	 * @returns {number}
	 * @memberof Pagination
	 */
	get nextPage(): number {
		const lastPage = this.lastPage;
		return this.currentPage >= lastPage ? lastPage : this.currentPage + 1;
	}

	itemsPerPageSelectId = `pagination-select-items-per-page-${Pagination.paginationCounter}`;
	currentPageSelectId = `pagination-select-current-page-${Pagination.paginationCounter}`;

	itemsPerPageText = this.i18n.get("PAGINATION.ITEMS_PER_PAGE");
	optionsListText = this.i18n.get("PAGINATION.OPEN_LIST_OF_OPTIONS");
	backwardText = this.i18n.get("PAGINATION.BACKWARD");
	forwardText = this.i18n.get("PAGINATION.FORWARD");
	totalItemsText = this.i18n.get("PAGINATION.TOTAL_ITEMS");
	totalPagesText = this.i18n.get("PAGINATION.TOTAL_PAGES");

	constructor(protected i18n: I18n) {
		Pagination.paginationCounter++;
	}

	/**
	 * Generates a list of numbers. (Python function)
	 * Used to display the correct pagination controls.
	 *
	 * @param {number} stop
	 * @param {number} [start=0]
	 * @param {number} [step=1]
	 * @returns {array}
	 * @memberof Pagination
	 */
	range(stop: number, start = 0, step = 1) {
		return range(stop, start, step);
	}
}
