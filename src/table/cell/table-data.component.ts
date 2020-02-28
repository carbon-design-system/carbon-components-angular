import {
	Component,
	Input
} from "@angular/core";
import { TableItem } from "./../table-item.class";

@Component({
	// tslint:disable-next-line: component-selector
	selector: "[ibmTableData]",
	template: `
		<ng-container *ngIf="!skeleton && !item.template">{{item.data}}</ng-container>
		<ng-template
			*ngIf="!skeleton"
			[ngTemplateOutlet]="item.template"
			[ngTemplateOutletContext]="{data: item.data}">
		</ng-template>
	`
})
export class TableData {
	@Input() item: TableItem;
	/**
	 * Enables or disables the skeleton state
	 *
	 * Note: boolean properties should be set using the `[skeleton]="true"` syntax.
	 * `skeleton="true"` will assign a string value of `"true"`
	 */
	@Input() skeleton = false;
}
