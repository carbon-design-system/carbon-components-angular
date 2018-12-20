import {
	Component,
	HostBinding,
	ContentChildren,
	QueryList,
	AfterContentInit
} from "@angular/core";
import { ListColumn } from "./list-column.component";

/**
 * `ListHeader` provides a container for the `ListColumn`s that make up the header of a structured list.
 *
 * Example:
 * ```
 * 	<ibm-list-header>
 *		<ibm-list-column nowrap="true">Column 1</ibm-list-column>
 *		<ibm-list-column nowrap="true">Column 2</ibm-list-column>
 *		<ibm-list-column>Column 3</ibm-list-column>
 *	</ibm-list-header>
 * ```
 */
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

	/**
	 * Set by the containing `StructuredList`. Adds a dummy header for the selection column when set to true.
	 */
	selection = false;

	ngAfterContentInit() {
		this.columns.forEach(column => {
			column.isBodyColumn = false;
			column.isHeaderColumn = true;
		});
	}
}
