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
	selector: "n-table-pagination",
	template: `
	<div class="table-pagination">
		<a class="main-arrow" *ngIf="previousPage() != model.currentPage">
			<n-icon icon="chevron_left" size="sm" (click)="selectPage.emit(previousPage())"></n-icon>
		</a>
		<a
		*ngFor="let page of range(model.totalDataLength/model.pageLength, 1)"
		class="page-number"
		[ngClass]="{selected: model.currentPage == page}"
		(click)="selectPage.emit(page)">
			{{page}}
		</a><a class="main-arrow" *ngIf="nextPage() != model.currentPage">
			<n-icon icon="chevron_right" size="sm" (click)="selectPage.emit(nextPage())"></n-icon>
		</a>
	</div>
	`,
	styleUrls: ["./table-pagination.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class TablePagination {
	@Input() model: TableModel;
	@Output() selectPage = new EventEmitter<number>();

	constructor(private applicationRef: ApplicationRef) {}

	private range(count: number, offset = 0) {
		return count && count > 0 ? Array(Math.ceil(count)).fill(0).map((x, i) => i + offset) : [];
	}

	private previousPage(): number {
		return this.model.currentPage <= 1 ? 1 : this.model.currentPage - 1;
	}

	private nextPage(): number {
		const lastPage = Math.ceil(this.model.totalDataLength / this.model.pageLength);
		return this.model.currentPage >= lastPage ? lastPage : this.model.currentPage + 1;
	}
}
