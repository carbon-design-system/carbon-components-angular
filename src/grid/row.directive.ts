import {
	Directive,
	HostBinding,
	Input
} from "@angular/core";

@Directive({
	selector: "[cdsRow], [ibmRow]"
})
export class RowDirective {
	@HostBinding("class.cds--row") baseClass = true;
	@HostBinding("class.cds--row--condensed") @Input() condensed = false;
	@HostBinding("class.cds--row--narrow") @Input() narrow = false;
}
