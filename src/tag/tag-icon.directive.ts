import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[cdsTagIcon], [ibmTagIcon]",
	standalone: true
})
export class TagIconDirective {
	@HostBinding("class.cds--tag__custom-icon") tagIcon = true;
}
