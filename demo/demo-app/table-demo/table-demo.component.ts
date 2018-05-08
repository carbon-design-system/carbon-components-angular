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
			return false;
		}
		return true;
	}

	set filterCount(n) {}
	get filterCount() {
		return (this.filterData && this.filterData.data && this.filterData.data.length > 0) ? 1 : 0;
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
	selector: "app-table-demo",
	template: `
	<h1 class="p-demo-heading">Table</h1>

	<h2 class="p-demo-section">Size Variations</h2>
	<h3 class="p-demo-variation">Small table</h3>
	<n-table size="sm" [model]="simpleModel1" (sort)="simpleSort1($event)"></n-table>

	<h3 class="p-demo-variation">Normal table</h3>
	<n-table [model]="simpleModel2" (sort)="simpleSort2($event)"></n-table>

	<h3 class="p-demo-variation">Normal table with single select and no actions on headers</h3>
	<n-table [model]="simpleModel7" [showSelectionColumn]="false" [enableSingleSelect]="true"></n-table>

	<h3 class="p-demo-variation">Large table</h3>
	<n-table size="lg" [model]="simpleModel3" (sort)="simpleSort3($event)"></n-table>

	<h2 class="p-demo-section">Table with contextual rows</h2>
	<n-table [model]="contextModel" (sort)="simpleSort($event)"></n-table>

	<h2 class="p-demo-section">Custom table</h2>
	<h3 class="p-demo-variation">Add row to see loading indicator and end of content button</h3>

	<button class="btn--primary" (click)="customModel.addRow()">Add row</button>
	<button class="btn--primary" (click)="customModel.addColumn()">Add column</button>
	<button class="btn--primary" (click)="striped = !striped">Toggle striped</button><br>

	<button class="btn--primary" (click)="table.showSelectionColumn = !table.showSelectionColumn">Toggle select</button>
	<button class="btn--primary" *ngFor="let column of customModel.header" (click)="column.visible = !column.visible">
		Toggle {{column.data}}
	</button><br>

	<button class="btn--primary" *ngFor="let column of customModel.header; let i = index"
		(click)="customModel.deleteColumn(i)">
		Delete {{column.data}}
	</button><br>

	<button class="btn--primary" (click)="customModel.header[0].style.width = (toNumber(customModel.header[0].style.width)-10) + 'px'">
		Decrease column width
	</button>
	<button class="btn--primary" (click)="customModel.header[0].style.width = (toNumber(customModel.header[0].style.width)+10) + 'px'">
		Increase column width
	</button>

	<button class="btn--primary" (click)="resetCustomModelData()">Reset model data</button>

	<br>
	<button class="btn--primary" (click)="programmaticSelect(customModel)">Select first row</button>

	<n-table
		[model]="customModel"
		[striped]="striped"
		(sort)="customSort($event)"
		(scrollLoad)="scrollLoad($event)"
		#table>
	</n-table>
	<footer class="table-footer">
		<span class="table-footer_row-count">
			{{customModel.selectedRowsCount()}} of {{customModel.totalDataLength}} rows selected
		</span>
	</footer>

	<h2 class="p-demo-section">Full table</h2>

	<button class="btn--primary" (click)="model.totalDataLength = model.totalDataLength - model.pageLength">Remove page</button>
	<button class="btn--primary" (click)="model.totalDataLength = model.totalDataLength + model.pageLength">Add page</button>
	<n-table [model]="model" (sort)="fullSort($event)"></n-table>
	<footer class="table-footer--pagination">
		<span class="table-footer_row-count">{{model.selectedRowsCount()}} of {{model.totalDataLength}} rows selected</span>
		<n-table-pagination [model]="model" (selectPage)="selectPage($event)"></n-table-pagination>
		<n-table-goto-page (selectPage)="selectPage($event)"></n-table-goto-page>
	</footer>




	<ng-template #filterableHeaderTemplate let-data="data">
		<i><a [routerLink]="data.link">{{data.name}}</a></i>
	</ng-template>

	<ng-template #customTableItemTemplate let-data="data">
		<a [routerLink]="data.link">{{data.name}} {{data.surname}}</a>
	</ng-template>

	<ng-template #filter let-popover="popover" let-filter="data">
		<n-label class="first-label">
			Value
			<input type="text" [(ngModel)]="filter1" class="input-field">
		</n-label>
	</ng-template>

	<ng-template #filterFooter let-popover="popover" let-filter="data">
		<button class="btn--primary" (click)="filter.data = filter1; popover.doClose()">Apply</button>
		<button class="btn--secondary" (click)="popover.doClose()">Cancel</button>
	</ng-template>
	`,
	styleUrls: ["./table-demo.component.scss"],
	encapsulation: ViewEncapsulation.None
})
export class TableDemo implements OnInit {
	public simpleModel1 = new TableModel();
	public simpleModel2 = new TableModel();
	public simpleModel7 = new TableModel();
	public simpleModel3 = new TableModel();
	public customModel = new TableModel();
	public contextModel = new TableModel();
	public model = new TableModel();
	numPages = 0;

	@ViewChild("filterableHeaderTemplate")
	private filterableHeaderTemplate: TemplateRef<any>;
	@ViewChild("filter")
	private filter: TemplateRef<any>;
	@ViewChild("filterFooter")
	private filterFooter: TemplateRef<any>;
	@ViewChild("customTableItemTemplate")
	private customTableItemTemplate: TemplateRef<any>;

	constructor(private service: TableDemoService) {}

