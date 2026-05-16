import {
	Component,
	EventEmitter,
	HostBinding,
	Input,
	Output,
	inject
} from "@angular/core";
import { I18n } from "carbon-components-angular/i18n";
import { Observable } from "rxjs";
import { IconDirective } from "carbon-components-angular/icon";
import { AsyncPipe } from "@angular/common";

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: "[cdsTableHeadExpand], [ibmTableHeadExpand]",
	template: `
		@if (showExpandAllToggle) {
			<button
				class="cds--table-expand__button"
				[attr.aria-label]="getAriaLabel() | async"
				(click)="expandedChange.emit(!expanded)">
				<svg cdsIcon="chevron--right" size="16" class="cds--table-expand__svg"></svg>
			</button>
		} @else {
			<ng-content />
		}
	`,
	imports: [IconDirective, AsyncPipe]
})
export class TableHeadExpand {
	@HostBinding("class.cds--table-expand") hostClass = true;

	@Input() showExpandAllToggle = false;

	@Input() expanded = false;

	@Output() expandedChange = new EventEmitter<boolean>();

	@HostBinding("attr.data-previous-value") get previousValue() {
		return this.expanded ? "collapsed" : null;
	}

	protected i18n = inject(I18n);

	protected _ariaLabel = this.i18n.getOverridable("TABLE.EXPAND_ALL_BUTTON");

	/** Inserted by Angular inject() migration for backwards compatibility */
	// eslint-disable-next-line @angular-eslint/prefer-inject -- backwards-compatible DI overload until next major
	constructor(...args: unknown[]);

	constructor() {}

	getAriaLabel(): Observable<string> {
		return this._ariaLabel.subject;
	}
}
