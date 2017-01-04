import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-root",
	template: `
		<h1>
		  Table
		</h1>
		<p>demo controls</p>
		<button class="btn btn-primary" (click)="update()">update rows</button>
		<button class="btn btn-primary" (click)="deleteSelected()">delete selected</button>
		<button class="btn btn-primary" (click)="cvis = !cvis">toggle col c</button>
		<hr/>
		<div class="table">
			<cdl-table 
				[rows]="availableRows"
				[striped]="true"
				(selectAll)="select($event)"
				(selectRow)="select($event)">
				<cdl-column 
					key="a" 
					title="A"
					width="200px"
					(sort)="sortA($event)">
					<template let-data="data">col 1 {{data}}</template>
				</cdl-column>
				<cdl-column 
					key="b" 
					title="B"
					(sort)="sort($event)"
					resizeable="false">
					<template let-data="data">column two {{data}}</template>
				</cdl-column>
				<cdl-column
					*ngIf="cvis"
					key="c"
					title="C"
					width="200px">
					<template let-data="data">{{data}}</template>
				</cdl-column>
			</cdl-table>
		</div>
	`,
	styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
	private availableRows = [];
	private updates = 0;
	private cvis = false;

	ngOnInit() {
		this.rows();
	}

	rows() {
		let test = [];
		for (var i = 0; i < 1000; i++) {
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
		for (var i = 0; i < 100; i++) {
			test.push({
				a: i + `Aupdated${this.updates}`,
				b: i + `Bupdated${this.updates}`
			});
		}
		this.availableRows = test;
	}

	sortA(ev) {
		if(ev.direction === "up") {
			this.availableRows.sort((a,b) => a[ev.key] - b[ev.key]);
		} else {
			this.availableRows.sort((a,b) => b[ev.key] - a[ev.key]);
		}
	}

	sort(ev) {
		if(ev.direction === "up") {
			this.availableRows.sort();
		} else {
			this.availableRows.sort().reverse();
		}
	}

	private selected = {};
	select(ev) {
		console.log(ev);
		if(ev.selected) {
			this.selected[ev.index] = ev.row;
		} else {
			delete this.selected[ev.index];
		}
	}

	deleteSelected() {
		let keys = Object.keys(this.selected);
		for (var i = 0; i < keys.length; i++) {
			let idx = this.availableRows.indexOf(this.selected[keys[i]]);
			this.availableRows.splice(idx, 1);
		}
		this.selected = {};
	}
}
