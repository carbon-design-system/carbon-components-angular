import { Component, OnInit } from "@angular/core";
import { Column } from "./../../../src/table/table.module";

@Component({
	selector: "table-demo",
	template: `
	<h1>Table Demo</h1>

	<p>demo controls</p>
	<button (click)="update()" class="btn">update rows</button>
	<button (click)="deleteSelected()" class="btn" >delete selected</button>
	<button (click)="cvis = !cvis" class="btn" >toggle col c</button>
	<hr/>
	<div class="table">
		<n-table
			[rows]="availableRows"
			striped="true"
			(selectAll)="selectAll($event)"
			(selectRow)="select($event)">
			<n-column
				key="a"
				title="A"
				width="200"
				(sort)="sortA($event)">
				<ng-template #headerTemplate>A</ng-template>
				<ng-template #cellTemplate let-data="data">col 1 {{data}}</ng-template>
			</n-column>
			<n-column
				key="b"
				title="B"
				(sort)="sort($event)"
				resizeable="false">
				<ng-template #headerTemplate>B</ng-template>
				<ng-template #cellTemplate let-data="data">column two {{data}}</ng-template>
			</n-column>
			<n-column
				*ngIf="cvis"
				key="c"
				title="C"
				width="200">
				<ng-template #headerTemplate>C</ng-template>
				<ng-template #cellTemplate let-data="data">{{data}}</ng-template>
			</n-column>
		</n-table>
	</div>
	`,
	styleUrls: ["./table-demo.component.css"]
})
export class TableDemo implements OnInit {
	private availableRows = [];
	private updates = 0;
	private cvis = false;
	private selected = {};

	ngOnInit() {
		this.rows();
	}

	rows() {
		let test = [];
		for (let i = 0; i < 1000; i++) {
			test.push({
				a: i,
				b: i + "B",
				c: i + "C"
			});
		}
		this.availableRows = test;
	}

	update() {
		let test = [];
		this.updates++;
		for (let i = 0; i < 100; i++) {
			test.push({
				a: i + `Aupdated${this.updates}`,
				b: i + `Bupdated${this.updates}`,
				c: 1 + `Cupdated${this.updates}`
			});
		}
		this.availableRows = test;
	}

	sortA(ev) {
		if (ev.direction === Column.sort.descending) {
			this.availableRows.sort((a, b) => a[ev.key] - b[ev.key]);
		} else {
			this.availableRows.sort((a, b) => b[ev.key] - a[ev.key]);
		}
	}

	sort(ev) {
		if (ev.direction === Column.sort.descending) {
			this.availableRows.sort();
		} else {
			this.availableRows.sort().reverse();
		}
	}

	select(ev) {
		if (ev.selected) {
			this.selected[ev.index] = ev.row;
		} else {
			delete this.selected[ev.index];
		}
	}

	selectAll(ev) {
		if (ev.selected) {
			this.selected = {all: true};
		} else {
			this.selected = {};
		}
	}

	deleteSelected() {
		let keys = Object.keys(this.selected);
		for (let i = 0; i < keys.length; i++) {
			let idx = this.availableRows.indexOf(this.selected[keys[i]]);
			this.availableRows.splice(idx, 1);
		}
		this.selected = {};
	}
}
