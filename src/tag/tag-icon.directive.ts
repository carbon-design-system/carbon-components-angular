import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[cdsTagIcon], [ibmTagIcon]"
})
export class TagIconDirective {
	@HostBinding("class.cds--tag__custom-icon") tagIcon = true;
}
