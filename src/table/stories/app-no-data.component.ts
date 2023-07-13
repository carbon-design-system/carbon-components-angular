import {
	Component,
	OnInit,
	Input,
	OnChanges,
	SimpleChanges
} from "@angular/core";
import { TableModel } from "../table-model.class";
import { TableHeaderItem } from "../table-header-item.class";

@Component({
	selector: "app-no-data-table",
	template: `
		<cds-table
			[skeleton]="skeleton"
			[model]="model"
			[size]="size"
			[showSelectionColumn]="showSelectionColumn"
			[striped]="striped"
			[isDataGrid]="isDataGrid">
			<ng-content></ng-content>
		</cds-table>
	`
})
export class TableNoDataStory implements OnInit, OnChanges {
	@Input() model = new TableModel();
	@Input() size = "md";
	@Input() showSelectionColumn = true;
	@Input() striped = true;
	@Input() sortable = true;
	@Input() isDataGrid = false;
	@Input() skeleton = false;

	ngOnInit() {
		this.model.header = [
			new TableHeaderItem({
				data: "Name"
			}),
			new TableHeaderItem({
				data: "hwer",
				className: "my-class"
			})
		];
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.sortable) {
			for (let column of this.model.header) {
				column.sortable = changes.sortable.currentValue;
			}
		}
	}
}
