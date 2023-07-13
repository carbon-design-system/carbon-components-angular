import { Component, HostBinding } from "@angular/core";

@Component({
	selector: "cds-button-set, ibm-button-set",
	template: "<ng-content></ng-content>"
})
export class ButtonSet {
	@HostBinding("class.cds--btn-set") buttonSetClass = true;
}
