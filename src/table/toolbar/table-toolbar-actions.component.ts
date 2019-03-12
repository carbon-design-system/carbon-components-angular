import { Component, HostBinding } from "@angular/core";

@Component({
	selector: "ibm-table-toolbar-actions",
	template: `<ng-content></ng-content>`
})
export class TableToolbarActions {
	@HostBinding("class.bx--action-list") class = true;
}
