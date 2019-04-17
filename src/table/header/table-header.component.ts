import { Component, HostBinding } from "@angular/core";

@Component({
	selector: "ibm-table-header",
	template: `
		<ng-content selector="ibmTableHeaderTitle"></ng-content>
		<ng-content selector="ibmTableHeaderDescription"></ng-content>
	`
})
export class TableHeader {
	@HostBinding("class.bx--data-table-header") headerClass = true;
	@HostBinding("style.display") headerStyle = "block";
}
