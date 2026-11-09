import {
	Component,
	Input,
	Output,
	EventEmitter,
	HostBinding,
	inject
} from "@angular/core";
import { I18n } from "carbon-components-angular/i18n";
import { Observable } from "rxjs";
import { IconDirective } from "carbon-components-angular/icon";
import { AsyncPipe } from "@angular/common";

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: "[cdsTableExpandButton], [ibmTableExpandButton]",
	template: `
		@if (expandable) {
			<button
				class="cds--table-expand__button"
				[attr.aria-label]="getAriaLabel() | async"
				(click)="expandRow.emit()">
				<svg cdsIcon="chevron--right" size="16" class="cds--table-expand__svg"></svg>
			</button>
		}
	`,
	imports: [IconDirective, AsyncPipe]
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

	protected i18n = inject(I18n);

	protected _ariaLabel = this.i18n.getOverridable("TABLE.EXPAND_BUTTON");

	/** Inserted by Angular inject() migration for backwards compatibility */
	// eslint-disable-next-line @angular-eslint/prefer-inject -- backwards-compatible DI overload until next major
	constructor(...args: unknown[]);

	constructor() {}

	getAriaLabel(): Observable<string> {
		return this._ariaLabel.subject;
	}
}
