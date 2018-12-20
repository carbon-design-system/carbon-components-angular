import { Component, HostBinding, Input } from "@angular/core";

/**
 * ListColumn represents a single column in a StructuredList.
 *
 * `ListColumn`s can be used in a `ListHeader` to specify the column headers, or in `ListRow`s to specify the column data.
 *
 * Example:
 * ```
 * <ibm-list-column nowrap="true">Column 1</ibm-list-column>
 * ```
 */
@Component({
	selector: "ibm-list-column",
	template: `<ng-content></ng-content>`
})
export class ListColumn {
	@HostBinding("class.bx--structured-list-th") isHeaderColumn = true;
	@HostBinding("class.bx--structured-list-td") isBodyColumn = true;
	/**
	 * Applies `white-space: nowrap` to the content of this ListColumn
	 */
	@HostBinding("class.bx--structured-list-content--nowrap") @Input() nowrap = false;
}
