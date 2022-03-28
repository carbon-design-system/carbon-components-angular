import {
	Component,
	Input,
	Output,
	EventEmitter
} from "@angular/core";

/**
 * Used to present a single navigation item in a pagination list
 *
 *  * ```html
 * <ibm-pagination-nav-item [page]="5" [isActive]="false" (click)="handleClick(value)"></ibm-pagination-nav-item>
 * ```
 */
@Component({
	selector: "ibm-pagination-nav-item",
	template: `
		<li class="bx--pagination-nav__list-item">
			<button
				type="button"
				class="bx--pagination-nav__page"
				[ngClass]="{ 'bx--pagination-nav__page--active': isActive }"
				(click)="click.emit(page)">
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
