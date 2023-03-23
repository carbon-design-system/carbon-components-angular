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
 * <cds-pagination-nav-item [page]="5" [isActive]="false" (click)="handleClick(value)"></cds-pagination-nav-item>
 * ```
 */
@Component({
	selector: "cds-pagination-nav-item, ibm-pagination-nav-item",
	template: `
		<li class="cds--pagination-nav__list-item">
			<button
				type="button"
				class="cds--pagination-nav__page"
				[ngClass]="{ 'cds--pagination-nav__page--active': isActive }"
				(click)="click.emit(page)">
				<span class="cds--pagination-nav__accessibility-label">
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
