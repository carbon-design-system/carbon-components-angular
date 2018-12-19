import { Component, HostBinding, Input } from "@angular/core";

@Component({
	selector: "ibm-list-column",
	template: `<ng-content></ng-content>`
})
export class ListColumn {
	@HostBinding("class.bx--structured-list-th") isHeaderColumn = true;
	@HostBinding("class.bx--structured-list-td") isBodyColumn = true;
	@HostBinding("class.bx--structured-list-content--nowrap") @Input() nowrap = false;
}
