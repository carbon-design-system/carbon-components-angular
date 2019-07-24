import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[ibmTableHeaderTitle]"
})
export class TableHeaderTitle {
	@HostBinding("class.bx--data-table-header__title") titleClass = true;
}
