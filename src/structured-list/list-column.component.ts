import { Component, HostBinding, Input } from "@angular/core";

/**
 * `ListColumn` represents a single column in a `StructuredList`.
 *
 * `ListColumn`s can be used in a `ListHeader` to specify the column headers, or in `ListRow`s to specify the column data.
 *
 * Example:
 * ```html
 * <cds-list-column nowrap="true">Column 1</cds-list-column>
 * ```
 */
@Component({
	selector: "cds-list-column, ibm-list-column",
	template: `
		<span *ngIf="skeleton"></span>
		<ng-content></ng-content>
	`
})
export class ListColumn {
	@Input() skeleton = false;

	@HostBinding("attr.role") role = "cell";
	@HostBinding("class.cds--structured-list-th") isHeaderColumn = true;
	@HostBinding("class.cds--structured-list-td") isBodyColumn = true;
	/**
	 * Applies `white-space: nowrap` to the content of this `ListColumn`
	 */
	@HostBinding("class.cds--structured-list-content--nowrap") @Input() nowrap = false;
}
