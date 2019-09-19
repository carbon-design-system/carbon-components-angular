import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
	selector: "[ibmTable]"
})
export class TableDirective {
	@Input() @HostBinding("class.bx--data-table--sort") sortable = true;

	@Input() @HostBinding("class.bx--data-table--zebra") striped = false;

	@Input() @HostBinding("class.bx--skeleton") skeleton = false;

	/**
	 * Size of the table rows.
	 */
	@Input() size: "sm" | "sh" | "md" | "lg" = "md";

	@HostBinding("class.bx--data-table") tableClass = true;

	@HostBinding("class.bx--data-table--compact") get compactClass() {
		return this.size === "sm";
	}

	@HostBinding("class.bx--data-table--tall") get tallClass() {
		return this.size === "lg";
	}

	@HostBinding("class.bx--data-table--short") get shortClass() {
		return this.size === "sh";
	}
}
