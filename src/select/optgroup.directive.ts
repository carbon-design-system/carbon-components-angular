import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "optgroup"
})
export class OptGroup {
	@HostBinding("class") inputClass = "bx--select-option";
}
