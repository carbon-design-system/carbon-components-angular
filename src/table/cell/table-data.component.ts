import {
	Component,
	Input
} from "@angular/core";
import { TableItem } from "../table-item.class";
import { NgTemplateOutlet } from "@angular/common";

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: "[cdsTableData], [ibmTableData]",
	template: `
		@if (!skeleton && !item.template) {
			{{item.data}}
		}
		@if (!skeleton) {
			<ng-template [ngTemplateOutlet]="item.template" [ngTemplateOutletContext]="{data: item.data}" />
		}
	`,
	standalone: true,
	imports: [NgTemplateOutlet]
})
export class TableData {
	@Input() item: TableItem;

	@Input() skeleton = false;
}
