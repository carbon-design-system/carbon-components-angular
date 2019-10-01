import {
	Component,
	Input
} from "@angular/core";

@Component({
	// tslint:disable-next-line: component-selector
	selector: "[ibmTableData]",
	template: `
		<ng-container *ngIf="!item.template">{{item.data}}</ng-container>
		<ng-template
			[ngTemplateOutlet]="item.template" [ngTemplateOutletContext]="{data: item.data}">
		</ng-template>
	`
})
export class TableData {
	@Input() item;

	@Input() skeleton = false;
}
