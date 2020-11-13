import { PaginationNavModel } from "./pagination-nav-model.class";
import {
	Component,
	Input,
	Output,
	EventEmitter
} from "@angular/core";

import { I18n, Overridable } from "carbon-components-angular/i18n";
import { ExperimentalService } from "carbon-components-angular/experimental";
import { merge } from "carbon-components-angular/utils";

export interface PaginationNavTranslations {
	NEXT: string;
	PREVIOUS: string;
}

/**
 * Use pagination when you have multiple pages of data to handle.
 *
 * [See demo](../../?path=/story/pagination-nav--basic)
 *
 * ```html
 * <ibm-pagination-nav [model]="model" (selectPage)="selectPage($event)"></ibm-pagination-nav>
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
 * <example-url>../../iframe.html?id=pagination-nav--basic</example-url>
 */
@Component({
	selector: "ibm-pagination-nav",
	template: `
	<div>
		<div class="bx--pagination-nav">
			<ul class="bx--pagination-nav__list">
				<li class="bx--pagination-nav__list-item">
					<button
						class="bx--btn bx--btn--ghost bx--pagination-nav-previous
						bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center"
						[disabled]="leftArrowDisabled"
						(click)="jumpToPrevious()">
						<span class="bx--assistive-text">{{previousItemText.subject | async}}</span>
						<svg
							ibmIcon="caret--left"
							size="16"
							style="display: inherit"
							class="bx--btn__icon"
						>
						</svg>
					</button>
				</li>
				<ibm-pagination-nav-item
					*ngIf="this.numOfItemsToShow >= 5 || (this.numOfItemsToShow <= 4 && currentPage <= 1)"
					page="1"
					(click)="currentPage = 1"
					[isActive]="currentPage == 1"></ibm-pagination-nav-item>
				<ibm-pagination-overflow
					*ngIf="frontCuts"
					[count]="frontCuts"
					[fromIndex]="startOffset"
					(change)="handleOverflowSelection($event)">
				</ibm-pagination-overflow>
				<ibm-pagination-nav-item
					*ngFor="let page of getPages();"
					[page]="page"
					(click)="currentPage = page"
					[isActive]="currentPage == page">
				</ibm-pagination-nav-item>
				<ibm-pagination-overflow
					*ngIf="backCuts"
					[count]="backCuts"
					[fromIndex]="totalNumbersArray.length - backCuts - 1"
					(change)="handleOverflowSelection($event)"
				></ibm-pagination-overflow>
				<ibm-pagination-nav-item
					*ngIf="totalDataLength > 1"
					[page]="totalNumbersArray.length"
					(click)="currentPage = totalNumbersArray.length"
					[isActive]="currentPage == totalNumbersArray.length">
				</ibm-pagination-nav-item>
				<li class="bx--pagination-nav__list-item">
					<button
						class="bx--btn bx--btn--ghost bx--pagination-nav-next
						bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center"
						[disabled]="rightArrowDisabled"
						(click)="jumpToNext()">
						<span class="bx--assistive-text">{{nextItemText.subject | async}}</span>
						<svg
							ibmIcon="caret--right"
							size="16"
							style="display: inherit"
							class="bx--btn__icon">
						</svg>
					</button>
				</li>
			</ul>
		</div>
	</div>
	`
})
export class PaginationNav {
	static paginationCounter = 0;
	/**
	 * `PaginationNavModel` with the information about pages you're controlling.
	 */
	@Input() model: PaginationNavModel;
	/**
 	 * Set to `true` to disable the backward/forward buttons.
	 */
	@Input() disabled = false;
	/**
	 * Number of items to show in pagination. Minimum is 4.
	 */
	@Input() numOfItemsToShow = 4;

	/**
	 * Expects an object that contains some or all of:
	 * ```
	 * {
	 *		"NEXT": "Next",
	 *		"PREVIOUS": "Previous",
	 * }
	 * ```
	 */
	@Input()
	set translations (value: PaginationNavTranslations) {
		const valueWithDefaults = merge(this.i18n.getMultiple("PAGINATION"), value);
		this.nextItemText.override(valueWithDefaults.NEXT);
		this.previousItemText.override(valueWithDefaults.PREVIOUS);
	}

	/**
	 * Emits the new page number.
	 *
	 * You should tie into this and update `model.currentPage` once the fresh
	 * data is finally loaded.
	 */
	@Output() selectPage = new EventEmitter<number>();


	get totalNumbersArray() {
		return [...Array(this.totalDataLength).keys()].map(n => n + 1);
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

	get startOffset() {
		return this.numOfItemsToShow <= 4 && this.currentPage > 1 ? 0 : 1;
	}

	get frontCuts() {
		const cuts = this.getCuts(this.currentPage - 1, this.totalDataLength, this.numOfItemsToShow);
		return cuts.front;
	}

	get backCuts() {
		const cuts = this.getCuts(this.currentPage - 1, this.totalDataLength, this.numOfItemsToShow);
		return cuts.back;
	}

	get leftArrowDisabled() {
		return this.disabled || this.currentPage === 1;
	}

	get rightArrowDisabled() {
		return this.disabled || this.currentPage === this.totalDataLength;
	}

	nextItemText = this.i18n.getOverridable("PAGINATION.NEXT");
	previousItemText = this.i18n.getOverridable("PAGINATION.PREVIOUS");

	constructor(protected i18n: I18n, protected experimental: ExperimentalService) {
		PaginationNav.paginationCounter++;
	}

	handleOverflowSelection(page) {
		if (typeof page === "number") {
			this.currentPage = page;
		}
	}

	public jumpToNext() {
		this.currentPage = this.currentPage < this.totalDataLength ? this.currentPage + 1 : this.totalDataLength;
	}

	public jumpToPrevious() {
		this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : 1;
	}

	public getPages() {
		if (this.totalDataLength <= 1) {
			return null;
		}
		const cuts = this.getCuts(this.currentPage - 1, this.totalDataLength, this.numOfItemsToShow);
		return this.totalNumbersArray.slice(this.startOffset + cuts.front, (1 + cuts.back) * -1);
	}

	private getCuts(page, totalItems, itemsThatFit, splitPoint = null) {
		if (itemsThatFit >= totalItems) {
			return {
				front: 0,
				back: 0
			};
		}
		const split = splitPoint || Math.ceil(itemsThatFit / 2) - 1;
		let frontHidden = page + 1 - split;
		let backHidden = totalItems - page - (itemsThatFit - split) + 1;

		if (frontHidden <= 1) {
			backHidden -= frontHidden <= 0 ? Math.abs(frontHidden) + 1 : 0;
			frontHidden = 0;
		}
		if (backHidden <= 1) {
			frontHidden -= backHidden <= 0 ? Math.abs(backHidden) + 1 : 0;
			backHidden = 0;
		}
		return {
			front: frontHidden,
			back: backHidden
		};
	}
}
