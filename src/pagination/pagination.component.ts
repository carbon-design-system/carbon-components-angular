import { PaginationModel } from "./pagination.module";
import {
	Component,
	Input,
	Output,
	EventEmitter
} from "@angular/core";

import { range } from "../common/utils";

const EN = require("./../i18n/en.json");

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
	<div class="bx--pagination">
		<div class="bx--pagination__left">
			<span class="bx--pagination__text">{{translations.ITEMS_PER_PAGE}}</span>
			<div class="bx--form-item">
				<div class="bx--select bx--select--inline">
					<label
						[for]="itemsPerPageSelectId"
						class="bx--label bx--visually-hidden">
						{{translations.ITEMS_PER_PAGE}}
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
						[attr.aria-label]="translations.OPEN_LIST_OF_OPTIONS"
						[attr.alt]="translations.OPEN_LIST_OF_OPTIONS">
						<title>{{translations.OPEN_LIST_OF_OPTIONS}}</title>
						<path d="M0 0l5 4.998L10 0z"></path>
					</svg>
				</div>
			</div>
			<span class="bx--pagination__text">
				<span>|&nbsp;</span>
				{{startItemIndex}}-{{endItemIndex}} of {{model.totalDataLength}} items
			</span>
		</div>
		<div class="bx--pagination__right bx--pagination--inline">
			<span class="bx--pagination__text">{{currentPage}} of {{lastPage}} pages</span>
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
					[attr.aria-label]="translations.BACKWARD"
					[attr.alt]="translations.BACKWARD">
					<title>{{translations.BACKWARD}}</title>
					<path d="M1.45 6.002L7 11.27l-.685.726L0 6.003 6.315 0 7 .726z"></path>
				</svg>
			</button>
			<div class="bx--form-item">
				<div class="bx--select bx--select--inline">
				<label [for]="currentPageSelectId" class="bx--label bx--visually-hidden">{{translations.ITEMS_PER_PAGE}}</label>
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
					[attr.aria-label]="translations.OPEN_LIST_OF_OPTIONS"
					[attr.alt]="translations.OPEN_LIST_OF_OPTIONS">
					<title>{{translations.OPEN_LIST_OF_OPTIONS}}</title>
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
				[attr.aria-label]="translations.FORWARD"
				[attr.alt]="translations.FORWARD">
				<title>{{translations.FORWARD}}</title>
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
	 * `PaginationModel` with the information about pages you're controlling.
	 *
	 * @type {Model}
	 * @memberof Pagination
	 */
	@Input() model: PaginationModel;

	@Input() translations = EN.PAGINATION;

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

	constructor() {
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
