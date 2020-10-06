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
	selector: "ibm-pagination-nav-item",
	template: `
		<li class="bx--pagination-nav__list-item">
			<button
				type="button"
				class="bx--pagination-nav__page"
				[ngClass]="{ 'bx--pagination-nav__page--active': isActive }"
				(click)="click.emit(page)"
			>
				<span class="bx--pagination-nav__accessibility-label">
					{{page}}
				</span>
				{{page}}
			</button>
		</li>
	`
})
export class PaginationNavItem {
	/**
	 * The page for this component to dipslay
	 */
	@Input() page = 0;

	/**
	 * The state for this component to dipslay
	 */
	@Input() isActive = false;

	/**
	 * Emits click event
	 */
	@Output() click = new EventEmitter<number>();

	constructor() {}
}
