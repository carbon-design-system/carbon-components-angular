import { Component, HostBinding, ContentChildren, QueryList, AfterContentInit } from "@angular/core";
import { ListColumn } from "./list-column.component";

@Component({
	selector: "ibm-list-header",
	template: `
		<div class="bx--structured-list-row bx--structured-list-row--header-row">
			<div *ngIf="selection" class="bx--structured-list-th"></div>
			<ng-content></ng-content>
		</div>
	`
})
export class ListHeader implements AfterContentInit {
	@HostBinding("class.bx--structured-list-thead") wrapper = true;

	@ContentChildren(ListColumn) columns: QueryList<ListColumn>;

	selection = false;

	ngAfterContentInit() {
		this.columns.forEach(column => {
			column.isBodyColumn = false;
			column.isHeaderColumn = true;
		});
	}
}