	resetCustomModelData() {
		this.customModel.data = [
			[new TableItem({data: "asdf"}), new TableItem({data: {name: "Lessy", link: "/table"}, template: this.customTableItemTemplate})],
			[new TableItem({data: "csdf"}), new TableItem({data: "swer"})],
			[new TableItem({data: "bsdf"}), new TableItem({data: {name: "Alice", surname: "Bob"}, template: this.customTableItemTemplate})],
			[new TableItem({data: "csdf"}), new TableItem({data: "twer"})],
		];
	}

	ngOnInit() {
		// simple model
		this.simpleModel1.data = [
			[new TableItem({data: "asdf"}), new TableItem({data: "qwer"})],
			[new TableItem({data: "csdf"}), new TableItem({data: "zwer"})],
			[new TableItem({data: "bsdf"}), new TableItem({data: "swer"})],
			[new TableItem({data: "csdf"}), new TableItem({data: "twer"})]
		];
		this.simpleModel1.header = [
			new TableHeaderItem({data: "hsdf"}), new TableHeaderItem({data: "hwer", style: {"width": "auto"} })
		];

		// simple model
		this.simpleModel2.data = [
			[new TableItem({data: "asdf"}), new TableItem({data: "qwer"})],
			[new TableItem({data: "csdf"}), new TableItem({data: "zwer"})],
			[new TableItem({data: "bsdf"}), new TableItem({data: "swer"})],
			[new TableItem({data: "csdf"}), new TableItem({data: "twer"})]
		];
		this.simpleModel2.header = [
			new TableHeaderItem({data: "hsdf"}), new TableHeaderItem({data: "hwer", style: {"width": "auto"} })
		];

		// simple model
		this.simpleModel7.data = [
			[new TableItem({data: "asdf"}), new TableItem({data: "qwer"})],
			[new TableItem({data: "csdf"}), new TableItem({data: "zwer"})],
			[new TableItem({data: "bsdf"}), new TableItem({data: "swer"})],
			[new TableItem({data: "csdf"}), new TableItem({data: "twer"})]
		];
		this.simpleModel7.header = [
			new TableHeaderItem({data: "hsdf"}), new TableHeaderItem({data: "hwer", style: {"width": "auto"} })
		];

		// simple model
		this.simpleModel3.data = [
			[new TableItem({data: "asdf"}), new TableItem({data: "qwer"})],
			[new TableItem({data: "csdf"}), new TableItem({data: "zwer"})],
			[new TableItem({data: "bsdf"}), new TableItem({data: "swer"})],
			[new TableItem({data: "csdf"}), new TableItem({data: "twer"})]
		];
		this.simpleModel3.header = [
			new TableHeaderItem({data: "hsdf"}), new TableHeaderItem({data: "hwer", style: {"width": "auto"} })
		];

		// custom model
		this.customModel.data = [
			[new TableItem({data: "asdf"}), new TableItem({data: {name: "Lessy", link: "/table"}, template: this.customTableItemTemplate})],
			[new TableItem({data: "csdf"}), new TableItem({data: "swer"})],
			[new TableItem({data: "bsdf"}), new TableItem({data: {name: "Alice", surname: "Bob"}, template: this.customTableItemTemplate})],
			[new TableItem({data: "csdf"}), new TableItem({data: "twer"})],
		];
		this.customModel.header = [
			new TableHeaderItem({data: "Very long title indeed"}),
			new FilterableHeaderItem({
				data: {name: "Custom header", link: "/table"},
				template: this.filterableHeaderTemplate,
				filterTemplate: this.filter,
				filterFooter: this.filterFooter,
				style: {"width": "auto"}
			})
		];

		this.contextModel.data = [
			[new TableItem({data: "Success row"}), new TableItem({data: "qwer"})],
			[new TableItem({data: "Warning row"}), new TableItem({data: "zwer"})],
			[new TableItem({data: "Information row"}), new TableItem({data: "swer"})],
			[new TableItem({data: "Error row"}), new TableItem({data: "twer"})]
		];
		this.contextModel.header = [
			new TableHeaderItem({data: "Context"}), new TableHeaderItem({data: "hwer", style: {"width": "auto"} })
		];
		this.contextModel.rowsContext[0] = "success";
		this.contextModel.rowsContext[1] = "warning";
		this.contextModel.rowsContext[2] = "info";
		this.contextModel.rowsContext[3] = "error";

		// full model
		this.model.header = [
			new TableHeaderItem({data: "hwer"}),
			new FilterableHeaderItem({
				data: {name: "Custom header", link: "/table"},
				template: this.filterableHeaderTemplate,
				filterTemplate: this.filter,
				filterFooter: this.filterFooter,
				style: {"width": "auto"}
			})
		];

		this.model.pageLength = 4;
		this.model.totalDataLength = 20;
		this.selectPage(1);
	}

	simpleSort(index: number) {
		this.sort(this.contextModel, index);
	}

	simpleSort1(index: number) {
		this.sort(this.simpleModel1, index);
	}
	simpleSort2(index: number) {
		this.sort(this.simpleModel2, index);
	}
	simpleSort3(index: number) {
		this.sort(this.simpleModel3, index);
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
			// set the data and update page
			this.model.data = this.prepareData(data);
			this.model.currentPage = page;
		});
	}

	scrollLoad(model: TableModel) {
		model.isLoading = true;
		this.numPages++;
		this.service.getPage(0).then((data: Array<Array<any>>) => {
			if (this.numPages > 3) {
				model.isLoading = false;
				model.isEnd = true;
				return;
			}
			this.prepareData(data).forEach(row => {
				model.addRow(row);
			});

			model.isLoading = false;
		});
	}

	toNumber(width: string): number {
		return Number(width.substr(0, width.length - 2));
	}

	programmaticSelect(model) {
		model.selectRow(0, !model.rowsSelected[0]);
	}

	private prepareData(data: Array<Array<any>>) {
		// create new data from the service data
		let newData = [];
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
		return newData;
	}
}
