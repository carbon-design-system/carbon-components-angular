import { Directive, HostBinding } from "@angular/core";

@Directive({
	// eslint-disable-next-line @angular-eslint/directive-selector
	selector: "option"
})
export class Option {
	@HostBinding("class") inputClass = "cds--select-option";
}
