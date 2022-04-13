import { Directive, HostBinding, Input } from "@angular/core";
import { TableRowSize } from "./table.types";

@Directive({
	selector: "[ibmTable]"
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

	@HostBinding("class.cds--data-table--compact") get compactClass() {
		return this.size === "sm";
	}

	@HostBinding("class.cds--data-table--tall") get tallClass() {
		return this.size === "lg";
	}

	@HostBinding("class.cds--data-table--short") get shortClass() {
		return this.size === "sh";
	}
}
