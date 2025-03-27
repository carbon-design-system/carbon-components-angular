import {
	Component,
	HostBinding,
	Input
} from "@angular/core";

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: "[cdsTableExpandedRow], [ibmTableExpandedRow]",
	template: `
		<td [attr.colspan]="row.length + 2">
			@if (!firstExpandedTemplateInRow(row)) {
				{{firstExpandedDataInRow(row)}}
			}
			<ng-template [ngTemplateOutlet]="firstExpandedTemplateInRow(row)" [ngTemplateOutletContext]="{data: firstExpandedDataInRow(row)}" />
		</td>
	`
})
export class TableExpandedRow {
	@Input() row: any[];

	@Input() skeleton = false;

	@HostBinding("class.cds--expandable-row") expandableRowClass = true;

	@HostBinding("attr.data-child-row") dataChildRow = true;

	@Input() expanded = false;

	@HostBinding("style.display") get displayStyle() {
		return this.expanded ? null : "none";
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
