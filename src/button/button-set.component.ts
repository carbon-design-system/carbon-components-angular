import { Component, HostBinding } from "@angular/core";

@Component({
	selector: "ibm-button-set",
	template: "<ng-content></ng-content>"
})
export class ButtonSet {
	@HostBinding("class.bx--btn-set") buttonSetClass = true;
}
