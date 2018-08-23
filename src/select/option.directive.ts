import { Directive, HostBinding } from "@angular/core";

@Directive({
	// tslint:disable-next-line
	selector: "option"
})
export class Option {
	@HostBinding("class") inputClass = "bx--select-option";
}
