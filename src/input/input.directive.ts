import { Directive, HostBinding } from "@angular/core";

@Directive({
	selector: "[ibmText]"
})
export class TextInput {
	@HostBinding("class") inputClass = "bx--text-input";
}
