import {
	Component,
	Input,
	Output,
	EventEmitter
} from "@angular/core";
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
	selector: "ibm-pagination-overflow",
	template: `
		<li class="bx--pagination-nav__list-item" *ngIf="count > 1">
			<div class="bx--pagination-nav__select">
			  <select
				class="bx--pagination-nav__page bx--pagination-nav__page--select" (change)="handleChange($event)">
				  <option value="" hidden></option>
				  <option
					(click)="change.emit(fromIndex + i + 1)"
					*ngFor="let item of countAsArray; let i = index"
					>
						{{fromIndex + i + 1}}
				  </option>
			  </select>
			  <div class="bx--pagination-nav__select-icon-wrapper">
				  <svg
					  ibmIconOverflowMenuHorizontal
					  size="16"
					  style="display: inherit"
					  class="bx--pagination-nav__select-icon">
				  </svg>
			  </div>
			</div>
		  </li>
		<ibm-pagination-nav-item *ngIf="count == 1" [page]="fromIndex + 1"></ibm-pagination-nav-item>
	`
})
export class PaginationOverflow {

	/**
	 * The page for this component to dipslay
	 */
	@Input() fromIndex: number;

	@Input() count: number;

	/**
	 * Emits click event
	 */
	@Output() change = new EventEmitter<number>();

	handleChange(event) {
		event.target.value = "";
	}

	get countAsArray() {
		return [...Array(this.count)];
	}

	constructor() {}
}
