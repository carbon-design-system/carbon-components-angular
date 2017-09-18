import { TableModel } from "./table.module";
import {
	Component,
	ApplicationRef,
	Input,
	Output,
	ViewChild,
	ContentChildren,
	EventEmitter,
	ViewEncapsulation
} from "@angular/core";

@Component({
	selector: "n-table-goto-page",
	template: `
	<div class="table-goto-page">
		<input type="number" [(ngModel)]="pageNumber" class="input-number--sm">
		<button class="btn--primary-sm" (click)="selectPage.emit(pageNumber)">Go to page</button>
	</div>
	`,
	styleUrls: ["./table-goto-page.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class TableGotoPage {
	@Output() selectPage = new EventEmitter<number>();
}
