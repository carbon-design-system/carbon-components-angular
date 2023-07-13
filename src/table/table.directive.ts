import { Directive, HostBinding, Input } from "@angular/core";
import { TableRowSize } from "./table.types";

@Directive({
	selector: "[cdsTable], [ibmTable]"
})
export class TableDirective {
	@Input() @HostBinding("class.cds--data-table--sort") sortable = true;

	@Input() @HostBinding("class.cds--data-table--no-border") noBorder = true;

	@Input() @HostBinding("class.cds--data-table--zebra") striped = false;

	@Input() @HostBinding("class.cds--skeleton") skeleton = false;

	/**
	 * Size of the table rows.
	 */
	@Input() size: TableRowSize = "md";

	@HostBinding("class.cds--data-table") tableClass = true;

	// Bind table size class
	@HostBinding("class.cds--data-table--xs") get extraSmallSize() { return this.size === "xs"; }
	@HostBinding("class.cds--data-table--sm") get smallSize() { return this.size === "sm"; }
	@HostBinding("class.cds--data-table--md") get mediumSize() { return this.size === "md"; }
	@HostBinding("class.cds--data-table--lg") get LargeSize() { return this.size === "lg"; }
	@HostBinding("class.cds--data-table--xl") get extraLargeSize() { return this.size === "xl"; }

}
