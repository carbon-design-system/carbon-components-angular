import {
	Component,
	Input
} from "@angular/core";
import { TableItem } from "../table-item.class";

@Component({
	// tslint:disable-next-line: component-selector
	selector: "[cdsTableData], [ibmTableData]",
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

	@Input() skeleton = false;
}
