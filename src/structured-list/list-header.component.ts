import {
	Component,
	HostBinding,
	ContentChildren,
	QueryList,
	AfterContentInit,
	Input
} from "@angular/core";
import { ListColumn } from "./list-column.component";

/**
 * `ListHeader` provides a container for the `ListColumn`s that make up the header of a structured list.
 *
 * Example:
 * ```html
 * 	<cds-list-header>
 *		<cds-list-column nowrap="true">Column 1</cds-list-column>
 *		<cds-list-column nowrap="true">Column 2</cds-list-column>
 *		<cds-list-column>Column 3</cds-list-column>
 *	</cds-list-header>
 * ```
 */
@Component({
	selector: "cds-list-header, ibm-list-header",
	template: `
		<div class="cds--structured-list-row cds--structured-list-row--header-row" role="row">
			<ng-content></ng-content>
			<div *ngIf="selection" class="cds--structured-list-th"></div>
		</div>
	`
})
export class ListHeader implements AfterContentInit {
	@HostBinding("class.cds--structured-list-thead") wrapper = true;
	@HostBinding("attr.role") role = "rowgroup";

	@Input()
	set skeleton(value: any) {
		this._skeleton = value;
		this.updateChildren();
	}

	get skeleton(): any {
		return this._skeleton;
	}

	@ContentChildren(ListColumn) columns: QueryList<ListColumn>;

	/**
	 * Set by the containing `StructuredList`. Adds a dummy header for the selection column when set to true.
	 */
	selection = false;

	protected _skeleton = false;

	ngAfterContentInit() {
		this.columns.forEach(column => {
			column.isBodyColumn = false;
			column.isHeaderColumn = true;
		});
		this.updateChildren();
	}

	protected updateChildren() {
		if (this.columns) {
			this.columns.toArray().forEach(child => child.skeleton = this.skeleton);
		}
	}
}
