import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
	selector: "[cdsTableHeaderDescription], [ibmTableHeaderDescription]"
})
export class TableHeaderDescription {
	static counter = 0;

	@HostBinding("attr.id") @Input() id = `table-description-${TableHeaderDescription.counter++}`;
	@HostBinding("class.cds--data-table-header__description") descriptionClass = true;
}
