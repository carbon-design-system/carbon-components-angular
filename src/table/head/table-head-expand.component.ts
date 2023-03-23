import {
	Component,
	HostBinding
} from "@angular/core";

@Component({
	// tslint:disable-next-line: component-selector
	selector: "[cdsTableHeadExpand], [ibmTableHeadExpand]",
	template: `
		<ng-content></ng-content>
	`
})
export class TableHeadExpand {
	@HostBinding("class.cds--table-expand") hostClass = true;
}
