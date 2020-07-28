import {
	Component,
	Input,
	Output,
	HostBinding,
	EventEmitter
} from "@angular/core";
import { I18n, Overridable } from "carbon-components-angular/i18n";
import { Observable } from "rxjs";
import { TableRowSize } from "../table.types";

@Component({
	// tslint:disable-next-line: component-selector
	selector: "[ibmTableHeadCheckbox]",
	template: `
		<ibm-checkbox
			*ngIf="!skeleton"
			inline="true"
			[size]="(size !== 'sm' ? 'md' : 'sm')"
			[name]="name"
			[checked]="checked"
			[indeterminate]="indeterminate"
			(click)="change.emit()"
			[aria-label]="getAriaLabel() | async">
		</ibm-checkbox>
	`,
	styles: [`
        :host { width: 10px; }
    `]
})
export class TableHeadCheckbox {
	private static tableSelectAllCount = 0;
	/**
	 * Size of the table rows.
	 */
	@Input() size: TableRowSize = "md";

	@Input() checked = false;

	@Input() indeterminate = false;

	@Input() skeleton = false;

	@Input() name = `select-all-${TableHeadCheckbox.tableSelectAllCount++}`;

	@Input()
	set ariaLabel(value: string | Observable<string>) {
		this._ariaLabel.override(value);
	}

	get ariaLabel() {
		return this._ariaLabel.value;
	}

	@Output() change = new EventEmitter<void>();

	@HostBinding("class.bx--table-column-checkbox") hostClass = true;

	protected _ariaLabel = this.i18n.getOverridable("TABLE.CHECKBOX_HEADER");

	constructor(protected i18n: I18n) { }

	getAriaLabel(): Observable<string> {
		return this._ariaLabel.subject;
	}
}
