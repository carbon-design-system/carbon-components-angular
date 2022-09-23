import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
	selector: "[ibmTableHeaderTitle]"
})
export class TableHeaderTitle {
	static counter = 0;

	@HostBinding("attr.id") @Input() id = `table-title-${TableHeaderTitle.counter++}`;
	@HostBinding("class.bx--data-table-header__title") titleClass = true;
}
