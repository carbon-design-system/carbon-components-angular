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

@Component({
	selector: "app-table",
	template: `
		<ibm-table
			[model]="model"
			[size]="size"
			[skeleton]="skeleton"
			[showSelectionColumn]="showSelectionColumn"
			[enableSingleSelect]="enableSingleSelect"
			(rowClick)="onRowClick($event)"
			[sortable]="sortable"
			[stickyHeader]="stickyHeader"
			[striped]="striped"
			[isDataGrid]="isDataGrid">
			<ng-content></ng-content>
		</ibm-table>
	`
})
export class TableStory implements OnInit, OnChanges {
	@Input() model = new TableModel();
	@Input() size = "md";
	@Input() showSelectionColumn = true;
	@Input() enableSingleSelect = false;
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
		this.model.selectAllChange.subscribe(event => console.log(event ? "All rows selected!" : "All rows deselected!"));

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

	onRowClick(index: number) {
		console.log("Row item selected:", index);
	}
}
