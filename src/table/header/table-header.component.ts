import { Component, HostBinding } from "@angular/core";

@Component({
	selector: "ibm-table-header",
	template: `
		<ng-content></ng-content>
	`
})
export class TableHeader {
	@HostBinding("class.bx--data-table-header") headerClass = true;
	@HostBinding("style.display") displayStyle = "block";
}
