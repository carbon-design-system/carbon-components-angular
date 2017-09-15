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

import { TableDemoService } from "./table-demo.service";

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

	<h2>Simple table</h2>
	<n-table [model]="simpleModel" (sort)="simpleSort($event)"></n-table>

	<h2>Custom table</h2>

	<button class="btn--primary" (click)="customModel.addRow()">Add row</button>
	<button class="btn--primary" (click)="customModel.addColumn()">Add column</button>
	<button class="btn--primary" (click)="striped = !striped">Toggle striped</button><br>

	<button class="btn--primary" (click)="table.enableRowSelect = !table.enableRowSelect">Toggle select</button>
	<button class="btn--primary" *ngFor="let column of customModel.header" (click)="column.visible = !column.visible">
		Toggle {{column.data}}
	</button><br>

	<button class="btn--primary" *ngFor="let column of customModel.header; let i = index"
		(click)="customModel.deleteColumn(i)">
		Delete {{column.data}}
	</button>

	<n-table [model]="customModel" [striped]="striped" (sort)="customSort($event)" #table></n-table>
	<p>
		{{customModel.selectedRowsCount()}} of {{customModel.totalDataLength}} rows selected
	</p>

	<h2>Full table</h2>

	<n-table [model]="model" (sort)="fullSort($event)"></n-table>
	<p class="table-footer">
		<span class="table-selection-info">{{model.selectedRowsCount()}} of {{model.totalDataLength}} rows selected</span>
		<n-table-pagination [model]="model" (selectPage)="selectPage($event)"></n-table-pagination>
		<n-table-goto-page (selectPage)="selectPage($event)"></n-table-goto-page>
	</p>




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
			<button class="btn--primary" (click)="filter.data = filter1; popover.onClose()">Apply</button>
			<button class="btn--secondary" (click)="popover.onClose()">Cancel</button>
		</div>
	</ng-template>
	`,
	styleUrls: ["./table-demo.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class TableDemo implements OnInit {
	public simpleModel = new TableModel();
	public customModel = new TableModel();
	public model = new TableModel();

	@ViewChild("filterableHeaderTemplate")
	private filterableHeaderTemplate: TemplateRef<any>;
	@ViewChild("filter")
	private filter: TemplateRef<any>;
	@ViewChild("customTableItemTemplate")
	private customTableItemTemplate: TemplateRef<any>;

	constructor(private service: TableDemoService) {}

	ngOnInit() {
		// simple model
		this.simpleModel.data = [
			[new TableItem({data: "asdf"}), new TableItem({data: "qwer"})],
			[new TableItem({data: "csdf"}), new TableItem({data: "zwer"})],
			[new TableItem({data: "bsdf"}), new TableItem({data: "swer"})],
			[new TableItem({data: "csdf"}), new TableItem({data: "twer"})]
		];
		this.simpleModel.header = [
			new TableHeaderItem({data: "hsdf"}), new TableHeaderItem({data: "hwer"})
		];

		// custom model
		this.customModel.data = [
			[new TableItem({data: "asdf"}), new TableItem({data: {name: "Lessy", link: "/table"}, template: this.customTableItemTemplate})],
			[new TableItem({data: "csdf"}), new TableItem({data: "swer"})],
			[new TableItem({data: "bsdf"}), new TableItem({data: {name: "Alice", surname: "Bob"}, template: this.customTableItemTemplate})],
			[new TableItem({data: "csdf"}), new TableItem({data: "twer"})],
		];
		this.customModel.header = [
			new TableHeaderItem({data: "hwer"}),
			new FilterableHeaderItem({
				data: {name: "Custom header", link: "/table"},
				template: this.filterableHeaderTemplate,
				filterTemplate: this.filter
			})
		];

		// full model
		this.model.header = [
			new TableHeaderItem({data: "hwer"}),
			new FilterableHeaderItem({
				data: {name: "Custom header", link: "/table"},
				template: this.filterableHeaderTemplate,
				filterTemplate: this.filter
			})
		];

		this.model.pageLength = 4;
		this.model.totalDataLength = 20;
		this.selectPage(1);
	}

	simpleSort(index: number) {
		this.sort(this.simpleModel, index);
	}
	customSort(index: number) {
		this.sort(this.customModel, index);
	}
	fullSort(index: number) {
		this.sort(this.model, index);
	}
	sort(model, index: number) {
		if (model.header[index].sorted) {
			// if already sorted flip sorting direction
			model.header[index].ascending = model.header[index].descending;
		}
		model.sort(index);
	}

	selectPage(page) {
		this.service.getPage(page).then((data: Array<Array<any>>) => {
			let newData = [];

			// create new data from the service data
			data.forEach(dataRow => {
				let row = [];
				dataRow.forEach(dataElement => {
					row.push(new TableItem({
						data: dataElement,
						template: typeof dataElement === "string" ? undefined : this.customTableItemTemplate
						// your template can handle all the data types so you don't have to conditionally set it
						// you can also set different templates for different columns based on index
					}));
				});
				newData.push(row);
			});

			// set the data and update page
			this.model.data = newData;
			this.model.currentPage = page;
		});
	}
}
