import { Component, HostBinding } from "@angular/core";

@Component({
	selector: "cds-table-toolbar-actions, ibm-table-toolbar-actions",
	template: `<ng-content />`,
	standalone: true
})
export class TableToolbarActions {}
