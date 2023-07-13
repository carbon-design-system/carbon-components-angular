import { Component, HostBinding } from "@angular/core";

/**
 * Container for `HeaderAction`s.
 */
@Component({
	selector: "cds-header-global, ibm-header-global",
	template: `
		<ng-content></ng-content>
	`
})
export class HeaderGlobal {
	@HostBinding("class.cds--header__global") hostClass = true;
}
