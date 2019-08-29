import {
	Component,
	Input,
	Output,
	EventEmitter,
	HostBinding
} from "@angular/core";
import { I18n } from "./../../i18n/i18n.module";
import { Observable } from "rxjs";

@Component({
	// tslint:disable-next-line: component-selector
	selector: "[ibmTableExpandButton]",
	template: `
		<button
			*ngIf="expandable"
			class="bx--table-expand__button"
			[attr.aria-label]="getAriaLabel() | async"
			(click)="expandRow.emit()">
			<ibm-icon-chevron-right16 innerClass="bx--table-expand__svg"></ibm-icon-chevron-right16>
		</button>
	`
})
export class TableExpandButton {
	/**
	 * Set to true to indicate the row has expanded
	 */
	@Input() expanded = false;
	/**
	 * Set to true to indicate the row can be expanded.
	 * Defaults to false to allow for correct column alignment
	 */
	@Input() expandable = false;

	@Input()
	set ariaLabel(value: string | Observable<string>) {
		this._ariaLabel.override(value);
	}

	get ariaLabel() {
		return this._ariaLabel.value;
	}

	@Input() skeleton = false;

	@HostBinding("class.bx--table-expand") expandClass = true;

	@HostBinding("attr.data-previous-value") get previousValue() {
		return this.expanded ? "collapsed" : null;
	}

	@Output() expandRow = new EventEmitter<void>();

	protected _ariaLabel = this.i18n.getOverridable("TABLE.EXPAND_BUTTON");

	constructor(protected i18n: I18n) { }

	getAriaLabel(): Observable<string> {
		return this._ariaLabel.subject;
	}
}
