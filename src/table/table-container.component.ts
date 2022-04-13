import { Component, HostBinding } from "@angular/core";

@Component({
	selector: "ibm-table-container",
	template: `<ng-content></ng-content>`,
	styles: [`
		:host { display: block }
	`]
})
export class TableContainer {
	@HostBinding("class.cds--data-table-container") containerClass = true;
}
