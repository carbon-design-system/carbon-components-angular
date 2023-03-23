import { PaginationModel } from "../pagination-model.class";
import {
	Component,
	Input,
	Output,
	EventEmitter
} from "@angular/core";

import { I18n, Overridable } from "carbon-components-angular/i18n";
import { ExperimentalService } from "carbon-components-angular/experimental";
import { merge } from "carbon-components-angular/utils";
import { range } from "carbon-components-angular/common";

export interface PaginationNavTranslations {
	NEXT: string;
	PREVIOUS: string;
}

/**
 * Use pagination when you have multiple pages of data to handle.
 *
 * [See demo](../../?path=/story/components-pagination-nav--basic)
 *
 * ```html
 * <cds-pagination-nav [model]="model" (selectPage)="selectPage($event)"></cds-pagination-nav>
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
	selector: "cds-pagination-nav, ibm-pagination-navm",
	template: `
	<div>
		<div class="cds--pagination-nav">
			<ul class="cds--pagination-nav__list">
				<li class="cds--pagination-nav__list-item">
					<cds-icon-button
						kind="ghost"
						size="md"
						(click)="jumpToPrevious()"
						[disabled]="leftArrowDisabled"
						[description]="previousItemText.subject | async">
						<svg
							cdsIcon="caret--left"
							size="16"
							class="cds--btn__icon">
						</svg>
					</cds-icon-button>
				</li>
				<cds-pagination-nav-item
					*ngIf="this.numOfItemsToShow >= 5 || (this.numOfItemsToShow <= 4 && currentPage <= 1)"
					page="1"
					(click)="currentPage = 1"
					[isActive]="currentPage == 1">
				</cds-pagination-nav-item>
				<cds-pagination-overflow
					*ngIf="frontCuts"
					[count]="frontCuts"
					[fromIndex]="startOffset"
					(change)="handleOverflowSelection($event)">
				</cds-pagination-overflow>
				<cds-pagination-nav-item
					*ngFor="let page of getPages();"
					[page]="page"
					(click)="currentPage = page"
					[isActive]="currentPage == page">
				</cds-pagination-nav-item>
				<cds-pagination-overflow
					*ngIf="backCuts"
					[count]="backCuts"
					[fromIndex]="totalNumbersArray.length - backCuts - 1"
					(change)="handleOverflowSelection($event)">
				</cds-pagination-overflow>
				<cds-pagination-nav-item
					*ngIf="totalDataLength > 1"
					[page]="totalNumbersArray.length"
					(click)="currentPage = totalNumbersArray.length"
					[isActive]="currentPage == totalNumbersArray.length">
				</cds-pagination-nav-item>
				<li class="cds--pagination-nav__list-item">
					<cds-icon-button
						kind="ghost"
						(click)="jumpToNext()"
						[disabled]="rightArrowDisabled"
						[description]="nextItemText.subject | async">
						<svg
							cdsIcon="caret--right"
							size="16"
							class="cds--btn__icon">
						</svg>
					</cds-icon-button>
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
	@Input() model: PaginationModel;
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
	set translations(value: PaginationNavTranslations) {
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
		return range(this.totalDataLength + 1, 1);
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
		const cuts = this.getCuts();
		return cuts.front;
	}

	get backCuts() {
		const cuts = this.getCuts();
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
		const cuts = this.getCuts();
		return this.totalNumbersArray.slice(this.startOffset + cuts.front, (1 + cuts.back) * -1);
	}

	private getCuts(splitPoint = null) {
		const page = this.currentPage - 1;
		const totalItems = this.totalDataLength;
		const itemsThatFit = this.numOfItemsToShow;

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
