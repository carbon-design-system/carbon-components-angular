import {
	Component,
	Input,
	Output,
	EventEmitter,
	ElementRef
} from "@angular/core";
import { I18n } from "./../../i18n/i18n.module";
import { TableItem } from "./../table-item.class";

@Component({
	// tslint:disable-next-line: component-selector
	selector: "[ibmTableCheckbox]",
	template: `
		<ibm-checkbox
			inline="true"
			[aria-label]="label | i18nReplace:getSelectionLabelValue(row) | async"
			[size]="size"
			[checked]="selected"
			(change)="change.emit()">
		</ibm-checkbox>
	`
})
export class TableCheckbox {
	@Input() row: any[];

	@Input() selected = false;

	/**
	 * Size of the table rows.
	 */
	@Input() size: "sm" | "md" | "lg" = "md";

	@Input() set label(value) {
		if (value) {
			this._label.next(value);
		}
	}
	get label() {
		return this._label;
	}

	/**
	 * Used to populate the row selection checkbox label with a useful value if set.
	 *
	 * Example:
	 * ```
	 * <ibm-table [selectionLabelColumn]="0"></ibm-table>
	 * <!-- results in aria-label="Select first column value"
	 * (where "first column value" is the value of the first column in the row -->
	 * ```
	 */
	@Input() selectionLabelColumn: number;

	@Input() skeleton = false;

	/**
	 * Emits if a single row is selected.
	 */
	@Output() change = new EventEmitter();

	protected _label = this.i18n.get("TABLE.CHECKBOX_ROW");

	constructor(protected elementRef: ElementRef, protected i18n: I18n) { }

	getSelectionLabelValue(row: TableItem[]) {
		if (!this.selectionLabelColumn) {
			return { value: this.i18n.get().TABLE.ROW };
		}
		return { value: row[this.selectionLabelColumn].data };
	}
}
