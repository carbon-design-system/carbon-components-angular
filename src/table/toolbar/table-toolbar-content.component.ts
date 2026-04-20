import { Component, HostBinding } from "@angular/core";

@Component({
	selector: "cds-table-toolbar-content, ibm-table-toolbar-content",
	template: `<ng-content />`,
	standalone: true
})
export class TableToolbarContent {
	@HostBinding("class.cds--toolbar-content") class = true;
}
