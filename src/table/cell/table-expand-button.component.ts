import {
	Component,
	Input,
	Output,
	EventEmitter,
	HostBinding
} from "@angular/core";
import { I18n, Overridable } from "carbon-components-angular/i18n";
import { Observable } from "rxjs";

@Component({
	// tslint:disable-next-line: component-selector
	selector: "[cdsTableExpandButton], [ibmTableExpandButton]",
	template: `
		<button
			*ngIf="expandable"
			class="cds--table-expand__button"
			[attr.aria-label]="getAriaLabel() | async"
			(click)="expandRow.emit()">
			<svg cdsIcon="chevron--right" size="16" class="cds--table-expand__svg"></svg>
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

	@HostBinding("class.cds--table-expand") expandClass = true;

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
