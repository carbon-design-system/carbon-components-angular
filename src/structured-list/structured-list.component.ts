import { Component, Input, ContentChildren, QueryList, AfterContentInit } from "@angular/core";
import { ListRow } from "./list-row.component";
import { ListHeader } from "./list-header.component";

@Component({
	selector: "ibm-structured-list",
	template: `
		<section
			class="bx--structured-list"
			[ngClass]="{
				'bx--structured-list--border': selection,
				'bx--structured-list--selection': selection
			}">
			<ng-content select="ibm-list-header"></ng-content>
			<div class="bx--structured-list-tbody">
				<ng-content></ng-content>
			</div>
		</section>
	`
})
export class StructuredList implements AfterContentInit {
	@Input() selection = false;

	@ContentChildren(ListRow) rows: QueryList<ListRow>;
	@ContentChildren(ListHeader) headers: QueryList<ListHeader>;

	ngAfterContentInit() {
		const setSelection = (rowOrHeader: ListRow | ListHeader) => {
			rowOrHeader.selection = this.selection;
		};

		this.rows.forEach(setSelection);
		this.headers.forEach(setSelection);
	}
}
