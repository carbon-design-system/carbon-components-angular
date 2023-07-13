import { Component, HostBinding } from "@angular/core";

@Component({
	selector: "cds-table-header, ibm-table-header",
	template: `
		<ng-content></ng-content>
	`
})
export class TableHeader {
	@HostBinding("class.cds--data-table-header") headerClass = true;
	@HostBinding("style.display") displayStyle = "block";
}
