import {
	AfterContentInit,
	Component,
	ContentChild,
	HostBinding
} from "@angular/core";
import { TableHeaderDescription } from "./header/table-header-description.directive";
import { TableHeaderTitle } from "./header/table-header-title.directive";
import { Table } from "./table.component";

@Component({
	selector: "ibm-table-container",
	template: `<ng-content></ng-content>`,
	styles: [`
		:host { display: block }
	`]
})
export class TableContainer implements AfterContentInit {
	@HostBinding("class.bx--data-table-container") containerClass = true;

	@ContentChild(TableHeaderTitle) headerTitle: TableHeaderTitle;
	@ContentChild(TableHeaderDescription) headerDescription: TableHeaderDescription;
	@ContentChild(Table) table: Table;

	ngAfterContentInit() {
		// Set aria properties if values exist otherwise keep undefined
		if (this.table) {
			// Using ternary instead of optional chaning since typescript version does not support it
			this.table.ariaLabelledby = this.headerTitle ? this.headerTitle.id : undefined;
			this.table.ariaDescribedby = this.headerDescription ? this.headerDescription.id : undefined;
		}
	}
}
