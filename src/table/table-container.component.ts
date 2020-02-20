import { Component, HostBinding } from "@angular/core";

@Component({
	selector: "ibm-table-container",
	template: `<div><ng-content></ng-content></div>`
})
export class TableContainer {
	@HostBinding("class.bx--data-table-container") containerClass = true;
}
