import {
	Directive,
	HostBinding,
	Input
} from "@angular/core";

@Directive({
	selector: "[cdsTableHeaderTitle], [ibmTableHeaderTitle]"
})
export class TableHeaderTitle {
	static counter = 0;

	@HostBinding("attr.id") @Input() id = `table-title-${TableHeaderTitle.counter++}`;
	@HostBinding("class.cds--data-table-header__title") titleClass = true;
}
