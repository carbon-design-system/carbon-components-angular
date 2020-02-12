import {
	Component,
	Input
} from "@angular/core";
import { TableItem } from "./../table-item.class";

@Component({
	// tslint:disable-next-line: component-selector
	selector: "[ibmTableData]",
	template: `
		<ng-container *ngIf="!item.template">
			{{item.data}}
		</ng-container>
		<span *ngIf="skeleton && !item.data"></span>
		<ng-template
			[ngTemplateOutlet]="item.template" [ngTemplateOutletContext]="{data: item.data}">
		</ng-template>
	`
})
export class TableData {
	@Input() item: TableItem;

	@Input() skeleton = false;
}
