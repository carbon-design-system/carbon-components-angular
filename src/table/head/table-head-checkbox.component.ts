import {
	Component,
	Input,
	Output,
	HostBinding,
	EventEmitter
} from "@angular/core";
import { I18n, Overridable } from "./../../i18n/i18n.module";
import { Observable } from "rxjs";

@Component({
	// tslint:disable-next-line: component-selector
	selector: "[ibmTableHeadCheckbox]",
	template: `
		<ibm-checkbox
			*ngIf="!skeleton"
			inline="true"
			[size]="(size !== 'sm' ? 'md' : 'sm')"
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
	/**
	 * Size of the table rows.
	 */
	@Input() size: "sm" | "sh" | "md" | "lg" = "md";

	@Input() checked = false;

	@Input() indeterminate = false;

	@Input() skeleton = false;

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
