import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	HostBinding,
	Input,
	inject
} from "@angular/core";

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
		@if (skeleton) {
			<span></span>
		}
		<ng-content />
	`,
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListColumn {
	/**
	 * Set by the containing `ListHeader`
	 */
	@Input() set skeleton(value: boolean) {
		this._skeleton = value;
		this.changeDetectorRef.markForCheck();
	}

	get skeleton() {
		return this._skeleton;
	}

	@HostBinding("attr.role") role = "cell";
	@HostBinding("class.cds--structured-list-th") isHeaderColumn = true;
	@HostBinding("class.cds--structured-list-td") isBodyColumn = true;
	/**
	 * Applies `white-space: nowrap` to the content of this `ListColumn`
	 */
	@HostBinding("class.cds--structured-list-content--nowrap") @Input() nowrap = false;

	protected changeDetectorRef = inject(ChangeDetectorRef);
	protected _skeleton = false;
}
