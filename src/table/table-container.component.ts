import { Component, HostBinding } from "@angular/core";

@Component({
	selector: "ibm-table-container",
	template: `
		<div [ngClass]="{'bx--data-table-container': containerClass}">
			<ng-content></ng-content>
		</div>
	`
})
export class TableContainer { }
