import { Component, HostBinding } from "@angular/core";

@Component({
	selector: "ibm-table-toolbar-search",
	template: `<ng-content></ng-content>`
})
export class TableToolbarSearch {
	@HostBinding("class.bx--toolbar-search-container") class = true;
}
