import {
	Component,
	HostBinding,
	Input
} from "@angular/core";

@Component({
	// tslint:disable-next-line: component-selector
	selector: "[ibmTableExpandedRow]",
	template: `
		<td
			[ibmDataGridFocus]="isDataGrid"
			[(columnIndex)]="columnIndex"
			[attr.colspan]="row.length + 2"
			(click)="setExpandIndex()">
			<ng-container *ngIf="!firstExpandedTemplateInRow(row)">
				{{firstExpandedDataInRow(row)}}
			</ng-container>
			<ng-template
				[ngTemplateOutlet]="firstExpandedTemplateInRow(row)"
				[ngTemplateOutletContext]="{data: firstExpandedDataInRow(row)}">
			</ng-template>
		</td>
	`
})
export class TableExpandedRow {
	@Input() row: any[];

	@Input() columnIndex = 0;

	@Input() isDataGrid = false;

	@Input() skeleton = false;

	@HostBinding("class.bx--expandable-row") expandableRowClass = true;

	@HostBinding("attr.data-child-row") @Input() expanded = false;

	setExpandIndex() {
		this.columnIndex = 0;
	}

	firstExpandedTemplateInRow(row) {
		const found = row.find(d => d.expandedTemplate);
		if (found) {
			return found.expandedTemplate;
		}
		return found;
	}

	firstExpandedDataInRow(row) {
		const found = row.find(d => d.expandedData);
		if (found) {
			return found.expandedData;
		}
		return found;
	}
}
