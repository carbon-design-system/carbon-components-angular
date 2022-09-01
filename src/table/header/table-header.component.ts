import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[ibmTableHeader]"
})
export class TableHeader {
	@HostBinding("class.cds--data-table-header") headerClass = true;
}
