import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[cdsToggletipContent], [ibmToggletipContent]",
	standalone: true
})
export class ToggletipContent {
	@HostBinding("class.cds--toggletip-content") toggletipContent = true;
}
