import {
	Component,
	EventEmitter,
	HostBinding,
	Input,
	Output
} from "@angular/core";
import { I18n } from "carbon-components-angular/i18n";
import { Observable } from "rxjs";

@Component({
	// tslint:disable-next-line: component-selector
	selector: "[cdsTableHeadExpand], [ibmTableHeadExpand]",
	template: `
		<button
			class="cds--table-expand__button"
			[attr.aria-label]="getAriaLabel() | async"
			(click)="expandedChange.emit(!expanded)">
			<svg cdsIcon="chevron--right" size="16" class="cds--table-expand__svg"></svg>
		</button>
	`
})
export class TableHeadExpand {
	@HostBinding("class.cds--table-expand") hostClass = true;

	@Input() expanded = false;

	@Output() expandedChange = new EventEmitter<boolean>();

	@HostBinding("attr.data-previous-value") get previousValue() {
		return this.expanded ? "collapsed" : null;
	}

	protected _ariaLabel = this.i18n.getOverridable("TABLE.EXPAND_ALL_BUTTON");

	constructor(protected i18n: I18n) { }

	getAriaLabel(): Observable<string> {
		return this._ariaLabel.subject;
	}
}
