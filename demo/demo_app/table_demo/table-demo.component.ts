import { Component, OnInit } from "@angular/core";
import { Column } from "./../../../src/table/table.module";

@Component({
	selector: "table-demo",
	templateUrl: "./table-demo.component.html",
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
