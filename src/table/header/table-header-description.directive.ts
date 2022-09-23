import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
	selector: "[ibmTableHeaderDescription]"
})
export class TableHeaderDescription {
	static counter = 0;

	@Input() id = `table-description-${TableHeaderDescription.counter++}`;
	@HostBinding("class.bx--data-table-header__description") descriptionClass = true;
	@HostBinding("attr.id") setId = this.id;
}
