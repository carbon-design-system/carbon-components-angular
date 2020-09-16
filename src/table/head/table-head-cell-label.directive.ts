import {
	Directive,
	HostBinding
} from "@angular/core";

@Directive({
	selector: "[ibmTableHeadCellLabel]"
})


export class TableHeadCellLabel {
	@HostBinding("class.bx--table-header-label") baseClass = true;
}
