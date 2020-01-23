import {
	Component,
	OnInit,
	Input,
	OnChanges,
	SimpleChanges
} from "@angular/core";
import { TableModel } from "../table-model.class";
import { TableHeaderItem } from "../table-header-item.class";
import { TableItem } from "../table-item.class";

function sort(model, index: number) {
	if (model.header[index].sorted) {
		// if already sorted flip sorting direction
		model.header[index].ascending = model.header[index].descending;
	}
	model.sort(index);
}

@Component({
	selector: "app-table",
	template: `
		<ibm-table
			style="display: block; width: 650px;"
			[model]="model"
			[size]="size"
			[skeleton]="skeleton"
			[showSelectionColumn]="true"
			[enableSingleSelect]="false"
			(rowItemClick)="onRowItemClick($event)"
			[sortable]="sortable"
			[stickyHeader]="stickyHeader"
			[striped]="striped"
			[isDataGrid]="isDataGrid"
			(sort)="simpleSort($event)">
			<ng-content></ng-content>
		</ibm-table>
	`
})
export class TableStory implements OnInit, OnChanges {
	@Input() model = new TableModel();
	@Input() size = "md";
	@Input() showSelectionColumn = true;
	@Input() striped = true;
	@Input() sortable = true;
	@Input() isDataGrid = false;
	@Input() noData = false;
	@Input() stickyHeader = false;
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

		this.model.rowsSelectedChange.subscribe(event => console.log(event));

		if (!this.noData && !this.skeleton) {
			this.model.data = [
				[new TableItem({ data: "Name 1" }), new TableItem({ data: "qwer" })],
				[new TableItem({ data: "Name 3" }), new TableItem({ data: "zwer" })],
				[new TableItem({ data: "Name 2" }), new TableItem({ data: "swer" })],
				[new TableItem({ data: "Name 4" }), new TableItem({data: "twer"})],
				[new TableItem({ data: "Name 5" }), new TableItem({data: "twer"})],
				[new TableItem({ data: "Name 6" }), new TableItem({data: "twer"})],
				[new TableItem({ data: "Name 7" }), new TableItem({data: "twer"})]
			];
		}
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.sortable) {
			for (let column of this.model.header) {
				column.sortable = changes.sortable.currentValue;
			}
		}
	}

	onRowItemClick(index: number) {
		console.log("Row item selected:", index);
	}

	simpleSort(index: number) {
		sort(this.model, index);
	}
}
