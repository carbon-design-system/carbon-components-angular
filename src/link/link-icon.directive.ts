import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[ibmLinkIcon], [cdsLinkIcon]"
})
export class LinkIconDirective {
	@HostBinding("class.cds--link__icon") iconClass = true;
}
