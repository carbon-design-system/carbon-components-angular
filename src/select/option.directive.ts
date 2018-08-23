import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "option"
})
export class Option {
	@HostBinding("class") inputClass = "bx--select-option";
}
