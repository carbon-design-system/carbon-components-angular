import {
	Component,
	Input,
	Output,
	EventEmitter
} from "@angular/core";
import { I18n } from "carbon-components-angular/i18n";

/**
 * Used to present a selection of pages when there is an overflow
 * in the pagination list
 *
 * * ```html
 * <cds-pagination-overflow [fromIndex]="5" [count]="30" (change)="handleChange(value)"></cds-pagination-overflow>
 * ```
 */
@Component({
	selector: "cds-pagination-overflow, ibm-pagination-overflow",
	template: `
		<li class="cds--pagination-nav__list-item" *ngIf="count > 1">
			<div class="cds--pagination-nav__select">
			<select
				[attr.aria-label]="ariaLabel"
				class="cds--pagination-nav__page cds--pagination-nav__page--select"
				(change)="handleChange($event)">
				<option value="" hidden></option>
				<option
				*ngFor="let item of countAsArray; let i = index">
					{{fromIndex + i + 1}}
				</option>
			</select>
			<div class="cds--pagination-nav__select-icon-wrapper">
				<svg
					cdsIcon="overflow-menu--horizontal"
					size="16"
					style="display: inherit"
					class="cds--pagination-nav__select-icon">
				</svg>
			</div>
			</div>
		</li>
		<cds-pagination-nav-item *ngIf="count === 1" [page]="fromIndex + 1"></cds-pagination-nav-item>
	`
})
export class PaginationOverflow {
	/**
	 * The page for this component to dipslay
	 */
	@Input() fromIndex: number;

	@Input() count: number;

	@Input() ariaLabel: string = this.i18n.get().PAGINATION.SELECT_ARIA;

	/**
	 * Emits click event
	 */
	@Output() change = new EventEmitter<number>();

	get countAsArray() {
		return [...Array(this.count)];
	}

	constructor(protected i18n: I18n) {}

	handleChange(event) {
		this.change.emit(+event.target.value);
		event.target.value = "";
	}
}
