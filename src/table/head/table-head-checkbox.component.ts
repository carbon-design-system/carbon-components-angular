import {
	Component,
	Input,
	Output,
	HostBinding,
	EventEmitter
} from "@angular/core";
import { I18n } from "./../../i18n/i18n.module";

@Component({
	// tslint:disable-next-line: component-selector
	selector: "[ibmTableHeadCheckbox]",
	template: `
		<ibm-checkbox
			inline="true"
			[size]="size !== ('lg' ? 'sm' : 'md')"
			[checked]="checked"
			[indeterminate]="indeterminate"
			[attr.aria-label]="ariaLabel | async"
			(change)="change.emit()">
		</ibm-checkbox>
	`
})
export class TableHeadCheckbox {
	@Input() size = "md";

	@Input() checked = false;

	@Input() indeterminate = false;

	@Input() ariaLabel = this.i18n.get("TABLE.CHECKBOX_HEADER");

	@Output() change = new EventEmitter<boolean>();

	@HostBinding("class.bx--table-column-checkbox") hostClass = true;

	@HostBinding("attr.style") hostStyle = "width: 10px;";

	constructor(protected i18n: I18n) { }
}
