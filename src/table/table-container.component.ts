import { Component, HostBinding } from "@angular/core";

@Component({
	selector: "ibm-table-container",
	template: `<ng-content></ng-content>`
})
export class TableContainer {
	@HostBinding("class.bx--data-table-container") containerClass = true;
}
