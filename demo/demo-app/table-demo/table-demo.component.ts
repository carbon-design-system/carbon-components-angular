import {
	Component,
	OnInit,
	ViewChild,
	ViewEncapsulation,
	TemplateRef
} from "@angular/core";
import {
	TableItem,
	TableHeaderItem,
	TableModel
} from "./../../../src/table/table.module";

class FilterableHeaderItem extends TableHeaderItem {
	// custom filter function
	filter(item: TableItem): boolean {
		if (typeof item.data === "string" && item.data.toLowerCase().indexOf(this.filterData.data.toLowerCase()) >= 0 ||
		item.data.name && item.data.name.toLowerCase().indexOf(this.filterData.data.toLowerCase()) >= 0 ||
		item.data.surname && item.data.surname.toLowerCase().indexOf(this.filterData.data.toLowerCase()) >= 0) {
			this.filterCount = 1;
			return false;
		}
		this.filterCount = 0;
		return true;
	}

	// used for custom sorting
	compare(one: TableItem, two: TableItem) {
		const stringOne = (one.data.name || one.data.surname || one.data).toLowerCase();
		const stringTwo = (two.data.name || two.data.surname || two.data).toLowerCase();

		if (stringOne > stringTwo) {
			return 1;
		} else if (stringOne < stringTwo) {
			return -1;
		} else {
			return 0;
		}
	}
}

@Component({
	selector: "table-demo",
	template: `
	<h1>Table demo</h1>

	<h2>Large table</h2>
	<p>Default state</p>

	<button class="btn" (click)="model.addRow()">Add row</button>
	<button class="btn" (click)="model.addColumn()">Add column</button>
	<button class="btn" (click)="striped = !striped">Toggle striped</button><br>

	<button class="btn" (click)="table.enableRowSelect = !table.enableRowSelect">Toggle select</button>
	<button class="btn" *ngFor="let column of model.header" (click)="column.visible = !column.visible">
		Toggle {{column.data}}
	</button><br>

	<button class="btn" *ngFor="let column of model.header; let i = index"
		(click)="model.deleteColumn(i)">
		Delete {{column.data}}
	</button>


	<ng-template #filterableHeaderTemplate let-data="data">
		<i><a [routerLink]="data.link">{{data.name}}</a></i>
	</ng-template>

	<ng-template #customTableItemTemplate let-data="data">
		<a [routerLink]="data.link">{{data.name}} {{data.surname}}</a>
	</ng-template>

	<ng-template #filter let-popover="popover" let-filter="filter">
		<div class="filter-options">
			<n-label class="first-label">
				<label for="filter1">Value</label>
				<input type="text" [(ngModel)]="filter1" class="input-field" id="filter1">
			</n-label>
		</div>
		<div class="filter-options-buttons">
			<button class="btn" (click)="filter.data = filter1; popover.onClose()">Apply</button>
			<button class="btn btn-secondary" (click)="popover.onClose()">Cancel</button>
		</div>
	</ng-template>

	<n-table [model]="model" [striped]="striped" (sort)="sort($event)" #table></n-table>
	<p>{{model.selectedRowsCount()}} of {{model.data.length}} rows selected</p>

	<h2>Default table</h2>
	<p>Default state</p>

	<n-table [model]="model"></n-table>
	`,
	styleUrls: ["./table-demo.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class TableDemo implements OnInit {
	public model = new TableModel();

	@ViewChild("filterableHeaderTemplate")
	private filterableHeaderTemplate: TemplateRef<any>;
	@ViewChild("filter")
	private filter: TemplateRef<any>;
	@ViewChild("customTableItemTemplate")
	private customTableItemTemplate: TemplateRef<any>;

	ngOnInit() {
		this.model.data = [
			[new TableItem({data: "asdf"}), new TableItem({data: {name: "Lessy", link: "/table"}, template: this.customTableItemTemplate})],
			[new TableItem({data: "csdf"}), new TableItem({data: "swer"})],
			[new TableItem({data: "bsdf"}), new TableItem({data: {name: "Alice", surname: "Bob"}, template: this.customTableItemTemplate})],
			[new TableItem({data: "csdf"}), new TableItem({data: "twer"})],
		];

		this.model.header = [
			new TableHeaderItem({data: "hwer"}),
			new FilterableHeaderItem({
				data: {name: "Custom header", link: "/table"},
				template: this.filterableHeaderTemplate,
				filterTemplate: this.filter
			})
		];
	}

	sort(index: number) {
		if (this.model.header[index].sorted) {
			// if already sorted flip sorting direction
			this.model.header[index].ascending = this.model.header[index].descending;
		}
		this.model.sort(index);
	}
}
