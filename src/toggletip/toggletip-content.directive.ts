import {
	Directive,
	HostBinding
} from "@angular/core";

@Directive({
	selector: "[ibmToggletipContent]"
})
export class ToggletipContent {
	@HostBinding("class.cds--toggletip-content") toggletipContent = true;
}
