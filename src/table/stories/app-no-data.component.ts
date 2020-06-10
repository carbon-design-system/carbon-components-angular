import {
	Component,
	OnInit,
	Input,
	OnChanges,
	SimpleChanges
} from "@angular/core";
import { TableModel } from "carbon-components-angular/table-model.class";
import { TableHeaderItem } from "carbon-components-angular/table-header-item.class";

function sort(model, index: number) {
	if (model.header[index].sorted) {
		// if already sorted flip sorting direction
		model.header[index].ascending = model.header[index].descending;
	}
	model.sort(index);
}

@Component({
	selector: "app-no-data-table",
	template: `
		<ibm-table
			style="display: block; width: 650px;"
			[skeleton]="skeleton"
			[model]="model"
			[size]="size"
			[showSelectionColumn]="showSelectionColumn"
			[striped]="striped"
			[isDataGrid]="isDataGrid"
			(sort)="simpleSort($event)">
			<ng-content></ng-content>
		</ibm-table>
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

	simpleSort(index: number) {
		sort(this.model, index);
	}
}
