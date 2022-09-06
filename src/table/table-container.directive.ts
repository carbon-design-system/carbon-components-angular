import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[ibmTableContainer]"
})
export class TableContainer {
	@HostBinding("class.cds--data-table-container") containerClass = true;
}
