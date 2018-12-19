import { Component, Input, ContentChildren, QueryList, AfterContentInit, Output, EventEmitter } from "@angular/core";
import { ListRow } from "./list-row.component";
import { ListHeader } from "./list-header.component";

@Component({
	selector: "ibm-structured-list",
	template: `
		<section
			class="bx--structured-list"
			[ngClass]="{
				'bx--structured-list--border': border,
				'bx--structured-list--selection': selection,
				'bx--structured-list--condensed': condensed,
				'bx--structured-list-content--nowrap': nowrap
			}">
			<ng-content select="ibm-list-header"></ng-content>
			<div class="bx--structured-list-tbody">
				<ng-content></ng-content>
			</div>
		</section>
	`
})
export class StructuredList implements AfterContentInit {

	static listCount = 0;

	/**
	 * Set to true to enable radio like selection of the rows.
	 */
	@Input() selection = false;
	@Input() border = false;
	@Input() condensed = false;
	@Input() nowrap = false;
	/**
	 * Used when `selection = true` as the row radio group `name`
	 */
	@Input() name = `structured-list-${StructuredList.listCount++}`;

	@Output() selected: EventEmitter<any> = new EventEmitter<any>();

	@ContentChildren(ListRow) rows: QueryList<ListRow>;
	@ContentChildren(ListHeader) headers: QueryList<ListHeader>;

	ngAfterContentInit() {
		const setSelection = (rowOrHeader: ListRow | ListHeader) => {
			rowOrHeader.selection = this.selection;
		};

		this.headers.forEach(setSelection);
		this.rows.forEach(row => {
			setSelection(row);
			row.name = this.name;
			row.change.subscribe(event => {
				this.selected.emit({
					value: row.value,
					selected: row.selected,
					name: this.name
				});
			});
		});
	}
}
