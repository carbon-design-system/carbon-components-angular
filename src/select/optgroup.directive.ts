import { Directive, HostBinding } from "@angular/core";

@Directive({
	// eslint-disable-next-line @angular-eslint/directive-selector
	selector: "optgroup"
})
export class OptGroup {
	@HostBinding("class") inputClass = "cds--select-optgroup";
}
