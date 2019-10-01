import {
	Component,
	HostBinding
} from "@angular/core";

@Component({
	// tslint:disable-next-line: component-selector
	selector: "[ibmTableHeadExpand]",
	template: `
		<ng-content></ng-content>
	`
})
export class TableHeadExpand {
	@HostBinding("class.bx--table-expand") hostClass = true;
}
