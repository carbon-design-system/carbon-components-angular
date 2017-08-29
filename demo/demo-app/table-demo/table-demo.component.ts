import { Component, OnInit } from "@angular/core";
import {
	TableItem,
	TableHeaderItem,
	TableModel
} from "./../../../src/table/table.module";

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

	<n-table [model]="model" #table></n-table>


	<h2>Default table</h2>
	<p>Default state</p>

	<n-table [model]="model"></n-table>
	`,
	styleUrls: ["./table-demo.component.css"]
})
export class TableDemo implements OnInit {
	public model = new TableModel();

	ngOnInit() {
		this.model.data = [
			[new TableItem({data: "asdf"}), new TableItem({data: "qwer"})],
			[new TableItem({data: "csdf"}), new TableItem({data: "swer"})],
			[new TableItem({data: "bsdf"}), new TableItem({data: "rwer"})]
		];

		this.model.header = [
			new TableHeaderItem({data: "hwer"}),
			new TableHeaderItem({data: "hsdf"})
		];
	}

	// sortA(ev) {
	// 	if (ev.direction === Column.sort.descending) {
	// 		this.availableRows.sort((a, b) => a[ev.key] - b[ev.key]);
	// 	} else {
	// 		this.availableRows.sort((a, b) => b[ev.key] - a[ev.key]);
	// 	}
	// }

	// sort(ev) {
	// 	if (ev.direction === Column.sort.descending) {
	// 		this.availableRows.sort();
	// 	} else {
	// 		this.availableRows.sort().reverse();
	// 	}
	// }
}
