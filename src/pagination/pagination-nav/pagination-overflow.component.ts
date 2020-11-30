import {
	Component,
	Input,
	Output,
	EventEmitter
} from "@angular/core";
/**
 * Used to present a selection of pages when there is an overflow
 * in the pagination list
 *
 * * ```html
 * <ibm-pagination-overflow [fromIndex]="5" [count]="30" (change)="handleChange(value)"></ibm-pagination-overflow>
 * ```
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
				*ngFor="let item of countAsArray; let i = index">
					{{fromIndex + i + 1}}
				</option>
			</select>
			<div class="bx--pagination-nav__select-icon-wrapper">
				<svg
					ibmIcon="overflow-menu--horizontal"
					size="16"
					style="display: inherit"
					class="bx--pagination-nav__select-icon">
				</svg>
			</div>
			</div>
		</li>
		<ibm-pagination-nav-item *ngIf="count === 1" [page]="fromIndex + 1"></ibm-pagination-nav-item>
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

	get countAsArray() {
		return [...Array(this.count)];
	}

	constructor() {}

	handleChange(event) {
		event.target.value = "";
	}
}
