import { Directive, HostBinding } from "@angular/core";

@Directive({
	// tslint:disable-next-line
	selector: "optgroup"
})
export class OptGroup {
	@HostBinding("class") inputClass = "cds--select-optgroup";
}
