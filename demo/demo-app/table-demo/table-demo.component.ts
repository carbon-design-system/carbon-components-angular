import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import {
	TableItem,
	TableHeaderItem,
	TableModel
} from "./../../../src/table/table.module";

class FilterableHeaderItem extends TableHeaderItem {
	filterString: string;

	constructor(rawData?: any) {
		super(rawData);
		this.filterString = rawData ? rawData.filterString : this.filterString;
	}

	filter(item: TableItem): boolean {
		if (item.data instanceof String && item.data.indexOf(this.filterString) >= 0 ||
		item.data.name && item.data.name.indexOf(this.filterString) >= 0 ||
		item.data.surname && item.data.surname.indexOf(this.filterString) >= 0) {
			this.filterCount = 1;
			return true;
		}
		this.filterCount = 0;
		return false;
	}
}

@Component({
	selector: "table-demo",
	template: `
	<h1>Table demo</h1>

	<h2>Large table</h2>
	<p>Default state</p>

	<button class="btn" (click)="model.addRow()">Add row</button>
	<button class="btn" (click)="model.addColumn()">Add column</button><br>

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

	<n-table [model]="model" (sort)="sort($event)" #table></n-table>


	<h2>Default table</h2>
	<p>Default state</p>

	<n-table [model]="model"></n-table>
	`,
	styleUrls: ["./table-demo.component.css"]
})
export class TableDemo implements OnInit {
	public model = new TableModel();

	@ViewChild("filterableHeaderTemplate")
	private filterableHeaderTemplate: TemplateRef<any>;
	@ViewChild("customTableItemTemplate")
	private customTableItemTemplate: TemplateRef<any>;

	ngOnInit() {
		this.model.data = [
			[new TableItem({data: "asdf"}), new TableItem({data: {name: "Lessy", link: "/table"}, template: this.customTableItemTemplate})],
			[new TableItem({data: "csdf"}), new TableItem({data: "swer"})],
			[new TableItem({data: "bsdf"}), new TableItem({data: {name: "Alice", surname: "Bob"}, template: this.customTableItemTemplate})]
		];

		this.model.header = [
			new TableHeaderItem({data: "hwer"}),
			new FilterableHeaderItem({data: {name: "Custom header", link: "/table"}, template: this.filterableHeaderTemplate})
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
