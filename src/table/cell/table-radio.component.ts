import {
	Component,
	Input,
	Output,
	EventEmitter,
	HostBinding
} from "@angular/core";
import { I18n } from "carbon-components-angular/i18n";
import { TableItem } from "../table-item.class";
import { TableRow } from "../table-row.class";
import { Observable } from "rxjs";

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: "[cdsTableRadio], [ibmTableRadio]",
	template: `
		@if (!skeleton) {
			<cds-radio
				[attr.aria-label]="getLabel() | i18nReplace:getSelectionLabelValue(row) | async"
				[ariaLabel]="getLabel() | i18nReplace:getSelectionLabelValue(row) | async"
				[checked]="selected"
				[disabled]="disabled"
				(change)="change.emit()">
			</cds-radio>
		}
	`
})
export class TableRadio {
	@Input() row: any[];

	@Input() selected = false;

	@Input()
	set label(value: string | Observable<string>) {
		this._label.override(value);
	}

	get label() {
		return this._label.value;
	}

	get disabled(): boolean {
		return this.row ? !!(this.row as TableRow).disabled : false;
	}

	@HostBinding("class.cds--table-column-radio") radioColumn = true;
	@HostBinding("class.cds--table-column-checkbox") selectableColumn = true;

	/**
	 * Used to populate the row selection checkbox label with a useful value if set.
	 *
	 * Example:
	 * ```
	 * <cds-table [selectionLabelColumn]="0"></cds-table>
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

	protected _label = this.i18n.getOverridable("TABLE.CHECKBOX_ROW");

	constructor(protected i18n: I18n) { }

	getSelectionLabelValue(row: TableItem[]) {
		if (!this.selectionLabelColumn) {
			return { value: this.i18n.get().TABLE.ROW };
		}
		return { value: row[this.selectionLabelColumn].data };
	}

	getLabel(): Observable<string> {
		return this._label.subject;
	}
}
