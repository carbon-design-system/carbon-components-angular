import {
	Component,
	Input,
	Output,
	HostBinding,
	EventEmitter
} from "@angular/core";
import { I18n } from "carbon-components-angular/i18n";
import { Observable } from "rxjs";

@Component({
	// tslint:disable-next-line: component-selector
	selector: "[cdsTableHeadCheckbox], [ibmTableHeadCheckbox]",
	template: `
		<cds-checkbox
			*ngIf="!skeleton"
			inline="true"
			[name]="name"
			[checked]="checked"
			[indeterminate]="indeterminate"
			(checkedChange)="change.emit()"
			[ariaLabel]="getAriaLabel() | async">
		</cds-checkbox>
	`,
	styles: [`
        :host { width: 10px; }
    `]
})
export class TableHeadCheckbox {
	private static tableSelectAllCount = 0;

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

	@HostBinding("class.cds--table-column-checkbox") hostClass = true;

	protected _ariaLabel = this.i18n.getOverridable("TABLE.CHECKBOX_HEADER");

	constructor(protected i18n: I18n) { }

	getAriaLabel(): Observable<string> {
		return this._ariaLabel.subject;
	}
}
