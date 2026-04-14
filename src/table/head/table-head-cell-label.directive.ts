import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[cdsTableHeadCellLabel], [ibmTableHeadCellLabel]",
	standalone: true
})
export class TableHeadCellLabel {
	@HostBinding("class.cds--table-header-label") baseClass = true;
}
