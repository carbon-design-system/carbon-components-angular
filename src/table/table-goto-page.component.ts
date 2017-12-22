import { TableModel } from "./table.module";
import {
	Component,
	ApplicationRef,
	Input,
	Output,
	ViewChild,
	ContentChildren,
	EventEmitter,
	ViewEncapsulation,
	ChangeDetectorRef
} from "@angular/core";

/**
 * TableGotoPage is a child component to the Table component.
 *
 * ```html
 * <n-table-goto-page (selectPage)="selectPage($event)"></n-table-goto-page>
 * ```
 *
 * @export
 * @class TableGotoPage
 */
@Component({
	selector: "n-table-goto-page",
	template: `
	<form class="table-footer_page-form">
		<label class="sr-only" [for]="id">Page number</label>
		<input class="input-number--sm" type="number" [id]="id" [name]="id" [(ngModel)]="pageNumber">
		<button class="btn--secondary-sm" type="submit" (click)="selectPage.emit(pageNumber)">Go to page</button>
	</form>
	`
})
export class TableGotoPage {
	/**
	 * Variable used for creating unique ids for the input in TableGotoPage components.
	 * @type {number}
	 * @static
	 * @memberof TableGotoPage
	 */
	static tableGotoPageCount = 0;

	/**
	 * Variable used to track the input field value.
	 * @type {number}
	 * @memberof TableGotoPage
	 */
	@Input() pageNumber: number;

	/**
	 * The unique id for the TableGotoPage component input.
	 * @type {string}
	 * @memberof TableGotoPage
	 */
	@Input() id = `tableGoToPage-${TableGotoPage.tableGotoPageCount}`;

	/**
	 * Emits the new page number of the table.
	 * @param {number} pageNumber
	 * @memberof TableGotoPage
	 */
	@Output() selectPage = new EventEmitter<number>();

	/**
	 * Creates an instance of `TableGotoPage`.
	 * @param {ChangeDetectorRef} changeDetectorRef
	 * @memberof TableGotoPage
	 */
	constructor(protected changeDetectorRef: ChangeDetectorRef) {
		TableGotoPage.tableGotoPageCount++;
	}
}
