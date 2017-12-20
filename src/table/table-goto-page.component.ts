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

@Component({
	selector: "n-table-goto-page",
	template: `
	<form class="table-footer_page-form">
		<label class="sr-only" [for]="id">Page number</label>
		<input class="input-number--sm" type="number" [id]="id" [name]="id" [(ngModel)]="pageNumber">
		<button class="btn--secondary-sm" type="submit" (click)="selectPage.emit(pageNumber)">Go to page</button>
	</form>
	`,
	encapsulation: ViewEncapsulation.None
})
export class TableGotoPage {
	/**
	 * Variable used for creating unique ids for TableGotoPage components.
	 * @type {number}
	 * @static
	 * @memberof TableGotoPage
	 */
	static tablePageFormCount = 0;

	/**
	 * ...
	 * @type {number}
	 * @memberof TableGotoPage
	 */
	@Input() pageNumber: number;

	/**
	 * The unique id for the TableGotoPage component.
	 * @type {string}
	 * @memberof TableGotoPage
	 */
	@Input() id = `tableGoToPage-${TableGotoPage.tablePageFormCount}`;

	/**
	 * ...
	 * @memberof TableGotoPage
	 */
	@Output() selectPage = new EventEmitter<number>();

	/**
	 * Creates an instance of `TableGotoPageComponent`.
	 * @param {ChangeDetectorRef} changeDetectorRef
	 * @memberof TableGotoPage
	 */
	constructor(protected changeDetectorRef: ChangeDetectorRef) {
		TableGotoPage.tablePageFormCount++;
	}

}
